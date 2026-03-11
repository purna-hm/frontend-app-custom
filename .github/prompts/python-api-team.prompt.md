---
mode: agent
description: Orchestrated python-api-team workflow — delegates to specialized agents
agents:
  - feature-orchestrator
  - task-orchestrator
  - api-designer
  - architect
  - reporting-agent
  - coding-agent
  - testing-specialist
  - code-reviewer
  - documentation-writer
  - git-ops
  - jira-agent
  - project-scanner
  - local-deploy-agent
---

# python-api-team Workflow

Analyze the task and delegate to the most appropriate specialist agent.

## Available Agents

- **api-designer**: 
- **architect**: 
- **reporting-agent**: 
- **coding-agent**: 
- **testing-specialist**: 
- **code-reviewer**: 
- **documentation-writer**: 
- **git-ops**: 
- **jira-agent**: 
- **project-scanner**: Deeply scans the codebase to extract patterns, architecture decisions, and code conventions into agent-hub knowledge files.
- **local-deploy-agent**: Handles optional local container deployment (Docker/Podman), builds containers, injects environment variables, verifies startup logs, and iteratively fixes issues.

## Process
1. Analyze the user's request
2. Identify which specialist(s) are needed
3. Delegate via `runSubagent` with specific instructions
4. Combine results and present to user
