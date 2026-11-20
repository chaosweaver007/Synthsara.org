import type { NextApiRequest, NextApiResponse } from 'next';

const DEFAULT_ORIGIN = 'https://genesis-seven-bice.vercel.app';
const TRUSTED_ORIGINS = new Set([DEFAULT_ORIGIN]);
const personas = new Set(['sarah', 'steven']);
const MAX_LENGTH = 2000;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST required' });
  const body = req.body;
  if (!body || typeof body !== 'object' || Array.isArray(body) ||
      Object.keys(body).some(k => !['message', 'persona'].includes(k))) {
    return res.status(400).json({ error: 'Only message and persona are accepted' });
  }
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const persona = body.persona === undefined ? 'sarah' : body.persona;
  if (!message || message.length > MAX_LENGTH || !personas.has(persona)) {
    return res.status(400).json({ error: 'Invalid message or persona' });
  }
  const origin = (process.env.GENESIS_BASE_URL || DEFAULT_ORIGIN).replace(/\/+$/, '');
  if (!TRUSTED_ORIGINS.has(origin)) return res.status(503).json({ error: 'Unapproved Genesis origin' });
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const upstream = await fetch(origin + '/api/o-series/chat', {
      method: 'POST', redirect: 'manual', signal: controller.signal,
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        request_id: crypto.randomUUID(), session_id: crypto.randomUUID(),
        message, persona, consent_level: 'private',
        collective_learning: false, pipeline_mode: 'shadow'
      })
    });
    if (upstream.status >= 300 && upstream.status < 400) throw new Error('Redirect refused');
    const payload = await upstream.json();
    return res.status(upstream.status).json({ ...payload, gateway: { mode: 'private-shadow', persona } });
  } catch {
    return res.status(502).json({ error: 'Genesis is unavailable. No message was stored by this portal.' });
  } finally { clearTimeout(timeout); }
}
