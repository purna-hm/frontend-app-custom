---
name: GraphQL Schema Design (Python)
description: Designing GraphQL schemas in Python using the code-first approach with Strawberry.
version: "1.0"
---

# Skill: GraphQL Schema Design natively in Python

## Objective
Define a robust, strictly-typed GraphQL API using a code-first approach with the Strawberry library.

## Recipe

### 1. Basic Schema Definition
Use Python's native dataclasses and type hints styled with `@strawberry.type`.

```python
# src/graphql/schema.py
import typing
import strawberry

@strawberry.type
class User:
    id: strawberry.ID
    username: str
    email: str
    # Nested relations return a list
    posts: typing.List["Post"]

@strawberry.type
class Post:
    id: strawberry.ID
    title: str
    content: str
    
@strawberry.input
class CreateUserInput:
    username: str
    email: str

@strawberry.input
class UpdateUserInput:
    username: typing.Optional[str] = None

@strawberry.type
class Query:
    @strawberry.field
    def get_user(self, id: strawberry.ID) -> typing.Optional[User]:
        # Implement fetch logic
        return None

    @strawberry.field
    def list_users(self, page: typing.Optional[int] = 1, size: typing.Optional[int] = 20) -> typing.List[User]:
        return []

@strawberry.type
class Mutation:
    @strawberry.mutation
    def create_user(self, input: CreateUserInput) -> User:
        # Implement creation logic
        return User(id=strawberry.ID("1"), username=input.username, email=input.email, posts=[])
        
    @strawberry.mutation
    def update_user(self, id: strawberry.ID, input: UpdateUserInput) -> User:
        return User(id=id, username=input.username or "default", email="test@test.com", posts=[])

schema = strawberry.Schema(query=Query, mutation=Mutation)
```

## Validation
- Ensure all types are decorated with `@strawberry.type` or `@strawberry.input`.
- Fields must use Python's standard `typing` module for Lists, Optionals, and custom types to generate the underlying GraphQL schema correctly.