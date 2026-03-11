---
name: retry-with-backoff
description: "Knowledge: retry-with-backoff"
version: "1.0"
---

# Pattern: Retry with Backoff

## Problem
Transient failures (network glitches, temporary service unavailability) should be retried, but naive retries can overwhelm the failing service.

---

## Solution
Use **exponential backoff** with jitter to retry failed operations.

### Exponential Backoff
- Retry 1: Wait 1s
- Retry 2: Wait 2s
- Retry 3: Wait 4s
- Retry 4: Wait 8s

### Jitter
Add randomness to avoid thundering herd (all clients retry at the same time).

---

## Implementation (Spring Boot)

### Dependency
```xml
<dependency>
    <groupId>io.github.resilience4j</groupId>
    <artifactId>resilience4j-spring-boot3</artifactId>
</dependency>
```

### Configuration
```yaml
resilience4j:
  retry:
    instances:
      paymentService:
        maxAttempts: 3
        waitDuration: 1s
        exponentialBackoffMultiplier: 2
        retryExceptions:
          - java.net.SocketTimeoutException
          - org.springframework.web.client.ResourceAccessException
```

### Usage
```java
@Service
@RequiredArgsConstructor
public class PaymentService {
    
    private final RestTemplate restTemplate;
    
    @Retry(name = "paymentService", fallbackMethod = "paymentFallback")
    public PaymentResponse processPayment(PaymentRequest request) {
        return restTemplate.postForObject(
            "https://payment-api.example.com/process",
            request,
            PaymentResponse.class
        );
    }
    
    private PaymentResponse paymentFallback(PaymentRequest request, Exception e) {
        log.error("Payment failed after retries", e);
        throw new PaymentException("Payment service unavailable");
    }
}
```

---

## When to Use
- Network timeouts
- HTTP 5xx errors (server errors)
- Transient database connection failures

## When NOT to Use
- HTTP 4xx errors (client errors — retrying won't help)
- Business logic errors

---

## Token Budget
~400 tokens
