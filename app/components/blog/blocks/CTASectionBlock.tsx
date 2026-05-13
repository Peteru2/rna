"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

interface Props {
  title: string;

  description: string;

  buttonText: string;

  buttonLink: string;
}

export default function CTASectionBlock({
  title,
  description,
  buttonText,
  buttonLink,
}: Props) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="my-20 rounded-[32px] bg-[#111111] px-8 py-14 text-white md:px-14"
    >
      <h3 className="text-[36px] font-bold tracking-tight">
        {title}
      </h3>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
        {description}
      </p>

      <Link
        href={buttonLink}
        className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black"
      >
        <span>{buttonText}</span>

        <motion.div
          whileHover={{
            x: 4,
          }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </Link>
    </motion.section>
  );
}
