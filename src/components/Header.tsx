"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 overflow-hidden transition-all duration-300 ease-in-out ${
        scrolled ? "h-16 shadow-md bg-white/90 backdrop-blur" : "h-60 bg-base"
      }`}
    >
      {/* Imagen decorativa como suelo del header */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-[url('/images/header-strip.png')] bg-repeat-x bg-bottom bg-contain h-[50px] md:h-[70px] sm:h-[20px] pointer-events-none z-0 transition-all duration-300 ${
          scrolled ? "translate-y-[40px] md:translate-y-[55px]" : "translate-y-0"
        }`}
      ></div>

      {/* Contenido del header */}
      <div
        className={`relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between h-full transition-all duration-300 ${
          scrolled ? "gap-y-1" : "gap-y-4"
        }`}
      >
        {/* Logo + Nombre + Lema */}
        <div
          className={`flex ${
            scrolled ? "flex-row items-center" : "flex-col items-center"
          } md:flex-row md:items-center gap-x-1 text-center md:text-left`}
        >
          <Image
            src="/images/rex-logo.png"
            alt="Logo"
            width={scrolled ? 32 : 80}
            height={scrolled ? 32 : 80}
            className="object-contain transition-all duration-300"
            priority
          />
          <div
            className={`font-heading font-bold transition-all duration-300 ${
              scrolled ? "text-lg" : "text-3xl"
            } text-text`}
          >
            <Link href="/">RexStudios</Link>
            {!scrolled && (
              <div className="text-sm text-text/60 leading-tight mt-1">
                Creative Minecraft Builds & Collaboration
              </div>
            )}
          </div>
        </div>

        {/* Menú responsive */}
        <nav
          className={`${
            scrolled ? "mt-0" : "mt-3"
          } md:mt-0 space-x-4 md:space-x-6 font-medium text-text transition-all ${
            scrolled ? "text-sm" : "text-base"
          }`}
        >
          <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link href="/about" className="hover:text-secondary transition-colors">About</Link>
          <Link href="/clients" className="hover:text-secondary transition-colors">Clients</Link>
          <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
