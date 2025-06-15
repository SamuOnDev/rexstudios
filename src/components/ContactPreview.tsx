import RexButton from "@/components/RexButton";
import { useTranslations } from "next-intl";

export function ContactPreview() {
    const t = useTranslations("ContactPreview");
    return (
        <section className="bg-surfaceAlt px-4 sm:px-6 md:px-8 py-12 md:py-20 rounded-2xl shadow-card max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-center mb-8">{t("title")}</h2>
            <p className="text-lg text-text/60 mb-6 max-w-2xl mx-auto">
                {t("description")}
            </p>
            <div className="max-w-md mx-auto">
    <RexButton href="/contact">{t("cta")}</RexButton>
</div>

        </section>
    );
}