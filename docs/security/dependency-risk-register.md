---
title: Synthsara.org Dependency Risk Register
summary: Records dependency-risk evidence and the enforced production threshold for the public portal.
owner: Synthsara.org maintainers
registry_id: SYN-SEC-WEB-001
claim_class: EMPIRICAL EVIDENCE
implementation_status: FUNCTIONAL PROOF
canonical_status: candidate
public_visibility: public
source_links:
  - https://github.com/chaosweaver007/Synthsara.org/actions/runs/30940756869
  - ../../package.json
  - ../../package-lock.json
  - ../../.github/workflows/public-documentation.yml
last_reviewed: 2026-08-04
known_limitations:
  - A clean package audit is not a penetration test, threat model, configuration review, or proof that no undisclosed vulnerability exists.
  - Advisory data changes over time, so the result applies only to the committed lockfile and the registry state at the recorded run.
  - Historical prototype files remain in the repository but are not imported by the public portal route.
---

# Synthsara.org dependency risk register

> **Current status:** the public portal's locked production dependency graph passes the enforced high-severity npm audit threshold. This closes the previously recorded advisory matches for the portal dependency boundary, but it does not establish complete production security.

## Initial finding

The first UDS-governed portal build installed a mixed dependency tree containing public web packages, historical contract tooling, visualization libraries, form libraries, request libraries, and unused prototype components. That installation reported:

| Severity | Count |
| --- | ---: |
| Low | 16 |
| Moderate | 9 |
| High | 21 |
| Critical | 2 |
| **Total** | **48** |

A production-only audit still reported 14 findings: 3 moderate, 9 high, and 2 critical. The original workflow exposed the result but allowed the audit step to fail without failing the job.

## Repair completed

The public route was traced to its actual runtime boundary. It uses the Next.js Pages Router and React rendering and does not import the historical Axios, Hardhat, Solidity, OpenZeppelin, D3, Formik, Framer Motion, Zustand, Three.js, or other prototype packages.

The repair therefore:

1. removed unused runtime and historical tooling from the portal package manifest;
2. reduced direct runtime dependencies to Next.js, React, and React DOM;
3. upgraded Next.js to the patched 16.3.0 release line;
4. regenerated the lockfile from the reduced manifest;
5. ran `npm audit --omit=dev --audit-level=high` against the regenerated graph;
6. received `found 0 vulnerabilities` from the recorded GitHub Actions run;
7. changed normal CI so a high or critical production advisory fails the required portal job;
8. disabled persisted checkout credentials in the validation workflow.

## Current locked boundary

Direct production dependencies:

- `next` 16.3.0
- `react` 19.2.8
- `react-dom` 19.2.8

Direct development dependencies are limited to TypeScript and React/Node type declarations. The lockfile also contains transitive and platform-specific optional packages required by Next.js.

## UDS assessment

### Security

Known high and critical advisory matches are no longer accepted as a warning-only condition. The production audit threshold is enforced on pull requests and pushes to `main`.

### Transparency

The initial failure counts remain recorded rather than erased. The repair run, manifest, lockfile, and workflow are linked as evidence.

### Accountability

A future high or critical production advisory blocks the portal validation job until the package is upgraded, removed, isolated, or explicitly redesigned out of the deployed boundary.

### Privacy

Removing unused request, state, form, contract, and data-processing libraries reduces the number of packages capable of crossing user-data, credential, or network boundaries.

### Ecology

The smaller graph reduces installation work, CI transfer, maintenance surface, and supply-chain exposure.

## Remaining security work

A clean package audit does not replace:

- deployed configuration review;
- content-security-policy and security-header validation;
- threat modeling;
- secret and environment-variable review;
- access-control testing;
- privacy testing;
- incident-response ownership;
- independent application testing.

## Production threshold

The portal may be described as having a **clean enforced production dependency audit at the recorded lockfile revision**. It must not be described as fully security-reviewed or penetration-tested until those separate controls and evidence exist.
