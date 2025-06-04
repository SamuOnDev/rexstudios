import Image from "next/image"
import { getTranslations } from "next-intl/server"
import Reveal from "@/components/shared/Reveal"
import skins from "@/data/skins.json"
import Link from "next/link"

export default async function SkinsPage() {
    const t = await getTranslations("SkinsPage")

    return (
        <main className="min-h-screen w-full py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-screen-xl mx-auto bg-surfaceAlt rounded-2xl shadow-card py-12 md:py-20 px-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-center mb-12">
            {t("title")}
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skins.map((skin, index) => (
                <Reveal key={index} delay={index * 0.1}>
                <Link
                    href={`/skins/${skin.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                    className="relative group overflow-hidden rounded-2xl shadow-card transition-transform duration-300 hover:scale-105 block"
                >
                    <div className="relative w-full aspect-[1/2] max-w-[300px] mx-auto">
                    <Image
                        src={skin.image}
                        alt={skin.name}
                        fill
                        className="object-cover rounded-2xl"
                    />
                    </div>
                </Link>
                </Reveal>
            ))}
            </div>
        </div>
        </main>
    )
}
