import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.35s ease",
        background: scrolled ? "rgba(5,7,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", display: "flex", justifyContent: "space-between", alignItems: "center", height: 68 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <motion.div whileHover={{ scale: 1.03 }} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: "linear-gradient(135deg, #00d4ff, #0ff4c6)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: 13, color: "#05070a" }}>RA</div>
            <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: 17, color: "var(--text-bright)", letterSpacing: "-0.02em" }}>
              Ragavendra<span style={{ color: "#00d4ff" }}>.</span>
            </span>
          </motion.div>
        </Link>

        <ul style={{ display: "flex", gap: 4, listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link to={item.path} style={{ textDecoration: "none" }}>
                  <motion.div
                    whileHover={{ color: "#00d4ff", background: "rgba(0,212,255,0.06)" }}
                    style={{ padding: "7px 18px", borderRadius: 8, fontFamily: "Space Grotesk, sans-serif", fontWeight: isActive ? 600 : 500, fontSize: 14, color: isActive ? "#00d4ff" : "var(--text-muted)", background: isActive ? "rgba(0,212,255,0.08)" : "transparent", border: isActive ? "1px solid rgba(0,212,255,0.18)" : "1px solid transparent", transition: "all 0.2s ease", letterSpacing: "-0.01em" }}
                  >{item.name}</motion.div>
                </Link>
              </li>
            );
          })}
        </ul>

        <motion.button onClick={() => setMenuOpen(!menuOpen)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="md:hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, color: "var(--text-bright)", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, cursor: "pointer" }}>
          {menuOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden", borderTop: "1px solid rgba(0,212,255,0.08)", background: "rgba(5,7,10,0.98)", backdropFilter: "blur(24px)" }}>
            {navItems.map((item, i) => {
              const isActive = pathname === item.path;
              return (
                <motion.div key={item.path} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link to={item.path} onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
                    <div style={{ padding: "15px 28px", fontFamily: "Space Grotesk, sans-serif", fontWeight: isActive ? 600 : 400, fontSize: 15, color: isActive ? "#00d4ff" : "var(--text-muted)", borderBottom: "1px solid rgba(255,255,255,0.04)", display: "flex", alignItems: "center", gap: 10 }}>
                      {isActive && <span style={{ width: 3, height: 16, borderRadius: 2, background: "#00d4ff", display: "inline-block" }} />}
                      {item.name}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
