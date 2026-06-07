import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Member of Technical Staff - I",
    company: "alphastream.ai",
    period: "May 2026 – Present",
    location: "Bengaluru, IND",
    current: true,
    color: "#00d4ff",
    highlights: ["$7K Cost Savings", "1-hr RTO DR", "$3K/mo Pipeline Saved"],
    tasks: [
      "Designed and executed a full Disaster Recovery solution replicating infrastructure to a secondary AWS region with a 1-hour RTO — covering ECR, DynamoDB, Secrets Manager, and RDS.",
      "Led CI/CD re-architecture using a unified AWS CDK (TypeScript) codebase, cutting deployment time to 15 min and saving $3,000/month in pipeline costs.",
      "Decommissioned 11 high-cost Yotta on-prem servers and migrated workloads to AWS, saving $7,000 USD.",
      "Implemented AWS IAM Identity Center (SSO) with Azure AD, enabling group-based access, IP restrictions, and 8-hour session governance via reusable Terraform modules.",
      "Built a production monitoring system using Lambda + EventBridge with MS Teams webhooks and SNS alerting.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "alphastream.ai",
    period: "Aug 2025 – May 2026",
    location: "Bengaluru, IND",
    current: false,
    color: "#0ff4c6",
    highlights: ["ECS / EKS", "Terraform IaC", "Jenkins CI/CD"],
    tasks: [
      "Managed containerization and orchestration using Docker, Kubernetes, and Docker Hub across environments.",
      "Automated AWS cloud infrastructure provisioning with Terraform, focusing on ECS and EKS.",
      "Streamlined Kubernetes cluster management using eksctl and Helm for repeatable deployments.",
      "Developed parameterized Jenkins pipelines integrated with Bitbucket — abstracting Docker/ECR workflows into user-friendly interfaces.",
      "Supported day-to-day DevOps: build triggers, service onboarding, and cross-team troubleshooting.",
    ],
  },
  {
    role: "GDG Cloud Lead",
    company: "GDG Oncampus — Vignan's IIT",
    period: "Sep 2024 – Sep 2025",
    location: "Visakhapatnam, IND",
    current: false,
    color: "#34d399",
    highlights: ["300+ Students", "Hackathons", "Cloud Study Jams"],
    tasks: [
      "Led community initiatives around Google Cloud and organized hands-on tech sessions for 300+ students.",
      "Organized Hackathons, mentoring sessions, and cloud study jams.",
      "Mentored 200+ students in AWS cloud computing.",
    ],
  },
  {
    role: "Software Developer QA & DevOps",
    company: "UnQue Cloudbook Pvt. Ltd",
    period: "May 2025 – Aug 2025",
    location: "Gujarat, IND",
    current: false,
    color: "#a78bfa",
    highlights: ["50+ Bugs Found", "200+ Test Cases", "CI/CD Setup"],
    tasks: [
      "Identified 50+ critical bugs in mobile apps through manual testing, significantly improving stability.",
      "Developed 200+ comprehensive test cases, reducing regression testing time.",
      "Managed AWS EC2 instances and configured CodePipeline for optimized CI/CD workflows.",
      "Built a cron job scheduler for automated payments and scripts for MongoDB management.",
    ],
  },
  {
    role: "Python Developer Intern",
    company: "OctaNet Services Pvt. Ltd",
    period: "May 2024 – Jun 2024",
    location: "Bhubaneswar, IND",
    current: false,
    color: "#fbbf24",
    highlights: ["OOP", "Python", "Banking Sim"],
    tasks: [
      "Designed a robust ATM simulation interface using OOP in Python.",
      "Implemented core banking features with input validation and modular error handling.",
    ],
  },
  {
    role: "AWS Intern",
    company: "Brainovision Solutions India Pvt. Ltd",
    period: "Jan 2024 – Mar 2024",
    location: "Hyderabad, IND",
    current: false,
    color: "#fb923c",
    highlights: ["EC2 / S3", "IAM / VPC", "Auto Scaling"],
    tasks: [
      "Deployed and managed cloud infrastructure using EC2, S3, IAM, ALB, and VPC.",
      "Configured secure virtual networks and automated deployment pipelines.",
      "Implemented auto-scaling solutions ensuring high availability.",
    ],
  },
];

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "relative" }}
    >
      {/* Pulsing dot */}
      <div style={{ position: "absolute", left: -46, top: 24 }}>
        <div style={{
          width: 12, height: 12, borderRadius: "50%",
          background: exp.color, border: "2px solid #05070a",
          boxShadow: `0 0 12px ${exp.color}`,
          position: "relative",
        }}>
          {exp.current && (
            <motion.div
              animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              style={{
                position: "absolute", inset: -2, borderRadius: "50%",
                background: exp.color,
              }}
            />
          )}
        </div>
      </div>

      {/* Card */}
      <motion.div
        className="card-glass"
        whileHover={{
          borderColor: exp.color,
          boxShadow: `0 0 40px ${exp.color}12, 0 24px 60px rgba(0,0,0,0.4)`,
          x: 4,
        }}
        style={{ padding: "26px 30px" }}
      >
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 8 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, flexWrap: "wrap" }}>
              <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: 18, color: "var(--text-bright)", margin: 0 }}>
                {exp.role}
              </h3>
              {exp.current && (
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    fontFamily: "Fira Code, monospace",
                    fontSize: 9,
                    color: "#0ff4c6",
                    border: "1px solid rgba(15,244,198,0.35)",
                    background: "rgba(15,244,198,0.08)",
                    borderRadius: 5,
                    padding: "3px 9px",
                    letterSpacing: "0.15em",
                  }}
                >CURRENT</motion.span>
              )}
            </div>
            <div style={{ fontFamily: "Fira Code, monospace", fontSize: 13, color: exp.color }}>{exp.company}</div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div style={{ fontFamily: "Fira Code, monospace", fontSize: 11, color: "var(--text-muted)" }}>{exp.period}</div>
            <div style={{ fontFamily: "Fira Code, monospace", fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>{exp.location}</div>
          </div>
        </div>

        {/* Highlight tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, margin: "14px 0" }}>
          {exp.highlights.map((tag) => (
            <span key={tag} style={{
              fontFamily: "Fira Code, monospace",
              fontSize: 11,
              color: exp.color,
              border: `1px solid ${exp.color}28`,
              background: `${exp.color}0c`,
              borderRadius: 5,
              padding: "3px 11px",
              letterSpacing: "0.04em",
            }}>{tag}</span>
          ))}
        </div>

        {/* Tasks */}
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 7 }}>
          {exp.tasks.map((task, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ color: exp.color, fontSize: 9, marginTop: 6, flexShrink: 0 }}>▸</span>
              <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7, fontWeight: 400 }}>
                {task}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
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
          career journey
        </div>
        <h2 style={{
          fontFamily: "Outfit, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(32px, 5vw, 56px)",
          color: "var(--text-bright)",
          margin: 0,
          letterSpacing: "-0.04em",
        }}>Experience</h2>
      </motion.div>

      {/* Timeline */}
      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            left: 20,
            top: 0, bottom: 0,
            width: 1,
            background: "linear-gradient(to bottom, #00d4ff, rgba(124,58,237,0.5), rgba(0,212,255,0.05))",
            transformOrigin: "top",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 26, paddingLeft: 58 }}>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
