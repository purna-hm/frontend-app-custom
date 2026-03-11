---
name: anemic-domain-model
description: "Knowledge: anemic-domain-model"
version: "1.0"
---

# Anti-Pattern: Anemic Domain Model

## What It Is
Domain entities with no behavior, only getters/setters. All business logic in service layer.

---

## Example

```java
❌ BAD: Anemic model
@Entity
public class Order {
    private UUID id;
    private OrderStatus status;
    private BigDecimal totalAmount;
    private List<OrderItem> items;
    
    // Only getters/setters (no behavior)
}

@Service
public class OrderService {
    
    public void cancel(UUID orderId) {
        Order order = repository.findById(orderId).orElseThrow();
        
        // Business logic in service (should be in Order)
        if (order.getStatus() == OrderStatus.SHIPPED) {
            throw new BusinessRuleViolationException("Cannot cancel shipped order");
        }
        if (order.getTotalAmount().compareTo(BigDecimal.valueOf(1000)) > 0) {
            throw new BusinessRuleViolationException("Cannot cancel order > $1000");
        }
        
        order.setStatus(OrderStatus.CANCELLED);
        repository.save(order);
    }
}
```

---

## Solution: Rich Domain Model

```java
✅ GOOD: Rich model with behavior
@Entity
public class Order {
    private UUID id;
    private OrderStatus status;
    private BigDecimal totalAmount;
    private List<OrderItem> items;
    
    // Business logic in entity
    public void cancel() {
        if (status == OrderStatus.SHIPPED) {
            throw new BusinessRuleViolationException("Cannot cancel shipped order");
        }
        if (totalAmount.compareTo(BigDecimal.valueOf(1000)) > 0) {
            throw new BusinessRuleViolationException("Cannot cancel order > $1000");
        }
        this.status = OrderStatus.CANCELLED;
    }
    
    public boolean canBeCancelled() {
        return status != OrderStatus.SHIPPED && totalAmount.compareTo(BigDecimal.valueOf(1000)) <= 0;
    }
}

@Service
public class OrderService {
    
    public void cancel(UUID orderId) {
        Order order = repository.findById(orderId).orElseThrow();
        order.cancel();  // Business logic in entity
        repository.save(order);
    }
}
```

---

## When to Use

- **Anemic model**: Simple CRUD apps, data transfer
- **Rich model**: Complex business rules, domain-driven design

---

## Token Budget
~350 tokens
