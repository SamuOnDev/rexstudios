import Image from "next/image";

export default function AboutPage() {
    const founders = [
        {
        name: "Finn",
        avatar: "/images/finn.png",
        },
        {
        name: "Jake",
        avatar: "/images/jake.png",
        },
    ];

    return (
        <main className="min-h-screen max-w-screen-xl mx-auto px-6 py-16">
            <section className="bg-surfaceAlt py-16 px-6 rounded-2xl shadow mb-12">
                <h1 className="text-4xl md:text-5xl font-heading text-text mb-8 text-center">
                    About RexStudios
                </h1>

                <div className="text-lg text-text/80 max-w-3xl mx-auto mb-16 text-center">
                    <p className="mb-4">
                    RexStudios is a creative collective focused on building immersive and
                    customized Minecraft maps for content creators, brands and gaming
                    communities. We believe in quality, creativity and the power of
                    collaboration.
                    </p>
                    <p>
                    Since our founding, we’ve worked with notable creators to deliver
                    high-quality, playable experiences that inspire imagination and
                    storytelling in Minecraft.
                    </p>
                </div>
            </section>
            <section className="py-16 px-6">
                <h2 className="text-3xl font-heading text-text mb-6 text-center">
                    Our Founders
                </h2>

                <div className="flex flex-wrap justify-center gap-10">
                    {founders.map((person) => (
                    <div key={person.name} className="text-center group">
                        <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg mx-auto transition transform group-hover:scale-105 group-hover:shadow-xl">
                            <Image
                                src={person.avatar}
                                alt={person.name}
                                width={144}
                                height={144}
                                className="w-full h-full object-cover"
                        />
                        </div>
                        <p className="mt-3 text-text text-lg font-medium">
                        {person.name}
                        </p>
                    </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
