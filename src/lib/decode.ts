// "فك الشفرة": حقل نقاط ضجيج بيتحوّل لخط اتجاه واضح. المؤشر بيشدّ النقاط اللي حواليه على الخط بالظبط.
type Dot = { nx: number; ny: number; t: number; off: number; r: number; delay: number; keep: boolean; ph: number };
const hex = (h: string): [number, number, number] => { const m = /#?([0-9a-f]{6})/i.exec(h.trim()); if (!m) return [76, 155, 255]; const n = parseInt(m[1], 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const rnd = (() => { let s = 20260; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();
const ease = (x: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);

export function initDecode(band: HTMLElement) {
  const cv = band.querySelector<HTMLCanvasElement>('canvas.df'); if (!cv) return;
  const ctx = cv.getContext('2d'); if (!ctx) return;
  const read = band.querySelector<HTMLElement>('[data-df-read]');
  const rtl = getComputedStyle(band).direction === 'rtl';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = matchMedia('(pointer: coarse)').matches;
  let W = 0, H = 0, dpr = 1, dots: Dot[] = [], start = performance.now(), run = true, vis = true;
  let mx = -999, my = -999, cur = hex('#4c9bff'), tgt = cur.slice() as [number, number, number], frame = 0;
  const curve = (t: number) => {
    if (W < 700) return { x: (0.05 + 0.85 * t) * W, y: H * (0.95 - 0.2 * Math.pow(t, 1.8) - 0.012 * Math.sin(t * 9)) };
    const x0 = rtl ? 0.03 : 0.56, x1 = rtl ? 0.44 : 0.97; return { x: (x0 + (x1 - x0) * t) * W, y: H * (0.8 - 0.5 * Math.pow(t, 1.8) - 0.03 * Math.sin(t * 9)) };
  };
  const build = () => {
    const n = Math.round(Math.min(260, Math.max(90, W / 5.5))); dots = [];
    for (let i = 0; i < n; i++) dots.push({ nx: rnd(), ny: rnd(), t: rnd(), off: (rnd() + rnd() + rnd() - 1.5) * 2, r: 1 + rnd() * 1.8, delay: 0, keep: rnd() < 0.3, ph: rnd() * 6.28 });
    dots.forEach((d) => { d.delay = d.t * 0.55 + rnd() * 0.15; });
  };
  const size = () => {
    const r = band.getBoundingClientRect(); dpr = Math.min(2, window.devicePixelRatio || 1);
    W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px'; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); build();
  };
  const R = coarse ? 0 : 170;
  const draw = (now: number) => {
    const el = reduce ? 9 : (now - start) / 1000; const g = el / 2.8;
    ctx.clearRect(0, 0, W, H);
    if (++frame % 20 === 0) { const a = band.querySelector<HTMLElement>('.hs-slide.on'); if (a) tgt = hex(getComputedStyle(a).getPropertyValue('--ba')); }
    for (let i = 0; i < 3; i++) cur[i] += (tgt[i] - cur[i]) * 0.06;
    const col = `${cur[0] | 0},${cur[1] | 0},${cur[2] | 0}`;
    // خط الاتجاه
    const lineP = ease((g - 0.55) / 0.5);
    if (lineP > 0) {
      ctx.beginPath(); const steps = 80, upto = Math.floor(steps * lineP);
      for (let s = 0; s <= upto; s++) { const t = s / steps; const p = curve(t); s ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); }
      ctx.strokeStyle = `rgba(${col},.55)`; ctx.lineWidth = 2.2; ctx.lineCap = 'round'; ctx.stroke();
    }
    let resolved = 0;
    for (const d of dots) {
      const p = ease((g - d.delay) / 0.5); const tg = curve(d.t);
      const wob = reduce ? 0 : Math.sin(el * 0.6 + d.ph) * 3;
      const nx = d.nx * W + wob, ny = d.ny * H + Math.cos(el * 0.5 + d.ph) * 3;
      let x = nx, y = ny, a = 0.22, r = d.r;
      if (!d.keep) {
        const dm = Math.hypot(tg.x - mx, tg.y - my); const focus = R ? Math.max(0, 1 - dm / R) : 0;
        const scatter = (1 - focus) * 20 * d.off + (reduce ? 0 : Math.sin(el * 0.9 + d.ph) * 2.5 * (1 - focus));
        x = nx + (tg.x - nx) * p; y = ny + (tg.y + scatter - ny) * p; a = 0.22 + p * (0.5 + focus * 0.3); r = d.r + p * focus * 1.6; if (p > 0.98) resolved++;
      } else if (R) { const dm = Math.hypot(nx - mx, ny - my); if (dm < R) { const k = 1 - dm / R; x += ((nx - mx) / (dm + 1)) * k * 14; y += ((ny - my) / (dm + 1)) * k * 14; a += k * 0.25; } }
      // خفّف النقاط ناحية النص
      const side = rtl ? x / W : 1 - x / W; const fade = 0.3 + 0.7 * (1 - Math.max(0, side - 0.5) / 0.5);
      ctx.beginPath(); ctx.arc(x, y, r, 0, 6.283); ctx.fillStyle = !d.keep && p > 0.6 ? `rgba(${col},${a * fade})` : `rgba(255,255,255,${a * fade * 0.8})`; ctx.fill();
    }
    // علامة القرار في نهاية الخط
    if (lineP >= 1) { const e = curve(1); const pulse = reduce ? 0 : (Math.sin(el * 2.2) + 1) / 2; ctx.beginPath(); ctx.arc(e.x, e.y, 6, 0, 6.283); ctx.fillStyle = '#0a0d14'; ctx.fill(); ctx.lineWidth = 3; ctx.strokeStyle = `rgb(${col})`; ctx.stroke(); ctx.beginPath(); ctx.arc(e.x, e.y, 14 + pulse * 8, 0, 6.283); ctx.strokeStyle = `rgba(${col},${0.35 - pulse * 0.25})`; ctx.lineWidth = 2; ctx.stroke(); }
    if (read && (reduce || frame % 6 === 0)) { const sig = Math.round((resolved / Math.max(1, dots.filter((x) => !x.keep).length)) * 70); read.textContent = String(sig); }
  };
  const loop = (now: number) => { if (run && vis) draw(now); if (!reduce) requestAnimationFrame(loop); };
  size(); draw(performance.now());
  if (!reduce) requestAnimationFrame(loop); else { size(); draw(performance.now()); }
  new ResizeObserver(() => { size(); if (reduce) draw(performance.now()); }).observe(band);
  band.addEventListener('pointermove', (e) => { const r = band.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; }, { passive: true });
  band.addEventListener('pointerleave', () => { mx = my = -999; });
  new IntersectionObserver((es) => { vis = es[0].isIntersecting; }, { threshold: 0 }).observe(band);
  document.addEventListener('visibilitychange', () => { run = !document.hidden; });
}
