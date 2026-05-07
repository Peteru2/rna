"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="bg-gray-100 overflow-hidden">
      <div
        className="
          max-w-6xl
          mx-auto
          mt-24
          px-6
          md:px-10
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[28px]
          "
        >
          {/* IMAGE */}
          <motion.div
            initial={{
              scale: 1.08,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src="/dadMum.png"
              alt="Dad and Mum"
              width={1400}
              height={900}
              priority
              className="
                w-full
                h-auto
                object-contain
                rounded-[28px]
              "
            />
          </motion.div>

          {/* SOFT OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/[0.03]
              via-transparent
              to-white/[0.04]
              pointer-events-none
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;