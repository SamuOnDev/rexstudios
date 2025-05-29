import Image from "next/image";
import RexButton from "@/components/RexButton";
import maps from "@/data/maps-preview.json";

export function MapGalleryPreview() {
    return (
        <section className="px-4 sm:px-6 md:px-8 py-12 md:py-20 max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-center mb-8">Map Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
                {maps.map((map) => (
                <a
                    href={map.link}
                    key={map.id}
                    className="relative group rounded-2xl overflow-hidden shadow-card transform transition-all duration-300 hover:scale-105"
                >
                    <Image
                    src={map.image}
                    alt={map.name}
                    width={800}
                    height={400}
                    className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <p className="text-white text-base text-center">
                        {map.description}
                    </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2">
                    <h3 className="text-white text-lg font-semibold">
                        {map.name}
                    </h3>
                    </div>
                </a>
                ))}
            </div>
            <RexButton href="/maps">View all maps</RexButton>
        </section>
    );
}
