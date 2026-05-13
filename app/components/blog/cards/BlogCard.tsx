

"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/app/types/blog";

interface Props {
  blog: BlogPost;
}

const cardVariant:Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function BlogCard({
  blog,
}: Props) {
  return (
    <motion.article
      variants={cardVariant}
      whileHover="hover"
      className="group rounded-[20px] border border-[#e8e8e8] bg-white p-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
    >
      {/* IMAGE */}
      <div className="relative h-[250px] overflow-hidden rounded-[16px]">
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full w-full"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="px-2 pb-3 pt-5">
        {/* CATEGORY */}
        <span className="inline-flex rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#5A6CF3]">
          {blog.category}
        </span>

        {/* TITLE */}
        <Link href={`/blog/${blog.slug}`}>
          <h3 className="mt-5 text-[30px] font-bold leading-[1.15] tracking-tight text-[#111111] transition-colors duration-300 group-hover:text-[#5A6CF3]">
            {blog.title}
          </h3>
        </Link>

        {/* DATE */}
        <p className="mt-5 text-sm text-neutral-400">
          {blog.createdAt}
        </p>

        {/* CTA */}
        <motion.div
          whileHover={{
            x: 4,
          }}
          className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-neutral-900"
        >
          <span>Read More</span>

          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </div>
    </motion.article>
  );
}