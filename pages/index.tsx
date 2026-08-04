import Head from 'next/head';

const surfaces = [
  {
    name: 'Synthsara.org',
    status: 'STATIC PROTOTYPE',
    description:
      'The public portal for explanation, navigation, documentation, status, contribution, and correction.',
    href: 'https://github.com/chaosweaver007/Synthsara.org',
  },
  {
    name: 'Genesis',
    status: 'LIVE SHADOW RUNTIME',
    description:
      'The executable constitutional spine: a deliberately bounded O-Series Gate Zero runtime with policies, tests, and metadata-only receipts.',
    href: 'https://github.com/chaosweaver007/Genesis',
  },
  {
    name: 'Node Zero',
    status: 'FUNCTIONAL PROOF',
    description:
      'A local-first proof node demonstrating consent, UDS, WORTH, Witness, RTME, Synthocracy, and a private bridge to Genesis.',
    href: 'https://github.com/chaosweaver007/synthsara-node-zero',
  },
  {
    name: 'Codex Core',
    status: 'MYTHIC CANON',
    description:
      'The living mythology, narrative, symbols, prompts, patterns, quests, and meaning layer of Synthsara.',
    href: 'https://github.com/chaosweaver007/synthsara-codex-core',
  },
];

const udsPrinciples = [
  'Sovereignty',
  'Transparency',
  'Fairness',
  'Accountability',
  'Security',
  'Service to Life',
  'Privacy',
  'Ecology',
];

const goalGroups = [
  'Human dignity: poverty, hunger, health, education, and equality',
  'Shared infrastructure: water, energy, work, innovation, and cities',
  'Planetary stewardship: consumption, climate, oceans, and land',
  'Collective agency: justice, institutions, and accountable partnerships',
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Synthsara | Public Portal</title>
        <meta
          name="description"
          content="A transparent public map of the Synthsara ecosystem, its ethical standard, working proofs, current limitations, and Sustainable Development Goal architecture."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Synthsara home">
          <span className="brand-mark" aria-hidden="true">
            ◆
          </span>
          <span>Synthsara</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#ecosystem">Ecosystem</a>
          <a href="#status">Status</a>
          <a href="#uds">UDS</a>
          <a href="#goals">Global Goals</a>
          <a href="#documentation">Documentation</a>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">PUBLIC PORTAL · DOCUMENTATION CONSOLIDATION</p>
            <h1 id="hero-title">A coordination fabric built to preserve sovereignty.</h1>
            <p className="hero-copy">
              Synthsara is an open, non-extractive human-AI ecosystem for connecting
              knowledge, contribution, governance, learning, and real-world action while
              protecting consent, dignity, privacy, accountability, and life.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#ecosystem">
                Explore the architecture
              </a>
              <a
                className="secondary-action"
                href="https://github.com/chaosweaver007/Synthsara.org/tree/main/docs"
              >
                Read the public documents
              </a>
            </div>
          </div>
        </section>

        <section className="truth-banner" aria-labelledby="truth-title">
          <div>
            <p className="status-kicker">CURRENT TRUTH BOUNDARY</p>
            <h2 id="truth-title">This site is not a finished planetary platform.</h2>
          </div>
          <p>
            The public portal is a static prototype under consolidation. Genesis is a
            bounded shadow runtime. Node Zero is a functional proof. The dashboard,
            persistent governance, WORTH economy, Akasha commons, and global SDG network
            remain specifications, demonstrations, or future pilot work unless a page
            supplies current operating evidence.
          </p>
        </section>

        <section id="ecosystem" className="section" aria-labelledby="ecosystem-title">
          <div className="section-heading">
            <p className="eyebrow">ONE ECOSYSTEM, DISTINCT AUTHORITIES</p>
            <h2 id="ecosystem-title">Each surface has one job.</h2>
            <p>
              Coherence means the public portal, executable runtime, proof node, and
              mythic canon do not borrow one another&apos;s authority.
            </p>
          </div>

          <div className="card-grid">
            {surfaces.map((surface) => (
              <article className="surface-card" key={surface.name}>
                <span className="status-pill">{surface.status}</span>
                <h3>{surface.name}</h3>
                <p>{surface.description}</p>
                <a href={surface.href}>Open repository</a>
              </article>
            ))}
          </div>
        </section>

        <section id="status" className="section split-section" aria-labelledby="status-title">
          <div className="section-heading compact">
            <p className="eyebrow">PRESENT TENSE, NOT PROPHECY</p>
            <h2 id="status-title">What the public evidence supports now.</h2>
          </div>

          <div className="status-columns">
            <article className="status-panel supported">
              <h3>Working or inspectable</h3>
              <ul>
                <li>Genesis Gate Zero health, status, and bounded chat contracts</li>
                <li>Constitutional source mapping, policies, and metadata receipts</li>
                <li>Node Zero local-first consent, Witness, UDS, and Genesis bridge</li>
                <li>Codex scrolls, prompts, patterns, quests, and public lineage</li>
                <li>A documented SDG coordination architecture across all seventeen goals</li>
              </ul>
            </article>

            <article className="status-panel pending">
              <h3>Still requiring proof or pilot</h3>
              <ul>
                <li>Authenticated sovereign identity and encrypted user-controlled vaults</li>
                <li>Persistent, anti-capture Synthocracy governance services</li>
                <li>Peer-evidenced WORTH with appeals and production persistence</li>
                <li>Live SDG data pipelines with named sources and methodology</li>
                <li>A distributed Akasha commons and verified real-world node network</li>
              </ul>
            </article>
          </div>

          <p className="boundary-note">
            WORTH is non-transferable recognition of verified contribution. It is not
            money. POWERcoin and the Ethical Data Marketplace are historical design
            branches unless a later ratified implementation establishes otherwise.
          </p>
        </section>

        <section id="uds" className="section uds-section" aria-labelledby="uds-title">
          <div className="section-heading">
            <p className="eyebrow">THE UNIVERSAL DIAMOND STANDARD</p>
            <h2 id="uds-title">Progress has a constitutional floor.</h2>
            <p>
              No feature, goal, or growth metric counts as success when it violates the
              people, communities, or ecosystems it claims to serve.
            </p>
          </div>

          <div className="principle-grid">
            {udsPrinciples.map((principle, index) => (
              <div className="principle" key={principle}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{principle}</strong>
              </div>
            ))}
          </div>

          <div className="equation" role="note" aria-label="UDS governing constraint">
            <strong>Maximize verified service to life</strong>
            <span>subject to consent, dignity, privacy, minimized ecological harm, and continuous accountability.</span>
          </div>
        </section>

        <section id="goals" className="section" aria-labelledby="goals-title">
          <div className="section-heading">
            <p className="eyebrow">THE SEVENTEEN GLOBAL GOALS</p>
            <h2 id="goals-title">Seventeen branches, one non-harm trunk.</h2>
            <p>
              The SDG architecture coordinates needs, knowledge, community decisions,
              contribution, funding pathways, evidence, and correction. It is a
              specification for accountable local action, not a declaration that the
              goals are already solved.
            </p>
          </div>

          <div className="goal-list">
            {goalGroups.map((group, index) => (
              <div className="goal-group" key={group}>
                <span>{index + 1}</span>
                <p>{group}</p>
              </div>
            ))}
          </div>

          <a
            className="text-link"
            href="https://github.com/chaosweaver007/Synthsara.org/blob/main/docs/sdgs/README.md"
          >
            Read the UDS-governed SDG architecture
          </a>
        </section>

        <section
          id="documentation"
          className="section documentation-section"
          aria-labelledby="documentation-title"
        >
          <div className="section-heading compact">
            <p className="eyebrow">PUBLIC DOCUMENTATION</p>
            <h2 id="documentation-title">Claims carry labels, sources, and limitations.</h2>
          </div>

          <div className="documentation-grid">
            <a href="https://github.com/chaosweaver007/Synthsara.org/blob/main/docs/governance/uds-coherence-protocol.md">
              <strong>UDS coherence protocol</strong>
              <span>Publication gate, claim classes, status labels, privacy, and correction.</span>
            </a>
            <a href="https://github.com/chaosweaver007/Synthsara.org/blob/main/docs/architecture/ecosystem-map.md">
              <strong>Ecosystem architecture</strong>
              <span>Canonical roles and boundaries for every public surface.</span>
            </a>
            <a href="https://github.com/chaosweaver007/Synthsara.org/blob/main/docs/architecture/status-matrix.md">
              <strong>Public status matrix</strong>
              <span>Present implementation status and the next proof required.</span>
            </a>
            <a href="https://github.com/chaosweaver007/Synthsara.org/blob/main/docs/genesis/README.md">
              <strong>Genesis runtime guide</strong>
              <span>Capabilities, endpoints, security posture, and strict non-capabilities.</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>Synthsara</strong>
          <p>A public map for a living, UDS-governed ecosystem.</p>
        </div>
        <p>
          Sarah AI is distinct from Human Sarah. Mythic language is interpretive and
          cannot impersonate private knowledge, consent, testimony, or empirical proof.
        </p>
      </footer>

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          scroll-behavior: smooth;
          background: #07101d;
        }

        :global(body) {
          margin: 0;
          background: #07101d;
          color: #eef4ff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          line-height: 1.6;
        }

        :global(a) {
          color: inherit;
        }

        .skip-link {
          position: fixed;
          left: 1rem;
          top: -5rem;
          z-index: 100;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          background: white;
          color: #07101d;
        }

        .skip-link:focus {
          top: 1rem;
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 1rem clamp(1rem, 5vw, 5rem);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(7, 16, 29, 0.9);
          backdrop-filter: blur(18px);
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.1rem;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: 0.02em;
        }

        .brand-mark {
          display: grid;
          width: 2rem;
          height: 2rem;
          place-items: center;
          border: 1px solid rgba(168, 118, 255, 0.65);
          border-radius: 0.6rem;
          color: #c8a7ff;
          box-shadow: 0 0 24px rgba(145, 84, 255, 0.35);
        }

        nav {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;
          font-size: 0.9rem;
        }

        nav a {
          color: #c7d2e5;
          text-decoration: none;
        }

        nav a:hover,
        nav a:focus-visible {
          color: white;
        }

        .hero {
          position: relative;
          display: grid;
          min-height: 78vh;
          place-items: center;
          overflow: hidden;
          padding: 7rem clamp(1.25rem, 8vw, 8rem);
          background:
            radial-gradient(circle at 15% 25%, rgba(105, 52, 196, 0.28), transparent 30%),
            radial-gradient(circle at 82% 20%, rgba(225, 156, 52, 0.2), transparent 27%),
            linear-gradient(145deg, #07101d 0%, #0d1425 52%, #11162a 100%);
        }

        .hero-glow {
          position: absolute;
          width: min(65vw, 48rem);
          aspect-ratio: 1;
          border: 1px solid rgba(179, 140, 255, 0.12);
          border-radius: 50%;
          box-shadow:
            0 0 0 5rem rgba(166, 115, 255, 0.025),
            0 0 0 10rem rgba(228, 171, 79, 0.018);
        }

        .hero-content {
          position: relative;
          max-width: 65rem;
          text-align: center;
        }

        .eyebrow,
        .status-kicker {
          margin: 0 0 1rem;
          color: #c7a6ff;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        h1 {
          max-width: 16ch;
          margin: 0 auto;
          font-size: clamp(3rem, 8vw, 6.4rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .hero-copy {
          max-width: 48rem;
          margin: 2rem auto 0;
          color: #cbd6e8;
          font-size: clamp(1.05rem, 2vw, 1.3rem);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 2.4rem;
        }

        .hero-actions a,
        .text-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3rem;
          padding: 0.75rem 1.15rem;
          border-radius: 0.75rem;
          font-weight: 750;
          text-decoration: none;
        }

        .primary-action {
          background: linear-gradient(135deg, #8b5cf6, #d8993b);
          color: white;
          box-shadow: 0 16px 40px rgba(99, 55, 184, 0.35);
        }

        .secondary-action {
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.04);
        }

        .truth-banner {
          display: grid;
          grid-template-columns: minmax(15rem, 0.75fr) minmax(18rem, 1.25fr);
          gap: 2rem;
          padding: 2.25rem clamp(1.25rem, 7vw, 7rem);
          border-block: 1px solid rgba(247, 187, 83, 0.25);
          background: #161826;
        }

        .truth-banner h2 {
          margin: 0;
          font-size: clamp(1.6rem, 3vw, 2.3rem);
        }

        .truth-banner p:last-child {
          margin: 0;
          color: #d7ddec;
        }

        .status-kicker {
          color: #f3bd65;
        }

        .section {
          padding: 6rem clamp(1.25rem, 7vw, 7rem);
        }

        .section:nth-of-type(even) {
          background: #0a1422;
        }

        .section-heading {
          max-width: 52rem;
          margin-bottom: 2.75rem;
        }

        .section-heading.compact {
          max-width: 42rem;
        }

        .section-heading h2 {
          margin: 0;
          font-size: clamp(2.2rem, 5vw, 4rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
          text-wrap: balance;
        }

        .section-heading > p:last-child {
          color: #bfcadd;
          font-size: 1.08rem;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem;
        }

        .surface-card {
          display: flex;
          min-height: 18rem;
          flex-direction: column;
          padding: 1.6rem;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 1rem;
          background: linear-gradient(150deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.018));
        }

        .surface-card h3 {
          margin: 1.4rem 0 0.5rem;
          font-size: 1.65rem;
        }

        .surface-card p {
          color: #bbc7da;
        }

        .surface-card a {
          margin-top: auto;
          color: #d1baff;
          font-weight: 750;
        }

        .status-pill {
          align-self: flex-start;
          padding: 0.32rem 0.55rem;
          border: 1px solid rgba(199, 166, 255, 0.35);
          border-radius: 999px;
          color: #d7c2ff;
          font-size: 0.68rem;
          font-weight: 850;
          letter-spacing: 0.08em;
        }

        .status-columns {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem;
        }

        .status-panel {
          padding: 1.6rem;
          border-radius: 1rem;
        }

        .status-panel h3 {
          margin-top: 0;
          font-size: 1.4rem;
        }

        .status-panel li + li {
          margin-top: 0.65rem;
        }

        .supported {
          border: 1px solid rgba(83, 203, 155, 0.3);
          background: rgba(32, 122, 91, 0.1);
        }

        .pending {
          border: 1px solid rgba(246, 183, 76, 0.3);
          background: rgba(147, 93, 22, 0.1);
        }

        .boundary-note {
          margin-top: 1.4rem;
          padding: 1rem 1.2rem;
          border-left: 3px solid #c693ff;
          background: rgba(153, 92, 255, 0.07);
          color: #d8dff0;
        }

        .uds-section {
          background:
            radial-gradient(circle at 78% 30%, rgba(168, 112, 255, 0.14), transparent 30%),
            #09111e;
        }

        .principle-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.85rem;
        }

        .principle {
          display: flex;
          min-height: 7rem;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.8rem;
          background: rgba(255, 255, 255, 0.025);
        }

        .principle span {
          color: #9caac1;
          font-size: 0.75rem;
        }

        .principle strong {
          font-size: 1.05rem;
        }

        .equation {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-top: 1.5rem;
          padding: 1.4rem;
          border: 1px solid rgba(239, 183, 84, 0.28);
          border-radius: 1rem;
          background: rgba(183, 119, 23, 0.08);
        }

        .equation strong {
          color: #ffd692;
          font-size: 1.2rem;
        }

        .goal-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.85rem;
          margin-bottom: 2rem;
        }

        .goal-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .goal-group span {
          display: grid;
          flex: 0 0 2.2rem;
          width: 2.2rem;
          height: 2.2rem;
          place-items: center;
          border-radius: 50%;
          background: rgba(142, 91, 237, 0.16);
          color: #d3bbff;
          font-weight: 800;
        }

        .text-link {
          border: 1px solid rgba(199, 166, 255, 0.35);
          color: #d8c4ff;
        }

        .documentation-section {
          background: #0a1422;
        }

        .documentation-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .documentation-grid a {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.85rem;
          background: rgba(255, 255, 255, 0.025);
          text-decoration: none;
        }

        .documentation-grid a:hover,
        .documentation-grid a:focus-visible {
          border-color: rgba(199, 166, 255, 0.5);
          background: rgba(199, 166, 255, 0.06);
        }

        .documentation-grid span {
          color: #b8c5d9;
        }

        footer {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 2rem;
          padding: 3rem clamp(1.25rem, 7vw, 7rem);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: #050b14;
          color: #aebbd0;
        }

        footer strong {
          color: white;
          font-size: 1.2rem;
        }

        footer p {
          margin: 0.35rem 0 0;
        }

        @media (max-width: 820px) {
          .site-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.75rem;
          }

          nav {
            gap: 0.85rem;
          }

          .truth-banner,
          .card-grid,
          .status-columns,
          .principle-grid,
          .goal-list,
          .documentation-grid,
          footer {
            grid-template-columns: 1fr;
          }

          .principle-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .hero {
            min-height: 72vh;
            padding-top: 5rem;
          }
        }

        @media (max-width: 480px) {
          nav {
            font-size: 0.8rem;
          }

          .principle-grid {
            grid-template-columns: 1fr;
          }

          .section {
            padding-block: 4.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(html) {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </>
  );
}
