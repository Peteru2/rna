"use client";

import { motion } from "framer-motion";

interface Props {
  url: string;
}

export default function VideoBlock({
  url,
}: Props) {
  return (
    <motion.div
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
      className="my-16 overflow-hidden rounded-[24px]"
    >
      <iframe
        src={url}
        className="aspect-video w-full"
        allowFullScreen
      />
    </motion.div>
  );
}
