import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { PlayIcon } from "./Icons.jsx";

/* Video player for a box. Shows a "coming soon" poster until the file exists in public/video/.
   The parent can call ref.current.play() (e.g. from the "Watch now" button). */
const StreetFilm = forwardRef(function StreetFilm({ src, poster, caption }, ref) {
  const video = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(src, { method: "HEAD" })
      .then((r) => {
        const type = r.headers.get("content-type") || "";
        if (alive && r.ok && type.startsWith("video")) setReady(true);
      })
      .catch(() => {});
    return () => { alive = false; };
  }, [src]);

  useImperativeHandle(ref, () => ({
    play() {
      if (!ready || !video.current) return;
      const p = video.current.play();
      if (p && p.catch) p.catch(() => {});
    },
  }), [ready]);

  return (
    <>
      <div className="vplayer">
        {ready ? (
          <video ref={video} src={src} controls playsInline preload="metadata" poster={poster} onError={() => setReady(false)} />
        ) : (
          <div className="vsoon">
            <span className="pv"><PlayIcon size={24} fill="#FBF6EC" /></span>
            <span>The Train Street film is on its way</span>
          </div>
        )}
      </div>
      <p className="vcap">{caption}</p>
    </>
  );
});

export default StreetFilm;
