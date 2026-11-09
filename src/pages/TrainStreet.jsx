import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Lid from "../components/Lid.jsx";
import DripBag from "../components/DripBag.jsx";
import BoxCard from "../components/BoxCard.jsx";
import BrewTimer from "../components/BrewTimer.jsx";
import StreetFilm from "../components/StreetFilm.jsx";
import { PlayIcon, QrMark } from "../components/Icons.jsx";
import { BOXES } from "../data/streetCharm.js";

/* Video của hộp 01: đặt file vào public/video/train-street.mp4 */
const VIDEO_SRC = "/video/train-street.mp4";

/* The four parts of the box. The ids are the #links (e.g. /train-street#watch). */
const PARTS = [
  { id: "box", label: "The box" },
  { id: "picture-story", label: "Picture & story" },
  { id: "scent-taste", label: "Scent & taste" },
  { id: "watch", label: "Watch & listen" },
];

/* Which part is on screen, for the sticky chips. */
function useActivePart() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    PARTS.forEach((p) => { const el = document.getElementById(p.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return active;
}

export default function TrainStreet() {
  const film = useRef(null);
  const active = useActivePart();
  const playFilm = () => film.current?.play();

  return (
    <div className="view">
      <nav className="wrap crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link><span>/</span><Link to="/street-charm">Street Charm</Link><span>/</span><span aria-current="page">Train Street Café</span>
      </nav>

      <section className="box-hero">
        <div className="wrap">
          <div className="hero-copy">
            <p className="eyebrow">Street Charm · Box 01 · Hà Nội</p>
            <h1>Train Street Café</h1>
            <p className="note">Hà Nội, mid-afternoon. Someone saved you a seat.</p>
            <div className="price"><b>250,000₫</b><span>about US$10 · 5 drip bags + 1 postcard</span></div>
            <div className="ctas">
              <a className="btn" href="#watch" onClick={playFilm}>
                <PlayIcon />
                Got the box? Watch now
              </a>
            </div>
          </div>
          <div className="lid-wrap"><Lid /></div>
        </div>
      </section>

      <nav className="unpack" aria-label="What's inside">
        <div className="wrap">
          {PARTS.map((p, i) => (
            <a key={p.id} href={"#" + p.id} className={active === p.id ? "on" : undefined}>
              <span className="count">{i + 1}</span>{p.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="item" id="box" aria-labelledby="box-h">
        <div className="wrap">
          <div className="item-visual">
            <div className="boxshot"><Lid /></div>
          </div>
          <div className="item-copy">
            <p className="eyebrow">Inside · 1 of 4</p>
            <h2 id="box-h">The box</h2>
            <p className="lede">A rigid kraft box with a magnetic lid, about the size of a paperback. It packs flat in a suitcase and keeps the drip bags and postcard safe on the flight home.</p>
            <dl className="spec">
              <dt>Size</dt><dd>220 × 120 × 50 mm</dd>
              <dt>Material</dt><dd>Kraft board, magnetic lid</dd>
              <dt>Holds</dt><dd>5 drip bags + 1 postcard</dd>
              <dt>On the lid</dt><dd>Postcard art + QR to the film</dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="item flip band" id="picture-story" aria-labelledby="pc-h">
        <div className="wrap">
          <div className="item-copy">
            <p className="eyebrow">Inside · 2 of 4</p>
            <h2 id="pc-h">Picture &amp; story</h2>
            <blockquote className="quote">“Then the laughter and the coffee come right back.”</blockquote>
            <p className="lede">In Hà Nội's Old Quarter, a railway runs between rows of narrow houses. Small cafés set out low stools right beside the tracks. When a train is due, everyone pulls their stools back, the carriages pass close enough to feel the air move, and then the street settles again.</p>
            <dl className="spec">
              <dt>Format</dt><dd>Square watercolor print</dd>
              <dt>Size</dt><dd>110 × 110 mm</dd>
            </dl>
          </div>
          <div className="item-visual">
            <figure className="postcard">
              <img src="/images/train-street.jpg" alt="Watercolor of Hà Nội's Train Street: friends drinking coffee on low stools beside the tracks as a red train approaches" width="900" height="900" loading="lazy" decoding="async" />
              <figcaption>Twice a day the train rolls down this street, a hand's width from the café stools.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="item" id="scent-taste" aria-labelledby="cf-h">
        <div className="wrap">
          <div className="item-visual">
            <div className="bags"><div><DripBag /></div><div className="b2"><DripBag /></div></div>
          </div>
          <div className="item-copy">
            <p className="eyebrow">Inside · 3 of 4</p>
            <h2 id="cf-h">Scent &amp; taste</h2>
            <p className="lede">Tear the top of a bag and the scent of fresh coffee reaches the room before the water does. Then comes the taste: Chiềng Ban Morning Mist, 100% Arabica from the misty hills of Chiềng Ban, Sơn La, in northwest Vietnam. Roasted by Quiet Altitude and packed in single-cup drip bags.</p>
            <dl className="spec">
              <dt>In the box</dt><dd>5 × 12 g drip bags</dd>
              <dt>Bean</dt><dd>100% Arabica, Sơn La</dd>
              <dt>Keeps</dt><dd>12 months from roast date</dd>
            </dl>
            <ol className="steps">
              <li><div>Tear along the top. <span>Hang the bag on your cup.</span></div></li>
              <li><div>Pour 200 ml at 90–92 °C <span>in three slow rounds.</span></div></li>
              <li><div>Wait 3 minutes, <span>lift the bag out and enjoy.</span></div></li>
            </ol>
            <BrewTimer onStart={playFilm} />
          </div>
        </div>
      </section>

      <section className="item sound" id="watch" aria-labelledby="watch-h">
        <div className="wrap">
          <div className="item-copy">
            <p className="eyebrow">Inside · 4 of 4</p>
            <h2 id="watch-h">Watch &amp; listen</h2>
            <p className="lede">This is the page the QR on the lid opens. Turn the sound up, press play, and you're back on a low stool by the tracks as the train comes through.</p>
            <div className="qr-hint">
              <QrMark rounded />
              <p>Scan · watch · no app needed</p>
            </div>
          </div>
          <div className="media-col">
            <StreetFilm ref={film} src={VIDEO_SRC} poster="/images/train-street.jpg" caption="Train Street, Hà Nội · Box 01" />
          </div>
        </div>
      </section>

      <section className="block band" aria-labelledby="more-h">
        <div className="wrap">
          <div className="head"><p className="eyebrow">More from Street Charm</p><h2 id="more-h">Next on the street</h2></div>
          <div className="boxes more">
            {BOXES.filter((b) => b.no !== "01").map((b) => <BoxCard key={b.no} box={b} wide showVn={false} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
