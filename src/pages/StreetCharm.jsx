import { Link } from "react-router-dom";
import BoxCard from "../components/BoxCard.jsx";
import { SenseIcon } from "../components/Icons.jsx";
import { BOXES, SENSES } from "../data/streetCharm.js";

const SENSE_TEXT = {
  picture: "A square watercolor postcard of the street, 110 × 110 mm.",
  story: "The street's short story, printed on the lid beside the painting.",
  sound: "Scan the lid to watch and hear that street while your coffee drips.",
  scent: "Tear open a drip bag and the room smells of Sơn La Arabica.",
  taste: "5 × 12 g drip bags of Chiềng Ban Morning Mist, 100% Arabica.",
};

export default function StreetCharm() {
  return (
    <div className="view">
      <nav className="wrap crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link><span>/</span><span aria-current="page">Street Charm</span>
      </nav>
      <section className="col-hero">
        <div className="wrap">
          <p className="eyebrow">Collection</p>
          <h1>Street Charm</h1>
          <p className="tagline it">Taste, see, hear Vietnam's street charm.</p>
          <p className="lede">The first Chạm Vietnam collection: everyday street life, one scene per box. Each box carries that street's picture, story, sound, and the scent and taste of coffee from Sơn La.</p>
        </div>
      </section>

      <section className="block band" aria-labelledby="senses-h">
        <div className="wrap">
          <h2 id="senses-h" className="eyebrow" style={{ fontFamily: "var(--body)", fontSize: ".76rem" }}>In every Street Charm box</h2>
          <div className="senses five">
            {SENSES.map((s) => {
              const Icon = SenseIcon[s.key];
              return (
                <div className="sense" key={s.key}>
                  <Icon />
                  <h3>{s.name}</h3>
                  <p>{SENSE_TEXT[s.key]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="boxes-h">
        <div className="wrap">
          <div className="head"><p className="eyebrow">The boxes</p><h2 id="boxes-h">Three streets, three boxes</h2></div>
          <div className="boxes">
            {BOXES.map((b) => <BoxCard key={b.no} box={b} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
