import Image from "next/image";

const models = [
    { name: "Dragon Statue", image: "/images/models/model001.png" },
    { name: "Floating Temple", image: "/images/models/model002.png" },
    { name: "Steampunk Ship", image: "/images/models/model003.png" },
    { name: "Sky Fortress", image: "/images/models/model004.png" },
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
                className="overflow-hidden rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
            >
                <Image
                src={model.image}
                alt={model.name}
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
                />
                <div className="bg-black/60 text-white py-2 text-lg font-medium text-center">
                {model.name}
                </div>
            </div>
            ))}
        </div>

        <a
            href="/models"
            className="inline-block px-6 py-3 rounded-full font-medium text-white transition-all duration-300 border-2 border-transparent bg-secondary hover:bg-secondaryDark bg-opacity-90 hover:shadow-xl hover:border-green-400"
        >
            View all models
        </a>
        </section>
    );
}
