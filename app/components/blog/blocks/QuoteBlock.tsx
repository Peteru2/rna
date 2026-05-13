"use client";

import { motion } from "framer-motion";

interface Props {
  quote: string;
  owner: string;
}

export default function QuoteBlock({
  quote,
  owner
}: Props) {
  return (
    <>
    <motion.blockquote
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
        duration: 0.9,
      }}
      className="my-16  max-w-3xl mx-auto     "
    >
      <p className="border-l-4 text-[28px] border-[#6D5EF4] italic leading-[1.6] text-neutral-500 pl-8">“{quote}”</p>
    <p className="font-bold pl-10 mt-4 text-[15px]"> - {owner}</p>

    </motion.blockquote>

    </>
  );
}
