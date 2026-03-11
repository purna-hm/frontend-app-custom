---
name: api-pagination
description: "Knowledge: api-pagination"
version: "1.0"
---

# Pattern: API Pagination

## Problem
List endpoints returning unbounded results cause memory pressure, slow responses, and poor UX.

---

## Solution: Offset-Based Pagination (Default)

Use Spring Data `Pageable` for standard pagination.

### Request
```
GET /api/v1/orders?page=0&size=20&sort=createdAt,desc
```

### Controller
```java
@GetMapping
public ResponseEntity<Page<OrderResponse>> list(Pageable pageable) {
    return ResponseEntity.ok(orderService.findAll(pageable));
}
```

### Service
```java
public Page<OrderResponse> findAll(Pageable pageable) {
    return repository.findAll(pageable)
        .map(mapper::toResponse);
}
```

### Response
```json
{
  "content": [
    { "id": "...", "status": "PENDING" }
  ],
  "pageable": {
    "pageNumber": 0,
    "pageSize": 20
  },
  "totalElements": 150,
  "totalPages": 8,
  "last": false
}
```

---

## Solution: Cursor-Based Pagination (High Volume)

For datasets > 1M rows or real-time feeds.

### Request
```
GET /api/v1/orders?cursor=2024-01-15T10:30:00Z&size=20
```

### Repository
```java
@Query("SELECT o FROM Order o WHERE o.createdAt > :cursor ORDER BY o.createdAt ASC")
List<Order> findAfterCursor(@Param("cursor") Instant cursor, Pageable pageable);
```

### Response
```json
{
  "data": [...],
  "nextCursor": "2024-01-15T11:00:00Z",
  "hasMore": true
}
```

---

## When to Use

| Scenario | Pagination Type |
|----------|-----------------|
| Standard CRUD list | Offset-based |
| Dataset > 1M rows | Cursor-based |
| Real-time feeds (events, logs) | Cursor-based |
| User needs to jump to page N | Offset-based |

---

## Token Budget
~400 tokens
