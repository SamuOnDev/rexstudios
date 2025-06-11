import { NextRequest } from "next/server";
import createIntlMiddleware from 'next-intl/middleware';

/* 1.  Ajusta la lista a los idiomas que realmente tengas mensajes */
const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'es'],   // ← añade o quita los que proceda
    defaultLocale: 'en'
});

/* 2.  Delega en el middleware de next-intl */
export function middleware(request: NextRequest) {
    return intlMiddleware(request);
}

/* 3.  Limita las rutas en las que se aplica */
export const config = {
  matcher: [
    '/((?!api|_next|images|favicon.ico|assets|.*\\..*).*)'
  ]
}

