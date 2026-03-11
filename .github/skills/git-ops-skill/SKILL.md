---
name: Git Ops Skill
description: Standard operating procedures for Git workflows (Feature Branching)
version: "1.0"
---

# Git Ops Skill

## Purpose
This skill defines the standard Git workflow for the team. It is used by the `git-ops` agent.

## Workflow: Feature Development

1.  **Start Feature**
    -   Ensure you are on the main branch: `git checkout main` and `git pull`.
    -   Create a new branch for the ticket: `git checkout -b feature/{ticket_no}`.
    -   Push the new branch: `git push -u origin feature/{ticket_no}`.

2.  **During Development**
    -   Commit changes frequently with descriptive messages.
    -   Format: `[{ticket_no}] {concise-description}`.

3.  **Finish Feature**
    -   Ensure all tests pass.
    -   Commit final changes.
    -   Push the branch.
    -   Create a Pull Request (PR) to merge `feature/{ticket_no}` into `main`.

## Usage
When asked to perform Git operations, use the `run_command` tool to execute the standard Git CLI commands.

### Creating a PR
If a specific `git_create_pr` tool is available, use it. Otherwise, instruct the user to create the PR via the GitHub UI, providing them the link:
`https://github.com/{owner}/{repo}/compare/{branch}?expand=1`