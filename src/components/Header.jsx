import { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";

export default function Header() {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const inCollections = pathname !== "/";

  /* Keep the sticky "inside the box" bar just under the header, whatever its height. */
  useEffect(() => {
    const el = ref.current;
    const set = () => document.documentElement.style.setProperty("--hh", el.offsetHeight + "px");
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header className="top" ref={ref}>
      <div className="wrap">
        <Logo />
        <nav className="nav" aria-label="Main">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "on" : undefined)}>Home</NavLink>
          <Link to="/street-charm" className={inCollections ? "on" : undefined} aria-current={inCollections ? "page" : undefined}>Collections</Link>
          <a className="linkish hide-sm" href="#buy">Where to buy</a>
          <Link className="btn small" to="/train-street">Open Box 01</Link>
        </nav>
      </div>
    </header>
  );
}
