---
name: graphql-error-handling
description: "Knowledge: graphql-error-handling"
version: "1.0"
---

# GraphQL Error Handling

Standardized approach to error handling across GraphQL implementations in all stacks.

## 1. Top-Level Field vs Payload Errors
There are generally two types of errors in GraphQL:

### A. System/Network Errors (Top-level)
These are 500s or catastrophic failures where the entire request fails, or where a specific resolver throws a fatal exception. These appear in the top-level `errors` array in the standard GraphQL response envelope:

```json
{
  "data": null,
  "errors": [
    {
      "message": "Not authenticated",
      "locations": [{ "line": 2, "column": 3 }],
      "path": ["currentUser"],
      "extensions": { "code": "UNAUTHENTICATED" }
    }
  ]
}
```

### B. Domain/Business Errors (Payload)
For mutations (and sometimes queries), domain mistakes (e.g., Validation failed, Insufficient funds, User not found) should NOT be top-level errors. They should be returned as data in the payload payload envelope using Unions or standard Objects.

```graphql
type InsufficientFundsError {
  message: String!
  shortfall: Int!
}

union CheckoutResult = Order | InsufficientFundsError

# Query
mutation {
  checkout(orderId: "123") {
    ... on Order {
      id
      status
    }
    ... on InsufficientFundsError {
      message
      shortfall
    }
  }
}
```

## 2. Standardizing Error Codes in Extensions
When you do throw top-level errors (System/Network type), ensure your stack's error formatter relies on standardized strings in the `extensions.code` field:
- `INTERNAL_SERVER_ERROR`
- `UNAUTHENTICATED`
- `FORBIDDEN`
- `BAD_USER_INPUT`

Do not leak stack traces or debug logic in production `errors.extensions`.

## 3. Partial Failure
GraphQL allows partial successes. If one resolver fails but the others succeed, the target field returns `null` (assuming it's nullable), its error joins the `errors` array, and the rest of the `data` tree resolves correctly. 

This is why `nullability` design is critical. If a nullable field throws, it only breaks itself. If a Non-Null (`!`) field throws, it cascades up to its first nullable parent.
