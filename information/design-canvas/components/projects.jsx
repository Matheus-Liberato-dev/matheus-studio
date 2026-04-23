// Projects — editorial index
function Projects() {
  const items = [
    { n: '01', y: '2026 —', title: 'Shajara', kind: 'R&D · LLM research system',
      blurb: 'Retrieval-augmented research system for steering LLM reasoning over curated text corpora. Built data pipelines, embeddings, custom chat UI.',
      tech: 'Python · Next.js · Vector DB · Claude API',
      status: 'In progress · shajara.au' },
    { n: '02', y: '2025', title: 'Small-business sites',
      kind: 'Client work · web design',
      blurb: 'Customised websites for local small businesses — starting from proven templates and tailored to each operator. Hand-off includes a 1:1 session on running it yourself.',
      tech: 'Next.js · Tailwind · Vercel',
      status: 'Ongoing engagements' },
    { n: '03', y: '2025', title: 'matheus.studio',
      kind: 'Personal · this site',
      blurb: 'Fork of a minimal Next.js template, rebuilt with my own design system. Documents the work; acts as a hub for services and referrals.',
      tech: 'Next.js 16 · React 19 · shadcn/ui',
      status: 'You are here' },
    { n: '04', y: '2024', title: 'Transcript pipelines',
      kind: 'Tooling',
      blurb: 'Pipelines for downloading, transcribing and cleaning long-form audio into searchable text corpora — the substrate for the Shajara research system.',
      tech: 'Python · Whisper · Postgres',
      status: 'Internal' },
  ];

  return (
    <div className="board" data-screen-label="Projects">
      <div className="mn-scroll">
        <Nav active="projects" />
        <main style={{ maxWidth: 1000, margin: '0 auto', padding: '72px 56px 64px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
            <Label>Selected work</Label>
            <Label>04 entries</Label>
          </div>
          <h1 className="mn-display" style={{ fontSize: 84, margin: '8px 0 44px', lineHeight: 0.95 }}>
            Things I've<br/><span className="mn-display-it">made.</span>
          </h1>

          <div>
            {items.map((p, i) => (
              <a href="#" key={p.n} style={{
                display: 'grid',
                gridTemplateColumns: '60px 110px 1fr 160px',
                gap: 32,
                padding: '28px 0',
                borderTop: '1px solid var(--rule)',
                textDecoration: 'none',
                color: 'inherit',
                alignItems: 'start',
              }}>
                <div className="mn-label" style={{ color: 'var(--accent)' }}>{p.n}</div>
                <div className="mn-label" style={{ color: 'var(--ink-faint)' }}>{p.y}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 36, lineHeight: 1.05 }}>
                    {p.title} <span className="mn-display-it" style={{ color: 'var(--ink-faint)', fontSize: 22 }}>— {p.kind}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif-alt)', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)', marginTop: 10, maxWidth: 540 }}>
                    {p.blurb}
                  </div>
                  <div className="mn-label" style={{ marginTop: 12 }}>{p.tech}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="mn-label" style={{ color: 'var(--ink-faint)' }}>Status</div>
                  <div style={{ fontFamily: 'var(--font-serif-alt)', fontSize: 14, color: 'var(--ink-soft)', marginTop: 6 }}>
                    {p.status}
                  </div>
                  <div style={{ marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)' }}>
                    Read →
                  </div>
                </div>
              </a>
            ))}
            <div style={{ borderTop: '1px solid var(--rule)' }} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
Object.assign(window, { Projects });
