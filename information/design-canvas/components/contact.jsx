// Contact + Links directory (dergigi-inspired sitemap at the bottom)
function Contact() {
  const links = [
    { path: '/about', desc: 'longer bio, background, how I got here' },
    { path: '/work', desc: 'selected client and research projects' },
    { path: '/services', desc: 'websites, tools, AI coaching, 1:1 sessions' },
    { path: '/shajara', desc: 'current R&D project — shajara.au' },
    { path: '/writing', desc: 'notes on building, learning, AI' },
    { path: '/github', desc: 'code — Matheus-Liberato-dev' },
    { path: '/linkedin', desc: 'for the recruiters and referrals' },
    { path: '/email', desc: 'hello@matheus.studio' },
  ];

  return (
    <div className="board" data-screen-label="Contact">
      <div className="mn-scroll">
        <Nav active="contact" />
        <main style={{ maxWidth: 680, margin: '0 auto', padding: '80px 40px 72px' }}>
          <Label>Contact</Label>
          <h1 className="mn-display" style={{ fontSize: 72, margin: '16px 0 28px' }}>
            Get in <span className="mn-display-it">touch</span>.
          </h1>

          <p className="mn-lead" style={{ marginBottom: 36 }}>
            The fastest way is email. I answer within a day, usually sooner.
            If you'd prefer a quick call first, book a slot — I do a free 20-minute intro.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            marginBottom: 36,
          }}>
            <a href="mailto:hello@matheus.studio" style={{
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid var(--rule)',
              padding: '24px 20px',
              display: 'block',
            }}>
              <Label>Email</Label>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, marginTop: 8, color: 'var(--accent)' }}>
                hello@matheus.studio
              </div>
              <div style={{ fontFamily: 'var(--font-serif-alt)', fontSize: 14, color: 'var(--ink-soft)', marginTop: 4 }}>
                Best for project enquiries.
              </div>
            </a>
            <a href="#" style={{
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid var(--rule)',
              padding: '24px 20px',
              display: 'block',
            }}>
              <Label>Intro call — free</Label>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, marginTop: 8 }}>
                Book 20 min →
              </div>
              <div style={{ fontFamily: 'var(--font-serif-alt)', fontSize: 14, color: 'var(--ink-soft)', marginTop: 4 }}>
                Cal.com · Sydney timezone.
              </div>
            </a>
          </div>

          <p className="mn-body" style={{ fontSize: 16 }}>
            I'm based in <L>Carlingford, Sydney</L> and I'll come to you in person
            locally, or work remotely if you're anywhere else. In the first call we'll
            figure out if what you need is a new site, a small tool, or just
            some hours of <L>Claude Code</L> coaching.
          </p>

          <Rule />

          <Label>Links</Label>
          <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0' }}>
            {links.map(l => (
              <li key={l.path} style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: 24,
                padding: '10px 0',
                fontFamily: 'var(--font-serif-alt)',
                fontSize: 17,
                borderBottom: '1px dashed var(--rule)',
              }}>
                <a href="#" className="mn-inline-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>{l.path}</a>
                <span style={{ color: 'var(--ink-soft)' }}>{l.desc}</span>
              </li>
            ))}
          </ul>
        </main>
        <Footer />
      </div>
    </div>
  );
}
Object.assign(window, { Contact });
