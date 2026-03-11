---
name: api-versioning
description: "Knowledge: api-versioning"
version: "1.0"
---

# Pattern: API Versioning

## Problem
Breaking changes to APIs break existing clients.

---

## Solution
Version APIs to allow old and new clients to coexist.

---

## Versioning Strategies

### 1. URL Path Versioning (Recommended)
```
✅ /api/v1/orders
✅ /api/v2/orders
```

**Pros**: Clear, easy to route, easy to deprecate
**Cons**: URL duplication

### 2. Header Versioning
```
GET /api/orders
Accept: application/vnd.example.v1+json
```

**Pros**: Clean URLs
**Cons**: Harder to test (need to set headers)

### 3. Query Parameter Versioning
```
GET /api/orders?version=1
```

**Pros**: Easy to test
**Cons**: Pollutes query params, easy to forget

---

## When to Increment Version

### Breaking Changes (Increment Version)
- Removing fields from response
- Changing field types (`string` → `number`)
- Removing endpoints
- Changing endpoint behavior significantly

### Non-Breaking Changes (No Increment)
- Adding optional fields to response
- Adding new endpoints
- Adding optional query parameters
- Bug fixes

---

## Implementation (Spring Boot)

### Controller Versioning
```java
@RestController
@RequestMapping("/api/v1/orders")
public class OrderControllerV1 {
    
    @GetMapping("/{id}")
    public OrderResponseV1 getById(@PathVariable UUID id) {
        return orderService.findByIdV1(id);
    }
}

@RestController
@RequestMapping("/api/v2/orders")
public class OrderControllerV2 {
    
    @GetMapping("/{id}")
    public OrderResponseV2 getById(@PathVariable UUID id) {
        return orderService.findByIdV2(id);
    }
}
```

### Shared Service Logic
```java
@Service
public class OrderService {
    
    public OrderResponseV1 findByIdV1(UUID id) {
        Order order = repository.findById(id).orElseThrow();
        return mapperV1.toResponse(order);
    }
    
    public OrderResponseV2 findByIdV2(UUID id) {
        Order order = repository.findById(id).orElseThrow();
        return mapperV2.toResponse(order);
    }
}
```

---

## Deprecation Strategy

1. **Announce deprecation** (6 months notice)
2. **Add deprecation header** to v1 responses:
   ```
   Deprecation: true
   Sunset: Sat, 31 Dec 2024 23:59:59 GMT
   ```
3. **Monitor usage** (log v1 API calls)
4. **Remove v1** after sunset date

---

## Token Budget
~350 tokens
