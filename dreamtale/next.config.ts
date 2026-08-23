import type { NextConfig } from 'next';

/**
 * `ARTIFACT_BUILD=1` přepne projekt do statického exportu, ze kterého
 * `npm run build:single` složí jednosouborovou verzi hry ke sdílení.
 *
 * `STATIC_EXPORT=1` udělá totéž pro klasický hosting statických souborů
 * (GitHub Pages). Když web nesedí v kořeni domény, řekne se to přes
 * `NEXT_PUBLIC_BASE_PATH=/dreamtale` – tuhle předponu pak dostanou i cesty
 * ke kartám, service workeru a manifestu.
 */
const isArtifactBuild = process.env.ARTIFACT_BUILD === '1';
const isStaticExport = isArtifactBuild || process.env.STATIC_EXPORT === '1';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Repozitář obsahuje i statický web v kořeni – tímto zůstane trasování souborů v této aplikaci.
  outputFileTracingRoot: import.meta.dirname,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  ...(isStaticExport
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
