---
name: pr-conventions
description: "Knowledge: pr-conventions"
version: "1.0"
---

# Convention: Pull Request (PR)

## PR Title

Follow commit message format:
```
feat(order): add order creation endpoint
fix(customer): resolve null pointer in customer lookup
```

---

## PR Description Template

```markdown
## Summary
Brief description of what this PR does.

## Changes
- Added OrderController with POST /api/v1/orders endpoint
- Created OrderService.create() method
- Added unit tests for OrderService
- Updated OpenAPI spec

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Tested on local environment

## Screenshots (if UI changes)
[Attach screenshots]

## Related Issues
Closes #123
Relates to #456

## Checklist
- [ ] Code follows project conventions
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes (or documented if breaking)
```

---

## PR Size Guidelines

| Size | Lines Changed | Review Time |
|------|---------------|-------------|
| Small | < 200 | < 30 min |
| Medium | 200-500 | 30-60 min |
| Large | 500-1000 | 1-2 hours |
| Too Large | > 1000 | Split into multiple PRs |

**Guideline**: Keep PRs small for faster reviews and easier debugging.

---

## Review Process

### As Author
1. **Self-review** before requesting review
2. **Add context** in description
3. **Respond to feedback** promptly
4. **Don't force-push** during review (breaks review comments)
5. **Squash commits** before merge

### As Reviewer
1. **Review within 24 hours**
2. **Be constructive** in feedback
3. **Approve** when satisfied
4. **Request changes** if issues found
5. **Comment** for questions or suggestions

---

## PR Labels

- `bug` — Bug fix
- `feature` — New feature
- `documentation` — Documentation changes
- `breaking-change` — Breaking API changes
- `needs-review` — Awaiting review
- `work-in-progress` — Not ready for review

---

## Token Budget
~300 tokens
