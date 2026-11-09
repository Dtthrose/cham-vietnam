/* Box lid, redrawn from the final print file (decal 210 × 110 mm on a 220 × 120 mm kraft lid).
   Needs <SvgDefs /> on the page for its gradient, texture and icon. */
export default function Lid() {
  return (
    <svg viewBox="0 0 880 480" role="img" aria-label="Chạm Vietnam box lid: kraft box with the Train Street postcard, brand name and listening QR">
        <rect width="880" height="480" rx="10" fill="url(#kraftG)"/>
        <rect width="880" height="480" rx="10" fill="url(#fibre)"/>
        <g transform="translate(20 20)">
          <rect width="840" height="440" rx="16" fill="#F3E6CC"/>
          <g transform="rotate(-2 171 219)">
            <rect x="26" y="74" width="290" height="290" fill="#FBF5EA"/>
            <image href="/images/train-street.jpg" x="35" y="83" width="272" height="272" preserveAspectRatio="xMidYMid slice" clipPath="url(#pcClip)"/>
            <rect x="244" y="90" width="56" height="66" fill="#FBF5EA"/>
            <rect x="248" y="94" width="48" height="58" fill="#B3261E"/>
            <path d="M258 125 L264 117 L268 121 L272 115 L280 125" fill="none" stroke="#F3E6CC" strokeWidth="1.6" strokeLinejoin="round"/>
            <text x="272" y="138" textAnchor="middle" fontFamily="Playfair Display, Georgia, serif" fontWeight="900" fontSize="9" fill="#F3E6CC">SƠN LA</text>
          </g>
          <text x="334" y="72" fontFamily="Playfair Display, Georgia, serif" fontWeight="900" fontSize="53" fill="#B3261E">CHẠM VIETNAM</text>
          <text x="336" y="114" fontFamily="Cormorant Garamond, Georgia, serif" fontStyle="italic" fontWeight="500" fontSize="21" fill="#1C1714">Taste, see, hear Vietnam's street charm.</text>
          <rect x="334" y="132" width="476" height="2" fill="#1C1714"/>
          <text x="334" y="157" fontFamily="Be Vietnam Pro, sans-serif" fontWeight="600" fontSize="8.5" letterSpacing="1.9" fill="#B3261E">POSTCARD · TRAIN STREET, HÀ NỘI</text>
          <text fontFamily="Cormorant Garamond, Georgia, serif" fontStyle="italic" fontWeight="500" fontSize="15" fill="#1C1714"><tspan x="334" y="180">Twice a day the train rolls down this street, a hand's width from the</tspan><tspan x="334" y="199">café stools. Then the laughter and the coffee come right back.</tspan></text>
          <text x="334" y="229" fontFamily="Cormorant Garamond, Georgia, serif" fontStyle="italic" fontWeight="600" fontSize="16" fill="#B3261E">Brew it slowly. Hear the street. Keep the postcard.</text>
          <rect x="334" y="256" width="476" height="1" fill="#1C1714" opacity=".45"/>
          <g transform="translate(334 276) scale(.7)">
            <rect x="0" y="0" width="100" height="100" fill="#FFFDF8"/>
            <g fill="none" stroke="#3B2418" strokeWidth="4"><rect x="8" y="8" width="21" height="21"/><rect x="71" y="8" width="21" height="21"/><rect x="8" y="71" width="21" height="21"/></g>
            <g fill="#3B2418"><rect x="15" y="15" width="7" height="7"/><rect x="78" y="15" width="7" height="7"/><rect x="15" y="78" width="7" height="7"/>
              <rect x="40" y="10" width="6" height="6"/><rect x="52" y="16" width="6" height="6"/><rect x="40" y="40" width="6" height="6"/><rect x="58" y="46" width="6" height="6"/><rect x="46" y="58" width="6" height="6"/><rect x="72" y="52" width="6" height="6"/><rect x="80" y="70" width="6" height="6"/><rect x="62" y="78" width="6" height="6"/><rect x="40" y="82" width="6" height="6"/><rect x="10" y="44" width="6" height="6"/><rect x="24" y="52" width="6" height="6"/></g>
          </g>
          <g transform="translate(414 280) scale(.6)" fill="none" strokeLinecap="round">
            <path d="M14 26 C14 14 23 7 32 7 C42 7 49 15 49 25 C49 33 44 36 41 40 C38 44 39 50 35 55 C32 59 26 59 23 55" stroke="#1C1714" strokeWidth="2.6"/>
            <path d="M23 27 C23 20 28 16 32 16 C37 16 41 20 41 25 C41 30 36 31 34 35" stroke="#1C1714" strokeWidth="2.2"/>
            <path d="M52 18 a14 14 0 0 1 0 16" stroke="#B3261E" strokeWidth="2.4"/>
            <path d="M57 13 a20 20 0 0 1 0 26" stroke="#B3261E" strokeWidth="2.4"/>
            <path d="M62 8 a26 26 0 0 1 0 36" stroke="#B3261E" strokeWidth="2.4"/>
          </g>
          <text fontFamily="Playfair Display, Georgia, serif" fontWeight="900" fontSize="17" fill="#B3261E"><tspan x="414" y="340">Try hearing</tspan><tspan x="414" y="357">this.</tspan></text>
          <text x="334" y="368" fontFamily="Be Vietnam Pro, sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="1.4" fill="#6A5646">SCAN · LISTEN · NO APP</text>
          <rect x="556" y="276" width="1" height="100" fill="#1C1714" opacity=".45"/>
          <text x="574" y="284" fontFamily="Be Vietnam Pro, sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="1.6" fill="#B3261E">INSIDE</text>
          <use href="#dripIcon" transform="translate(572 296) scale(1.25)"/>
          <text fontFamily="Playfair Display, Georgia, serif" fontWeight="900" fontSize="17" fill="#1C1714"><tspan x="640" y="312">5 drip bags</tspan><tspan x="640" y="332">+ 1 postcard</tspan></text>
          <text fontFamily="Be Vietnam Pro, sans-serif" fontSize="9" fill="#4A3A2E"><tspan x="574" y="360">5 × 12 g · Chiềng Ban Morning Mist,</tspan><tspan x="574" y="373">100% Arabica from Sơn La.</tspan></text>
        </g>
      </svg>
  );
}
