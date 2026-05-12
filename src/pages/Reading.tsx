import { useState } from 'react';
import { books, type Book, type Chapter } from '../data/books';
import { themes } from '../data/themes';
import { characters } from '../data/characters';
import { useProgress } from '../hooks/useProgress';
import { OrnamentDivider, OrnamentBorder } from '../components/Ornament';

type View = 'books' | 'chapters' | 'chapter';

export function Reading() {
  const { isChapterUnlocked, isBookUnlocked } = useProgress();
  const [view, setView] = useState<View>('books');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  if (view === 'chapter' && selectedChapter && selectedBook) {
    return (
      <ChapterDetail
        chapter={selectedChapter}
        book={selectedBook}
        onBack={() => setView('chapters')}
      />
    );
  }

  if (view === 'chapters' && selectedBook) {
    return (
      <ChapterList
        book={selectedBook}
        onBack={() => setView('books')}
        onSelectChapter={(ch) => {
          setSelectedChapter(ch);
          setView('chapter');
        }}
        isChapterUnlocked={isChapterUnlocked}
      />
    );
  }

  return (
    <div className="flex flex-col pb-24">
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-gold-200 font-display text-2xl mb-1">Leesgids</h1>
        <p className="text-stone-400 text-sm font-body">Selecteer een boek om de hoofdstukken te lezen.</p>
      </div>

      <div className="px-5 flex flex-col gap-2">
        {books.map((book) => {
          const unlocked = isBookUnlocked(book.id);
          const partLabel = book.id === 13 ? 'Epiloog' : `Deel ${book.partNumber} — Boek ${book.id}`;
          return (
            <button
              key={book.id}
              onClick={() => {
                setSelectedBook(book);
                setView('chapters');
              }}
              className={`w-full text-left rounded-xl p-4 border transition-all active:scale-[0.98] ${
                unlocked
                  ? 'bg-wine-900/60 border-wine-700/40'
                  : 'bg-wine-950/80 border-wine-800/20 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="text-gold-600/80 text-[10px] tracking-widest uppercase mb-0.5" style={{ fontFamily: 'var(--font-ui)' }}>
                    {partLabel}
                  </p>
                  <h2 className={`font-display text-lg leading-tight ${unlocked ? 'text-parchment-100' : 'text-stone-600'}`}>
                    {book.title}
                  </h2>
                  <p className={`text-xs mt-1 font-body ${unlocked ? 'text-stone-400' : 'text-stone-700'}`}>
                    {book.chapters.length} hoofdstukken
                  </p>
                </div>
                {unlocked ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-stone-500 mt-1 shrink-0">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-stone-700 mt-1 shrink-0">
                    <rect x="4" y="7" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M6 7V5a2 2 0 014 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ChapterList({
  book,
  onBack,
  onSelectChapter,
  isChapterUnlocked,
}: {
  book: Book;
  onBack: () => void;
  onSelectChapter: (ch: Chapter) => void;
  isChapterUnlocked: (bookNumber: number, chapterNumber: number) => boolean;
}) {
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
          Alle boeken
        </button>
        <p className="text-gold-600/80 text-[10px] tracking-widest uppercase mb-1" style={{ fontFamily: 'var(--font-ui)' }}>
          {book.id === 13 ? 'Epiloog' : `Deel ${book.partNumber} — Boek ${book.id}`}
        </p>
        <h1 className="text-gold-200 font-display text-2xl">{book.title}</h1>
      </div>

      <div className="px-5 py-4">
        <p className="text-parchment-200/70 font-body text-sm leading-relaxed mb-4">{book.intro}</p>

        <div className="flex flex-col gap-2">
          {book.chapters.map((ch) => {
            const unlocked = isChapterUnlocked(book.id, ch.chapterNumber);
            return (
              <button
                key={ch.id}
                onClick={() => unlocked && onSelectChapter(ch)}
                className={`w-full text-left rounded-xl p-4 border transition-all ${
                  unlocked
                    ? 'bg-wine-900/50 border-wine-700/30 active:scale-[0.98]'
                    : 'bg-wine-950/60 border-wine-800/20 cursor-default'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="text-stone-600 text-[10px] mb-0.5" style={{ fontFamily: 'var(--font-ui)' }}>
                      Hoofdstuk {ch.chapterNumber}
                    </p>
                    <h3 className={`font-display text-base leading-tight ${unlocked ? 'text-parchment-100' : 'text-stone-700'}`}>
                      {ch.title}
                    </h3>
                    {unlocked ? (
                      <p className="text-stone-400 text-xs mt-1 font-body line-clamp-1">{ch.teaser}</p>
                    ) : (
                      <p className="text-stone-700 text-xs mt-1 font-body italic">Nog niet gelezen</p>
                    )}
                  </div>
                  {unlocked ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-stone-500 mt-1 shrink-0">
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-stone-700 mt-1 shrink-0">
                      <rect x="4" y="7" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M6 7V5a2 2 0 014 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ChapterDetail({ chapter: ch, book, onBack }: { chapter: Chapter; book: Book; onBack: () => void }) {
  const chapterThemes = themes.filter((t) => ch.themeIds.includes(t.id));
  const chapterCharacters = characters.filter((c) => ch.characterIds.includes(c.id));

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
          {book.title}
        </button>
        <p className="text-stone-500 text-[10px] tracking-widest uppercase mb-1" style={{ fontFamily: 'var(--font-ui)' }}>
          Boek {book.id} — Hoofdstuk {ch.chapterNumber}
        </p>
        <h1 className="text-gold-200 font-display text-xl leading-tight">{ch.title}</h1>
      </div>

      <div className="px-5 py-5 space-y-5">
        {/* Teaser */}
        <div className="border-l-2 border-gold-600/40 pl-4">
          <p className="text-parchment-300/80 font-body text-base italic">{ch.teaser}</p>
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
            Wat er gebeurt
          </h2>
          <p className="text-parchment-200/85 font-body text-base leading-relaxed">{ch.summary}</p>
        </div>

        {/* Key moments */}
        {ch.keyMoments.length > 0 && (
          <div>
            <OrnamentDivider />
            <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: 'var(--font-ui)' }}>
              Sleutelmomenten
            </h2>
            <div className="flex flex-col gap-2">
              {ch.keyMoments.map((km) => (
                <OrnamentBorder key={km.id}>
                  <p className="text-gold-300/90 font-display text-sm mb-1">{km.title}</p>
                  <p className="text-parchment-300/70 font-body text-sm leading-snug">{km.description}</p>
                </OrnamentBorder>
              ))}
            </div>
          </div>
        )}

        <OrnamentDivider />

        {/* Characters */}
        {chapterCharacters.length > 0 && (
          <div>
            <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
              Personages in dit hoofdstuk
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {chapterCharacters.map((c) => (
                <span
                  key={c.id}
                  className="text-xs px-2.5 py-1 rounded-full bg-wine-800/60 border border-wine-700/30 text-parchment-200"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  {c.nickname || c.name.split(' ')[0]}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Themes */}
        {chapterThemes.length > 0 && (
          <div>
            <h2 className="text-gold-500/80 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
              Thema's
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {chapterThemes.map((t) => (
                <span
                  key={t.id}
                  className="text-xs px-2.5 py-1 rounded-full bg-gold-600/10 border border-gold-600/30 text-gold-300"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  {t.icon} {t.title}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
