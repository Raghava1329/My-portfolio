export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(0,212,255,0.07)", padding: "28px 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
      <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 13, color: "var(--text-muted)", margin: 0, fontWeight: 400 }}>
        <span style={{ color: "#00d4ff", fontFamily: "Fira Code, monospace" }}> </span>
        &copy; {new Date().getFullYear()} Ragavendra Avula &mdash; Designed &amp; Built with React + Vite
      </p>
    </footer>
  );
}
