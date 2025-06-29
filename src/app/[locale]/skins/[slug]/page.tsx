"use client";

import { useParams, notFound } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import skinpacks from "@/data/skinpacks.json";
import RexButton from '@/components/RexButton';
import Reveal from "@/components/shared/Reveal";
import SkinPackSlider from "@/components/SkinPackSlider";
import BackButton from '@/components/BackButton';

export default function SkinPackDetailPage() {
    const params = useParams();
    const locale = useLocale();
    const t = useTranslations("ModelDetailPage");
    // Busca el pack según slug en la URL
    const skinpack = Array.isArray(skinpacks)
        ? skinpacks.find((p) => p.slug === params.slug)
        : null;

    if (!skinpack) notFound();

    // Nombre y descripción en el idioma
    const name =
        typeof skinpack.name === "string"
            ? skinpack.name
            : skinpack.name[locale as keyof typeof skinpack.name] || skinpack.name["en"];
    const description =
        typeof skinpack.description === "string"
            ? skinpack.description
            : skinpack.description[locale as keyof typeof skinpack.description] || skinpack.description["en"];

    // Array de imágenes: portada + skins del pack
    const images = [
        {
            src: skinpack.image,
            alt: name,
        },
        ...(Array.isArray(skinpack.skins)
            ? skinpack.skins.map((skin) => ({
                src: skin.image,
                alt:
                    typeof skin.name === "string"
                        ? skin.name
                        : skin.name[locale as keyof typeof skin.name] || skin.name["en"],
            }))
            : []),
    ];

    return (
        <main className="min-h-screen w-full py-16 px-4 sm:px-6 md:px-8">

            {/* Slider de imágenes, fuera del marco blanco */}
            <SkinPackSlider images={images} />

            {/* Marco blanco con el resto del contenido */}
            <div className="max-w-screen-xl mx-auto bg-surfaceAlt rounded-2xl shadow-card py-12 md:py-20 px-6 flex flex-col items-center">
                <Reveal>
                    <h1 className="text-3xl sm:text-4xl font-heading font-semibold mb-6 text-center">
                        {name}
                    </h1>
                </Reveal>
                {/* Descripción */}
                <Reveal delay={0.2}>
                    <div className="text-base text-text/80 text-center mb-8 max-w-xl mx-auto">
                        {description}
                    </div>
                </Reveal>
                {/* Botón marketplace */}
                {skinpack.marketplace_url && (
                    <Reveal delay={0.3}>
                        <div className="mb-6 text-center">
                            {skinpack.marketplace_url && (
                            <RexButton
                                href={skinpack.marketplace_url}
                                target="_blank"
                            >
                                {t("viewMarketplace")}
                            </RexButton>
                            )}
                        </div>
                    </Reveal>
                )}
                <Reveal delay={0.4}>
                    <div className="mt-6 text-center">
                        <BackButton section="skinpacks" />
                    </div>
                </Reveal>
            </div>
        </main>
    );
}
