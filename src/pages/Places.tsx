import { useState } from 'react';
import { places, type Place } from '../data/places';
import { OrnamentDivider } from '../components/Ornament';

export function Places() {
  const [selected, setSelected] = useState<Place | null>(null);

  if (selected) {
    return <PlaceDetail place={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="flex flex-col pb-24">
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-gold-200 font-display text-2xl mb-1">Plaatsen</h1>
        <p className="text-stone-400 text-sm font-body">De locaties waar het verhaal zich afspeelt.</p>
      </div>

      <div className="px-5 flex flex-col gap-3">
        {places.map((place) => (
          <button
            key={place.id}
            onClick={() => setSelected(place)}
            className="w-full text-left bg-wine-900/50 border border-wine-700/30 rounded-xl p-4 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h2 className="text-parchment-100 font-display text-lg leading-tight mb-1">
                  {place.name}
                </h2>
                <p className="text-stone-400 text-sm font-body line-clamp-2 leading-snug">
                  {place.description.slice(0, 110)}…
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {place.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-wine-800/60 border border-wine-700/20 text-stone-500"
                      style={{ fontFamily: 'var(--font-ui)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
            Over de setting
          </p>
          <p className="text-parchment-300/70 text-sm font-body leading-relaxed">
            De roman speelt zich af in <span className="text-parchment-200">Skotoprigonevsk</span>, een fictief Russisch provinciestadtje. Dostojevski baseerde het op <span className="text-parchment-200">Staraja Roessa</span>, waar hij zelf woonde. De naam betekent in het Russisch zoiets als "beestachtige stad" — een ironische aanduiding van de morele staat van haar inwoners.
          </p>
        </div>
      </div>
    </div>
  );
}

function PlaceDetail({ place, onBack }: { place: Place; onBack: () => void }) {
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
          Alle plaatsen
        </button>
        <h1 className="text-gold-200 font-display text-2xl leading-tight mb-2">{place.name}</h1>
        <div className="flex flex-wrap gap-1">
          {place.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-wine-800/60 border border-wine-700/30 text-stone-400"
              style={{ fontFamily: 'var(--font-ui)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 py-5 space-y-5">
        <div>
          <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
            Beschrijving
          </h2>
          <p className="text-parchment-200/85 font-body text-base leading-relaxed">{place.description}</p>
        </div>

        <OrnamentDivider />

        <div>
          <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
            Betekenis in het verhaal
          </h2>
          <p className="text-parchment-200/85 font-body text-base leading-relaxed">{place.significance}</p>
        </div>

        <div>
          <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
            Verschijnt in
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {place.appearsInBooks.map((b) => (
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
      </div>
    </div>
  );
}
