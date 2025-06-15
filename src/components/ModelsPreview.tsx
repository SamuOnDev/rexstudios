import Image from "next/image";
import RexButton from "@/components/RexButton";
import { useLocale, useTranslations } from "next-intl";
import models from "@/data/models.json";

const featuredModels = models.filter((model) => model.featured);

export function ModelsPreview() {
    const locale = useLocale();
    const t = useTranslations("ModelsPreview");

    return (
        <section className="bg-surfaceAlt px-4 sm:px-6 md:px-8 py-12 md:py-20 rounded-2xl shadow-card max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-center mb-8">{t("title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {featuredModels.map((model, index) => {
                    const name =
                        typeof model.name === "string"
                            ? model.name
                            : (model.name as Record<string, string>)[locale] || model.name["en"];

                    return (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-2xl shadow-card transition-transform duration-300 hover:scale-105"
                        >
                            <Image
                                src={model.image}
                                alt={name}
                                width={1280}
                                height={720}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2">
                                <h3 className="text-white text-lg font-semibold">{name}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
            <RexButton href="/models">{t("viewAll")}</RexButton>
        </section>
    );
}