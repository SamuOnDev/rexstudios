import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import Reveal from '@/components/shared/Reveal'

export default async function AboutPage() {
    const t = await getTranslations('AboutPage')
    
    console.log('📍 Cargando About desde [locale]/about/page.tsx');

    const founders = [
        { name: 'Finn', avatar: '/images/finn.png' },
        { name: 'Jake', avatar: '/images/jake.png' },
    ]

    return (
        <main className="min-h-screen max-w-screen-xl mx-auto px-6 py-16">
        <Reveal>
            <section className="bg-surfaceAlt py-16 px-6 rounded-2xl shadow mb-12">
            <h1 className="text-4xl md:text-5xl font-heading text-text mb-8 text-center">
                {t('title')}
            </h1>

            <div className="text-lg text-text/80 max-w-3xl mx-auto mb-16 text-center md:text-justify space-y-4">
                <p>{t('description1')}</p>
                <p>{t('description2')}</p>
            </div>
            </section>
        </Reveal>

        <Reveal delay={0.1}>
            <section className="py-16 px-6">
            <h2 className="text-3xl font-heading text-text mb-6 text-center">
                {t('foundersTitle')}
            </h2>

            <div className="flex flex-wrap justify-center gap-10">
                {founders.map((person) => (
                <div key={person.name} className="text-center group">
                    <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg mx-auto transition transform group-hover:scale-105 group-hover:shadow-xl">
                    <Image
                        src={person.avatar}
                        alt={person.name}
                        width={144}
                        height={144}
                        className="w-full h-full object-cover"
                    />
                    </div>
                    <p className="mt-3 text-text text-lg font-medium">{person.name}</p>
                </div>
                ))}
            </div>
            </section>
        </Reveal>
        </main>
    )
}
