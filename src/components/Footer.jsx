import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-brand">
          <Logo big />
          <p className="foot-tag">Bring the whole of Vietnam home.</p>
        </div>
        <nav className="foot-nav" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/street-charm">Street Charm</Link>
          <Link to="/train-street">Box 01 · Train Street Café</Link>
        </nav>
        <p className="foot-small">Made in Hà Nội by PIXTA Vietnam · Coffee from Sơn La</p>
      </div>
    </footer>
  );
}
