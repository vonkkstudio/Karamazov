import { Link } from 'react-router-dom';
import { KaramazovHeroIllustration, OrnamentDivider } from '../components/Ornament';
import { useProgress } from '../hooks/useProgress';
import { books } from '../data/books';

export function Home() {
  const { progress, setBookProgress } = useProgress();

  const allChapters = books.flatMap((b) =>
    b.chapters.map((ch) => ({ bookNumber: b.id, chapterNumber: ch.chapterNumber, id: ch.id, title: ch.title, bookTitle: b.title })),
  );

  const currentChapterIndex = allChapters.findIndex((ch) => ch.id === progress.unlockedUpToChapter);
  const totalChapters = allChapters.length;
  const progressPercent = Math.round(((currentChapterIndex + 1) / totalChapters) * 100);

  function handleProgressChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const chapterId = e.target.value;
    const ch = allChapters.find((c) => c.id === chapterId);
    if (ch) setBookProgress(ch.bookNumber, chapterId);
  }

  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Hero */}
      <div className="relative bg-wine-950 pt-8 px-0">
        <KaramazovHeroIllustration />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 pointer-events-none">
          <p className="text-gold-300/80 text-xs tracking-[0.25em] uppercase mb-1" style={{ fontFamily: 'var(--font-ui)' }}>
            F.M. Dostojevski
          </p>
          <h1 className="text-gold-200 text-2xl font-display text-center leading-tight">
            De Broers Karamazov
          </h1>
          <p className="text-parchment-300/60 text-xs mt-1" style={{ fontFamily: 'var(--font-ui)' }}>
            Vertaling Arthur Langeveld
          </p>
        </div>
      </div>

      <div className="flex-1 px-5 py-4">
        {/* Intro */}
        <p className="text-parchment-200/80 text-base leading-relaxed font-body">
          Welkom bij je persoonlijke lezers­gids. Hier vind je samenvattingen, personage­beschrijvingen, filosofische thema's en sleutel­momenten — alles wat je nodig hebt om het boek ten volle te kunnen lezen.
        </p>

        <OrnamentDivider />

        {/* Progress selector */}
        <div className="bg-wine-900/60 border border-gold-600/20 rounded-xl p-4 mb-5">
          <p className="text-gold-400 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
            Mijn voortgang
          </p>
          <p className="text-parchment-200/70 text-sm mb-3 font-body">
            Stel in tot welk hoofdstuk je hebt gelezen. Alles daarna blijft verborgen.
          </p>
          <select
            value={progress.unlockedUpToChapter}
            onChange={handleProgressChange}
            className="w-full bg-wine-800/80 border border-gold-600/30 text-parchment-100 rounded-lg px-3 py-2.5 text-sm appearance-none"
            style={{ fontFamily: 'var(--font-ui)' }}
          >
            {allChapters.map((ch) => (
              <option key={ch.id} value={ch.id}>
                {ch.bookTitle} — {ch.title}
              </option>
            ))}
          </select>
          {/* Progress bar */}
          <div className="mt-3 h-1.5 bg-wine-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gold-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-stone-500 text-xs mt-1 text-right" style={{ fontFamily: 'var(--font-ui)' }}>
            {progressPercent}% gelezen
          </p>
        </div>

        {/* Navigation cards */}
        <div className="grid grid-cols-2 gap-3">
          <NavCard
            to="/lezen"
            title="Leesgids"
            subtitle="Boeken & hoofdstukken"
            icon="📖"
            color="from-wine-800 to-wine-900"
          />
          <NavCard
            to="/personages"
            title="Personages"
            subtitle="Wie is wie?"
            icon="👥"
            color="from-wine-800 to-wine-900"
          />
          <NavCard
            to="/themas"
            title="Thema's"
            subtitle="Filosofie & ideeën"
            icon="💭"
            color="from-wine-800 to-wine-900"
          />
          <NavCard
            to="/plaatsen"
            title="Plaatsen"
            subtitle="Locaties in het boek"
            icon="🏛️"
            color="from-wine-800 to-wine-900"
          />
        </div>

        <OrnamentDivider />

        {/* About */}
        <div className="text-parchment-300/60 text-sm font-body leading-relaxed">
          <p className="mb-2">
            <span className="text-gold-400">De Broers Karamazov</span> (1880) is Dostojevski's laatste en meest omvattende roman. Het vertelt het verhaal van drie broers en hun ontaarde vader, en stelt via hen de grootste vragen over God, vrijheid, schuld en liefde.
          </p>
          <p>
            De roman speelt zich af in een fictief Russisch provinciestadje en beslaat slechts enkele weken — maar de echo ervan klinkt door de hele moderne literatuur en filosofie.
          </p>
        </div>
      </div>
    </div>
  );
}

function NavCard({
  to,
  title,
  subtitle,
  icon,
  color,
}: {
  to: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}) {
  return (
    <Link
      to={to}
      className={`flex flex-col p-4 rounded-xl bg-gradient-to-br ${color} border border-gold-600/20 active:scale-95 transition-transform`}
    >
      <span className="text-2xl mb-2">{icon}</span>
      <span className="text-parchment-100 font-display text-base leading-tight">{title}</span>
      <span className="text-stone-400 text-xs mt-0.5" style={{ fontFamily: 'var(--font-ui)' }}>{subtitle}</span>
    </Link>
  );
}
