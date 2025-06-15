import Image from "next/image";
import RexButton from "@/components/RexButton";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import maps from "@/data/maps.json";

const featuredMaps = maps.filter((map) => map.featured && map.image);

export function MapGalleryPreview() {
    const locale = useLocale();
    const t = useTranslations("MapGalleryPreview");

    return (
        <section className="px-4 sm:px-6 md:px-8 py-12 md:py-20 max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-center mb-8">{t("title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
            {featuredMaps.map((map) => (
            <Link
                href={`/${locale}/maps/${map.slug}`}
                key={map.slug}
                className="relative group rounded-2xl overflow-hidden shadow-card transform transition-all duration-300 hover:scale-105"
            >
                <Image
                src={map.image}
                alt={typeof map.name === "string" ? map.name : map.name[locale as keyof typeof map.name] || map.name.en}
                width={800}
                height={400}
                className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <p className="text-white text-base text-center">
                    {typeof map.description === "string" ? map.description : map.description[locale as keyof typeof map.description] || map.description.en}
                </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2">
                <h3 className="text-white text-lg font-semibold">
                    {typeof map.name === "string" ? map.name : map.name[locale as keyof typeof map.name] || map.name.en}
                </h3>
                </div>
            </Link>
            ))}
        </div>
        <RexButton href={`/${locale}/maps`}>{t("viewAll")}</RexButton>
        </section>
    );
}