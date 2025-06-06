import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import skins from "@/data/skins.json";
import RexButton from "@/components/RexButton";
import Image from "next/image";

export default async function Page({
        params,
    }: {
        params: Promise<{ slug: string; locale: string }>;
    }) {
    const { slug, locale } = await params;
    const t = await getTranslations({ locale });

    const skin = skins.find((s) => s.slug === slug);
    if (!skin) return notFound();

    const title = typeof skin.name === "string" ? skin.name : skin.name[locale as keyof typeof skin.name] || skin.name["en"];
    const description = typeof skin.description === "string"
        ? skin.description
        : skin.description[locale as keyof typeof skin.description] || skin.description["en"];

    return (
        <main className="p-7">
        <h1 className="text-5xl font-bold mb-10 text-center">{title}</h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surfaceAlt rounded-2xl shadow-card px-6 py-10">
            <div className="flex justify-center">
            <div className="w-[150px] h-[300px] md:w-[200px] md:h-[400px] relative">
                <Image
                src={skin.image}
                alt={title}
                fill
                className="object-cover rounded-xl"
                />
            </div>
            </div>

            <div className="flex flex-col justify-center gap-6 text-text/80 text-lg lg:text-xl">
            <p className={skin.youtube ? "" : "my-auto"}>{description}</p>

            {skin.youtube && (
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-card">
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${skin.youtube}?rel=0&autoplay=0&controls=1`}
                    title="Skin Video"
                    allowFullScreen
                    className="w-full h-full"
                />
                </div>
            )}
            </div>
        </div>

        {skin.marketplace_url && (
            <div className="text-center mt-10 text-xl [&>a]:px-10 [&>a]:py-4 [&>a]:text-xl [&>a]:rounded-full [&>a]:font-semibold">
            <RexButton href={skin.marketplace_url}>{t("MapDetailPage.ctaGetNow")}</RexButton>
            </div>
        )}

        <div className="text-center text-xl mt-10">
            <RexButton href={`/${locale}/skins`}>
            {t("MapDetailPage.back")}
            </RexButton>
        </div>
        </main>
    );
}
