// Home v1 — Essay-first editorial
function HomeEssay() {
  return (
    <div className="board" data-screen-label="Home v1 Essay">
      <div className="mn-scroll">
        <Nav active="home" />
        <main style={{ maxWidth: 680, margin: '0 auto', padding: '96px 40px 64px' }}>
          <Label>Index / 2026</Label>
          <h1 className="mn-display" style={{ fontSize: 82, margin: '20px 0 28px' }}>
            Matheus<br/>
            <span className="mn-display-it" style={{ color: 'var(--accent)' }}>Liberato.</span>
          </h1>
          <p className="mn-lead" style={{ marginBottom: 40 }}>
            I build websites, small web tools and AI workflows
            for individuals and small businesses in Sydney —
            in person near <L>Carlingford</L>, or remotely.
          </p>

          <div className="mn-body">
            <p>
              You probably found me through <L>LinkedIn</L>,
              a <L>service listing</L>, or a word-of-mouth introduction.
              If you're here to see what I actually make, start with <L href="#projects">the work</L>.
              If you want to know who you'd be working with, <L href="#about">read a bit more</L>.
            </p>
            <p style={{ marginTop: 24 }}>
              My background is unusual for a developer — psychology at Macquarie,
              six years tutoring high-school maths and physics, a growing independent R&D practice
              in <L>large language models</L>. I teach clearly because I've spent years doing it,
              and I build carefully because the systems I design tend to have humans attached to them.
            </p>
            <p style={{ marginTop: 24 }}>
              I work with <L>Claude Code</L> every day. It is — genuinely — the best leverage
              a small operator can get right now. Part of what I offer is teaching others how to use it.
            </p>
          </div>

          <Rule short />

          <Label>Currently</Label>
          <div className="mn-body" style={{ marginTop: 12, fontSize: 16 }}>
            Building <L href="https://shajara.au">shajara.au</L> — a retrieval-augmented research system
            for steering LLM reasoning over curated text corpora.
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 48 }}>
            <a href="#projects" className="mn-btn">View the work →</a>
            <a href="#contact" className="mn-btn mn-btn-ghost">Get in touch</a>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
Object.assign(window, { HomeEssay });
