"use client";
import { useEffect, useRef, useState } from "react";
import "@/styles/globals.css";
import { Outfit, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="relative">
        {/* Fondo general de la web */}
        <div
          className={`
            absolute inset-0 z-0 pointer-events-none opacity-[0.50] transition-all duration-700 ease-out
            bg-[url('/images/bg-minecraft.png')] bg-fixed bg-no-repeat

            bg-center md:bg-cover sm:bg-[length:auto_130%] sm:bg-top

            ${footerVisible
              ? "sm:bg-[position:50%_50%] md:bg-[position:50%_120%]"
              : "sm:bg-[position:50%_50%] md:bg-[position:50%_50%]"}
          `}
        ></div>
        {/* Contenido principal por encima del fondo */}
        <div className="relative z-10">
          <Header />
          <main className="pt-60">{children}</main>
          <div ref={footerRef}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
