---
name: circuit-breaker
description: "Knowledge: circuit-breaker"
version: "1.0"
---

# Pattern: Circuit Breaker

## Problem
When an external service is down, repeated failed calls waste resources and delay error responses.

---

## Solution
Use **Resilience4j Circuit Breaker** to fail fast when a service is unhealthy.

### States
1. **CLOSED**: Normal operation, calls pass through
2. **OPEN**: Service is failing, calls fail immediately (no network call)
3. **HALF_OPEN**: Test if service recovered (limited calls)

---

## Implementation (Spring Boot)

### Dependency
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
<dependency>
    <groupId>io.github.resilience4j</groupId>
    <artifactId>resilience4j-spring-boot3</artifactId>
</dependency>
```

### Configuration
```yaml
resilience4j:
  circuitbreaker:
    instances:
      paymentService:
        slidingWindowSize: 10
        failureRateThreshold: 50
        waitDurationInOpenState: 10s
        permittedNumberOfCallsInHalfOpenState: 3
```

### Usage
```java
@Service
@RequiredArgsConstructor
public class PaymentService {
    
    private final RestTemplate restTemplate;
    
    @CircuitBreaker(name = "paymentService", fallbackMethod = "paymentFallback")
    public PaymentResponse processPayment(PaymentRequest request) {
        return restTemplate.postForObject(
            "https://payment-api.example.com/process",
            request,
            PaymentResponse.class
        );
    }
    
    private PaymentResponse paymentFallback(PaymentRequest request, Exception e) {
        log.warn("Payment service unavailable, using fallback", e);
        return new PaymentResponse("PENDING", "Payment queued for retry");
    }
}
```

---

## When to Use
- Calling external HTTP APIs
- Calling unreliable third-party services
- Preventing cascade failures

---

## Token Budget
~450 tokens
