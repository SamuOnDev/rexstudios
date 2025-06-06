import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import skins from "@/data/skins.json";
import MapDetailSlider from "@/components/MapDetailSlider";
import RexButton from "@/components/RexButton";


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

    const sliderImages = (skin.slider || []).map((img: string, i: number) => ({
        src: img,
        alt: `${title} image ${i + 1}`,
    }));

    return (
        <main className="p-7">
        <h1 className="text-5xl font-bold mb-4 text-center">{title}</h1>

        <MapDetailSlider images={sliderImages} />

        <section className="max-w-7xl mx-auto bg-surfaceAlt rounded-2xl shadow-card px-4 sm:px-6 md:px-8 py-8 text-text/80">
            <p className="text-lg lg:text-xl lg:leading-loose leading-relaxed">{description}</p>
        </section>

        {skin.marketplace_url && (
            <div className="text-center mt-10 text-xl [&>a]:px-10 [&>a]:py-4 [&>a]:text-xl [&>a]:rounded-full [&>a]:font-semibold">
            <RexButton href={skin.marketplace_url}>{t("MapDetailPage.ctaGetNow")}</RexButton>
            </div>
        )}

        {skin.youtube && (
            <div className="aspect-video max-w-screen-xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-card">
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${skin.youtube}?rel=0&autoplay=0&controls=1`}
                title="Skin Video"
                allowFullScreen
                className="w-full h-full"
            />
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