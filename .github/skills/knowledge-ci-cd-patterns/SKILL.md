---
name: CI/CD Patterns
description: Detailed patterns, anti-patterns, and best practices for CI/CD across GitHub Actions, GitLab CI, and Azure DevOps.
version: "1.0"
---

# Knowledge: CI/CD Patterns

This document covers best practices and anti-patterns for implementing continuous integration and deployment workflows.

## 1. Authentication & Secrets

### Pattern: OIDC (OpenID Connect)
**Context:** Authenticating CI pipelines to cloud providers (AWS, Azure, GCP).
**Implementation:**
- Do not use long-lived static credentials (`AWS_ACCESS_KEY_ID`, `AZURE_CLIENT_SECRET`).
- Configure the cloud provider to trust the CI provider's identity token.
- **GitHub**: Use `permissions: { id-token: write }` and `aws-actions/configure-aws-credentials` with `role-to-assume`.
- **GitLab**: Bind an IAM role to the GitLab JWKS URL and pass `id_tokens` in the job configuration.
- **Azure DevOps**: Use Azure Resource Manager service connections with Workload Identity Federation.

### Anti-Pattern: Hardcoded Secrets in Logs
- Never use `echo $SECRET` to debug variables. Use CI-native masking features (`::add-mask::` in GitHub or explicit variable masking in GitLab/Azure).

---

## 2. Dependency Caching

### Pattern: Key-based Caching
**Context:** Speeding up `npm ci`, `mvn install`, `pip install`, etc.
**Implementation:**
- Hash the lockfile (`package-lock.json`, `pom.xml`) to generate cache keys.
- **GitHub**: Prefer built-in caching via setup actions (`setup-node` with `cache: 'npm'`).
- **GitLab**: Use the `cache:` keyword, specifying `paths` (e.g., `node_modules/` or `.npm/`) and a `key` based on branch or lockfile hash.
- **Azure**: Use the `Cache@2` task with `key` and `path`.

### Anti-Pattern: Caching Build Artifacts
- **Problem**: Caching `dist/` or `target/` directories across builds can lead to stale state and flaky deployments.
- **Fix**: Use explicit artifact uploads/downloads to pass build outputs to deployment jobs, and use caching ONLY for external dependencies.

---

## 3. Concurrency Control

### Pattern: Cancellation of Obsolete Runs
**Context:** A developer pushes multiple commits quickly to the same PR.
**Implementation:**
- Ensure previous pending/running jobs on the same ref are cancelled to save compute time and prevent race conditions.
- **GitHub**: Use `concurrency: group: ${{ github.workflow }}-${{ github.ref }} cancel-in-progress: true`
- **GitLab**: Use `interruptible: true` in `.gitlab-ci.yml`.

### Anti-Pattern: Parallel Deployments
- **Problem**: Two CI runs attempting to deploy Terraform or CloudFormation to the same environment simultaneously causes state lock errors.
- **Fix**: Ensure the deployment job is scoped to a single concurrency group across the repository, not just the branch.

---

## 4. Reusability & DRY Principles

### Pattern: Reusable Workflows/Templates
**Context:** Multiple microservices or directories use the exact same build logic.
**Implementation:**
- **GitHub**: Extract common logic to a separate YAML file and call it with `uses: my-org/my-repo/.github/workflows/build.yml@main`.
- **GitLab**: Extract logic to template files and use `include:` and `extends:`.
- **Azure DevOps**: Use pipeline templates (`template: my-template.yml`).

## Token Budget
~700 tokens