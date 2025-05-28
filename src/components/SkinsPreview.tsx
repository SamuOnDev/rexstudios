import Image from "next/image";
import RexButton from "@/components/RexButton";

const skins = [
        { name: "Knight Skin", image: "/images/skins/skin001.png" },
        { name: "Mage Skin", image: "/images/skins/skin002.png" },
        { name: "Rogue Skin", image: "/images/skins/skin003.png" },
        { name: "Paladin Skin", image: "/images/skins/skin004.png" },
    ];

export function SkinsPreview() {
    return (
        <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-16 max-w-screen-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Skins</h2>
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
