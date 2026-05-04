"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { sections } from "../data/aboutData";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Biography() {
  return (
    <section className="relative font-work-sans overflow-hidden py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        <div className="space-y-16 md:space-y-20">

          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-[180px_1fr] gap-10 md:gap-16"
            >
              {/* LEFT LABEL */}
              <div className="flex items-start gap-4 ">
                <h3 className="uppercase tracking-[0.2em] text-center text-xs md:text-sm font-semibold text-[#111827] whitespace-nowrap">
                  {section.title}
                </h3>

                {/* GOLD LINE + ARROW */}
                <div className="flex items-center -mt-[4px] ">
                  <div className="w-12 h-[1px] bg-[#d4a94d]" />

                  <motion.div
                    animate={{
                      x: [0, 6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-[#d4a94d] text-lg"
                  >
                    →
                  </motion.div>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative -mt-[6px]"
              >
                {/* GLASS CARD EFFECT */}
                <div className="absolute  inset-0  " />

                <div className="relative  z-10  ">
                  {section.content}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}