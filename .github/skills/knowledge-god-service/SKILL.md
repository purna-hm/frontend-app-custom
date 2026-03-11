---
name: god-service
description: "Knowledge: god-service"
version: "1.0"
---

# Anti-Pattern: God Service

## What It Is
A service class with too many responsibilities, violating Single Responsibility Principle.

---

## Example

```java
❌ BAD: God Service
@Service
public class OrderService {
    
    // Order CRUD
    public OrderResponse create(CreateOrderRequest request) { ... }
    public OrderResponse update(UUID id, UpdateOrderRequest request) { ... }
    public void delete(UUID id) { ... }
    
    // Payment processing
    public PaymentResponse processPayment(UUID orderId, PaymentRequest request) { ... }
    
    // Inventory management
    public void reserveInventory(UUID orderId) { ... }
    public void releaseInventory(UUID orderId) { ... }
    
    // Notification
    public void sendOrderConfirmation(UUID orderId) { ... }
    public void sendShippingNotification(UUID orderId) { ... }
    
    // Reporting
    public List<OrderReport> generateDailyReport() { ... }
    public BigDecimal calculateRevenue(LocalDate from, LocalDate to) { ... }
}
```

**Problems**:
- Hard to test (too many dependencies)
- Hard to maintain (changes affect multiple concerns)
- Hard to reuse (payment logic tied to OrderService)

---

## Solution: Extract Services

```java
✅ GOOD: Focused services

@Service
public class OrderService {
    public OrderResponse create(CreateOrderRequest request) { ... }
    public OrderResponse update(UUID id, UpdateOrderRequest request) { ... }
    public void delete(UUID id) { ... }
}

@Service
public class PaymentService {
    public PaymentResponse processPayment(UUID orderId, PaymentRequest request) { ... }
}

@Service
public class InventoryService {
    public void reserve(UUID orderId, List<OrderItem> items) { ... }
    public void release(UUID orderId) { ... }
}

@Service
public class NotificationService {
    public void sendOrderConfirmation(UUID orderId) { ... }
    public void sendShippingNotification(UUID orderId) { ... }
}

@Service
public class OrderReportService {
    public List<OrderReport> generateDailyReport() { ... }
    public BigDecimal calculateRevenue(LocalDate from, LocalDate to) { ... }
}
```

---

## Detection

- Service class > 500 lines
- Service has > 10 public methods
- Service has > 5 dependencies
- Service name is too generic (`OrderService` doing payment, inventory, notifications)

---

## Token Budget
~300 tokens
