// ── Outfit state ──────────────────────────────────────────────
const outfit = { hat: null, top: null, bottom: null, shoes: null, accessory: null };

// ── Item registry ─────────────────────────────────────────────
// type 'svg' → renders SVG markup into the <g> layer inside the body SVG
// type 'png' → renders an <img> into the absolutely-positioned div layer
const items = {

  // HATS
  'hat-beret':   { type:'svg', slot:'hat', svg:`<ellipse cx="130" cy="76" rx="50" ry="12" fill="#c9c0d3"/><ellipse cx="130" cy="62" rx="40" ry="24" fill="#b8afc8"/><ellipse cx="130" cy="54" rx="28" ry="16" fill="#c9c0d3"/><circle cx="150" cy="44" r="5" fill="#b8afc8"/>` },
  'hat-bucket':  { type:'svg', slot:'hat', svg:`<ellipse cx="130" cy="76" rx="52" ry="9" fill="#c4a882"/><path d="M82,74 L90,48 Q130,38 170,48 L178,74 Z" fill="#d4b892"/><ellipse cx="130" cy="48" rx="40" ry="10" fill="#c4a882"/>` },
  'hat-cap':     { type:'svg', slot:'hat', svg:`<ellipse cx="130" cy="76" rx="48" ry="9" fill="#1c1c1e"/><path d="M84,72 Q84,42 130,40 Q176,42 176,72" fill="#2d2d2d"/><rect x="76" y="68" width="58" height="9" rx="4" fill="#1c1c1e"/>` },
  'hat-cowboy':  { type:'svg', slot:'hat', svg:`<ellipse cx="130" cy="76" rx="56" ry="9" fill="#8a7560"/><path d="M76,74 Q76,68 84,66 L92,42 Q130,32 168,42 L176,66 Q184,68 184,74 Z" fill="#9a8570"/><ellipse cx="130" cy="42" rx="36" ry="10" fill="#8a7560"/><path d="M76,72 Q102,62 130,66 Q158,62 184,72" fill="none" stroke="#7a6550" stroke-width="1.5"/>` },

  // TOPS (svg)
  'top-corset':    { type:'svg', slot:'top', svg:`<path d="M104,192 Q86,198 82,216 L78,240 L94,246 L94,300 L166,300 L166,246 L182,240 L178,216 Q174,198 156,192 Q144,200 130,200 Q116,200 104,192 Z" fill="#1c1c1e"/><line x1="130" y1="196" x2="130" y2="300" stroke="#3a3a3c" stroke-width="1.5"/><line x1="112" y1="208" x2="148" y2="208" stroke="#3a3a3c" stroke-width="1"/><line x1="110" y1="222" x2="150" y2="222" stroke="#3a3a3c" stroke-width="1"/><line x1="108" y1="236" x2="152" y2="236" stroke="#3a3a3c" stroke-width="1"/><line x1="108" y1="250" x2="152" y2="250" stroke="#3a3a3c" stroke-width="1"/><line x1="108" y1="264" x2="152" y2="264" stroke="#3a3a3c" stroke-width="1"/><line x1="108" y1="278" x2="152" y2="278" stroke="#3a3a3c" stroke-width="1"/><path d="M104,192 Q130,206 156,192" fill="none" stroke="#555" stroke-width="1.5"/>` },
  'top-oversized': { type:'svg', slot:'top', svg:`<path d="M88,188 Q64,198 58,222 L52,248 L76,256 L78,308 L182,308 L184,256 L208,248 L202,222 Q196,198 172,188 Q152,200 130,200 Q108,200 88,188 Z" fill="#e8c4bc"/><path d="M108,192 Q130,206 152,192" fill="none" stroke="#d4a898" stroke-width="1.5"/>` },
  'top-blazer':    { type:'svg', slot:'top', svg:`<path d="M96,192 Q72,200 66,220 L60,244 L80,250 L82,300 L178,300 L180,250 L200,244 L194,220 Q188,200 164,192 Q148,200 130,200 Q112,200 96,192 Z" fill="#c4a882"/><line x1="130" y1="198" x2="130" y2="300" stroke="#b09070" stroke-width="2"/><path d="M112,192 L106,300" fill="none" stroke="#b09070" stroke-width="1.2"/><path d="M148,192 L154,300" fill="none" stroke="#b09070" stroke-width="1.2"/><rect x="84" y="248" width="12" height="9" rx="2" fill="#b09070"/><rect x="84" y="264" width="12" height="9" rx="2" fill="#b09070"/><path d="M112,192 Q130,206 148,192" fill="none" stroke="#b09070" stroke-width="1.5"/>` },
  'top-crop':      { type:'svg', slot:'top', svg:`<path d="M100,192 Q78,200 72,218 L68,238 L86,244 L86,272 L174,272 L174,244 L192,238 L188,218 Q182,200 160,192 Q146,200 130,200 Q114,200 100,192 Z" fill="#b8c4b8"/><path d="M114,192 Q130,204 146,192" fill="none" stroke="#a0b0a0" stroke-width="1.5"/>` },
  'top-slip':      { type:'svg', slot:'top', svg:`<path d="M110,188 L104,194 L104,480 L156,480 L156,194 L150,188 Z" fill="#e8ddd0"/><path d="M110,188 Q130,184 150,188" fill="none" stroke="#d4c8b8" stroke-width="1.5"/><line x1="110" y1="188" x2="104" y2="194" stroke="#d4c8b8" stroke-width="1.5"/><line x1="150" y1="188" x2="156" y2="194" stroke="#d4c8b8" stroke-width="1.5"/><path d="M104,480 Q130,474 156,480" fill="none" stroke="#d4c8b8" stroke-width="1.5"/>` },
  'top-knit':      { type:'svg', slot:'top', svg:`<path d="M96,192 Q72,200 66,220 L60,244 L80,250 L82,300 L178,300 L180,250 L200,244 L194,220 Q188,200 164,192 Q148,200 130,200 Q112,200 96,192 Z" fill="#c9c0d3"/><path d="M112,192 Q130,206 148,192" fill="none" stroke="#b8afc8" stroke-width="2"/><path d="M80,250 Q130,242 180,250" fill="none" stroke="#b8afc8" stroke-width="1" stroke-dasharray="5,4"/><path d="M80,264 Q130,256 180,264" fill="none" stroke="#b8afc8" stroke-width="1" stroke-dasharray="5,4"/><path d="M80,278 Q130,270 180,278" fill="none" stroke="#b8afc8" stroke-width="1" stroke-dasharray="5,4"/><path d="M80,292 Q130,284 180,292" fill="none" stroke="#b8afc8" stroke-width="1" stroke-dasharray="5,4"/>` },

  // TOPS (png)
  'top-crop-tee':  { type:'png', slot:'top', png:'crop-top-transparent-image-free-png.png' },

  // BOTTOMS
  'bottom-miniskirt': { type:'svg', slot:'bottom', svg:`<path d="M100,296 L164,296 L172,380 L88,380 Z" fill="#1c1c1e"/><rect x="98" y="290" width="64" height="10" rx="3" fill="#2d2d2d"/><line x1="116" y1="300" x2="96" y2="380" stroke="#3a3a3c" stroke-width="1"/><line x1="130" y1="300" x2="130" y2="380" stroke="#3a3a3c" stroke-width="1"/><line x1="144" y1="300" x2="164" y2="380" stroke="#3a3a3c" stroke-width="1"/>` },
  'bottom-cargo':     { type:'svg', slot:'bottom', svg:`<path d="M96,296 Q88,296 86,304 L82,472 L86,476 L110,476 L112,380 L118,380 L120,476 L140,476 L142,380 L148,380 L150,476 L174,476 L178,472 L174,304 Q172,296 164,296 Z" fill="#8a8580"/><rect x="94" y="290" width="72" height="10" rx="3" fill="#7a7570"/><rect x="82" y="330" width="16" height="14" rx="3" fill="#7a7570"/><rect x="162" y="330" width="16" height="14" rx="3" fill="#7a7570"/><rect x="116" y="292" width="18" height="7" rx="2" fill="#c4a882"/>` },
  'bottom-trousers':  { type:'svg', slot:'bottom', svg:`<path d="M96,296 Q88,296 86,304 L82,472 L86,476 L110,476 L112,380 L118,380 L120,476 L140,476 L142,380 L148,380 L150,476 L174,476 L178,472 L174,304 Q172,296 164,296 Z" fill="#c4a882"/><rect x="94" y="290" width="72" height="10" rx="3" fill="#b09070"/><line x1="104" y1="300" x2="94" y2="476" stroke="#b09070" stroke-width="0.8"/><line x1="156" y1="300" x2="166" y2="476" stroke="#b09070" stroke-width="0.8"/>` },
  'bottom-midi':      { type:'svg', slot:'bottom', svg:`<path d="M96,296 L164,296 L178,476 L82,476 Z" fill="#e8c4bc"/><rect x="94" y="290" width="72" height="10" rx="3" fill="#d4a898"/><path d="M82,476 Q130,466 178,476" fill="none" stroke="#d4a898" stroke-width="2"/><path d="M86,380 Q130,370 174,380" fill="none" stroke="#d4a898" stroke-width="1" stroke-dasharray="5,4"/>` },
  'bottom-shorts':    { type:'svg', slot:'bottom', svg:`<path d="M96,296 Q88,296 86,304 L84,380 Q84,396 100,396 L114,396 L118,360 L122,396 L140,396 L144,360 L148,396 L160,396 Q176,396 176,380 L174,304 Q172,296 164,296 Z" fill="#c9c0d3"/><rect x="94" y="290" width="72" height="10" rx="3" fill="#b8afc8"/>` },

  // SHOES
  'shoes-boots-knee': { type:'svg', slot:'shoes', svg:`<rect x="82" y="390" width="34" height="82" rx="5" fill="#1c1c1e"/><path d="M82,458 Q82,480 100,480 L118,480 Q118,470 100,470 L100,390" fill="#1c1c1e"/><rect x="82" y="386" width="34" height="7" rx="2" fill="#2d2d2d"/><rect x="144" y="390" width="34" height="82" rx="5" fill="#1c1c1e"/><path d="M144,458 Q144,480 162,480 L180,480 Q180,470 162,470 L162,390" fill="#1c1c1e"/><rect x="144" y="386" width="34" height="7" rx="2" fill="#2d2d2d"/>` },
  'shoes-mules':      { type:'svg', slot:'shoes', svg:`<path d="M78,480 Q78,466 92,464 L112,464 Q122,464 124,474 L124,482 Q106,486 78,482 Z" fill="#c4a882"/><rect x="118" y="476" width="6" height="16" rx="3" fill="#b09070"/><path d="M112,464 Q120,456 128,460" fill="none" stroke="#b09070" stroke-width="2"/><path d="M136,480 Q148,466 158,464 L160,468 Q152,470 140,482" fill="#c4a882"/><path d="M148,480 Q148,466 162,464 L182,464 Q192,464 194,474 L194,482 Q176,486 148,482 Z" fill="#c4a882"/><rect x="188" y="476" width="6" height="16" rx="3" fill="#b09070"/><path d="M182,464 Q190,456 198,460" fill="none" stroke="#b09070" stroke-width="2"/>` },
  'shoes-sneakers':   { type:'svg', slot:'shoes', svg:`<ellipse cx="99" cy="488" rx="26" ry="9" fill="#e8ddd0"/><path d="M74,486 Q74,468 88,466 L106,466 L112,476 L120,466 L130,466 Q136,466 136,476 L136,486 Q118,492 74,488 Z" fill="#e8ddd0"/><path d="M88,466 L106,466 L112,476" fill="none" stroke="#c4a882" stroke-width="1.8"/><ellipse cx="161" cy="488" rx="26" ry="9" fill="#e8ddd0"/><path d="M136,486 Q136,468 150,466 L168,466 L174,476 L182,466 L192,466 Q198,466 198,476 L198,486 Q180,492 136,488 Z" fill="#e8ddd0"/><path d="M150,466 L168,466 L174,476" fill="none" stroke="#c4a882" stroke-width="1.8"/>` },
  'shoes-loafers':    { type:'svg', slot:'shoes', svg:`<path d="M76,484 Q76,470 90,468 L110,468 Q122,468 124,478 L124,486 Q104,490 76,486 Z" fill="#8a7560"/><path d="M90,468 Q102,462 110,468" fill="none" stroke="#6a5540" stroke-width="2"/><rect x="90" y="468" width="18" height="7" rx="2" fill="#6a5540"/><path d="M136,484 Q136,470 150,468 L170,468 Q182,468 184,478 L184,486 Q164,490 136,486 Z" fill="#8a7560"/><path d="M150,468 Q162,462 170,468" fill="none" stroke="#6a5540" stroke-width="2"/><rect x="150" y="468" width="18" height="7" rx="2" fill="#6a5540"/>` },

  // ACCESSORIES
  'acc-sunglasses':   { type:'svg', slot:'accessory', svg:`<rect x="88" y="98" rx="9" ry="9" width="30" height="18" fill="rgba(0,0,0,0.65)" stroke="#1c1c1e" stroke-width="1.5"/><rect x="142" y="98" rx="9" ry="9" width="30" height="18" fill="rgba(0,0,0,0.65)" stroke="#1c1c1e" stroke-width="1.5"/><line x1="118" y1="107" x2="142" y2="107" stroke="#1c1c1e" stroke-width="2.5"/><line x1="74" y1="102" x2="88" y2="107" stroke="#1c1c1e" stroke-width="2"/><line x1="186" y1="102" x2="172" y2="107" stroke="#1c1c1e" stroke-width="2"/>` },
  'acc-shoulder-bag': { type:'svg', slot:'accessory', svg:`<rect x="184" y="248" width="48" height="60" rx="6" fill="#c4a882"/><path d="M196,248 Q196,230 208,230 Q220,230 220,248" fill="none" stroke="#b09070" stroke-width="3.5"/><rect x="198" y="266" width="22" height="14" rx="3" fill="#b09070"/><circle cx="209" cy="273" r="4" fill="#c4a882"/><line x1="184" y1="248" x2="174" y2="230" stroke="#b09070" stroke-width="2"/>` },
  'acc-chain':        { type:'svg', slot:'accessory', svg:`<path d="M94,178 Q130,204 166,178" fill="none" stroke="#c4a882" stroke-width="3.5"/><circle cx="130" cy="202" r="9" fill="#c4a882"/><circle cx="130" cy="202" r="5" fill="#e8ddd0"/><circle cx="110" cy="192" r="2.5" fill="#c4a882"/><circle cx="150" cy="192" r="2.5" fill="#c4a882"/>` },
  'acc-scarf':        { type:'svg', slot:'accessory', svg:`<path d="M88,170 Q130,158 172,170" fill="none" stroke="#e8c4bc" stroke-width="14" stroke-linecap="round"/><path d="M88,170 Q130,158 172,170" fill="none" stroke="#d4a898" stroke-width="2" stroke-dasharray="5,4"/><path d="M168,166 L178,200 L172,196 L175,212" stroke="#e8c4bc" stroke-width="10" stroke-linecap="round" fill="none"/>` },
  'acc-belt':         { type:'svg', slot:'accessory', svg:`<rect x="90" y="292" width="80" height="9" rx="4" fill="#1c1c1e"/><rect x="120" y="288" width="20" height="17" rx="3" fill="#c4a882"/><rect x="124" y="292" width="12" height="9" rx="2" fill="#1c1c1e"/>` },
};

// ── Default SVG content per slot (bare body) ──────────────────
const defaultSVG = {
  hat:       '',
  top:       `<path d="M98,194 Q76,202 70,220 L66,244 L86,250 L88,292 L172,292 L174,250 L194,244 L190,220 Q184,202 162,194 Q148,202 130,202 Q112,202 98,194 Z" fill="url(#clothG)"/><path d="M114,194 Q130,206 146,194" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>`,
  bottom:    `<path d="M94,292 Q86,292 84,300 L80,474 L84,478 L112,478 L116,374 L122,374 L126,478 L142,478 L146,374 L152,374 L156,478 L176,478 L180,474 L176,300 Q174,292 166,292 Z" fill="url(#clothG)"/><rect x="92" y="285" width="76" height="10" rx="5" fill="url(#clothB)"/>`,
  shoes:     `<rect x="82" y="480" width="40" height="20" rx="10" fill="#f2f0ec"/><rect x="82" y="480" width="40" height="11" rx="5" fill="#e8e4de"/><rect x="84" y="489" width="36" height="11" rx="5" fill="#ffffff"/><rect x="138" y="480" width="40" height="20" rx="10" fill="#f2f0ec"/><rect x="138" y="480" width="40" height="11" rx="5" fill="#e8e4de"/><rect x="140" y="489" width="36" height="11" rx="5" fill="#ffffff"/>`,
  accessory: '',
};

// ── Apply / remove ────────────────────────────────────────────
function applyItem(slot, id) {
  const def      = items[id];
  if (!def) return;

  const svgLayer = document.getElementById(`layer-${slot}-svg`);
  const pngLayer = document.getElementById(`layer-${slot}-png`);

  if (outfit[slot] === id) {
    // Toggle off — restore default
    outfit[slot] = null;
    if (svgLayer) svgLayer.innerHTML = defaultSVG[slot] || '';
    if (pngLayer) pngLayer.innerHTML = '';
    document.querySelectorAll(`.item[data-slot="${slot}"]`).forEach(el => el.classList.remove('selected'));
  } else {
    outfit[slot] = id;

    if (def.type === 'png') {
      if (svgLayer) svgLayer.innerHTML = '';   // hide default SVG shape
      if (pngLayer) {
        const img = document.createElement('img');
        img.src = def.png;
        img.alt = id;
        pngLayer.innerHTML = '';
        pngLayer.appendChild(img);
      }
    } else {
      if (pngLayer) pngLayer.innerHTML = '';   // clear any previous PNG
      if (svgLayer) svgLayer.innerHTML = def.svg || '';
    }

    document.querySelectorAll(`.item[data-slot="${slot}"]`).forEach(el => {
      el.classList.toggle('selected', el.dataset.id === id);
    });
  }
}

function resetAll() {
  Object.keys(outfit).forEach(slot => {
    outfit[slot] = null;
    const svgLayer = document.getElementById(`layer-${slot}-svg`);
    const pngLayer = document.getElementById(`layer-${slot}-png`);
    if (svgLayer) svgLayer.innerHTML = defaultSVG[slot] || '';
    if (pngLayer) pngLayer.innerHTML = '';
  });
  document.querySelectorAll('.item').forEach(el => el.classList.remove('selected'));
}

function randomize() {
  resetAll();
  ['hat', 'top', 'bottom', 'shoes', 'accessory'].forEach(slot => {
    const els = document.querySelectorAll(`.item[data-slot="${slot}"]`);
    if (!els.length) return;
    if (Math.random() < 0.82) {
      const pick = els[Math.floor(Math.random() * els.length)];
      applyItem(slot, pick.dataset.id);
    }
  });
}

// ── Drag & Drop ───────────────────────────────────────────────
const ghost = document.getElementById('drag-ghost');
const stage = document.getElementById('character-stage') || document.querySelector('.wardrobe');
let dragData = null;

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', e => {
    dragData = { slot: item.dataset.slot, id: item.dataset.id };

    const thumb = item.querySelector('.item-thumb');
    const svg = item.querySelector('svg');
    const nameEl = item.querySelector('.item-name');
    const label = nameEl ? nameEl.textContent : '';

    if (ghost) {
      ghost.innerHTML = (thumb
        ? `<img src="${thumb.src}" alt="" style="width:72px;height:64px;object-fit:contain;">`
        : svg ? svg.outerHTML : ''
      ) + `<span>${label}</span>`;
      ghost.style.display = 'flex';
      if (ghost.offsetWidth && ghost.offsetHeight) {
        e.dataTransfer.setDragImage(ghost, ghost.offsetWidth / 2, ghost.offsetHeight / 2);
      }
    }
    e.dataTransfer.effectAllowed = 'copy';
    requestAnimationFrame(() => item.classList.add('dragging'));
  });

  item.addEventListener('dragend', () => {
    item.classList.remove('dragging');
    if (ghost) ghost.style.display = 'none';
    dragData = null;
    if (stage) stage.classList.remove('drag-over');
  });

  item.addEventListener('click', () => applyItem(item.dataset.slot, item.dataset.id));
});

if (stage) {
  stage.addEventListener('dragover', e => {
    if (!dragData) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    stage.classList.add('drag-over');
  });

  stage.addEventListener('dragleave', e => {
    if (!stage.contains(e.relatedTarget)) stage.classList.remove('drag-over');
  });

  stage.addEventListener('drop', e => {
    e.preventDefault();
    stage.classList.remove('drag-over');
    if (!dragData) return;
    applyItem(dragData.slot, dragData.id);
    stage.classList.add('drop-flash');
    setTimeout(() => stage.classList.remove('drop-flash'), 400);
  });
}

(function initDressUp() {
  resetAll();
})();
