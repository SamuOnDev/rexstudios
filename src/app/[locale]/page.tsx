'use client';
import { useTranslations } from 'next-intl';

import SwiperSlider from "@/components/SwiperSlider";
import { AboutPreview } from "@/components/AboutPreview";
import { MapGalleryPreview } from "@/components/MapGalleryPreview";
import { ClientsPreview } from "@/components/ClientsPreview";
import { SkinsPreview } from "@/components/SkinsPreview";
import { ModelsPreview } from "@/components/ModelsPreview";
import { ContactPreview } from "@/components/ContactPreview";

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-8 py-6 sm:py-8 lg:py-12">
      <section aria-label="intro" className="text-center mb-12">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="text-lg text-gray-600">{t('description')}</p>
      </section>

      <section className="rounded-2xl shadow-lg shadow-black/30 max-w-screen-xl mx-auto mb-16 lg:mb-28" aria-label="Main slider">
        <SwiperSlider />
      </section>

      <section className="max-w-screen-xl mx-auto mb-12 md:mb-20" aria-label="About section">
        <AboutPreview />
      </section>

      <section className="max-w-screen-xl mx-auto mb-12 md:mb-20" aria-label="Map gallery section">
        <MapGalleryPreview />
      </section>

      <section className="max-w-screen-xl mx-auto mb-12 md:mb-20" aria-label="Clients section">
        <ClientsPreview />
      </section>

      <section className="max-w-screen-xl mx-auto mb-12 md:mb-20" aria-label="Skins section">
        <SkinsPreview />
      </section>

      <section className="max-w-screen-xl mx-auto mb-12 md:mb-20" aria-label="Models section">
        <ModelsPreview />
      </section>

      <section className="max-w-screen-xl mx-auto mb-12 md:mb-20" aria-label="Contact section">
        <ContactPreview />
      </section>
    </main>
  );
}
