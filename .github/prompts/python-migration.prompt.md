---
mode: agent
description: Orchestrated python-migration workflow — delegates to specialized agents
agents:
  - feature-orchestrator
  - task-orchestrator
  - migration-specialist
  - architect
  - coding-agent
  - testing-specialist
  - database-specialist
  - type-safety-specialist
  - git-ops
  - content-extractor
  - project-scanner
  - reporting-agent
---

# python-migration Workflow

Analyze the task and delegate to the most appropriate specialist agent.

## Available Agents

- **migration-specialist**: 
- **architect**: 
- **coding-agent**: 
- **testing-specialist**: 
- **database-specialist**: 
- **type-safety-specialist**: 
- **git-ops**: 
- **content-extractor**: 
- **project-scanner**: Deeply scans the codebase to extract patterns, architecture decisions, and code conventions into agent-hub knowledge files.
- **reporting-agent**: 

## Process
1. Analyze the user's request
2. Identify which specialist(s) are needed
3. Delegate via `runSubagent` with specific instructions
4. Combine results and present to user
