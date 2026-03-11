---
name: Sonatype Skill
description: Interface for Sonatype Lifecycle/IQ checks to identify component vulnerabilities.
version: "1.0"
---

# Skill: Sonatype Lifecycle

## Purpose
Identify open source component vulnerabilities and license risks using Sonatype Lifecycle (IQ Server).

## Capabilities
Methods to interact with the Sonatype MCP server.

### Tools
- `sonatype_evaluate_component`: Evaluate a component against policy.
- `sonatype_get_policy_violations`: Get policy violations for an application.
- `sonatype_scan_dependencies`: Scan a manifest file (pom.xml, package.json) for vulnerabilities.

## Usage
When `pom.xml` or `package.json` is modified, use this skill to check for introduced vulnerabilities.

```markdown
Dependency check initiated.
Scanning `pom.xml`...
Found 2 critical violations.
```