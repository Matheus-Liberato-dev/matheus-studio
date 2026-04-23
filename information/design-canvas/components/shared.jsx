// Shared components for Matheus Studio design boards
const { useState } = React;

function Nav({ active = 'home', theme }) {
  const items = [
    { id: 'projects', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'writing', label: 'Writing' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <nav className="mn-nav">
      <div className="mn-nav-left">
        <div className="mn-avatar" />
        <div className="mn-wordmark">Matheus Liberato</div>
      </div>
      <div className="mn-nav-right">
        {items.map(i => (
          <a key={i.id} className={i.id === active ? 'mn-active' : ''} href={`#${i.id}`}>{i.label}</a>
        ))}
        <span style={{ color: 'var(--ink-faint)' }}>·</span>
        <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }} aria-label="toggle theme">☾</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--rule)',
      padding: '36px 56px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
    }}>
      <span>matheus.studio</span>
      <span>Sydney · 2026</span>
      <span>© Matheus Liberato</span>
    </footer>
  );
}

function Label({ children, style }) {
  return <div className="mn-label" style={style}>{children}</div>;
}

function Rule({ short }) {
  return <hr className={'mn-rule' + (short ? ' mn-rule-short' : '')} />;
}

// Inline colored link in prose (dergigi-style)
function L({ children, href = '#' }) {
  return <a href={href} className="mn-inline-link">{children}</a>;
}

// Placeholder photo block
function Photo({ label = 'portrait', w = 180, h = 180, style = {}, round = false }) {
  return (
    <div
      className="mn-photo"
      data-label={label}
      style={{
        width: w, height: h,
        borderRadius: round ? '50%' : 2,
        flexShrink: 0,
        ...style
      }}
    />
  );
}

Object.assign(window, { Nav, Footer, Label, Rule, L, Photo });
