import Image from "next/image";

const clients = [
    { name: "YT Creator 1", avatar: "/images/creators/creator1.png" },
    { name: "YT Creator 2", avatar: "/images/creators/creator2.png" },
    { name: "YT Creator 3", avatar: "/images/creators/creator3.png" },
    { name: "YT Creator 4", avatar: "/images/creators/creator4.png" },
    { name: "YT Creator 5", avatar: "/images/creators/creator5.png" },
    { name: "YT Creator 6", avatar: "/images/creators/creator6.png" },
    { name: "YT Creator 7", avatar: "/images/creators/creator7.png" },
    { name: "YT Creator 8", avatar: "/images/creators/creator8.png" }
];

export default function ClientsPage() {
    return (
        <main className="min-h-screen w-full py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-heading text-text mb-12">
            Who we&apos;ve worked with
            </h1>

            <div className="bg-surfaceAlt rounded-2xl shadow px-4 py-16">
            <div className="flex flex-wrap justify-center gap-y-10 gap-x-10">
                {clients.map((client, index) => (
                <div
                    key={client.name}
                    className={`w-28 h-28 rounded-full overflow-hidden shadow-lg border-2 border-white transition-transform duration-300 hover:scale-110 hover:shadow-2xl ${
                    index % 2 === 1 ? "mt-10" : ""
                    }`}
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
            </div>
        </div>
        </main>
    );
}
