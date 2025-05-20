import "@/styles/globals.css";
import { Outfit, Inter } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "RexStudios",
  description: "Minecraft Map Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="bg-base text-text font-body">
        <Header />
        <main className="pt-60">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
