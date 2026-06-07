import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Intelligent EV Analytics",
    subtitle: "ML-powered vehicle performance prediction",
    description:
      "Machine learning platform predicting electric vehicle performance to help manufacturers and customers choose high-efficiency vehicles. Utilizes linear regression, decision trees, and random forest models hosted on AWS.",
    techStack: ["AWS", "Python", "Scikit-learn", "JupyterLab", "Git"],
    demo: "https://github.com/Raghava1329/ev-vehicle-estimate-performance",
    demoLabel: "View on GitHub",
    accent: "#00d4ff",
    number: "01",
  },
  {
    title: "Parking Finder",
    subtitle: "Real-time parking spot locator",
    description:
      "Modern web application to locate nearby parking spots within a 2km radius in real-time with map integration, rate comparison, and navigation directions. Built with React and Supabase.",
    techStack: ["React", "TypeScript", "Google Maps API", "Tailwind CSS", "Supabase"],
    demo: "https://yourparkingfinder.netlify.app/",
    demoLabel: "Live Demo ↗",
    accent: "#0ff4c6",
    number: "02",
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="card-glass"
      style={{ padding: 0, overflow: "hidden" }}
    >
      {/* Top gradient bar */}
      <div style={{
        height: 3,
        background: `linear-gradient(90deg, ${project.accent}, ${project.accent}40, transparent)`,
      }} />

      <motion.div
        whileHover={{ boxShadow: `0 0 60px ${project.accent}12` }}
        style={{ padding: "32px 36px" }}
      >
        {/* Number */}
        <div style={{
          fontFamily: "Outfit, sans-serif",
          fontWeight: 900,
          fontSize: 64,
          color: `${project.accent}10`,
          lineHeight: 1,
          marginBottom: -16,
          letterSpacing: "-0.05em",
          userSelect: "none",
        }}>{project.number}</div>

        <h3 style={{
          fontFamily: "Outfit, sans-serif",
          fontWeight: 800,
          fontSize: 24,
          color: "var(--text-bright)",
          margin: "0 0 6px",
          letterSpacing: "-0.03em",
          position: "relative",
        }}>{project.title}</h3>

        <p style={{
          fontFamily: "Fira Code, monospace",
          fontSize: 11,
          color: project.accent,
          letterSpacing: "0.1em",
          margin: "0 0 18px",
        }}>{project.subtitle}</p>

        <p style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: 14,
          color: "var(--text-muted)",
          lineHeight: 1.85,
          margin: "0 0 24px",
          fontWeight: 400,
        }}>{project.description}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
          {project.techStack.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ borderColor: project.accent, color: project.accent }}
              style={{
                fontFamily: "Fira Code, monospace",
                fontSize: 11,
                color: "var(--text-muted)",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
                borderRadius: 5,
                padding: "4px 12px",
                transition: "all 0.2s ease",
                cursor: "default",
              }}
            >{tech}</motion.span>
          ))}
        </div>

        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "Outfit, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: project.accent,
            textDecoration: "none",
            letterSpacing: "0.03em",
          }}
        >
          {project.demoLabel}
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >→</motion.span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="page-section">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 64, textAlign: "center" }}
      >
        <div className="section-label" style={{ justifyContent: "center", marginBottom: 14 }}>
          my work
        </div>
        <h2 style={{
          fontFamily: "Outfit, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(32px, 5vw, 56px)",
          color: "var(--text-bright)",
          margin: 0,
          letterSpacing: "-0.04em",
        }}>Projects</h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 24 }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* More coming */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          marginTop: 48,
          textAlign: "center",
          padding: "28px 36px",
          border: "1px dashed rgba(0,212,255,0.12)",
          borderRadius: 14,
        }}
      >
        <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 14, color: "var(--text-muted)", margin: 0, fontWeight: 400 }}>
          More projects coming soon. Check{" "}
          <motion.a
            href="https://github.com/Raghava1329"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ color: "#0ff4c6" }}
            style={{ color: "#00d4ff", textDecoration: "none", fontWeight: 600, transition: "color 0.2s" }}
          >
            GitHub
          </motion.a>{" "}
          for the latest work.
        </p>
      </motion.div>
    </section>
  );
}
