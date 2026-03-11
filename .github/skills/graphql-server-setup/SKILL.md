---
name: GraphQL Server Setup (Python)
description: Initializing Web Routes for Strawberry GraphQL with FastAPI.
version: "1.0"
---

# Skill: Setup Strawberry GraphQL inside FastAPI

## Objective
Mount a GraphQL Schema within a FastAPI application using the built-in GraphQLRouter provided by Strawberry.

## Recipe

### 1. Router Configuration
```python
# src/main.py
from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter
from src.graphql.schema import schema

# Initialize a custom dependency to inject FastAPI context strings or Auth tokens into GraphQL execution contexts
async def get_context():
    return {
        "db": "your_db_session",
    }

# Create the Router Mapping
graphql_app = GraphQLRouter(
    schema,
    context_getter=get_context,
)

app = FastAPI()

# Mount the router
app.include_router(graphql_app, prefix="/graphql")
```

### 2. Utilizing Context in Resolvers
To access the FastAPI injected context in your schema:

```python
import strawberry
from strawberry.types import Info

@strawberry.type
class Query:
    @strawberry.field
    def get_user(self, info: Info, id: strawberry.ID) -> str:
        db_session = info.context["db"]
        # perform database lookup using db_session
        return f"User {id}"
```

## Validation
- Verify the router prefix maps correctly to `/graphql`.
- Ensure async methodologies are respected especially if passing FastAPI DB instances into the GraphQL Context.