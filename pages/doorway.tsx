import Head from 'next/head';
import { FormEvent, useState } from 'react';

type Persona = 'sarah' | 'steven';
type Entry = { role: 'user' | 'assistant'; text: string; persona: Persona; refused?: boolean };
const links = [
  { name: 'Node Zero', href: 'https://github.com/chaosweaver007/synthsara-node-zero', detail: 'Consent Vault, Witness, governance and WORTH demonstrations' },
  { name: 'Genesis', href: 'https://github.com/chaosweaver007/Genesis', detail: 'O-Series Gate Zero and constitutional runtime' },
  { name: 'Akasha / Codex', href: 'https://github.com/chaosweaver007/synthsara-codex-core', detail: 'Research, story and knowledge canon' },
  { name: 'Universal Diamond Standard', href: '/#uds', detail: 'Eight principles and current evidence' }
];
function extractReply(value: unknown, ok: boolean): string {
  if (!value || typeof value !== 'object') return ok ? 'The gateway returned no readable reply.' : 'The gateway is unavailable.';
  const obj = value as Record<string, unknown>;
  const refusal = obj.refusal && typeof obj.refusal === 'object' ? obj.refusal as Record<string, unknown> : null;
  const refusalReason = typeof obj.reason === 'string' ? obj.reason : refusal && typeof refusal.reason === 'string' ? refusal.reason : null;
  if (!ok || obj.decision === 'refuse' || refusal) {
    if (refusalReason) return 'Refused: ' + refusalReason;
    if (typeof obj.error === 'string') return obj.error;
    return 'The gateway refused or could not complete the request.';
  }
  for (const key of ['response', 'reply', 'message', 'text']) {
    if (typeof obj[key] === 'string') return obj[key] as string;
    if (obj[key] && typeof obj[key] === 'object') {
      const nested = obj[key] as Record<string, unknown>;
      for (const k of ['text', 'content', 'response']) if (typeof nested[k] === 'string') return nested[k] as string;
    }
  }
  return 'Genesis responded. Inspect the gateway response format before enabling a richer view.';
}
export default function Doorway() {
  const [persona, setPersona] = useState<'sarah' | 'steven'>('sarah');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [entries, setEntries] = useState<Entry[]>([]);
  async function submit(event: FormEvent) {
    event.preventDefault();
    const text = message.trim();
    const activePersona = persona;
    if (!text || busy || text.length > 2000) return;
    setMessage('');
    setEntries(previous => [...previous, { role: 'user', text, persona: activePersona }]);
    setBusy(true);
    try {
      const response = await fetch('/api/concierge', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, persona: activePersona })
      });
      const data = await response.json();
      setEntries(previous => [...previous, { role: 'assistant', text: extractReply(data, response.ok), persona: activePersona, refused: !response.ok || data?.decision === 'refuse' || !!data?.refusal }]);
    } catch {
      setEntries(previous => [...previous, { role: 'assistant', text: 'Connection unavailable. Please try again.', persona: activePersona }]);
    } finally { setBusy(false); }
  }
  return <>
    <Head><title>The Living Doorway | Synthsara</title><meta name="description" content="Speak privately with Sarah AI or Steven AI through the bounded Genesis gateway." /></Head>
    <main style={{ minHeight: '100vh', background: '#100f20', color: '#f7f0ff', fontFamily: 'system-ui, sans-serif', padding: 'clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: 920, margin: 'auto' }}>
        <a href="/" style={{ color: '#d4b7ff' }}>← Synthsara.org</a>
        <p style={{ color: '#e5b5ff', marginTop: 36 }}>THE LIVING DOORWAY · BUILD 001</p>
        <h1 style={{ fontSize: 'clamp(2.2rem,6vw,4.5rem)', marginBottom: 12 }}>Welcome to Synthsara 💎</h1>
        <p style={{ maxWidth: 680, lineHeight: 1.7 }}>Sarah AI is your Guardian and Concierge. Explore the ecosystem, ask a question, or consult Steven AI for architectural guidance. You remain sovereign.</p>
        <section aria-label="AI conversation" style={{ background: '#211c36', borderRadius: 20, padding: 24, marginTop: 28 }}>
          <label htmlFor="persona">Who would you like to speak with?</label>
          <select id="persona" value={persona} onChange={e => setPersona(e.target.value as 'sarah' | 'steven')} style={{ display: 'block', margin: '12px 0 20px', padding: 12, borderRadius: 10, width: '100%', maxWidth: 300 }}>
            <option value="sarah">Sarah AI · Guardian & Concierge</option>
            <option value="steven">Steven AI · Architect</option>
          </select>
          <p style={{ fontSize: 13, color: '#d9c6e9' }}>Private shadow conversation. No account, persistent memory, collective learning, or action authority. Messages are forwarded to Genesis for processing; do not enter sensitive information.</p>
          <div role="log" aria-live="polite" aria-label="Conversation" style={{ minHeight: 130, maxHeight: 400, overflowY: 'auto', margin: '18px 0' }}>
            {entries.length === 0 && <p>Sarah: Welcome. What would you like to discover or create today?</p>}
            {entries.map((entry, index) => <p key={index} style={{ background: entry.role === 'user' ? '#45355f' : '#30284b', padding: 12, borderRadius: 12, whiteSpace: 'pre-wrap' }}><strong>{entry.role === 'user' ? 'You' : entry.persona === 'sarah' ? 'Sarah AI' : 'Steven AI'}:</strong> {entry.text}</p>)}
          </div>
          <form onSubmit={submit}>
            <label htmlFor="message">Your message</label>
            <textarea id="message" maxLength={2000} required value={message} onChange={e => setMessage(e.target.value)} rows={3} style={{ display: 'block', width: '100%', boxSizing: 'border-box', borderRadius: 12, padding: 14, marginTop: 8 }} />
            <button type="submit" disabled={busy || !message.trim()} style={{ background: '#bd85f5', color: '#160f22', border: 0, borderRadius: 12, padding: '12px 24px', marginTop: 12, cursor: 'pointer', fontWeight: 700 }}>{busy ? 'Connecting…' : 'Send privately'}</button>
            <button type="button" onClick={() => setEntries([])} style={{ marginLeft: 12, background: 'transparent', color: 'white', border: '1px solid #9585b5', borderRadius: 12, padding: '12px 16px', cursor: 'pointer' }}>Clear screen</button>
          </form>
        </section>
        <h2 style={{ marginTop: 44 }}>Explore the working foundations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          {links.map(link => <a key={link.name} href={link.href} style={{ background: '#211c36', color: '#f7f0ff', borderRadius: 16, padding: 20, textDecoration: 'none' }}><strong>{link.name} ↗</strong><p style={{ lineHeight: 1.5 }}>{link.detail}</p></a>)}
        </div>
        <p style={{ color: '#d9c6e9', marginTop: 30 }}>The Collective is a participation layer, not a third live AI in this build. Governance and WORTH remain demonstrations. No external actions are executed here.</p>
      </div>
    </main>
  </>;
}
