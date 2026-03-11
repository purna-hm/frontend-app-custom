---
name: commit-messages
description: "Knowledge: commit-messages"
version: "1.0"
---

# Convention: Commit Messages

## Format

Follow **Conventional Commits** specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

---

## Type

| Type | When to Use |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Code style (formatting, missing semicolons, etc.) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `chore` | Build process, dependencies, tooling |
| `ci` | CI/CD configuration changes |

---

## Scope (Optional)

The module or component affected:
- `order` — Order service
- `customer` — Customer service
- `api` — API layer
- `db` — Database
- `auth` — Authentication

---

## Subject

- Use imperative mood: "add" not "added" or "adds"
- Lowercase first letter
- No period at the end
- Max 50 characters

---

## Examples

### Good Commits
```
feat(order): add order creation endpoint

fix(customer): resolve null pointer in customer lookup

docs(api): update OpenAPI spec for order endpoints

refactor(order): extract validation logic to separate class

test(order): add unit tests for OrderService.create

chore(deps): upgrade Spring Boot to 3.2.1
```

### Bad Commits
```
❌ Added new feature
❌ Fixed bug
❌ WIP
❌ asdfasdf
❌ Updated code
```

---

## Body (Optional)

Explain **what** and **why**, not **how**:

```
feat(order): add order cancellation endpoint

Customers can now cancel orders within 24 hours of placement.
This implements the cancellation policy defined in TICKET-123.

Closes TICKET-123
```

---

## Footer (Optional)

Reference issues or breaking changes:

```
feat(api): change order status enum values

BREAKING CHANGE: Order status values changed from UPPERCASE to lowercase.
Clients must update their integrations.

Closes TICKET-456
```

---

## Token Budget
~200 tokens
