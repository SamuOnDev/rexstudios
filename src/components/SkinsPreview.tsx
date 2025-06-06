import Image from "next/image";
import RexButton from "@/components/RexButton";
import { useLocale } from "next-intl";
import skins from "@/data/skins.json";

const featuredSkins = skins.filter(skin => skin.featured);

export function SkinsPreview() {
    const locale = useLocale();

    return (
        <section className="bg-surfaceAlt px-4 sm:px-6 md:px-8 py-12 md:py-20 rounded-2xl shadow-card max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-center mb-8">Skins</h2>
            <div className="flex justify-center gap-6 md:gap-8 mb-10 flex-wrap">
                {featuredSkins.map((skin, index) => {
                    const name = typeof skin.name === "string"
                    ? skin.name
                    : skin.name[locale as keyof typeof skin.name] || skin.name["en"];
                    return (
                    <div
                        key={`${skin.slug}-${index}`}
                        className="w-[150px] h-[300px] overflow-hidden rounded-xl shadow-card transition-all duration-300 hover:scale-105"
                    >
                        <Image
                            src={skin.image}
                            alt={name}
                            width={150}
                            height={300}
                            className="object-cover w-full h-full"
                        />
                    </div>
                );
            })}
            </div>
            <RexButton href="/skins">View all skins</RexButton>
        </section>
    );
}
