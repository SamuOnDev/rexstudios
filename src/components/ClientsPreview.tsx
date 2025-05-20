import Image from "next/image";

const clients = [
    { name: "YT Creator 1", avatar: "/images/creators/creator1.png" },
    { name: "YT Creator 2", avatar: "/images/creators/creator2.png" },
    { name: "YT Creator 3", avatar: "/images/creators/creator3.png" },
    { name: "YT Creator 5", avatar: "/images/creators/creator5.png" },
];

    export default function ClientsPreview() {
    return (
        <section className="bg-surfaceAlt px-6 py-16 rounded-2xl shadow max-w-screen-xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-text mb-10">
            Our Collaborators
        </h2>

        <div className="flex flex-wrap justify-center gap-10 mb-8">
            {clients.map((client) => (
            <div
                key={client.name}
                className="w-28 h-28 rounded-full overflow-hidden shadow-lg border-2 border-white transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
                <Image
                src={client.avatar}
                alt={client.name}
                width={112}
                height={112}
                className="w-full h-full object-cover"
                />
            </div>
            ))}
        </div>

        <a
            href="/clients"
            className="inline-block px-6 py-3 rounded-full font-medium text-white transition-all duration-300 border-2 border-transparent bg-secondary hover:bg-secondaryDark bg-opacity-90 hover:shadow-xl hover:border-green-400"
        >
            View all collaborators
        </a>
        </section>
    );
}
