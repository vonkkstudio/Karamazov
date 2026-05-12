import { useState } from 'react';
import { characters, type Character } from '../data/characters';
import { OrnamentDivider } from '../components/Ornament';

const categoryLabels: Record<string, string> = {
  karamazov: 'De Karamazovs',
  klooster: 'Het klooster',
  dorp: 'De stad',
  overig: 'Overig',
};

const roleColors: Record<string, string> = {
  hoofdpersonage: 'bg-gold-600/20 text-gold-300',
  bijpersonage: 'bg-wine-700/40 text-parchment-300',
  zijpersonage: 'bg-wine-800/40 text-stone-400',
};

export function Characters() {
  const [selected, setSelected] = useState<Character | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'karamazov', 'klooster', 'dorp'];

  const filtered = filter === 'all' ? characters : characters.filter((c) => c.category === filter);

  if (selected) {
    return <CharacterDetail character={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="flex flex-col pb-24">
      <div className="px-5 pt-6 pb-2">
        <h1 className="text-gold-200 font-display text-2xl mb-1">Personages</h1>
        <p className="text-stone-400 text-sm font-body">Tik op een personage voor meer informatie.</p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 px-5 py-3 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs border transition-colors ${
              filter === cat
                ? 'bg-gold-500/20 border-gold-500/50 text-gold-300'
                : 'bg-wine-900/50 border-wine-700/30 text-stone-400'
            }`}
            style={{ fontFamily: 'var(--font-ui)' }}
          >
            {cat === 'all' ? 'Alle' : categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Group by category */}
      {(filter === 'all' ? Object.keys(categoryLabels) : [filter]).map((cat) => {
        const group = filtered.filter((c) => c.category === cat);
        if (!group.length) return null;
        return (
          <div key={cat} className="px-5 mb-4">
            {filter === 'all' && (
              <>
                <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: 'var(--font-ui)' }}>
                  {categoryLabels[cat]}
                </h2>
              </>
            )}
            <div className="flex flex-col gap-2">
              {group.map((c) => (
                <CharacterCard key={c.id} character={c} onSelect={() => setSelected(c)} />
              ))}
            </div>
            {filter === 'all' && <OrnamentDivider />}
          </div>
        );
      })}
    </div>
  );
}

function CharacterCard({ character: c, onSelect }: { character: Character; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className="w-full text-left bg-wine-900/50 border border-wine-700/30 rounded-xl p-4 active:scale-[0.98] transition-transform"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-parchment-100 font-display text-base leading-tight">
              {c.nickname || c.name}
            </span>
            {c.nickname && (
              <span className="text-stone-500 text-xs" style={{ fontFamily: 'var(--font-ui)' }}>
                {c.name !== c.nickname ? `(${c.name.split(' ')[0]})` : ''}
              </span>
            )}
          </div>
          <p className="text-stone-400 text-xs mb-2 line-clamp-2 font-body leading-snug">
            {c.description.slice(0, 100)}…
          </p>
          <div className="flex flex-wrap gap-1">
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${roleColors[c.role]}`} style={{ fontFamily: 'var(--font-ui)' }}>
              {c.role}
            </span>
            {c.age && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-wine-800/50 text-stone-500" style={{ fontFamily: 'var(--font-ui)' }}>
                {c.age}
              </span>
            )}
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-stone-600 mt-1 shrink-0">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </button>
  );
}

function CharacterDetail({ character: c, onBack }: { character: Character; onBack: () => void }) {
  return (
    <div className="flex flex-col pb-24">
      {/* Header */}
      <div className="bg-wine-900/80 border-b border-wine-700/30 px-5 pt-6 pb-5">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-gold-400 text-sm mb-4"
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Alle personages
        </button>
        <span className={`text-[11px] px-2.5 py-1 rounded-full ${roleColors[c.role]} mb-3 inline-block`} style={{ fontFamily: 'var(--font-ui)' }}>
          {c.role}
        </span>
        <h1 className="text-gold-200 font-display text-2xl leading-tight mb-1">
          {c.nickname || c.name}
        </h1>
        {c.nickname && c.nickname !== c.name && (
          <p className="text-stone-400 text-sm font-body">{c.fullName}</p>
        )}
        {c.age && (
          <p className="text-stone-500 text-xs mt-1" style={{ fontFamily: 'var(--font-ui)' }}>{c.age}</p>
        )}
      </div>

      <div className="px-5 py-5 space-y-5">
        {/* Description */}
        <div>
          <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
            Beschrijving
          </h2>
          <p className="text-parchment-200/85 font-body text-base leading-relaxed">{c.description}</p>
        </div>

        <OrnamentDivider />

        {/* Deeper profile */}
        <div>
          <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
            Karakter & betekenis
          </h2>
          <p className="text-parchment-200/85 font-body text-base leading-relaxed">{c.deeperProfile}</p>
        </div>

        {/* Relationships */}
        <div>
          <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
            Relaties
          </h2>
          <ul className="space-y-1.5">
            {c.relationships.map((r, i) => (
              <li key={i} className="flex items-start gap-2 text-parchment-200/70 font-body text-sm">
                <span className="text-gold-600 mt-0.5">—</span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {c.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-wine-800/60 border border-wine-700/30 text-stone-400"
              style={{ fontFamily: 'var(--font-ui)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
