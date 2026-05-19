/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import SectionHeader from "./SectionHeader";
import { certificates } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function Certificates() {
  const { t } = useLanguage();

  return (
    <div
      id="certificates"
      style={{
        background: "var(--deep)",
        position: "relative",
        overflow: "hidden",
        padding: "5rem 2rem",
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
        }}
      >
        <SectionHeader
          label={t("sectionCertificatesLabel")}
          title={t("sectionCertificatesTitle")}
          light
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2rem",
          }}
          className="certificates-grid fade-in"
        >
          {certificates.map((cert, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                position: "relative",
                overflow: "hidden",
                background: "rgba(26, 46, 58, 0.8)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                cursor: cert.url ? "pointer" : "default",
                borderRadius: "8px",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--gold)";
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 12px 32px rgba(201,168,76,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,168,76,0.3)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
              onClick={() => cert.url && window.open(cert.url, "_blank")}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: "var(--terracotta)",
                  zIndex: 2,
                }}
              />

              {/* Certificate Image - Full size */}
              {cert.image ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    flex: 1,
                    overflow: "hidden",
                    borderRadius: "4px",
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "3rem",
                    color: "var(--gold-light)",
                    opacity: 0.5,
                  }}
                >
                  🎖️
                </div>
              )}

              {/* Certificate Info - Bottom Section */}
              <div
                style={{
                  padding: "1.5rem",
                  background: "var(--deep)",
                  borderTop: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                {/* Certificate Name */}
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.05rem",
                    color: "var(--gold-light)",
                    marginBottom: "0.4rem",
                    fontWeight: 600,
                  }}
                >
                  {cert.name}
                </div>

                {/* Issuer */}
                <div
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.85rem",
                    color: "#D4B896",
                    marginBottom: "0.3rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {cert.issuer}
                </div>

                {/* Year */}
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#A08060",
                    fontFamily: "'Libre Baskerville', serif",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  {cert.year}
                </div>

                {/* Link indicator */}
                {cert.url && (
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--gold)",
                      fontFamily: "'Libre Baskerville', serif",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    ↗ Verify Certificate
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .certificates-grid { 
            grid-template-columns: 1fr !important; 
            gap: 1.75rem !important; 
          }
        }
      `}</style>
    </div>
  );
}