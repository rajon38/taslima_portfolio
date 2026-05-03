"use client";
export default function Footer() {
  return (
    <footer
      style={{
        background: "#0D0A06",
        textAlign: "center",
        padding: "1.5rem",
        fontSize: "0.85rem",
        color: "#5A4030",
        fontFamily: "'Libre Baskerville', serif",
        letterSpacing: "0.05em",
      }}
    >
      <p>
        © {new Date().getFullYear()} Taslima Akter Omi &nbsp;·&nbsp; English Language Teacher
        &nbsp;·&nbsp;{" "}
        <span style={{ color: "var(--terracotta)" }}>Palma de Mallorca, España</span>
      </p>
    </footer>
  );
}
