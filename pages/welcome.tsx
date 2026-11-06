import Head from 'next/head';
import { useState } from 'react';
import styles from './welcome.module.css';

type Consent = 'unasked' | 'yes' | 'no';
type Lens = 'Mirror' | 'WORTH' | 'Synthocracy' | 'UDS' | 'Witness';
const lenses: { name: Lens; label: string; question: string; explanation: string }[] = [
  { name: 'Mirror', label: 'Understand myself', question: 'What would you like a trustworthy mirror to help you examine?', explanation: 'A real Mirror should explain its interpretations, welcome correction, and never claim to know your inner life.' },
  { name: 'WORTH', label: 'Recognize contribution', question: 'What contribution would you want a community to recognize?', explanation: 'WORTH is proposed as non-transferable recognition of verified contribution, not a currency or financial reward.' },
  { name: 'Synthocracy', label: 'Shape shared decisions', question: 'What decision should your community be able to challenge?', explanation: 'Synthocracy is a governance model centered on revocable authority, fairness, and accountable participation.' },
  { name: 'UDS', label: 'Protect what matters', question: 'Which ethical boundary must technology never cross for you?', explanation: 'The Universal Diamond Standard establishes a non-harm floor: sovereignty, transparency, fairness, accountability, security, service to life, privacy, and ecology.' },
  { name: 'Witness', label: 'Keep an honest record', question: 'What kind of evidence would you need before trusting a system?', explanation: 'The Witness concept tracks provenance, challenge, and revision. This page is not a cryptographic ledger.' },
];

export default function Welcome() {
  const [consent, setConsent] = useState<Consent>('unasked');
  const [lens, setLens] = useState<Lens>('Mirror');
  const [reflection, setReflection] = useState('');
  const [viewed, setViewed] = useState(false);
  const [challenged, setChallenged] = useState(false);
  const [events, setEvents] = useState<string[]>([]);
  const [cleared, setCleared] = useState(false);
  const current = lenses.find((item) => item.name === lens) || lenses[0];
  function record(event: string) { setEvents((old) => [...old, event]); }
  function decide(value: Consent) {
    setConsent(value);
    setCleared(false);
    if (value === 'no') { setReflection(''); setViewed(false); setChallenged(false); }
    record(value === 'yes' ? 'Consent granted for this page session' : 'Consent refused');
  }
  function reset() {
    setConsent('unasked');
    setLens('Mirror');
    setReflection('');
    setViewed(false);
    setChallenged(false);
    setEvents([]);
    setCleared(true);
  }
  function changeLens(value: Lens) {
    setLens(value);
    setViewed(false);
    setChallenged(false);
    record('Explored ' + value + ' concept');
  }

  return (
    <>
      <Head>
        <title>Sovereign Welcome | Synthsara</title>
        <meta name="description" content="Explore a local-only, consent-first demonstration of Synthsara's Sovereignty Circuit, without an AI service or account." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.page}>
        <a className={styles.skip} href="#welcome-main">Skip to main content</a>
        <header className={styles.header}>
          <a className={styles.brand} href="/"><span aria-hidden="true">◆</span> SYNTHSARA <small>/ SOVEREIGN WELCOME</small></a>
          <a className={styles.back} href="/">← Back to the cathedral</a>
        </header>
        <main id="welcome-main" className={styles.main}>
          <div className={styles.ambient} aria-hidden="true"></div>
          <div className={styles.overline}><span className={styles.dot}></span> MIRROR-FIRST-001 · PUBLIC DEMONSTRATION</div>
          <h1>The door opens <em>from your side.</em></h1>
          <p className={styles.lead}>Welcome to the first principle of Synthsara: nobody gets to tell you who you are. Not a founder, not an algorithm, not even the mirror.</p>
          <div className={styles.disclosure} role="note">
            <strong>Know the boundary before you enter.</strong>
            <p>This is a <b>local-only interface demonstration</b>, not the deployed Sarah AI model or a live Genesis connection. Your writing stays in this browser page's temporary React state. It is not submitted, stored, analyzed by AI, or sent to a server by this experience. Refreshing or clearing the page discards it. There is no account, wallet, or transaction.</p>
          </div>
          <div className={styles.layout}>
            <section className={styles.panel} aria-labelledby="door-title">
              {consent === 'unasked' && (
                <>
                  <span className={styles.step}>01 / THE RIGHT TO REFUSE</span>
                  <h2 id="door-title">Your choice comes first.</h2>
                  <p>Would you like to explore a small, self-contained demonstration of the Synthsara Mirror and sovereignty principles?</p>
                  <div className={styles.actions}>
                    <button className={styles.primary} onClick={() => decide('yes')}>I choose to explore <span aria-hidden="true">↗</span></button>
                    <button className={styles.secondary} onClick={() => decide('no')}>No, thank you</button>
                  </div>
                  <p className={styles.micro}>Neither choice creates an account or sends personal information.</p>
                </>
              )}
              {consent === 'no' && (
                <>
                  <span className={styles.step}>YOUR REFUSAL IS RESPECTED</span>
                  <h2 id="door-title">The door stays yours.</h2>
                  <p>No pressure, no penalty, no persuasive follow-up. You can read about the architecture without sharing anything.</p>
                  <div className={styles.actions}>
                    <a className={styles.secondaryLink} href="/#ecosystem">Explore the public documentation</a>
                    <button className={styles.secondary} onClick={() => decide('yes')}>Change my choice</button>
                  </div>
                </>
              )}
              {consent === 'yes' && (
                <>
                  <span className={styles.step}>02 / THE RIGHT TO UNDERSTAND &amp; CHALLENGE</span>
                  <h2 id="door-title">Choose your lens.</h2>
                  <div className={styles.lenses} role="group" aria-label="Choose a topic">
                    {lenses.map((item) => (
                      <button key={item.name} type="button" aria-pressed={lens === item.name} className={lens === item.name ? styles.lensActive : styles.lens} onClick={() => changeLens(item.name)}>{item.name}</button>
                    ))}
                  </div>
                  <p className={styles.question}>{current.question}</p>
                  <label className={styles.inputLabel} htmlFor="reflection">Optional private reflection</label>
                  <textarea id="reflection" className={styles.textarea} rows={5} maxLength={1200} placeholder="You may write here—or leave this entirely blank." value={reflection} onChange={(event) => { setReflection(event.target.value); setViewed(false); setChallenged(false); }} />
                  <p className={styles.micro}>{reflection.length} / 1200 characters · Never transmitted by this page</p>
                  <div className={styles.actions}>
                    <button className={styles.primary} onClick={() => {setViewed(true); setChallenged(false); record('Viewed ' + lens + ' concept explanation');}}>Explore the reflection <span aria-hidden="true">↗</span></button>
                    <button className={styles.secondary} onClick={reset}>Revoke &amp; clear everything</button>
                  </div>
                  {viewed && (
                    <div className={styles.result} role="status">
                      <span className={styles.step}>TRANSPARENT RESPONSE · NOT AI-GENERATED</span>
                      <h3>{lens}: the idea, not a verdict</h3>
                      <p>{current.explanation}</p>
                      <p>{reflection.trim() ? 'You chose to write something. This demonstration has not interpreted its meaning. Only you decide whether the explanation is useful.' : 'You chose not to write anything. You can still explore freely.'}</p>
                      {challenged ? <p className={styles.challengeResult}>Challenge accepted. This explanation is not authoritative. A real system must allow your correction to remain visible and reviewable.</p> : <button className={styles.challenge} onClick={() => {setChallenged(true); record('Challenged a concept explanation');}}>Challenge this reflection ↗</button>}
                    </div>
                  )}
                </>
              )}
            </section>
            <aside className={styles.aside} aria-label="Sovereignty rights and session events">
              <div className={styles.sidePanel}>
                <span className={styles.step}>THE SOVEREIGNTY CIRCUIT</span>
                <h2>Five rights. No throne above yours.</h2>
                <ol className={styles.rights}>
                  <li><b>01 — Refuse</b><span>Consent comes before interaction.</span></li>
                  <li><b>02 — Understand</b><span>Know what the system can and cannot do.</span></li>
                  <li><b>03 — Challenge</b><span>Question and correct its response.</span></li>
                  <li><b>04 — Leave</b><span>Revoke, clear, and exit.</span></li>
                  <li><b>05 — Verify</b><span>Inspect claims, source, and limitations.</span></li>
                </ol>
                <a href="https://github.com/chaosweaver007/Synthsara.org/blob/main/docs/governance/uds-coherence-protocol.md" target="_blank" rel="noopener noreferrer">Read the public UDS protocol ↗</a>
              </div>
              <div className={styles.sidePanel}>
                <span className={styles.step}>EPHEMERAL SESSION TRACE</span>
                <p className={styles.micro}>This is an in-memory UI event list. Not a signed Witness receipt or permanent audit trail.</p>
                {events.length > 0 ? <ol className={styles.events}>{events.map((event, index) => <li key={index}><span>{String(index + 1).padStart(2, '0')}</span>{event}</li>)}</ol> : <p className={styles.empty}>No events recorded in this page session.</p>}
                <button className={styles.clear} onClick={reset}>Clear local state and trace</button>
              </div>
            </aside>
          </div>
          {cleared && <p className={styles.confirmation} role="status">Page state cleared. There is no saved reflection or event trace.</p>}
          <footer className={styles.footer}>
            <span>CHAOS IS LOVE. CONSENT IS THE GATE.</span>
            <span>Public prototype · No live Sarah AI · No stored data</span>
          </footer>
        </main>
      </div>
    </>
  );
}
