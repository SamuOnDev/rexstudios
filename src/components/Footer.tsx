import Link from "next/link";
import Image from "next/image";
import { FaXTwitter, FaDiscord, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#1A1A1A] text-white mt-20 overflow-hidden">
            {/* Capa de imagen PNG, por encima del fondo gris */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/images/bg-footer.png')] bg-repeat-x bg-bottom bg-cover md:bg-contain md:bg-[length:500px_300px] opacity-55" />

            {/* Contenido del footer */}
            <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 flex-wrap">
                {/* Logo + texto */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-2 text-center md:text-left">
                <div className="relative w-14 h-14">
                    <Image
                    src="/images/rex-logo-footer.png"
                    alt="Rex Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-heading font-semibold mb-1">RexStudios</h3>
                    <p className="text-white/60 text-sm">
                    © {new Date().getFullYear()} RexStudios. All rights reserved.
                    </p>
                </div>
                </div>

                {/* Navegación */}
                <nav className="flex flex-wrap justify-center gap-4 text-white/80">
                <Link href="/" className="hover:text-white transition">Home</Link>
                <Link href="/about" className="hover:text-white transition">About</Link>
                <Link href="/clients" className="hover:text-white transition">Clients</Link>
                <Link href="/contact" className="hover:text-white transition">Contact</Link>
                </nav>

                {/* Social Media */}
                <div className="flex gap-4">
                <a href="https://x.com/RexStudios__" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
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
