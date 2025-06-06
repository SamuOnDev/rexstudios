"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations("ContactPage");
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        portfolio: "",
        discord: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Message submitted (mock).");
    };

    return (
        <main className="min-h-screen max-w-screen-xl mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-heading text-text mb-10 text-center">
                {t("title")}
            </h1>

            <div className="bg-surfaceAlt p-8 rounded-2xl shadow max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
                            {t("name")}
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md border border-gray-300 text-text bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                            {t("email")}
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md border border-gray-300 text-text bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="discord" className="block text-sm font-medium text-text mb-1">
                            {t("discord")}
                        </label>
                        <input
                            type="text"
                            name="discord"
                            id="discord"
                            value={form.discord}
                            onChange={handleChange}
                            placeholder="user"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 text-text bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="portfolio" className="block text-sm font-medium text-text mb-1">
                            {t("portfolio")}
                        </label>
                        <input
                            type="url"
                            name="portfolio"
                            id="portfolio"
                            value={form.portfolio}
                            onChange={handleChange}
                            placeholder="https://your.site"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 text-text bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text mb-1">
                            {t("message")}
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            required
                            className="w-full px-4 py-2 rounded-md border border-gray-300 text-text bg-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-secondary hover:bg-opacity-90 text-white font-medium px-6 py-3 rounded-full transition border-2 border-transparent hover:bg-secondaryDark shadow-xl hover:border-green-400"
                    >
                        {t("submit")}
                    </button>
                </form>
            </div>
        </main>
    );
}
