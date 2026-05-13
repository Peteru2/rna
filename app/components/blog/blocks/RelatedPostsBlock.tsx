"use client";

import BlogGrid from "../layout/BlogGrid";


import { blogs } from "@/app/data/blogData";

export default function RelatedPostsBlock() {
  const relatedBlogs = blogs.slice(0, 3);

  return (
    <section className="mt-28">
      <div className="mb-12">
        <h3 className="text-[40px] font-bold tracking-tight text-[#111111]">
          Related Articles
        </h3>

        <p className="mt-3 text-neutral-500">
          Continue exploring more insights and updates
        </p>
      </div>

      <BlogGrid blogs={relatedBlogs} />
    </section>
  );
}