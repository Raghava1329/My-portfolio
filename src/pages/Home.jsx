import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

const roles = [
  "DevOps Engineer",
  "Cloud Architect",
  "Infrastructure Engineer",
  "Platform Engineer",
  "SRE Enthusiast",
];

function AnimatedCounter({ target, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const num = parseInt(target.replace(/\D/g, ""));
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = num / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) { setValue(num); clearInterval(timer); }
      else setValue(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {value}{suffix}
    </span>
  );
}

// Floating orb component
function FloatingOrb({ x, y, size, color, delay }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      style={{
        position: "absolute", left: x, top: y,
        width: size, height: size, borderRadius: "50%",
        background: `radial-gradient(ellipse, ${color} 0%, transparent 70%)`,
        pointerEvents: "none", zIndex: 0,
      }}
    />
  );
}

// Particle dots
function ParticleField() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: Math.random() * 2.5 + 1,
    delay: Math.random() * 4,
    dur: Math.random() * 4 + 4,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{ opacity: [0, 0.7, 0], y: [0, -40] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: p.x, top: p.y,
            width: p.size, height: p.size,
            borderRadius: "50%",
            background: "#00d4ff",
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  // Parallax mouse tracking
  useEffect(() => {
    const move = (e) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 30);
      setMouseY((e.clientY / window.innerHeight - 0.5) * 30);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const socials = [
    { icon: FaGithub,   href: "https://github.com/Raghava1329",                             label: "GitHub"    },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/avula-ragavendra-ba1276266",     label: "LinkedIn"  },
    { icon: FaInstagram,href: "https://www.instagram.com/ragavendra_avula",                 label: "Instagram" },
    { icon: FaEnvelope, href: "mailto:raghavendraavula92@gmail.com",                         label: "Email"     },
    { icon: FaCode,     href: "https://leetcode.com/u/raghavendraavula2004/",               label: "LeetCode"  },
  ];

  const stats = [
    { raw: "11",   suffix: "mo+",  label: "at AlphaStream"   },
    { raw: "1200", suffix: "+",    label: "Problems Solved"   },
    { raw: "10",   suffix: "K+",   label: "Cloud $ Saved"     },
    { raw: "200",  suffix: "+",    label: "Students Mentored" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "90px 24px 60px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Parallax ambient orbs */}
      <motion.div animate={{ x: mouseX * 0.4, y: mouseY * 0.4 }} transition={{ type: "spring", stiffness: 60, damping: 20 }}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <FloatingOrb x="10%"  y="15%"  size={400} color="rgba(0,212,255,0.07)"   delay={0} />
        <FloatingOrb x="60%"  y="60%"  size={300} color="rgba(124,58,237,0.06)"  delay={1.5} />
        <FloatingOrb x="75%"  y="5%"   size={200} color="rgba(15,244,198,0.05)"  delay={3} />
        <FloatingOrb x="0%"   y="70%"  size={250} color="rgba(0,212,255,0.04)"   delay={2} />
      </motion.div>

      <ParticleField />

      {/* Scanning beam */}
      <motion.div
        animate={{ y: ["-10%", "110%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
        style={{
          position: "absolute", left: 0, right: 0, height: 2,
          background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.15), transparent)",
          pointerEvents: "none", zIndex: 0,
        }}
      />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 860 }}
      >
        {/* ── AVAILABLE BADGE (commented out — re-enable when needed) ──
        <motion.div variants={itemVariants} style={{
          display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28,
          padding: "6px 18px", border: "1px solid rgba(0,212,255,0.25)", borderRadius: 100,
          background: "rgba(0,212,255,0.07)", backdropFilter: "blur(8px)",
          animation: "border-glow 3s ease-in-out infinite",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0ff4c6",
            display: "inline-block", animation: "glow-pulse 2s ease-in-out infinite" }} />
          <span style={{ fontFamily: "Fira Code, monospace", fontSize: 11, color: "#00d4ff", letterSpacing: "0.18em" }}>
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </motion.div>
        ── END BADGE ── */}

        {/* Name */}
        <motion.div variants={itemVariants}>
          <h1 style={{
            fontFamily: "Outfit, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 8vw, 96px)",
            lineHeight: 1.0,
            margin: "0 0 8px",
            letterSpacing: "-0.04em",
            color: "var(--text-bright)",
          }}>
            Ragavendra
          </h1>
          <h1 className="glow-text" style={{
            fontFamily: "Outfit, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 8vw, 96px)",
            lineHeight: 1.0,
            margin: "0 0 28px",
            letterSpacing: "-0.04em",
          }}>
            Avula
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div variants={itemVariants} style={{
          fontFamily: "Fira Code, monospace",
          fontSize: "clamp(15px, 2.2vw, 20px)",
          color: "#0ff4c6",
          marginBottom: 24,
          minHeight: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}>
          <span style={{ color: "rgba(0,212,255,0.4)", fontSize: "0.85em" }}>~/devops $</span>
          <span>{displayed}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "steps(1)" }}
            style={{ color: "#00d4ff", fontWeight: 300 }}
          >▋</motion.span>
        </motion.div>

        {/* Bio */}
        <motion.p variants={itemVariants} style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "clamp(14px, 1.6vw, 16px)",
          lineHeight: 1.85,
          color: "var(--text-muted)",
          maxWidth: 580,
          margin: "0 auto 40px",
          fontWeight: 400,
        }}>
          DevOps Engineer @ AlphaStream.ai — designing Disaster Recovery systems,
          CI/CD pipelines & cloud infrastructure. 1× Hackathon Winner · GDG Cloud Lead · 1200+ problems solved.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants}
          style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 44 }}>
          <motion.a
            href="/Avula_Ragavendra-2.pdf" download
            className="btn-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            ↓ Download Resume
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1AM9v4Kr4IkFcCnr4loQCBCmtIPxh0gWi/view"
            target="_blank" rel="noopener noreferrer"
            className="btn-secondary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View Resume ↗
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div variants={itemVariants}
          style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 56 }}>
          {socials.map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank" rel="noopener noreferrer"
              title={label}
              whileHover={{ scale: 1.2, y: -3, color: "#00d4ff" }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.07, duration: 0.5 }}
              style={{
                color: "var(--text-muted)",
                fontSize: 22,
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 44, height: 44,
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                transition: "color 0.2s, background 0.2s, border-color 0.2s",
              }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          borderTop: "1px solid rgba(0,212,255,0.08)",
          paddingTop: 36,
          gap: 0,
        }}>
          {stats.map(({ raw, suffix, label }, i) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: "0 36px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(0,212,255,0.08)" : "none",
                textAlign: "center",
                cursor: "default",
              }}
            >
              <div style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "clamp(22px, 3.5vw, 34px)",
                fontWeight: 800,
                color: "#00d4ff",
                letterSpacing: "-0.02em",
              }}>
                <AnimatedCounter target={raw} suffix={suffix} />
              </div>
              <div style={{
                fontFamily: "Fira Code, monospace",
                fontSize: 10,
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
                marginTop: 5,
                textTransform: "uppercase",
              }}>
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          zIndex: 1,
        }}
      >
        <span style={{ fontFamily: "Fira Code, monospace", fontSize: 10, color: "rgba(107,122,144,0.6)", letterSpacing: "0.2em" }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 1, height: 30, background: "linear-gradient(to bottom, #00d4ff, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
