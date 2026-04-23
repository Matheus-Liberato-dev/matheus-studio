// Design decisions handoff — summary card for Claude Code
function Handoff() {
  const tokens = [
    ['--font-serif', "'Instrument Serif', Georgia, serif", 'Display headings (italic variant for emphasis)'],
    ['--font-serif-alt', "'Newsreader', Georgia, serif", 'Body prose — 17–22px'],
    ['--font-sans', "'Inter', system-ui", 'UI elements, buttons, nav'],
    ['--font-mono', "'JetBrains Mono'", 'Labels, metadata, /links'],
    ['--bg', 'oklch(0.985 0.006 85)', 'Warm paper (light); ink (dark)'],
    ['--ink', 'oklch(0.2 0.012 60)', 'Primary text'],
    ['--ink-soft', 'oklch(0.42 0.012 60)', 'Body prose colour'],
    ['--ink-faint', 'oklch(0.62 0.01 60)', 'Labels, meta'],
    ['--rule', 'oklch(0.88 0.01 70)', 'Hairlines, dividers'],
    ['--accent', 'oklch(0.62 0.13 55)', 'Inline links, accent dots (warm amber)'],
  ];

  return (
    <div className="board" data-screen-label="Handoff Spec">
      <div className="mn-scroll">
        <main style={{ maxWidth: 860, margin: '0 auto', padding: '56px 48px' }}>
          <Label>Design spec · for Claude Code</Label>
          <h1 className="mn-display" style={{ fontSize: 56, margin: '12px 0 28px', lineHeight: 0.95 }}>
            Build <span className="mn-display-it">notes</span>.
          </h1>
          <p className="mn-body" style={{ fontSize: 16 }}>
            This canvas shows the visual direction. Ship it into the existing Next.js repo
            by updating tokens, replacing the hero, and porting the editorial layout.
          </p>

          <Rule short />

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, margin: '28px 0 12px' }}>1. Tokens (globals.css)</h2>
          <p className="mn-body" style={{ fontSize: 15, marginBottom: 12 }}>
            Replace the HSL theme vars with these (convert to HSL for shadcn or keep as-is with CSS <code>oklch()</code>):
          </p>
          <div style={{ border: '1px solid var(--rule)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>
            {tokens.map((t, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr 1.3fr',
                gap: 16,
                padding: '10px 14px',
                borderTop: i ? '1px solid var(--rule)' : 'none',
                alignItems: 'center',
              }}>
                <code style={{ color: 'var(--accent)' }}>{t[0]}</code>
                <code style={{ color: 'var(--ink)' }}>{t[1]}</code>
                <span style={{ color: 'var(--ink-soft)', fontFamily: 'var(--font-serif-alt)', fontSize: 13 }}>{t[2]}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, margin: '36px 0 12px' }}>2. Google Fonts</h2>
          <pre style={{ fontSize: 12, background: 'var(--bg-alt)', padding: '14px 16px', overflow: 'auto', margin: 0 }}>
{`<link href="https://fonts.googleapis.com/css2?
  family=Instrument+Serif:ital@0;1
  &family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700
  &family=Inter:wght@300;400;500;600;700
  &family=JetBrains+Mono:wght@400;500
  &display=swap" rel="stylesheet">`}
          </pre>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, margin: '36px 0 12px' }}>3. Page structure</h2>
          <ul className="mn-body" style={{ fontSize: 15, paddingLeft: 20 }}>
            <li><b>/</b> — Home. Pick one of the three variants above (recommend v1 Essay as default).</li>
            <li><b>/about</b> — long-form bio, single column, inline colored links.</li>
            <li><b>/work</b> — editorial project index (rename from /projects).</li>
            <li><b>/services</b> — websites / tools / AI coaching / 1:1 sessions (4-up grid from v3).</li>
            <li><b>/contact</b> — email + intro call CTA + /links directory.</li>
            <li><b>Remove</b>: /skills, /contributions, /experience, /resume — not relevant to your offering. Keep as internal data only.</li>
            <li><b>Keep</b>: /blogs optional, if you want to write. Use the same editorial type.</li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, margin: '36px 0 12px' }}>4. Components to update</h2>
          <ul className="mn-body" style={{ fontSize: 15, paddingLeft: 20 }}>
            <li><code>main-nav.tsx</code> — small circular avatar + italic serif wordmark (reuse Dancing Script if desired, but Instrument Serif italic is cleaner).</li>
            <li><code>project-card.tsx</code> — replace card with horizontal row: number · year · title + meta · status.</li>
            <li><code>animated-text.tsx</code> — tone down. A single subtle fade-up on hero only, not per section.</li>
            <li><code>contact</code> — replace heavy form with email link + Cal.com booking + /links list.</li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, margin: '36px 0 12px' }}>5. Voice</h2>
          <p className="mn-body" style={{ fontSize: 15 }}>
            First-person, plain, quietly confident. No superlatives, no "passionate." Inline colored
            links woven through prose. Treat the page like a letter.
          </p>
        </main>
      </div>
    </div>
  );
}
Object.assign(window, { Handoff });
