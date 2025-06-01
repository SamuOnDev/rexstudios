import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import MapDetailSlider from "@/components/MapDetailSlider";
import RexButton from "@/components/RexButton";
import maps from "@/data/maps-full.json";

interface PageProps {
    params: {
        slug: string;
        locale: string;
    };
}

export default async function Page({ params: { slug, locale } }: PageProps) {
    const t = await getTranslations({ locale });

    const map = maps.find((m) => m.slug === slug);
    if (!map) return notFound();

    const title =
        typeof map.name === "string"
            ? map.name
            : map.name[locale as keyof typeof map.name] || map.name["en"];

    const longDescription =
        typeof map.longDescription === "string"
            ? map.longDescription
            : map.longDescription[locale as keyof typeof map.longDescription] || map.longDescription["en"];

    const sliderImages = (map.slider || []).map((img: string, i: number) => ({
        src: img,
        alt: `${title} image ${i + 1}`,
    }));

    return (
        <main className="p-7">
            <h1 className="text-5xl font-bold mb-4 text-center">{title}</h1>

            <MapDetailSlider images={sliderImages} />

            <section className="max-w-7xl mx-auto bg-surfaceAlt rounded-2xl shadow-card px-4 sm:px-6 md:px-8 py-8 text-text/80">
                <p className="text-lg lg:text-xl lg:leading-loose leading-relaxed">
                    {longDescription}
                </p>
            </section>

            {map.marketplace_url && (
                <div className="text-center mt-10 text-xl [&>a]:px-10 [&>a]:py-4 [&>a]:text-xl [&>a]:rounded-full [&>a]:font-semibold">
                    <RexButton href={map.marketplace_url} className="text-xl px-10 py-5">
                        {t("MapDetailPage.ctaGetNow")}
                    </RexButton>
                </div>
            )}

            {map.youtube && (
                <div className="aspect-video max-w-screen-xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-card">
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${map.youtube}?rel=0&autoplay=0&controls=1`}
                        title="Map Video"
                        allowFullScreen
                        className="w-full h-full"
                    />
                </div>
            )}

            <div className="text-center text-xl mt-10">
                <RexButton href={`/${locale}/maps`}>
                    {t("MapDetailPage.back")}
                </RexButton>
            </div>
        </main>
    );
}
