import { useEffect, useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SvgDefs from "./components/SvgDefs.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Buy from "./components/Buy.jsx";
import Home from "./pages/Home.jsx";
import StreetCharm from "./pages/StreetCharm.jsx";
import TrainStreet from "./pages/TrainStreet.jsx";

const TITLES = {
  "/": "Chạm Vietnam",
  "/street-charm": "Street Charm · Chạm Vietnam",
  "/train-street": "Train Street Café · Chạm Vietnam",
};

/* On a new page: go to the top, or to the #section in the link (e.g. /train-street#watch). */
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    document.title = TITLES[pathname] || TITLES["/"];
    if (!hash) { window.scrollTo(0, 0); return; }
    const el = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (el) el.scrollIntoView();
  }, [pathname, hash]);
}

/* Links from the old one-page site used #train-street and #street-charm. */
function useLegacyHashLinks() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/" && (hash === "#train-street" || hash === "#street-charm")) {
      navigate("/" + hash.slice(1), { replace: true });
    }
  }, [pathname, hash, navigate]);
}

export default function App() {
  useScrollOnNavigate();
  useLegacyHashLinks();
  return (
    <>
      <SvgDefs />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/street-charm" element={<StreetCharm />} />
          <Route path="/train-street" element={<TrainStreet />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Buy />
      </main>
      <Footer />
    </>
  );
}
