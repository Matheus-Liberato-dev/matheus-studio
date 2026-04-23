// About — long-form with inline colored links (dergigi-flavor)
function About() {
  return (
    <div className="board" data-screen-label="About">
      <div className="mn-scroll">
        <Nav active="about" />
        <main style={{ maxWidth: 680, margin: '0 auto', padding: '80px 40px 64px' }}>
          <Label>About</Label>
          <h1 className="mn-display" style={{ fontSize: 72, margin: '16px 0 32px' }}>
            Hi, I'm <span className="mn-display-it">Matheus</span>.
          </h1>

          <div className="mn-body">
            <p>
              I live near <L>Carlingford</L> in Sydney. I build websites, small tools
              and AI workflows — mostly for individuals and small businesses — and
              I'll happily come to you with a laptop so we can work through it together.
            </p>
            <p style={{ marginTop: 22 }}>
              My route here wasn't linear. I spent six years <L>tutoring</L> students in maths,
              physics and chemistry — primary school through university — designing each
              student's weekly study approach, not just running sessions. I finished a Bachelor
              of <L>Psychology at Macquarie</L> in 2025, alongside a decade-long independent
              study of philosophy, meaning, and how living creatures orient themselves in
              their environments. I'm now completing a web development course at
              <L> TAFE NSW</L>.
            </p>
            <p style={{ marginTop: 22 }}>
              These days I spend most of my time on <L href="https://shajara.au">shajara.au</L> —
              an independent R&amp;D project building retrieval-augmented systems that can
              steer large language models over curated source material. I've built data
              pipelines for downloading, transcribing and processing sizeable text corpora,
              prototyped custom chat interfaces, and learned my way around embeddings,
              vector databases and the relevant APIs.
            </p>
            <p style={{ marginTop: 22 }}>
              What ties it together: I care about <em style={{ fontStyle: 'italic' }}>how people understand
              things</em>. Tutoring taught me to explain; psychology taught me to listen; building
              software taught me that a clear system is a form of respect for the person using it.
              That's what I try to bring to client work.
            </p>
            <p style={{ marginTop: 22 }}>
              If that sounds like you, <L href="#contact">send me a note</L>.
            </p>
          </div>

          <Rule />

          <Label>Elsewhere</Label>
          <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', fontFamily: 'var(--font-serif-alt)', fontSize: 17, lineHeight: 2 }}>
            <li><span style={{ color: 'var(--ink-faint)' }}>/github</span> &nbsp; <L>github.com/Matheus-Liberato-dev</L></li>
            <li><span style={{ color: 'var(--ink-faint)' }}>/linkedin</span> &nbsp; <L>in/matheus-liberato</L></li>
            <li><span style={{ color: 'var(--ink-faint)' }}>/shajara</span> &nbsp; <L>shajara.au</L> — current project</li>
            <li><span style={{ color: 'var(--ink-faint)' }}>/email</span> &nbsp; <L>hello@matheus.studio</L></li>
          </ul>
        </main>
        <Footer />
      </div>
    </div>
  );
}
Object.assign(window, { About });
