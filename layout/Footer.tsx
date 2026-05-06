"use client";

import Link from "next/link";
import Image from "next/image";

import {
//   Instagram,
//   Facebook,
//   Linkedin,
//   Youtube,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Books", href: "/books" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Ministry", href: "/ministry" },
  { name: "Blog", href: "/blog" },
];

const socialLinks = [
//   {
//     icon: <Facebook size={15} />,
//     href: "#",
//   },
//   {
//     icon: <Instagram size={15} />,
//     href: "#",
//   },
//   {
//     icon: <Linkedin size={15} />,
//     href: "#",
//   },
//   {
//     icon: <Youtube size={15} />,
//     href: "#",
//   },
];

export default function Footer() {
  return (
    <footer className="relative font-syne overflow-hidden bg-[#181A2A] text-white">

   

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-10 relative z-10">

  {/* MAIN ROW */}
  <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-16 text-center lg:text-left">

    {/* LOGO */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col items-center lg:items-start gap-3"
    >
      <Link href="/">
        <Image
          src="/footerLogo.png"
          alt="RNA Logo"
          width={150}
          height={60}
          className="object-cover"
        />
      </Link>
    </motion.div>

    {/* CENTER NAV */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm text-white/70"
    >
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="transition duration-300 hover:text-white"
        >
          {link.name}
        </Link>
      ))}
    </motion.div>

    <Link href={"/getInTouch"}>
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -2 }}
      className="group flex items-center cursor-pointer justify-center gap-3"
    >
      <div className="w-9 h-9  rounded-full bg-white flex items-center justify-center overflow-hidden">
        <motion.div
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight
            size={16}
            className="text-[#0d1023]"
          />
        </motion.div>
      </div>

      <span className="text-sm text-white/80 group-hover:text-white transition">
        Get in touch
      </span>
    </motion.button>
    </Link>
  </div>

  {/* LINE */}
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 1,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="origin-left mt-16 mb-8 h-[1px] bg-white/15"
  />

  {/* BOTTOM */}
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 text-center">

    {/* SOCIALS */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-center justify-center gap-4"
    >
      {/* {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition duration-300"
        >
          {social.icon}
        </Link>
      ))} */}
    </motion.div>

    {/* COPYRIGHT */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-sm text-white/50 text-center"
    >
      ©2026 Jaarc Techsphere. All Rights Reserved
    </motion.p>
  </div>
</div>    </footer>
  );
}