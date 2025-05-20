import Image from "next/image";

const maps = [
    {
        id: 1,
        name: "Crystal World",
        image: "/images/maps/map1.png",
        link: "/maps/map1",
        description: "Explore dazzling crystals and underground ruins in this fantasy map."
    },
    {
        id: 2,
        name: "Desert Raid",
        image: "/images/maps/map2.png",
        link: "/maps/map2",
        description: "Explore dazzling crystals and underground ruins in this fantasy map."
    },
    {
        id: 3,
        name: "Sky Islands",
        image: "/images/maps/map3.png",
        link: "/maps/map3",
        description: "Explore dazzling crystals and underground ruins in this fantasy map."
    },
    {
        id: 4,
        name: "Jungle Escape",
        image: "/images/maps/map4.png",
        link: "/maps/map4",
        description: "Explore dazzling crystals and underground ruins in this fantasy map."
    },
    {
        id: 5,
        name: "Frozen Depths",
        image: "/images/maps/map5.png",
        link: "/maps/map5",
        description: "Explore dazzling crystals and underground ruins in this fantasy map."
    },
    {
        id: 6,
        name: "Inferno Citadel",
        image: "/images/maps/map6.png",
        link: "/maps/map6",
        description: "Explore dazzling crystals and underground ruins in this fantasy map."
    },
];

export default function MapGalleryPreview() {
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-text mb-10">
            Featured Maps
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {maps.map((map) => (
            <a
            href={map.link}
            key={map.id}
            className="relative group rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
            >
            <Image
                src={map.image}
                alt={map.name}
                width={800}
                height={400}
                className="w-full h-56 object-cover"
            />

            {/* Texto flotante centrado (solo en hover) */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <p className="text-white text-sm text-center">
                {map.description}
                </p>
            </div>

            {/* Nombre del mapa siempre visible abajo */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/30 px-4 py-2">
                <h3 className="text-white text-lg font-semibold">
                {map.name}
                </h3>
            </div>
            </a>
            ))}
        </div>

        <a
        href="/maps"
        className="inline-block px-6 py-3 rounded-full font-medium text-white transition-all duration-300 border-2 border-transparent bg-secondary hover:bg-secondaryDark bg-opacity-90 hover:shadow-xl hover:border-green-400"
        >
        View all maps
        </a>
        </section>
    );
}
