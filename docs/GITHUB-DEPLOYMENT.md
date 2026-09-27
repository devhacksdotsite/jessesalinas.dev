# GitHub Actions Deployment

This repository contains two independent static sites:

- The developer portfolio at the repository root.
- The UGC portfolio under `ugc/`.

Each site has its own path-scoped workflow:

```text
.github/workflows/deploy-developer.yml
.github/workflows/deploy-ugc.yml
```

## Trigger behavior

- Changes to the root portfolio deploy only the developer site.
- Changes under `ugc/` deploy only the UGC site.
- A commit that changes both areas deploys both sites.
- Workflows run only after pushes to `main`.

## GitHub configuration

Both workflows use GitHub OIDC and expect this GitHub Actions secret:

```text
AWS_DEPLOY_ROLE_ARN
```

Set it on the repository or on the `production` environment. The AWS role trust policy should be restricted to:

```text
repo:devhacksdotsite/jessesalinas.dev:ref:refs/heads/main
```

The policy files used for the deployment role are checked in here:

- [`github-actions-trust-policy.json`](github-actions-trust-policy.json)
- [`github-actions-permissions-policy.json`](github-actions-permissions-policy.json)

The role should be allowed to:

- Upload and delete objects in `arn:aws:s3:::jesse-salinas.com/*`.
- Upload and delete objects in `arn:aws:s3:::ugc.jesse-salinas.com/*`.
- Create invalidations for CloudFront distributions `E6M3IQC5WMA7U` and `EQ7UJH31IY14C`.

Prefer separate roles for the developer and UGC workflows if tighter isolation is required. In that case, use separate secrets such as `AWS_DEVELOPER_DEPLOY_ROLE_ARN` and `AWS_UGC_DEPLOY_ROLE_ARN` and update the corresponding workflow.

## Local verification

```sh
npm run build
(cd ugc && npm run build)
```
