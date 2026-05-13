export default function AnatomyLineArt() {
  return (
    <svg viewBox="0 0 420 520" className="h-full w-full">
      <defs>
        <linearGradient id="bodyLine" x1="0" x2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>

      <circle cx="210" cy="70" r="34" fill="none" stroke="url(#bodyLine)" strokeWidth="4" />
      <path d="M210 104 C208 138 202 168 190 200 C178 232 178 268 194 302" fill="none" stroke="url(#bodyLine)" strokeWidth="4" strokeLinecap="round" />
      <path d="M210 104 C214 140 224 166 240 198 C256 232 256 266 236 302" fill="none" stroke="url(#bodyLine)" strokeWidth="4" strokeLinecap="round" />
      <path d="M166 145 C198 126 228 126 260 145" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <path d="M162 176 C128 202 106 232 90 272" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <path d="M258 176 C294 202 318 232 332 272" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <path d="M194 302 C176 352 160 396 142 470" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <path d="M236 302 C258 354 276 396 294 470" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />

      <circle cx="162" cy="176" r="8" fill="#e0f2fe" stroke="#0ea5e9" />
      <circle cx="258" cy="176" r="8" fill="#e0f2fe" stroke="#0ea5e9" />
      <circle cx="194" cy="302" r="8" fill="#ccfbf1" stroke="#14b8a6" />
      <circle cx="236" cy="302" r="8" fill="#ccfbf1" stroke="#14b8a6" />
    </svg>
  );
}