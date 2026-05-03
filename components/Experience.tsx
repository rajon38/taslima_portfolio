"use client";
import SectionHeader from "./SectionHeader";
import { experiences, type Flag } from "@/lib/data";

const flagConfig: Record<Flag, { label: string; bg: string; color: string; border: string }> = {
  spain: { label: "Spain 🇪🇸", bg: "#F5E8E1", color: "#C1440E", border: "#F5E8E1" },
  belgium: { label: "Belgium 🇧🇪", bg: "#E8F0F5", color: "#2E6B8A", border: "#C5D8E2" },
  bangladesh: { label: "Bangladesh 🇧🇩", bg: "#E8F5ED", color: "#1E7A48", border: "#C5E2D2" },
};

export default function Experience() {
  return (
    <div
      id="experience"
      style={{ background: "#fff", padding: "5rem 2rem" }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeader label="✦ My Journey" title="Teaching Experience" />

        <div className="timeline">
          {experiences.map((exp, i) => {
            const flag = flagConfig[exp.flag];
            return (
              <div
                key={i}
                style={{
                  position: "relative",
                  marginBottom: "2rem",
                  paddingBottom: "2rem",
                  borderBottom:
                    i < experiences.length - 1
                      ? "1px solid rgba(201,168,76,0.15)"
                      : "none",
                }}
                className="fade-in"
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-2.8rem",
                    top: 6,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: exp.dotColor,
                    border: "2px solid var(--cream)",
                    boxShadow: `0 0 0 2px ${exp.dotColor}`,
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {exp.date}
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.2rem",
                    color: "var(--deep)",
                    marginBottom: "0.1rem",
                  }}
                >
                  {exp.role}
                </div>
                <div
                  style={{
                    fontStyle: "italic",
                    color: "var(--text-muted)",
                    fontSize: "1rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  {exp.place}
                </div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.8rem",
                    padding: "2px 8px",
                    fontFamily: "'Libre Baskerville', serif",
                    letterSpacing: "0.05em",
                    background: flag.bg,
                    color: flag.color,
                    border: `1px solid ${flag.border}`,
                  }}
                >
                  {flag.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
