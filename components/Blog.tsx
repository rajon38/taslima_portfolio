"use client";
import SectionHeader from "./SectionHeader";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function Blog() {
  const { t } = useLanguage();

  return (
    <div id="blog" style={{ background: "#fff", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeader label={t("sectionBlogActivitiesLabel")} title={t("sectionBlogTitle")} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
