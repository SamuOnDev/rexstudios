export default function AboutPreview() {
    return (
        <section className="bg-surfaceAlt px-6 py-16 rounded-2xl shadow max-w-screen-xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-text mb-4">
            Who we are
        </h2>
        <p className="text-lg text-text/70 mb-6 max-w-2xl mx-auto">
            We are a creative team passionate about designing custom Minecraft maps for creators and communities. Focused on quality, creativity and collaboration.
        </p>
        <a
            href="/about"
            className="inline-block px-6 py-3 rounded-full font-medium text-white transition-all duration-300 border-2 border-transparent bg-secondary hover:bg-secondaryDark bg-opacity-90 hover:shadow-xl hover:border-green-400"
        >
            Read more
        </a>
        </section>
    );
}
