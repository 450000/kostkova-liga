import type { NextConfig } from 'next';

/**
 * `ARTIFACT_BUILD=1` přepne projekt do statického exportu, ze kterého
 * `npm run build:single` složí jednosouborovou verzi hry ke sdílení.
 */
const isArtifactBuild = process.env.ARTIFACT_BUILD === '1';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Repozitář obsahuje i statický web v kořeni – tímto zůstane trasování souborů v této aplikaci.
  outputFileTracingRoot: import.meta.dirname,
  ...(isArtifactBuild
    ? { output: 'export' as const }
    : {
        headers: async () => [
          {
            // Service worker musí být obsluhován z kořene bez agresivního cachování,
            // jinak se aktualizace hry nikdy nedostane k uživateli.
            source: '/sw.js',
            headers: [{ key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' }],
          },
        ],
      }),
};

export default nextConfig;
