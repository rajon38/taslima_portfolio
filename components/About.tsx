"use client";
import SectionHeader from "./SectionHeader";

const facts = [
  { label: "Currently Based In", value: "Palma de Mallorca, Spain 🇪🇸" },
  { label: "Years of Experience", value: "8+ Years Teaching" },
  { label: "Countries Taught In", value: "Spain · Belgium · Bangladesh" },
  { label: "Specialisation", value: "IELTS Coaching · University Level · Summer Camps" },
  { label: "Email", value: "taslimaomee92@gmail.com" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "5rem 2rem", maxWidth: 960, margin: "0 auto" }}
    >
      <SectionHeader label="✦ Who I Am" title={"A Dedicated English\nLanguage Educator"} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        <div className="fade-in">
          {[
            "I am a self-motivated and passionate English Language Teacher with over eight years of diverse international experience. My teaching journey has taken me from university lecture halls in Bangladesh to summer camps in the heart of Mallorca and a school in Belgium.",
            "I believe language is the bridge between cultures — and teaching English is about opening doors for every student. My approach blends academic rigour with warmth, creativity, and a genuine love of communication.",
            "Currently based in Palma de Mallorca, I am thrilled to be part of the vibrant educational community in Spain, continuing to inspire students of all ages and backgrounds.",
          ].map((p, i) => (
            <p key={i} style={{ marginBottom: "1.2rem", fontSize: "1.1rem" }}>
              {p}
            </p>
          ))}
        </div>

        <div
          className="fade-in"
          style={{
            background: "var(--deep)",
            padding: "2rem",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: 4,
              background:
                "linear-gradient(to right, var(--terracotta), var(--gold), var(--tile-blue))",
            }}
          />
          {facts.map((f, i) => (
            <div
              key={i}
              style={{
                borderBottom:
                  i < facts.length - 1
                    ? "1px solid rgba(201,168,76,0.2)"
                    : "none",
                padding: "0.8rem 0",
              }}
            >
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
                {f.label}
              </div>
              <div style={{ color: "#E0CDB8", fontSize: "0.95rem" }}>{f.value}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
