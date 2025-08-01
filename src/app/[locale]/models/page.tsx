"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Reveal from "@/components/shared/Reveal";
import models from "@/data/models.json";
import Link from "next/link";
import BackButton from '@/components/BackButton';

export default function ModelsPage() {
    const t = useTranslations("ModelsPage");
    const locale = useLocale();

    return (
        <main className="min-h-screen w-full py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-screen-xl mx-auto bg-surfaceAlt rounded-2xl shadow-card py-12 md:py-20 px-6 text-center">
                <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-center mb-12">
                    {t("title")}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {models.map((model, index) => {
                        const name =
                            typeof model.name === "string"
                                ? model.name
                                : (model.name as Record<string, string>)[locale] || model.name["en"];
                        const description =
                            typeof model.description === "string"
                                ? model.description
                                : (model.description as Record<string, string>)[locale] || model.description["en"];

                        return (
                            <Reveal key={index} delay={index * 0.1}>
                                <Link
                                    href={`/${locale}/models/${model.slug}`}
                                    className="group overflow-hidden rounded-2xl shadow-card transition-transform duration-300 hover:scale-105 block"
                                >
                                    <div className="relative w-full aspect-[16/9]">
                                        <Image
                                            src={model.thumbnail}
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
                <Reveal delay={0.4}>
                    <div className="mt-6 text-center">
                        <BackButton section="home" />
                    </div>
                </Reveal>
            </div>
        </main>
    );
}