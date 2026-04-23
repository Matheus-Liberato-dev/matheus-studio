// Home v3 — Typographic wordmark hero
function HomeWordmark() {
  return (
    <div className="board" data-screen-label="Home v3 Wordmark">
      <div className="mn-scroll">
        <Nav active="home" />
        <main style={{ padding: '120px 56px 72px', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <Label>Studio · Sydney</Label>
            <Label>Est. 2025 &nbsp;·&nbsp; v4.2</Label>
          </div>

          <h1 className="mn-display" style={{
            fontSize: 'clamp(96px, 14vw, 220px)',
            lineHeight: 0.86,
            margin: '20px 0 0',
            letterSpacing: '-0.02em',
          }}>
            Matheus<br/>
            <span className="mn-display-it">Liberato</span>
            <span style={{ color: 'var(--accent)' }}>.</span>
          </h1>

          <div style={{
            borderTop: '1px solid var(--rule)',
            marginTop: 48,
            paddingTop: 24,
            display: 'grid',
            gridTemplateColumns: '200px 1fr 1fr',
            gap: 40,
            alignItems: 'start',
          }}>
            <div>
              <Photo label="portrait" w={140} h={140} round />
            </div>
            <div>
              <Label>What I do</Label>
              <p className="mn-body" style={{ marginTop: 10, fontSize: 17 }}>
                AI Developer &amp; Web Consultant. I build websites,
                small tools and AI integrations for individuals and
                small businesses.
              </p>
            </div>
            <div>
              <Label>Right now</Label>
              <p className="mn-body" style={{ marginTop: 10, fontSize: 17 }}>
                Independent R&amp;D in large language models.
                Live at <L>shajara.au</L>. Also teaching others to use <L>Claude Code</L>.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 64, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#projects" className="mn-btn">↳ View work</a>
            <a href="#about" className="mn-btn mn-btn-ghost">About</a>
            <a href="#contact" className="mn-btn mn-btn-ghost">Contact</a>
            <a href="#" className="mn-btn mn-btn-ghost">GitHub ↗</a>
          </div>

          <div style={{ marginTop: 72 }}>
            <Label>Services</Label>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1,
              marginTop: 16,
              background: 'var(--rule)',
              border: '1px solid var(--rule)',
            }}>
              {[
                { n: '01', t: 'Websites', d: 'Design & build for individuals and small businesses.' },
                { n: '02', t: 'Web tools', d: 'Custom apps. iOS. Internal utilities.' },
                { n: '03', t: 'AI coaching', d: '1:1 sessions on Claude & Claude Code.' },
                { n: '04', t: 'Maintenance', d: 'Learn to run your site yourself.' },
              ].map(s => (
                <div key={s.n} style={{ background: 'var(--bg)', padding: '24px 20px' }}>
                  <div className="mn-label" style={{ color: 'var(--accent)' }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, marginTop: 8 }}>{s.t}</div>
                  <div style={{ fontFamily: 'var(--font-serif-alt)', fontSize: 14, lineHeight: 1.5, color: 'var(--ink-soft)', marginTop: 8 }}>
                    {s.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
Object.assign(window, { HomeWordmark });
