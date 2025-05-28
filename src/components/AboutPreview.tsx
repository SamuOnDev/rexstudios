import RexButton from "@/components/RexButton";

export function AboutPreview() {
    return (
        <section className="bg-surfaceAlt px-4 sm:px-6 md:px-8 py-12 sm:py-16 rounded-2xl shadow-lg shadow-black/20 max-w-screen-xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-text mb-4">Who we are</h2>
        <p className="text-base sm:text-lg text-text/70 mb-6 max-w-2xl mx-auto">
            We are a creative team passionate about designing custom Minecraft maps for creators and communities. Focused on quality, creativity and collaboration.
        </p>
        <RexButton href="/about">Read more</RexButton>
        </section>
    );
}