import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {}
  }
};

const withNextIntl = createNextIntlPlugin(); // Detecta src/i18n/request.ts por defecto
export default withNextIntl(nextConfig);
