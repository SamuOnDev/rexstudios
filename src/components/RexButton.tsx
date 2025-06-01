"use client";
import Link from "next/link";
import { ReactNode } from "react";

type RexButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    href?: string;
    target?: string; // <- Añadido
};

export default function RexButton({ children, onClick, className = "", href, target }: RexButtonProps) {
    const baseClass =
        "relative group overflow-hidden inline-block px-6 py-3 rounded-full font-medium text-white transition-all duration-300 border-2 border-transparent bg-secondary hover:bg-secondaryDark bg-opacity-90 hover:shadow-xl hover:border-green-400";

    const innerContent = (
        <>
            {children}
            <div className="absolute bottom-[-150%] left-0 w-full h-[180px] opacity-0 transition-all duration-500 ease-out group-hover:bottom-[-10%] group-hover:opacity-65 bg-[url('/images/decor-hover.png')] bg-repeat-x bg-bottom bg-[length:120px_60px] pointer-events-none" />
        </>
    );

    if (href) {
        if (target === "_blank") {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClass} ${className}`}>
                    {innerContent}
                </a>
            );
        }

        return (
            <Link href={href} className={`${baseClass} ${className}`}>
                {innerContent}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={`${baseClass} ${className}`}>
            {innerContent}
        </button>
    );
}
