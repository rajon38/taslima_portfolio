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

      {/* Hero Section */}
      <section
        style={{
          minHeight: "90vh",
          background: post.bg,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          alignItems: "center",
          gap: "3rem",
          padding: "4rem 2rem",
        }}
      >
        {/* Left Content */}
        <div
          style={{
            maxWidth: 620,
            margin: "0 auto",
            color: "var(--deep)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                background: "#C1440E",
                color: "#fff",
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "'Libre Baskerville', serif",
              }}
            >
              {post.category}
            </span>

            <span
              style={{
                color: "var(--text-muted)",
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                fontFamily: "'Libre Baskerville', serif",
              }}
            >
              {post.date}
            </span>

            <span
              style={{
                color: "var(--text-muted)",
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                fontFamily: "'Libre Baskerville', serif",
              }}
            >
              {post.readTime}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
            }}
          >
            {post.title}
          </h1>

          <div
            style={{
              width: 120,
              height: 4,
              background: "linear-gradient(to right, #C1440E, #F0C27B)",
              marginBottom: "2rem",
              borderRadius: 99,
            }}
          />

          <p
            style={{
              color: "var(--text)",
              lineHeight: 1.9,
              fontSize: "1.08rem",
              maxWidth: 560,
            }}
          >
            A thoughtful exploration of creativity, expression, and modern storytelling.
          </p>
        </div>

        {/* Right Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 540,
              borderRadius: 28,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                maxHeight: "75vh",
              }}
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "5rem 2rem",
        }}
      >
        <div
          className="blog-body"
          style={{
            fontSize: "1.12rem",
            lineHeight: 2,
            color: "#2d2d2d",
            fontWeight: 400,
          }}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        {/* Tags */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            gap: "0.8rem",
            flexWrap: "wrap",
          }}
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                background: "rgba(193,68,14,0.08)",
                border: "1px solid rgba(193,68,14,0.15)",
                color: "#C1440E",
                fontSize: "0.82rem",
                letterSpacing: "0.05em",
                fontFamily: "'Libre Baskerville', serif",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href="/#blog"
            style={{
              background: "#111",
              color: "#fff",
              padding: "14px 30px",
              borderRadius: 999,
              cursor: "pointer",
              fontSize: "0.82rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "'Libre Baskerville', serif",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.25s ease",
            }}
          >
            ← Back to Articles
          </Link>
        </div>
      </section>

      <TileBorder />
      <Footer />
    </>
  );
}

