export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(0,212,255,0.08)',
      padding: '24px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
    }}>
      <p style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 12,
        color: '#8899aa',
        margin: 0,
      }}>
        <span style={{ color: '#00d4ff' }}> </span>
        &copy; {new Date().getFullYear()} Ragavendra Avula &mdash; Built with React + Vite
      </p>
    </footer>
  );
}
