

"use client";

import { motion } from "framer-motion";
import BlogCard from "../cards/BlogCard";
import { BlogPost } from "@/app/types/blog";



interface Props {
  blogs: BlogPost[];
}

const container = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export default function BlogGrid({
  blogs,
}: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
    >
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
        />
      ))}
    </motion.div>
  );
}