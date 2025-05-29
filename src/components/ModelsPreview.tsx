import Image from "next/image";
import RexButton from "@/components/RexButton";
import models from "@/data/models-preview.json";

export function ModelsPreview() {
    return (
        <section className="bg-surfaceAlt px-4 sm:px-6 md:px-8 py-12 md:py-20 rounded-2xl shadow-card max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-center mb-8">Custom Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {models.map((model, index) => (
                <div
                    key={index}
                    className="relative group overflow-hidden rounded-2xl shadow-card transition duration-300 hover:scale-105"
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
                    <div className="absolute inset-0 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-base px-6 text-center z-20">
                    {model.description}
                    </div>
                </div>
                ))}
            </div>
            <RexButton href="/models">View all models</RexButton>
        </section>
    );
}
