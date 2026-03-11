---
name: idempotency
description: "Knowledge: idempotency"
version: "1.0"
---

# Pattern: Idempotency

## Problem
Duplicate requests (retries, network issues) can cause duplicate operations (double charge, duplicate order).

---

## Solution
Make operations **idempotent** — executing the same request multiple times has the same effect as executing it once.

---

## Implementation Strategies

### 1. Idempotency Key (Recommended for POST)

#### Client sends idempotency key
```
POST /api/v1/orders
Idempotency-Key: 550e8400-e29b-41d4-a716-446655440000

{
  "customerId": "...",
  "items": [...]
}
```

#### Server stores key + result
```java
@Entity
@Table(name = "idempotency_keys")
public class IdempotencyKey {
    @Id
    private String key;
    private String endpoint;
    private String responseBody;
    private int statusCode;
    private Instant createdAt;
}

@RestController
@RequiredArgsConstructor
public class OrderController {
    
    private final OrderService orderService;
    private final IdempotencyKeyRepository idempotencyRepository;
    
    @PostMapping
    public ResponseEntity<OrderResponse> create(
            @RequestHeader("Idempotency-Key") String idempotencyKey,
            @Valid @RequestBody CreateOrderRequest request) {
        
        // Check if already processed
        Optional<IdempotencyKey> existing = idempotencyRepository.findById(idempotencyKey);
        if (existing.isPresent()) {
            return ResponseEntity
                .status(existing.get().getStatusCode())
                .body(objectMapper.readValue(existing.get().getResponseBody(), OrderResponse.class));
        }
        
        // Process request
        OrderResponse response = orderService.create(request);
        
        // Store idempotency key
        IdempotencyKey key = new IdempotencyKey();
        key.setKey(idempotencyKey);
        key.setEndpoint("/api/v1/orders");
        key.setResponseBody(objectMapper.writeValueAsString(response));
        key.setStatusCode(201);
        key.setCreatedAt(Instant.now());
        idempotencyRepository.save(key);
        
        return ResponseEntity.status(201).body(response);
    }
}
```

### 2. Natural Idempotency (PUT, DELETE)

PUT and DELETE are naturally idempotent:
```
PUT /api/v1/orders/123 → Always sets order 123 to the given state
DELETE /api/v1/orders/123 → Always deletes order 123 (or 404 if not found)
```

### 3. Kafka Consumer Idempotency

Store processed event IDs:
```java
@KafkaListener(topics = "order-events")
public void handle(OrderCreatedEvent event) {
    // Check if already processed
    if (processedEventRepository.existsById(event.eventId())) {
        log.info("Event already processed: {}", event.eventId());
        return;
    }
    
    // Process event
    processOrder(event);
    
    // Mark as processed
    processedEventRepository.save(new ProcessedEvent(event.eventId(), Instant.now()));
}
```

---

## When to Use
- POST endpoints (non-idempotent by nature)
- Kafka consumers (at-least-once delivery)
- Payment processing
- Any operation with side effects

---

## Token Budget
~500 tokens
