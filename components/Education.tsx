"use client";
import SectionHeader from "./SectionHeader";
import { education } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function Education() {
  const { t } = useLanguage();
  return (
    <section id="education" style={{ padding: "5rem 2rem", maxWidth: 960, margin: "0 auto" }}>
      <SectionHeader label="✦ Academic Background" title={t("educationTitle")} />

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
        className="edu-grid fade-in"
      >
        {education.map((e, i) => (
          <div
            key={i}
            style={{
              border: "1px solid rgba(193,68,14,0.2)",
              padding: "2rem",
              background: "#fff",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: 4,
                background: "linear-gradient(to right, var(--terracotta), var(--gold))",
              }}
            />
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.3rem",
                color: "var(--deep)",
                marginBottom: "0.3rem",
              }}
            >
              {e.degree}
            </div>
            <div style={{ fontStyle: "italic", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
              {e.uni}
            </div>
            <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
              {e.detail}
            </div>
            <span
              style={{
                display: "inline-block",
                background: "var(--terracotta-pale)",
                color: "var(--terracotta)",
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "0.8rem",
                padding: "4px 12px",
                letterSpacing: "0.05em",
              }}
            >
              CGPA: {e.gpa}
            </span>
          </div>
        ))}
      </div>

      {/* Additional experience */}
      <div
        style={{ textAlign: "center", color: "var(--gold)", fontSize: "1.5rem", margin: "3rem 0 1rem", opacity: 0.6, letterSpacing: "0.5em" }}
      >
        ⁂
      </div>

      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(193,68,14,0.15)",
          padding: "2rem",
          maxWidth: 600,
        }}
        className="fade-in"
      >
        <p
          style={{
            fontSize: "0.75rem",
            fontFamily: "'Libre Baskerville', serif",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--terracotta)",
            marginBottom: "0.75rem",
          }}
        >
          ✦ Additional Experience
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { role: "Senior Officer", place: "Keya Cosmetics Limited · Sep 2016 – Apr 2017" },
            { role: "Intern — Skills Training Program", place: "IETS Foundation (World Bank) · Feb 2016 – Jul 2016" },
          ].map((item, i) => (
            <div key={i}>
              {i > 0 && <div style={{ width: 40, height: 1, background: "var(--gold)", marginBottom: "0.75rem" }} />}
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", color: "var(--deep)" }}>
                {item.role}
              </div>
              <div style={{ fontStyle: "italic", color: "var(--text-muted)" }}>{item.place}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
