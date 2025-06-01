"use client";
import { useTranslations } from "next-intl";

export default function TermsPage() {
    const t = useTranslations("TermsPage");

    return (
        <main className="min-h-screen max-w-screen-xl mx-auto px-6 py-16">
            <div className="bg-surfaceAlt p-8 rounded-2xl shadow max-w-3xl mx-auto">
                <h1 className="text-3xl font-heading text-text mb-6 text-center">
                {t("title")}
                </h1>

                <p className="text-text/70 mb-4">{t("intro1")}</p>
                <p className="text-text/70 mb-4">{t("intro2")}</p>
                <p className="text-text/70 mb-4">{t("definitions")}</p>
                <p className="text-text/70 mb-4">{t("changes")}</p>
                <p className="text-text/70 mb-4">{t("contact")}</p>
            </div>
        </main>
    );
}
