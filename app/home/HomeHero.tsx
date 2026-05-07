"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

export default function HomeHero() {
  const title = [
  "Rev.",
  "Dr",
  "Niyi",
  "Adebayo",
];
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f7f7f5]
      "
    >
      {/* ---------------------------------------------------------------- */}
      {/* BACKGROUND IMAGE */}
      {/* ---------------------------------------------------------------- */}

      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Background Texture"
          fill
          priority
          className="
            object-cover
            object-center
            opacity-[0.8]
          "
        />
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* WHITE OVERLAY */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="
          absolute
          inset-0
          bg-white/70
          backdrop-blur-[1px]
        "
      />

      {/* ---------------------------------------------------------------- */}
      {/* CONTENT WRAPPER */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-6
          md:px-10
          lg:px-16
          pt-[140px]
          pb-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            items-center
            gap-16
            min-h-[80vh]
          "
        >
          {/* ============================================================ */}
          {/* LEFT CONTENT */}
          {/* ============================================================ */}

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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[620px]"
          >
            {/* SMALL INTRO */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              className="
                text-[13px]
                md:text-[14px]
                uppercase
                tracking-[0.25em]
                text-black/50
                font-medium
                mb-6
              "
            >
              Welcome to my world
            </motion.p>

            {/* MAIN TITLE */}
            <motion.h1
  initial="hidden"
  animate="visible"
  className="
    flex
    flex-wrap
    gap-x-5
    gap-y-2
    max-w-[700px]
    text-[56px]
    sm:text-[72px]
    lg:text-[70px]
    leading-[0.92]
    tracking-[-0.05em]
    font-black
    font-semibold
    uppercase
    text-black
  "
>
  {title.map((word, index) => (
    <motion.span
      key={index}
      variants={{
        hidden: {
          opacity: 0,
          y: 120,
          rotate: 6,
          filter: "blur(10px)",
        },

        visible: {
          opacity: 1,
          y: 0,
          rotate: 0,
          filter: "blur(0px)",
        },
      }}
      transition={{
        duration: 1,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        inline-block
        will-change-transform font-work-sans
      "
    >
      {word}
    </motion.span>
  ))}
</motion.h1>
            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="
                mt-8
                text-[16px]
                md:text-[18px]
                leading-[1.9]
                text-black/70
                max-w-[580px]
                font-syne
              "
            >
              Is called to evangelise the world to receive
              Christ and disciple the saved to reflect
              Christ.
            </motion.p>

            {/* CTA BUTTONS */}
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
                delay: 0.5,
                duration: 0.7,
              }}
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              {/* PRIMARY BUTTON */}
              <Link href="/initiatives">
                <button
                  className="
                    group
                    relative
                    overflow-hidden
                    h-[58px]
                    px-8
                    rounded-full
                    bg-[#111111]
                    text-white
                    flex
                    items-center
                    gap-4
                    transition-all
                    duration-500
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                  "
                >
                  <span
                    className="
                      relative
                      z-10
                      text-[15px]
                      font-medium
                    "
                  >
                    Explore Initiatives
                  </span>

                  <div
                    className="
                      relative
                      z-10
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={18} />
                  </div>

                  {/* BUTTON HOVER */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-[#1d1d1d]
                      to-black
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />
                </button>
              </Link>

              {/* SECONDARY BUTTON */}
              <Link href="/ministry">
                <button
                  className="
                    group
                    h-[58px]
                    px-8
                    rounded-full
                    bg-white
                    border
                    border-black/10
                    text-black
                    flex
                    items-center
                    gap-4
                    transition-all
                    duration-500
                    hover:border-black/20
                    hover:shadow-lg
                    hover:scale-[1.02]
                    active:scale-[0.98]
                  "
                >
                  <span
                    className="
                      text-[15px]
                      font-medium
                    "
                  >
                    Explore Ministry
                  </span>

                  <div
                    className="
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* ============================================================ */}
          {/* RIGHT IMAGES */}
          {/* ============================================================ */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              grid
              md:grid-cols-3
              justify-center
              lg:justify-end
              items-end
              gap-5
            "
          >
            {/* IMAGE 1 */}
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                md:w-full
                w-[350px]
                px-6
                md:col-span-2
                col-span-1
                h-[520px]
                z-20
              "
            >
              <Image
                src="/heroRna1.png"
                alt="Rev. Dr Niyi Adebayo"
                fill
                priority
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                  z-20
                  rounded-r-[28px]
                  
                "
              />

              {/* IMAGE OVERLAY */}
              
            </motion.div>

            {/* IMAGE 2 */}
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                md:w-[220px]
                w-[350px]
                
                h-[520px]
                rounded-[28px]
                overflow-hidden
                shadow-[0_25px_80px_rgba(0,0,0,0.18)]
                lg:translate-y-10
              "
            >
              <Image
                src="/heroRna2.png"
                alt="Rev. Dr Niyi Adebayo Portrait"
                fill
                priority
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

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

            {/* FLOATING GLOW */}
            <div
              className="
                absolute
                -bottom-10
                right-10
                w-[240px]
                h-[240px]
                rounded-full
                bg-black/5
                blur-3xl
                -z-10
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}