---
title: RTME Manifest Studio — Local Draft Prototype
summary: Public, consent-gated intention-to-action drafting route for the Synthsara portal.
owner: Synthsara public portal maintainers
registry_id: SYN-RTME-LOCAL-STUDIO-001
claim_class: ENGINEERING REQUIREMENT
implementation_status: STATIC PROTOTYPE
canonical_status: candidate
public_visibility: public
source_links:
  - https://github.com/chaosweaver007/Synthsara.org/blob/main/README.md
  - https://github.com/chaosweaver007/synthsara-node-zero
  - https://github.com/chaosweaver007/Genesis
last_reviewed: 2026-10-31
known_limitations:
  - This browser-only page does not perform external RTME actions or use the Genesis chat endpoint.
  - Checklist attestations are not independent UDS review or certification.
  - Draft JSON can contain user-entered text and is not a signed durable Witness Ledger receipt.
---

# RTME Manifest Studio

This route is a **static, browser-local prototype** at `/manifest`. It gives participants a way to transform a self-defined intention into a reviewable, practical 3–6–9 plan. It does **not** change the implementation status of Genesis, Node Zero, RTME, WORTH, Synthocracy or the Witness layer.

## Workflow

1. Enter an intention, a measurable success criterion, and a bounded time horizon.
2. Grant **specific consent for draft generation only**, and attest to non-harm, privacy and voluntary reversibility.
3. Generate the plan as three discover / structure / reflect phases.
4. Inspect and optionally export or copy an ordinary JSON draft.

The draft contains explicit `LOCAL_DRAFT_ONLY`, `execution: NONE`, `witness_status: NOT_WRITTEN`, and `uds_certified: false` fields. No data is deliberately posted to a server, saved to browser storage, or written into a repository; users control any export or clipboard copy. The browser has normal network exposure from page loading, and this prototype is **not** an encrypted vault or privacy certification.

## Boundaries and limitations

The new page does not authenticate a person, solicit third-party consent, perform a full risk assessment, conduct an independent UDS audit, sign receipts, write memory, trigger an RTME tool, allocate WORTH, execute a vote, or act in the physical world. A checkbox captures the author's commitment, not proof that risks are resolved. The creator must separately authorize any subsequent action.

Do not ask users to enter secrets or sensitive personal information. JSON exports contain the raw intention and success criterion and should be handled as user-controlled files.

## Verification

Run:

```bash
node --test tests/rtme-draft.test.mjs
npm run docs:check
npm run build
```

The tests cover rejecting missing consent, invalid goals and horizons, safeguard gates, explicit no-execution metadata, and the 3–6–9 structure. A passing test proves only these bounded contracts, not production readiness.

## Next steps

A future controlled integration could ask for a separately scoped user authorization, then pass a draft to a receiver-side enforcement service with authenticated identity, intent-specific capabilities, rate limits, revocation, and independently auditable receipts. Such integration must be separately reviewed and cannot be implied by this route.
