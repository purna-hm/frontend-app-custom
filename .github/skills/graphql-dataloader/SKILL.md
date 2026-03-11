---
name: GraphQL DataLoader (Python)
description: Resolving N+1 query execution problems safely across recursive relationships inside a schema using DataLoader natively in Strawberry.
version: "1.0"
---

# Skill: GraphQL DataLoader Integration in Python

## Objective
Prevent N+1 query execution problems safely across recursive relationships using Strawberry's native DataLoaders mechanism.

## Recipe

### 1. Creating Batch Fetching Functions
A dataloader requires an asynchronous operation that returns an array of structured outputs exactly matching the order of input keys.

```python
# src/graphql/loaders.py
from typing import List
from strawberry.dataloader import DataLoader

async def load_users_by_id(keys: List[str]) -> List["User"]:
    # 1. Fetch data from DB based on keys
    # users = await db.fetch_all("SELECT * FROM users WHERE id IN :keys", values={"keys": keys})
    
    # 2. Map responses to requested keys safely (order matters)
    # user_dict = {user.id: user for user in users}
    # return [user_dict.get(key) for key in keys]
    
    return [User(id=k, name=f"User {k}") for k in keys]

# Optional: Encapsulate Loaders class for Context Injection
class Loaders:
    def __init__(self):
        self.user_loader = DataLoader(load_fn=load_users_by_id)
```

### 2. Injecting into Context
Loaders must be initialized per request via context to isolate caches across different users safely.

```python
# src/main.py
async def get_context():
    return {
        "loaders": Loaders(),
    }
    
graphql_app = GraphQLRouter(schema, context_getter=get_context)
```

### 3. Usage in Resolvers
```python
# src/graphql/schema.py
import strawberry
from strawberry.types import Info

@strawberry.type
class Post:
    id: strawberry.ID
    author_id: strawberry.Private[str]
    
    @strawberry.field
    async def author(self, info: Info) -> "User":
        loader = info.context["loaders"].user_loader
        # Await the loader explicitly; Strawberry handles batching event loop natively
        return await loader.load(self.author_id)
```

## Validation
- DataLoaders must be initialized strictly on a per-request basis in the `context_getter`, NOT as a global variable.
- Ensure the batch loading function maps and returns exactly one element per mapped ID (returning None if absent).