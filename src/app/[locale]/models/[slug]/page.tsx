'use client';

import { useParams, notFound } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import models from '@/data/models.json';
import ModelViewer from '@/components/ModelViewer';
import Reveal from '@/components/shared/Reveal';
import RexButton from '@/components/RexButton';
import BackButton from '@/components/BackButton';

export default function ModelDetailPage() {
    const params = useParams();
    const locale = useLocale();
    const t = useTranslations('ModelDetailPage');

    const model = Array.isArray(models)
        ? models.find((m) => m.slug === params.slug)
        : null;

    if (!model) notFound();

    const name =
        typeof model.name === 'string'
        ? model.name
        : model.name[locale as keyof typeof model.name] || model.name['en'];

    const description =
        typeof model.description === 'string'
        ? model.description
        : model.description[locale as keyof typeof model.description] ||
            model.description['en'];

    return (
        <main className="min-h-screen w-full py-16 px-4 sm:px-6 md:px-8">
        {/* Visor 3D fuera del marco blanco */}
        <div className="w-full max-w-screen-xl mx-auto mb-12">
            <div className="relative aspect-video rounded-2xl overflow-hidden p-4 sm:p-6">
            <div className="flex items-center justify-centeritems-center w-full h-full bg-white rounded-xl overflow-hidden ">
                <ModelViewer modelUrl={model.modelPath} />
            </div>
            </div>
        </div>

        {/* Contenido en marco blanco como el resto del sitio */}
        <div className="max-w-screen-xl mx-auto bg-surfaceAlt rounded-2xl shadow-card py-12 md:py-20 px-6 flex flex-col items-center">
            <Reveal>
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold mb-6 text-center">
                {name}
            </h1>
            </Reveal>
            <Reveal delay={0.2}>
            <div className="text-base text-text/80 text-center mb-8 max-w-xl mx-auto">
                {description}
            </div>
            </Reveal>
            <Reveal delay={0.3}>
            <div className="text-center">
                {model.marketplace_url && (
                <RexButton
                    href={model.marketplace_url}
                    target="_blank"
                >
                    {t('viewMarketplace')}
                </RexButton>
                )}
            </div>
            </Reveal>
            <Reveal delay={0.4}>
                <div className="mt-6 text-center">
                    <BackButton section="models" />
                </div>
            </Reveal>
        </div>
        </main>
    );
}
