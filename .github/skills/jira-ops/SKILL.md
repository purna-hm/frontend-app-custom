---
name: Jira Ops
description: Standard operating procedures for interacting with Jira
version: "1.0"
---

# Jira Ops Skill

## Purpose
This skill provides the standard procedures for interacting with Jira. It is used by the `jira-agent` and can be invoked directly if needed.

## Capabilities
- Get Issue Details
- Update Issue Status
- Add Comments to Issue
- Transition Issue Workflow
- Download Ticket Attachments

## Usage
When asked to perform a Jira operation, follow these steps:

1.  **Identify Ticket**: Ensure you have the Jira Ticket ID (e.g., KAN-123).
2.  **Select Tool**: Use the appropriate MCP tool (e.g., `jira_get_issue`, `jira_update_issue`).
3.  **Execute**: Run the tool with the ticket ID and necessary parameters (status, comment, etc.).
4.  **Verify**: Check the tool output to ensure the operation was successful.

## Common Operations

### Update Work Summary
To update the summary of work done on a ticket:
1.  Read the current execution log or summary provided by the Orchestrator.
2.  Format it as a concise comment.
3.  Call `jira_add_comment` with the summary.

### Transition Status
To change the status of a ticket (e.g., "In Progress" -> "Done"):
1.  Check the current status using `jira_get_issue`.
2.  Identify the transition ID or name required.
3.  Call `jira_transition_issue` (or equivalent) to update the status.

### Logging Execution Metrics
When provided with execution metrics (tokens, time) by the orchestrator:
1.  Use the **exact values** provided. Do NOT estimate, approximate, or invent metrics.
2.  If the orchestrator provides a pre-formatted comment template, post it as-is.
3.  If no template is provided, format the data as:
    - "Total Active Time (Excl. HITL): [ACTUAL_TIME_FROM_LOG]"
    - "Token Usage: [ACTUAL_TOKENS or N/A (not reported by IDE)]"
4.  **CRITICAL**: If metrics are not provided, state "Metrics not available". Never hallucinate values like "~2 weeks" or "100+ hours equivalent".
5.  Call `jira_add_comment` with this summary when the feature is finalized.

### Downloading Attachments
The official Atlassian MCP does not support downloading binary files (like PDFs, Excel files, or images). The Atlassian Search tool only provides text-based search results across Jira issues and Confluence pages.

Therefore, you must handle attachments as follows:
1.  Read the ticket description and any linked Confluence PRDs/BRDs using `jira_get_issue` or the Atlassian Search tool.
2.  If you detect that binary attachments (e.g., "PDF_Fields.xlsx", "Invoice.pdf") are expected for this ticket:
3.  **STOP and ASK the User**: You MUST pause your execution and inform the user.
    - Example prompt: *"The ticket mentions an attachment (`PDF_Fields.xlsx`). The Atlassian MCP cannot retrieve binary files. Please download it manually and place it in the `docs/{ticket_no}/jira-docs/` folder. Reply 'done' when you are ready."*
4.  Do NOT attempt to guess the contents or skip the file if it is critical for database/API mapping. Wait for the user to confirm they have provided the file before proceeding to parse it.