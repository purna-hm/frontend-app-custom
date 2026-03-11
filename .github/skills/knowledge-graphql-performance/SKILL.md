---
name: graphql-performance
description: "Knowledge: graphql-performance"
version: "1.0"
---

# GraphQL Performance & Security Anti-Patterns

A critical feature of GraphQL is that clients ask for what they want. This flexibility can easily destroy server performance if not handled correctly.

## 1. The N+1 Query Problem (DataLoader)
**Anti-Pattern:**
Allowing resolvers to perform database queries naively. If a query requests 50 `Users`, and each `User` resolves an `avatarUrl` from a secondary table, the naive approach executes 1 query for the users, and 50 subsequent queries for the avatars (N+1 = 51 queries).

**Solution:**
ALWAYS use community Dataloader patterns for any relationship lookup.
- Node.js: `dataloader`
- Spring: `BatchLoaderRegistry`
- Hot Chocolate: `[DataLoader]`
- Python Strawberry: `aiodataloader`

## 2. Unbounded Query Depth
**Anti-Pattern:**
Allowing wildly nested queries. Because components can nest, and GraphQL schemas often have circular references (User -> Posts -> Comments -> Author -> Posts ...), an attacker can easily write a recursive query that crashes the server.

**Solution:**
Always implement Maximum Query Depth logic at the server level. (e.g., max depth of 10).

## 3. Excessive Query Complexity
**Anti-Pattern:**
Query depth doesn't solve requesting an unreasonable amount of un-nested data (e.g., asking for 1,000,000 connections at once).

**Solution:**
Calculate query complexity or forcefully restrict pagination (require limits, and set a hard cap like `first: 100`).

## 4. Returning Full Objects on Delete
**Anti-Pattern:**
Returning the entire node on a delete payload. Usually, you only need the ID to update the client cache. Returning the full object costs bandwidth and often requires fetching the object from the database *after* it's been marked for deletion.

**Solution:**
Only return the `id` of the deleted item.

```graphql
# Good
type DeletePostPayload {
  success: Boolean!
  deletedPostId: ID!
}
```
