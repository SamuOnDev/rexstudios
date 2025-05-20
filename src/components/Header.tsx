"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
// import Image from "next/image"; // Comentado por ahora

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "h-16 shadow-md bg-white/90 backdrop-blur" : "h-60 bg-base"
      }`}
    >
      <div className="relative w-full h-full flex flex-col justify-center transition-all duration-300 ease-in-out">
        {/* 
        {!scrolled && (
          <Image
            src="/images/banner.jpg"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 brightness-110 opacity-60"
          />
        )}
        */}

        <div
          className={`relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full h-full transition-all duration-300 ${
            scrolled ? "py-0" : "py-8"
          }`}
        >
          <div className={`text-text text-center md:text-left ${!scrolled ? "mt-4" : ""}`}>
            <div
              className={`font-heading font-bold transition-all duration-300 ${
                scrolled ? "text-lg" : "text-4xl md:text-5xl"
              }`}
            >
              <Link href="/">RexStudios</Link>
            </div>
            {!scrolled && (
              <div className="text-sm text-text/60 leading-tight mt-1">
                Creative Minecraft Builds & Collaboration
              </div>
            )}
          </div>

          <nav
            className={`mt-4 md:mt-0 space-x-6 font-medium text-text transition-all ${
              scrolled ? "text-sm" : "text-base"
            }`}
          >
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <Link href="/about" className="hover:text-secondary transition-colors">About</Link>
            <Link href="/clients" className="hover:text-secondary transition-colors">Clients</Link>
            <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
