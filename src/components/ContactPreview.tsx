import RexButton from "@/components/RexButton";

export default function ContactPreview() {
    return (
        <section className="bg-surfaceAlt px-6 py-16 rounded-2xl shadow-lg shadow-black/20 max-w-screen-xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-text mb-4">
            Get in touch
        </h2>
        <p className="text-lg text-text/70 mb-6 max-w-2xl mx-auto">
            If you&apos;re a creator or brand looking to collaborate on your next Minecraft project, we&apos;re here to help.
        </p>
        <RexButton href="/contact">Contact us</RexButton>
        </section>
    );
}
