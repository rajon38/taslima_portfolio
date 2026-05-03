"use client";
import SectionHeader from "./SectionHeader";

const contactItems = [
  { icon: "📍", label: "Location", value: "Plaza Mayor, Palma de Mallorca, Spain" },
  { icon: "✉", label: "Email", value: "taslimaomee92@gmail.com" },
  { icon: "☎", label: "Phone", value: "+34 613 503 664 / +34 632 640 721" },
];

export default function Contact() {
  return (
    <div
      id="contact"
      style={{
        background: "linear-gradient(135deg, var(--deep) 0%, #1A2E3A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Tile pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-conic-gradient(from 45deg at 0% 0%, rgba(193,68,14,0.08) 0deg 90deg, transparent 90deg 180deg)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 960,
          margin: "0 auto",
          padding: "5rem 2rem",
        }}
      >
        <SectionHeader label="✦ Let's Connect" title="Get in Touch" light />

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}
          className="contact-grid fade-in"
        >
          <div>
            {contactItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(193,68,14,0.3)",
                    border: "1px solid rgba(193,68,14,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    flexShrink: 0,
                    color: "var(--gold-light)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ color: "#D4B896", fontSize: "1rem" }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div
              style={{
                borderLeft: "3px solid var(--terracotta)",
                padding: "1.5rem 2rem",
                background: "rgba(193,68,14,0.08)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "1.3rem",
                  color: "var(--gold-light)",
                  lineHeight: 1.6,
                }}
              >
                &ldquo;Language is the road map of a culture. It tells you where its people come
                from and where they are going.&rdquo;
              </div>
              <div
                style={{
                  marginTop: "0.75rem",
                  fontSize: "0.85rem",
                  color: "#A08060",
                  fontFamily: "'Libre Baskerville', serif",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                — Rita Mae Brown
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  fontSize: "0.95rem",
                  color: "#A08060",
                  lineHeight: 1.7,
                }}
              >
                I am open to new teaching opportunities, collaborations, and conversations.
                Whether you need an English teacher for your school, summer programme, or coaching
                centre — I would love to hear from you.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </div>
  );
}
