import { useState } from 'react';
import { themes, type Theme } from '../data/themes';
import { OrnamentDivider } from '../components/Ornament';

export function Themes() {
  const [selected, setSelected] = useState<Theme | null>(null);

  if (selected) {
    return <ThemeDetail theme={selected} onBack={() => setSelected(null)} allThemes={themes} />;
  }

  return (
    <div className="flex flex-col pb-24">
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-gold-200 font-display text-2xl mb-1">Thema's & Filosofie</h1>
        <p className="text-stone-400 text-sm font-body">De grote ideeën in De Broers Karamazov.</p>
      </div>

      <div className="px-5 flex flex-col gap-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setSelected(theme)}
            className="w-full text-left bg-wine-900/50 border border-wine-700/30 rounded-xl p-4 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5">{theme.icon}</span>
              <div className="flex-1 min-w-0">
                <h2 className="text-parchment-100 font-display text-base leading-tight mb-1">{theme.title}</h2>
                <p className="text-stone-400 text-sm font-body line-clamp-2 leading-snug">{theme.shortDescription}</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-stone-600 mt-1 shrink-0">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      <div className="px-5 mt-6">
        <OrnamentDivider />
        <div className="bg-wine-900/40 border border-wine-700/20 rounded-xl p-4">
          <p className="text-gold-400/80 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
            Over de roman
          </p>
          <p className="text-parchment-300/70 text-sm font-body leading-relaxed">
            Dostojevski schreef De Broers Karamazov als zijn grote testament. Hij was zelf een man van diepe twijfel — ooit gevangen en bijna gefusilleerd, later diepgelovig — en die spanning zit in elke pagina. Hij gaf Ivan Karamazov de sterkste argumenten die hij kende, en plaatste er het leven van Zosima en Aljosha tegenover. Geen van beide wint volledig. Dat is de kracht van de roman.
          </p>
        </div>
      </div>
    </div>
  );
}

function ThemeDetail({
  theme,
  onBack,
  allThemes,
}: {
  theme: Theme;
  onBack: () => void;
  allThemes: Theme[];
}) {
  const related = allThemes.filter((t) => theme.relatedThemes.includes(t.id));

  return (
    <div className="flex flex-col pb-24">
      <div className="bg-wine-900/80 border-b border-wine-700/30 px-5 pt-6 pb-5">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-gold-400 text-sm mb-4"
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Alle thema's
        </button>
        <span className="text-4xl block mb-3">{theme.icon}</span>
        <h1 className="text-gold-200 font-display text-2xl leading-tight">{theme.title}</h1>
      </div>

      <div className="px-5 py-5 space-y-5">
        <div className="border-l-2 border-gold-600/40 pl-4">
          <p className="text-parchment-300/80 font-body text-base italic leading-relaxed">{theme.shortDescription}</p>
        </div>

        <div>
          <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
            In de roman
          </h2>
          <p className="text-parchment-200/85 font-body text-base leading-relaxed">{theme.essay}</p>
        </div>

        <OrnamentDivider />

        <div>
          <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
            Verschijnt in
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {theme.appearsInBooks.map((b) => (
              <span
                key={b}
                className="text-xs px-2.5 py-1 rounded-full bg-wine-800/60 border border-wine-700/30 text-parchment-300"
                style={{ fontFamily: 'var(--font-ui)' }}
              >
                Boek {b}
              </span>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <div>
            <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
              Verwante thema's
            </h2>
            <div className="flex flex-col gap-2">
              {related.map((t) => (
                <button
                  key={t.id}
                  onClick={onBack}
                  className="flex items-center gap-3 bg-wine-900/40 border border-wine-700/20 rounded-xl px-4 py-3 text-left active:scale-[0.98] transition-transform"
                >
                  <span className="text-xl">{t.icon}</span>
                  <span className="text-parchment-200 font-display text-sm">{t.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
