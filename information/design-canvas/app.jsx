// Main app — compose boards into the design canvas

const boards = [
  { section: 'home', title: 'Home', items: [
    { id: 'home-essay', label: 'v1 — Essay-first (recommended)', w: 900, h: 1250, render: () => <HomeEssay /> },
    { id: 'home-split', label: 'v2 — Split / portrait', w: 1200, h: 1100, render: () => <HomeSplit /> },
    { id: 'home-wordmark', label: 'v3 — Typographic wordmark', w: 1200, h: 1400, render: () => <HomeWordmark /> },
  ]},
  { section: 'inner', title: 'Inner pages', items: [
    { id: 'about', label: 'About', w: 900, h: 1300, render: () => <About /> },
    { id: 'projects', label: 'Work / Projects', w: 1100, h: 1400, render: () => <Projects /> },
    { id: 'contact', label: 'Contact + /Links directory', w: 900, h: 1500, render: () => <Contact /> },
  ]},
  { section: 'handoff', title: 'Spec for Claude Code', items: [
    { id: 'handoff', label: 'Design tokens & build notes', w: 1000, h: 1400, render: () => <Handoff /> },
  ]},
];

function App() {
  return (
    <DesignCanvas title="Matheus Studio — Design Exploration" subtitle="Editorial redesign · toggle Tweaks to change theme, accent, type pair">
      {boards.map(sec => (
        <DCSection key={sec.section} id={sec.section} title={sec.title}>
          {sec.items.map(item => (
            <DCArtboard key={item.id} id={item.id} label={item.label} width={item.w} height={item.h}>
              {item.render()}
            </DCArtboard>
          ))}
        </DCSection>
      ))}
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
