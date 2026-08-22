const STEPS = [
  'Nastavte hráče a počet obrázků.',
  'Objeví se první obrázek. Společně o něm vyprávějte a napojte ho na příběh.',
  'Tapnutím odkryjete další obrázek – ten předchozí zmizí.',
  'Po posledním obrázku si zkusíte celý sen vybavit ve správném pořadí.',
  'Na konci uvidíte, kolik jste si zapamatovali. A můžete si sen znovu projít.',
];

export function HowToPlay() {
  return (
    <ol className="flex flex-col gap-3">
      {STEPS.map((step, index) => (
        <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted">
          <span className="font-display mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/25 text-xs font-semibold text-text">
            {index + 1}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}
