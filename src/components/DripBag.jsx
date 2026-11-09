/* Kraft drip bag 100 × 120 mm with the 70 × 85 mm front sticker (1 mm = 4 px).
   Needs <SvgDefs /> on the page for its gradient, texture and icon. */
export default function DripBag() {
  return (
    <svg viewBox="0 0 400 480" role="img" aria-label="Kraft drip bag with the Chiềng Ban Morning Mist sticker">
        <rect width="400" height="480" rx="6" fill="url(#kraftG)"/>
        <rect width="400" height="480" rx="6" fill="url(#fibre)"/>
        <rect y="0" width="400" height="38" fill="rgba(60,40,20,.12)"/>
        <g stroke="rgba(60,40,20,.35)" strokeWidth="1.2"><path d="M8 8H392M8 15H392M8 22H392M8 29H392"/></g>
        <path d="M0 44 l10 5 -10 5z M400 44 l-10 5 10 5z" fill="#E4D8C4"/>
        <rect x="60" y="78" width="280" height="340" rx="12" fill="#F6EEDD"/>
        <text x="200" y="116" textAnchor="middle" fontFamily="Be Vietnam Pro, sans-serif" fontWeight="600" fontSize="10" letterSpacing="2" fill="#B3261E">DRIP BAG · 12 g · SPECIALTY COFFEE</text>
        <rect x="96" y="130" width="208" height="1" fill="#1C1714" opacity=".35"/>
        <text textAnchor="middle" fontFamily="Playfair Display, Georgia, serif" fontWeight="900" fontSize="31" fill="#1C1714"><tspan x="200" y="176">Chiềng Ban</tspan><tspan x="200" y="212">Morning Mist</tspan></text>
        <text textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontStyle="italic" fontWeight="500" fontSize="16" fill="#1C1714"><tspan x="200" y="248">100% Arabica from the misty</tspan><tspan x="200" y="268">hills of Chiềng Ban, Sơn La.</tspan></text>
        <use href="#dripIcon" transform="translate(172 288) scale(1.3)"/>
        <text x="200" y="368" textAnchor="middle" fontFamily="Be Vietnam Pro, sans-serif" fontSize="11" fill="#4A3A2E">Roasted by Quiet Altitude</text>
        <text x="200" y="396" textAnchor="middle" fontFamily="Playfair Display, Georgia, serif" fontWeight="900" fontSize="16" letterSpacing="2" fill="#B3261E">CHẠM VIETNAM</text>
      </svg>
  );
}
