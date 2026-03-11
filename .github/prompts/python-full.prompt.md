---
mode: agent
description: Orchestrated python-full workflow — delegates to specialized agents
agents:
  - task-orchestrator
  - feature-orchestrator
  - api-designer
  - architect
  - async-specialist
  - cli-builder
  - coding-agent
  - config-specialist
  - crud-specialist
  - data-modeling-specialist
  - database-specialist
  - dependency-manager
  - error-handler
  - event-specialist
  - integration-specialist
  - observability-engineer
  - performance-optimizer
  - reporting-agent
  - resilience-engineer
  - task-queue-specialist
  - testing-specialist
  - type-safety-specialist
  - validation-specialist
  - ci-cd-agent
  - code-reviewer
  - content-extractor
  - database-admin
  - documentation-writer
  - figma-design-interpreter
  - git-ops
  - jira-agent
  - local-deploy-agent
  - migration-specialist
  - project-scanner
  - refactoring-agent
  - security-auditor
  - test-writer
  - ui-inspector
  - visual-qa-agent
---

# python-full Workflow

Analyze the task and delegate to the most appropriate specialist agent.

## Available Agents

- **api-designer**: 
- **architect**: 
- **async-specialist**: 
- **cli-builder**: 
- **coding-agent**: 
- **config-specialist**: 
- **crud-specialist**: 
- **data-modeling-specialist**: 
- **database-specialist**: 
- **dependency-manager**: 
- **error-handler**: 
- **event-specialist**: 
- **integration-specialist**: 
- **observability-engineer**: 
- **performance-optimizer**: 
- **reporting-agent**: 
- **resilience-engineer**: 
- **task-queue-specialist**: 
- **testing-specialist**: 
- **type-safety-specialist**: 
- **validation-specialist**: 
- **ci-cd-agent**: Inspects project type, detects CI/CD needs, and generates/modifies workflows for GitHub Actions, GitLab CI, and Azure DevOps with cloud credential handling and best practices.
- **code-reviewer**: 
- **content-extractor**: 
- **database-admin**: Manages database schemas, inspections, and migrations.
- **documentation-writer**: 
- **figma-design-interpreter**: Connects to Figma MCP to extract design specs, component trees, design tokens, and layout data for downstream agents.
- **git-ops**: 
- **jira-agent**: 
- **local-deploy-agent**: Handles optional local container deployment (Docker/Podman), builds containers, injects environment variables, verifies startup logs, and iteratively fixes issues.
- **migration-specialist**: 
- **project-scanner**: Deeply scans the codebase to extract patterns, architecture decisions, and code conventions into agent-hub knowledge files.
- **refactoring-agent**: 
- **security-auditor**: 
- **test-writer**: 
- **ui-inspector**: Launches the application via HTTP/DevServer, navigates routes, captures screenshots of page/component UI via headless browsers.
- **visual-qa-agent**: Compares captured UI screenshots against reference designs (Figma exports, Jira attachments). Generates annotated diff reports with pass/fail status per viewport.

## Process
1. Analyze the user's request
2. Identify which specialist(s) are needed
3. Delegate via `runSubagent` with specific instructions
4. Combine results and present to user
