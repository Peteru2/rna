"use client";

import Image from "next/image";

export default function FormHero() {
  return (
    <section className="relative h-[320px] w-full overflow-hidden bg-[#2f2f2f]">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover opacity-15"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-50  pt-12 md:pt-14">
        <h1 className="text-white text-[28px] md:text-[46px] font-semibold tracking-wide uppercase">
          Get in Touch
        </h1>
      </div>
    </section>
  );
}


