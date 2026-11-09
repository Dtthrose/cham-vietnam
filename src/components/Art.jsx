import { useMemo } from "react";
import { ART } from "../lib/art.js";

/* Renders one of the painted illustrations in src/lib/art.js.
   `fill` crops the painting to fill its box instead of fitting inside it. */
export default function Art({ name, fill = false }) {
  const art = ART[name];
  const markup = useMemo(() => art.draw(), [art]);
  return (
    <svg
      viewBox={art.vb}
      preserveAspectRatio={fill ? "xMidYMid slice" : undefined}
      role="img"
      aria-label={art.label}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
