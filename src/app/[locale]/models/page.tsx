import Image from "next/image"
import { getTranslations } from "next-intl/server"
import Reveal from "@/components/shared/Reveal"
import models from "@/data/models.json"
import Link from "next/link"

export default async function ModelsPage() {
    const t = await getTranslations("ModelsPage")

    return (
        <main className="min-h-screen w-full py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-screen-xl mx-auto bg-surfaceAlt rounded-2xl shadow-card py-12 md:py-20 px-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-center mb-12">
            {t("title")}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
                <Reveal key={index} delay={index * 0.1}>
                    <Link
                        href={`/models/${model.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                        className="relative group overflow-hidden rounded-2xl shadow-card transition-transform duration-300 hover:scale-105 block"
                    >
                        <div className="relative w-full max-w-[750px] aspect-square mx-auto">
                            <Image
                                src={model.image}
                                alt={model.name}
                                fill
                                className="object-cover rounded-2xl"
                            />
                            <div className="bg-black/30 text-white py-2 text-lg font-medium text-center absolute bottom-0 left-0 right-0 z-10 rounded-b-2xl">
                                {model.name}
                            </div>
                            <div className="absolute inset-0 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-base px-6 text-center z-20 rounded-2xl">
                                {model.description}
                            </div>
                        </div>
                    </Link>
                </Reveal>
            ))}
            </div>
        </div>
        </main>
    )
}
