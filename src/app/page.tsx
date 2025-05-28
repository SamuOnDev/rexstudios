import SwiperSlider from "@/components/SwiperSlider";
import { AboutPreview } from "@/components/AboutPreview";
import { MapGalleryPreview } from "@/components/MapGalleryPreview";
import { ClientsPreview } from "@/components/ClientsPreview";
import { SkinsPreview } from "@/components/SkinsPreview";
import { ModelsPreview } from "@/components/ModelsPreview";
import { ContactPreview } from "@/components/ContactPreview";

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-8 py-6 sm:py-8 lg:py-12">

      {/* Slider principal */}
      <section className="rounded-2xl shadow-lg shadow-black/30 max-w-screen-xl mx-auto mb-16 lg:mb-28" aria-label="Main slider">
        <SwiperSlider />
      </section>

      {/* About section */}
      <section className="max-w-screen-xl mx-auto mb-12 md:mb-20" aria-label="About section">
        <AboutPreview />
      </section>

      {/* Map Gallery section */}
      <section className="max-w-screen-xl mx-auto mb-12 md:mb-20" aria-label="Map gallery section">
        <MapGalleryPreview />
      </section>

      {/* Clients section */}
      <section className="max-w-screen-xl mx-auto mb-12 md:mb-20" aria-label="Clients section">
        <ClientsPreview />
      </section>

      {/* Skins section */}
      <section className="max-w-screen-xl mx-auto mb-12 md:mb-20" aria-label="Skins section">
        <SkinsPreview />
      </section>

      {/* Models section */}
      <section className="max-w-screen-xl mx-auto mb-12 md:mb-20" aria-label="Models section">
        <ModelsPreview />
      </section>

      {/* Contact section */}
      <section className="max-w-screen-xl mx-auto mb-12 md:mb-20" aria-label="Contact section">
        <ContactPreview />
      </section>
    </main>
  );
}