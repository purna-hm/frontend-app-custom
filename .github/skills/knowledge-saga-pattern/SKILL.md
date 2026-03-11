---
name: saga-pattern
description: "Knowledge: saga-pattern"
version: "1.0"
---

# Pattern: Saga Pattern

## Problem
Distributed transactions across multiple services cannot use traditional ACID transactions (no 2PC in microservices).

---

## Solution
Use **Saga pattern** to coordinate multi-service transactions with compensation.

### Two Approaches

#### 1. Orchestration (Recommended)
Central orchestrator coordinates the saga.

```
Orchestrator
    ↓ 1. Create Order
OrderService → SUCCESS
    ↓ 2. Reserve Inventory
InventoryService → SUCCESS
    ↓ 3. Process Payment
PaymentService → FAILURE
    ↓ 4. Compensate: Release Inventory
InventoryService → SUCCESS
    ↓ 5. Compensate: Cancel Order
OrderService → SUCCESS
```

#### 2. Choreography
Services communicate via events (no central coordinator).

```
OrderService → OrderCreated event
    ↓
InventoryService → InventoryReserved event
    ↓
PaymentService → PaymentFailed event
    ↓
InventoryService → InventoryReleased event
    ↓
OrderService → OrderCancelled event
```

---

## Implementation (Orchestration)

### Saga Orchestrator
```java
@Service
@RequiredArgsConstructor
public class OrderSagaOrchestrator {
    
    private final OrderService orderService;
    private final InventoryService inventoryService;
    private final PaymentService paymentService;
    
    public OrderResponse createOrder(CreateOrderRequest request) {
        UUID orderId = null;
        UUID reservationId = null;
        
        try {
            // Step 1: Create order
            orderId = orderService.create(request);
            
            // Step 2: Reserve inventory
            reservationId = inventoryService.reserve(request.items());
            
            // Step 3: Process payment
            paymentService.process(request.paymentDetails());
            
            // Success: Confirm order
            orderService.confirm(orderId);
            return orderService.findById(orderId);
            
        } catch (Exception e) {
            // Compensation: Rollback in reverse order
            if (reservationId != null) {
                inventoryService.release(reservationId);
            }
            if (orderId != null) {
                orderService.cancel(orderId);
            }
            throw new SagaFailedException("Order creation failed", e);
        }
    }
}
```

---

## When to Use
- Multi-service state changes (order + payment + inventory)
- Long-running business processes
- When eventual consistency is acceptable

## When NOT to Use
- Single-service transactions (use local transactions)
- When strong consistency is required

---

## Token Budget
~500 tokens
