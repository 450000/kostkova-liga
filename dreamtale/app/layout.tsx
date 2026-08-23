import type { Metadata, Viewport } from 'next';
import { Fraunces, Nunito } from 'next/font/google';
import { BASE_PATH } from '@/lib/images/assets';
import { APP_CONFIG } from '@/lib/config';
import { ServiceWorkerRegistrar } from '@/components/ServiceWorkerRegistrar';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${APP_CONFIG.name} – ${APP_CONFIG.tagline}`,
  description: APP_CONFIG.description,
  applicationName: APP_CONFIG.name,
  manifest: `${BASE_PATH}/manifest.webmanifest`,
  appleWebApp: {
    capable: true,
    title: APP_CONFIG.shortName,
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: [{ url: `${BASE_PATH}/icons/icon.svg`, type: 'image/svg+xml' }],
    apple: [{ url: `${BASE_PATH}/icons/apple-touch-icon.png` }],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: APP_CONFIG.themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={APP_CONFIG.locale} className={`${fraunces.variable} ${nunito.variable}`}>
      <body className="antialiased">
        {children}
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
