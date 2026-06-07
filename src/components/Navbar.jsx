import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    transition: 'all 0.3s ease',
    background: scrolled ? 'rgba(8,12,16,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(0,212,255,0.12)' : '1px solid transparent',
  };

  return (
    <motion.nav style={navStyle}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: 6,
              background: 'linear-gradient(135deg, #00d4ff, #0ff4c6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, color: '#080c10'
            }}>RA</div>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, color: '#e2e8f0', letterSpacing: '-0.01em' }}>
              Ragavendra<span style={{ color: '#00d4ff' }}>.</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: 8, listStyle: 'none', margin: 0, padding: 0 }} className="hidden md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link to={item.path} style={{ textDecoration: 'none' }}>
                  <motion.div
                    whileHover={{ color: '#00d4ff' }}
                    style={{
                      padding: '6px 16px',
                      borderRadius: 6,
                      fontSize: 13,
                      fontFamily: 'JetBrains Mono, monospace',
                      letterSpacing: '0.05em',
                      color: isActive ? '#00d4ff' : '#8899aa',
                      background: isActive ? 'rgba(0,212,255,0.08)' : 'transparent',
                      border: isActive ? '1px solid rgba(0,212,255,0.2)' : '1px solid transparent',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: '#e2e8f0', fontSize: 20, cursor: 'pointer' }}
          className="md:hidden"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden', borderTop: '1px solid rgba(0,212,255,0.1)', background: 'rgba(8,12,16,0.98)' }}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '14px 24px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 13,
                    color: isActive ? '#00d4ff' : '#8899aa',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}>
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
