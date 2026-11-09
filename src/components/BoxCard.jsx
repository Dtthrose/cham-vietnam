import { Link } from "react-router-dom";

/* One box in a collection grid. Available boxes link to their page. */
export default function BoxCard({ box, wide = false, showVn = true }) {
  const art = (
    <div className="art photo" style={wide ? { aspectRatio: "4 / 3" } : undefined}>
      <img
        src={box.image}
        alt={box.alt}
        width={box.size[0]}
        height={box.size[1]}
        loading="lazy"
        decoding="async"
        style={box.focus ? { objectPosition: box.focus } : undefined}
      />
    </div>
  );
  const meta = (
    <>
      <div className="meta">
        <h3>{box.title}</h3>
        <span className={box.path ? "tag on" : "tag off"}>{box.path ? "Available" : "Coming next"}</span>
      </div>
      {showVn && <span className="vn" lang="vi">{box.vn}</span>}
    </>
  );

  if (box.path) {
    return (
      <Link className="box-card" to={box.path}>
        {art}
        {meta}
        <span className="go">Open the box →</span>
      </Link>
    );
  }
  return <div className="box-card">{art}{meta}</div>;
}
