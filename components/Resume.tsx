"use client";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/lib/LanguageContext";

export default function Resume() {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <div id="resume" style={{ background: "#fff", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <SectionHeader label={t("sectionResumeLabel")} title={t("sectionResumeTitle")} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
            }}
            className="resume-grid fade-in"
          >
            {/* PDF Panel */}
            <div
              style={{
                border: "1px solid rgba(193,68,14,0.2)",
                background: "var(--cream)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(to right, var(--terracotta), var(--gold))" }} />
              <div
                style={{
                  padding: "1.25rem 1.5rem 1rem",
                  borderBottom: "1px solid rgba(193,68,14,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: 36, height: 36,
                    background: "var(--terracotta-pale)",
                    border: "1px solid rgba(193,68,14,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1rem",
                  }}
                >
                  📄
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "var(--deep)" }}>
                    Curriculum Vitae
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "'Libre Baskerville', serif" }}>
                    PDF Document · Updated 2025
                  </div>
                </div>
              </div>

              {/* PDF preview */}
              <div
                style={{
                  width: "100%", height: 380,
                  background: "#F0EBE2",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  gap: "1rem",
                  borderBottom: "1px solid rgba(193,68,14,0.1)",
                }}
              >
                <div
                  style={{
                    width: 64, height: 80,
                    background: "#fff",
                    border: "2px solid rgba(193,68,14,0.3)",
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute", top: 0, right: 0,
                      width: 18, height: 18,
                      background: "var(--terracotta)",
                      clipPath: "polygon(0 0, 100% 100%, 100% 0)",
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--terracotta)",
                      fontWeight: "bold",
                      marginTop: 6,
                    }}
                  >
                    PDF
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    textAlign: "center",
                    padding: "0 1rem",
                  }}
                >
                  Taslima_Akter_Omi_CV.pdf
                  <br />
                  <span style={{ fontSize: "0.75rem" }}>English Language Teacher · Palma de Mallorca</span>
                </div>
                <div
                  style={{
                    textAlign: "center", padding: "0 2rem",
                    fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6,
                  }}
                >
                  8+ years teaching experience across Spain, Belgium &amp; Bangladesh. IELTS specialist and university lecturer.
                </div>
              </div>

              <div style={{ padding: "1rem 1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a
                  href="/Cv_Taslima_Akter_Omi.pdf"
                  download
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    padding: "0.5rem 1.25rem",
                    background: "var(--terracotta)", color: "#fff",
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  ⬇ Download CV
                </a>
                <a
                  href="/Cv_Taslima_Akter_Omi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    padding: "0.5rem 1.25rem",
                    background: "transparent", color: "var(--terracotta)",
                    border: "1px solid var(--terracotta)",
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  ↗ View Full
                </a>
              </div>
            </div>

            {/* Video Panel */}
            <div
              style={{
                border: "1px solid rgba(193,68,14,0.2)",
                background: "var(--cream)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(to right, var(--gold), var(--tile-blue))" }} />
              <div
                style={{
                  padding: "1.25rem 1.5rem 1rem",
                  borderBottom: "1px solid rgba(193,68,14,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: 36, height: 36,
                    background: "var(--terracotta-pale)",
                    border: "1px solid rgba(193,68,14,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1rem",
                  }}
                >
                  🎬
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "var(--deep)" }}>
                    Video Introduction
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "'Libre Baskerville', serif" }}>
                    Personal video resume · 2–3 minutes
                  </div>
                </div>
              </div>

              {/* Video thumbnail */}
              <div
                onClick={() => setModalOpen(true)}
                style={{
                  width: "100%", height: 380,
                  background: "#1A1008",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  gap: "1rem",
                  position: "relative",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(193,68,14,0.1)",
                }}
              >
                <div
                  style={{
                    width: 72, height: 72,
                    borderRadius: "50%",
                    background: "rgba(193,68,14,0.9)",
                    border: "3px solid rgba(232,99,58,0.6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "transform 0.2s",
                  }}
                >
                  <div style={{ width: 0, height: 0, borderTop: "14px solid transparent", borderBottom: "14px solid transparent", borderLeft: "22px solid white", marginLeft: 5 }} />
                </div>
                <div
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "#8A6848", textAlign: "center", padding: "0 1.5rem", lineHeight: 1.6,
                  }}
                >
                  Watch Taslima introduce herself,
                  <br />her teaching philosophy &amp; experience
                </div>
                <div
                  style={{
                    position: "absolute", bottom: 12, right: 14,
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "#5A4030",
                  }}
                >
                  Click to play
                </div>
              </div>

              <div style={{ padding: "1rem 1.5rem", display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
                <button
                  onClick={() => setModalOpen(true)}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    padding: "0.5rem 1.25rem",
                    background: "var(--terracotta)", color: "#fff", border: "none",
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  ▶ Play Video
                </button>
                <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                  Replace URL in code with your video link
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {modalOpen && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(10,5,2,0.88)",
            zIndex: 1000,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "var(--deep)",
              border: "1px solid rgba(201,168,76,0.3)",
              padding: "2rem",
              maxWidth: 680, width: "90%",
              position: "relative",
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: "absolute", top: "1rem", right: "1rem",
                background: "none", border: "none",
                color: "var(--gold-light)", fontSize: "1.5rem", cursor: "pointer", lineHeight: 1,
              }}
            >
              ✕
            </button>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.1rem", color: "var(--gold-light)",
                marginBottom: "1rem", fontStyle: "italic",
              }}
            >
              Video Introduction — Taslima Akter Omi
            </div>
            {/* ── Replace this div with your <iframe> or <video> ── */}
            <div
              style={{
                width: "100%", aspectRatio: "16/9",
                background: "#000",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: "1rem", padding: "2rem", textAlign: "center",
              }}
            >
              <div style={{ fontSize: "3rem" }}>🎥</div>
              <div
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "0.85rem", color: "#8A6848", lineHeight: 1.7, letterSpacing: "0.05em",
                }}
              >
                Paste your video URL here.
                <br />Supports YouTube embed, Vimeo, or direct MP4.
              </div>
              <code style={{ fontSize: "0.75rem", color: "#5A4030", background: "rgba(255,255,255,0.06)", padding: "4px 10px" }}>
                {`<iframe src="https://youtube.com/embed/YOUR_ID" .../>`}
              </code>
            </div>
            <div
              style={{
                marginTop: "1rem", fontSize: "0.85rem", color: "#8A6848",
                fontFamily: "'Libre Baskerville', serif", textAlign: "center", lineHeight: 1.6,
              }}
            >
              To add your video: replace the placeholder in{" "}
              <code style={{ fontSize: "0.8em", background: "rgba(255,255,255,0.08)", padding: "2px 6px" }}>
                components/Resume.tsx
              </code>{" "}
              with an iframe or video tag.
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .resume-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
