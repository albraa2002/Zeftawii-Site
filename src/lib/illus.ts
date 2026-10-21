// رسومات SVG توضيحية بتتلوّن بالثيم (دارك/لايت) عن طريق متغيرات CSS. viewBox 480x320.
const blob = '<circle cx="240" cy="160" r="138" class="i-blob"/><circle cx="240" cy="160" r="104" class="i-blob2"/>';
const dots = (x: number, y: number) => `<g class="i-mutf">${[0, 1, 2, 3].map((r) => [0, 1, 2, 3, 4].map((c) => `<circle cx="${x + c * 12}" cy="${y + r * 12}" r="1.6"/>`).join('')).join('')}</g>`;
const win = (x: number, y: number, w: number, h: number) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" class="i-card"/><circle cx="${x + 20}" cy="${y + 20}" r="4" fill="var(--red)"/><circle cx="${x + 34}" cy="${y + 20}" r="4" fill="#f5c451"/><circle cx="${x + 48}" cy="${y + 20}" r="4" class="i-g"/>`;
const gradDef = (id: string) => `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--cyan)"/><stop offset="1" stop-color="var(--green)"/></linearGradient></defs>`;

export const illus: Record<string, string> = {
  bi: `${gradDef('gbi')}${blob}${dots(26, 44)}${win(50, 36, 380, 248)}
    ${[66, 186, 306].map((x, i) => `<rect x="${x}" y="80" width="108" height="54" rx="10" class="i-mut"/><rect x="${x + 12}" y="92" width="38" height="6" rx="3" class="i-mutf2"/><rect x="${x + 12}" y="108" width="${[62, 54, 70][i]}" height="14" rx="4" class="${i === 1 ? 'i-g' : 'i-a'}"/>`).join('')}
    ${[28, 46, 36, 62, 50, 78, 70].map((h, i) => `<rect x="${72 + i * 24}" y="${252 - h}" width="14" height="${h}" rx="4" class="i-a" opacity=".55"/>`).join('')}
    <path d="M78 226 L102 206 L126 214 L150 188 L174 196 L198 168 L222 176" class="i-gs"/><circle cx="222" cy="176" r="5" class="i-g"/>
    <circle cx="332" cy="212" r="38" class="i-ring"/><circle cx="332" cy="212" r="38" class="i-ring2" stroke-dasharray="150 240" transform="rotate(-90 332 212)"/>
    <rect x="316" y="205" width="32" height="8" rx="4" class="i-mutf2"/><rect x="322" y="219" width="20" height="6" rx="3" class="i-mutf2"/>
    <rect x="384" y="180" width="30" height="8" rx="4" class="i-mutf2"/><rect x="384" y="198" width="22" height="8" rx="4" class="i-mutf2"/><rect x="384" y="216" width="26" height="8" rx="4" class="i-mutf2"/>`,
  marketing: `${gradDef('gmk')}${blob}${dots(380, 36)}
    <path d="M60 70 H250 L222 118 H88 Z" class="i-a" opacity=".85"/><path d="M92 128 H218 L196 170 H114 Z" class="i-a" opacity=".6"/><path d="M118 180 H192 L178 216 H132 Z" class="i-g"/>
    <rect x="124" y="226" width="62" height="14" rx="7" class="i-mutf2"/>
    <circle cx="352" cy="170" r="84" class="i-card"/><circle cx="352" cy="170" r="60" class="i-ring"/><circle cx="352" cy="170" r="36" class="i-ring"/><circle cx="352" cy="170" r="12" class="i-g"/>
    <path d="M286 96 L346 164" class="i-as"/><path d="M286 96 l4 20 m-4 -20 l20 4" class="i-as"/>
    <rect x="262" y="258" width="150" height="30" rx="15" class="i-card"/><path d="M282 276 l18 -8 l16 6 l24 -12 l24 4" class="i-gs"/><circle cx="364" cy="266" r="4" class="i-g"/>`,
  automation: `${gradDef('gau')}${blob}${dots(36, 250)}
    <rect x="40" y="104" width="86" height="92" rx="14" class="i-card"/><ellipse cx="83" cy="124" rx="26" ry="9" class="i-a"/><path d="M57 124 v38 a26 9 0 0 0 52 0 v-38" class="i-as" stroke-width="2.5"/><path d="M57 144 a26 9 0 0 0 52 0" class="i-as" stroke-width="2.5"/>
    <circle cx="240" cy="150" r="52" class="i-card"/><circle cx="240" cy="150" r="22" class="i-ring" stroke-width="10" stroke-dasharray="9 7"/><circle cx="240" cy="150" r="9" class="i-g"/><path d="M240 100 v10 M240 190 v10 M190 150 h10 M280 150 h10" class="i-as" stroke-width="5"/>
    <rect x="354" y="92" width="88" height="116" rx="14" class="i-card"/><rect x="368" y="108" width="40" height="7" rx="3.5" class="i-mutf2"/>${[0, 1, 2, 3].map((i) => `<rect x="368" y="${126 + i * 16}" width="${[58, 46, 54, 36][i]}" height="7" rx="3.5" class="i-mut"/>`).join('')}<path d="M370 196 l8 -10 l10 4 l12 -12" class="i-gs" stroke-width="2.5"/>
    <path d="M126 150 H186" class="i-flow"/><path d="M294 150 H354" class="i-flow"/><path d="M178 144 l8 6 -8 6 M346 144 l8 6 -8 6" class="i-as" stroke-width="2.5"/>
    <circle cx="396" cy="248" r="26" class="i-card"/><circle cx="396" cy="248" r="14" class="i-ring" stroke-width="2.5"/><path d="M396 240 v8 l6 4" class="i-gs" stroke-width="2.5"/>`,
  ai: `${gradDef('gai')}${blob}${dots(400, 250)}
    ${(() => { const L = [[80, [90, 160, 230]], [190, [60, 125, 195, 260]], [300, [100, 160, 220]], [400, [130, 190]]] as const; let s = ''; for (let i = 0; i < 3; i++) for (const a of L[i][1]) for (const b of L[i + 1][1]) s += `<line x1="${L[i][0]}" y1="${a}" x2="${L[i + 1][0]}" y2="${b}" class="i-line"/>`; L.forEach(([x, ys], i) => ys.forEach((y, j) => { s += `<circle cx="${x}" cy="${y}" r="${i === 3 ? 14 : 11}" class="${i === 3 ? 'i-g' : (i + j) % 3 === 0 ? 'i-a' : 'i-card'}"/>`; })); return s; })()}
    <path d="M420 66 l5 14 14 5 -14 5 -5 14 -5 -14 -14 -5 14 -5 Z" class="i-g"/><path d="M52 40 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 Z" class="i-a"/>`,
  account: `${gradDef('gac')}${blob}${dots(30, 40)}
    <rect x="48" y="52" width="210" height="64" rx="16" class="i-card"/><circle cx="82" cy="84" r="16" class="i-a"/><rect x="108" y="72" width="110" height="7" rx="3.5" class="i-mutf2"/><rect x="108" y="88" width="80" height="7" rx="3.5" class="i-mut"/>
    <rect x="222" y="132" width="210" height="64" rx="16" class="i-card"/><circle cx="398" cy="164" r="16" class="i-g"/><rect x="250" y="152" width="110" height="7" rx="3.5" class="i-mutf2"/><rect x="250" y="168" width="70" height="7" rx="3.5" class="i-mut"/>
    <rect x="48" y="212" width="210" height="64" rx="16" class="i-card"/><circle cx="82" cy="244" r="16" class="i-a" opacity=".6"/><rect x="108" y="232" width="100" height="7" rx="3.5" class="i-mutf2"/><rect x="108" y="248" width="60" height="7" rx="3.5" class="i-mut"/>
    <circle cx="396" cy="252" r="26" class="i-g" opacity=".9"/><path d="M384 252 l8 8 16 -18" class="i-as" stroke="var(--on-accent)" stroke-width="4"/>`,
  project: `${gradDef('gpr')}${blob}
    ${win(40, 40, 400, 240)}
    ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${150 + i * 48}" y="82" width="30" height="8" rx="4" class="i-mutf2"/>`).join('')}
    ${[[0, 70, 'i-a'], [1, 100, 'i-g'], [2, 130, 'i-a'], [3, 90, 'i-g'], [4, 60, 'i-a']].map(([r, w, c]) => `<rect x="62" y="${108 + (r as number) * 34}" width="68" height="8" rx="4" class="i-mut"/><rect x="${150 + (r as number) * 30}" y="${104 + (r as number) * 34}" width="${w}" height="16" rx="8" class="${c}" opacity=".85"/>`).join('')}
    <path d="M370 100 l9 9 -9 9 -9 -9 Z" class="i-g"/><path d="M370 126 V260" class="i-flow" stroke-width="2"/>
    <circle cx="418" cy="248" r="20" class="i-card"/><path d="M409 248 l7 7 12 -14" class="i-gs" stroke-width="3.5"/>`,
  tools: `${gradDef('gto')}${blob}${dots(40, 40)}
    <rect x="150" y="30" width="180" height="260" rx="22" class="i-card"/><rect x="168" y="50" width="144" height="58" rx="12" class="i-mut"/><rect x="236" y="62" width="64" height="12" rx="6" class="i-a"/><rect x="262" y="82" width="38" height="10" rx="5" class="i-g"/>
    ${[0, 1, 2, 3].map((r) => [0, 1, 2].map((c) => `<rect x="${170 + c * 48}" y="${126 + r * 40}" width="40" height="30" rx="9" class="${c === 2 && r === 3 ? 'i-g' : c === 2 ? 'i-a' : 'i-mut'}" ${c === 2 ? 'opacity=".85"' : ''}/>`).join('')).join('')}
    <circle cx="392" cy="96" r="38" class="i-card"/><path d="M376 106 l12 -14 l8 8 l12 -16" class="i-gs"/><circle cx="84" cy="224" r="40" class="i-card"/><text x="84" y="233" text-anchor="middle" class="i-big">%</text>`,
  blog: `${gradDef('gbl')}${blob}${dots(380, 44)}
    <rect x="150" y="60" width="210" height="210" rx="16" class="i-card" transform="rotate(-6 255 165)" opacity=".6"/>
    <rect x="130" y="44" width="220" height="232" rx="16" class="i-card"/><rect x="152" y="68" width="120" height="12" rx="6" class="i-a"/>
    ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="152" y="${100 + i * 20}" width="${[176, 150, 170, 120, 160, 90][i]}" height="7" rx="3.5" class="${i % 2 ? 'i-mut' : 'i-mutf2'}"/>`).join('')}
    <path d="M346 214 l50 -90 l22 12 l-50 90 l-26 8 Z" class="i-g"/><path d="M342 232 l20 -8" class="i-as" stroke-width="3"/>`,
  glossary: `${gradDef('ggl')}${blob}
    <path d="M240 78 C200 58 130 58 80 76 V252 C130 236 200 238 240 258 Z" class="i-card"/><path d="M240 78 C280 58 350 58 400 76 V252 C350 236 280 238 240 258 Z" class="i-card"/>
    <text x="146" y="170" text-anchor="middle" class="i-big">Aa</text><rect x="104" y="196" width="84" height="7" rx="3.5" class="i-mut"/><rect x="104" y="212" width="60" height="7" rx="3.5" class="i-mut"/>
    <text x="334" y="170" text-anchor="middle" class="i-big i-biga">ROAS</text><rect x="292" y="196" width="84" height="7" rx="3.5" class="i-mut"/><rect x="292" y="212" width="56" height="7" rx="3.5" class="i-mut"/>
    <rect x="52" y="272" width="72" height="26" rx="13" class="i-card"/><rect x="170" y="286" width="62" height="24" rx="12" class="i-a" opacity=".8"/><rect x="330" y="270" width="76" height="26" rx="13" class="i-g" opacity=".85"/>`,
  store: `${gradDef('gst')}${blob}${dots(30, 40)}
    <path d="M70 120 L88 62 H392 L410 120 Z" class="i-a" opacity=".85"/>${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${70 + i * 56.7} 120 q28 22 56.7 0 Z" class="${i % 2 ? 'i-g' : 'i-a'}" opacity=".75"/>`).join('')}
    <rect x="86" y="126" width="308" height="152" rx="8" class="i-card"/><rect x="108" y="190" width="80" height="88" rx="8" class="i-mut"/><rect x="214" y="150" width="152" height="70" rx="10" class="i-mut"/>
    ${[0, 1, 2, 3].map((i) => `<rect x="${230 + i * 34}" y="${192 - [14, 30, 22, 40][i]}" width="20" height="${[14, 30, 22, 40][i] + 20}" rx="4" class="i-a" opacity=".7"/>`).join('')}
    <circle cx="414" cy="212" r="30" class="i-card"/><path d="M414 226 c-10 -12 -14 -18 -14 -24 a14 14 0 0 1 28 0 c0 6 -4 12 -14 24 Z" class="i-g"/><circle cx="414" cy="202" r="5" fill="var(--on-accent)"/>`,
  market: `${gradDef('gmr')}${blob}
    <circle cx="240" cy="160" r="104" class="i-card"/><ellipse cx="240" cy="160" rx="44" ry="104" class="i-ring" stroke-width="2"/><path d="M136 160 H344 M150 112 H330 M150 208 H330" class="i-ring" stroke-width="2"/>
    <path d="M178 196 c-10 -12 -14 -18 -14 -24 a14 14 0 0 1 28 0 c0 6 -4 12 -14 24 Z" class="i-g"/><circle cx="178" cy="172" r="5" fill="var(--on-accent)"/>
    <path d="M300 150 c-10 -12 -14 -18 -14 -24 a14 14 0 0 1 28 0 c0 6 -4 12 -14 24 Z" class="i-a"/><circle cx="300" cy="126" r="5" fill="var(--on-accent)"/>
    <path d="M192 168 Q240 96 286 124" class="i-flow" stroke-width="2.5"/><rect x="330" y="236" width="110" height="46" rx="14" class="i-card"/><path d="M346 262 l16 -8 l14 6 l24 -14" class="i-gs"/>`,
};
