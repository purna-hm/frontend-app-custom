---
name: graphql-schema-design
description: "Knowledge: graphql-schema-design"
version: "1.0"
---

# GraphQL Schema Design

This knowledge document provides standard GraphQL schema design conventions across all supported language stacks.

## Schema-First vs. Code-First
There are two prevalent ways to build a GraphQL schema. Use the one preferred implicitly by your target library/community.

- **Schema-First** (e.g., Apollo Server native, Spring for GraphQL, AppSync):
  Write schema in GraphQL Schema Definition Language (SDL string/file). The implementation/resolvers match the defined types exactly.
- **Code-First** (e.g., Hot Chocolate, Python Strawberry, TypeGraphQL):
  Write schemas using the language's native type system (classes, structs) annotated with directives/decorators. The SDL is auto-evaluated at runtime.

## Schema Modeling Conventions

### 1. Naming
- Types and Interfaces: `PascalCase` (e.g., `User`, `OrderItem`)
- Enums: `PascalCase` type, `UPPER_CASE_SNAKE` values (e.g., `enum Role { ADMIN, PUBLIC_USER }`)
- Fields and arguments: `camelCase` (e.g., `createdAt`, `userId`)
- Operation names (Queries, Mutations): `camelCase` (e.g., `getUser`, `createOrder`)

### 2. Nullability (Important)
By default, fields in GraphQL are nullable. Make fields Non-Null (`!`) where it is conceptually impossible for the data to be absent.
```graphql
# Good
type User {
  id: ID!
  email: String!
  avatarUrl: String  # Allowed to be null
}
```

### 3. Mutations should receive Input Objects
Never use numerous scalars for a mutation. Use an `Input` type.
```graphql
# Bad
mutation updateProfile($id: ID!, $firstName: String!, $lastName: String!)

# Good
mutation updateProfile($id: ID!, $input: UpdateProfileInput!)

input UpdateProfileInput {
  firstName: String
  lastName: String
  bio: String
}
```

### 4. Payload Envelopes for Mutations
Always return an object out of a mutation, never just a boolean or ID. This allows for updating the client's normalized cache naturally.
```graphql
type CreateNodePayload {
  success: Boolean!
  node: Node
  errors: [UserError!]
}
```

### 5. Pagination
If a query returns a list that might grow long, use Cursor-based pagination (Connections) rather than Array/Offset-based pagination.
See Relay-style connections:
```graphql
type UserConnection {
  edges: [UserEdge]
  pageInfo: PageInfo!
}
type UserEdge {
  cursor: String!
  node: User
}
```
