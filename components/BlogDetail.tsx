"use client";
import { useEffect } from "react";
import { BlogPost } from "@/lib/data";

interface BlogDetailProps {
  post: BlogPost;
  onClose: () => void;
}

export default function BlogDetail({ post, onClose }: BlogDetailProps) {
  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--cream)",
        zIndex: 500,
        overflowY: "auto",
        animation: "fadeUp 0.3s ease both",
      }}
    >
      {/* Top nav */}
      <div
        style={{
          background: "var(--deep)",
          padding: "0 2rem",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "var(--gold-light)",
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          ← Back to Portfolio
        </button>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.95rem",
            color: "var(--gold-light)",
            fontStyle: "italic",
          }}
        >
          Taslima Akter Omi
        </div>
      </div>

      {/* Hero banner */}
      <div
        style={{
          height: 280,
          background: post.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "6rem",
          position: "relative",
        }}
      >
        <span style={{ position: "relative", zIndex: 1 }}>{post.emoji}</span>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(250,246,240,0.85), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 2rem 5rem" }}>
        {/* Meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              background: "var(--terracotta)",
              color: "#fff",
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "3px 10px",
            }}
          >
            {post.category}
          </span>
          <span
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
            }}
          >
            {post.date} &nbsp;·&nbsp; {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "var(--deep)",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}
        >
          {post.title}
        </h1>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 3,
            background: "linear-gradient(to right, var(--terracotta), var(--gold))",
            marginBottom: "2rem",
          }}
        />

        {/* Body */}
        <div
          className="blog-body"
          style={{ fontSize: "1.1rem", lineHeight: 1.9, color: "var(--text)" }}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        {/* Tags */}
        <div
          style={{
            marginTop: "2.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(193,68,14,0.15)",
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "var(--terracotta-pale)",
                color: "var(--terracotta)",
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                padding: "4px 12px",
                border: "1px solid rgba(193,68,14,0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Back button at bottom */}
        <div style={{ marginTop: "3rem" }}>
          <button
            onClick={onClose}
            style={{
              padding: "0.75rem 2rem",
              background: "var(--terracotta)",
              color: "#fff",
              border: "none",
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    </div>
  );
}
