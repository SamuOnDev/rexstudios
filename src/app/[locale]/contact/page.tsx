'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
    const t = useTranslations('ContactPage');
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        portfolio: '',
        discord: ''
    });
    const [status, setStatus] = useState<Status>('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });
        if (!res.ok) throw new Error(await res.text());
        setStatus('success');
        setForm({ name: '', email: '', message: '', portfolio: '', discord: '' });
        } catch (err) {
        console.error(err);
        setStatus('error');
        }
    };

    return (
        <main className="mx-auto max-w-3xl p-6">
        <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
        <form onSubmit={handleSubmit} className="space-y-6">

            <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
                {t('name')}
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 shadow-sm border rounded-lg focus:ring-2 focus:ring-secondary"
            />
            </div>

            <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t('email')}
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 shadow-sm border rounded-lg focus:ring-2 focus:ring-secondary"
            />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="portfolio" className="block text-sm font-medium mb-1">
                {t('portfolio')}
                </label>
                <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={form.portfolio}
                onChange={handleChange}
                className="w-full px-4 py-2 shadow-sm border rounded-lg focus:ring-2 focus:ring-secondary"
                />
            </div>
            <div>
                <label htmlFor="discord" className="block text-sm font-medium mb-1">
                {t('discord')}
                </label>
                <input
                type="text"
                id="discord"
                name="discord"
                value={form.discord}
                onChange={handleChange}
                className="w-full px-4 py-2 shadow-sm border rounded-lg focus:ring-2 focus:ring-secondary"
                />
            </div>
            </div>

            <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
                {t('message')}
            </label>
            <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 shadow-sm border rounded-lg focus:ring-2 focus:ring-secondary"
            />
            </div>

            <div>
            <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-2 bg-secondary rounded-lg text-white hover:bg-secondary-dark transition disabled:opacity-50"
            >
                {status === 'sending' ? t('sending') : t('submit')}
            </button>
            {status === 'success' && (
                <p className="mt-2 text-green-600">{t('success')}</p>
            )}
            {status === 'error' && (
                <p className="mt-2 text-red-600">{t('error')}</p>
            )}
            </div>

        </form>
        </main>
    );
}