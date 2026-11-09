/* Painted illustrations drawn in code (SVG + watercolor / oil-paint filters).
   Each entry returns SVG markup; replace with real photos when they exist. */
function rng(seed) { return function () { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }; }
function a(tag, attrs) { var s = "<" + tag; for (var k in attrs) s += " " + k + '="' + attrs[k] + '"'; return s + "/>"; }
/* Loose brushwork: n curved strokes scattered in a box, in a palette of nearby colours */
function strokes(r, x, y, w, h, cols, n, len, wid, ang, op) {
  var s = "";
  for (var i = 0; i < n; i++) {
    var cx = x + r() * w, cy = y + r() * h, L = len * (.5 + r()), A = (ang + (r() - .5) * 34) * Math.PI / 180;
    var dx = Math.cos(A) * L / 2, dy = Math.sin(A) * L / 2;
    s += '<path d="M' + (cx - dx).toFixed(1) + " " + (cy - dy).toFixed(1) + " Q" + (cx + (r() - .5) * 14).toFixed(1) + " " + (cy + (r() - .5) * 14).toFixed(1) + " " + (cx + dx).toFixed(1) + " " + (cy + dy).toFixed(1) +
      '" stroke="' + cols[Math.floor(r() * cols.length)] + '" stroke-width="' + (wid * (.55 + r() * .9)).toFixed(1) + '" stroke-linecap="round" fill="none" opacity="' + op + '"/>';
  }
  return s;
}
var GRAIN ='<rect width="100%" height="100%" fill="#000" filter="url(#grain)" opacity=".55"/>';

export const ART = {
  branch: { vb: "0 0 220 170", label: "Coffee branch with red cherries", draw: function () {
    var s = '<g filter="url(#wc)">' + a("path", { d: "M10 155 C60 125 120 90 210 18", stroke: "#6B4A2E", "stroke-width": 5, fill: "none", "stroke-linecap": "round" });
    [[70, 98, -70, "#4F7A4A"], [96, 128, 12, "#5E8C55"], [140, 52, -80, "#4F7A4A"], [172, 80, 6, "#5E8C55"], [40, 132, -40, "#5E8C55"]].forEach(function (l) {
      s += a("ellipse", { cx: l[0], cy: l[1], rx: 32, ry: 12, transform: "rotate(" + l[2] + " " + l[0] + " " + l[1] + ")", fill: l[3] });
    });
    [[115, 92, "#B3261E"], [125, 83, "#C8352B"], [107, 81, "#8C1D17"], [131, 95, "#D9452F"], [182, 42, "#C8352B"], [190, 50, "#B3261E"], [176, 51, "#D9452F"]].forEach(function (c) {
      s += a("circle", { cx: c[0], cy: c[1], r: 7.5, fill: c[2] });
    });
    return s + "</g>";
  } },
  tag: { vb: "0 0 280 130", label: "Gift tag: For you, with love from Hà Nội", draw: function () {
    return a("path", { d: "M62 65 C30 40 20 100 2 112", stroke: "#8C6A45", "stroke-width": 2, fill: "none" }) +
      a("path", { d: "M60 10 H256 a10 10 0 0 1 10 10 V110 a10 10 0 0 1 -10 10 H60 L40 65 Z", fill: "#D4B080" }) +
      a("circle", { cx: 62, cy: 65, r: 6, fill: "#E8DCC8" }) +
      '<text font-family="Caveat, cursive" fill="#3B2418"><tspan x="84" y="56" font-size="30">For you,</tspan><tspan x="84" y="92" font-size="21">with love from Hà Nội</tspan></text>';
  } },
  tet: { vb: "0 0 800 500", label: "Watercolor of Tết: a peach blossom branch, bánh chưng, red envelopes, a lantern and kumquats", draw: function () {
    var r = rng(11), s = "";
    s += a("rect", { width: 800, height: 500, fill: "#F4E2CC" });
    s += strokes(r, -40, -40, 880, 580, ["#F7E6CF", "#F1D3B0", "#F5C7B4", "#EFD8A6", "#FBEEDC", "#EBC3A0"], 170, 110, 30, -18, ".55");
    s += strokes(r, 360, 230, 460, 290, ["#E59A88", "#EFB29E", "#D9786A", "#F2C0A8"], 70, 80, 24, -12, ".45");
    s += strokes(r, 0, 0, 420, 200, ["#F3D48E", "#F7E2A8", "#EFC77A"], 55, 90, 26, -22, ".45");
    [["M-10 70 C120 80 210 40 310 95 S470 125 540 80", 10], ["M185 66 C215 25 255 12 300 0", 6], ["M310 95 C330 140 370 165 430 172", 6], ["M440 108 C470 70 500 55 540 36", 5], ["M90 76 C100 120 90 150 70 175", 5]].forEach(function (b) {
      s += a("path", { d: b[0], stroke: "#5B3A26", "stroke-width": b[1], fill: "none", "stroke-linecap": "round" });
    });
    [[60, 70], [130, 82], [200, 58], [240, 26], [290, 8], [260, 70], [330, 108], [360, 150], [410, 168], [470, 104], [500, 68], [530, 40], [560, 76], [85, 120], [78, 165], [160, 45], [395, 120]].forEach(function (p) {
      var k = r() * 72;
      for (var i = 0; i < 5; i++) {
        var ang = (k + i * 72) * Math.PI / 180;
        s += a("circle", { cx: (p[0] + Math.cos(ang) * 8).toFixed(1), cy: (p[1] + Math.sin(ang) * 8).toFixed(1), r: 8, fill: r() > .4 ? "#F3A6B8" : "#F7C1CD", opacity: ".92" });
      }
      s += a("circle", { cx: p[0], cy: p[1], r: 3.5, fill: "#C2185B" });
    });
    for (var bd = 0; bd < 10; bd++) s += a("circle", { cx: 40 + r() * 520, cy: 20 + r() * 160, r: 3 + r() * 2, fill: "#E46F8C", opacity: ".85" });
    s += a("line", { x1: 690, y1: 0, x2: 690, y2: 70, stroke: "#8C5A3A", "stroke-width": 2 });
    s += a("ellipse", { cx: 690, cy: 118, rx: 46, ry: 52, fill: "#C8352B" });
    s += a("rect", { x: 664, y: 64, width: 52, height: 10, rx: 3, fill: "#D9A441" }) + a("rect", { x: 664, y: 162, width: 52, height: 10, rx: 3, fill: "#D9A441" });
    s += a("path", { d: "M690 66 C660 90 660 146 690 170 M690 66 C720 90 720 146 690 170", stroke: "#8C1D17", "stroke-width": 2, fill: "none", opacity: ".6" });
    s += a("path", { d: "M690 172 v40 M684 172 v34 M696 172 v34", stroke: "#D9A441", "stroke-width": 2 });
    s += '<g transform="rotate(-6 200 370)">' + a("rect", { x: 110, y: 280, width: 180, height: 180, rx: 8, fill: "#3F6E31" }) + a("rect", { x: 124, y: 294, width: 152, height: 152, rx: 4, fill: "#5E8F45" }) +
      a("path", { d: "M124 340 H276 M124 400 H276 M170 294 V446 M230 294 V446", stroke: "#4A7A38", "stroke-width": 2, opacity: ".7" }) +
      a("path", { d: "M110 330 H290 M110 410 H290 M160 280 V460 M240 280 V460", stroke: "#EADBB2", "stroke-width": 5 }) + "</g>";
    s += '<g transform="rotate(12 470 380)">' + a("rect", { x: 410, y: 300, width: 120, height: 170, rx: 6, fill: "#C62828" }) + a("circle", { cx: 470, cy: 370, r: 26, fill: "none", stroke: "#E8B547", "stroke-width": 4 }) + a("circle", { cx: 470, cy: 370, r: 10, fill: "#E8B547" }) + a("rect", { x: 420, y: 444, width: 100, height: 4, fill: "#E8B547" }) + "</g>";
    s += '<g transform="rotate(-9 560 350)">' + a("rect", { x: 505, y: 270, width: 115, height: 165, rx: 6, fill: "#B3261E" }) + a("path", { d: "M520 300 h85 M520 410 h85", stroke: "#E8B547", "stroke-width": 3 }) + a("circle", { cx: 562, cy: 355, r: 22, fill: "none", stroke: "#E8B547", "stroke-width": 3 }) + "</g>";
    [[680, 380], [705, 400], [660, 410], [690, 430], [720, 372]].forEach(function (q) {
      s += a("circle", { cx: q[0], cy: q[1], r: 16, fill: "#F0932B" }) + a("circle", { cx: q[0] - 5, cy: q[1] - 5, r: 4, fill: "#F7C26B" });
    });
    s += a("ellipse", { cx: 650, cy: 360, rx: 26, ry: 10, transform: "rotate(-30 650 360)", fill: "#4F7A4A" }) + a("ellipse", { cx: 735, cy: 352, rx: 24, ry: 9, transform: "rotate(25 735 352)", fill: "#5E8C55" });
    s += strokes(r, 130, 300, 140, 140, ["#6E9D4F", "#4A7A38", "#82AE5E"], 26, 26, 7, 80, ".4");
    s += strokes(r, 420, 290, 180, 150, ["#D33A2C", "#A51E18", "#E0503C"], 26, 30, 7, 70, ".35");
    return '<g filter="url(#oil)">' + s + "</g>" + GRAIN;
  } }
};
