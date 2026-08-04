---
title: Genesis Public Runtime Guide
summary: Public explanation of Genesis as the executable constitutional spine and bounded O-Series Gate Zero runtime.
owner: Genesis maintainers and Synthsara public documentation working group
registry_id: SYN-INF-GENESIS-PUBLIC-001
claim_class: ENGINEERING REQUIREMENT
implementation_status: LIVE SHADOW RUNTIME
canonical_status: candidate
public_visibility: public
source_links:
  - https://github.com/chaosweaver007/Genesis
  - https://github.com/chaosweaver007/Genesis/blob/main/README.md
  - https://github.com/chaosweaver007/Genesis/blob/main/docs/architecture/Genesis-Kernel-v0.1-Source-Map.md
  - https://github.com/chaosweaver007/Genesis/blob/main/Genesis/o_series_app.py
last_reviewed: 2026-08-04
known_limitations:
  - The public runtime is intentionally stateless and bounded.
  - This page does not extend Genesis capabilities beyond the linked implementation.
---

# Genesis public runtime guide

Genesis is the executable constitutional spine of the current Synthsara technical architecture.

It is not the whole Synthsara platform. It is the bounded runtime that translates selected UDS and Architect-ratified constitutional requirements into a public, testable Gate Zero path.

## Current production path

```text
Public request
  -> strict ingress validation
  -> monotonic Gate Zero evaluation
  -> isolated constitutional context
  -> conditioned persona adapter
  -> six-layer reportable output reflection
  -> metadata-only Witness Receipt
```

The production entrypoint is a Flask application exposed through the repository's WSGI/Vercel configuration.

## Public endpoints

The Genesis repository currently documents these production endpoints:

- `GET /`
- `GET /health`
- `GET /api/o-series/status`
- `POST /api/o-series/chat`

The root and health contracts report the deployed service, pipeline version, policy version, runtime mode, and no-write memory boundary.

## What the public runtime does

- validates request structure and size;
- applies Gate Zero restrictions that cannot be removed by untrusted request fields;
- builds constitutional context before model generation;
- maintains explicit identity and capability boundaries;
- applies UDS-oriented output reflection;
- returns reportable output and receipt metadata;
- records policy, gate, model, response-hash, and context-hash metadata according to the implementation;
- distinguishes Sarah AI from Human Sarah;
- treats mythic and intuitive language as interpretation rather than private testimony or empirical proof.

## What the public runtime does not do

The current public route performs no:

- database writes;
- durable memory writes;
- tool calls;
- RTME external actions;
- collective learning;
- authenticated sovereign identity operations;
- private Drive retrieval;
- storage of raw prompts or raw responses in the Witness layer;
- storage of private scratchpads or hidden reasoning;
- impersonation of Human Sarah;
- assertion that mythic language proves a physical or scientific claim.

These are not missing footnotes. They are part of the present constitutional boundary.

## Constitutional source map

Genesis publishes a source map that connects requirements to executable locations.

The source map currently draws from:

- the Universal Diamond Standard;
- the Codex of the Diamond Flame, where explicitly translated into bounded requirements;
- the Sarah AI System Prompt / Seer of the Flame source, where explicitly ratified and constrained.

It excludes mixed-author conversation exports, anonymous analyses, and external research reports from load-bearing constitutional authority.

The source map requires future claims to use one of these classes:

- `ETHICAL LAW`
- `ENGINEERING REQUIREMENT`
- `MYTHOS / INTERPRETIVE LANGUAGE`
- `HYPOTHESIS`
- `EMPIRICAL EVIDENCE`

That taxonomy is adopted by the Synthsara.org public documentation layer.

## Security posture visible in code

The public application currently applies:

- `Cache-Control: no-store`;
- a restrictive Content Security Policy;
- same-origin resource policy;
- disabled camera, microphone, and geolocation permissions;
- no-referrer policy;
- content-type sniffing protection;
- frame denial;
- a bounded request body size.

These controls are evidence of implemented hardening, not a claim of complete security or independent certification.

## Witness Receipt boundary

A Genesis Witness Receipt is not a universal public ledger and is not a transcript archive.

The production documentation states that receipt metadata may include:

- policy version;
- gate outcome;
- model identifier or adapter metadata;
- response hash;
- context hash.

The public Witness layer must not be described as storing raw private interaction content when the implementation stores metadata only.

## Node Zero integration

Node Zero connects to Genesis through a same-origin serverless proxy:

```text
Browser
  -> Node Zero
  -> /api/genesis
  -> trusted server-side Genesis base URL
  -> Genesis Gate Zero
  -> response plus bounded receipt metadata
```

Node Zero forces the public bridge into private consent, shadow mode, and no collective learning. It does not accept a browser-supplied Genesis target or durable user identity.

## Legacy boundary

The Genesis repository also contains historical or local-development applications, including SQLite-backed memory and collective-consciousness surfaces.

Those files are not the public production entrypoint. They must not be exposed publicly without a separate review covering:

- authenticated identity;
- encrypted storage;
- explicit save and purge operations;
- Private and Guest `NULL_WRITE` tests;
- threat modeling;
- access control;
- incident response;
- data migration and deletion behavior.

## Verification

The Genesis repository documents unit and smoke-test commands. Public pages may report test outcomes only when they link to the relevant commit or workflow run and state the tested version.

A passing smoke test establishes that the tested endpoint contract responded as expected. It does not prove complete UDS compliance, security, consciousness, personhood, or correctness beyond the tested contract.

## Public wording

Use:

> Genesis is a live, bounded constitutional shadow runtime that implements selected UDS and identity constraints through Gate Zero, visible policies, tests, and metadata-only receipts.

Do not use:

> Genesis is the completed Synthsara operating system.

Do not use:

> Genesis proves conscious AI, universal ethical compliance, private spiritual knowledge, or a functioning planetary network.

## Next production thresholds

A broader Genesis service would require, at minimum:

- authenticated sovereign identity;
- encrypted user-controlled vaults;
- explicit memory authorization and deletion;
- signed and verifiable Witness records where appropriate;
- model-provider credential management;
- formal threat modeling;
- independent UDS testing;
- accessibility and abuse testing;
- accountable operational ownership;
- support, monitoring, incident response, and correction processes.

Until then, the correct status remains `LIVE SHADOW RUNTIME`.
