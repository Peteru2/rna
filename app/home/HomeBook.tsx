"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { books } from "../data/bookData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HomeBook() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative  bg-white pb-32">
      {/* floating wrapper */}
      <div className="relative pt-[20px] max-w-full  ">
        <div className="relative  ">
          {/* HEADER OUTSIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center px-4 font-work-sans"
          >
           

            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-[42px]">
              Books by Rev. Niyi Adebayo
            </h2>
             <p className="mb-3 text-[10px] font-bold mt-2 uppercase tracking-[0.32em] text-neutral-500">
              LIFE-CHANGING AND TRANSFORMATIONAL BOOKS
            </p>
          </motion.div>

          {/* MAIN CONTAINER */}
          <div className=" bg-gray-100   px-8 pb-10 pt-26 md:pt-0 md:mt-30 md:px-12">
            {/* BOOK GRID */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 max-w-5xl mx-auto gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4"
            >
              {books.map((book, index) => (
                <motion.div
                  key={book.id}
                  variants={item}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative"
                >
                  {/* CARD */}
                  <motion.div
                    animate={{
                      y: hovered === index ? -10 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 18,
                    }}
                    className="relative  -top-[40px] flex flex-col items-center"
                  >
                    {/* IMAGE HOLDER */}
                    <div className="relative flex h-[270px] w-full items-start justify-center bg-[#ece9e2] px-5 pt-[-40px]">
                      {/* BOOK IMAGE */}
                      <motion.div
                        animate={{
                          y: hovered === index ? -8 : -28,
                          scale: hovered === index ? 1.03 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                        className="relative h-[290px] w-[190px]"
                      >
                        <Image
                          src={book.image}
                          alt={book.title}
                          fill
                          priority
                          className="object-cover shadow-[0_18px_35px_rgba(0,0,0,0.18)]"
                        />
                      </motion.div>
                    </div>

                    {/* CONTENT */}
                    <div className="pt-7 text-center">
                      <motion.h3
                        animate={{
                          y: hovered === index ? -2 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="text-[17px] font-medium text-neutral-900"
                      >
                        {book.title}
                      </motion.h3>

                      <p className="mt-1 text-sm text-neutral-500">
                        {book.author}
                      </p>

                      <div className="mt-3 flex items-center justify-center gap-2">
                        <span className="text-sm text-neutral-400 line-through">
                          ${book.oldPrice}
                        </span>

                        <span className="text-base font-semibold text-[#9d7a3e]">
                          ${book.price}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
              
            </motion.div>

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-14 flex max-w-5xl mx-auto items-center justify-between"
            >
              {/* DOTS */}
              <div className="flex items-center gap-3">
                <span className="h-[6px] w-[6px] rounded-full bg-black" />
                <span className="h-[6px] w-[6px] rounded-full bg-neutral-300" />
                <span className="h-[6px] w-[6px] rounded-full bg-neutral-300" />
              </div>

              {/* CTA */}
              <Link
                href="/books"
                className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-800"
              >
                <span>View All Books</span>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}