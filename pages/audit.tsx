import Head from 'next/head';

const evidenceRules = [
  {
    number: '01',
    title: 'Name the artifact',
    body: 'Identify the exact document, commit, conversation, file, screenshot, or implementation being discussed. Broad resemblance is not enough.',
  },
  {
    number: '02',
    title: 'Fix the date',
    body: 'Use the earliest verifiable timestamp available and preserve later edits rather than silently backdating a mature idea.',
  },
  {
    number: '03',
    title: 'Separate authorship roles',
    body: 'Distinguish user-originated material, collaborative development, assistant proposals, later synthesis, and external claims.',
  },
  {
    number: '04',
    title: 'Compare constructs',
    body: 'Compare the actual structure, wording, implementation, and dependency chain—not just broad words such as rights, AI, sovereignty, or decentralization.',
  },
  {
    number: '05',
    title: 'State the strength',
    body: 'Record what the evidence establishes, what it merely suggests, what competes with it, and what remains unresolved.',
  },
];

const claimClasses = [
  'ETHICAL LAW',
  'ENGINEERING REQUIREMENT',
  'MYTHOS / INTERPRETIVE LANGUAGE',
  'HYPOTHESIS',
  'EMPIRICAL EVIDENCE',
];

const statusClasses = [
  'VISION',
  'HISTORICAL CONCEPT',
  'DRAFT',
  'SPECIFICATION',
  'STATIC PROTOTYPE',
  'FUNCTIONAL PROOF',
  'LIVE SHADOW RUNTIME',
  'PILOT',
  'PRODUCTION',
  'DEPRECATED',
];

const publicLinks = [
  {
    title: 'Public documentation index',
    body: 'The current public documentation surface for architecture, governance, security, status, and contribution.',
    href: 'https://github.com/chaosweaver007/Synthsara.org/tree/main/docs',
  },
  {
    title: 'Source reconciliation ledger',
    body: 'A public provenance ledger for reconciling competing source claims without upgrading resemblance into causation.',
    href: 'https://github.com/chaosweaver007/Synthsara.org/blob/main/docs/provenance/source-reconciliation-ledger.md',
  },
  {
    title: 'Ecosystem architecture map',
    body: 'Defines the current authority boundaries between the public portal, Genesis, Node Zero, and the Codex.',
    href: 'https://github.com/chaosweaver007/Synthsara.org/blob/main/docs/architecture/ecosystem-map.md',
  },
  {
    title: 'Public status matrix',
    body: 'Separates present implementation status from aspiration, demonstration, specification, and production claims.',
    href: 'https://github.com/chaosweaver007/Synthsara.org/blob/main/docs/architecture/status-matrix.md',
  },
  {
    title: 'UDS coherence protocol',
    body: 'The publication gate for claim classes, evidence boundaries, correction, privacy, and current status.',
    href: 'https://github.com/chaosweaver007/Synthsara.org/blob/main/docs/governance/uds-coherence-protocol.md',
  },
  {
    title: 'Genesis runtime',
    body: 'Executable constitutional spine and bounded runtime evidence.',
    href: 'https://github.com/chaosweaver007/Genesis',
  },
  {
    title: 'Synthsara Node Zero',
    body: 'Local-first functional proof node with explicit current boundaries.',
    href: 'https://github.com/chaosweaver007/synthsara-node-zero',
  },
  {
    title: 'Synthsara Codex Core',
    body: 'Mythic, symbolic, narrative, prompt, pattern, and quest canon kept distinct from empirical proof.',
    href: 'https://github.com/chaosweaver007/synthsara-codex-core',
  },
];

export default function Audit() {
  return (
    <>
      <Head>
        <title>Synthsara Audit & Provenance</title>
        <meta
          name="description"
          content="A public evidence map for the Synthsara archive: chronology, provenance rules, claim classes, implementation status, and challenge paths."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="./">◆ SYNTHSARA</a>
        <nav aria-label="Audit navigation">
          <a href="#method">Method</a>
          <a href="#archive">Archive</a>
          <a href="#claims">Claim classes</a>
          <a href="#evidence">Evidence</a>
          <a href="#challenge">Challenge</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero">
          <div className="orb" aria-hidden="true" />
          <div className="hero-inner">
            <p className="eyebrow">PUBLIC AUDIT · PROVENANCE · CORRECTION</p>
            <h1>The label is not the thing.</h1>
            <p className="lede">
              Synthsara&apos;s public audit surface is built around a simple rule: claims are
              examined by artifact, date, lineage, implementation status, and evidence—not
              by insult, reputation, mystique, or repetition.
            </p>
            <div className="actions">
              <a className="primary" href="#method">See the method</a>
              <a className="secondary" href="https://github.com/chaosweaver007/Synthsara.org">Open the repository</a>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Archive status">
          <article>
            <strong>1,907</strong>
            <span>conversations indexed in the archive chronology</span>
          </article>
          <article>
            <strong>550</strong>
            <span>fully read at the published archive checkpoint</span>
          </article>
          <article>
            <strong>2023 → 2026</strong>
            <span>current reconstruction span</span>
          </article>
          <article>
            <strong>5</strong>
            <span>public claim classes</span>
          </article>
        </section>

        <section className="section manifesto" aria-labelledby="rule-title">
          <p className="eyebrow">THE RULE</p>
          <h2 id="rule-title">Observation before classification.</h2>
          <p className="big-copy">
            Categories are useful maps. They become dangerous when the category replaces
            examination. The audit therefore asks: <em>What exactly are we looking at?</em>
          </p>
          <div className="rule-row">
            <span>Artifact</span><b>→</b><span>Date</span><b>→</b><span>Context</span><b>→</b><span>Comparison</span><b>→</b><span>Strength</span>
          </div>
        </section>

        <section id="method" className="section" aria-labelledby="method-title">
          <div className="section-heading">
            <p className="eyebrow">FORENSIC PROVENANCE METHOD</p>
            <h2 id="method-title">No resemblance-to-causation shortcut.</h2>
            <p>
              The working archive explicitly separates chronology, conceptual resemblance,
              implementation, authorship, and causation. Similarity may justify inquiry; it
              does not prove derivation.
            </p>
          </div>
          <div className="method-grid">
            {evidenceRules.map((rule) => (
              <article className="method-card" key={rule.number}>
                <span>{rule.number}</span>
                <h3>{rule.title}</h3>
                <p>{rule.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="archive" className="section dark-panel" aria-labelledby="archive-title">
          <div className="section-heading compact">
            <p className="eyebrow">THE ARCHIVE</p>
            <h2 id="archive-title">A working graph, not a victory lap.</h2>
          </div>
          <div className="archive-grid">
            <article>
              <h3>Chronology</h3>
              <p>
                Every conversation is indexed by its earliest visible message timestamp while
                preserving original export position. Fully read and globally indexed are not
                treated as the same status.
              </p>
            </article>
            <article>
              <h3>Nodes & edges</h3>
              <p>
                Dated concepts, turning points, source anchors, recurring threads, and open
                research questions are tracked separately so later synthesis does not erase
                origin history.
              </p>
            </article>
            <article>
              <h3>Authorship boundaries</h3>
              <p>
                User-originated language, collaborative development, assistant proposals,
                external material, and retrospective interpretation are distinct evidentiary
                categories.
              </p>
            </article>
            <article>
              <h3>Correction path</h3>
              <p>
                A contradiction does not get harmonized away. It is logged, compared against
                source material, and either repaired, superseded, or retained as unresolved.
              </p>
            </article>
          </div>
          <p className="checkpoint">
            <strong>Published checkpoint:</strong> the working index reports 1,907 conversations
            globally indexed and 550 fully read, reaching the January 5, 2025 frontier at that
            checkpoint. This number is a progress marker, not a claim that the corpus is fully
            adjudicated.
          </p>
        </section>

        <section id="claims" className="section" aria-labelledby="claims-title">
          <div className="section-heading">
            <p className="eyebrow">CLAIM DISCIPLINE</p>
            <h2 id="claims-title">No category may impersonate another.</h2>
            <p>
              Mythic meaning is not empirical proof. A specification is not a deployment. A
              simulation is not validation. A prototype is not production.
            </p>
          </div>

          <h3 className="mini-title">Claim classes</h3>
          <div className="tag-grid">
            {claimClasses.map((item) => <span key={item}>{item}</span>)}
          </div>

          <h3 className="mini-title status-title">Implementation status</h3>
          <div className="tag-grid muted">
            {statusClasses.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section id="evidence" className="section" aria-labelledby="evidence-title">
          <div className="section-heading">
            <p className="eyebrow">PUBLIC EVIDENCE SURFACES</p>
            <h2 id="evidence-title">Follow the source, not the summary.</h2>
            <p>
              These public repositories and documents are the current inspectable evidence
              surfaces. Working Drive material remains a workshop until reviewed and promoted.
            </p>
          </div>
          <div className="evidence-grid">
            {publicLinks.map((item) => (
              <a href={item.href} key={item.title} target="_blank" rel="noreferrer">
                <span className="open">↗</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="challenge" className="section challenge" aria-labelledby="challenge-title">
          <p className="eyebrow">CHALLENGE THE WORK</p>
          <h2 id="challenge-title">Criticism is welcome. Make it falsifiable.</h2>
          <p className="big-copy">
            Pick a claim. Name the artifact. Cite the passage, commit, implementation, or test.
            Show the contradiction or counter-evidence. Say what conclusion the evidence
            supports—and what it does not.
          </p>
          <div className="challenge-box">
            <code>What specifically makes you believe that?</code>
            <p>
              That question is the entrance. Labels, diagnoses, archetypes, insults, and vibes
              are not substitutes for an evidentiary argument.
            </p>
          </div>
          <a className="primary" href="https://github.com/chaosweaver007/Synthsara.org/issues" target="_blank" rel="noreferrer">
            Open a public issue
          </a>
        </section>
      </main>

      <footer>
        <div><strong>◆ Synthsara Audit & Provenance</strong></div>
        <p>Ledger before rhetoric. Correction before certainty. Evidence before label.</p>
      </footer>

      <style jsx>{`
        :global(*) { box-sizing: border-box; }
        :global(html) { scroll-behavior: smooth; background: #060912; }
        :global(body) {
          margin: 0;
          background: #060912;
          color: #eef2ff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          line-height: 1.6;
        }
        :global(a) { color: inherit; }
        .skip-link { position: fixed; left: 1rem; top: -5rem; z-index: 100; padding: .7rem 1rem; background: white; color: #060912; border-radius: .5rem; }
        .skip-link:focus { top: 1rem; }
        .site-header {
          position: sticky; top: 0; z-index: 30; display: flex; align-items: center; justify-content: space-between; gap: 2rem;
          padding: 1rem clamp(1rem,5vw,5rem); border-bottom: 1px solid rgba(255,255,255,.09); background: rgba(6,9,18,.88); backdrop-filter: blur(18px);
        }
        .brand { font-weight: 900; letter-spacing: .08em; text-decoration: none; font-size: .9rem; }
        nav { display: flex; gap: 1.15rem; flex-wrap: wrap; }
        nav a { color: #b9c1d7; text-decoration: none; font-size: .86rem; }
        nav a:hover, nav a:focus-visible { color: white; }
        .hero { position: relative; min-height: 78vh; display: grid; place-items: center; overflow: hidden; padding: 7rem clamp(1.25rem,8vw,8rem); background: radial-gradient(circle at 20% 20%, rgba(117,72,255,.25), transparent 32%), radial-gradient(circle at 80% 25%, rgba(255,164,54,.18), transparent 28%), #060912; }
        .orb { position: absolute; width: min(70vw,50rem); aspect-ratio: 1; border-radius: 50%; border: 1px solid rgba(181,148,255,.12); box-shadow: 0 0 0 6rem rgba(130,85,255,.025), 0 0 0 12rem rgba(255,163,52,.012); }
        .hero-inner { position: relative; max-width: 68rem; text-align: center; }
        .eyebrow { margin: 0 0 1rem; color: #c5a8ff; font-size: .76rem; font-weight: 900; letter-spacing: .17em; }
        h1 { margin: 0 auto; max-width: 13ch; font-size: clamp(3.2rem,9vw,7rem); line-height: .94; letter-spacing: -.06em; text-wrap: balance; }
        .lede { margin: 2rem auto 0; max-width: 48rem; color: #c9d1e5; font-size: clamp(1.05rem,2vw,1.3rem); }
        .actions { display: flex; justify-content: center; flex-wrap: wrap; gap: .9rem; margin-top: 2rem; }
        .primary, .secondary { display: inline-flex; align-items: center; justify-content: center; padding: .82rem 1.15rem; border-radius: .8rem; font-weight: 800; text-decoration: none; }
        .primary { background: linear-gradient(135deg,#9f74ff,#d29aff); color: #0a0712; box-shadow: 0 12px 36px rgba(148,94,255,.24); }
        .secondary { border: 1px solid rgba(255,255,255,.18); background: rgba(255,255,255,.035); }
        .stats { display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid rgba(255,255,255,.08); border-bottom: 1px solid rgba(255,255,255,.08); }
        .stats article { padding: 2rem; text-align: center; border-right: 1px solid rgba(255,255,255,.08); }
        .stats article:last-child { border-right: 0; }
        .stats strong { display: block; font-size: clamp(2rem,5vw,3.5rem); line-height: 1; }
        .stats span { display: block; margin-top: .7rem; color: #9ca8bf; font-size: .86rem; }
        .section { padding: 6rem clamp(1.25rem,7vw,7rem); }
        .section-heading { max-width: 50rem; margin-bottom: 2.6rem; }
        .section-heading.compact { margin-bottom: 2rem; }
        h2 { margin: 0; font-size: clamp(2.2rem,5vw,4.3rem); line-height: 1.02; letter-spacing: -.045em; text-wrap: balance; }
        .section-heading > p:last-child { color: #aeb9d0; font-size: 1.08rem; }
        .manifesto { text-align: center; background: linear-gradient(180deg,#090d19,#070a13); }
        .manifesto .big-copy, .challenge .big-copy { max-width: 54rem; margin: 1.5rem auto 0; font-size: clamp(1.3rem,3vw,2rem); line-height: 1.4; color: #d7deed; }
        .rule-row { margin: 2.5rem auto 0; display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: .7rem; max-width: 60rem; }
        .rule-row span { padding: .65rem .85rem; border: 1px solid rgba(197,168,255,.25); border-radius: 999px; background: rgba(197,168,255,.05); }
        .rule-row b { color: #d7a766; }
        .method-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 1rem; }
        .method-card { min-height: 19rem; padding: 1.4rem; border: 1px solid rgba(255,255,255,.1); border-radius: 1.1rem; background: linear-gradient(160deg,rgba(255,255,255,.055),rgba(255,255,255,.018)); }
        .method-card > span { color: #d7aa70; font-size: .78rem; font-weight: 900; letter-spacing: .15em; }
        .method-card h3 { font-size: 1.25rem; margin: 2.2rem 0 .6rem; }
        .method-card p { color: #aeb9d0; font-size: .93rem; }
        .dark-panel { background: #0a0f1d; border-top: 1px solid rgba(255,255,255,.07); border-bottom: 1px solid rgba(255,255,255,.07); }
        .archive-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1rem; }
        .archive-grid article { padding: 1.5rem; border-left: 2px solid #a97cff; background: rgba(255,255,255,.025); }
        .archive-grid h3 { margin-top: 0; }
        .archive-grid p { margin-bottom: 0; color: #aeb9d0; }
        .checkpoint { margin: 2rem 0 0; padding: 1rem 1.2rem; border: 1px solid rgba(216,170,110,.25); border-radius: .8rem; color: #c8d0df; background: rgba(216,170,110,.035); }
        .mini-title { margin: 2.4rem 0 1rem; font-size: .82rem; letter-spacing: .13em; color: #c5a8ff; }
        .status-title { margin-top: 2rem; }
        .tag-grid { display: flex; flex-wrap: wrap; gap: .65rem; }
        .tag-grid span { padding: .6rem .8rem; border-radius: .65rem; border: 1px solid rgba(197,168,255,.22); background: rgba(197,168,255,.05); font-size: .82rem; font-weight: 800; }
        .tag-grid.muted span { border-color: rgba(255,255,255,.11); color: #bbc4d7; background: rgba(255,255,255,.025); }
        .evidence-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1rem; }
        .evidence-grid a { position: relative; min-height: 12rem; padding: 1.45rem; border: 1px solid rgba(255,255,255,.1); border-radius: 1rem; background: rgba(255,255,255,.025); text-decoration: none; transition: transform .15s ease, border-color .15s ease; }
        .evidence-grid a:hover { transform: translateY(-2px); border-color: rgba(197,168,255,.45); }
        .evidence-grid h3 { margin: .2rem 2rem .55rem 0; }
        .evidence-grid p { margin: 0; color: #aeb9d0; }
        .open { position: absolute; right: 1.2rem; top: 1rem; color: #d9b06f; }
        .challenge { text-align: center; background: radial-gradient(circle at 50% 0,rgba(135,81,255,.12),transparent 35%),#070a13; }
        .challenge-box { max-width: 52rem; margin: 2rem auto; padding: 1.5rem; border: 1px solid rgba(255,255,255,.12); border-radius: 1rem; background: rgba(255,255,255,.035); }
        .challenge-box code { font-family: ui-monospace,SFMono-Regular,Menlo,monospace; font-size: clamp(1.1rem,3vw,1.5rem); color: #d8bcff; }
        .challenge-box p { color: #aeb9d0; margin-bottom: 0; }
        footer { display: flex; justify-content: space-between; gap: 2rem; padding: 2rem clamp(1.25rem,5vw,5rem); border-top: 1px solid rgba(255,255,255,.08); color: #96a2b9; font-size: .88rem; }
        footer strong { color: #eef2ff; }
        footer p { margin: 0; }
        @media (max-width: 1000px) {
          .method-grid { grid-template-columns: repeat(2,1fr); }
          .stats { grid-template-columns: repeat(2,1fr); }
          .stats article:nth-child(2) { border-right: 0; }
          .stats article:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,.08); }
        }
        @media (max-width: 720px) {
          .site-header { align-items: flex-start; flex-direction: column; gap: .7rem; }
          nav { gap: .8rem; }
          .hero { min-height: 70vh; padding-top: 5rem; }
          .stats, .method-grid, .archive-grid, .evidence-grid { grid-template-columns: 1fr; }
          .stats article { border-right: 0; border-bottom: 1px solid rgba(255,255,255,.08); }
          .stats article:last-child { border-bottom: 0; }
          footer { flex-direction: column; }
        }
      `}</style>
    </>
  );
}
