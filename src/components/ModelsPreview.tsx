import Image from "next/image";
import RexButton from "@/components/RexButton";

const models = [
    {
        name: "Dragon Statue",
        image: "/images/models/model001.png",
        description: "A powerful and ancient dragon sculpture."
    },
    {
        name: "Floating Temple",
        image: "/images/models/model002.png",
        description: "A mystical temple suspended in the sky."
    },
    {
        name: "Steampunk Ship",
        image: "/images/models/model003.png",
        description: "An airship designed with intricate steampunk detail."
    },
    {
        name: "Sky Fortress",
        image: "/images/models/model004.png",
        description: "A fortified base built high among the clouds."
    },
];

export default function ModelsPreview() {
    return (
        <section className="bg-surfaceAlt px-6 py-16 rounded-2xl shadow-lg shadow-black/20 max-w-screen-xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-text mb-10">
            Featured Models
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {models.map((model, index) => (
            <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
                >
                <Image
                    src={model.image}
                    alt={model.name}
                    width={1280}
                    height={720}
                    className="w-full h-auto object-cover"
                />
                <div className="bg-black/30 text-white py-2 text-lg font-medium text-center relative z-10">
                    {model.name}
                </div>

                {/* Overlay descriptivo */}
                <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-sm px-6 text-center z-20">
                    {model.description}
                </div>
            </div>
            ))}
        </div>
        <RexButton href="/models">View all models</RexButton>
        </section>
    );
}
