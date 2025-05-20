import Image from "next/image";

const skins = [
        { name: "Knight Skin", image: "/images/skins/skin001.png" },
        { name: "Mage Skin", image: "/images/skins/skin002.png" },
        { name: "Rogue Skin", image: "/images/skins/skin003.png" },
        { name: "Paladin Skin", image: "/images/skins/skin004.png" },
    ];

export default function SkinsPreview() {
    return (
        <section className="bg-surfaceAlt px-6 py-16 rounded-2xl shadow max-w-screen-xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-text mb-10">
                Featured Skins
            </h2>

            <div className="flex justify-center gap-8 mb-10 flex-wrap">
                {skins.map((skin) => (
                <div
                    key={skin.name}
                    className="w-[150px] h-[300px] overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
                >
                    <Image
                    src={skin.image}
                    alt={skin.name}
                    width={150}
                    height={300}
                    className="w-full h-full object-cover"
                    />
                </div>
                ))}
            </div>

            <a
                href="/skins"
                className="inline-block px-6 py-3 rounded-full font-medium text-white transition-all duration-300 border-2 border-transparent bg-secondary hover:bg-secondaryDark bg-opacity-90 hover:shadow-xl hover:border-green-400"
            >
                View all skins
            </a>
        </section>
    );
}
