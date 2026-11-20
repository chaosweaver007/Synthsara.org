# Build 001 — Living Doorway
Branch: build-001-sarah-living-doorway

## Scope
- /doorway: interactive Sarah AI / Steven AI selector and private chat.
- /api/concierge: same-origin, bounded Genesis O-Series shadow proxy.
- No cookies, browser-supplied origin, identity, memory, collective learning, or RTME action authority.
- Existing homepage remains intact. The new route can be linked from navigation after review.
- Links to Node Zero, Genesis, Codex and UDS; not a claim that those services are embedded.
- Collective is not represented as a deployed third agent.

## Manual acceptance checks
1. GET /doorway returns accessible page and selection controls.
2. Empty message cannot submit; >2000 characters rejected by API.
3. POST /api/concierge with persona=sarah and a valid message forwards a private shadow request.
4. persona=steven is forwarded as steven.
5. Unknown fields, personas, and non-POST methods are rejected.
6. Unavailable Genesis returns a bounded error; no fabricated response.
7. Clear screen removes only local React conversation state.
8. npm run build; npm run docs:check.

## Boundaries
No production identity, encrypted vault, signed ledger, collective governance, effectful RTME, or persistent chat history is provided. Genesis is the processing service, so its own retention and operational policy must be independently reviewed before collecting sensitive content.
