"use client";
import { useTranslations } from "next-intl";

type Section = { heading: string; body: string };

export default function TermsPage() {
    const t = useTranslations("TermsPage");

    // Obtiene el array tal cual está definido en el JSON
    const sections = t.raw("sections") as Section[];

    return (
        <main className="min-h-screen max-w-screen-xl mx-auto px-6 py-16">
            <div className="bg-surfaceAlt p-8 rounded-2xl shadow max-w-3xl mx-auto">
                <h1 className="text-3xl font-heading text-text mb-6 text-center">
                {t("title")}
                </h1>

                <p className="text-text/70 md:text-justify mb-4">{t("intro1")}</p>
                <p className="text-text/70 md:text-justify mb-4">{t("intro2")}</p>
                <p className="text-text/70 md:text-justify mb-4">{t("definitions")}</p>

                {/* Muestra los 14 apartados */}
                {sections.map((s, i) => (
                <div key={i} className="mb-6">
                    <h2 className="font-semibold text-text/90 md:text-justify mb-1">{s.heading}</h2>
                    <p className="text-text/70 md:text-justify">{s.body}</p>
                </div>
                ))}

                <p className="text-text/70 md:text-justify mb-4">{t("changes")}</p>
                <p className="text-text/70 md:text-justify mb-4">{t("contact")}</p>
            </div>
        </main>
    );
}

