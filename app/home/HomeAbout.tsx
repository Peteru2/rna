"use client";

import Image from "next/image";
import Link from "next/link";
import { Variants } from "framer-motion";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp:Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HomeAbout() {
  return (
    <section className="bg-gray-10 py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="
          max-w-5xl
          mx-auto
        "
      >
        <motion.div
          variants={fadeUp}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            bg-white/70
            backdrop-blur-md
            border
            border-black/[0.04]
            shadow-[0_20px_80px_rgba(0,0,0,0.06)]
          "
        >
          {/* BACKGROUND GLOW */}
          <div
            className="
              absolute
              -top-20
              -right-20
              w-[260px]
              h-[260px]
              rounded-full
              bg-[#f3d6d6]/40
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              md:grid-cols-[280px_1fr]
              items-center
              gap-8
              p-5
              md:p-7
            "
          >
            {/* ===================================================== */}
            {/* LEFT IMAGE */}
            {/* ===================================================== */}

            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                h-[380px]
                md:h-[420px]
                rounded-[24px]
                overflow-hidden
              "
            >
              <Image
                src="/rnaAbout.jpg"
                alt="Rev. Dr. Niyi Adebayo"
                fill
                priority
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />

              {/* IMAGE OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/10
                  via-transparent
                  to-transparent
                "
              />
            </motion.div>

            {/* ===================================================== */}
            {/* RIGHT CONTENT */}
            {/* ===================================================== */}

            <motion.div
              variants={fadeUp}
              className="
                relative
                py-4
                md:py-0
              "
            >
              {/* MINI ICON */}
              <motion.div
                initial={{
                  opacity: 0,
                  rotate: -40,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mb-5
                  w-10
                  h-10
                  rounded-full
                  bg-[#f7e9e9]
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    w-4
                    h-4
                    rounded-full
                    border
                    border-[#d78b8b]
                  "
                />
              </motion.div>

              {/* TITLE */}
              <motion.h2
                variants={fadeUp}
                className="
                  text-[34px]
                  md:text-[42px]
                  leading-[1]
                  tracking-[-0.04em]
                  text-black
                  font-light
                "
              >
                Who is{" "}
                <span className="font-bold">
                  Rev. Dr. Niyi Adebayo
                </span>
              </motion.h2>

              {/* DESCRIPTION */}
              <motion.p
                variants={fadeUp}
                className="
                  mt-6
                  text-[15px]
                  md:text-[16px]
                  leading-[1.9]
                  text-black/65
                  max-w-[680px]
                "
              >
                Rev Niyi Adebayo is a travelling evangelist,
                accountant, author, and Lead Pastor of True
                Worshippers Christ, Ojodu. He is a husband,
                a father, an author of many versatile books
                and a passionate voice at various local and
                international revivals, conferences and
                conventions. Driven by a clear divine
                mandate, Rev. Niyi is on a mission of
                kingdom impact — advancing the Gospel
                through leadership, discipleship, education,
                and evangelism.
              </motion.p>

              {/* CTA */}
              <motion.div
                variants={fadeUp}
                className="mt-8"
              >
                <Link href="/about">
                  <button
                    className="
                      group
                      relative
                      overflow-hidden
                      h-[54px]
                      px-8
                      rounded-full
                      bg-[#141427]
                      text-white
                      transition-all
                      duration-500
                      hover:scale-[1.02]
                      active:scale-[0.98]
                      shadow-[0_10px_40px_rgba(20,20,39,0.18)]
                    "
                  >
                    <span
                      className="
                        relative
                        z-10
                        text-[14px]
                        font-medium
                      "
                    >
                      Meet RNA
                    </span>

                    {/* HOVER EFFECT */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#1d1d35]
                        to-[#0f0f1f]
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                    />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}