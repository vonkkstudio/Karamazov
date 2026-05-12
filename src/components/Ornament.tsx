export function OrnamentDivider() {
  return (
    <div className="flex items-center gap-3 my-4 px-4">
      <div className="flex-1 h-px bg-gold-600/40" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold-500 shrink-0">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" fillOpacity="0.7" />
      </svg>
      <div className="flex-1 h-px bg-gold-600/40" />
    </div>
  );
}

export function OrnamentCross({ className = '' }: { className?: string }) {
  return (
    <svg
      width="32"
      height="40"
      viewBox="0 0 32 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect x="13" y="0" width="6" height="40" rx="1" fill="currentColor" fillOpacity="0.6" />
      <rect x="0" y="12" width="32" height="6" rx="1" fill="currentColor" fillOpacity="0.6" />
      <rect x="6" y="20" width="20" height="4" rx="1" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

export function OrnamentBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-4">
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-gold-600/50" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-gold-600/50" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-gold-600/50" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-gold-600/50" />
      {children}
    </div>
  );
}

export function KaramazovHeroIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Sky gradient background */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C0D0F" />
          <stop offset="100%" stopColor="#2D1218" />
        </linearGradient>
        <linearGradient id="moonGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#C9922A" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C9922A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="320" height="240" fill="url(#sky)" />

      {/* Moon */}
      <circle cx="260" cy="45" r="28" fill="#C9922A" fillOpacity="0.15" />
      <circle cx="260" cy="45" r="18" fill="#C9922A" fillOpacity="0.25" />
      <circle cx="260" cy="45" r="10" fill="#E2C47A" fillOpacity="0.5" />

      {/* Stars */}
      {[
        [40, 20], [80, 35], [130, 15], [170, 28], [200, 12],
        [30, 55], [100, 50], [150, 42], [220, 30], [290, 20],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1" fill="#E2C47A" fillOpacity="0.6" />
      ))}

      {/* Church/monastery silhouette */}
      {/* Main building */}
      <rect x="110" y="120" width="100" height="90" fill="#1C0D0F" />
      {/* Bell tower left */}
      <rect x="105" y="90" width="30" height="120" fill="#1C0D0F" />
      {/* Onion dome left */}
      <ellipse cx="120" cy="85" rx="18" ry="22" fill="#2D1218" />
      <ellipse cx="120" cy="72" rx="10" ry="14" fill="#1C0D0F" />
      <line x1="120" y1="58" x2="120" y2="48" stroke="#C9922A" strokeWidth="1.5" strokeOpacity="0.7" />
      <line x1="114" y1="53" x2="126" y2="53" stroke="#C9922A" strokeWidth="1.5" strokeOpacity="0.7" />

      {/* Bell tower right */}
      <rect x="185" y="100" width="25" height="110" fill="#1C0D0F" />
      {/* Onion dome right */}
      <ellipse cx="197" cy="96" rx="15" ry="18" fill="#2D1218" />
      <ellipse cx="197" cy="85" rx="8" ry="11" fill="#1C0D0F" />
      <line x1="197" y1="74" x2="197" y2="66" stroke="#C9922A" strokeWidth="1.5" strokeOpacity="0.7" />
      <line x1="192" y1="70" x2="202" y2="70" stroke="#C9922A" strokeWidth="1.5" strokeOpacity="0.7" />

      {/* Main dome center */}
      <ellipse cx="160" cy="112" rx="22" ry="26" fill="#2D1218" />
      <ellipse cx="160" cy="96" rx="13" ry="16" fill="#1C0D0F" />
      <line x1="160" y1="80" x2="160" y2="68" stroke="#C9922A" strokeWidth="2" strokeOpacity="0.8" />
      <line x1="152" y1="74" x2="168" y2="74" stroke="#C9922A" strokeWidth="2" strokeOpacity="0.8" />
      <line x1="154" y1="79" x2="166" y2="79" stroke="#C9922A" strokeWidth="1.5" strokeOpacity="0.6" />

      {/* Windows with gold light */}
      <rect x="150" y="140" width="8" height="12" rx="4" fill="#C9922A" fillOpacity="0.4" />
      <rect x="162" y="140" width="8" height="12" rx="4" fill="#C9922A" fillOpacity="0.3" />
      <rect x="117" y="110" width="7" height="10" rx="3" fill="#C9922A" fillOpacity="0.3" />
      <rect x="189" y="120" width="7" height="10" rx="3" fill="#C9922A" fillOpacity="0.25" />

      {/* Three silhouetted figures */}
      {/* Figure 1 - Mitja (left, broad) */}
      <ellipse cx="88" cy="198" rx="12" ry="6" fill="#1C0D0F" />
      <rect x="80" y="165" width="16" height="35" rx="4" fill="#2D1218" />
      <circle cx="88" cy="158" r="10" fill="#2D1218" />

      {/* Figure 2 - Aljosha (center, monastic robe) */}
      <ellipse cx="160" cy="200" rx="13" ry="5" fill="#1C0D0F" />
      <path d="M148 170 L160 168 L172 170 L175 210 L145 210 Z" fill="#2D1218" />
      <circle cx="160" cy="162" r="10" fill="#2D1218" />

      {/* Figure 3 - Ivan (right, upright) */}
      <ellipse cx="232" cy="198" rx="11" ry="5" fill="#1C0D0F" />
      <rect x="224" y="168" width="14" height="32" rx="3" fill="#2D1218" />
      <circle cx="231" cy="161" r="10" fill="#2D1218" />

      {/* Ground fog */}
      <rect x="0" y="205" width="320" height="35" fill="#1C0D0F" fillOpacity="0.7" />
      <ellipse cx="160" cy="210" rx="160" ry="15" fill="#1C0D0F" fillOpacity="0.5" />

      {/* Foreground snow/ground */}
      <rect x="0" y="215" width="320" height="25" fill="#1C0D0F" />

      {/* Gold ornamental border top */}
      <rect x="8" y="8" width="304" height="1" fill="#C9922A" fillOpacity="0.4" />
      <rect x="8" y="8" width="1" height="224" fill="#C9922A" fillOpacity="0.4" />
      <rect x="311" y="8" width="1" height="224" fill="#C9922A" fillOpacity="0.4" />
      <rect x="8" y="231" width="304" height="1" fill="#C9922A" fillOpacity="0.4" />

      {/* Corner ornaments */}
      {[[10, 10], [305, 10], [10, 225], [305, 225]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#C9922A" fillOpacity="0.5" />
      ))}
    </svg>
  );
}
