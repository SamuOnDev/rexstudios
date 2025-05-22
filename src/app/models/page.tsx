import Image from "next/image";

const models = [
    {
        id: 1,
        name: "Crystal Portal",
        image: "/images/models/model001.png",
        description: "A mystic gateway to unknown realms.",
        link: "/models/model1"
    },
    {
        id: 2,
        name: "Sky Fortress",
        image: "/images/models/model002.png",
        description: "A defensive floating structure high in the clouds.",
        link: "/models/model2"
    },
    {
        id: 3,
        name: "Inferno Altar",
        image: "/images/models/model003.png",
        description: "A fiery ritual space with ancient lava runes.",
        link: "/models/model3"
    },
    {
        id: 4,
        name: "Magic Tower",
        image: "/images/models/model004.png",
        description: "An arcane mage's home filled with secrets.",
        link: "/models/model4"
    },
    {
        id: 5,
        name: "Super Tower",
        image: "/images/models/model005.png",
        description: "An arcane mage's home filled with secrets.",
        link: "/models/model4"
    },
    {
        id: 6,
        name: "Tuntuntuntun Saur",
        image: "/images/models/model006.png",
        description: "An arcane mage's home filled with secrets.",
        link: "/models/model4"
    },
    {
        id: 7,
        name: "Bomardilo Cocodrilo",
        image: "/images/models/model007.png",
        description: "An arcane mage's home filled with secrets.",
        link: "/models/model4"
    }
];

export default function ModelsPage() {
    return (
        <main className="min-h-screen max-w-screen-xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-heading text-text mb-12 text-center">
            Our Models
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {models.map((model) => (
            <a
                href={model.link}
                key={model.id}
                className="group overflow-hidden rounded-2xl shadow-lg transform transition-all hover:scale-[1.02]"
            >
                <div className="relative w-full aspect-video">
                <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-white text-sm text-center">{model.description}</p>
                </div>
                </div>
                <div className="bg-black/80 text-white py-2 text-center font-medium">
                {model.name}
                </div>
            </a>
            ))}
        </div>
        </main>
    );
}
