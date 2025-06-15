// src/app/[locale]/sorpresa/page.tsx
import Image from 'next/image';

export default function SorpresaPage() {

    return (
        <main className="h-screen flex flex-col items-center justify-center bg-pink-50">
        {/* Si quieres usar una imagen local, ponla en public/heart.png */}
        <Image
            src="/images/heart.png"
            alt="Corazón"
            width={150}
            height={150}
            priority
        />
        <h1 className="mt-6 text-4xl font-bold text-pink-600">
            I love you Honey ❤️
        </h1>
        </main>
    );
}
