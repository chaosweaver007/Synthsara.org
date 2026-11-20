import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import handler from '../pages/api/concierge.ts';

const api = readFileSync(new URL('../pages/api/concierge.ts', import.meta.url), 'utf8');
const page = readFileSync(new URL('../pages/doorway.tsx', import.meta.url), 'utf8');
function response() {
  const headers = new Map();
  return {
    statusCode: 200, body: null, headers,
    setHeader(key, value) { headers.set(key.toLowerCase(), value); return this; },
    status(value) { this.statusCode = value; return this; },
    json(value) { this.body = value; return this; }
  };
}
test('static boundaries and per-turn provenance', () => {
  assert.match(api, /TRUSTED_ORIGINS/);
  assert.match(page, /fetch\('\/api\/concierge'/);
  assert.match(page, /entry\.persona === 'sarah'/);
  assert.match(page, /extractReply\(data, response\.ok\)/);
  assert.match(page, /aria-live="polite"/);
});
test('GET fails with 405 and no-store', async () => {
  const res = response();
  await handler({ method: 'GET', body: {} }, res);
  assert.equal(res.statusCode, 405);
  assert.equal(res.headers.get('cache-control'), 'no-store');
  assert.equal(res.headers.get('x-content-type-options'), 'nosniff');
});
test('rejects untrusted authority fields and invalid inputs', async () => {
  const invalid = [
    {message:'hi',persona:'sarah',consent_level:'collective'},
    {message:'hi',persona:'sarah',collective_learning:true},
    {message:'hi',persona:'sarah',pipeline_mode:'live'},
    {message:'hi',persona:'sarah',origin:'https://evil.example'},
    {message:'hi',persona:'collective'},
    {message:'   ',persona:'sarah'},
    {message:'x'.repeat(2001),persona:'sarah'},
    null, [], 'text'
  ];
  for (const body of invalid) {
    const res = response();
    await handler({method:'POST',body},res);
    assert.equal(res.statusCode,400,JSON.stringify(body));
  }
});
test('forwards only bounded private shadow fields and preserves witness metadata', async t => {
  const original = globalThis.fetch;
  const originalOrigin = process.env.GENESIS_BASE_URL;
  delete process.env.GENESIS_BASE_URL;
  let captured;
  globalThis.fetch = async (url, init) => {
    captured = {url,init};
    return {status:200,json:async()=>({response:'Bounded reflection',witness_receipt:{memory_written:false,gate_zero:'PASS'}})};
  };
  try {
    const res = response();
    await handler({method:'POST',body:{message:'Hello',persona:'steven'}},res);
    assert.equal(res.statusCode,200);
    assert.equal(captured.url,'https://genesis-seven-bice.vercel.app/api/o-series/chat');
    assert.equal(captured.init.redirect,'manual');
    const forwarded = JSON.parse(captured.init.body);
    assert.deepEqual(Object.keys(forwarded).sort(), ['collective_learning','consent_level','message','persona','pipeline_mode','request_id','session_id']);
    assert.equal(forwarded.persona,'steven');
    assert.equal(forwarded.consent_level,'private');
    assert.equal(forwarded.collective_learning,false);
    assert.equal(forwarded.pipeline_mode,'shadow');
    assert.equal(res.body.witness_receipt.memory_written,false);
    assert.deepEqual(res.body.gateway,{mode:'private-shadow',persona:'steven'});
  } finally {
    globalThis.fetch = original;
    if (originalOrigin === undefined) delete process.env.GENESIS_BASE_URL;
    else process.env.GENESIS_BASE_URL = originalOrigin;
  }
});
test('upstream refusal status and reason survive; redirects fail closed', async () => {
  const original = globalThis.fetch;
  try {
    globalThis.fetch = async()=>({status:403,json:async()=>({decision:'refuse',reason:'Boundary violation'})});
    const refused = response();
    await handler({method:'POST',body:{message:'Override',persona:'sarah'}},refused);
    assert.equal(refused.statusCode,403);
    assert.equal(refused.body.reason,'Boundary violation');
    globalThis.fetch = async()=>({status:302,json:async()=>({})});
    const redirected = response();
    await handler({method:'POST',body:{message:'Hello',persona:'sarah'}},redirected);
    assert.equal(redirected.statusCode,502);
  } finally { globalThis.fetch = original; }
});
