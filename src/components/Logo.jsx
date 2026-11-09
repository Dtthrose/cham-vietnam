import { Link } from "react-router-dom";

export default function Logo({ big = false }) {
  return (
    <Link className={big ? "logo big" : "logo"} to="/" aria-label="Chạm Vietnam, home">
      <span className="c">Chạm</span>
      <span className="v">Vietnam</span>
    </Link>
  );
}
