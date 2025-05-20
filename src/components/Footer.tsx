import Link from "next/link";
import { FaXTwitter, FaDiscord, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-white text-sm mt-16">
            <div className="max-w-screen-xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 flex-wrap">
                {/* Logo y derechos */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-heading font-semibold mb-2">RexStudios</h3>
                    <p className="text-white/60">
                        © {new Date().getFullYear()} RexStudios. All rights reserved.
                    </p>
                </div>

                {/* Navegación */}
                <nav className="flex flex-wrap justify-center gap-4 text-white/80">
                    <Link href="/" className="hover:text-white transition">Home</Link>
                    <Link href="/about" className="hover:text-white transition">About</Link>
                    <Link href="/maps" className="hover:text-white transition">Maps</Link>
                    <Link href="/clients" className="hover:text-white transition">Clients</Link>
                    <Link href="/contact" className="hover:text-white transition">Contact</Link>
                </nav>

                {/* Social Media */}
                <div className="flex gap-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                        <FaXTwitter size={20} />
                    </a>
                    <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                        <FaDiscord size={20} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                        <FaYoutube size={20} />
                    </a>
                </div>

                {/* Legal links */}
                <div className="flex gap-6 text-white/60 text-xs mt-4 md:mt-0">
                    <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
                    <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}
