import RexButton from "@/components/RexButton";

export function ContactPreview() {
    return (
        <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-16 max-w-screen-xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg text-text/70 mb-6 max-w-2xl mx-auto">
            If you&apos;re a creator or brand looking to collaborate on your next Minecraft project, we&apos;re here to help.
        </p>
        <RexButton href="/contact">Contact us</RexButton>
        </section>
    );
}
