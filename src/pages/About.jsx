import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "Cloud & DevOps",
    color: "#00d4ff",
    icon: "☁",
    skills: [
      "AWS (EC2, ECS, EKS, RDS, S3, IAM, Lambda, CDK)",
      "Docker · Kubernetes · Helm · eksctl",
      "Terraform · IAM Identity Center (SSO)",
      "CI/CD — Jenkins, CodePipeline, GitHub Actions",
      "GuardDuty · CloudWatch · EventBridge",
      "GCP · Linux",
    ],
  },
  {
    label: "Languages & Frameworks",
    color: "#0ff4c6",
    icon: "⌨",
    skills: [
      "Python · JavaScript · TypeScript",
      "C · C++",
      "ReactJS · HTML · CSS · Tailwind",
      "Bash & Shell scripting",
    ],
  },
  {
    label: "Databases & Tools",
    color: "#a78bfa",
    icon: "🗄",
    skills: [
      "DynamoDB · RDS · MongoDB",
      "MySQL · Supabase",
      "Git · GitHub · Bitbucket",
      "VS Code · CLI · JupyterLab",
    ],
  },
  {
    label: "Achievements",
    color: "#fbbf24",
    icon: "🏆",
    skills: [
      "1200+ problems solved",
      "1450+ rating · 2★ CodeChef",
      "100-day CodeChef streak",
      "1× Hackathon Winner (AI/ML — 2nd Place)",
      "GDG Cloud Lead — 300+ students",
      "AWS Academy Certified",
    ],
  },
];

const certifications = [
  "AWS Cloud Foundations",
  "Python Essentials 1",
  "Accenture Nordics — Software Engineering",
  "AWS APAC — Solutions Architecture Simulation",
];

const coreSkillBars = [
  { skill: "AWS Cloud & Infrastructure", pct: 92, color: "#00d4ff" },
  { skill: "Docker & Kubernetes",         pct: 87, color: "#0ff4c6" },
  { skill: "Terraform / IaC",             pct: 82, color: "#a78bfa" },
  { skill: "Python & Scripting",          pct: 85, color: "#fbbf24" },
  { skill: "CI/CD Pipelines",             pct: 88, color: "#34d399" },
];

function SkillBar({ skill, pct, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 13, color: "#c4cdd8", fontWeight: 500 }}>{skill}</span>
        <span style={{ fontFamily: "Fira Code, monospace", fontSize: 11, color }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.6 }}
          >{pct}%</motion.span>
        </span>
      </div>
      <div style={{
        height: 4, background: "rgba(255,255,255,0.05)",
        borderRadius: 99, overflow: "hidden",
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "100%",
            background: `linear-gradient(90deg, ${color}aa, ${color})`,
            borderRadius: 99,
            boxShadow: `0 0 10px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="page-section">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 64, textAlign: "center" }}
      >
        <div className="section-label" style={{ justifyContent: "center", marginBottom: 14 }}>
          about me
        </div>
        <h2 style={{
          fontFamily: "Outfit, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(32px, 5vw, 56px)",
          color: "var(--text-bright)",
          margin: 0,
          letterSpacing: "-0.04em",
        }}>
          Who I Am
        </h2>
      </motion.div>

      {/* Bio Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="card-glass"
        style={{ padding: "36px 40px", marginBottom: 36 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "flex-start" }}>
          {/* Avatar */}
          <motion.div
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              width: 88, height: 88, borderRadius: 18, flexShrink: 0,
              background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))",
              border: "1px solid rgba(0,212,255,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: 30, color: "#00d4ff",
            }}
          >RA</motion.div>

          <div>
            <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: 22, color: "var(--text-bright)", margin: "0 0 4px" }}>
              Ragavendra Avula
            </h3>
            <p style={{ fontFamily: "Fira Code, monospace", fontSize: 12, color: "#00d4ff", margin: "0 0 16px", letterSpacing: "0.08em" }}>
              MTS-I · DevOps Engineer @ alphastream.ai
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.9, margin: 0, fontWeight: 400 }}>
              I'm a DevOps engineer with a track record of building resilient cloud infrastructure from scratch.
              At AlphaStream I've designed full Disaster Recovery systems (1-hour RTO), saved $10K+ in cloud costs by
              decommissioning 11 on-prem servers, and led CI/CD re-architecture using AWS CDK reducing pipeline costs by
              $3K/month. I thrive at the intersection of infrastructure, automation, and developer experience — and I've
              mentored 200+ students in cloud computing along the way.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Skill Progress Bars */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card-glass"
        style={{ padding: "32px 36px", marginBottom: 36 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
          <div style={{ width: 3, height: 20, borderRadius: 2, background: "linear-gradient(#00d4ff, #7c3aed)" }} />
          <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 16, color: "var(--text-bright)" }}>
            Core Proficiencies
          </span>
        </div>
        {coreSkillBars.map(({ skill, pct, color }, i) => (
          <SkillBar key={skill} skill={skill} pct={pct} color={color} delay={i * 0.12} />
        ))}
      </motion.div>

      {/* Skill Category Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginBottom: 36 }}
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.label}
            variants={cardVariants}
            className="card-glass"
            whileHover={{
              borderColor: group.color,
              boxShadow: `0 0 40px ${group.color}18, 0 20px 60px rgba(0,0,0,0.3)`,
              y: -4,
            }}
            style={{ padding: "24px 26px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 9, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 16,
                background: `${group.color}14`, border: `1px solid ${group.color}30`,
              }}>
                {group.icon}
              </div>
              <div>
                <div style={{ width: 3, height: 0 }} />
                <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 14, color: "var(--text-bright)" }}>
                  {group.label}
                </span>
              </div>
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {group.skills.map((skill) => (
                <li key={skill} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <span style={{ color: group.color, fontSize: 9, marginTop: 5, flexShrink: 0 }}>▸</span>
                  <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5, fontWeight: 400 }}>
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card-glass"
        style={{ padding: "28px 36px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
          <div style={{ width: 3, height: 20, borderRadius: 2, background: "#fbbf24" }} />
          <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 16, color: "var(--text-bright)" }}>
            Certifications
          </span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {certifications.map((cert, i) => (
            <motion.span
              key={cert}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.04, borderColor: "#fbbf24" }}
              style={{
                fontFamily: "Fira Code, monospace",
                fontSize: 12,
                color: "#fbbf24",
                border: "1px solid rgba(251,191,36,0.2)",
                background: "rgba(251,191,36,0.06)",
                borderRadius: 7,
                padding: "6px 16px",
                cursor: "default",
              }}
            >
              {cert}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
