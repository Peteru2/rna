"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { books } from "../data/bookData";

export default function BooksHero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % books.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + books.length) % books.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-100 flex items-center">

      {/* FLOATING LIGHT */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-40 h-40 rounded-full bg-[#ffffff80] blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 lg:px-10 py-4">

        <div className="relative grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* EXTREME SIDE BUTTONS */}
          <div className="hidden lg:flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-[-90px] right-[-90px] pointer-events-none z-30">

            <motion.button
              whileHover={{
                scale: 1.08,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={prevSlide}
              className="pointer-events-auto w-12 h-12 cursor-pointer rounded-full border border-black/10 bg-white/80 backdrop-blur-xl flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            >
              <ArrowLeft size={18} className="text-[#111827]" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={nextSlide}
              className="pointer-events-auto w-12 h-12 cursor-pointer rounded-full bg-[#e7e2d7] flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            >
              <ArrowRight size={18} className="text-[#111827]" />
            </motion.button>
          </div>

          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
              filter: "blur(12px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
          >

            <AnimatePresence mode="wait">

              <motion.div
                key={books[current].id}
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                  filter: "blur(8px)",
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="space-y-8"
              >

                <h1 className="text-5xl md:text-6xl font-light tracking-tight font-prata text-[#111827] leading-none">
                  {books[current].title}
                </h1>

                <p className="max-w-md text-[#6b7280] leading-8 text-sm md:text-base">
                  {books[current].description}
                </p>

                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Link
                    href="/books"
                    className="group inline-flex items-center gap-3 border border-black/10 px-7 py-4 text-sm tracking-wide text-[#111827] hover:bg-white transition-all duration-300"
                  >
                    READ MORE

                    <motion.span
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* INDICATORS */}
            <div className="flex items-center gap-4 mt-14">

              {books.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-500 rounded-full ${
                    current === index
                      ? "w-7 h-2 bg-[#b9985a]"
                      : "w-2 h-2 bg-black/20"
                  }`}
                />
              ))}
            </div>

            {/* MOBILE BUTTONS */}
            <div className="flex lg:hidden items-center gap-4 mt-10">

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center"
              >
                <ArrowLeft size={18} />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-[#e7e2d7] flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
              rotate: 4,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center "
          >

            <AnimatePresence mode="wait">

              <motion.div
                key={books[current].image}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  rotateY: -15,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  y: [0, -10, 0],
                }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  y: -12,
                  rotate: -1,
                }}
                className="relative"
              >

                {/* SHADOW */}
                <div className="absolute inset-0 bg-black/10 blur-3xl scale-90 translate-y-10 rounded-full" />

                {/* BIGGER IMAGE */}
                <div className="relative w-[240px] sm:w-[460px] md:w-[580px] lg:w-[300px] ">

                  <Image
                    src={books[current].image}
                    alt={books[current].title}
                    width={2200}
                    height={10}
                    priority
                    className="relative z-10 w-full h-auto object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.22)]"
                  />
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}