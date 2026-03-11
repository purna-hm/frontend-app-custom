---
mode: agent
description: Orchestrated python-security-audit workflow — delegates to specialized agents
agents:
  - feature-orchestrator
  - task-orchestrator
  - security-auditor
  - code-reviewer
  - dependency-manager
  - testing-specialist
  - reporting-agent
  - git-ops
---

# python-security-audit Workflow

Analyze the task and delegate to the most appropriate specialist agent.

## Available Agents

- **security-auditor**: 
- **code-reviewer**: 
- **dependency-manager**: 
- **testing-specialist**: 
- **reporting-agent**: 
- **git-ops**: 

## Process
1. Analyze the user's request
2. Identify which specialist(s) are needed
3. Delegate via `runSubagent` with specific instructions
4. Combine results and present to user
