import Image from "next/image";
import Link from "next/link";
import RexButton from "@/components/RexButton";
import { useLocale, useTranslations } from "next-intl";
import models from "@/data/models.json";

const featuredModels = models.filter((model) => model.featured).slice(0, 4);

export function ModelsPreview() {
    const locale = useLocale();
    const t = useTranslations("ModelsPreview");

    return (
        <section className="bg-surfaceAlt px-4 sm:px-6 md:px-8 py-12 md:py-20 rounded-2xl shadow-card max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-center mb-8">{t("title")}</h2>
            <div className="grid grid-cols-2 gap-8 mb-10">
                {featuredModels.map((model) => {
                    const name =
                        typeof model.name === "string"
                            ? model.name
                            : (model.name as Record<string, string>)[locale] || model.name["en"];
                    const description =
                        typeof model.description === "string"
                            ? model.description
                            : (model.description as Record<string, string>)[locale] || model.description["en"];

                    return (
                        <Link
                            href={`/${locale}/models/${model.slug}`}
                            key={model.slug}
                            className="group overflow-hidden rounded-2xl shadow-card transition-transform duration-300 hover:scale-105"
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
                    );
                })}
            </div>
            <RexButton href={`/${locale}/models`}>{t("viewAll")}</RexButton>
        </section>
    );
}