/**
 * Flat spot illustrations in the Clay palette. All decorative (aria-hidden).
 * Each draws into a 240×140 box so they line up inside cards and list rows.
 */

const INK = "#17150F";
const LINE = "#E4E0D6";
const SKY = "#5FC3E7";
const CORAL = "#F26D6D";
const YELLOW = "#FFD84D";
const UT = "#BF5700";

function Frame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 240 140" className={`h-auto w-full ${className}`} aria-hidden="true" fill="none">
      {children}
    </svg>
  );
}

/* ---------- What we do ---------- */

/** Three linked workflow nodes. */
export function WorkflowArt() {
  return (
    <Frame>
      <path d="M62 46 C100 46 92 94 130 94" stroke={INK} strokeOpacity=".25" strokeWidth="2" strokeDasharray="4 5" />
      <path d="M166 94 C196 94 192 46 214 46" stroke={INK} strokeOpacity=".25" strokeWidth="2" strokeDasharray="4 5" />
      <rect x="14" y="26" width="72" height="40" rx="10" fill="#fff" stroke={LINE} strokeWidth="1.5" />
      <rect x="24" y="38" width="10" height="10" rx="3" fill={SKY} />
      <rect x="40" y="38" width="34" height="5" rx="2.5" fill={INK} fillOpacity=".7" />
      <rect x="40" y="48" width="22" height="4" rx="2" fill={INK} fillOpacity=".2" />
      <rect x="116" y="74" width="72" height="40" rx="10" fill="#fff" stroke={LINE} strokeWidth="1.5" />
      <rect x="126" y="86" width="10" height="10" rx="3" fill={YELLOW} />
      <rect x="142" y="86" width="34" height="5" rx="2.5" fill={INK} fillOpacity=".7" />
      <rect x="142" y="96" width="26" height="4" rx="2" fill={INK} fillOpacity=".2" />
      <circle cx="214" cy="46" r="18" fill={CORAL} />
      <path d="M206 46l6 6 10-12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}

/** A grid of people with a few lit up, spreading out from the center. */
export function CampusArt() {
  const lit: Record<string, string> = { "2-1": CORAL, "3-1": SKY, "2-2": YELLOW, "1-1": SKY, "3-2": CORAL };
  const dots = [];
  for (let c = 0; c < 6; c++) {
    for (let r = 0; r < 3; r++) {
      const fill = lit[`${c}-${r}`];
      const x = 30 + c * 36;
      const y = 30 + r * 40;
      dots.push(
        <g key={`${c}-${r}`}>
          <circle cx={x} cy={y} r="8" fill={fill ?? INK} fillOpacity={fill ? 1 : 0.12} />
          <path
            d={`M${x - 13} ${y + 22} a13 11 0 0 1 26 0`}
            fill={fill ?? INK}
            fillOpacity={fill ? 1 : 0.12}
          />
        </g>
      );
    }
  }
  return (
    <Frame>
      <circle cx="102" cy="70" r="54" stroke={CORAL} strokeOpacity=".35" strokeWidth="1.5" strokeDasharray="3 5" />
      {dots}
    </Frame>
  );
}

/** An event ticket with a mini agenda. */
export function EventArt() {
  return (
    <Frame>
      <g transform="rotate(-4 120 70)">
        <path
          d="M30 22 h180 a8 8 0 0 1 8 8 v24 a14 14 0 0 0 0 28 v28 a8 8 0 0 1 -8 8 h-180 a8 8 0 0 1 -8 -8 v-28 a14 14 0 0 0 0 -28 v-24 a8 8 0 0 1 8 -8z"
          fill="#fff"
          stroke={LINE}
          strokeWidth="1.5"
        />
        <path d="M168 26 v88" stroke={LINE} strokeWidth="1.5" strokeDasharray="4 4" />
        <rect x="40" y="38" width="44" height="14" rx="7" fill={YELLOW} />
        <rect x="40" y="62" width="104" height="8" rx="4" fill={INK} fillOpacity=".8" />
        <rect x="40" y="78" width="78" height="6" rx="3" fill={INK} fillOpacity=".25" />
        <rect x="40" y="92" width="60" height="6" rx="3" fill={INK} fillOpacity=".25" />
        <circle cx="193" cy="58" r="10" fill={CORAL} />
        <circle cx="193" cy="86" r="10" fill={SKY} />
      </g>
    </Frame>
  );
}

/* ---------- Perks ---------- */

/** Bar chart trending up with a cursor. */
export function GrowthArt() {
  const bars = [28, 40, 36, 58, 72, 92];
  return (
    <Frame>
      <path d="M34 118 H206" stroke={INK} strokeOpacity=".15" strokeWidth="1.5" />
      {bars.map((h, i) => (
        <rect key={i} x={44 + i * 26} y={118 - h} width="16" height={h} rx="4" fill={i === bars.length - 1 ? CORAL : INK} fillOpacity={i === bars.length - 1 ? 1 : 0.12 + i * 0.06} />
      ))}
      <path d="M52 86 L78 74 L104 78 L130 56 L156 42 L182 22" stroke={CORAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M190 30 l14 34 5 -13 13 -5z" fill={INK} stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
    </Frame>
  );
}

/** Two chat bubbles. */
export function ConnectArt() {
  return (
    <Frame>
      <rect x="28" y="22" width="120" height="48" rx="16" fill="#fff" stroke={LINE} strokeWidth="1.5" />
      <path d="M48 70 l-6 14 18 -14" fill="#fff" stroke={LINE} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="50" cy="46" r="10" fill={SKY} />
      <rect x="68" y="38" width="62" height="6" rx="3" fill={INK} fillOpacity=".7" />
      <rect x="68" y="50" width="42" height="5" rx="2.5" fill={INK} fillOpacity=".2" />
      <rect x="92" y="78" width="124" height="44" rx="16" fill={SKY} />
      <path d="M196 122 l6 12 -18 -12" fill={SKY} />
      <rect x="108" y="92" width="74" height="6" rx="3" fill="#fff" />
      <rect x="108" y="104" width="50" height="5" rx="2.5" fill="#fff" fillOpacity=".7" />
      <circle cx="198" cy="100" r="9" fill="#fff" />
    </Frame>
  );
}

/** A credential card with a ribbon badge. */
export function CredentialArt() {
  return (
    <Frame>
      <rect x="36" y="20" width="150" height="100" rx="12" fill="#fff" stroke={LINE} strokeWidth="1.5" />
      <rect x="52" y="38" width="70" height="8" rx="4" fill={INK} fillOpacity=".8" />
      <rect x="52" y="54" width="100" height="5" rx="2.5" fill={INK} fillOpacity=".2" />
      <rect x="52" y="66" width="86" height="5" rx="2.5" fill={INK} fillOpacity=".2" />
      <rect x="52" y="78" width="94" height="5" rx="2.5" fill={INK} fillOpacity=".2" />
      <path d="M168 92 l-10 34 14 -8 8 14 6 -36z" fill={CORAL} />
      <path d="M190 92 l10 34 -14 -8 -8 14 -6 -36z" fill={UT} />
      <circle cx="179" cy="86" r="22" fill={YELLOW} stroke="#fff" strokeWidth="3" />
      <path d="M179 74 l3.5 7.4 8 1 -6 5.6 1.6 8 -7.1 -4 -7.1 4 1.6 -8 -6 -5.6 8 -1z" fill="#fff" />
    </Frame>
  );
}

/** A scatter of stickers. */
export function SwagArt() {
  return (
    <Frame>
      <g transform="rotate(-10 70 66)">
        <rect x="30" y="34" width="80" height="64" rx="14" fill={SKY} />
        <path d="M50 84 V66 a20 20 0 0 1 40 0 V84 H80 V66 a10 10 0 0 0 -20 0 V84z" fill="#fff" />
      </g>
      <circle cx="152" cy="54" r="32" fill={YELLOW} />
      <path d="M140 54 a12 12 0 0 0 24 0" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <circle cx="143" cy="46" r="3" fill={INK} />
      <circle cx="161" cy="46" r="3" fill={INK} />
      <g transform="rotate(8 176 104)">
        <rect x="130" y="88" width="94" height="30" rx="15" fill={CORAL} />
        <rect x="146" y="100" width="62" height="6" rx="3" fill="#fff" />
      </g>
    </Frame>
  );
}
