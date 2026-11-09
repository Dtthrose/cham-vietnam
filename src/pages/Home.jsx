import { Link } from "react-router-dom";
import Art from "../components/Art.jsx";
import DripBag from "../components/DripBag.jsx";
import { QrMark, SenseIcon } from "../components/Icons.jsx";
import { BOXES, SENSES } from "../data/streetCharm.js";

const SENSE_TEXT = {
  picture: "A watercolor of one everyday scene, printed as a postcard to keep or frame.",
  story: "A few lines about the place and its people, so the gift explains itself.",
  sound: "Scan the QR on the lid to watch and hear the street, wherever home is. No app.",
  scent: "The smell of freshly opened Vietnamese coffee, the first thing that fills the room.",
  taste: "Specialty coffee from Vietnam's hills, in drip bags anyone can brew with a kettle.",
};

const [trainStreet, icedTea, delivery] = BOXES;

export default function Home() {
  return (
    <div className="view">
      <section className="home-hero">
        <div className="wrap">
          <div className="hero-copy">
            <p className="eyebrow">Gifts from Vietnam, for the people you love</p>
            <h1>Bring the whole of <em>Vietnam</em> home.</h1>
            <p className="lede">Chạm Vietnam is a gift brand for travelers. Each box holds the picture, the story, the sound, the scent and the taste of a moment in Vietnam, so the people you love can feel a little of what you felt here.</p>
            <div className="ctas">
              <Link className="btn" to="/street-charm">Explore the collection</Link>
              <a className="btn ghost" href="#buy">Where to buy</a>
            </div>
          </div>
          {/* Ảnh trang chủ tạm: 3 tranh màu nước xếp như postcard. */}
          <div className="fan">
            <figure className="p1">
              <img src={icedTea.image} alt="Watercolor: old men drinking iced tea on a Hà Nội sidewalk, a cat asleep on a stool" width={icedTea.size[0]} height={icedTea.size[1]} decoding="async" />
              <figcaption>Trà đá vỉa hè</figcaption>
            </figure>
            <figure className="p3">
              <img src={delivery.image} alt="Watercolor: a motorbike piled high with parcels at sunset in Hà Nội" width={delivery.size[0]} height={delivery.size[1]} decoding="async" style={{ objectPosition: delivery.focus }} />
              <figcaption>Người giao hàng</figcaption>
            </figure>
            <figure className="p2">
              <img src={trainStreet.image} alt="Watercolor: friends drinking coffee beside the tracks on Hà Nội's Train Street" width={trainStreet.size[0]} height={trainStreet.size[1]} decoding="async" fetchPriority="high" />
              <figcaption>Phố đường tàu, Hà Nội</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="word band" aria-label="What Chạm means">
        <div className="wrap">
          <div className="word-big" lang="vi">Chạm</div>
          <div className="word-def">
            <p className="pron"><i className="it" style={{ fontSize: "1.2rem", color: "var(--ink)" }}>chạm</i> · say “chahm”, with a short, low drop · verb</p>
            <p className="big">To touch. To brush against something and feel it stay with you.</p>
            <p className="lede">That is what a good trip does. A photo keeps only what you saw. A Chạm Vietnam box keeps the rest too, and lets you hand it to someone who wasn't there.</p>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="five-h">
        <div className="wrap">
          <div className="five-head">
            <div className="head">
              <p className="eyebrow">In every box</p>
              <h2 id="five-h">Five ways to <em>feel</em> Vietnam</h2>
              <p className="lede">A souvenir shows where you went. A Chạm Vietnam box lets someone at home see, hear, smell and taste it, and know the story behind it.</p>
            </div>
            <figure className="slot flatlay" role="img" aria-label="What's in a Chạm Vietnam box, laid out on a table: the Train Street postcard, its story card, a QR card to watch the street, two drip bags, a coffee branch and a gift tag reading “For you, with love from Hà Nội”">
              <div className="fl-branch"><Art name="branch" /></div>
              <div className="fl-pc">
                <img src={trainStreet.image} alt="" width="900" height="900" decoding="async" loading="lazy" />
                <span>Train Street, Hà Nội</span>
              </div>
              <div className="fl-story">
                <span className="k">Postcard · Train Street, Hà Nội</span>
                <p>Twice a day the train rolls down this street, a hand's width from the café stools. Then the laughter and the coffee come right back.</p>
                <p className="r">Brew it slowly. Hear the street. Keep the postcard.</p>
              </div>
              <div className="fl-bag a"><DripBag /></div>
              <div className="fl-bag b"><DripBag /></div>
              <div className="fl-qr">
                <QrMark />
                <b>Try hearing this.</b>
                <span>Scan · watch</span>
              </div>
              <div className="fl-tag"><Art name="tag" /></div>
            </figure>
          </div>
          <div className="senses five">
            {SENSES.map((s) => {
              const Icon = SenseIcon[s.key];
              return (
                <div className="sense" key={s.key}>
                  <Icon />
                  <h3>{s.name}</h3>
                  <span className="word5" lang="vi">{s.vn}</span>
                  <p>{SENSE_TEXT[s.key]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="cols-h">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Collections</p>
            <h2 id="cols-h">Pick a side of Vietnam</h2>
          </div>
          <div className="cols">
            <Link className="col-card" to="/street-charm">
              <div className="triptych" aria-hidden="true">
                {BOXES.map((b) => (
                  <img key={b.no} src={b.image} alt="" width={b.size[0]} height={b.size[1]} decoding="async" loading="lazy" style={b.focus ? { objectPosition: b.focus } : undefined} />
                ))}
              </div>
              <div className="row"><h3>Street Charm</h3><span className="tag on">3 boxes · 1 available</span></div>
              <p className="tagline it">Taste, see, hear Vietnam's street charm.</p>
            </Link>
            <div className="col-card">
              <figure className="slot art-fill tet" style={{ aspectRatio: "4 / 3" }}><Art name="tet" fill /></figure>
              <div className="row"><h3>Tết Việt</h3><span className="tag off">Coming next</span></div>
              <p className="tagline it">The Vietnamese New Year, in a box.</p>
              <p className="lede">Peach blossoms, red envelopes, bánh chưng and a full house. The sounds and flavors of Tết, for the people you couldn't bring with you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block band" aria-labelledby="how-h">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">How it works</p>
            <h2 id="how-h">From your trip to someone you love</h2>
          </div>
          <ol className="flow">
            <li><h3>Pick a moment</h3><p>Choose the box whose scene feels most like your trip, in a souvenir shop in Vietnam.</p></li>
            <li><h3>Give it</h3><p>It packs flat in your suitcase. Hand it to someone you love when you get home.</p></li>
            <li><h3>They open Vietnam</h3><p>They read the story, brew the coffee, scan the lid and watch the street you sat on.</p></li>
          </ol>
        </div>
      </section>
    </div>
  );
}
