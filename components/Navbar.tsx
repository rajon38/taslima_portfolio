"use client";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#resume", label: "Resume" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.1rem",
          color: "var(--gold-light)",
          letterSpacing: "0.05em",
          fontStyle: "italic",
        }}
      >
        Taslima Akter Omi
      </div>

      {/* Desktop links */}
      {!isMobile && (
        <ul
          style={{
            display: "flex",
            gap: "1.5rem",
            listStyle: "none",
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
                {l.label}
              </a>
            </li>
          ))}
        </ul>
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
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
