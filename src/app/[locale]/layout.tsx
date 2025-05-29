import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { Outfit, Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import '@/styles/globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export default async function RootLayout({
    children,
    params
  }: {
      children: React.ReactNode;
      // params ahora es una promesa
      params: Promise<{ locale: string }>;
    }) {
    const { locale } = await params;
    let messages;
    try {
      messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale} className={`${outfit.variable} ${inter.variable}`}>
      <body className="relative">
        {/* Fondo decorativo */}
        <div
          className={`absolute inset-0 z-0 pointer-events-none opacity-[0.50] transition-all duration-700 ease-out
          bg-[url('/images/bg-minecraft.png')] bg-fixed bg-no-repeat
          bg-center md:bg-cover sm:bg-[length:auto_130%] sm:bg-top`}
        ></div>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="relative z-10">
            <Header />
            <main className="pt-60">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
