"use client";

import { BlogPost } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Link from "next/link";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const { t } = useLanguage();

  // Get translated values
  const titleKey = `blogPost${post.id}Title` as keyof typeof translations["en"];
  const excerptKey = `blogPost${post.id}Excerpt` as keyof typeof translations["en"];
  const categoryKey = `blogPost${post.id}Category` as keyof typeof translations["en"];
  const tagsKey = `blogPost${post.id}Tags` as keyof typeof translations["en"];
  const bodyKey = `blogPost${post.id}Body` as keyof typeof translations["en"];

  const translatedTitle = t(titleKey) || post.title;
  const translatedExcerpt = t(excerptKey) || post.excerpt;
  const translatedCategory = t(categoryKey) || post.category;
  const translatedTagsString = t(tagsKey);
  const translatedTags = translatedTagsString ? translatedTagsString.split(",") : post.tags;
  const translatedBody = t(bodyKey) || post.body;

  return (
    <>
      <Navbar />

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
              {translatedCategory}
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
            {translatedTitle}
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
            {translatedExcerpt}
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
              alt={translatedTitle}
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
          dangerouslySetInnerHTML={{ __html: translatedBody }}
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
          {translatedTags.map((tag) => (
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
              #{tag.trim()}
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
    </>
  );
}
