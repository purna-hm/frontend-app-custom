---
mode: agent
description: Orchestrated python-quality-gate workflow — delegates to specialized agents
agents:
  - feature-orchestrator
  - task-orchestrator
  - testing-specialist
  - type-safety-specialist
  - dependency-manager
  - reporting-agent
  - local-deploy-agent
---

# python-quality-gate Workflow

Analyze the task and delegate to the most appropriate specialist agent.

## Available Agents

- **testing-specialist**: 
- **type-safety-specialist**: 
- **dependency-manager**: 
- **reporting-agent**: 
- **local-deploy-agent**: Handles optional local container deployment (Docker/Podman), builds containers, injects environment variables, verifies startup logs, and iteratively fixes issues.

## Process
1. Analyze the user's request
2. Identify which specialist(s) are needed
3. Delegate via `runSubagent` with specific instructions
4. Combine results and present to user
