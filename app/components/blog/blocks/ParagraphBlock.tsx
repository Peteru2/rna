"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
}

export default function ParagraphBlock({
  text,
}: Props) {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 30,
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
      className="mb-8 max-w-4xl mx-auto font-work-sans text-[18px] leading-[2] text-neutral-600"
    >
      {text}
    </motion.p>
  );
}
