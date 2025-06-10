import Image from "next/image";
import Link from "next/link";
import skins from "@/data/skins.json";

export default function SkinsPage() {
    return (
        <main className="min-h-screen w-full py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-screen-xl mx-auto bg-surfaceAlt rounded-2xl shadow-card py-12 md:py-20 px-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-center mb-12">Skins</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                

            {skins.map((skin) => (
                <Link key={skin.slug} href={`/skins/${skin.slug}`} className="group">
                <Image
                    src={`/previews/${skin.slug}.png`} // Miniatura generada
                    alt={typeof skin.name === "string" ? skin.name : skin.name["en"]}
                    width={150}
                    height={300}
                    className="object-cover rounded-xl group-hover:scale-105 transition-all duration-300"
                />
                <p>{typeof skin.name === "string" ? skin.name : skin.name["en"]}</p>
                </Link>
            ))}
            </div>
        </div>
        </main>
    );
}
