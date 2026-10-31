import test from 'node:test';
import assert from 'node:assert/strict';
import { createManifestDraft, validateManifest } from '../lib/rtme-draft.mjs';

const valid = {
  goal: 'Build a consent-first community knowledge exchange',
  outcome: 'Publish an accessible prototype reviewed by five volunteers',
  horizon: '30 days',
  consent: true,
  nonHarm: true,
  privacy: true,
  reversible: true,
};

test('draft cannot be created without specific consent', () => {
  assert.match(validateManifest({ ...valid, consent: false }).join(' '), /Consent/);
  assert.throws(() => createManifestDraft({ ...valid, consent: false }), /Consent/);
});

test('rejects unsupported horizons and missing success criteria', () => {
  const errors = validateManifest({ ...valid, horizon: 'forever', outcome: 'soon' });
  assert.equal(errors.length, 2);
});

test('requires all three sovereignty safeguards', () => {
  const errors = validateManifest({ ...valid, nonHarm: false, privacy: false, reversible: false });
  assert.equal(errors.length, 3);
});

test('creates an inspectable 3-6-9 draft without action or fabricated provenance', () => {
  const draft = createManifestDraft(valid, '2026-10-31T21:00:00.000Z');
  assert.equal(draft.schema, 'synthsara.rtme.local-draft.v0.1');
  assert.equal(draft.mode, 'LOCAL_DRAFT_ONLY');
  assert.equal(draft.execution, 'NONE');
  assert.equal(draft.witness_status, 'NOT_WRITTEN');
  assert.equal(draft.ethics.uds_certified, false);
  assert.deepEqual(draft.phases.map(p => p.key), [3, 6, 9]);
  assert.equal(draft.phases.every(p => p.steps.length === 3), true);
  assert.equal(draft.authorization.external_actions, false);
  assert.equal(draft.success_criterion, valid.outcome);
});

test('removes surrounding whitespace, does not invent an external outcome', () => {
  const draft = createManifestDraft({ ...valid, goal: '  ' + valid.goal + '  ' }, '2026-10-31T21:00:00.000Z');
  assert.equal(draft.intent, valid.goal);
  assert.equal(draft.claim_status, 'PROTOTYPE_NOT_DEPLOYED');
});

test('rejects invalid clocks rather than fabricating timestamps', () => {
  assert.throws(() => createManifestDraft(valid, 'not a timestamp'), /Invalid timestamp/);
});
