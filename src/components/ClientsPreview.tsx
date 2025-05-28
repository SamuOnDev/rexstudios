import Image from "next/image";
import RexButton from "@/components/RexButton";

const clients = [
    { name: "YT Creator 1", avatar: "/images/creators/creator1.png" },
    { name: "YT Creator 2", avatar: "/images/creators/creator2.png" },
    { name: "YT Creator 3", avatar: "/images/creators/creator3.png" },
    { name: "YT Creator 5", avatar: "/images/creators/creator5.png" },
];

export function ClientsPreview() {
    return (
        <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-16 max-w-screen-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Our Clients</h2>
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
            <RexButton href="/clients">View all collaborators</RexButton>
        </section>
    );
}
