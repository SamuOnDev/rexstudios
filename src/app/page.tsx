import SwiperSlider from "@/components/SwiperSlider";
import AboutPreview from "@/components/AboutPreview";
import MapGalleryPreview from "@/components/MapGalleryPreview";
import ClientsPreview from "@/components/ClientsPreview";
import ContactPreview from "@/components/ContactPreview";
import SkinsPreview from "@/components/SkinsPreview";
import ModelsPreview from "@/components/ModelsPreview";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-8">
      {/* <section className="mb-16">
        <h1 className="text-4xl font-heading font-semibold mb-4">Welcome to RexStudios</h1>
        <p className="text-lg text-text/70">Explore our Minecraft maps and creative projects.</p>
      </section> */}

      {/* Slider principal */}
      <section className="rounded-2xl shadow-lg shadow-black/30 max-w-screen-xl mx-auto mb-12">
        <SwiperSlider />
      </section>
      <AboutPreview />
      <MapGalleryPreview />
      <ClientsPreview />
      <SkinsPreview />
      <ModelsPreview />
      <ContactPreview />

      {/* Muestrario de colores */}
      {/* <section className="bg-surface p-6 rounded-2xl shadow mb-12">
        <h2 className="text-2xl font-heading mb-4">Color Palette</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl h-24 bg-secondary" />
          <div className="rounded-xl h-24 bg-blueAccent" />
          <div className="rounded-xl h-24 bg-purpleAccent" />
        </div>

        <h2 className="text-2xl font-heading mb-4">Gradient Variants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl h-24 bg-gradient-to-br from-secondary to-secondaryDark" />
          <div className="rounded-xl h-24 bg-gradient-to-br from-blueAccent to-blueAccentDark" />
          <div className="rounded-xl h-24 bg-gradient-to-br from-purpleAccent to-purpleAccentDark" />
        </div>
      </section> */}
    </main>
  );
}
