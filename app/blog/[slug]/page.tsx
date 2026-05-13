"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { blogs } from "@/app/data/blogData";
import ArticleHero from "@/app/components/blog/layout/ArticleHero";
import ArticleRenderer from "@/app/components/blog/renderer/ArticleRenderer";

export default function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>; 
}) {
 
  const { slug } = use(params);

  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="bg-[#f5f5f5] pb-32 pt-30">
      <div className="mx-auto max-w-5xl px-5">
        {/* HERO */}
        <ArticleHero blog={blog} />

        {/* CONTENT */}
        <ArticleRenderer content={blog.content} />
      </div>
    </main>
  );
}
