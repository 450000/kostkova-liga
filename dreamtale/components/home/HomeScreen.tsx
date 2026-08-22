'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { APP_CONFIG } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import { IconButton } from '@/components/ui/IconButton';
import { Dialog } from '@/components/ui/Dialog';
import { HowToPlay } from '@/components/home/HowToPlay';

type HomeScreenProps = {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onNewGame: () => void;
};

export function HomeScreen({ soundEnabled, onToggleSound, onNewGame }: HomeScreenProps) {
  const [howToOpen, setHowToOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="scroll-soft flex h-full flex-col overflow-y-auto px-6 pb-10 pt-6">
      <div className="flex justify-end">
        <IconButton
          label={soundEnabled ? 'Vypnout zvuk' : 'Zapnout zvuk'}
          onClick={onToggleSound}
        >
          <span aria-hidden className="text-lg">
            {soundEnabled ? '🔊' : '🔇'}
          </span>
        </IconButton>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="animate-drift mb-8"
        >
          <Emblem />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-[clamp(2.4rem,11.5vw,4rem)] font-semibold tracking-[0.14em] text-text"
        >
          {APP_CONFIG.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-balance mt-4 max-w-xs text-base leading-relaxed text-muted"
        >
          {APP_CONFIG.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.6 }}
          className="mt-12 w-full max-w-xs"
        >
          <Button size="lg" full onClick={onNewGame}>
            Nová hra
          </Button>

          <div className="mt-6 flex items-center justify-center gap-6 text-sm">
            <button
              type="button"
              onClick={() => setHowToOpen(true)}
              className="text-muted underline-offset-4 transition-colors hover:text-text hover:underline"
            >
              Jak se hraje?
            </button>
            <button
              type="button"
              onClick={() => setSettingsOpen(true)}
              className="text-muted underline-offset-4 transition-colors hover:text-text hover:underline"
            >
              Nastavení
            </button>
          </div>
        </motion.div>
      </div>

      <p className="text-center text-xs tracking-[0.3em] text-muted/50 uppercase">
        Hra pro 1–12 snílků
      </p>

      <Dialog
        open={howToOpen}
        title="Jak se hraje?"
        onClose={() => setHowToOpen(false)}
      >
        <HowToPlay />
        <Button variant="primary" full onClick={() => setHowToOpen(false)}>
          Rozumím
        </Button>
      </Dialog>

      <Dialog
        open={settingsOpen}
        title="Nastavení"
        description="Počet hráčů, obrázků a bodování si nastavíte při zakládání hry."
        onClose={() => setSettingsOpen(false)}
      >
        <button
          type="button"
          onClick={onToggleSound}
          aria-pressed={soundEnabled}
          className="glass flex items-center justify-between rounded-[var(--radius-control)] px-5 py-4 text-left"
        >
          <span>
            <span className="block font-semibold text-text">Zvuky</span>
            <span className="text-sm text-muted">Jemné tóny při otočení karty</span>
          </span>
          <span aria-hidden className="text-xl">
            {soundEnabled ? '🔊' : '🔇'}
          </span>
        </button>
        <Button variant="primary" full onClick={() => setSettingsOpen(false)}>
          Hotovo
        </Button>
      </Dialog>
    </div>
  );
}

function Emblem() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden>
      <circle cx="60" cy="60" r="46" stroke="rgba(169,155,224,0.45)" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="34" stroke="rgba(245,199,101,0.35)" strokeWidth="1.5" />
      <path
        d="M74 30c-18 6-30 20-30 34 0 15 12 26 30 28-24 4-42-10-42-30S50 26 74 30Z"
        fill="var(--secondary)"
      />
      <circle cx="88" cy="40" r="3" fill="var(--primary)" />
      <circle cx="34" cy="82" r="2.5" fill="var(--accent)" />
      <circle cx="92" cy="76" r="2" fill="var(--primary)" />
    </svg>
  );
}
