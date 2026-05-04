"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, TextAlignEnd, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Books", href: "/books" },
    { name: "Initiatives", href: "/initiatives" },
    { name: "Ministry", href: "/ministry" },
    { name: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 40) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : -120 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 bg-gray-100 left-0 w-full z-50  "
      >
        <nav className="h-[84px] flex items-center justify-between max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/rnaLogo.png"
              alt="RNA"
              width={48}
              height={48}
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] tracking-wide transition-all duration-300 ${
                  pathname === link.href
                    ? "text-black font-medium"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT CTA */}
          <div className="flex items-center gap-4">

            <button
              className="hidden md:flex items-center gap-3 group"
            >
              <span className="text-sm font-medium text-black">
                Get in touch
              </span>

              <div className="w-10 h-10 rounded-full bg-black cursor-pointer  flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} className="text-white" />
              </div>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-black cursor-pointer"
            >
              {menuOpen ? <X size={26} /> : <TextAlignEnd size={26} />}
            </button>
          </div>
        </nav>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[84px] left-0 w-full bg-gray-100 border-b border-black/10 z-40"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg transition ${
                    pathname === link.href
                      ? "text-black font-medium"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <button className="mt-4 flex items-center justify-between border border-black/10 rounded-full px-5 py-3">
                <span className="font-medium">Get in touch</span>

                <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}