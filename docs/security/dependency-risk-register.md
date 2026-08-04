---
title: Synthsara.org Dependency Risk Register
summary: Records the known dependency risk exposed during the first UDS-governed public portal build.
owner: Synthsara.org maintainers
registry_id: SYN-SEC-WEB-001
claim_class: EMPIRICAL EVIDENCE
implementation_status: DRAFT
canonical_status: candidate
public_visibility: public
source_links:
  - https://github.com/chaosweaver007/Synthsara.org/actions/runs/30905204553
  - ../../package.json
  - ../../package-lock.json
last_reviewed: 2026-08-04
known_limitations:
  - The reported counts come from npm audit during one locked dependency installation and can change as advisories or packages change.
  - The current record does not yet identify which findings affect the deployed public route, development-only tooling, historical contract code, or unused prototype components.
---

# Synthsara.org dependency risk register

> **Current status:** unresolved dependency debt. The public portal builds, but the repository must not be described as security-reviewed or production-ready.

## Observed result

During the first UDS-governed GitHub Actions build, `npm ci` reported:

| Severity | Count |
| --- | ---: |
| Low | 16 |
| Moderate | 9 |
| High | 21 |
| Critical | 2 |
| **Total** | **48** |

The result was produced from the committed `package-lock.json` while installing 667 audited packages. The public documentation check and Next.js production build passed after legacy type and dependency errors were repaired, but a successful build does not neutralize security advisories.

## What this evidence does and does not mean

This result means the current mixed-generation dependency tree contains known advisory matches that require triage.

It does not yet establish:

- that all 48 findings are remotely exploitable through the current public page;
- that none of them are exploitable;
- that development-only findings can be ignored;
- that an automatic forced upgrade would be safe;
- that the portal has passed penetration testing, threat modeling, or independent review.

The repository still combines public web dependencies, historical Hardhat and Solidity tooling, old prototype components, and packages that may no longer belong in the public portal. That mixture inflates both attack surface and audit ambiguity.

## UDS impact

### Security

Known critical and high findings block any claim of production security until they are understood and repaired or explicitly shown to be unreachable in the deployed boundary.

### Transparency

The counts, source run, limitations, and repair status remain public. A green build badge must not conceal audit debt.

### Accountability

Each unresolved advisory family needs an owner, affected package path, runtime reachability assessment, selected remedy, regression tests, and closure evidence.

### Privacy

Any advisory affecting request handling, client rendering, storage, authentication, environment variables, server functions, or dependency installation receives priority because it could cross user-data or credential boundaries.

### Ecology

Removing unused packages and separating historical projects reduces installation cost, maintenance load, supply-chain surface, and repeated CI consumption.

## Repair sequence

1. Run and preserve full `npm audit --json` output for the current lockfile.
2. Separate runtime dependencies from development and historical contract dependencies.
3. Identify packages unused by the new public portal.
4. Remove unused packages before attempting broad upgrades.
5. Move governance-contract tooling into a dedicated repository or isolated package if it remains active.
6. Upgrade direct dependencies deliberately, one family at a time.
7. Rebuild, run documentation validation, and test the rendered portal after each change.
8. Assess remaining advisories for runtime reachability and compensating controls.
9. Add an enforced production dependency threshold once the legacy tree is reduced.
10. Record closure evidence in this register and the related pull request or issue.

## Production threshold

The portal cannot move from `STATIC PROTOTYPE` to `PRODUCTION` while:

- critical dependency findings remain unresolved;
- high findings lack reachability analysis and explicit acceptance or repair;
- unused historical dependencies remain bundled into the public application;
- no threat model exists for the deployed route;
- incident response and dependency-update ownership remain undefined.

## Known limitations

Advisory counts are a moving signal, not a complete security assessment. They must be combined with code review, deployed-boundary analysis, configuration review, threat modeling, access-control testing, privacy review, and independent testing appropriate to the system's consequence level.
