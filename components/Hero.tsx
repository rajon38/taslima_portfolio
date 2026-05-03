"use client";
import { useLanguage } from "@/lib/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Hero() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 2rem",
        overflow: "hidden",
      }}
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          minWidth: "100%",
          minHeight: "100%",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/cover_video.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      />

      {/* Optional gradient aesthetic */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(193,68,14,0.2), transparent 50%), radial-gradient(circle at 80% 20%, rgba(46,107,138,0.2), transparent 50%)",
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5rem",
          flexWrap: "wrap",
        }}
      >
        {/* TEXT */}
        <div style={{ maxWidth: 500 }} className="fade-in">
          <p
            style={{
              fontSize: "0.8rem",
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
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              color: "#fff",
              lineHeight: 1.1,
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
              fontStyle: "italic",
              fontSize: "1.5rem",
              color: "var(--gold-light)",
              margin: "1rem 0",
            }}
          >
            {t("heroLocation")}
          </p>

          <p style={{ color: "#ddd", lineHeight: 1.7 }}>
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
            }}
          >
            {t("heroButton")}
          </a>
        </div>

        {/* IMAGE */}
        <div style={{ position: "relative" }} className="fade-in">
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              right: -16,
              bottom: -16,
              border: "3px solid var(--gold)",
              opacity: 0.6,
            }}
          />
          <img
            src="/Image_omi.jpeg"
            alt="Taslima Akter Omi"
            style={{
              width: 300,
              height: 360,
              objectFit: "cover",
              position: "relative",
              zIndex: 2,
            }}
          />
        </div>
      </div>
    </div>
  );
}