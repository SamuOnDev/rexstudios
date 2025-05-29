import Image from "next/image";
import RexButton from "@/components/RexButton";
import clients from "@/data/clients-preview.json";

export function ClientsPreview() {
    return (
    <section className="bg-surfaceAlt px-4 sm:px-6 md:px-8 py-12 md:py-20 rounded-2xl shadow-card max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-center mb-8">Our Clients</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
            {clients.map((client) => (
            <div
                key={client.name}
                className="w-28 h-28 rounded-full overflow-hidden shadow-card transition-transform duration-300 hover:scale-105 hover:shadow-hover"
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
