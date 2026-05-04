"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import { books } from "../data/bookData";

export default function BooksSection() {
  const [query, setQuery] = useState("");

  const filteredBooks = useMemo(() => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <section className="py-4 px-6 bg-gray-100 z-30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium tracking-wide text-gray-700">
            Books
          </h2>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search by title"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full py-3 pl-5 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          </div>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {filteredBooks.map((book, index) => (
            <div>
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="bg-white p-4  shadow-sm hover:shadow-md transition"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-[260px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>

            <div className="flex justify-center mt-4 w-full">
                <div>
                <h3 className="text-sm font-medium text-gray-800">
                {book.title}
              </h3>
              <p className="text-xs text-gray-500 mb-4  mt-2 text-center">{book.author}</p>
              <p className="text-sm font-semibold text-center text-gray-700">
                ${book.price.toFixed(2)}
              </p>
            </div>
            </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
