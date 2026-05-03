import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import TileBorder from "@/components/TileBorder";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => String(p.id) === id);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — Taslima Akter Omi`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find((p) => String(p.id) === id);
  if (!post) notFound();

  return (
    <>
      <TileBorder />

      {/* Nav */}
      <nav
        style={{
          background: "var(--deep)",
          padding: "0 2rem",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Link
          href="/#blog"
          style={{
            color: "var(--gold-light)",
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          ← Back to Portfolio
        </Link>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.95rem",
            color: "var(--gold-light)",
            fontStyle: "italic",
          }}
        >
          Taslima Akter Omi
        </span>
      </nav>

      {/* Hero */}
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
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
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

        <div
          style={{
            width: 60,
            height: 3,
            background: "linear-gradient(to right, var(--terracotta), var(--gold))",
            marginBottom: "2rem",
          }}
        />

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

        {/* Back */}
        <div style={{ marginTop: "3rem" }}>
          <Link
            href="/#blog"
            style={{
              display: "inline-block",
              padding: "0.75rem 2rem",
              background: "var(--terracotta)",
              color: "#fff",
              textDecoration: "none",
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ← Back to Blog
          </Link>
        </div>
      </div>

      <TileBorder />
      <Footer />
    </>
  );
}
