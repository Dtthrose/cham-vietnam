/* Line icons for the five senses, and the small QR mark. */
const base = { className: "ico", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export const SenseIcon = {
  picture: () => (
    <svg {...base}><rect x="7" y="7" width="34" height="34" rx="1" /><path d="M7 33l10-10 8 8 6-6 10 10" /><circle cx="31" cy="16" r="3.5" /></svg>
  ),
  story: () => (
    <svg {...base}><path d="M8 10h14a4 4 0 0 1 4 4v24a3 3 0 0 0-3-3H8zM40 10H30a4 4 0 0 0-4 4v24a3 3 0 0 1 3-3h11z" /></svg>
  ),
  sound: () => (
    <svg {...base}><path d="M10 20v8M17 14v20M24 8v32M31 14v20M38 20v8" /></svg>
  ),
  scent: () => (
    <svg {...base}><path d="M14 40c-4-6 4-9 0-15s4-9 0-15M24 40c-4-6 4-9 0-15s4-9 0-15M34 40c-4-6 4-9 0-15s4-9 0-15" /></svg>
  ),
  taste: () => (
    <svg {...base}><path d="M9 20h26v8a11 11 0 0 1-11 11h-4A11 11 0 0 1 9 28z" /><path d="M35 23h3a5 5 0 0 1 0 10h-4" /></svg>
  ),
};

export function QrMark({ rounded = false }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <rect width="100" height="100" rx={rounded ? 6 : 0} fill="#FBF6EC" />
      <g fill="none" stroke="#2A1E16" strokeWidth="5">
        <rect x="10" y="10" width="22" height="22" /><rect x="68" y="10" width="22" height="22" /><rect x="10" y="68" width="22" height="22" />
      </g>
      <g fill="#2A1E16">
        <rect x="17" y="17" width="8" height="8" /><rect x="75" y="17" width="8" height="8" /><rect x="17" y="75" width="8" height="8" />
        <rect x="44" y="44" width="10" height="10" /><rect x="62" y="62" width="10" height="10" /><rect x="78" y="78" width="10" height="10" />
        <rect x="44" y="72" width="8" height="8" /><rect x="40" y="12" width="7" height="7" /><rect x="54" y="22" width="7" height="7" />
        <rect x="12" y="44" width="7" height="7" /><rect x="26" y="54" width="7" height="7" />
      </g>
    </svg>
  );
}

export function PlayIcon({ size = 16, fill = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v16l13-8z" fill={fill} /></svg>
  );
}
