---
name: GraphQL Testing (Python)
description: Executing GraphQL backend requests utilizing standard testing suites in Python.
version: "1.0"
---

# Skill: Testing Strawberry GraphQL

## Objective
Provide strategies for executing test requests against a FastAPI Strawberry backend utilizing `pytest` and `TestClient` or `AsyncClient`.

## Recipe

### 1. Mocking the GraphQL API Client (FastAPI)
Initialize an internal HTTP Request mechanism testing endpoint executions:

```python
# tests/test_graphql.py
from fastapi.testclient import TestClient
from src.main import app

client = TestClient(app)

def test_fetch_user():
    query = """
    query GetUser($id: ID!) {
        getUser(id: $id) {
            username
        }
    }
    """
    
    response = client.post(
        "/graphql", 
        json={"query": query, "variables": {"id": "1"}}
    )
    
    assert response.status_code == 200
    data = response.json()
    assert "errors" not in data
    assert data["data"]["getUser"] is None  # Matches mock expectation
```

### 2. Testing the Strawberry Schema directly (No HTTP)
Testing the Strawberry layer synchronously without bootstrapping FastAPI:

```python
import pytest
from src.graphql.schema import schema
from src.graphql.loaders import Loaders

@pytest.mark.asyncio
async def test_mutation_create_user():
    mutation = """
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
            id
            username
            email
        }
    }
    """
    
    # Execute query against schema directly initializing mock context explicitly
    result = await schema.execute(
        mutation,
        variable_values={"input": {"username": "testuser", "email": "test@test.com"}},
        context_value={"db": "mock", "loaders": Loaders()}
    )
    
    assert result.errors is None
    assert result.data["createUser"]["username"] == "testuser"
```

## Validation
- When testing via the FastAPI test client, verify JSON payload wraps `query` and `variables` properly.
- For direct schema executions, wrap within `@pytest.mark.asyncio` natively.