/* hero-periodic.js — the homepage hero visual.
 *
 * Builds a complete periodic table in the DOM and lights elements at random,
 * continuously. It replaces the 121-frame WebP scroll-scrub that used to run
 * here, which is why the hero no longer needs a canvas or a fallback image:
 * this is markup and CSS, so it is sharp at any size and costs no downloads.
 *
 * The animation is deliberately cheap. Only opacity, colour, transform and
 * box-shadow change, all of them on a handful of tiles at a time, and the loop
 * is a single setTimeout chain rather than a per-frame rAF. It suspends
 * entirely when the hero scrolls out of view or the tab is hidden, so it costs
 * nothing while the user is reading the rest of the page.
 */

/* [atomic number, symbol, grid column, grid row].
   Rows 1-7 are the periods. Row 8 is the spacer gap. Rows 9 and 10 carry the
   lanthanides and actinides, pulled out beneath the main block in the
   conventional way, which is also how the reference layout shows them. */
const ELEMENTS = [
  [1,"H",1,1], [2,"He",18,1], [3,"Li",1,2], [4,"Be",2,2], [5,"B",13,2], [6,"C",14,2],
  [7,"N",15,2], [8,"O",16,2], [9,"F",17,2], [10,"Ne",18,2], [11,"Na",1,3], [12,"Mg",2,3],
  [13,"Al",13,3], [14,"Si",14,3], [15,"P",15,3], [16,"S",16,3], [17,"Cl",17,3], [18,"Ar",18,3],
  [19,"K",1,4], [20,"Ca",2,4], [21,"Sc",3,4], [22,"Ti",4,4], [23,"V",5,4], [24,"Cr",6,4],
  [25,"Mn",7,4], [26,"Fe",8,4], [27,"Co",9,4], [28,"Ni",10,4], [29,"Cu",11,4], [30,"Zn",12,4],
  [31,"Ga",13,4], [32,"Ge",14,4], [33,"As",15,4], [34,"Se",16,4], [35,"Br",17,4],
  [36,"Kr",18,4], [37,"Rb",1,5], [38,"Sr",2,5], [39,"Y",3,5], [40,"Zr",4,5], [41,"Nb",5,5],
  [42,"Mo",6,5], [43,"Tc",7,5], [44,"Ru",8,5], [45,"Rh",9,5], [46,"Pd",10,5], [47,"Ag",11,5],
  [48,"Cd",12,5], [49,"In",13,5], [50,"Sn",14,5], [51,"Sb",15,5], [52,"Te",16,5],
  [53,"I",17,5], [54,"Xe",18,5], [55,"Cs",1,6], [56,"Ba",2,6], [57,"La",3,9], [58,"Ce",4,9],
  [59,"Pr",5,9], [60,"Nd",6,9], [61,"Pm",7,9], [62,"Sm",8,9], [63,"Eu",9,9], [64,"Gd",10,9],
  [65,"Tb",11,9], [66,"Dy",12,9], [67,"Ho",13,9], [68,"Er",14,9], [69,"Tm",15,9],
  [70,"Yb",16,9], [71,"Lu",17,9], [72,"Hf",4,6], [73,"Ta",5,6], [74,"W",6,6], [75,"Re",7,6],
  [76,"Os",8,6], [77,"Ir",9,6], [78,"Pt",10,6], [79,"Au",11,6], [80,"Hg",12,6], [81,"Tl",13,6],
  [82,"Pb",14,6], [83,"Bi",15,6], [84,"Po",16,6], [85,"At",17,6], [86,"Rn",18,6],
  [87,"Fr",1,7], [88,"Ra",2,7], [89,"Ac",3,10], [90,"Th",4,10], [91,"Pa",5,10], [92,"U",6,10],
  [93,"Np",7,10], [94,"Pu",8,10], [95,"Am",9,10], [96,"Cm",10,10], [97,"Bk",11,10],
  [98,"Cf",12,10], [99,"Es",13,10], [100,"Fm",14,10], [101,"Md",15,10], [102,"No",16,10],
  [103,"Lr",17,10], [104,"Rf",4,7], [105,"Db",5,7], [106,"Sg",6,7], [107,"Bh",7,7],
  [108,"Hs",8,7], [109,"Mt",9,7], [110,"Ds",10,7], [111,"Rg",11,7], [112,"Cn",12,7],
  [113,"Nh",13,7], [114,"Fl",14,7], [115,"Mc",15,7], [116,"Lv",16,7], [117,"Ts",17,7],
  [118,"Og",18,7],
];

const F_BLOCK_LABELS = [
  { text: 'Lanthanides', row: 9 },
  { text: 'Actinides', row: 10 },
];

/* Pacing. Slow enough to read as individual events rather than a shimmer:
   one new element every ~0.6-1.2s, each holding for ~1.6s. That overlap means
   two or three tiles are usually alight at once, which keeps the table feeling
   continuously alive without any moment where several ignite together. */
const GAP_MIN_MS = 620;
const GAP_MAX_MS = 1180;
const HOLD_MS = 1600;
const MAX_CONCURRENT = 3;
/* Don't reuse an element until this many others have had a turn. Pure random
   choice clusters visibly — the same tile lighting twice within a couple of
   seconds reads as a bug rather than as chance. */
const RECENT_MEMORY = 14;

const rand = (min, max) => min + Math.random() * (max - min);

function buildTable(mount) {
  const table = document.createElement('div');
  table.className = 'hero-periodic__table';

  const grid = document.createElement('div');
  grid.className = 'hero-periodic__grid';

  for (const { text, row } of F_BLOCK_LABELS) {
    const label = document.createElement('span');
    label.className = 'hero-periodic__label';
    label.style.gridRow = String(row);
    label.textContent = text;
    grid.appendChild(label);
  }

  const tiles = ELEMENTS.map(([number, symbol, col, row]) => {
    const tile = document.createElement('span');
    tile.className = 'hero-periodic__tile';
    tile.style.gridColumn = String(col);
    tile.style.gridRow = String(row);

    const num = document.createElement('span');
    num.className = 'hero-periodic__num';
    num.textContent = String(number);

    const sym = document.createElement('span');
    sym.className = 'hero-periodic__sym';
    sym.textContent = symbol;

    tile.append(num, sym);
    grid.appendChild(tile);
    return tile;
  });

  table.appendChild(grid);

  /* Right-side frame: clips and centres the table. Kept as its own element so
     the wash on .hero-periodic stays full-width and unclipped. */
  const frame = document.createElement("div");
  frame.className = "hero-periodic__frame";
  frame.appendChild(table);
  mount.appendChild(frame);
  return tiles;
}

export function initHeroPeriodic() {
  const mount = document.querySelector('.hero-periodic');
  if (!mount) return;

  const tiles = buildTable(mount);
  mount.classList.add('is-built');

  /* Reduced motion: the table is the hero's artwork, so it still renders and
     still reads as a periodic table. It simply holds a few elements lit
     instead of cycling, so there is no movement at all. */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) {
    [5, 25, 46, 78].forEach((i) => tiles[i] && tiles[i].classList.add('is-lit'));
    return;
  }

  const recent = [];
  let timer = null;
  let running = false;

  function pick() {
    let tile;
    do {
      tile = tiles[(Math.random() * tiles.length) | 0];
    } while (recent.includes(tile) && recent.length < tiles.length);

    recent.push(tile);
    if (recent.length > RECENT_MEMORY) recent.shift();
    return tile;
  }

  function ignite() {
    if (document.querySelectorAll('.hero-periodic__tile.is-lit').length < MAX_CONCURRENT) {
      const tile = pick();
      tile.classList.add('is-lit');
      window.setTimeout(() => tile.classList.remove('is-lit'), HOLD_MS);
    }
    timer = window.setTimeout(ignite, rand(GAP_MIN_MS, GAP_MAX_MS));
  }

  function start() {
    if (running) return;
    running = true;
    timer = window.setTimeout(ignite, rand(0, GAP_MIN_MS));
  }

  /* Stopping only means "ignite nothing further". Tiles already alight keep
     their own timers and fade out on schedule, so pausing never blanks the
     table in one step, and coming back to the tab resumes mid-breath rather
     than from black. */
  function stop() {
    if (!running) return;
    running = false;
    window.clearTimeout(timer);
    timer = null;
  }

  /* Only animate while the hero is actually on screen. */
  let onScreen = true;
  const sync = () => (onScreen && !document.hidden ? start() : stop());

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { threshold: 0 }
    ).observe(mount);
  }
  document.addEventListener('visibilitychange', sync);

  /* If the user turns reduced motion on mid-session, respect it immediately. */
  const onPrefChange = (e) => {
    if (e.matches) {
      stop();
      tiles.forEach((t) => t.classList.remove('is-lit'));
      [5, 25, 46, 78].forEach((i) => tiles[i] && tiles[i].classList.add('is-lit'));
    } else {
      sync();
    }
  };
  if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', onPrefChange);

  sync();
}
