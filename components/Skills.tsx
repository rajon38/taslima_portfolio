"use client";
import SectionHeader from "./SectionHeader";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <div id="skills" style={{ background: "var(--deep)", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeader label="✦ What I Bring" title="Skills & Strengths" light />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skills.map((s, i) => (
            <div
              key={i}
              className="fade-in"
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                padding: "1.5rem",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(201,168,76,0.3)")
              }
            >
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: 3,
                  background: "var(--terracotta)",
                }}
              />
              <span style={{ fontSize: "2rem", marginBottom: "0.75rem", display: "block", color: s.color }}>
                {s.icon}
              </span>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.05rem",
                  color: "var(--gold-light)",
                  marginBottom: "0.4rem",
                }}
              >
                {s.name}
              </div>
              <div style={{ fontSize: "0.9rem", color: "#A08060", lineHeight: 1.5 }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
