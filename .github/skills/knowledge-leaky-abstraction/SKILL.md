---
name: leaky-abstraction
description: "Knowledge: leaky-abstraction"
version: "1.0"
---

# Anti-Pattern: Leaky Abstraction

## What It Is
An abstraction that exposes implementation details, forcing clients to know about internals.

---

## Example

```java
❌ BAD: Leaky abstraction
public interface OrderRepository {
    
    // Exposes JPA implementation detail (EntityManager)
    Order findById(UUID id, EntityManager em);
    
    // Exposes SQL implementation detail
    List<Order> findByCustomerId(UUID customerId, String sqlHint);
}
```

**Problem**: Clients must know about JPA and SQL to use the repository.

---

## Solution: Hide Implementation

```java
✅ GOOD: Clean abstraction
public interface OrderRepository {
    
    Optional<Order> findById(UUID id);
    List<Order> findByCustomerId(UUID customerId);
}
```

**Benefit**: Clients don't know (or care) if it's JPA, JDBC, MongoDB, or in-memory.

---

## Another Example: Pagination

```java
❌ BAD: Exposes Spring Data Pageable
public interface OrderService {
    Page<OrderResponse> findAll(Pageable pageable);  // Spring Data leaks to service layer
}

✅ GOOD: Custom pagination DTO
public record PageRequest(int page, int size, String sortBy, String sortDirection) {}
public record PageResponse<T>(List<T> content, int totalPages, long totalElements) {}

public interface OrderService {
    PageResponse<OrderResponse> findAll(PageRequest request);
}
```

---

## Token Budget
~250 tokens
