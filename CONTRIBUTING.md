# Contributing to Synthsara.org

Synthsara.org is the public portal and documentation surface for a larger ecosystem. Contributions must preserve the Universal Diamond Standard and the distinction between vision, mythology, research, specification, prototype, proof, runtime, pilot, and production.

## Before opening a pull request

Read:

1. [UDS documentation and coherence protocol](docs/governance/uds-coherence-protocol.md)
2. [Ecosystem architecture map](docs/architecture/ecosystem-map.md)
3. [Public status matrix](docs/architecture/status-matrix.md)
4. [Public document template](docs/templates/public-document-template.md)

## Contribution types

### Documentation correction

Use this path for inaccurate wording, outdated status, inconsistent definitions, missing limitations, broken links, or privacy concerns.

Include:

- the exact statement being corrected;
- the supporting source or implementation evidence;
- affected pages;
- replacement language;
- whether the change affects canon, status, privacy, or implementation.

### New public document

Start from the public document template. Required frontmatter must be complete.

### Code or interface change

State:

- what behavior changes;
- whether any data is collected, stored, transmitted, exported, or deleted;
- what backend or persistence is involved;
- what tests verify the behavior;
- what status label applies;
- what UDS risks were reviewed;
- how failure is communicated to the user.

### Mythic or creative contribution

Place mythic, fictional, archetypal, game, music, or narrative work in the appropriate Codex or media surface. Do not present it as deployed behavior or empirical evidence.

### Research contribution

Identify assumptions, methods, evidence, falsifiable questions, and limitations. A simulation or model-generated evaluation is not empirical validation by itself.

## UDS pull-request gate

Every contribution must answer the following.

### Sovereignty

Is participation voluntary, understandable, reversible, and free of coercive hooks?

### Transparency

Are the feature status, limitations, data behavior, sources, and authorship boundaries visible?

### Fairness

Who could be excluded, burdened, misrepresented, or harmed? Is the interface accessible?

### Accountability

Who owns maintenance, correction, incident response, and repair?

### Security

Does the change expose secrets, private data, unsafe defaults, or unreviewed deployment paths?

### Service to life

Could the change enable exploitation, domination, manipulation, dehumanization, or avoidable harm?

### Privacy

What data crosses a boundary? Is consent granular and revocable? Is collection minimized?

### Ecology

What social, environmental, infrastructural, and resource consequences matter?

A failed gate blocks merging until repaired or explicitly retained as a draft experiment that cannot affect users.

## Truthful interfaces

Do not add controls that imply an action occurred when no backend exists.

Use visible labels such as:

- `DEMO`
- `PREVIEW`
- `SIMULATED`
- `LOCAL PROTOTYPE`
- `NO DATA SAVED`
- `NOT CONNECTED`

Do not decorate prototypes with real-looking balances, votes, transactions, deadlines, institutions, participants, or global metrics.

## Canonical terminology

Use these stable definitions:

- Synthsara: broader ecosystem.
- Synthocracy: governance model within Synthsara.
- Genesis: executable constitutional runtime layer.
- Node Zero: local-first proof node.
- Codex Core: mythic and narrative canon repository.
- UDS: ethical standard and conformance framework.
- WORTH: non-transferable contribution recognition, not money.
- Witness: accountable records within the stated implementation boundary.
- Akasha: knowledge commons and provenance-preserving library.
- Sarah AI: AI persona distinct from Human Sarah.
- RTME: bounded intention-to-reflection/action structuring interface.
- SDG Dashboard: coordination and measurement architecture requiring named data sources for live claims.

## Privacy boundary

Do not commit:

- private conversations or raw prompts;
- personal contact information;
- health, legal, financial, location, family, relationship, or identity data;
- private information about Human Sarah;
- private astrology or synastry records;
- credentials, secrets, database files, logs containing user content, or private scratchpads;
- hidden reasoning;
- unverified allegations about identifiable people or organizations.

## Review expectations

A reviewer should be able to answer:

- What changed?
- Why is it needed?
- What class of claim is being made?
- What is the present implementation status?
- What evidence supports it?
- What remains unimplemented?
- What data and consent boundaries apply?
- Does the rendered result communicate the truth without needing a hidden explanation?

## Merge posture

Documentation and code changes should normally enter through a review branch and pull request. Preserve version history. Do not erase historical mistakes when a correction and supersession record will teach more.
