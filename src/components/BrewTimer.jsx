import { useEffect, useState } from "react";

const TOTAL = 180;
const IDLE = "Pour the first round, then press start. The street film plays while it drips.";

function stageFor(elapsed) {
  if (elapsed < 30) return "Round 1: let the grounds bloom.";
  if (elapsed < 60) return "Round 2: pour slowly in small circles.";
  if (elapsed < 90) return "Round 3: top up to about 200 ml.";
  return "Let it drip. Listen to the street.";
}
const fmt = (s) => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");

/* 3-minute drip timer. `onStart` lets the page start the street film at the same time. */
export default function BrewTimer({ onStart }) {
  const [left, setLeft] = useState(TOTAL);
  const [running, setRunning] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setLeft((l) => Math.max(0, l - 1)), 1000);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => { if (left === 0) setRunning(false); }, [left]);

  function toggle() {
    if (running) { setRunning(false); return; }
    if (left === 0) setLeft(TOTAL);
    setStarted(true);
    setRunning(true);
    onStart?.();
  }
  function reset() { setRunning(false); setStarted(false); setLeft(TOTAL); }

  const done = left === 0;
  const stage = done ? "Done. Lift the bag out and enjoy." : !started ? IDLE : running ? stageFor(TOTAL - left) : "Paused.";
  const label = done ? "Brew another cup" : running ? "Pause" : started ? "Resume" : "Start brewing";

  return (
    <div className="timer">
      <div className="trow">
        <output>{fmt(left)}</output>
        <div className="ctas">
          <button className="btn small" type="button" onClick={toggle}>{label}</button>
          <button className="btn small ghost" type="button" onClick={reset}>Reset</button>
        </div>
      </div>
      <div className="bar" aria-hidden="true"><i style={{ width: ((TOTAL - left) / TOTAL) * 100 + "%" }} /></div>
      <p className="stage" aria-live="polite">{stage}</p>
    </div>
  );
}
