import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import TileBorder from "@/components/TileBorder";
import Footer from "@/components/Footer";
import BlogPostContent from "./blog-post-content";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ id: String(p.id) }));
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find((p) => String(p.id) === id);
  if (!post) notFound();

  return (
    <>
      <TileBorder />
      <BlogPostContent post={post} />
      <TileBorder />
      <Footer />
    </>
  );
}

