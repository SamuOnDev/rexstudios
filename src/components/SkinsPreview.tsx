import Image from "next/image";
import RexButton from "@/components/RexButton";

const skins = [
        { name: "Knight Skin", image: "/images/skins/skin001.png" },
        { name: "Mage Skin", image: "/images/skins/skin002.png" },
        { name: "Rogue Skin", image: "/images/skins/skin003.png" },
        { name: "Paladin Skin", image: "/images/skins/skin004.png" },
    ];

export default function SkinsPreview() {
    return (
        <section className="bg-surfaceAlt px-6 py-16 rounded-2xl shadow-lg shadow-black/20 max-w-screen-xl mx-auto mb-12 text-center">
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
            <RexButton href="/skins">View all skins</RexButton>
        </section>
    );
}
