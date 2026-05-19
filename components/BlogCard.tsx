import Link from "next/link";
import { BlogPost } from "@/lib/data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div
        style={{
          background: "#fff",
          overflow: "hidden",
          cursor: "pointer",
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(-8px)";
          el.style.boxShadow = "0 2px 4px var(--terracotta)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(0px)";
          el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
        }}
      >
      {/* Image Section */}
      <div
        style={{
          position: "relative",
          height: 260,
          overflow: "hidden",
          background: post.bg,
        }}
      >
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05))",
          }}
        />

        {/* Category */}
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 18,
            background: "var(--terracotta)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.18)",
            color: "#fff",
            padding: "8px 14px",
            fontSize: "0.68rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "'Libre Baskerville', serif",
          }}
        >
          {post.category}
        </div>

        {/* Bottom Info */}
        <div
          style={{
            position: "absolute",
            left: 24,
            right: 24,
            bottom: 22,
            color: "#fff",
          }}
        >
          <div
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              opacity: 0.8,
              marginBottom: "0.6rem",
              fontFamily: "'Libre Baskerville', serif",
            }}
          >
            {post.date}
          </div>

          <h3
            style={{
              margin: 0,
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem",
              lineHeight: 1.25,
              fontWeight: 700,
            }}
          >
            {post.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.8rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <p
          style={{
            margin: 0,
            color: "var(--text-muted)",
            lineHeight: 1.8,
            fontSize: "0.96rem",
            flex: 1,
          }}
        >
          {post.excerpt}
        </p>

        {/* Footer */}
        <div
          style={{
            marginTop: "1.8rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              color: "var(--terracotta)",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "'Libre Baskerville', serif",
              fontWeight: 600,
            }}
          >
            Read Story →
          </span>

          <span
            style={{
              color: "var(--text-muted)",
              fontSize: "0.82rem",
              fontFamily: "'Libre Baskerville', serif",
            }}
          >
            {post.readTime}
          </span>
        </div>
      </div>
    </div>
  </Link>
  );
}