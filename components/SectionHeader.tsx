interface SectionHeaderProps {
  label: string;
  title: string;
  light?: boolean;
}

export default function SectionHeader({ label, title, light = false }: SectionHeaderProps) {
  return (
    <>
      <p
        style={{
          fontSize: "0.75rem",
          fontFamily: "'Libre Baskerville', serif",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: light ? "var(--gold)" : "var(--terracotta)",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
          color: light ? "#fff" : "var(--deep)",
          lineHeight: 1.2,
          marginBottom: "1rem",
        }}
      >
        {title}
      </h2>
      <div className="section-divider">
        <span style={{ color: "var(--gold)", fontSize: "1.2rem" }}>❧</span>
      </div>
    </>
  );
}
