"use client";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const facts = [
    { label: t("aboutCurrentlyBasedIn"), value: t("aboutBasedValue") },
    { label: t("aboutYearsOfExperience"), value: t("aboutYearsValue") },
    { label: t("aboutCountriesTaughtIn"), value: t("aboutCountriesValue") },
    { label: t("aboutSpecialisation"), value: t("aboutSpecialisationValue") },
    { label: t("aboutEmail"), value: t("aboutEmailValue") },
  ];
  return (
    <section
      id="about"
      style={{ padding: "5rem 2rem", maxWidth: 960, margin: "0 auto" }}
    >
      <SectionHeader label={t("sectionWhoIAm")} title={t("sectionAboutTitle")} />

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
            t("aboutParagraph1"),
            t("aboutParagraph2"),
            t("aboutParagraph3"),
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
