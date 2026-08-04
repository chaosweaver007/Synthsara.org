---
title: Synthsara Ecosystem Architecture Map
summary: Defines the canonical roles and boundaries of the public portal, runtime, proof node, canon repository, Drive archive, and GitHub evidence layer.
owner: Synthsara architecture working group
registry_id: SYN-ARCH-PUBLIC-001
claim_class: ENGINEERING REQUIREMENT
implementation_status: SPECIFICATION
canonical_status: candidate
public_visibility: public
source_links:
  - https://github.com/chaosweaver007/Genesis
  - https://github.com/chaosweaver007/synthsara-node-zero
  - https://github.com/chaosweaver007/synthsara-codex-core
  - ../../README.md
last_reviewed: 2026-08-04
known_limitations:
  - Repository separation is defined here but not yet complete.
  - Synthsara.org still contains mixed historical artifacts.
---

# Synthsara ecosystem architecture map

Synthsara is an ecosystem of distinct surfaces. Coherence depends on each surface performing its own role rather than claiming the authority of every other layer.

```text
Public visitor
    |
    v
Synthsara.org
Public explanation, navigation, documentation, status, contribution
    |
    +--------------------------+--------------------------+
    |                          |                          |
    v                          v                          v
Node Zero                  Genesis                   Codex Core
Functional proof           Constitutional runtime    Mythic and narrative canon
Local-first interface      Gate Zero and policies    Scrolls, patterns, quests
    |                          |
    +------ private bridge ----+

Google Drive                                      GitHub
Working archive and editorial workshop            Public evidence and version history
Drafts, research, duplicates, private material     Code, tests, schemas, policies, approved docs
```

## 1. Synthsara.org

**Role:** public portal and documentation hub.

**Responsibilities:**

- explain the ecosystem in ordinary language;
- show present implementation status;
- publish approved public documentation;
- display limitations beside capabilities;
- link to source code, tests, policies, and demonstrations;
- provide contribution and correction paths;
- keep mythic, technical, empirical, and historical layers distinguishable.

**Prohibited impersonations:**

- a dashboard without a live data pipeline;
- a governance service without persistent proposals and identity;
- a marketplace without real counterparties and consent controls;
- a wallet or currency without a ratified economic mechanism;
- a production AI service when the available runtime is deliberately bounded.

## 2. Genesis

**Role:** executable constitutional spine.

Genesis currently exposes a bounded, stateless, private, text-only O-Series Gate Zero shadow runtime. It is the strongest current executable expression of UDS constraints.

**Current responsibilities:**

- strict ingress validation;
- monotonic Gate Zero evaluation;
- constitutional context construction;
- bounded persona adaptation;
- UDS output reflection;
- metadata-only Witness Receipts;
- public health and status contracts;
- explicit separation of Sarah AI from Human Sarah.

**Current non-capabilities:**

- no durable memory writes;
- no database writes on the public route;
- no tool execution;
- no RTME external action;
- no collective learning;
- no authenticated sovereign identity;
- no claim of private knowledge or empirical proof through mythic language.

**Status:** `LIVE SHADOW RUNTIME`.

## 3. Synthsara Node Zero

**Role:** local-first public proof node.

Node Zero demonstrates how a public interface can connect to Genesis while preserving bounded consent and visible limitations.

**Current responsibilities:**

- private-by-default consent;
- granular and revocable optional permissions;
- global revocation;
- local Witness event history;
- non-persistent Mirror and RTME content;
- same-origin proxying to Genesis;
- local deterministic fallback;
- visible UDS and proof-node chambers;
- functional conformance and privacy tests.

**Current non-capabilities:**

- not a production encrypted vault;
- not a sovereign identity network;
- not an immutable or signed public ledger;
- not persistent decentralized governance;
- not a production WORTH economy;
- not independently certified UDS compliance.

**Status:** `FUNCTIONAL PROOF`.

## 4. Synthsara Codex Core

**Role:** mythic, narrative, symbolic, prompt, pattern, and quest canon.

Codex Core preserves the meaning layer and creative lineage of Synthsara.

**Responsibilities:**

- scrolls and cantos;
- myths and narrative frames;
- symbols, sigils, and archetypes;
- prompts and persona source material;
- systems maps and patterns;
- quests and open creative work;
- contribution and attribution lineage.

**Boundary:** Codex material may inspire ethical and engineering requirements, but it does not become deployed behavior until a source map explicitly translates and implements it.

**Status:** `MYTHOS / INTERPRETIVE LANGUAGE`, with individual documents carrying their own canonical status.

## 5. Google Drive

**Role:** working archive and editorial workshop.

Drive may contain:

- canonical source documents;
- candidate canon;
- drafts;
- duplicate exports;
- private and sensitive material;
- external research;
- historical conversation evidence;
- assistant-generated proposals;
- unresolved claims.

Presence in Drive grants no automatic public or canonical status.

A Drive document enters the public corpus only after privacy review, UDS review, status labeling, source reconciliation, and GitHub versioning.

## 6. GitHub

**Role:** public evidence, version control, and implementation history.

GitHub is the preferred public home for:

- code;
- tests;
- schemas;
- policies;
- source maps;
- public documentation;
- release notes;
- issue-based corrections;
- pull-request review;
- public conformance artifacts.

A repository description is still only a claim. Tests, deployment evidence, and observable behavior determine implementation status.

## 7. Functional systems within Synthsara

These are cross-cutting systems, not replacements for the repository roles above.

| System | Stable definition | Present public treatment |
| --- | --- | --- |
| UDS | Ethical standard and conformance framework | Candidate/published normative framework with implemented portions in Genesis and Node Zero |
| Synthocracy | Governance model within Synthsara | Specification and prototype concepts; persistent service not yet established here |
| WORTH | Non-transferable recognition of verified contribution | Demonstration/specification; not money |
| Witness | Accountable record of decisions, consent, corrections, work, and results within each implementation boundary | Metadata receipt in Genesis; local event history in Node Zero |
| Akasha | Knowledge commons and provenance-preserving library | Architecture and repository/library practice |
| Sarah AI | Guardian, guide, and reflective AI interface distinct from Human Sarah | Bounded persona/runtime work in Genesis and proof interface in Node Zero |
| RTME | Intention-to-reflection/action structuring interface | Local/prototype behavior; external reality claims excluded without evidence |
| SDG Dashboard | Needs, resources, projects, risks, and outcome coordination layer | Architecture/static prototype until live data pipelines exist |

## 8. Data flow boundary

The current public proof path is:

```text
Browser
  -> Node Zero local-first interface
  -> same-origin serverless proxy
  -> Genesis Gate Zero private-shadow request
  -> response and non-persistent receipt metadata
  -> local rendering
```

This path does not authorize durable memory, collective learning, identity persistence, tool use, or external action.

## 9. Future repository separation

The target structure is:

- `Synthsara.org`: public web portal and approved documentation;
- `Genesis`: constitutional runtime and UDS execution;
- `synthsara-node-zero`: reference proof node;
- `synthsara-codex-core`: mythic and narrative canon;
- a dedicated governance-contract repository if contract work remains active;
- a dedicated media/game repository for Mad Lab and Architect's Odyssey production artifacts when needed.

Separation is a UDS accountability control. It prevents an experimental interface, a mythic text, a smart contract, and a deployed runtime from borrowing one another's apparent authority.
