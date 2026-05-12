import { useState, useCallback } from 'react';

const STORAGE_KEY = 'karamazov-progress';

export interface Progress {
  unlockedUpToBook: number; // 0 = nothing unlocked, 13 = everything
  unlockedUpToChapter: string; // e.g. "5-3"
}

const defaultProgress: Progress = {
  unlockedUpToBook: 1,
  unlockedUpToChapter: '1-1',
};

function load(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return defaultProgress;
}

function save(p: Progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {}
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(load);

  const setBookProgress = useCallback((bookNumber: number, chapterId: string) => {
    const p: Progress = { unlockedUpToBook: bookNumber, unlockedUpToChapter: chapterId };
    save(p);
    setProgress(p);
  }, []);

  const isChapterUnlocked = useCallback(
    (bookNumber: number, chapterNumber: number) => {
      if (bookNumber < progress.unlockedUpToBook) return true;
      if (bookNumber > progress.unlockedUpToBook) return false;
      const [, ch] = progress.unlockedUpToChapter.split('-').map(Number);
      return chapterNumber <= ch;
    },
    [progress],
  );

  const isBookUnlocked = useCallback(
    (bookNumber: number) => bookNumber <= progress.unlockedUpToBook,
    [progress],
  );

  return { progress, setBookProgress, isChapterUnlocked, isBookUnlocked };
}
