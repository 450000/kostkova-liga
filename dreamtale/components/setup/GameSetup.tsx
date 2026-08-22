'use client';

import { motion } from 'framer-motion';
import { useState, type ReactNode } from 'react';
import type { GameSettings, Player, RecallMode, ScoringMode } from '@/types/game';
import { GAME_LIMITS, IMAGE_COUNT_PRESETS } from '@/lib/config';
import { IMAGE_PACKS } from '@/data/packs';
import { effectiveImageCount } from '@/lib/game/engine';
import { Button } from '@/components/ui/Button';
import { OptionCard } from '@/components/ui/OptionCard';
import { Segmented } from '@/components/ui/Segmented';
import { Stepper } from '@/components/ui/Stepper';
import { PlayerSetup } from '@/components/setup/PlayerSetup';

type GameSetupProps = {
  players: Player[];
  settings: GameSettings;
  packCapacity: number;
  fullscreenSupported: boolean;
  onPlayersChange: (players: Player[]) => void;
  onSettingsChange: (settings: Partial<GameSettings>) => void;
  onBack: () => void;
  onStart: (useFullscreen: boolean) => void;
};

const SCORING_OPTIONS: ReadonlyArray<{ value: ScoringMode; label: string }> = [
  { value: 'off', label: 'Vypnuto' },
  { value: 'team', label: 'Společné' },
  { value: 'players', label: 'Hráči' },
];

const RECALL_OPTIONS: ReadonlyArray<{ value: RecallMode; label: string }> = [
  { value: 'guided', label: 'Po otázkách' },
  { value: 'free', label: 'Volné' },
];

const TIME_OPTIONS: ReadonlyArray<{ value: number; label: string }> = [
  { value: 0, label: 'Bez limitu' },
  { value: 10, label: '10 s' },
  { value: 20, label: '20 s' },
];

export function GameSetup({
  players,
  settings,
  packCapacity,
  fullscreenSupported,
  onPlayersChange,
  onSettingsChange,
  onBack,
  onStart,
}: GameSetupProps) {
  const [customOpen, setCustomOpen] = useState(
    !IMAGE_COUNT_PRESETS.some((preset) => preset.count === settings.imageCount),
  );

  const maxImages = Math.min(GAME_LIMITS.maxImages, packCapacity);
  const imageCount = effectiveImageCount(settings.imageCount, packCapacity);

  const setImageCount = (count: number) => {
    onSettingsChange({ imageCount: effectiveImageCount(count, packCapacity) });
  };

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center gap-3 px-5 pb-2 pt-6">
        <button
          type="button"
          onClick={onBack}
          className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-text"
          aria-label="Zpět na úvod"
        >
          ←
        </button>
        <h1 className="font-display text-2xl font-semibold text-text">Nová hra</h1>
      </header>

      <div className="scroll-soft flex-1 overflow-y-auto px-5 pb-6">
        <div className="mx-auto flex w-full max-w-lg flex-col gap-4 py-4">
          <Section title="Kdo hraje" step={1}>
            <PlayerSetup players={players} onChange={onPlayersChange} />
          </Section>

          <Section title="Kolik obrázků" step={2}>
            <div className="grid grid-cols-2 gap-3">
              {IMAGE_COUNT_PRESETS.map((preset) => (
                <OptionCard
                  key={preset.count}
                  title={preset.label}
                  subtitle={`${preset.count} obrázků`}
                  hint={preset.hint}
                  selected={!customOpen && imageCount === preset.count}
                  onSelect={() => {
                    setCustomOpen(false);
                    setImageCount(preset.count);
                  }}
                />
              ))}
              <OptionCard
                title="Vlastní"
                subtitle={customOpen ? `${imageCount} obrázků` : 'Nastavte si počet'}
                selected={customOpen}
                onSelect={() => setCustomOpen(true)}
              />
            </div>

            {customOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4"
              >
                <Stepper
                  label="Vlastní počet obrázků"
                  value={imageCount}
                  min={GAME_LIMITS.minImages}
                  max={maxImages}
                  onChange={setImageCount}
                  suffix={(value) => `${value} obrázků`}
                />
              </motion.div>
            )}
          </Section>

          <Section title="Balíček" step={3}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {IMAGE_PACKS.map((pack) => (
                <OptionCard
                  key={pack.id}
                  title={pack.name}
                  subtitle={pack.description}
                  hint={`${pack.images.length} obrázků`}
                  selected={settings.packId === pack.id}
                  onSelect={() => onSettingsChange({ packId: pack.id })}
                />
              ))}
            </div>
          </Section>

          <Section title="Jemné doladění" step={4}>
            <div className="flex flex-col gap-5">
              <Field label="Bodování" hint="Výchozí je hra bez bodů – jen pro radost.">
                <Segmented
                  label="Bodování"
                  value={settings.scoring}
                  options={SCORING_OPTIONS}
                  onChange={(value) => onSettingsChange({ scoring: value })}
                />
              </Field>

              <Field label="Vybavování" hint="Volné vybavování jen odkrývá obrázky za sebou.">
                <Segmented
                  label="Vybavování"
                  value={settings.recallMode}
                  options={RECALL_OPTIONS}
                  onChange={(value) => onSettingsChange({ recallMode: value })}
                />
              </Field>

              <Field label="Čas na obrázek" hint="Karta se sama posune dál.">
                <Segmented
                  label="Čas na obrázek"
                  value={settings.timeLimit}
                  options={TIME_OPTIONS}
                  onChange={(value) => onSettingsChange({ timeLimit: value })}
                />
              </Field>

              <Field label="Zvuky">
                <Segmented
                  label="Zvuky"
                  value={settings.soundEnabled ? 'on' : 'off'}
                  options={[
                    { value: 'off', label: 'Vypnuto' },
                    { value: 'on', label: 'Zapnuto' },
                  ]}
                  onChange={(value) => onSettingsChange({ soundEnabled: value === 'on' })}
                />
              </Field>
            </div>
          </Section>
        </div>
      </div>

      <footer className="glass sticky bottom-0 border-t border-border-soft px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4">
        <div className="mx-auto flex w-full max-w-lg flex-col gap-2">
          {fullscreenSupported && (
            <p className="text-center text-xs text-muted">
              Pro nejlepší zážitek doporučujeme celou obrazovku.
            </p>
          )}
          <Button size="lg" full onClick={() => onStart(fullscreenSupported)}>
            {fullscreenSupported ? 'Spustit na celé obrazovce' : 'Spustit hru'}
          </Button>
          {fullscreenSupported && (
            <Button variant="ghost" full onClick={() => onStart(false)}>
              Spustit v okně
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
}

function Section({ title, step, children }: { title: string; step: number; children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: step * 0.05, duration: 0.4 }}
      className="glass rounded-[var(--radius-card)] p-5"
    >
      <h2 className="font-display mb-4 text-lg font-semibold text-text">{title}</h2>
      {children}
    </motion.section>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span className="text-sm font-semibold text-text">{label}</span>
        {hint && <span className="text-right text-xs text-muted">{hint}</span>}
      </div>
      {children}
    </div>
  );
}
