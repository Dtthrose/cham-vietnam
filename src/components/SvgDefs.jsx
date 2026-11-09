/* Shared SVG parts: kraft texture, watercolor and oil-paint filters, drip icon.
   Rendered once in the layout; the drawings reference them by id. */
export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="kraftG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#CFA877"/><stop offset="1" stopColor="#B98C5B"/></linearGradient>
        <pattern id="fibre" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(22)"><rect width="2" height="7" fill="rgba(80,50,20,.07)"/></pattern>
        <filter id="wc" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="3" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G" result="d"/><feGaussianBlur in="d" stdDeviation=".5"/></filter>
        <filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2"/><feColorMatrix values="0 0 0 0 .25  0 0 0 0 .17  0 0 0 0 .1  0 0 0 .2 0"/></filter>
        <filter id="oil" x="-3%" y="-3%" width="106%" height="106%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency=".014 .05" numOctaves="3" seed="3" result="flow"/>
          <feDisplacementMap in="SourceGraphic" in2="flow" scale="13" xChannelSelector="R" yChannelSelector="G" result="smear"/>
          <feTurbulence type="fractalNoise" baseFrequency=".9 .12" numOctaves="2" seed="9" result="bristle"/>
          <feDisplacementMap in="smear" in2="bristle" scale="3.5" xChannelSelector="R" yChannelSelector="G" result="brushed"/>
          <feTurbulence type="fractalNoise" baseFrequency=".045" numOctaves="4" seed="8" result="bump"/>
          <feDiffuseLighting in="bump" surfaceScale="1.8" diffuseConstant="1.08" lightingColor="#ffffff" result="light"><feDistantLight azimuth="225" elevation="58"/></feDiffuseLighting>
          <feComposite in="brushed" in2="light" operator="arithmetic" k1="1.08" k2="0" k3="0" k4="0"/>
        </filter>
        <clipPath id="pcClip"><rect x="35" y="83" width="272" height="272"/></clipPath>
        <g id="dripIcon" fill="none" stroke="#1C1714" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 20h28l-3 6a10 10 0 0 1-9 6h-4a10 10 0 0 1-9-6z" fill="rgba(179,38,30,.14)"/>
          <path d="M36 22h3a3.5 3.5 0 0 1 0 7h-4"/>
          <path d="M14 4h16l-3 12H17z" fill="#D9B98A"/>
          <path d="M22 17v2" stroke="#B3261E"/>
        </g>
      </defs>
    </svg>
  );
}
