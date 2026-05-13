"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { BlogPost } from "@/app/types/blog";

interface Props {
  blog: BlogPost;
}

export default function ArticleHero({
  blog,
}: Props) {
  return (
    <section>
      {/* META */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="flex max-w-4xl mx-auto items-center gap-5 text-sm text-neutral-500"
      >
        <span className="font-bold">{blog.category}</span>

        <span>{blog.createdAt}</span>
      </motion.div>

      {/* TITLE */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.1,
        }}
        className="mt-6 max-w-4xl mx-auto text-[30px] font-bold leading-[1.1] tracking-tight text-[#111111] md:text-[50px]"
      >
        {blog.title}
      </motion.h1>

      {/* IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="relative mt-12 overflow-hidden rounded-[24px]"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          width={1400}
          height={900}
          priority
          className="h-auto w-full object-cover"
        />
      </motion.div>
    </section>
  );
}
