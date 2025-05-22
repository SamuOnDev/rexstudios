export default function ContactPreview() {
    return (
        <section className="bg-surfaceAlt px-6 py-16 rounded-2xl shadow-lg shadow-black/20 max-w-screen-xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-text mb-4">
            Get in touch
        </h2>
        <p className="text-lg text-text/70 mb-6 max-w-2xl mx-auto">
            If you&apos;re a creator or brand looking to collaborate on your next Minecraft project, we&apos;re here to help.
        </p>
        <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-full font-medium text-white transition-all duration-300 border-2 border-transparent bg-secondary hover:bg-secondaryDark bg-opacity-90 hover:shadow-xl hover:border-green-400"
        >
            Contact us
        </a>
        </section>
    );
}
