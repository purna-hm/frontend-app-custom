---
name: Snyk Skill
description: Interface for Snyk CLI to identify code vulnerabilities, open-source dependencies issues, and container security.
version: "1.0"
---

# Skill: Snyk Security Scanning

## Purpose
Perform Static Application Security Testing (SAST) and Software Composition Analysis (SCA) using Snyk.

## Capabilities
Methods to interact with the Snyk CLI for security scanning. Ensure `snyk auth` has been run or `SNYK_TOKEN` environment variable is set before executing these commands.

### Tools
- `snyk test`: Scans open-source dependencies for known vulnerabilities (e.g., in `pom.xml` or `package.json`).
- `snyk code test`: Scans source code for security vulnerabilities (SAST).
- `snyk iac test`: Scans Infrastructure as Code (IaC) files like Terraform, Kubernetes, or CloudFormation.
- `snyk container test <image>`: Scans a container image for vulnerabilities.

## Usage
When validating security or when a dependency manifest (`pom.xml`, `package.json`) is modified, use this skill to check for introduced vulnerabilities.

### CLI Examples
To run a code test and output as JSON for easier parsing by the agent:
```bash
snyk code test --json
```

To test dependencies:
```bash
snyk test --all-projects
```

### Agent Instruction
Parse the JSON or text output to identify severe vulnerabilities and filter results to only issues in changed files.

### Changed-Code Scoping
When a `changed_files` manifest is provided by the orchestrator:
- For `snyk code test`: Run normally but filter the JSON output to only include issues whose file path appears in the `changed_files` manifest.
- For `snyk test` (dependency scan): Only run if `pom.xml`, `package.json`, or `build.gradle` appears in `changed_files`.
- If `changed_files` is `ALL`, report all findings (greenfield project).

### Output Format (for User Triage)
Return issues in a categorized table so the orchestrator can present them for user selection:
```markdown
| # | Severity | File | Line | Issue | Type |
|---|----------|------|------|-------|------|
| 1 | 🔴 HIGH | UserService.java | 45 | Hardcoded secret | Code |
| 2 | 🟡 MEDIUM | pom.xml | — | jackson-databind CVE-2023-XXXX | Dependency |
```