---
name: git-workflow
description: "Knowledge: git-workflow"
version: "1.0"
---

# Convention: Git Workflow

## Branching Strategy

### Main Branches
- `main` — Production-ready code, always deployable
- `develop` — Integration branch for features (optional, for larger teams)

### Feature Branches
```bash
# Create feature branch from main
git checkout main
git pull
git checkout -b feature/add-order-api

# Work on feature...

# Push to remote
git push -u origin feature/add-order-api
```

**Naming**:
- `feature/short-description` — New features
- `bugfix/short-description` — Bug fixes
- `hotfix/short-description` — Urgent production fixes
- `refactor/short-description` — Code refactoring

---

## Commit Workflow

```bash
# Stage changes
git add src/main/java/com/example/OrderService.java

# Commit with conventional message
git commit -m "feat(order): add order creation endpoint"

# Push to remote
git push
```

---

## Pull Request Workflow

1. **Create PR** from feature branch to `main`
2. **Fill PR template** (description, testing, screenshots)
3. **Request review** from team members
4. **Address feedback** via new commits (don't force-push during review)
5. **Squash and merge** once approved

---

## Merge Strategies

### Squash and Merge (Recommended)
- Combines all commits into one
- Clean, linear history
- Use for feature branches

### Rebase and Merge
- Replays commits on top of main
- Linear history, preserves individual commits
- Use for small, well-crafted commits

### Merge Commit
- Creates merge commit
- Preserves full history
- Use for long-lived branches (e.g., release branches)

---

## Token Budget
~250 tokens
