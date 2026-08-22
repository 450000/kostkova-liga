import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Repozitář obsahuje i statický web v kořeni – tímto zůstane trasování souborů v této aplikaci.
  outputFileTracingRoot: import.meta.dirname,
  headers: async () => [
    {
      // Service worker musí být obsluhován z kořene bez agresivního cachování,
      // jinak se aktualizace hry nikdy nedostane k uživateli.
      source: '/sw.js',
      headers: [{ key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' }],
    },
  ],
};

export default nextConfig;
