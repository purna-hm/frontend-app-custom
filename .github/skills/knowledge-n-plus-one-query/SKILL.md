---
name: n-plus-one-query
description: "Knowledge: n-plus-one-query"
version: "1.0"
---

# Anti-Pattern: N+1 Query

## What It Is
Loading a list of N parent entities, then issuing 1 additional query per parent to load related children = N+1 total queries.

---

## Example (Spring Boot / JPA)

```java
// ❌ BAD: N+1 queries
List<Order> orders = orderRepository.findAll();  // 1 query
for (Order order : orders) {
    order.getItems().size();  // N queries (one per order, lazy load)
}
```

**Result**: 1 + 100 = 101 queries for 100 orders.

---

## Detection

### Enable SQL Logging
```yaml
logging:
  level:
    org.hibernate.SQL: DEBUG
```

**Look for**: Repeated SELECT statements in loop.

### Hibernate Statistics
```java
Statistics stats = entityManager.getEntityManagerFactory().unwrap(SessionFactory.class).getStatistics();
stats.setStatisticsEnabled(true);
// Run query
System.out.println("Queries executed: " + stats.getPrepareStatementCount());
```

---

## Solutions

### 1. JOIN FETCH (JPQL)
```java
@Query("SELECT o FROM Order o LEFT JOIN FETCH o.items")
List<Order> findAllWithItems();
```

**Result**: 1 query with JOIN.

### 2. @EntityGraph
```java
@EntityGraph(attributePaths = {"items"})
List<Order> findAll();
```

**Result**: 1 query with JOIN.

### 3. Batch Fetching
```java
@Entity
public class Order {
    @OneToMany(mappedBy = "order")
    @BatchSize(size = 10)  // Fetch in batches of 10
    private List<OrderItem> items;
}
```

**Result**: 1 + (N/10) queries (better than N+1, but not as good as JOIN FETCH).

---

## Prevention

- ✅ Use `JOIN FETCH` or `@EntityGraph` for known associations
- ✅ Disable OSIV (`spring.jpa.open-in-view=false`)
- ✅ Return DTOs from service layer (forces eager loading in transaction)
- ❌ NEVER access lazy collections outside transaction

---

## Token Budget
~400 tokens
