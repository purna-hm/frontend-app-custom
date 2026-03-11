---
name: CI/CD Ops
description: Reusable templates and configuration patterns for GitHub Actions, GitLab CI, and Azure DevOps Pipelines.
version: "1.0"
---

# Skill: CI/CD Ops (GitHub Actions, GitLab CI, Azure DevOps)

## Purpose
Provides reference architectures and reusable workflow templates for setting up CI/CD pipelines across major providers. 

---

## 1. Container Build & Push

### GitHub Actions (OIDC to AWS ECR)
```yaml
name: Build and Push to ECR
on:
  push:
    branches: [main]
permissions:
  id-token: write
  contents: read
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: ${{ secrets.AWS_ROLE_ARN }}
          aws-region: us-east-1
      - uses: aws-actions/amazon-ecr-login@v2
        id: login-ecr
      - run: |
          docker build -t ${{ steps.login-ecr.outputs.registry }}/my-app:${{ github.sha }} .
          docker push ${{ steps.login-ecr.outputs.registry }}/my-app:${{ github.sha }}
```

### GitLab CI (Docker-in-Docker)
```yaml
build:
  image: docker:24.0.5
  services:
    - docker:24.0.5-dind
  stage: build
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
```

### Azure DevOps
```yaml
trigger:
  - main
pool:
  vmImage: 'ubuntu-latest'
steps:
- task: Docker@2
  inputs:
    containerRegistry: 'service-connection-name'
    repository: 'my-app'
    command: 'buildAndPush'
    Dockerfile: '**/Dockerfile'
    tags: |
      $(Build.BuildId)
```

---

## 2. CI Quality Gate (Test & Lint)

### GitHub Actions (Node.js)
```yaml
name: Node CI
on: [pull_request]
jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm test
```

### GitLab CI (Python)
```yaml
test:
  image: python:3.11
  stage: test
  cache:
    paths:
      - .cache/pip
  before_script:
    - pip install -r requirements.txt
  script:
    - black --check .
    - pytest
```

---

## 3. Concurrency & Rate Limiting

### GitHub Actions
```yaml
concurrency:
  group: deploy-${{ github.ref }}
  cancel-in-progress: true
```

### Azure DevOps
```yaml
# In the pipeline settings or YAML
lockBehavior: runLatest
```

---

## Token Budget
~600 tokens