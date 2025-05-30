import { Outfit, Inter } from 'next/font/google'
import '@/styles/globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
    children
    }: {
    children: React.ReactNode
    }) {
    return (
        <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
        <body className="relative">
            {/* Fondo decorativo */}
            <div
            className={`absolute inset-0 z-0 pointer-events-none opacity-[0.50] transition-all duration-700 ease-out
            bg-[url('/images/bg-minecraft.png')] bg-fixed bg-no-repeat
            bg-center md:bg-cover sm:bg-[length:auto_130%] sm:bg-top`}
            ></div>

            <div className="relative z-10">{children}</div>
        </body>
        </html>
    )
}
