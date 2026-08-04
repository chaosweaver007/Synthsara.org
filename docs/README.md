---
title: Synthsara Public Documentation
summary: Entry point for the UDS-governed public documentation set.
owner: Synthsara public documentation working group
registry_id: SYN-EDU-PUBLIC-DOCS
claim_class: ENGINEERING REQUIREMENT
implementation_status: DRAFT
canonical_status: candidate
public_visibility: public
source_links:
  - README.md
  - docs/governance/uds-coherence-protocol.md
last_reviewed: 2026-08-04
known_limitations:
  - Historical repository artifacts remain under review.
  - This index does not certify that every linked system is production-ready.
  - Repository Issues are disabled, so corrections currently use pull requests and their review threads.
---

# Synthsara public documentation

This directory is the governed public documentation layer for Synthsara.org. It explains the ecosystem without treating aspiration, mythology, simulation, code fragments, and deployed behavior as interchangeable evidence.

## Read in this order

1. [UDS documentation and coherence protocol](governance/uds-coherence-protocol.md)
2. [Ecosystem architecture map](architecture/ecosystem-map.md)
3. [Public status matrix](architecture/status-matrix.md)
4. [Genesis public runtime guide](genesis/README.md)
5. [SDG architecture](sdgs/README.md)
6. [Dependency risk register](security/dependency-risk-register.md)
7. [Public document template](templates/public-document-template.md)

## Documentation layers

### Public explanation

Plain-language pages for people encountering Synthsara for the first time. These pages describe the problem, the proposed coordination loop, the ethical commitments, and the current state of implementation.

### Technical documentation

Executable interfaces, policies, schemas, tests, runtime limits, threat boundaries, and deployment evidence. Technical claims must link to the repository that implements or tests them.

### Governance and standards

UDS, Synthocracy, WORTH, Witness, consent, correction, provenance, and public review. Normative commitments must be distinguishable from software already enforcing them.

### Security and dependency evidence

Known dependency advisories, deployed-boundary analysis, threat models, remediation decisions, and closure evidence. A green build is not treated as proof of security.

### Research and hypotheses

Formal models, proposed mechanisms, simulations, comparisons, and experimental programs. Research pages must identify assumptions, methods, evidence, and unresolved questions.

### Mythic and narrative canon

The Codex, Diamond Flame, Architect's Odyssey, Mythic Universe, symbols, stories, archetypes, music, and game-world material. These pages may carry profound meaning while remaining explicitly interpretive or fictional where appropriate.

### Historical archive

Conversation ledgers, previous names, deprecated mechanisms, superseded token concepts, early website drafts, and assistant-generated proposals. Historical records preserve lineage but do not silently govern current behavior.

## Publication rule

A file is not approved merely because it exists in this directory. Its frontmatter must identify the owner, provenance, claim class, implementation status, canonical status, visibility, sources, review state, and limitations.

A document remains a draft when:

- required metadata is missing;
- a feature is described without current status;
- sample data could be mistaken for live data;
- mythic language could be mistaken for empirical proof;
- private information or unverified allegations appear;
- the UDS gate has not been completed;
- a correction has not been propagated to dependent pages.

## Correction pathway

Repository Issues are currently disabled. Corrections should therefore be submitted through a pull request or an existing pull-request review thread with:

- the exact statement being corrected;
- the source or evidence supporting the correction;
- the affected documents;
- the proposed replacement language;
- any privacy or consent considerations;
- whether the correction changes canon, implementation status, or both.

The repair should preserve the old statement in version history rather than pretending it never existed.
