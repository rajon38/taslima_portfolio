"use client";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <div
      style={{
        background: "var(--deep)",
        position: "relative",
        overflow: "hidden",
        padding: "5rem 2rem 4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5rem",
        flexWrap: "wrap",
      }}
    >
      {/* Gradient blobs */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 15% 85%, rgba(193,68,14,0.25) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(46,107,138,0.2) 0%, transparent 50%)",
        }}
      />
      {/* Mosaic pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "repeating-conic-gradient(from 0deg at 50% 50%, #C1440E 0deg 90deg, #C9A84C 90deg 180deg, #2E6B8A 180deg 270deg, #C1440E 270deg 360deg)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Text */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 500 }} className="fade-in">
        <p
          style={{
            fontSize: "0.8rem",
            fontFamily: "'Libre Baskerville', serif",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1rem",
          }}
        >
          {t("heroTitle")}
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "0.5rem",
          }}
        >
          {t("heroName").split("\n").map((line: string, i: number) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "1.5rem",
            color: "var(--gold-light)",
            marginBottom: "1.5rem",
          }}
        >
          {t("heroLocation")}
        </p>
        <p style={{ color: "#C5A98A", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 400 }}>
          {t("heroDescription")}
        </p>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "0.75rem 2rem",
            background: "var(--terracotta)",
            color: "#fff",
            textDecoration: "none",
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "var(--terracotta-light)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "var(--terracotta)")
          }
        >
          {t("heroButton")}
        </a>
      </div>

      {/* Photo */}
      <div
        style={{ position: "relative", zIndex: 1, flexShrink: 0 }}
        className="fade-in"
      >
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            right: -16,
            bottom: -16,
            border: "3px solid var(--gold)",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -8,
            left: -8,
            right: 8,
            bottom: 8,
            border: "1px solid var(--terracotta)",
            opacity: 0.4,
          }}
        />
        <img
          src="/Image_omi.jpeg"
          alt="Taslima Akter Omi"
          style={{
            width: 320,
            height: 370,
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
