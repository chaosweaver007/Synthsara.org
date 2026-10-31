import Head from 'next/head';
import { useState, type FormEvent } from 'react';
import { createManifestDraft, HORIZONS } from '../lib/rtme-draft.mjs';

export default function ManifestStudio() {
  const [goal, setGoal] = useState('');
  const [outcome, setOutcome] = useState('');
  const [horizon, setHorizon] = useState('30 days');
  const [consent, setConsent] = useState(false);
  const [nonHarm, setNonHarm] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [reversible, setReversible] = useState(false);
  const [draft, setDraft] = useState<any>(null);
  const [message, setMessage] = useState('');

  function invalidate() {
    setDraft(null);
    setMessage('');
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const next = createManifestDraft({
        goal, outcome, horizon, consent, nonHarm, privacy, reversible,
      });
      setDraft(next);
      setMessage('Local draft created. No external action was taken.');
    } catch (error) {
      setDraft(null);
      setMessage(error instanceof Error ? error.message : 'Unable to create draft.');
    }
  }

  function exportDraft() {
    if (!draft) return;
    const blob = new Blob([JSON.stringify(draft, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = draft.reference + '.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setMessage('Draft exported locally. Nothing was uploaded.');
  }

  async function copyDraft() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(draft, null, 2));
      setMessage('Draft copied to clipboard.');
    } catch {
      setMessage('Clipboard unavailable; use Export JSON instead.');
    }
  }

  return (
    <>
      <Head>
        <title>Manifest Studio | Synthsara RTME</title>
        <meta name="description" content="Create a consent-first, local-only 3–6–9 action draft. No external execution, no user data upload, and no false claims of Witness or UDS certification." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <a className="rtme-skip" href="#studio">Skip to studio</a>
      <div className="rtme-shell">
        <header className="rtme-header">
          <a className="rtme-brand" href="/" aria-label="Synthsara public portal"><span aria-hidden="true">◆</span> SYNTHSARA</a>
          <nav aria-label="Studio navigation">
            <a href="/">Public portal</a>
            <a href="https://github.com/chaosweaver007/Synthsara.org/blob/main/docs/architecture/status-matrix.md">Evidence & status</a>
          </nav>
        </header>
        <main id="studio">
          <section className="rtme-hero" aria-labelledby="studio-title">
            <div className="rtme-orbit" aria-hidden="true">✦</div>
            <p className="rtme-kicker">GENESIS / RTME / LOCAL PROTOTYPE</p>
            <h1 id="studio-title">Manifest what matters.<br /><em>Keep your sovereignty.</em></h1>
            <p className="rtme-intro">Turn an intention into an inspectable 3–6–9 action draft. Every step stays under human control. Consent is required, and nothing here acts on the outside world.</p>
            <div className="rtme-chips"><span>NO ACCOUNT</span><span>NO UPLOAD</span><span>NO EXTERNAL EXECUTION</span></div>
          </section>

          <section className="rtme-grid" aria-label="Create and review a manifestation draft">
            <div className="rtme-panel">
              <div className="rtme-panel-title"><span>01 / SET AN INTENTION</span><span className="rtme-label">PRIVATE IN THIS TAB</span></div>
              <form onSubmit={submit} noValidate>
                <label htmlFor="rtme-goal">What do you want to bring into form?</label>
                <textarea id="rtme-goal" rows={4} maxLength={240} placeholder="Example: Build a welcoming local community where people can share skills and resources..." value={goal} onChange={event => { setGoal(event.target.value); invalidate(); }} />
                <div className="rtme-hint">10–240 characters. Avoid passwords, health details or other sensitive information.</div>
                <label htmlFor="rtme-outcome">What verifiable result would count as progress?</label>
                <textarea id="rtme-outcome" rows={3} maxLength={240} placeholder="Example: An accessible prototype reviewed by five volunteers who opted in..." value={outcome} onChange={event => { setOutcome(event.target.value); invalidate(); }} />
                <label htmlFor="rtme-horizon">Planning horizon</label>
                <select id="rtme-horizon" value={horizon} onChange={event => { setHorizon(event.target.value); invalidate(); }}>
                  {HORIZONS.map((value: string) => <option key={value} value={value}>{value}</option>)}
                </select>

                <fieldset className="rtme-checks">
                  <legend>02 / CONSENT & SAFEGUARDS</legend>
                  <p>These checks capture your own commitments. They do not constitute an independent ethics review.</p>
                  <label><input type="checkbox" checked={consent} onChange={event => { setConsent(event.target.checked); invalidate(); }} /> I consent to generating this local draft.</label>
                  <label><input type="checkbox" checked={nonHarm} onChange={event => { setNonHarm(event.target.checked); invalidate(); }} /> I will assess foreseeable harm before any real action.</label>
                  <label><input type="checkbox" checked={privacy} onChange={event => { setPrivacy(event.target.checked); invalidate(); }} /> I will respect others&apos; privacy and seek permission.</label>
                  <label><input type="checkbox" checked={reversible} onChange={event => { setReversible(event.target.checked); invalidate(); }} /> Participation stays voluntary and actions reversible.</label>
                </fieldset>
                <button className="rtme-primary" type="submit">Create local 3–6–9 draft <span aria-hidden="true">↗</span></button>
                <p className="rtme-message" role="status" aria-live="polite">{message}</p>
              </form>
            </div>

            <div className="rtme-panel rtme-output">
              <div className="rtme-panel-title"><span>03 / ACTION BLUEPRINT</span><span className="rtme-label">NOT A DEPLOYMENT</span></div>
              {draft ? (
                <div aria-live="polite">
                  <p className="rtme-ref">{draft.reference}</p>
                  <h2>{draft.intent}</h2>
                  <p className="rtme-muted">Success: {draft.success_criterion} · Horizon: {draft.horizon}</p>
                  {draft.phases.map((phase: any) => (
                    <section className="rtme-phase" key={phase.key} aria-label={phase.name}>
                      <div className="rtme-phase-head"><strong>{phase.key}</strong><h3>{phase.name}</h3></div>
                      <ol>{phase.steps.map((step: string, index: number) => <li key={index}>{step}</li>)}</ol>
                    </section>
                  ))}
                  <div className="rtme-receipt">
                    <strong>Local draft receipt</strong>
                    <p>Consent recorded in the exported draft · No Witness Ledger write · No UDS certification · No external action.</p>
                    <time dateTime={draft.created_at}>{draft.created_at}</time>
                  </div>
                  <div className="rtme-actions">
                    <button type="button" onClick={exportDraft}>Export JSON</button>
                    <button type="button" onClick={copyDraft}>Copy draft</button>
                  </div>
                </div>
              ) : (
                <div className="rtme-empty">
                  <div className="rtme-symbol" aria-hidden="true"><span>3</span><span>6</span><span>9</span></div>
                  <h2>The blueprint begins with you.</h2>
                  <p>Complete the intention, success criterion and consent checks to produce a readable, exportable plan.</p>
                  <div className="rtme-sequence"><span>INTENTION</span><b>→</b><span>REVIEW</span><b>→</b><span>PLAN</span><b>→</b><span>HUMAN DECISION</span></div>
                </div>
              )}
            </div>
          </section>

          <section className="rtme-boundary">
            <div><span className="rtme-kicker">THE BOUNDARY IS THE FEATURE</span><h2>A working draft is not a working planet.</h2></div>
            <p>This tool provides browser-local planning and export only. It does not contact Genesis, authorize RTME tools, write to Akasha or Witness, assign WORTH, register people, move resources, publish proposals or verify physical outcomes. Its safeguards are self-attested and require real review before real-world action.</p>
          </section>
        </main>
        <footer className="rtme-footer"><strong>NOBODY LEFT BEHIND.</strong><span>Chaos brings possibility. Order gives it form. Harmony protects the choice.</span><a href="/">Return to Synthsara.org</a></footer>
      </div>
      <style jsx>{`
        :global(*){box-sizing:border-box}
        :global(html){scroll-behavior:smooth;background:#080917}
        :global(body){margin:0;color:#f7f1ff;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#080917;line-height:1.55}
        :global(button),:global(input),:global(select),:global(textarea){font:inherit}
        .rtme-shell{min-height:100vh;background:radial-gradient(ellipse at 80% 0%,#361950 0%,transparent 34%),radial-gradient(ellipse at 0% 35%,#152441 0%,transparent 38%),#080917}
        a{color:inherit}
        .rtme-skip{position:absolute;top:-100px;left:20px;background:white;color:#080917;padding:12px;z-index:100}
        .rtme-skip:focus{top:10px}
        .rtme-header{max-width:1260px;margin:auto;padding:24px 32px;display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:1px solid #ffffff24}
        .rtme-brand{text-decoration:none;font-size:16px;font-weight:850;letter-spacing:.15em;white-space:nowrap}
        .rtme-brand span{font-size:25px;color:#d49aff;vertical-align:middle;margin-right:10px}
        nav{display:flex;gap:24px}
        nav a{font-size:13px;color:#cabbd7;text-decoration:none}
        nav a:hover,nav a:focus-visible{color:#fff;text-decoration:underline}
        .rtme-hero{text-align:center;max-width:1000px;margin:auto;padding:70px 24px 58px;position:relative}
        .rtme-orbit{margin:auto auto 18px;width:72px;height:72px;border:1px solid #9c6cc288;border-radius:50%;display:grid;place-items:center;color:#e7b8ff;font-size:30px;box-shadow:0 0 0 14px #a067dd0c,0 0 0 28px #a067dd09}
        .rtme-kicker{font-weight:800;font-size:12px;color:#cc91ff;letter-spacing:.19em}
        h1{font-size:clamp(40px,6.2vw,80px);line-height:1.08;letter-spacing:-.055em;margin:20px 0}
        h1 em{font-style:normal;color:#e6a8ff}
        .rtme-intro{color:#cbbfd6;max-width:700px;margin:auto;font-size:clamp(16px,2.2vw,19px)}
        .rtme-chips{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:27px}
        .rtme-chips span,.rtme-label{font-size:10px;letter-spacing:.08em;border:1px solid #c7a9dd44;border-radius:100px;padding:6px 11px;color:#d4bfdb;font-weight:800}
        .rtme-grid{max-width:1260px;margin:auto;padding:0 32px 80px;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.12fr);gap:20px;align-items:start}
        .rtme-panel{background:linear-gradient(155deg,#ffffff0d,#ffffff04);border:1px solid #ffffff22;border-radius:20px;padding:28px;box-shadow:0 20px 70px #0003}
        .rtme-panel-title{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:12px;letter-spacing:.12em;font-weight:800;margin-bottom:28px;color:#e7bfeb}
        .rtme-label{font-size:9px;color:#b7abae;white-space:nowrap}
        form>label{display:block;font-weight:750;font-size:15px;margin:23px 0 10px}
        textarea,select{width:100%;background:#0d1124;border:1px solid #ffffff35;color:#fff;border-radius:11px;padding:14px;outline-offset:2px}
        textarea:focus-visible,select:focus-visible{outline:2px solid #d5a0ff}
        textarea::placeholder{color:#b0a3be}
        .rtme-hint{font-size:12px;color:#bcaec7;margin-top:7px}
        .rtme-checks{padding:20px;margin:30px 0 22px;border:1px solid #ffffff29;border-radius:14px}
        legend{padding:0 10px;color:#e7bfeb;font-size:12px;letter-spacing:.1em;font-weight:800}
        .rtme-checks p{color:#c4b7ca;font-size:13px;margin:4px 0 18px}
        .rtme-checks label{display:flex;align-items:flex-start;gap:11px;margin:14px 0;color:#e6deeb;font-size:13px;cursor:pointer}
        .rtme-checks input{margin-top:4px;accent-color:#c285ed;width:16px;height:16px;flex-shrink:0}
        button{cursor:pointer}
        button:focus-visible{outline:3px solid #f6caff;outline-offset:3px}
        .rtme-primary{width:100%;border:0;border-radius:12px;background:linear-gradient(120deg,#a75de3,#e7a677);color:#160f23;font-weight:850;padding:17px;display:flex;justify-content:space-between}
        .rtme-message{min-height:24px;margin:13px 0 0;font-size:13px;color:#e0b9ff}
        .rtme-output{min-height:600px}
        .rtme-empty{text-align:center;min-height:460px;display:flex;flex-direction:column;justify-content:center;align-items:center}
        .rtme-symbol{height:150px;width:150px;border:1px solid #b874ee66;border-radius:50%;display:flex;align-items:center;justify-content:center;gap:12px;color:#e1a9ff;font-size:31px;font-weight:800;box-shadow:0 0 0 18px #a067dd0b,0 0 0 36px #a067dd07}
        .rtme-symbol span:nth-child(2){transform:translateY(-15px);color:#ffd59e}
        .rtme-empty h2{font-size:28px;line-height:1.2;margin:42px 0 10px}
        .rtme-empty p{max-width:360px;color:#bfb0cc}
        .rtme-sequence{display:flex;align-items:center;justify-content:center;gap:9px;flex-wrap:wrap;font-size:10px;color:#cfc0db;margin-top:24px;letter-spacing:.07em}
        .rtme-sequence b{color:#dba8f2}
        .rtme-ref{font-size:11px;color:#c6a9ce;overflow-wrap:anywhere}
        .rtme-output h2{font-size:25px;line-height:1.25;margin:10px 0}
        .rtme-muted{color:#c8bdd4;font-size:13px}
        .rtme-phase{padding:20px 0;border-top:1px solid #ffffff26}
        .rtme-phase-head{display:flex;align-items:center;gap:14px}
        .rtme-phase-head strong{height:42px;width:42px;display:grid;place-items:center;border-radius:12px;background:#7c4f9b66;color:#efc4ff;font-size:23px}
        .rtme-phase h3{margin:0;font-size:18px}
        .rtme-phase ol{padding-left:23px;color:#d9cfe2;font-size:13px}
        .rtme-phase li{margin:11px 0}
        .rtme-receipt{background:#101b25;border:1px solid #95b5b533;border-radius:12px;padding:19px;font-size:13px}
        .rtme-receipt p{color:#c8d5d8}
        .rtme-receipt time{color:#b9bac8;font-size:12px}
        .rtme-actions{display:flex;gap:12px;margin-top:20px;flex-wrap:wrap}
        .rtme-actions button{border:1px solid #c7a1e166;border-radius:10px;padding:11px 17px;background:#ffffff10;color:#fff;font-weight:700}
        .rtme-boundary{max-width:1196px;margin:0 auto 90px;border-top:1px solid #ffffff2b;padding:38px 0;display:grid;grid-template-columns:1fr 1.1fr;gap:40px}
        .rtme-boundary h2{font-size:33px;line-height:1.15;margin:10px 0}
        .rtme-boundary>p{color:#c8bace}
        .rtme-footer{padding:30px 32px;border-top:1px solid #ffffff26;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;color:#bfb4ca;font-size:13px}
        .rtme-footer strong{color:#f3d7fa}
        .rtme-footer a{text-decoration:underline}
        @media(max-width:800px){.rtme-grid{grid-template-columns:1fr;padding:0 16px 50px}.rtme-panel{padding:20px}.rtme-header{padding:18px 16px}.rtme-header nav{gap:12px}.rtme-header nav a{font-size:11px}.rtme-hero{padding:55px 20px}.rtme-boundary{grid-template-columns:1fr;margin:0 16px 50px;gap:8px}.rtme-output{min-height:420px}}
        @media(prefers-reduced-motion:no-preference){.rtme-primary:hover{filter:brightness(1.08);transform:translateY(-1px)}}
      `}</style>
    </>
  );
}
