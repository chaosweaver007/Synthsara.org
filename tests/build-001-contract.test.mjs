import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
const api = readFileSync(new URL('../pages/api/concierge.ts', import.meta.url), 'utf8');
const page = readFileSync(new URL('../pages/doorway.tsx', import.meta.url), 'utf8');
test('gateway enforces private shadow mode', () => {
  assert.match(api, /consent_level: 'private'/);
  assert.match(api, /collective_learning: false/);
  assert.match(api, /pipeline_mode: 'shadow'/);
});
test('gateway accepts only message and persona', () => {
  assert.match(api, /\['message', 'persona'\]/);
  assert.match(api, /TRUSTED_ORIGINS/);
  assert.match(api, /MAX_LENGTH = 2000/);
});
test('doorway has live request and accessible controls', () => {
  assert.match(page, /fetch\('\/api\/concierge'/);
  assert.match(page, /aria-live="polite"/);
  assert.match(page, /Clear screen/);
});
