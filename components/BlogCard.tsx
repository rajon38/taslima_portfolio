import { BlogPost } from "@/lib/data";

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#fff",
        border: "1px solid rgba(193,68,14,0.15)",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 12px 32px rgba(42,26,14,0.12)";
        el.style.borderColor = "var(--terracotta)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "";
        el.style.boxShadow = "";
        el.style.borderColor = "rgba(193,68,14,0.15)";
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: 160,
          background: post.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "var(--terracotta)",
            color: "#fff",
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "3px 10px",
            zIndex: 1,
          }}
        >
          {post.category}
        </span>
        <span style={{ position: "relative", zIndex: 1 }}>{post.emoji}</span>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent)",
          }}
        />
      </div>

      {/* Body */}
      <div style={{ padding: "1.25rem 1.5rem 1rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "0.5rem",
          }}
        >
          {post.date}
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.15rem",
            color: "var(--deep)",
            lineHeight: 1.35,
            marginBottom: "0.6rem",
          }}
        >
          {post.title}
        </div>
        <div
          style={{
            fontSize: "0.92rem",
            color: "var(--text-muted)",
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {post.excerpt}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "0.75rem 1.5rem",
          borderTop: "1px solid rgba(193,68,14,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "0.72rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--terracotta)",
          }}
        >
          Read Article →
        </span>
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{post.readTime}</span>
      </div>
    </div>
  );
}
