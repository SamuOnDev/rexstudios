
"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Reveal from "@/components/shared/Reveal";
import maps from "@/data/maps.json";
import Link from "next/link";

export default function MapsPage() {
    const t = useTranslations("MapsPage");
    const locale = useLocale();

    return (
        <main className="min-h-screen w-full py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-screen-xl mx-auto bg-surfaceAlt rounded-2xl shadow-card py-12 md:py-20 px-6 text-center">
                <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-center mb-12">
                    {t("title")}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {maps.map((map, index) => {
                        const name = typeof map.name === "string" ? map.name : (map.name as Record<string, string>)[locale] || map.name["en"];
                        const description = typeof map.description === "string" ? map.description : (map.description as Record<string, string>)[locale] || map.description["en"];


                        return (
                            <Reveal key={index} delay={index * 0.1}>
                                <Link
                                    href={`/${locale}/maps/${map.slug}`}
                                    className="group overflow-hidden rounded-2xl shadow-card transition-transform duration-300 hover:scale-105 block"
                                >
                                    <div className="relative w-full aspect-[16/9]">
                                        <Image
                                            src={map.image}
                                            alt={name}
                                            fill
                                            className="object-cover rounded-2xl"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white px-4 text-base text-center rounded-2xl">
                                            {description}
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black/30 text-white text-lg font-medium py-2 rounded-b-2xl">
                                            {name}
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
