"use client";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import BlogCard from "./BlogCard";
import BlogDetail from "./BlogDetail";
import { blogPosts, BlogPost } from "@/lib/data";

export default function Blog() {
  const [selected, setSelected] = useState<BlogPost | null>(null);

  return (
    <>
      <div id="blog" style={{ background: "#fff", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <SectionHeader label="✦ Activities & Reflections" title="From the Classroom & Beyond" />

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
                onClick={() => setSelected(post)}
              />
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <BlogDetail post={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
