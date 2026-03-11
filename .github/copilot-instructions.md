

## Agent Routing — python-api-team

The following specialist agents are available for delegation via `runSubagent`:

- **@api-designer**: 
- **@architect**: 
- **@reporting-agent**: 
- **@coding-agent**: 
- **@testing-specialist**: 
- **@code-reviewer**: 
- **@documentation-writer**: 
- **@git-ops**: 
- **@jira-agent**: 
- **@project-scanner**: Deeply scans the codebase to extract patterns, architecture decisions, and code conventions into agent-hub knowledge files.
- **@local-deploy-agent**: Handles optional local container deployment (Docker/Podman), builds containers, injects environment variables, verifies startup logs, and iteratively fixes issues.

## Agent Routing — python-async-services

The following specialist agents are available for delegation via `runSubagent`:

- **@async-specialist**: 
- **@task-queue-specialist**: 
- **@database-specialist**: 
- **@reporting-agent**: 
- **@coding-agent**: 
- **@testing-specialist**: 
- **@code-reviewer**: 
- **@documentation-writer**: 
- **@git-ops**: 
- **@jira-agent**: 
- **@project-scanner**: Deeply scans the codebase to extract patterns, architecture decisions, and code conventions into agent-hub knowledge files.
- **@local-deploy-agent**: Handles optional local container deployment (Docker/Podman), builds containers, injects environment variables, verifies startup logs, and iteratively fixes issues.

## Agent Routing — python-quality-gate

The following specialist agents are available for delegation via `runSubagent`:

- **@testing-specialist**: 
- **@type-safety-specialist**: 
- **@dependency-manager**: 
- **@reporting-agent**: 
- **@local-deploy-agent**: Handles optional local container deployment (Docker/Podman), builds containers, injects environment variables, verifies startup logs, and iteratively fixes issues.

## Agent Routing — python-api-team

The following specialist agents are available for delegation via `runSubagent`:

- **@api-designer**: 
- **@architect**: 
- **@reporting-agent**: 
- **@coding-agent**: 
- **@testing-specialist**: 
- **@code-reviewer**: 
- **@documentation-writer**: 
- **@git-ops**: 
- **@jira-agent**: 
- **@project-scanner**: Deeply scans the codebase to extract patterns, architecture decisions, and code conventions into agent-hub knowledge files.
- **@local-deploy-agent**: Handles optional local container deployment (Docker/Podman), builds containers, injects environment variables, verifies startup logs, and iteratively fixes issues.

## Agent Routing — python-async-services

The following specialist agents are available for delegation via `runSubagent`:

- **@async-specialist**: 
- **@task-queue-specialist**: 
- **@database-specialist**: 
- **@reporting-agent**: 
- **@coding-agent**: 
- **@testing-specialist**: 
- **@code-reviewer**: 
- **@documentation-writer**: 
- **@git-ops**: 
- **@jira-agent**: 
- **@project-scanner**: Deeply scans the codebase to extract patterns, architecture decisions, and code conventions into agent-hub knowledge files.
- **@local-deploy-agent**: Handles optional local container deployment (Docker/Podman), builds containers, injects environment variables, verifies startup logs, and iteratively fixes issues.

## Agent Routing — python-core

The following specialist agents are available for delegation via `runSubagent`:

- **@coding-agent**: 
- **@testing-specialist**: 
- **@code-reviewer**: 
- **@documentation-writer**: 
- **@git-ops**: 
- **@jira-agent**: 
- **@project-scanner**: Deeply scans the codebase to extract patterns, architecture decisions, and code conventions into agent-hub knowledge files.
- **@dependency-manager**: 
- **@reporting-agent**: 
- **@local-deploy-agent**: Handles optional local container deployment (Docker/Podman), builds containers, injects environment variables, verifies startup logs, and iteratively fixes issues.

## Agent Routing — python-migration

The following specialist agents are available for delegation via `runSubagent`:

- **@migration-specialist**: 
- **@architect**: 
- **@coding-agent**: 
- **@testing-specialist**: 
- **@database-specialist**: 
- **@type-safety-specialist**: 
- **@git-ops**: 
- **@content-extractor**: 
- **@project-scanner**: Deeply scans the codebase to extract patterns, architecture decisions, and code conventions into agent-hub knowledge files.
- **@reporting-agent**: 

## Agent Routing — python-quality-gate

The following specialist agents are available for delegation via `runSubagent`:

- **@testing-specialist**: 
- **@type-safety-specialist**: 
- **@dependency-manager**: 
- **@reporting-agent**: 
- **@local-deploy-agent**: Handles optional local container deployment (Docker/Podman), builds containers, injects environment variables, verifies startup logs, and iteratively fixes issues.

## Agent Routing — python-security-audit

The following specialist agents are available for delegation via `runSubagent`:

- **@security-auditor**: 
- **@code-reviewer**: 
- **@dependency-manager**: 
- **@testing-specialist**: 
- **@reporting-agent**: 
- **@git-ops**: 

## Stack Profile: 01-architecture

# Architecture Profile
Domain-driven design preferred in Python projects.

## Stack Profile: 02-concurrency

# Concurrency Profile
Asyncio via uvloop is preferred for I/O bound tasks.

## Stack Profile: 03-type-safety

# Type Safety Profile
Use strict mypy checking.

## Agent Routing — python-full

The following specialist agents are available for delegation via `runSubagent`:

- **@api-designer**: 
- **@architect**: 
- **@async-specialist**: 
- **@cli-builder**: 
- **@coding-agent**: 
- **@config-specialist**: 
- **@crud-specialist**: 
- **@data-modeling-specialist**: 
- **@database-specialist**: 
- **@dependency-manager**: 
- **@error-handler**: 
- **@event-specialist**: 
- **@integration-specialist**: 
- **@observability-engineer**: 
- **@performance-optimizer**: 
- **@reporting-agent**: 
- **@resilience-engineer**: 
- **@task-queue-specialist**: 
- **@testing-specialist**: 
- **@type-safety-specialist**: 
- **@validation-specialist**: 
- **@ci-cd-agent**: Inspects project type, detects CI/CD needs, and generates/modifies workflows for GitHub Actions, GitLab CI, and Azure DevOps with cloud credential handling and best practices.
- **@code-reviewer**: 
- **@content-extractor**: 
- **@database-admin**: Manages database schemas, inspections, and migrations.
- **@documentation-writer**: 
- **@figma-design-interpreter**: Connects to Figma MCP to extract design specs, component trees, design tokens, and layout data for downstream agents.
- **@git-ops**: 
- **@jira-agent**: 
- **@local-deploy-agent**: Handles optional local container deployment (Docker/Podman), builds containers, injects environment variables, verifies startup logs, and iteratively fixes issues.
- **@migration-specialist**: 
- **@project-scanner**: Deeply scans the codebase to extract patterns, architecture decisions, and code conventions into agent-hub knowledge files.
- **@refactoring-agent**: 
- **@security-auditor**: 
- **@test-writer**: 
- **@ui-inspector**: Launches the application via HTTP/DevServer, navigates routes, captures screenshots of page/component UI via headless browsers.
- **@visual-qa-agent**: Compares captured UI screenshots against reference designs (Figma exports, Jira attachments). Generates annotated diff reports with pass/fail status per viewport.