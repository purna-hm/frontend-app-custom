---
name: cqrs
description: "Knowledge: cqrs"
version: "1.0"
---

# Pattern: CQRS (Command Query Responsibility Segregation)

## Problem
Complex read requirements (joins, aggregations, denormalization) conflict with write model simplicity.

---

## Solution
Separate **write model** (commands) from **read model** (queries).

### Architecture
```
Commands (Write)          Queries (Read)
    ↓                         ↑
Write Model              Read Model
(normalized)             (denormalized)
    ↓                         ↑
  Events  ─────────────────→  Projection
```

---

## Implementation (Spring Boot)

### Write Model (Command)
```java
@Service
@RequiredArgsConstructor
public class OrderCommandService {
    
    private final OrderRepository repository;
    private final ApplicationEventPublisher eventPublisher;
    
    @Transactional
    public UUID createOrder(CreateOrderRequest request) {
        Order order = mapper.toEntity(request);
        Order saved = repository.save(order);
        
        // Publish event for read model
        eventPublisher.publishEvent(new OrderCreatedEvent(saved.getId(), saved));
        
        return saved.getId();
    }
}
```

### Read Model (Query)
```java
@Entity
@Table(name = "order_summary_view")
public class OrderSummaryView {
    @Id
    private UUID orderId;
    private String customerName;
    private BigDecimal totalAmount;
    private int itemCount;
    private OrderStatus status;
    // Denormalized for fast queries
}

@Service
@RequiredArgsConstructor
public class OrderQueryService {
    
    private final OrderSummaryViewRepository repository;
    
    public Page<OrderSummaryView> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }
}
```

### Projection (Event Handler)
```java
@Component
@RequiredArgsConstructor
public class OrderSummaryProjection {
    
    private final OrderSummaryViewRepository repository;
    
    @EventListener
    @Transactional
    public void on(OrderCreatedEvent event) {
        OrderSummaryView view = new OrderSummaryView();
        view.setOrderId(event.orderId());
        view.setCustomerName(event.order().getCustomer().getName());
        view.setTotalAmount(event.order().getTotalAmount());
        view.setItemCount(event.order().getItems().size());
        view.setStatus(event.order().getStatus());
        repository.save(view);
    }
}
```

---

## When to Use
- Complex read requirements (reporting, dashboards)
- High read:write ratio (10:1 or more)
- Different scalability needs for reads vs writes

## When NOT to Use
- Simple CRUD apps
- Low read:write ratio
- Team unfamiliar with eventual consistency

---

## Token Budget
~400 tokens
