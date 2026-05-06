"use client";

import { useEffect, useMemo, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  ArrowUpRight,
  TextAlignEnd,
  X,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Books", href: "/books" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Ministry", href: "/ministry" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [showNav, setShowNav] =
    useState(true);

  const [isTop, setIsTop] =
    useState(true);

  /*
   |--------------------------------------------------------------------------
   | ROUTE-AWARE NAVBAR SYSTEM
   |--------------------------------------------------------------------------
   | These are routes that use dark hero sections
   | and therefore require white navbar content.
   |--------------------------------------------------------------------------
   */

  const darkNavbarRoutes = [
    "/getInTouch",
  ];

  const isDarkNavbar =
    darkNavbarRoutes.includes(pathname);

  /*
   |--------------------------------------------------------------------------
   | NAVBAR THEME
   |--------------------------------------------------------------------------
   */

  const navbarTheme = useMemo(() => {
    return {
      logo: isDarkNavbar
        ? "/whiteRNA.png"
        : "/rnaLogo.png",

      navText: isDarkNavbar
        ? "text-white/70 hover:text-white"
        : "text-black/60 hover:text-black",

      activeNav: isDarkNavbar
        ? "text-white"
        : "text-black",

      ctaText: isDarkNavbar
        ? "text-white"
        : "text-black",

      ctaButton: isDarkNavbar
        ? "bg-white text-black"
        : "bg-black text-white",

      mobileMenu: isDarkNavbar
        ? "bg-[#111111] border-white/10"
        : "bg-gray-100 border-black/10",

      mobileText: isDarkNavbar
        ? "text-white/70 hover:text-white"
        : "text-black/60 hover:text-black",

      mobileActive: isDarkNavbar
        ? "text-white"
        : "text-black",
    };
  }, [isDarkNavbar]);

  /*
   
   | NAVBAR BACKGROUND
   */

  const navbarBackground = useMemo(() => {
    if (isTop) {
      return isDarkNavbar
        ? "bg-transparent"
        : "md:bg-transparent bg-gray-100";
    }

    return isDarkNavbar
      ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
      : "bg-gray-100 backdrop-blur-xl border-b border-gray-300";
  }, [isTop, isDarkNavbar]);

 

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY =
        window.scrollY;

      setIsTop(currentScrollY < 40);

      if (currentScrollY < 40) {
        setShowNav(true);
      } else if (
        currentScrollY > lastScrollY
      ) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /*
   
   | CLOSE MOBILE MENU ON ROUTE CHANGE

   */

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: showNav ? 0 : -120,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          ${navbarBackground}
        `}
      >
        <nav
          className="
            h-[84px]
            max-w-7xl
            mx-auto
            px-6
            md:px-12
            lg:px-16
            flex
            items-center
            justify-between
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src={navbarTheme.logo}
              alt="RNA"
              width={48}
              height={48}
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-10
            "
          >
            {navLinks.map((link) => {
              const active =
                pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    text-[15px]
                    tracking-wide
                    transition-all
                    duration-300
                    ${
                      active
                        ? navbarTheme.activeNav
                        : navbarTheme.navText
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SECTION */}
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            {/* CTA */}
            <Link
              href="/getInTouch"
              className="hidden md:block"
            >
              <button
                className="
                  flex
                  items-center
                  gap-3
                  group
                  cursor-pointer
                "
              >
                <span
                  className={`
                    text-sm
                    font-medium
                    transition-colors
                    duration-300
                    ${navbarTheme.ctaText}
                  `}
                >
                  Get in touch
                </span>

                <div
                  className={`
                    w-10
                    h-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:rotate-45
                    ${navbarTheme.ctaButton}
                  `}
                >
                  <ArrowUpRight
                    size={18}
                  />
                </div>
              </button>
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className={`
                md:hidden
                cursor-pointer
                transition-colors
                duration-300
                ${
                  isDarkNavbar
                    ? "text-white"
                    : "text-black"
                }
              `}
            >
              {menuOpen ? (
                <X size={26} />
              ) : (
                <TextAlignEnd size={26} />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.25,
            }}
            className={`
              fixed
              top-[84px]
              left-0
              w-full
              z-40
              transition-all
              duration-300
              border-b
              ${navbarTheme.mobileMenu}
            `}
          >
            <div
              className="
                flex
                flex-col
                px-6
                py-8
                space-y-6
              "
            >
              {/* MOBILE LINKS */}
              {navLinks.map((link) => {
                const active =
                  pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      text-lg
                      transition-all
                      duration-300
                      ${
                        active
                          ? navbarTheme.mobileActive
                          : navbarTheme.mobileText
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* MOBILE CTA */}
              <Link href="/getInTouch">
                <button
                  className={`
                    mt-4
                    w-full
                    flex
                    items-center
                    justify-between
                    rounded-full
                    px-5
                    py-3
                    border
                    transition-all
                    duration-300
                    ${
                      isDarkNavbar
                        ? "border-white/10 bg-white text-black"
                        : "border-black/10 bg-black text-white"
                    }
                  `}
                >
                  <span className="font-medium">
                    Get in touch
                  </span>

                  <div
                    className={`
                      w-9
                      h-9
                      rounded-full
                      flex
                      items-center
                      justify-center
                      ${
                        isDarkNavbar
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }
                    `}
                  >
                    <ArrowUpRight
                      size={16}
                    />
                  </div>
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}