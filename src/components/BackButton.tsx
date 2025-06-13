'use client';

import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import RexButton from './RexButton';

interface Props {
    section: 'home' | 'models' | 'skinpacks' | 'maps';
}

export default function BackButton({ section }: Props) {
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations('Shared');

    return (
        <RexButton onClick={() => router.push(section === 'home' ? `/${locale}` : `/${locale}/${section}`)}>
        {t('back')}
        </RexButton>
    );
}
