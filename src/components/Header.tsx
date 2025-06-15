"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Header");
  const locale = useLocale();
  const menuRef = useRef<HTMLDivElement>(null);

  // Listener de scroll que solo actualiza cuando el menú está cerrado
  useEffect(() => {
    const onScroll = () => {
      if (!menuOpen) {
        setScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // Bloqueo de scroll de fondo al abrir el menú
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "h-16 shadow-md bg-white/90 backdrop-blur" : "h-60 bg-base"
      } ${menuOpen ? "overflow-visible" : "overflow-hidden"} relative`}
    >
      {/* Franja decorativa con comportamiento original */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-[url('/images/header-strip.png')] bg-repeat-x bg-bottom bg-contain h-[50px] sm:h-[20px] md:h-[70px] pointer-events-none z-0 transition-all duration-300 ${
          scrolled ? "translate-y-[40px] md:translate-y-[55px]" : "translate-y-0"
        }`}
      />

      {/* Contenido del header */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center justify-between h-full transition-all duration-300">
        {/* Logo + Nombre + Lema */}
        <div className="flex items-center gap-x-1 text-center md:text-left">
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
            <Link href={`/${locale}`}>RexStudios</Link>
            {!scrolled && (
              <div className="text-sm text-text/60 leading-tight mt-1">
                {t("tagline")}
              </div>
            )}
          </div>
        </div>

        {/* Navegación desktop */}
        <nav className="hidden md:flex flex-wrap justify-center gap-6 text-text font-medium">
          <Link href={`/${locale}`} className="block" onClick={() => setMenuOpen(false)}>{t("home")}</Link>
          <Link href={`/${locale}/maps`} className="block" onClick={() => setMenuOpen(false)}>{t("maps")}</Link>
          <Link href={`/${locale}/skins`} className="block" onClick={() => setMenuOpen(false)}>{t("skins")}</Link>
          <Link href={`/${locale}/models`} className="block" onClick={() => setMenuOpen(false)}>{t("models")}</Link>
          <Link href={`/${locale}/clients`} className="block" onClick={() => setMenuOpen(false)}>{t("clients")}</Link>
          <Link href={`/${locale}/contact`} className="block" onClick={() => setMenuOpen(false)}>{t("contact")}</Link>
          <Link href={`/${locale}/about`} className="block" onClick={() => setMenuOpen(false)}>{t("about")}</Link>
        </nav>

        {/* Botón menú mobile */}
        <div className="relative md:hidden w-full flex justify-end" ref={menuRef}>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          {menuOpen && (
            <div className="absolute inset-x-0 top-full mx-auto text-center w-full max-w-xs z-40 md:hidden">
              <nav
                ref={menuRef}
                className="bg-surface rounded-lg shadow-lg py-4 px-6 flex flex-col items-center gap-4 text-text font-medium w-full"
              >
                <Link href={`/${locale}`} className="block" onClick={() => setMenuOpen(false)}>{t("home")}</Link>
                <Link href={`/${locale}/maps`} className="block" onClick={() => setMenuOpen(false)}>{t("maps")}</Link>
                <Link href={`/${locale}/skins`} className="block" onClick={() => setMenuOpen(false)}>{t("skins")}</Link>
                <Link href={`/${locale}/models`} className="block" onClick={() => setMenuOpen(false)}>{t("models")}</Link>
                <Link href={`/${locale}/clients`} className="block" onClick={() => setMenuOpen(false)}>{t("clients")}</Link>
                <Link href={`/${locale}/contact`} className="block" onClick={() => setMenuOpen(false)}>{t("contact")}</Link>
                <Link href={`/${locale}/about`} className="block" onClick={() => setMenuOpen(false)}>{t("about")}</Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
