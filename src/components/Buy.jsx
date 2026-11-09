import { useRef, useState } from "react";

const HOTLINE = "(+84) 24 6664 1988";
const HOTLINE_DIGITS = "+842466641988";

export default function Buy() {
  const [label, setLabel] = useState("Copy number");
  const phone = useRef(null);

  function copy() {
    const selectIt = () => {
      const range = document.createRange();
      range.selectNodeContents(phone.current);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      setLabel("Selected. Press Ctrl/⌘ + C");
    };
    try {
      navigator.clipboard.writeText(HOTLINE_DIGITS).then(() => setLabel("Copied"), selectIt);
    } catch {
      selectIt();
    }
  }

  return (
    <section className="buy" id="buy" aria-labelledby="buy-h">
      <div className="wrap">
        <div className="buy-copy">
          <p className="eyebrow">Where to buy</p>
          <h2 id="buy-h">Pick one up before you fly home</h2>
          <p>Chạm Vietnam arrives in selected souvenir shops in Vietnam from late November 2026. We'll list every shop here as it opens.</p>
          <p>Run a shop, hotel or tour and want to stock the boxes? Call us.</p>
        </div>
        <div className="buy-card">
          <span className="k">Hotline · Hà Nội</span>
          <span className="v" ref={phone}>{HOTLINE}</span>
          <button className="btn small" type="button" onClick={copy}>{label}</button>
        </div>
      </div>
    </section>
  );
}
