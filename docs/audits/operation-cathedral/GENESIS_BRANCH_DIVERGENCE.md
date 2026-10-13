# Genesis Branch Divergence — Phase 1 Evidence Snapshot

Compared against `main` on 2026-10-13 using GitHub compare endpoint. Counts represent Git commit graph differences, not validated functionality. All 34 non-main branches enumerated; no branches deleted, merged, or altered.

| Branch | Git status | Ahead | Behind | Files changed vs merge base |
|---|---|---:|---:|---:|
| agent/add-uds-d1-registry-artifacts | behind | 0 | 85 | 0 |
| agent/canon-gate-v1-resolver | diverged | 10 | 6 | 10 |
| agent/genesis-consolidation-v0-1-1 | behind | 0 | 95 | 0 |
| agent/genesis-docstrings-v0-1-1 | behind | 0 | 86 | 0 |
| agent/genesis-kernel-v0-1 | diverged | 35 | 147 | 28 |
| agent/layered-truth-preamble | diverged | 2 | 169 | 1 |
| agent/layered-truth-preamble-v2 | behind | 0 | 165 | 0 |
| agent/live-integrity-tests | behind | 0 | 145 | 0 |
| agent/o-series-gate-zero | diverged | 18 | 147 | 16 |
| agent/rosetta-crosswalk-v1 | behind | 0 | 44 | 0 |
| agent/sonic-codex-recognizer | behind | 0 | 60 | 0 |
| agent/sovereignty-core-v0.1 | behind | 0 | 51 | 0 |
| agent/uds-v1-1-authority-core | behind | 0 | 71 | 0 |
| build/genesis-web-ui | diverged | 4 | 74 | 4 |
| coderabbitai/docstrings/6967bf9 | diverged | 1 | 101 | 10 |
| codex/check-code-for-errors | behind | 0 | 199 | 0 |
| copilot/build-rest-of-synthsara | diverged | 1 | 193 | 1 |
| copilot/build-sarah-feature | behind | 0 | 194 | 0 |
| copilot/create-genesis-wiki | behind | 0 | 188 | 0 |
| copilot/fully-build-it | behind | 0 | 194 | 0 |
| docs/genesis-ui-v0.1-consent-engine | behind | 0 | 170 | 0 |
| docs/repository-truth-boundaries | diverged | 29 | 7 | 23 |
| docs/res-phy-001-evidence-boundaries | behind | 0 | 6 | 0 |
| feat/council-constitution-v1 | diverged | 35 | 7 | 29 |
| feature/openai-responses-adapter | behind | 0 | 1 | 0 |
| feature/reconcile-privacy-promise | behind | 0 | 165 | 0 |
| feature/refactor-to-canonical-loader | diverged | 17 | 171 | 7 |
| fix/genesis-runtime-v0-1 | behind | 0 | 129 | 0 |
| fix/o-series-persona-validation | behind | 0 | 126 | 0 |
| fix/quickstart-requirements | behind | 0 | 172 | 0 |
| provenance/deployment-registry | behind | 0 | 170 | 0 |
| stevenai-openai-runtime | diverged | 12 | 6 | 9 |
| test/live-production-smoke | behind | 0 | 123 | 0 |
| uds-srb-v1.0-rc2.1 | behind | 0 | 8 | 0 |

**Summary:** 12 diverged branches with commits not reachable from `main`; 22 branches behind `main` with no unique commits; plus `main` = 35 total.

## High-priority divergent branches

- `stevenai-openai-runtime`: `Genesis/steven_ai/agent.py`, `canon.py`, `retrieval.py`, implementation file and tests. Preserve identity and review security/privacy before any merge.
- `feature/refactor-to-canonical-loader`: Sarah AI loader and tests; investigate interaction with `main`.
- `feat/council-constitution-v1`: constitutional and runtime changes; examine provenance and conflict.
- `agent/genesis-kernel-v0-1`: kernel/API scaffold and tests; may represent alternate architecture.
- `agent/o-series-gate-zero`: Gate Zero runtime changes; compare current `main` implementation.
- `agent/canon-gate-v1-resolver`: canon gate package and workflow.
- `docs/repository-truth-boundaries`: contains generated `__pycache__` and `Genesis/synthsara_data/collective_memory.db` in changed-file list. **Potential sensitive-data artifact; do not publish file contents without privacy review.**
- `build/genesis-web-ui`: UI assets.
- `agent/layered-truth-preamble`: `docs/Preamble.md`.
- `coderabbitai/docstrings/6967bf9`: documentation changes to runtime code.
- `copilot/build-rest-of-synthsara`: `Genesis/app.py`.

## Interpretation limits

A branch behind `main` may still be historically valuable; it simply has no unique reachable commits relative to `main`. A diverged branch may contain superseded, unsafe, or conflicting code. **No merge/delete recommendation is justified solely by these numbers.**

Evidence: https://github.com/chaosweaver007/Genesis/compare/main...stevenai-openai-runtime (and analogous compare URLs for each branch).
