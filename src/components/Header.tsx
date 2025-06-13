"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const t = useTranslations("Header");
  const locale = useLocale();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const current = window.scrollY;
      setScrollPos(current);
      document.body.style.position = "fixed";
      document.body.style.top = `-${current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollPos);
    }
  }, [menuOpen, scrollPos]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "h-16 shadow-md bg-white/90 backdrop-blur" : "h-60 bg-base"
      } ${menuOpen ? "overflow-visible" : "overflow-hidden"} relative`}
    >
      {/* Imagen decorativa como suelo del header */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-[url('/images/header-strip.png')] bg-repeat-x bg-bottom bg-contain h-[50px] md:h-[70px] sm:h-[20px] pointer-events-none z-0 transition-all duration-300 ${
          scrolled ? "translate-y-[40px] md:translate-y-[55px]" : "translate-y-0"
        }`}
      ></div>

      {/* Contenido del header */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 flex items-center justify-between h-full transition-all duration-300"
      >
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
          <Link href={`/${locale}/about`} className="block" onClick={() => setMenuOpen(false)}>{t("about")}</Link>
          <Link href={`/${locale}/clients`} className="block" onClick={() => setMenuOpen(false)}>{t("clients")}</Link>
          <Link href={`/${locale}/contact`} className="block" onClick={() => setMenuOpen(false)}>{t("contact")}</Link>
        </nav>

        {/* Botón menú móvil */}
        <button
          type="button"
          className="md:hidden text-black border border-black rounded-lg p-2 shadow"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute top-full mt-4 left-0 w-full bg-white rounded-lg shadow-lg py-4 flex flex-col items-center gap-4 text-text font-medium md:hidden">
          <Link href={`/${locale}`} onClick={() => setMenuOpen(false)}>{t("home")}</Link>
          <Link href={`/${locale}/maps`} onClick={() => setMenuOpen(false)}>{t("maps")}</Link>
          <Link href={`/${locale}/skins`} onClick={() => setMenuOpen(false)}>{t("skins")}</Link>
          <Link href={`/${locale}/models`} onClick={() => setMenuOpen(false)}>{t("models")}</Link>
          <Link href={`/${locale}/about`} onClick={() => setMenuOpen(false)}>{t("about")}</Link>
          <Link href={`/${locale}/clients`} onClick={() => setMenuOpen(false)}>{t("clients")}</Link>
          <Link href={`/${locale}/contact`} onClick={() => setMenuOpen(false)}>{t("contact")}</Link>
        </nav>
      )}
    </header>
  );
}