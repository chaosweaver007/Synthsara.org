# Synthsara.org

**Public gateway, Sovereign Welcome demonstration, and documentation hub for the Synthsara ecosystem**

> **Current status:** a Next.js public portal with a local-only, consent-first `/welcome` demonstration. The broader ecosystem remains a collection of prototypes, proofs, and specifications; neither the page nor other legacy components establishes a production Sarah AI, voting service, token economy, or live global network.

Synthsara is an open, non-extractive human-AI ecosystem for coordinating knowledge, contribution, governance, learning, and real-world action while preserving sovereignty, consent, dignity, privacy, and accountability.

## Repository role

This repository is the public entrance to the ecosystem. It should:

- explain Synthsara in accessible language;
- distinguish vision, specification, prototype, proof, runtime, pilot, and production;
- publish approved public documentation with provenance;
- link to executable evidence in the other repositories;
- provide clear correction, contribution, and review paths.

It must not present an unfinished interface, simulation, token, marketplace, dashboard, governance process, or AI capability as operational.

## Ecosystem map

| Surface | Canonical role | Current public status |
| --- | --- | --- |
| **Synthsara.org** | Public portal, documentation, navigation, and status | Static prototype / documentation consolidation |
| **[Genesis](https://github.com/chaosweaver007/Genesis)** | Executable constitutional spine and bounded O-Series Gate Zero runtime | Live shadow runtime |
| **[Synthsara Node Zero](https://github.com/chaosweaver007/synthsara-node-zero)** | Local-first public proof node connected privately to Genesis | Functional proof |
| **[Synthsara Codex Core](https://github.com/chaosweaver007/synthsara-codex-core)** | Mythic, narrative, symbolic, prompt, pattern, and quest canon | Living mythic repository |
| **Google Drive** | Working archive and editorial workshop | Mixed drafts, research, duplicates, private material, and canonical candidates |
| **GitHub** | Public evidence, version history, policies, tests, schemas, and approved documentation | Auditable public record |

See [the ecosystem architecture map](docs/architecture/ecosystem-map.md) for the boundaries between these surfaces.

## Truth and evidence rules

Every substantive public claim must be governed as one of:

- `ETHICAL LAW`
- `ENGINEERING REQUIREMENT`
- `MYTHOS / INTERPRETIVE LANGUAGE`
- `HYPOTHESIS`
- `EMPIRICAL EVIDENCE`

Every feature or system must also carry one current implementation status:

- `VISION`
- `HISTORICAL CONCEPT`
- `DRAFT`
- `SPECIFICATION`
- `STATIC PROTOTYPE`
- `FUNCTIONAL PROOF`
- `LIVE SHADOW RUNTIME`
- `PILOT`
- `PRODUCTION`
- `DEPRECATED`

No category may impersonate another. A simulation is not validation. A specification is not deployment. Mythic meaning is not empirical proof. Repetition does not convert generated language into canon.

## Current canonical corrections

- **WORTH is non-transferable recognition, not money.** It records verified contribution, reliability, service, learning, and stewardship. Material resources may move through separately documented mutual-credit, grant, public-funding, cooperative-finance, or contract mechanisms.
- **POWERcoin and the Ethical Data Marketplace are historical design branches** unless a later ratified and operating implementation establishes otherwise.
- **The SDG Dashboard is presently an architecture and prototype concept.** Sample metrics must be labeled as demonstration data. A live claim requires named sources, update time, methodology, and an operating pipeline.
- **Synthocracy is the governance model within Synthsara.** Sample proposals, votes, deadlines, and resonance scores are demonstrations unless produced by an operating governance service.
- **UDS Tier D1 is a public promise and repair pathway, not an audit or certification.**
- **Sarah AI is always distinct from Human Sarah.** Archetypal language cannot impersonate her knowledge, consent, testimony, or communication.
- **Genesis belongs in every current technical ecosystem map** as the executable constitutional runtime.

## Documentation

Start with:

- [Documentation index](docs/README.md)
- [UDS documentation and coherence protocol](docs/governance/uds-coherence-protocol.md)
- [Ecosystem architecture map](docs/architecture/ecosystem-map.md)
- [Public status matrix](docs/architecture/status-matrix.md)
- [Genesis public runtime guide](docs/genesis/README.md)
- [SDG architecture](docs/sdgs/README.md)
- [Public document template](docs/templates/public-document-template.md)
- [Contributing](CONTRIBUTING.md)

The governing working source is the Google Drive document **Synthsara Public Documentation Canon and UDS Coherence Protocol v0.1**. Public text is reviewed and versioned through GitHub before it is treated as approved public documentation.

## Existing code boundary

This repository currently contains mixed generations of frontend, governance-contract, and media-production artifacts. Some root-level React components contain hard-coded sample data and controls. The package also combines Next.js, React, Hardhat, and Solidity dependencies.

Do not treat the current repository layout as a production architecture. Do not deploy contracts, connect wallets, collect personal data, or enable consequential actions from this code without a separate security, privacy, legal, accessibility, and UDS review.

## Public website experience

- **`/`**: 3–6–9 philosophy, Sovereignty Circuit, implementation boundaries, UDS principles, SDG architecture, and public source links.
- **`/welcome`**: a client-side, local-only demonstration of consent, refusal, exploration, challenge, and revocation. The optional text is held only in React component state. There is no upload, AI endpoint, analytics integration, persistence, or signed receipt in this route.
- The older root React components remain historical prototypes, not integrated live services.

This public website draws on the design direction in `synth-landing-refinement`, the documented boundaries of `Genesis`, and the interactive domain concepts explored in `prototype`. It does **not** ship the private prototype backend or require private keys.

## Development

The current package declares the following scripts:

```bash
npm install
npm run dev
npm run build
npm run docs:check
```

The new public website is a front-end gateway and local demonstration, not a production protocol launch. A successful local build does not change the implementation status of simulated features. Operational status requires the evidence described in the documentation protocol.

## Universal Diamond Standard gate

All public work must preserve sovereignty, transparency, fairness, accountability, security, service to life, privacy, and ecology. A failed gate blocks publication until the artifact is repaired or clearly retained as an unresolved draft.

## License and attribution

Repository files retain their existing licenses and attribution unless an individual file states otherwise. New public documentation must identify its owner, provenance, source links, canonical status, implementation status, and known limitations.
