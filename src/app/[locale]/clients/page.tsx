import Image from "next/image"
import { getTranslations } from "next-intl/server"
import Reveal from "@/components/shared/Reveal"
import clients from "@/data/clients.json"

export default async function ClientsPage() {
    const t = await getTranslations("ClientsPage")

    return (
        <main className="min-h-screen w-full py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-heading text-text mb-12">
            {t("title")}
            </h1>

            <Reveal>
            <div className="bg-surfaceAlt rounded-2xl shadow px-4 py-16">
                <div className="flex flex-wrap justify-center gap-y-10 gap-x-10">
                {clients.map((client, index) => (
                    <div key={client.name} className="flex flex-col items-center">
                        {index % 2 === 1 && (
                        <span className="text-base text-text mb-2 block">{client.name}</span>
                        )}

                        <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-28 h-28 rounded-full overflow-hidden shadow-lg border-2 border-white transition-transform duration-300 hover:scale-110 hover:shadow-2xl ${
                            index % 2 === 1 ? "mt-2" : "mb-2"
                        }`}
                        >
                        <Image
                            src={client.avatar}
                            alt={client.name}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover"
                        />
                        </a>

                        {index % 2 === 0 && (
                        <span className="text-base text-text mb-2 block">{client.name}</span>
                        )}
                    </div>
                ))}
                </div>
            </div>
            </Reveal>
        </div>
        </main>
    )
}
