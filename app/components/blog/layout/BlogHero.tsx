
"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { BlogPost } from "@/app/types/blog";

interface Props {
  blog: BlogPost;
}

export default function BlogHero({
  blog,
}: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[20px]"
    >
      {/* IMAGE */}
      <div className="relative h-[520px] overflow-hidden">
        <motion.div
          whileHover={{
            scale: 1.04,
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
            priority
            className="object-cover"
          />
        </motion.div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 z-10 p-8 md:p-14">
          {/* CATEGORY */}
          <motion.span
            whileHover={{
              y: -2,
            }}
            className="inline-flex rounded-full bg-[#5A6CF3] px-4 py-2 text-xs font-semibold text-white shadow-lg"
          >
            {blog.category}
          </motion.span>

          {/* TITLE */}
          <Link href={`/blog/${blog.slug}`}>
            <motion.h1
              whileHover={{
                x: 4,
              }}
              className="mt-5 max-w-3xl text-[38px] font-bold leading-[1.1] tracking-tight text-white md:text-[64px]"
            >
              {blog.title}
            </motion.h1>
          </Link>

          {/* EXCERPT */}
          <p className="mt-6 text-sm text-white/80">
            {blog.excerpt}
          </p>
        </div>
      </div>
    </motion.article>
  );
}