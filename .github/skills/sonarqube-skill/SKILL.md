---
name: SonarQube Skill
description: Interface for SonarQube analysis to identify code quality and security issues.
version: "1.0"
---

# Skill: SonarQube Analysis

## Purpose
Perform Static Application Security Testing (SAST) and code quality checks using SonarQube.

## Capabilities
Methods to interact with the SonarQube MCP server.

### Tools
- `sonarqube_get_project_status`: Get the quality gate status of a project.
- `sonarqube_get_issues`: Get a list of issues (bugs, vulnerabilities, code smells) for a project or file.
- `sonarqube_run_analysis`: Trigger a new analysis (if supported by MCP, otherwise instructs user).

## Usage
After code changes and before merging, check for **new issues on changed files only**.

### Changed-Code Scoping
When a `changed_files` manifest is provided by the orchestrator:
- Use `sonarqube_get_issues` with `sinceLeakPeriod=true` to get only NEW issues (issues introduced in the current branch).
- Alternatively, filter returned issues to only those whose file path appears in the `changed_files` manifest.
- If `changed_files` is `ALL`, get all issues (greenfield project).

### Output Format (for User Triage)
Return issues in a categorized table so the orchestrator can present them for user selection:
```markdown
| # | Severity | File | Line | Issue | Rule |
|---|----------|------|------|-------|------|
| 1 | 🔴 BLOCKER | OrderService.java | 45 | Null pointer dereference | squid:S2259 |
| 2 | 🟡 CRITICAL | UserController.java | 23 | SQL injection risk | squid:S3649 |

Quality Gate: PASSED/FAILED
```