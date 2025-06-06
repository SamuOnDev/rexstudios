import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }> // ✅ IMPORTANTE: params es una promesa
}) {
  const { locale } = await params // ✅ DESTRUCTURA CON AWAIT

  const messages = await getMessages({ locale }).catch(() => notFound())

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
        <main className="pt-60">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  )
}
