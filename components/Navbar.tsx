"use client";
import { useState } from "react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { href: "#about", labelKey: "navAbout" as const },
    { href: "#experience", labelKey: "navExperience" as const },
    { href: "#skills", labelKey: "navSkills" as const },
    { href: "#education", labelKey: "navEducation" as const },
    { href: "#resume", labelKey: "navResume" as const },
    { href: "#blog", labelKey: "navBlog" as const },
    { href: "#contact", labelKey: "navContact" as const },
  ];

  return (
    <nav
      style={{
        background: "var(--deep)",
        padding: "0 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "60px",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.1rem",
          color: "var(--gold-light)",
          letterSpacing: "0.05em",
          fontStyle: "italic",
          textDecoration: "none",
          cursor: "pointer",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "0.8";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "1";
        }}
      >
        Taslima Akter Omi
      </Link>

      {/* Desktop links */}
      {!isMobile && (
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              display: "flex",
              gap: "1.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    color: "#D4B896",
                    textDecoration: "none",
                    fontSize: "0.78rem",
                    fontFamily: "'Libre Baskerville', serif",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--gold-light)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#D4B896")
                  }
                >
                  {t(l.labelKey)}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            style={{
              background: "none",
              border: "1px solid var(--gold)",
              color: "var(--gold-light)",
              padding: "0.5rem 1rem",
              fontSize: "0.75rem",
              fontFamily: "'Libre Baskerville', serif",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: "4px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = "rgba(201,168,76,0.1)";
              (e.target as HTMLElement).style.color = "var(--gold-light)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "none";
            }}
            aria-label="Toggle language"
          >
            {language === "en" ? "ESP" : "ENG"}
          </button>
        </div>
      )}

      {/* Mobile hamburger */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--gold-light)",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      )}

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            right: 0,
            background: "var(--deep)",
            borderTop: "1px solid rgba(201,168,76,0.2)",
            zIndex: 99,
            maxHeight: "calc(100vh - 60px)",
            overflowY: "auto",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "1rem 2rem",
                color: "#D4B896",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontFamily: "'Libre Baskerville', serif",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(201,168,76,0.1)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "transparent")
              }
            >
              {t(l.labelKey)}
            </a>
          ))}
          
          {/* Mobile Language Toggle */}
          <button
            onClick={() => {
              setLanguage(language === "en" ? "es" : "en");
              setMenuOpen(false);
            }}
            style={{
              width: "100%",
              padding: "1rem 2rem",
              background: "none",
              border: "none",
              borderTop: "1px solid rgba(201,168,76,0.2)",
              color: "#D4B896",
              textAlign: "left",
              fontSize: "0.85rem",
              fontFamily: "'Libre Baskerville', serif",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "rgba(201,168,76,0.1)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "transparent")
            }
          >
            {language === "en" ? "🇪🇸 Español" : "🇬🇧 English"}
          </button>
        </div>
      )}
    </nav>
  );
}
