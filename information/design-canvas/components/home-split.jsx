// Home v2 — Split (portrait left, intro right)
function HomeSplit() {
  return (
    <div className="board" data-screen-label="Home v2 Split">
      <div className="mn-scroll">
        <Nav active="home" />
        <main style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          padding: '80px 72px',
          maxWidth: 1200,
          margin: '0 auto',
          alignItems: 'start',
        }}>
          <div>
            <Photo label="portrait · tulip field" w="100%" h={520} style={{ aspectRatio: '4/5', width: '100%', height: 'auto' }} />
            <div style={{
              marginTop: 18,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              color: 'var(--ink-faint)',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>01 / PORTRAIT</span>
              <span>SYDNEY · 2025</span>
            </div>
          </div>

          <div style={{ paddingTop: 40 }}>
            <Label>AI Developer &amp; Web Consultant</Label>
            <h1 className="mn-display" style={{ fontSize: 68, margin: '18px 0 28px', lineHeight: 0.92 }}>
              Careful work for<br/>
              <span className="mn-display-it">real people</span>.
            </h1>
            <p className="mn-lead" style={{ marginBottom: 32, fontSize: 20 }}>
              I help individuals and small businesses build websites, small tools,
              and confident working relationships with AI — in person or remotely.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, margin: '32px 0' }}>
              <div>
                <Label>Services</Label>
                <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', fontFamily: 'var(--font-serif-alt)', fontSize: 17, lineHeight: 1.7 }}>
                  <li>Website design &amp; dev</li>
                  <li>Custom web tools, iOS apps</li>
                  <li>AI &amp; Claude Code coaching</li>
                  <li>1:1 sessions, in person</li>
                </ul>
              </div>
              <div>
                <Label>Based</Label>
                <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', fontFamily: 'var(--font-serif-alt)', fontSize: 17, lineHeight: 1.7 }}>
                  <li>Carlingford, Sydney</li>
                  <li>Remote — worldwide</li>
                  <li>matheus.studio</li>
                  <li>@matheusliberato</li>
                </ul>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              <a href="#projects" className="mn-btn">Selected work</a>
              <a href="#contact" className="mn-btn mn-btn-ghost">Book a call</a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
Object.assign(window, { HomeSplit });
