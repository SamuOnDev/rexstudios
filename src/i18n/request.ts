import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  // Si no viene nada usamos 'en'
    const locale = (await requestLocale) ?? 'en';

    return {
        locale,
        // Carga los mensajes dinámicamente
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
