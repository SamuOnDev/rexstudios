"use client";

import Image from "next/image";
import { useState } from "react";

// Utilidad mínima de clases (por si no tienes clsx)
function cn(...args: (string | boolean | undefined)[]) {
  return args.filter(Boolean).join(" ");
}

interface SkinPackSliderProps {
  images: { src: string; alt: string }[];
}

export default function SkinPackSlider({ images }: SkinPackSliderProps) {
    const [activeIdx, setActiveIdx] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    const handleChange = (idx: number) => {
        if (idx === activeIdx) return;
        setTransitioning(true);
        setTimeout(() => {
        setActiveIdx(idx);
        setTransitioning(false);
        }, 180); // Duración del fade, igual que maps (ajustable)
    };

    return (
        <div className="w-full max-w-3xl mx-auto mb-8">
        {/* Imagen principal, tamaño igual que maps */}
        <div className="relative rounded-2xl overflow-hidden shadow h-72 md:h-96 flex items-center justify-center bg-black">
            {images.map((img, idx) => (
            <Image
                key={idx}
                src={img.src}
                alt={img.alt}
                fill
                className={cn(
                "absolute inset-0 object-cover w-full h-full transition-opacity duration-200",
                idx === activeIdx && !transitioning ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
                draggable={false}
                priority={idx === 0}
            />
            ))}
            {/* Overlay degradado, como en maps */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-b from-black/10 to-black/40" />
        </div>
        {/* Miniaturas debajo */}
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
            {images.map((img, idx) => (
            <button
                key={idx}
                onClick={() => handleChange(idx)}
                aria-label={`Miniatura ${idx + 1}`}
                className={cn(
                "relative rounded-xl overflow-hidden border-2 w-20 h-12 md:w-24 md:h-16 bg-black focus:outline-none",
                activeIdx === idx
                    ? "border-primary shadow-lg"
                    : "border-transparent"
                )}
                tabIndex={0}
                type="button"
                style={{ transition: "border-color 0.2s" }}
            >
                <Image
                src={img.src}
                alt={img.alt}
                width={128}
                height={72}
                className="object-cover w-full h-full"
                draggable={false}
                />
            </button>
            ))}
        </div>
        </div>
    );
}
