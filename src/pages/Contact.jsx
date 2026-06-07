import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "raghavendraavula92@gmail.com",
    href: "mailto:raghavendraavula92@gmail.com",
    color: "#00d4ff",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "avula-ragavendra",
    href: "https://www.linkedin.com/in/avula-ragavendra-ba1276266",
    color: "#0ff4c6",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Raghava1329",
    href: "https://github.com/Raghava1329",
    color: "#a78bfa",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Bengaluru, India",
    href: null,
    color: "#fbbf24",
  },
];

export default function Contact() {
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
          get in touch
        </div>
        <h2 style={{
          fontFamily: "Outfit, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(32px, 5vw, 56px)",
          color: "var(--text-bright)",
          margin: "0 0 14px",
          letterSpacing: "-0.04em",
        }}>Let's Connect</h2>
        <p style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: 15,
          color: "var(--text-muted)",
          maxWidth: 480,
          margin: "0 auto",
          lineHeight: 1.7,
          fontWeight: 400,
        }}>
          Open to DevOps roles, cloud architecture projects, and interesting collaborations.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, maxWidth: 960, margin: "0 auto" }}>
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="card-glass"
          style={{ padding: "36px" }}
        >
          <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: 20, color: "var(--text-bright)", margin: "0 0 28px" }}>
            Send a Message
          </h3>

          <form
            action="https://formsubmit.co/raghavendraavula92@gmail.com"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <input type="hidden" name="_captcha" value="false" />

            {[
              { name: "name",  type: "text",  placeholder: "Your Name"  },
              { name: "email", type: "email", placeholder: "Your Email" },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required
                style={{
                  width: "100%", padding: "13px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10, color: "var(--text-bright)",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 14, outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                  fontWeight: 400,
                }}
                onFocus={e => {
                  e.target.style.borderColor = "rgba(0,212,255,0.4)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.08)";
                }}
                onBlur={e => {
                  e.target.style.borderColor = "rgba(255,255,255,0.08)";
                  e.target.style.boxShadow = "none";
                }}
              />
            ))}

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              style={{
                width: "100%", padding: "13px 16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10, color: "var(--text-bright)",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 14, outline: "none", resize: "vertical",
                boxSizing: "border-box",
                transition: "border-color 0.25s, box-shadow 0.25s",
                fontWeight: 400,
              }}
              onFocus={e => {
                e.target.style.borderColor = "rgba(0,212,255,0.4)";
                e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.08)";
              }}
              onBlur={e => {
                e.target.style.borderColor = "rgba(255,255,255,0.08)";
                e.target.style.boxShadow = "none";
              }}
            />

            <motion.button
              type="submit"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{ width: "100%", justifyContent: "center" }}
            >
              Send Message →
            </motion.button>
          </form>
        </motion.div>

        {/* Info panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
            <motion.div
              key={label}
              className="card-glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{
                borderColor: color,
                boxShadow: `0 0 30px ${color}14`,
                x: 4,
              }}
              style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 16 }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                background: `${color}10`,
                border: `1px solid ${color}22`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color, fontSize: 18,
              }}>
                <Icon />
              </div>
              <div>
                <div style={{
                  fontFamily: "Fira Code, monospace",
                  fontSize: 10, color: "var(--text-muted)",
                  marginBottom: 4, letterSpacing: "0.12em",
                }}>
                  {label.toUpperCase()}
                </div>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 13, color: "var(--text-bright)",
                    textDecoration: "none", fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={e => e.target.style.color = color}
                    onMouseLeave={e => e.target.style.color = "var(--text-bright)"}
                  >{value}</a>
                ) : (
                  <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 13, color: "var(--text-bright)", fontWeight: 500 }}>
                    {value}
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          {/* Status card */}
          <motion.div
            className="card-glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5 }}
            style={{ padding: "20px 22px", marginTop: 4 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#0ff4c6" }}
              />
              <span style={{ fontFamily: "Fira Code, monospace", fontSize: 10, color: "#0ff4c6", letterSpacing: "0.12em" }}>
                RESPONSE STATUS
              </span>
            </div>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 13, color: "var(--text-muted)", margin: 0, lineHeight: 1.7, fontWeight: 400 }}>
              Currently open to new opportunities. Typical response time within{" "}
              <span style={{ color: "#00d4ff", fontWeight: 600 }}>24 hours</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
