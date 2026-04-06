(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = t(r);
    fetch(r.href, o);
  }
})();
function xi(i, e) {
  const t = document.getElementById(i);
  if (!(t instanceof e)) throw new Error(`Missing required DOM element: #${i}`);
  return t;
}
const Yc = [10, 10, 5],
  fa = {
    UP: " ",
    DOWN: "c",
    FORWARD: "w",
    BACKWARD: "s",
    LEFT: "a",
    RIGHT: "d",
    SPRINT: "shift",
    MENU: "f",
    INVENTORY: "e",
  },
  jc = {
    source: "static",
    staticTextureSheetUrl: "/assets/images/block-texture-sheet.png",
    showDownloadButton: !1,
    downloadFileName: "block-texture-sheet.png",
    columns: 16,
    iconSize: 64,
    chunkSize: 20,
    renderScale: Math.min(window.devicePixelRatio || 1, 2),
  },
  qs = {
    playerParams: { speed: 10, height: 1.85 },
    keysPreset: fa,
    inventoryHtmlElm: xi("inventory", HTMLDivElement),
    menuHtmlElm: xi("menu", HTMLDivElement),
    worldGenHtmlElm: xi("worldgen", HTMLDivElement),
    crosshairHtmlElm: xi("crosshair", HTMLImageElement),
    hudHintHtmlElm: xi("menu-hint", HTMLDivElement),
    inventoryBlockTextureSheetParams: jc,
  },
  At = {
    BLOCK_SIZE: 1,
    WORLD_SIZE_BLOCKS: 100,
    GROUND_BLOCK_NAME: "glass",
    PLAYER_STARTING_POSITION: Yc,
  },
  Kc = {
    backgroundColor: 8433151,
    axesHelper: { enabled: !0, size: 100 },
    grid: {
      enabled: !0,
      size: At.BLOCK_SIZE * At.WORLD_SIZE_BLOCKS,
      divisions: At.BLOCK_SIZE * At.WORLD_SIZE_BLOCKS,
    },
    camera: {
      fov: 70,
      aspect: 1,
      near: 1,
      far: 100,
      position: [...At.PLAYER_STARTING_POSITION],
      lookAt: [0, 1.85, 0],
    },
    ambientLight: { enabled: !0, color: 16777215, intensity: 1 },
    renderer: { antialias: !0, pixelRatio: window.devicePixelRatio },
  },
  $c = {
    keyPreset: fa,
    player: {
      blockName: "redstone_block",
      spawnPosition: [...At.PLAYER_STARTING_POSITION],
    },
    ui: { hideOnUIHtmlElems: [qs.crosshairHtmlElm] },
    actions: { menu: "MENU", inventory: "INVENTORY" },
  };
function Zc(i, e) {
  const t = () => {
    const n = window.innerWidth,
      r = window.innerHeight;
    ((i.aspect = n / r), i.updateProjectionMatrix(), e.setSize(n, r));
  };
  (window.addEventListener("resize", Jc(t, 300)),
    (document.body.style.margin = "0"),
    document.body.appendChild(e.domElement),
    t());
}
function Jc(i, e) {
  let t;
  return () => {
    (t !== void 0 && window.clearTimeout(t),
      (t = window.setTimeout(() => {
        i();
      }, e)));
  };
}
const ua = "182",
  Qc = 0,
  Na = 1,
  el = 2,
  dr = 1,
  tl = 2,
  Ci = 3,
  Sn = 0,
  Rt = 1,
  un = 2,
  dn = 0,
  ci = 1,
  Fa = 2,
  Oa = 3,
  Ba = 4,
  nl = 5,
  In = 100,
  il = 101,
  rl = 102,
  ol = 103,
  al = 104,
  sl = 200,
  cl = 201,
  ll = 202,
  fl = 203,
  mo = 204,
  _o = 205,
  ul = 206,
  dl = 207,
  hl = 208,
  pl = 209,
  ml = 210,
  _l = 211,
  bl = 212,
  gl = 213,
  xl = 214,
  bo = 0,
  go = 1,
  xo = 2,
  fi = 3,
  ko = 4,
  vo = 5,
  wo = 6,
  Mo = 7,
  Ys = 0,
  kl = 1,
  vl = 2,
  en = 0,
  js = 1,
  Ks = 2,
  $s = 3,
  Zs = 4,
  Js = 5,
  Qs = 6,
  ec = 7,
  tc = 300,
  Bn = 301,
  ui = 302,
  So = 303,
  yo = 304,
  Mr = 306,
  Eo = 1e3,
  Wt = 1001,
  To = 1002,
  ct = 1003,
  wl = 1004,
  Gi = 1005,
  kt = 1006,
  Pr = 1007,
  Nn = 1008,
  It = 1009,
  nc = 1010,
  ic = 1011,
  Di = 1012,
  da = 1013,
  nn = 1014,
  Xt = 1015,
  pn = 1016,
  ha = 1017,
  pa = 1018,
  Ii = 1020,
  rc = 35902,
  oc = 35899,
  ac = 1021,
  sc = 1022,
  qt = 1023,
  mn = 1026,
  Fn = 1027,
  ma = 1028,
  _a = 1029,
  di = 1030,
  ba = 1031,
  ga = 1033,
  hr = 33776,
  pr = 33777,
  mr = 33778,
  _r = 33779,
  Ao = 35840,
  Ro = 35841,
  Co = 35842,
  Po = 35843,
  Lo = 36196,
  Do = 37492,
  Io = 37496,
  Uo = 37488,
  No = 37489,
  Fo = 37490,
  Oo = 37491,
  Bo = 37808,
  zo = 37809,
  Vo = 37810,
  Go = 37811,
  Ho = 37812,
  Wo = 37813,
  Xo = 37814,
  qo = 37815,
  Yo = 37816,
  jo = 37817,
  Ko = 37818,
  $o = 37819,
  Zo = 37820,
  Jo = 37821,
  Qo = 36492,
  ea = 36494,
  ta = 36495,
  na = 36283,
  ia = 36284,
  ra = 36285,
  oa = 36286,
  Ml = 3200,
  cc = 0,
  Sl = 1,
  wn = "",
  Mt = "srgb",
  hi = "srgb-linear",
  gr = "linear",
  Ke = "srgb",
  Wn = 7680,
  za = 519,
  yl = 512,
  El = 513,
  Tl = 514,
  xa = 515,
  Al = 516,
  Rl = 517,
  ka = 518,
  Cl = 519,
  Va = 35044,
  Ga = "300 es",
  Jt = 2e3,
  xr = 2001;
function lc(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function Ui(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Pl() {
  const i = Ui("canvas");
  return ((i.style.display = "block"), i);
}
const Ha = {};
function Wa(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function Te(...i) {
  const e = "THREE." + i.shift();
  console.warn(e, ...i);
}
function He(...i) {
  const e = "THREE." + i.shift();
  console.error(e, ...i);
}
function Ni(...i) {
  const e = i.join(" ");
  e in Ha || ((Ha[e] = !0), Te(...i));
}
function Ll(i, e, t) {
  return new Promise(function (n, r) {
    function o() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(o, t);
          break;
        default:
          n();
      }
    }
    setTimeout(o, t);
  });
}
class zn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    (n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t));
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[e];
    if (r !== void 0) {
      const o = r.indexOf(t);
      o !== -1 && r.splice(o, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let o = 0, a = r.length; o < a; o++) r[o].call(this, e);
      e.target = null;
    }
  }
}
const gt = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  Lr = Math.PI / 180,
  aa = 180 / Math.PI;
function Oi() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    gt[i & 255] +
    gt[(i >> 8) & 255] +
    gt[(i >> 16) & 255] +
    gt[(i >> 24) & 255] +
    "-" +
    gt[e & 255] +
    gt[(e >> 8) & 255] +
    "-" +
    gt[((e >> 16) & 15) | 64] +
    gt[(e >> 24) & 255] +
    "-" +
    gt[(t & 63) | 128] +
    gt[(t >> 8) & 255] +
    "-" +
    gt[(t >> 16) & 255] +
    gt[(t >> 24) & 255] +
    gt[n & 255] +
    gt[(n >> 8) & 255] +
    gt[(n >> 16) & 255] +
    gt[(n >> 24) & 255]
  ).toLowerCase();
}
function Oe(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Dl(i, e) {
  return ((i % e) + e) % e;
}
function Dr(i, e, t) {
  return (1 - t) * i + t * e;
}
function ki(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Tt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class We {
  constructor(e = 0, t = 0) {
    ((We.prototype.isVector2 = !0), (this.x = e), (this.y = t));
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return ((this.x = e), (this.y = t), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), this);
  }
  addVectors(e, t) {
    return ((this.x = e.x + t.x), (this.y = e.y + t.y), this);
  }
  addScaledVector(e, t) {
    return ((this.x += e.x * t), (this.y += e.y * t), this);
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), this);
  }
  subVectors(e, t) {
    return ((this.x = e.x - t.x), (this.y = e.y - t.y), this);
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), this);
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6]),
      (this.y = r[1] * t + r[4] * n + r[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Oe(this.x, e.x, t.x)),
      (this.y = Oe(this.y, e.y, t.y)),
      this
    );
  }
  clampScalar(e, t) {
    return ((this.x = Oe(this.x, e, t)), (this.y = Oe(this.y, e, t)), this);
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t));
  }
  floor() {
    return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this);
  }
  ceil() {
    return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
  }
  round() {
    return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this);
  }
  roundToZero() {
    return ((this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this);
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Oe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), e);
  }
  fromBufferAttribute(e, t) {
    return ((this.x = e.getX(t)), (this.y = e.getY(t)), this);
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      o = this.x - e.x,
      a = this.y - e.y;
    return (
      (this.x = o * n - a * r + e.x),
      (this.y = o * r + a * n + e.y),
      this
    );
  }
  random() {
    return ((this.x = Math.random()), (this.y = Math.random()), this);
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y);
  }
}
class Bi {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ((this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r));
  }
  static slerpFlat(e, t, n, r, o, a, s) {
    let c = n[r + 0],
      l = n[r + 1],
      f = n[r + 2],
      u = n[r + 3],
      h = o[a + 0],
      p = o[a + 1],
      b = o[a + 2],
      k = o[a + 3];
    if (s <= 0) {
      ((e[t + 0] = c), (e[t + 1] = l), (e[t + 2] = f), (e[t + 3] = u));
      return;
    }
    if (s >= 1) {
      ((e[t + 0] = h), (e[t + 1] = p), (e[t + 2] = b), (e[t + 3] = k));
      return;
    }
    if (u !== k || c !== h || l !== p || f !== b) {
      let m = c * h + l * p + f * b + u * k;
      m < 0 && ((h = -h), (p = -p), (b = -b), (k = -k), (m = -m));
      let d = 1 - s;
      if (m < 0.9995) {
        const y = Math.acos(m),
          S = Math.sin(y);
        ((d = Math.sin(d * y) / S),
          (s = Math.sin(s * y) / S),
          (c = c * d + h * s),
          (l = l * d + p * s),
          (f = f * d + b * s),
          (u = u * d + k * s));
      } else {
        ((c = c * d + h * s),
          (l = l * d + p * s),
          (f = f * d + b * s),
          (u = u * d + k * s));
        const y = 1 / Math.sqrt(c * c + l * l + f * f + u * u);
        ((c *= y), (l *= y), (f *= y), (u *= y));
      }
    }
    ((e[t] = c), (e[t + 1] = l), (e[t + 2] = f), (e[t + 3] = u));
  }
  static multiplyQuaternionsFlat(e, t, n, r, o, a) {
    const s = n[r],
      c = n[r + 1],
      l = n[r + 2],
      f = n[r + 3],
      u = o[a],
      h = o[a + 1],
      p = o[a + 2],
      b = o[a + 3];
    return (
      (e[t] = s * b + f * u + c * p - l * h),
      (e[t + 1] = c * b + f * h + l * u - s * p),
      (e[t + 2] = l * b + f * p + s * h - c * u),
      (e[t + 3] = f * b - s * u - c * h - l * p),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get w() {
    return this._w;
  }
  set w(e) {
    ((this._w = e), this._onChangeCallback());
  }
  set(e, t, n, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      r = e._y,
      o = e._z,
      a = e._order,
      s = Math.cos,
      c = Math.sin,
      l = s(n / 2),
      f = s(r / 2),
      u = s(o / 2),
      h = c(n / 2),
      p = c(r / 2),
      b = c(o / 2);
    switch (a) {
      case "XYZ":
        ((this._x = h * f * u + l * p * b),
          (this._y = l * p * u - h * f * b),
          (this._z = l * f * b + h * p * u),
          (this._w = l * f * u - h * p * b));
        break;
      case "YXZ":
        ((this._x = h * f * u + l * p * b),
          (this._y = l * p * u - h * f * b),
          (this._z = l * f * b - h * p * u),
          (this._w = l * f * u + h * p * b));
        break;
      case "ZXY":
        ((this._x = h * f * u - l * p * b),
          (this._y = l * p * u + h * f * b),
          (this._z = l * f * b + h * p * u),
          (this._w = l * f * u - h * p * b));
        break;
      case "ZYX":
        ((this._x = h * f * u - l * p * b),
          (this._y = l * p * u + h * f * b),
          (this._z = l * f * b - h * p * u),
          (this._w = l * f * u + h * p * b));
        break;
      case "YZX":
        ((this._x = h * f * u + l * p * b),
          (this._y = l * p * u + h * f * b),
          (this._z = l * f * b - h * p * u),
          (this._w = l * f * u - h * p * b));
        break;
      case "XZY":
        ((this._x = h * f * u - l * p * b),
          (this._y = l * p * u - h * f * b),
          (this._z = l * f * b + h * p * u),
          (this._w = l * f * u + h * p * b));
        break;
      default:
        Te("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return (t === !0 && this._onChangeCallback(), this);
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      r = Math.sin(n);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      r = t[4],
      o = t[8],
      a = t[1],
      s = t[5],
      c = t[9],
      l = t[2],
      f = t[6],
      u = t[10],
      h = n + s + u;
    if (h > 0) {
      const p = 0.5 / Math.sqrt(h + 1);
      ((this._w = 0.25 / p),
        (this._x = (f - c) * p),
        (this._y = (o - l) * p),
        (this._z = (a - r) * p));
    } else if (n > s && n > u) {
      const p = 2 * Math.sqrt(1 + n - s - u);
      ((this._w = (f - c) / p),
        (this._x = 0.25 * p),
        (this._y = (r + a) / p),
        (this._z = (o + l) / p));
    } else if (s > u) {
      const p = 2 * Math.sqrt(1 + s - n - u);
      ((this._w = (o - l) / p),
        (this._x = (r + a) / p),
        (this._y = 0.25 * p),
        (this._z = (c + f) / p));
    } else {
      const p = 2 * Math.sqrt(1 + u - n - s);
      ((this._w = (a - r) / p),
        (this._x = (o + l) / p),
        (this._y = (c + f) / p),
        (this._z = 0.25 * p));
    }
    return (this._onChangeCallback(), this);
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < 1e-8
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Oe(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return (this.slerp(e, r), this);
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      r = e._y,
      o = e._z,
      a = e._w,
      s = t._x,
      c = t._y,
      l = t._z,
      f = t._w;
    return (
      (this._x = n * f + a * s + r * l - o * c),
      (this._y = r * f + a * c + o * s - n * l),
      (this._z = o * f + a * l + n * c - r * s),
      (this._w = a * f - n * s - r * c - o * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t <= 0) return this;
    if (t >= 1) return this.copy(e);
    let n = e._x,
      r = e._y,
      o = e._z,
      a = e._w,
      s = this.dot(e);
    s < 0 && ((n = -n), (r = -r), (o = -o), (a = -a), (s = -s));
    let c = 1 - t;
    if (s < 0.9995) {
      const l = Math.acos(s),
        f = Math.sin(l);
      ((c = Math.sin(c * l) / f),
        (t = Math.sin(t * l) / f),
        (this._x = this._x * c + n * t),
        (this._y = this._y * c + r * t),
        (this._z = this._z * c + o * t),
        (this._w = this._w * c + a * t),
        this._onChangeCallback());
    } else
      ((this._x = this._x * c + n * t),
        (this._y = this._y * c + r * t),
        (this._z = this._z * c + o * t),
        (this._w = this._w * c + a * t),
        this.normalize());
    return this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      r = Math.sqrt(1 - n),
      o = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      o * Math.sin(t),
      o * Math.cos(t),
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._w);
  }
}
class U {
  constructor(e = 0, t = 0, n = 0) {
    ((U.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n));
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), (this.z = e.z), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      this
    );
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      this
    );
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), this);
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x),
      (this.y = e.y * t.y),
      (this.z = e.z * t.z),
      this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Xa.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Xa.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[3] * n + o[6] * r),
      (this.y = o[1] * t + o[4] * n + o[7] * r),
      (this.z = o[2] * t + o[5] * n + o[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      o = e.elements,
      a = 1 / (o[3] * t + o[7] * n + o[11] * r + o[15]);
    return (
      (this.x = (o[0] * t + o[4] * n + o[8] * r + o[12]) * a),
      (this.y = (o[1] * t + o[5] * n + o[9] * r + o[13]) * a),
      (this.z = (o[2] * t + o[6] * n + o[10] * r + o[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      o = e.x,
      a = e.y,
      s = e.z,
      c = e.w,
      l = 2 * (a * r - s * n),
      f = 2 * (s * t - o * r),
      u = 2 * (o * n - a * t);
    return (
      (this.x = t + c * l + a * u - s * f),
      (this.y = n + c * f + s * l - o * u),
      (this.z = r + c * u + o * f - a * l),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix,
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld,
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * n + o[8] * r),
      (this.y = o[1] * t + o[5] * n + o[9] * r),
      (this.z = o[2] * t + o[6] * n + o[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Oe(this.x, e.x, t.x)),
      (this.y = Oe(this.y, e.y, t.y)),
      (this.z = Oe(this.z, e.z, t.z)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Oe(this.x, e, t)),
      (this.y = Oe(this.y, e, t)),
      (this.z = Oe(this.z, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      r = e.y,
      o = e.z,
      a = t.x,
      s = t.y,
      c = t.z;
    return (
      (this.x = r * c - o * s),
      (this.y = o * a - n * c),
      (this.z = n * s - r * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return (Ir.copy(this).projectOnVector(e), this.sub(Ir));
  }
  reflect(e) {
    return this.sub(Ir.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Oe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)),
      (this.y = n),
      (this.z = e * Math.cos(t)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return ((this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this);
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return ((this.x = t), (this.y = n), (this.z = r), this);
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return ((this.x = e._x), (this.y = e._y), (this.z = e._z), this);
  }
  setFromColor(e) {
    return ((this.x = e.r), (this.y = e.g), (this.z = e.b), this);
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)),
      (this.y = t),
      (this.z = n * Math.sin(e)),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z);
  }
}
const Ir = new U(),
  Xa = new Bi();
class Ce {
  constructor(e, t, n, r, o, a, s, c, l) {
    ((Ce.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, o, a, s, c, l));
  }
  set(e, t, n, r, o, a, s, c, l) {
    const f = this.elements;
    return (
      (f[0] = e),
      (f[1] = r),
      (f[2] = s),
      (f[3] = t),
      (f[4] = o),
      (f[5] = c),
      (f[6] = n),
      (f[7] = a),
      (f[8] = l),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      o = this.elements,
      a = n[0],
      s = n[3],
      c = n[6],
      l = n[1],
      f = n[4],
      u = n[7],
      h = n[2],
      p = n[5],
      b = n[8],
      k = r[0],
      m = r[3],
      d = r[6],
      y = r[1],
      S = r[4],
      M = r[7],
      E = r[2],
      T = r[5],
      R = r[8];
    return (
      (o[0] = a * k + s * y + c * E),
      (o[3] = a * m + s * S + c * T),
      (o[6] = a * d + s * M + c * R),
      (o[1] = l * k + f * y + u * E),
      (o[4] = l * m + f * S + u * T),
      (o[7] = l * d + f * M + u * R),
      (o[2] = h * k + p * y + b * E),
      (o[5] = h * m + p * S + b * T),
      (o[8] = h * d + p * M + b * R),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      o = e[3],
      a = e[4],
      s = e[5],
      c = e[6],
      l = e[7],
      f = e[8];
    return (
      t * a * f - t * s * l - n * o * f + n * s * c + r * o * l - r * a * c
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      o = e[3],
      a = e[4],
      s = e[5],
      c = e[6],
      l = e[7],
      f = e[8],
      u = f * a - s * l,
      h = s * c - f * o,
      p = l * o - a * c,
      b = t * u + n * h + r * p;
    if (b === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const k = 1 / b;
    return (
      (e[0] = u * k),
      (e[1] = (r * l - f * n) * k),
      (e[2] = (s * n - r * a) * k),
      (e[3] = h * k),
      (e[4] = (f * t - r * c) * k),
      (e[5] = (r * o - s * t) * k),
      (e[6] = p * k),
      (e[7] = (n * c - l * t) * k),
      (e[8] = (a * t - n * o) * k),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, r, o, a, s) {
    const c = Math.cos(o),
      l = Math.sin(o);
    return (
      this.set(
        n * c,
        n * l,
        -n * (c * a + l * s) + a + e,
        -r * l,
        r * c,
        -r * (-l * a + c * s) + s + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    return (this.premultiply(Ur.makeScale(e, t)), this);
  }
  rotate(e) {
    return (this.premultiply(Ur.makeRotation(-e)), this);
  }
  translate(e, t) {
    return (this.premultiply(Ur.makeTranslation(e, t)), this);
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, -n, 0, n, t, 0, 0, 0, 1), this);
  }
  makeScale(e, t) {
    return (this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this);
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ur = new Ce(),
  qa = new Ce().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322,
  ),
  Ya = new Ce().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715,
  );
function Il() {
  const i = {
      enabled: !0,
      workingColorSpace: hi,
      spaces: {},
      convert: function (r, o, a) {
        return (
          this.enabled === !1 ||
            o === a ||
            !o ||
            !a ||
            (this.spaces[o].transfer === Ke &&
              ((r.r = hn(r.r)), (r.g = hn(r.g)), (r.b = hn(r.b))),
            this.spaces[o].primaries !== this.spaces[a].primaries &&
              (r.applyMatrix3(this.spaces[o].toXYZ),
              r.applyMatrix3(this.spaces[a].fromXYZ)),
            this.spaces[a].transfer === Ke &&
              ((r.r = li(r.r)), (r.g = li(r.g)), (r.b = li(r.b)))),
          r
        );
      },
      workingToColorSpace: function (r, o) {
        return this.convert(r, this.workingColorSpace, o);
      },
      colorSpaceToWorking: function (r, o) {
        return this.convert(r, o, this.workingColorSpace);
      },
      getPrimaries: function (r) {
        return this.spaces[r].primaries;
      },
      getTransfer: function (r) {
        return r === wn ? gr : this.spaces[r].transfer;
      },
      getToneMappingMode: function (r) {
        return (
          this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard"
        );
      },
      getLuminanceCoefficients: function (r, o = this.workingColorSpace) {
        return r.fromArray(this.spaces[o].luminanceCoefficients);
      },
      define: function (r) {
        Object.assign(this.spaces, r);
      },
      _getMatrix: function (r, o, a) {
        return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (r) {
        return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (r = this.workingColorSpace) {
        return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (r, o) {
        return (
          Ni(
            "ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().",
          ),
          i.workingToColorSpace(r, o)
        );
      },
      toWorkingColorSpace: function (r, o) {
        return (
          Ni(
            "ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().",
          ),
          i.colorSpaceToWorking(r, o)
        );
      },
    },
    e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    t = [0.2126, 0.7152, 0.0722],
    n = [0.3127, 0.329];
  return (
    i.define({
      [hi]: {
        primaries: e,
        whitePoint: n,
        transfer: gr,
        toXYZ: qa,
        fromXYZ: Ya,
        luminanceCoefficients: t,
        workingColorSpaceConfig: { unpackColorSpace: Mt },
        outputColorSpaceConfig: { drawingBufferColorSpace: Mt },
      },
      [Mt]: {
        primaries: e,
        whitePoint: n,
        transfer: Ke,
        toXYZ: qa,
        fromXYZ: Ya,
        luminanceCoefficients: t,
        outputColorSpaceConfig: { drawingBufferColorSpace: Mt },
      },
    }),
    i
  );
}
const ze = Il();
function hn(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function li(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Xn;
class Ul {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      (Xn === void 0 && (Xn = Ui("canvas")),
        (Xn.width = e.width),
        (Xn.height = e.height));
      const r = Xn.getContext("2d");
      (e instanceof ImageData
        ? r.putImageData(e, 0, 0)
        : r.drawImage(e, 0, 0, e.width, e.height),
        (n = Xn));
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Ui("canvas");
      ((t.width = e.width), (t.height = e.height));
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height),
        o = r.data;
      for (let a = 0; a < o.length; a++) o[a] = hn(o[a] / 255) * 255;
      return (n.putImageData(r, 0, 0), t);
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(hn(t[n] / 255) * 255))
          : (t[n] = hn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        Te(
          "ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.",
        ),
        e
      );
  }
}
let Nl = 0;
class va {
  constructor(e = null) {
    ((this.isSource = !0),
      Object.defineProperty(this, "id", { value: Nl++ }),
      (this.uuid = Oi()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0));
  }
  getSize(e) {
    const t = this.data;
    return (
      typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement
        ? e.set(t.videoWidth, t.videoHeight, 0)
        : typeof VideoFrame < "u" && t instanceof VideoFrame
          ? e.set(t.displayHeight, t.displayWidth, 0)
          : t !== null
            ? e.set(t.width, t.height, t.depth || 0)
            : e.set(0, 0, 0),
      e
    );
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      r = this.data;
    if (r !== null) {
      let o;
      if (Array.isArray(r)) {
        o = [];
        for (let a = 0, s = r.length; a < s; a++)
          r[a].isDataTexture ? o.push(Nr(r[a].image)) : o.push(Nr(r[a]));
      } else o = Nr(r);
      n.url = o;
    }
    return (t || (e.images[this.uuid] = n), n);
  }
}
function Nr(i) {
  return (typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && i instanceof ImageBitmap)
    ? Ul.getDataURL(i)
    : i.data
      ? {
          data: Array.from(i.data),
          width: i.width,
          height: i.height,
          type: i.data.constructor.name,
        }
      : (Te("Texture: Unable to serialize Texture."), {});
}
let Fl = 0;
const Fr = new U();
class _t extends zn {
  constructor(
    e = _t.DEFAULT_IMAGE,
    t = _t.DEFAULT_MAPPING,
    n = Wt,
    r = Wt,
    o = kt,
    a = Nn,
    s = qt,
    c = It,
    l = _t.DEFAULT_ANISOTROPY,
    f = wn,
  ) {
    (super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: Fl++ }),
      (this.uuid = Oi()),
      (this.name = ""),
      (this.source = new va(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = r),
      (this.magFilter = o),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = s),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new We(0, 0)),
      (this.repeat = new We(1, 1)),
      (this.center = new We(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Ce()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = f),
      (this.userData = {}),
      (this.updateRanges = []),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.isArrayTexture = !!(e && e.depth && e.depth > 1)),
      (this.pmremVersion = 0));
  }
  get width() {
    return this.source.getSize(Fr).x;
  }
  get height() {
    return this.source.getSize(Fr).y;
  }
  get depth() {
    return this.source.getSize(Fr).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.renderTarget = e.renderTarget),
      (this.isRenderTargetTexture = e.isRenderTargetTexture),
      (this.isArrayTexture = e.isArrayTexture),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        Te(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      (r && n && r.isVector2 && n.isVector2) ||
      (r && n && r.isVector3 && n.isVector3) ||
      (r && n && r.isMatrix3 && n.isMatrix3)
        ? r.copy(n)
        : (this[t] = n);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== tc) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Eo:
          e.x = e.x - Math.floor(e.x);
          break;
        case Wt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case To:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Eo:
          e.y = e.y - Math.floor(e.y);
          break;
        case Wt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case To:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return (this.flipY && (e.y = 1 - e.y), e);
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
_t.DEFAULT_IMAGE = null;
_t.DEFAULT_MAPPING = tc;
_t.DEFAULT_ANISOTROPY = 1;
class st {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ((st.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = r));
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return ((this.x = e), (this.y = t), (this.z = n), (this.w = r), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), (this.w = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setW(e) {
    return ((this.w = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x),
      (this.y += e.y),
      (this.z += e.z),
      (this.w += e.w),
      this
    );
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), (this.w += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x),
      (this.y -= e.y),
      (this.z -= e.z),
      (this.w -= e.w),
      this
    );
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x),
      (this.y *= e.y),
      (this.z *= e.z),
      (this.w *= e.w),
      this
    );
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this);
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      o = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * o),
      (this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * o),
      (this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * o),
      (this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * o),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x),
      (this.y /= e.y),
      (this.z /= e.z),
      (this.w /= e.w),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, o;
    const c = e.elements,
      l = c[0],
      f = c[4],
      u = c[8],
      h = c[1],
      p = c[5],
      b = c[9],
      k = c[2],
      m = c[6],
      d = c[10];
    if (
      Math.abs(f - h) < 0.01 &&
      Math.abs(u - k) < 0.01 &&
      Math.abs(b - m) < 0.01
    ) {
      if (
        Math.abs(f + h) < 0.1 &&
        Math.abs(u + k) < 0.1 &&
        Math.abs(b + m) < 0.1 &&
        Math.abs(l + p + d - 3) < 0.1
      )
        return (this.set(1, 0, 0, 0), this);
      t = Math.PI;
      const S = (l + 1) / 2,
        M = (p + 1) / 2,
        E = (d + 1) / 2,
        T = (f + h) / 4,
        R = (u + k) / 4,
        N = (b + m) / 4;
      return (
        S > M && S > E
          ? S < 0.01
            ? ((n = 0), (r = 0.707106781), (o = 0.707106781))
            : ((n = Math.sqrt(S)), (r = T / n), (o = R / n))
          : M > E
            ? M < 0.01
              ? ((n = 0.707106781), (r = 0), (o = 0.707106781))
              : ((r = Math.sqrt(M)), (n = T / r), (o = N / r))
            : E < 0.01
              ? ((n = 0.707106781), (r = 0.707106781), (o = 0))
              : ((o = Math.sqrt(E)), (n = R / o), (r = N / o)),
        this.set(n, r, o, t),
        this
      );
    }
    let y = Math.sqrt(
      (m - b) * (m - b) + (u - k) * (u - k) + (h - f) * (h - f),
    );
    return (
      Math.abs(y) < 0.001 && (y = 1),
      (this.x = (m - b) / y),
      (this.y = (u - k) / y),
      (this.z = (h - f) / y),
      (this.w = Math.acos((l + p + d - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Oe(this.x, e.x, t.x)),
      (this.y = Oe(this.y, e.y, t.y)),
      (this.z = Oe(this.z, e.z, t.z)),
      (this.w = Oe(this.w, e.w, t.w)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Oe(this.x, e, t)),
      (this.y = Oe(this.y, e, t)),
      (this.z = Oe(this.z, e, t)),
      (this.w = Oe(this.w, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z, yield this.w);
  }
}
class Ol extends zn {
  constructor(e = 1, t = 1, n = {}) {
    (super(),
      (n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: kt,
          depthBuffer: !0,
          stencilBuffer: !1,
          resolveDepthBuffer: !0,
          resolveStencilBuffer: !0,
          depthTexture: null,
          samples: 0,
          count: 1,
          depth: 1,
          multiview: !1,
        },
        n,
      )),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = n.depth),
      (this.scissor = new st(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new st(0, 0, e, t)));
    const r = { width: e, height: t, depth: n.depth },
      o = new _t(r);
    this.textures = [];
    const a = n.count;
    for (let s = 0; s < a; s++)
      ((this.textures[s] = o.clone()),
        (this.textures[s].isRenderTargetTexture = !0),
        (this.textures[s].renderTarget = this));
    (this._setTextureOptions(n),
      (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this._depthTexture = null),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples),
      (this.multiview = n.multiview));
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: kt,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null,
    };
    (e.mapping !== void 0 && (t.mapping = e.mapping),
      e.wrapS !== void 0 && (t.wrapS = e.wrapS),
      e.wrapT !== void 0 && (t.wrapT = e.wrapT),
      e.wrapR !== void 0 && (t.wrapR = e.wrapR),
      e.magFilter !== void 0 && (t.magFilter = e.magFilter),
      e.minFilter !== void 0 && (t.minFilter = e.minFilter),
      e.format !== void 0 && (t.format = e.format),
      e.type !== void 0 && (t.type = e.type),
      e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy),
      e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace),
      e.flipY !== void 0 && (t.flipY = e.flipY),
      e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps),
      e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat));
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    (this._depthTexture !== null && (this._depthTexture.renderTarget = null),
      e !== null && (e.renderTarget = this),
      (this._depthTexture = e));
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      ((this.width = e), (this.height = t), (this.depth = n));
      for (let r = 0, o = this.textures.length; r < o; r++)
        ((this.textures[r].image.width = e),
          (this.textures[r].image.height = t),
          (this.textures[r].image.depth = n),
          this.textures[r].isData3DTexture !== !0 &&
            (this.textures[r].isArrayTexture =
              this.textures[r].image.depth > 1));
      this.dispose();
    }
    (this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0));
    for (let t = 0, n = e.textures.length; t < n; t++) {
      ((this.textures[t] = e.textures[t].clone()),
        (this.textures[t].isRenderTargetTexture = !0),
        (this.textures[t].renderTarget = this));
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new va(r);
    }
    return (
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class tn extends Ol {
  constructor(e = 1, t = 1, n = {}) {
    (super(e, t, n), (this.isWebGLRenderTarget = !0));
  }
}
class fc extends _t {
  constructor(e = null, t = 1, n = 1, r = 1) {
    (super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = ct),
      (this.minFilter = ct),
      (this.wrapR = Wt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set()));
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Bl extends _t {
  constructor(e = null, t = 1, n = 1, r = 1) {
    (super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = ct),
      (this.minFilter = ct),
      (this.wrapR = Wt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
class Vn {
  constructor(
    e = new U(1 / 0, 1 / 0, 1 / 0),
    t = new U(-1 / 0, -1 / 0, -1 / 0),
  ) {
    ((this.isBox3 = !0), (this.min = e), (this.max = t));
  }
  set(e, t) {
    return (this.min.copy(e), this.max.copy(t), this);
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(zt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(zt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = zt.copy(t).multiplyScalar(0.5);
    return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this);
  }
  setFromObject(e, t = !1) {
    return (this.makeEmpty(), this.expandByObject(e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.min.copy(e.min), this.max.copy(e.max), this);
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return (this.min.min(e), this.max.max(e), this);
  }
  expandByVector(e) {
    return (this.min.sub(e), this.max.add(e), this);
  }
  expandByScalar(e) {
    return (this.min.addScalar(-e), this.max.addScalar(e), this);
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const o = n.getAttribute("position");
      if (t === !0 && o !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, s = o.count; a < s; a++)
          (e.isMesh === !0
            ? e.getVertexPosition(a, zt)
            : zt.fromBufferAttribute(o, a),
            zt.applyMatrix4(e.matrixWorld),
            this.expandByPoint(zt));
      else
        (e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            Hi.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            Hi.copy(n.boundingBox)),
          Hi.applyMatrix4(e.matrixWorld),
          this.union(Hi));
    }
    const r = e.children;
    for (let o = 0, a = r.length; o < a; o++) this.expandByObject(r[o], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, zt),
      zt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    (this.getCenter(vi),
      Wi.subVectors(this.max, vi),
      qn.subVectors(e.a, vi),
      Yn.subVectors(e.b, vi),
      jn.subVectors(e.c, vi),
      _n.subVectors(Yn, qn),
      bn.subVectors(jn, Yn),
      Tn.subVectors(qn, jn));
    let t = [
      0,
      -_n.z,
      _n.y,
      0,
      -bn.z,
      bn.y,
      0,
      -Tn.z,
      Tn.y,
      _n.z,
      0,
      -_n.x,
      bn.z,
      0,
      -bn.x,
      Tn.z,
      0,
      -Tn.x,
      -_n.y,
      _n.x,
      0,
      -bn.y,
      bn.x,
      0,
      -Tn.y,
      Tn.x,
      0,
    ];
    return !Or(t, qn, Yn, jn, Wi) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Or(t, qn, Yn, jn, Wi))
      ? !1
      : (Xi.crossVectors(_n, bn),
        (t = [Xi.x, Xi.y, Xi.z]),
        Or(t, qn, Yn, jn, Wi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, zt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(zt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return (this.min.min(e.min), this.max.max(e.max), this);
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (an[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        an[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        an[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        an[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        an[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        an[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        an[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        an[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(an),
        this);
  }
  translate(e) {
    return (this.min.add(e), this.max.add(e), this);
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return (this.min.fromArray(e.min), this.max.fromArray(e.max), this);
  }
}
const an = [
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
  ],
  zt = new U(),
  Hi = new Vn(),
  qn = new U(),
  Yn = new U(),
  jn = new U(),
  _n = new U(),
  bn = new U(),
  Tn = new U(),
  vi = new U(),
  Wi = new U(),
  Xi = new U(),
  An = new U();
function Or(i, e, t, n, r) {
  for (let o = 0, a = i.length - 3; o <= a; o += 3) {
    An.fromArray(i, o);
    const s =
        r.x * Math.abs(An.x) + r.y * Math.abs(An.y) + r.z * Math.abs(An.z),
      c = e.dot(An),
      l = t.dot(An),
      f = n.dot(An);
    if (Math.max(-Math.max(c, l, f), Math.min(c, l, f)) > s) return !1;
  }
  return !0;
}
const zl = new Vn(),
  wi = new U(),
  Br = new U();
class mi {
  constructor(e = new U(), t = -1) {
    ((this.isSphere = !0), (this.center = e), (this.radius = t));
  }
  set(e, t) {
    return (this.center.copy(e), (this.radius = t), this);
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : zl.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let o = 0, a = e.length; o < a; o++)
      r = Math.max(r, n.distanceToSquared(e[o]));
    return ((this.radius = Math.sqrt(r)), this);
  }
  copy(e) {
    return (this.center.copy(e.center), (this.radius = e.radius), this);
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return (this.center.set(0, 0, 0), (this.radius = -1), this);
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return (this.center.add(e), this);
  }
  expandByPoint(e) {
    if (this.isEmpty()) return (this.center.copy(e), (this.radius = 0), this);
    wi.subVectors(e, this.center);
    const t = wi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        r = (n - this.radius) * 0.5;
      (this.center.addScaledVector(wi, r / n), (this.radius += r));
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
        ? (this.copy(e), this)
        : (this.center.equals(e.center) === !0
            ? (this.radius = Math.max(this.radius, e.radius))
            : (Br.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(wi.copy(e.center).add(Br)),
              this.expandByPoint(wi.copy(e.center).sub(Br))),
          this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return ((this.radius = e.radius), this.center.fromArray(e.center), this);
  }
}
const sn = new U(),
  zr = new U(),
  qi = new U(),
  gn = new U(),
  Vr = new U(),
  Yi = new U(),
  Gr = new U();
class uc {
  constructor(e = new U(), t = new U(0, 0, -1)) {
    ((this.origin = e), (this.direction = t));
  }
  set(e, t) {
    return (this.origin.copy(e), this.direction.copy(t), this);
  }
  copy(e) {
    return (this.origin.copy(e.origin), this.direction.copy(e.direction), this);
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return (this.direction.copy(e).sub(this.origin).normalize(), this);
  }
  recast(e) {
    return (this.origin.copy(this.at(e, sn)), this);
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = sn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (sn.copy(this.origin).addScaledVector(this.direction, t),
        sn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    (zr.copy(e).add(t).multiplyScalar(0.5),
      qi.copy(t).sub(e).normalize(),
      gn.copy(this.origin).sub(zr));
    const o = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(qi),
      s = gn.dot(this.direction),
      c = -gn.dot(qi),
      l = gn.lengthSq(),
      f = Math.abs(1 - a * a);
    let u, h, p, b;
    if (f > 0)
      if (((u = a * c - s), (h = a * s - c), (b = o * f), u >= 0))
        if (h >= -b)
          if (h <= b) {
            const k = 1 / f;
            ((u *= k),
              (h *= k),
              (p = u * (u + a * h + 2 * s) + h * (a * u + h + 2 * c) + l));
          } else
            ((h = o),
              (u = Math.max(0, -(a * h + s))),
              (p = -u * u + h * (h + 2 * c) + l));
        else
          ((h = -o),
            (u = Math.max(0, -(a * h + s))),
            (p = -u * u + h * (h + 2 * c) + l));
      else
        h <= -b
          ? ((u = Math.max(0, -(-a * o + s))),
            (h = u > 0 ? -o : Math.min(Math.max(-o, -c), o)),
            (p = -u * u + h * (h + 2 * c) + l))
          : h <= b
            ? ((u = 0),
              (h = Math.min(Math.max(-o, -c), o)),
              (p = h * (h + 2 * c) + l))
            : ((u = Math.max(0, -(a * o + s))),
              (h = u > 0 ? o : Math.min(Math.max(-o, -c), o)),
              (p = -u * u + h * (h + 2 * c) + l));
    else
      ((h = a > 0 ? -o : o),
        (u = Math.max(0, -(a * h + s))),
        (p = -u * u + h * (h + 2 * c) + l));
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, u),
      r && r.copy(zr).addScaledVector(qi, h),
      p
    );
  }
  intersectSphere(e, t) {
    sn.subVectors(e.center, this.origin);
    const n = sn.dot(this.direction),
      r = sn.dot(sn) - n * n,
      o = e.radius * e.radius;
    if (r > o) return null;
    const a = Math.sqrt(o - r),
      s = n - a,
      c = n + a;
    return c < 0 ? null : s < 0 ? this.at(c, t) : this.at(s, t);
  }
  intersectsSphere(e) {
    return e.radius < 0
      ? !1
      : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, o, a, s, c;
    const l = 1 / this.direction.x,
      f = 1 / this.direction.y,
      u = 1 / this.direction.z,
      h = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - h.x) * l), (r = (e.max.x - h.x) * l))
        : ((n = (e.max.x - h.x) * l), (r = (e.min.x - h.x) * l)),
      f >= 0
        ? ((o = (e.min.y - h.y) * f), (a = (e.max.y - h.y) * f))
        : ((o = (e.max.y - h.y) * f), (a = (e.min.y - h.y) * f)),
      n > a ||
      o > r ||
      ((o > n || isNaN(n)) && (n = o),
      (a < r || isNaN(r)) && (r = a),
      u >= 0
        ? ((s = (e.min.z - h.z) * u), (c = (e.max.z - h.z) * u))
        : ((s = (e.max.z - h.z) * u), (c = (e.min.z - h.z) * u)),
      n > c || s > r) ||
      ((s > n || n !== n) && (n = s), (c < r || r !== r) && (r = c), r < 0)
        ? null
        : this.at(n >= 0 ? n : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, sn) !== null;
  }
  intersectTriangle(e, t, n, r, o) {
    (Vr.subVectors(t, e), Yi.subVectors(n, e), Gr.crossVectors(Vr, Yi));
    let a = this.direction.dot(Gr),
      s;
    if (a > 0) {
      if (r) return null;
      s = 1;
    } else if (a < 0) ((s = -1), (a = -a));
    else return null;
    gn.subVectors(this.origin, e);
    const c = s * this.direction.dot(Yi.crossVectors(gn, Yi));
    if (c < 0) return null;
    const l = s * this.direction.dot(Vr.cross(gn));
    if (l < 0 || c + l > a) return null;
    const f = -s * gn.dot(Gr);
    return f < 0 ? null : this.at(f / a, o);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e),
      this.direction.transformDirection(e),
      this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Qe {
  constructor(e, t, n, r, o, a, s, c, l, f, u, h, p, b, k, m) {
    ((Qe.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, o, a, s, c, l, f, u, h, p, b, k, m));
  }
  set(e, t, n, r, o, a, s, c, l, f, u, h, p, b, k, m) {
    const d = this.elements;
    return (
      (d[0] = e),
      (d[4] = t),
      (d[8] = n),
      (d[12] = r),
      (d[1] = o),
      (d[5] = a),
      (d[9] = s),
      (d[13] = c),
      (d[2] = l),
      (d[6] = f),
      (d[10] = u),
      (d[14] = h),
      (d[3] = p),
      (d[7] = b),
      (d[11] = k),
      (d[15] = m),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  clone() {
    return new Qe().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return ((t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this);
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return this.determinant() === 0
      ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this)
      : (e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this);
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(e) {
    if (e.determinant() === 0) return this.identity();
    const t = this.elements,
      n = e.elements,
      r = 1 / Kn.setFromMatrixColumn(e, 0).length(),
      o = 1 / Kn.setFromMatrixColumn(e, 1).length(),
      a = 1 / Kn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * r),
      (t[1] = n[1] * r),
      (t[2] = n[2] * r),
      (t[3] = 0),
      (t[4] = n[4] * o),
      (t[5] = n[5] * o),
      (t[6] = n[6] * o),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      o = e.z,
      a = Math.cos(n),
      s = Math.sin(n),
      c = Math.cos(r),
      l = Math.sin(r),
      f = Math.cos(o),
      u = Math.sin(o);
    if (e.order === "XYZ") {
      const h = a * f,
        p = a * u,
        b = s * f,
        k = s * u;
      ((t[0] = c * f),
        (t[4] = -c * u),
        (t[8] = l),
        (t[1] = p + b * l),
        (t[5] = h - k * l),
        (t[9] = -s * c),
        (t[2] = k - h * l),
        (t[6] = b + p * l),
        (t[10] = a * c));
    } else if (e.order === "YXZ") {
      const h = c * f,
        p = c * u,
        b = l * f,
        k = l * u;
      ((t[0] = h + k * s),
        (t[4] = b * s - p),
        (t[8] = a * l),
        (t[1] = a * u),
        (t[5] = a * f),
        (t[9] = -s),
        (t[2] = p * s - b),
        (t[6] = k + h * s),
        (t[10] = a * c));
    } else if (e.order === "ZXY") {
      const h = c * f,
        p = c * u,
        b = l * f,
        k = l * u;
      ((t[0] = h - k * s),
        (t[4] = -a * u),
        (t[8] = b + p * s),
        (t[1] = p + b * s),
        (t[5] = a * f),
        (t[9] = k - h * s),
        (t[2] = -a * l),
        (t[6] = s),
        (t[10] = a * c));
    } else if (e.order === "ZYX") {
      const h = a * f,
        p = a * u,
        b = s * f,
        k = s * u;
      ((t[0] = c * f),
        (t[4] = b * l - p),
        (t[8] = h * l + k),
        (t[1] = c * u),
        (t[5] = k * l + h),
        (t[9] = p * l - b),
        (t[2] = -l),
        (t[6] = s * c),
        (t[10] = a * c));
    } else if (e.order === "YZX") {
      const h = a * c,
        p = a * l,
        b = s * c,
        k = s * l;
      ((t[0] = c * f),
        (t[4] = k - h * u),
        (t[8] = b * u + p),
        (t[1] = u),
        (t[5] = a * f),
        (t[9] = -s * f),
        (t[2] = -l * f),
        (t[6] = p * u + b),
        (t[10] = h - k * u));
    } else if (e.order === "XZY") {
      const h = a * c,
        p = a * l,
        b = s * c,
        k = s * l;
      ((t[0] = c * f),
        (t[4] = -u),
        (t[8] = l * f),
        (t[1] = h * u + k),
        (t[5] = a * f),
        (t[9] = p * u - b),
        (t[2] = b * u - p),
        (t[6] = s * f),
        (t[10] = k * u + h));
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Vl, e, Gl);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return (
      Lt.subVectors(e, t),
      Lt.lengthSq() === 0 && (Lt.z = 1),
      Lt.normalize(),
      xn.crossVectors(n, Lt),
      xn.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Lt.x += 1e-4) : (Lt.z += 1e-4),
        Lt.normalize(),
        xn.crossVectors(n, Lt)),
      xn.normalize(),
      ji.crossVectors(Lt, xn),
      (r[0] = xn.x),
      (r[4] = ji.x),
      (r[8] = Lt.x),
      (r[1] = xn.y),
      (r[5] = ji.y),
      (r[9] = Lt.y),
      (r[2] = xn.z),
      (r[6] = ji.z),
      (r[10] = Lt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      o = this.elements,
      a = n[0],
      s = n[4],
      c = n[8],
      l = n[12],
      f = n[1],
      u = n[5],
      h = n[9],
      p = n[13],
      b = n[2],
      k = n[6],
      m = n[10],
      d = n[14],
      y = n[3],
      S = n[7],
      M = n[11],
      E = n[15],
      T = r[0],
      R = r[4],
      N = r[8],
      x = r[12],
      v = r[1],
      P = r[5],
      z = r[9],
      B = r[13],
      W = r[2],
      Y = r[6],
      V = r[10],
      H = r[14],
      $ = r[3],
      fe = r[7],
      ae = r[11],
      ue = r[15];
    return (
      (o[0] = a * T + s * v + c * W + l * $),
      (o[4] = a * R + s * P + c * Y + l * fe),
      (o[8] = a * N + s * z + c * V + l * ae),
      (o[12] = a * x + s * B + c * H + l * ue),
      (o[1] = f * T + u * v + h * W + p * $),
      (o[5] = f * R + u * P + h * Y + p * fe),
      (o[9] = f * N + u * z + h * V + p * ae),
      (o[13] = f * x + u * B + h * H + p * ue),
      (o[2] = b * T + k * v + m * W + d * $),
      (o[6] = b * R + k * P + m * Y + d * fe),
      (o[10] = b * N + k * z + m * V + d * ae),
      (o[14] = b * x + k * B + m * H + d * ue),
      (o[3] = y * T + S * v + M * W + E * $),
      (o[7] = y * R + S * P + M * Y + E * fe),
      (o[11] = y * N + S * z + M * V + E * ae),
      (o[15] = y * x + S * B + M * H + E * ue),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      o = e[12],
      a = e[1],
      s = e[5],
      c = e[9],
      l = e[13],
      f = e[2],
      u = e[6],
      h = e[10],
      p = e[14],
      b = e[3],
      k = e[7],
      m = e[11],
      d = e[15],
      y = c * p - l * h,
      S = s * p - l * u,
      M = s * h - c * u,
      E = a * p - l * f,
      T = a * h - c * f,
      R = a * u - s * f;
    return (
      t * (k * y - m * S + d * M) -
      n * (b * y - m * E + d * T) +
      r * (b * S - k * E + d * R) -
      o * (b * M - k * T + m * R)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      o = e[3],
      a = e[4],
      s = e[5],
      c = e[6],
      l = e[7],
      f = e[8],
      u = e[9],
      h = e[10],
      p = e[11],
      b = e[12],
      k = e[13],
      m = e[14],
      d = e[15],
      y = u * m * l - k * h * l + k * c * p - s * m * p - u * c * d + s * h * d,
      S = b * h * l - f * m * l - b * c * p + a * m * p + f * c * d - a * h * d,
      M = f * k * l - b * u * l + b * s * p - a * k * p - f * s * d + a * u * d,
      E = b * u * c - f * k * c - b * s * h + a * k * h + f * s * m - a * u * m,
      T = t * y + n * S + r * M + o * E;
    if (T === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / T;
    return (
      (e[0] = y * R),
      (e[1] =
        (k * h * o -
          u * m * o -
          k * r * p +
          n * m * p +
          u * r * d -
          n * h * d) *
        R),
      (e[2] =
        (s * m * o -
          k * c * o +
          k * r * l -
          n * m * l -
          s * r * d +
          n * c * d) *
        R),
      (e[3] =
        (u * c * o -
          s * h * o -
          u * r * l +
          n * h * l +
          s * r * p -
          n * c * p) *
        R),
      (e[4] = S * R),
      (e[5] =
        (f * m * o -
          b * h * o +
          b * r * p -
          t * m * p -
          f * r * d +
          t * h * d) *
        R),
      (e[6] =
        (b * c * o -
          a * m * o -
          b * r * l +
          t * m * l +
          a * r * d -
          t * c * d) *
        R),
      (e[7] =
        (a * h * o -
          f * c * o +
          f * r * l -
          t * h * l -
          a * r * p +
          t * c * p) *
        R),
      (e[8] = M * R),
      (e[9] =
        (b * u * o -
          f * k * o -
          b * n * p +
          t * k * p +
          f * n * d -
          t * u * d) *
        R),
      (e[10] =
        (a * k * o -
          b * s * o +
          b * n * l -
          t * k * l -
          a * n * d +
          t * s * d) *
        R),
      (e[11] =
        (f * s * o -
          a * u * o -
          f * n * l +
          t * u * l +
          a * n * p -
          t * s * p) *
        R),
      (e[12] = E * R),
      (e[13] =
        (f * k * r -
          b * u * r +
          b * n * h -
          t * k * h -
          f * n * m +
          t * u * m) *
        R),
      (e[14] =
        (b * s * r -
          a * k * r -
          b * n * c +
          t * k * c +
          a * n * m -
          t * s * m) *
        R),
      (e[15] =
        (a * u * r -
          f * s * r +
          f * n * c -
          t * u * c -
          a * n * h +
          t * s * h) *
        R),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      o = e.z;
    return (
      (t[0] *= n),
      (t[4] *= r),
      (t[8] *= o),
      (t[1] *= n),
      (t[5] *= r),
      (t[9] *= o),
      (t[2] *= n),
      (t[6] *= r),
      (t[10] *= o),
      (t[3] *= n),
      (t[7] *= r),
      (t[11] *= o),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      o = 1 - n,
      a = e.x,
      s = e.y,
      c = e.z,
      l = o * a,
      f = o * s;
    return (
      this.set(
        l * a + n,
        l * s - r * c,
        l * c + r * s,
        0,
        l * s + r * c,
        f * s + n,
        f * c - r * a,
        0,
        l * c - r * s,
        f * c + r * a,
        o * c * c + n,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return (this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
  }
  makeShear(e, t, n, r, o, a) {
    return (this.set(1, n, o, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this);
  }
  compose(e, t, n) {
    const r = this.elements,
      o = t._x,
      a = t._y,
      s = t._z,
      c = t._w,
      l = o + o,
      f = a + a,
      u = s + s,
      h = o * l,
      p = o * f,
      b = o * u,
      k = a * f,
      m = a * u,
      d = s * u,
      y = c * l,
      S = c * f,
      M = c * u,
      E = n.x,
      T = n.y,
      R = n.z;
    return (
      (r[0] = (1 - (k + d)) * E),
      (r[1] = (p + M) * E),
      (r[2] = (b - S) * E),
      (r[3] = 0),
      (r[4] = (p - M) * T),
      (r[5] = (1 - (h + d)) * T),
      (r[6] = (m + y) * T),
      (r[7] = 0),
      (r[8] = (b + S) * R),
      (r[9] = (m - y) * R),
      (r[10] = (1 - (h + k)) * R),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const r = this.elements;
    if (((e.x = r[12]), (e.y = r[13]), (e.z = r[14]), this.determinant() === 0))
      return (n.set(1, 1, 1), t.identity(), this);
    let o = Kn.set(r[0], r[1], r[2]).length();
    const a = Kn.set(r[4], r[5], r[6]).length(),
      s = Kn.set(r[8], r[9], r[10]).length();
    (this.determinant() < 0 && (o = -o), Vt.copy(this));
    const l = 1 / o,
      f = 1 / a,
      u = 1 / s;
    return (
      (Vt.elements[0] *= l),
      (Vt.elements[1] *= l),
      (Vt.elements[2] *= l),
      (Vt.elements[4] *= f),
      (Vt.elements[5] *= f),
      (Vt.elements[6] *= f),
      (Vt.elements[8] *= u),
      (Vt.elements[9] *= u),
      (Vt.elements[10] *= u),
      t.setFromRotationMatrix(Vt),
      (n.x = o),
      (n.y = a),
      (n.z = s),
      this
    );
  }
  makePerspective(e, t, n, r, o, a, s = Jt, c = !1) {
    const l = this.elements,
      f = (2 * o) / (t - e),
      u = (2 * o) / (n - r),
      h = (t + e) / (t - e),
      p = (n + r) / (n - r);
    let b, k;
    if (c) ((b = o / (a - o)), (k = (a * o) / (a - o)));
    else if (s === Jt) ((b = -(a + o) / (a - o)), (k = (-2 * a * o) / (a - o)));
    else if (s === xr) ((b = -a / (a - o)), (k = (-a * o) / (a - o)));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s,
      );
    return (
      (l[0] = f),
      (l[4] = 0),
      (l[8] = h),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = u),
      (l[9] = p),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = b),
      (l[14] = k),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, r, o, a, s = Jt, c = !1) {
    const l = this.elements,
      f = 2 / (t - e),
      u = 2 / (n - r),
      h = -(t + e) / (t - e),
      p = -(n + r) / (n - r);
    let b, k;
    if (c) ((b = 1 / (a - o)), (k = a / (a - o)));
    else if (s === Jt) ((b = -2 / (a - o)), (k = -(a + o) / (a - o)));
    else if (s === xr) ((b = -1 / (a - o)), (k = -o / (a - o)));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s,
      );
    return (
      (l[0] = f),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = h),
      (l[1] = 0),
      (l[5] = u),
      (l[9] = 0),
      (l[13] = p),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = b),
      (l[14] = k),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Kn = new U(),
  Vt = new Qe(),
  Vl = new U(0, 0, 0),
  Gl = new U(1, 1, 1),
  xn = new U(),
  ji = new U(),
  Lt = new U(),
  ja = new Qe(),
  Ka = new Bi();
class jt {
  constructor(e = 0, t = 0, n = 0, r = jt.DEFAULT_ORDER) {
    ((this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r));
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get order() {
    return this._order;
  }
  set order(e) {
    ((this._order = e), this._onChangeCallback());
  }
  set(e, t, n, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements,
      o = r[0],
      a = r[4],
      s = r[8],
      c = r[1],
      l = r[5],
      f = r[9],
      u = r[2],
      h = r[6],
      p = r[10];
    switch (t) {
      case "XYZ":
        ((this._y = Math.asin(Oe(s, -1, 1))),
          Math.abs(s) < 0.9999999
            ? ((this._x = Math.atan2(-f, p)), (this._z = Math.atan2(-a, o)))
            : ((this._x = Math.atan2(h, l)), (this._z = 0)));
        break;
      case "YXZ":
        ((this._x = Math.asin(-Oe(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(s, p)), (this._z = Math.atan2(c, l)))
            : ((this._y = Math.atan2(-u, o)), (this._z = 0)));
        break;
      case "ZXY":
        ((this._x = Math.asin(Oe(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(-u, p)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(c, o))));
        break;
      case "ZYX":
        ((this._y = Math.asin(-Oe(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._x = Math.atan2(h, p)), (this._z = Math.atan2(c, o)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l))));
        break;
      case "YZX":
        ((this._z = Math.asin(Oe(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-f, l)), (this._y = Math.atan2(-u, o)))
            : ((this._x = 0), (this._y = Math.atan2(s, p))));
        break;
      case "XZY":
        ((this._z = Math.asin(-Oe(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(h, l)), (this._y = Math.atan2(s, o)))
            : ((this._x = Math.atan2(-f, p)), (this._y = 0)));
        break;
      default:
        Te(
          "Euler: .setFromRotationMatrix() encountered an unknown order: " + t,
        );
    }
    return ((this._order = t), n === !0 && this._onChangeCallback(), this);
  }
  setFromQuaternion(e, t, n) {
    return (
      ja.makeRotationFromQuaternion(e),
      this.setFromRotationMatrix(ja, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return (Ka.setFromEuler(this), this.setFromQuaternion(Ka, e));
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._order);
  }
}
jt.DEFAULT_ORDER = "XYZ";
class dc {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Hl = 0;
const $a = new U(),
  $n = new Bi(),
  cn = new Qe(),
  Ki = new U(),
  Mi = new U(),
  Wl = new U(),
  Xl = new Bi(),
  Za = new U(1, 0, 0),
  Ja = new U(0, 1, 0),
  Qa = new U(0, 0, 1),
  es = { type: "added" },
  ql = { type: "removed" },
  Zn = { type: "childadded", child: null },
  Hr = { type: "childremoved", child: null };
class bt extends zn {
  constructor() {
    (super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Hl++ }),
      (this.uuid = Oi()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = bt.DEFAULT_UP.clone()));
    const e = new U(),
      t = new jt(),
      n = new Bi(),
      r = new U(1, 1, 1);
    function o() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    (t._onChange(o),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new Qe() },
        normalMatrix: { value: new Ce() },
      }),
      (this.matrix = new Qe()),
      (this.matrixWorld = new Qe()),
      (this.matrixAutoUpdate = bt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new dc()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.customDepthMaterial = void 0),
      (this.customDistanceMaterial = void 0),
      (this.userData = {}));
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale));
  }
  applyQuaternion(e) {
    return (this.quaternion.premultiply(e), this);
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return ($n.setFromAxisAngle(e, t), this.quaternion.multiply($n), this);
  }
  rotateOnWorldAxis(e, t) {
    return ($n.setFromAxisAngle(e, t), this.quaternion.premultiply($n), this);
  }
  rotateX(e) {
    return this.rotateOnAxis(Za, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ja, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Qa, e);
  }
  translateOnAxis(e, t) {
    return (
      $a.copy(e).applyQuaternion(this.quaternion),
      this.position.add($a.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Za, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ja, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Qa, e);
  }
  localToWorld(e) {
    return (this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld));
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(cn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ki.copy(e) : Ki.set(e, t, n);
    const r = this.parent;
    (this.updateWorldMatrix(!0, !1),
      Mi.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? cn.lookAt(Mi, Ki, this.up)
        : cn.lookAt(Ki, Mi, this.up),
      this.quaternion.setFromRotationMatrix(cn),
      r &&
        (cn.extractRotation(r.matrixWorld),
        $n.setFromRotationMatrix(cn),
        this.quaternion.premultiply($n.invert())));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (He("Object3D.add: object can't be added as a child of itself.", e),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(es),
            (Zn.child = e),
            this.dispatchEvent(Zn),
            (Zn.child = null))
          : He("Object3D.add: object not an instance of THREE.Object3D.", e),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(ql),
        (Hr.child = e),
        this.dispatchEvent(Hr),
        (Hr.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return (e !== null && e.remove(this), this);
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      cn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), cn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(cn),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(es),
      (Zn.child = e),
      this.dispatchEvent(Zn),
      (Zn.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let o = 0, a = r.length; o < a; o++)
      r[o].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Mi, e, Wl),
      e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Mi, Xl, e),
      e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    (this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0));
  }
  updateMatrixWorld(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0)));
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      t === !0)
    ) {
      const r = this.children;
      for (let o = 0, a = r.length; o < a; o++) r[o].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const r = {};
    ((r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== "" && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = "InstancedMesh"),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = "BatchedMesh"),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.geometryInfo = this._geometryInfo.map((s) => ({
          ...s,
          boundingBox: s.boundingBox ? s.boundingBox.toJSON() : void 0,
          boundingSphere: s.boundingSphere ? s.boundingSphere.toJSON() : void 0,
        }))),
        (r.instanceInfo = this._instanceInfo.map((s) => ({ ...s }))),
        (r.availableInstanceIds = this._availableInstanceIds.slice()),
        (r.availableGeometryIds = this._availableGeometryIds.slice()),
        (r.nextIndexStart = this._nextIndexStart),
        (r.nextVertexStart = this._nextVertexStart),
        (r.geometryCount = this._geometryCount),
        (r.maxInstanceCount = this._maxInstanceCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.matricesTexture = this._matricesTexture.toJSON(e)),
        (r.indirectTexture = this._indirectTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (r.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (r.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null &&
          (r.boundingBox = this.boundingBox.toJSON())));
    function o(s, c) {
      return (s[c.uuid] === void 0 && (s[c.uuid] = c.toJSON(e)), c.uuid);
    }
    if (this.isScene)
      (this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid));
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = o(e.geometries, this.geometry);
      const s = this.geometry.parameters;
      if (s !== void 0 && s.shapes !== void 0) {
        const c = s.shapes;
        if (Array.isArray(c))
          for (let l = 0, f = c.length; l < f; l++) {
            const u = c[l];
            o(e.shapes, u);
          }
        else o(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (o(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const s = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          s.push(o(e.materials, this.material[c]));
        r.material = s;
      } else r.material = o(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let s = 0; s < this.children.length; s++)
        r.children.push(this.children[s].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let s = 0; s < this.animations.length; s++) {
        const c = this.animations[s];
        r.animations.push(o(e.animations, c));
      }
    }
    if (t) {
      const s = a(e.geometries),
        c = a(e.materials),
        l = a(e.textures),
        f = a(e.images),
        u = a(e.shapes),
        h = a(e.skeletons),
        p = a(e.animations),
        b = a(e.nodes);
      (s.length > 0 && (n.geometries = s),
        c.length > 0 && (n.materials = c),
        l.length > 0 && (n.textures = l),
        f.length > 0 && (n.images = f),
        u.length > 0 && (n.shapes = u),
        h.length > 0 && (n.skeletons = h),
        p.length > 0 && (n.animations = p),
        b.length > 0 && (n.nodes = b));
    }
    return ((n.object = r), n);
    function a(s) {
      const c = [];
      for (const l in s) {
        const f = s[l];
        (delete f.metadata, c.push(f));
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
bt.DEFAULT_UP = new U(0, 1, 0);
bt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Gt = new U(),
  ln = new U(),
  Wr = new U(),
  fn = new U(),
  Jn = new U(),
  Qn = new U(),
  ts = new U(),
  Xr = new U(),
  qr = new U(),
  Yr = new U(),
  jr = new st(),
  Kr = new st(),
  $r = new st();
class Ht {
  constructor(e = new U(), t = new U(), n = new U()) {
    ((this.a = e), (this.b = t), (this.c = n));
  }
  static getNormal(e, t, n, r) {
    (r.subVectors(n, t), Gt.subVectors(e, t), r.cross(Gt));
    const o = r.lengthSq();
    return o > 0 ? r.multiplyScalar(1 / Math.sqrt(o)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, o) {
    (Gt.subVectors(r, t), ln.subVectors(n, t), Wr.subVectors(e, t));
    const a = Gt.dot(Gt),
      s = Gt.dot(ln),
      c = Gt.dot(Wr),
      l = ln.dot(ln),
      f = ln.dot(Wr),
      u = a * l - s * s;
    if (u === 0) return (o.set(0, 0, 0), null);
    const h = 1 / u,
      p = (l * c - s * f) * h,
      b = (a * f - s * c) * h;
    return o.set(1 - p - b, b, p);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, fn) === null
      ? !1
      : fn.x >= 0 && fn.y >= 0 && fn.x + fn.y <= 1;
  }
  static getInterpolation(e, t, n, r, o, a, s, c) {
    return this.getBarycoord(e, t, n, r, fn) === null
      ? ((c.x = 0),
        (c.y = 0),
        "z" in c && (c.z = 0),
        "w" in c && (c.w = 0),
        null)
      : (c.setScalar(0),
        c.addScaledVector(o, fn.x),
        c.addScaledVector(a, fn.y),
        c.addScaledVector(s, fn.z),
        c);
  }
  static getInterpolatedAttribute(e, t, n, r, o, a) {
    return (
      jr.setScalar(0),
      Kr.setScalar(0),
      $r.setScalar(0),
      jr.fromBufferAttribute(e, t),
      Kr.fromBufferAttribute(e, n),
      $r.fromBufferAttribute(e, r),
      a.setScalar(0),
      a.addScaledVector(jr, o.x),
      a.addScaledVector(Kr, o.y),
      a.addScaledVector($r, o.z),
      a
    );
  }
  static isFrontFacing(e, t, n, r) {
    return (Gt.subVectors(n, t), ln.subVectors(e, t), Gt.cross(ln).dot(r) < 0);
  }
  set(e, t, n) {
    return (this.a.copy(e), this.b.copy(t), this.c.copy(n), this);
  }
  setFromPointsAndIndices(e, t, n, r) {
    return (this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this);
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this);
  }
  getArea() {
    return (
      Gt.subVectors(this.c, this.b),
      ln.subVectors(this.a, this.b),
      Gt.cross(ln).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Ht.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Ht.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, o) {
    return Ht.getInterpolation(e, this.a, this.b, this.c, t, n, r, o);
  }
  containsPoint(e) {
    return Ht.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Ht.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      r = this.b,
      o = this.c;
    let a, s;
    (Jn.subVectors(r, n), Qn.subVectors(o, n), Xr.subVectors(e, n));
    const c = Jn.dot(Xr),
      l = Qn.dot(Xr);
    if (c <= 0 && l <= 0) return t.copy(n);
    qr.subVectors(e, r);
    const f = Jn.dot(qr),
      u = Qn.dot(qr);
    if (f >= 0 && u <= f) return t.copy(r);
    const h = c * u - f * l;
    if (h <= 0 && c >= 0 && f <= 0)
      return ((a = c / (c - f)), t.copy(n).addScaledVector(Jn, a));
    Yr.subVectors(e, o);
    const p = Jn.dot(Yr),
      b = Qn.dot(Yr);
    if (b >= 0 && p <= b) return t.copy(o);
    const k = p * l - c * b;
    if (k <= 0 && l >= 0 && b <= 0)
      return ((s = l / (l - b)), t.copy(n).addScaledVector(Qn, s));
    const m = f * b - p * u;
    if (m <= 0 && u - f >= 0 && p - b >= 0)
      return (
        ts.subVectors(o, r),
        (s = (u - f) / (u - f + (p - b))),
        t.copy(r).addScaledVector(ts, s)
      );
    const d = 1 / (m + k + h);
    return (
      (a = k * d),
      (s = h * d),
      t.copy(n).addScaledVector(Jn, a).addScaledVector(Qn, s)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const hc = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  kn = { h: 0, s: 0, l: 0 },
  $i = { h: 0, s: 0, l: 0 };
function Zr(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
        ? e
        : t < 2 / 3
          ? i + (e - i) * 6 * (2 / 3 - t)
          : i
  );
}
class Fe {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor
        ? this.copy(r)
        : typeof r == "number"
          ? this.setHex(r)
          : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return ((this.r = e), (this.g = e), (this.b = e), this);
  }
  setHex(e, t = Mt) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      ze.colorSpaceToWorking(this, t),
      this
    );
  }
  setRGB(e, t, n, r = ze.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      ze.colorSpaceToWorking(this, r),
      this
    );
  }
  setHSL(e, t, n, r = ze.workingColorSpace) {
    if (((e = Dl(e, 1)), (t = Oe(t, 0, 1)), (n = Oe(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const o = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - o;
      ((this.r = Zr(a, o, e + 1 / 3)),
        (this.g = Zr(a, o, e)),
        (this.b = Zr(a, o, e - 1 / 3)));
    }
    return (ze.colorSpaceToWorking(this, r), this);
  }
  setStyle(e, t = Mt) {
    function n(o) {
      o !== void 0 &&
        parseFloat(o) < 1 &&
        Te("Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let o;
      const a = r[1],
        s = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (o =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s,
              ))
          )
            return (
              n(o[4]),
              this.setRGB(
                Math.min(255, parseInt(o[1], 10)) / 255,
                Math.min(255, parseInt(o[2], 10)) / 255,
                Math.min(255, parseInt(o[3], 10)) / 255,
                t,
              )
            );
          if (
            (o =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s,
              ))
          )
            return (
              n(o[4]),
              this.setRGB(
                Math.min(100, parseInt(o[1], 10)) / 100,
                Math.min(100, parseInt(o[2], 10)) / 100,
                Math.min(100, parseInt(o[3], 10)) / 100,
                t,
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (o =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s,
              ))
          )
            return (
              n(o[4]),
              this.setHSL(
                parseFloat(o[1]) / 360,
                parseFloat(o[2]) / 100,
                parseFloat(o[3]) / 100,
                t,
              )
            );
          break;
        default:
          Te("Color: Unknown color model " + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const o = r[1],
        a = o.length;
      if (a === 3)
        return this.setRGB(
          parseInt(o.charAt(0), 16) / 15,
          parseInt(o.charAt(1), 16) / 15,
          parseInt(o.charAt(2), 16) / 15,
          t,
        );
      if (a === 6) return this.setHex(parseInt(o, 16), t);
      Te("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Mt) {
    const n = hc[e.toLowerCase()];
    return (
      n !== void 0 ? this.setHex(n, t) : Te("Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return ((this.r = e.r), (this.g = e.g), (this.b = e.b), this);
  }
  copySRGBToLinear(e) {
    return ((this.r = hn(e.r)), (this.g = hn(e.g)), (this.b = hn(e.b)), this);
  }
  copyLinearToSRGB(e) {
    return ((this.r = li(e.r)), (this.g = li(e.g)), (this.b = li(e.b)), this);
  }
  convertSRGBToLinear() {
    return (this.copySRGBToLinear(this), this);
  }
  convertLinearToSRGB() {
    return (this.copyLinearToSRGB(this), this);
  }
  getHex(e = Mt) {
    return (
      ze.workingToColorSpace(xt.copy(this), e),
      Math.round(Oe(xt.r * 255, 0, 255)) * 65536 +
        Math.round(Oe(xt.g * 255, 0, 255)) * 256 +
        Math.round(Oe(xt.b * 255, 0, 255))
    );
  }
  getHexString(e = Mt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ze.workingColorSpace) {
    ze.workingToColorSpace(xt.copy(this), t);
    const n = xt.r,
      r = xt.g,
      o = xt.b,
      a = Math.max(n, r, o),
      s = Math.min(n, r, o);
    let c, l;
    const f = (s + a) / 2;
    if (s === a) ((c = 0), (l = 0));
    else {
      const u = a - s;
      switch (((l = f <= 0.5 ? u / (a + s) : u / (2 - a - s)), a)) {
        case n:
          c = (r - o) / u + (r < o ? 6 : 0);
          break;
        case r:
          c = (o - n) / u + 2;
          break;
        case o:
          c = (n - r) / u + 4;
          break;
      }
      c /= 6;
    }
    return ((e.h = c), (e.s = l), (e.l = f), e);
  }
  getRGB(e, t = ze.workingColorSpace) {
    return (
      ze.workingToColorSpace(xt.copy(this), t),
      (e.r = xt.r),
      (e.g = xt.g),
      (e.b = xt.b),
      e
    );
  }
  getStyle(e = Mt) {
    ze.workingToColorSpace(xt.copy(this), e);
    const t = xt.r,
      n = xt.g,
      r = xt.b;
    return e !== Mt
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return (this.getHSL(kn), this.setHSL(kn.h + e, kn.s + t, kn.l + n));
  }
  add(e) {
    return ((this.r += e.r), (this.g += e.g), (this.b += e.b), this);
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r),
      (this.g = e.g + t.g),
      (this.b = e.b + t.b),
      this
    );
  }
  addScalar(e) {
    return ((this.r += e), (this.g += e), (this.b += e), this);
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return ((this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this);
  }
  multiplyScalar(e) {
    return ((this.r *= e), (this.g *= e), (this.b *= e), this);
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    (this.getHSL(kn), e.getHSL($i));
    const n = Dr(kn.h, $i.h, t),
      r = Dr(kn.s, $i.s, t),
      o = Dr(kn.l, $i.l, t);
    return (this.setHSL(n, r, o), this);
  }
  setFromVector3(e) {
    return ((this.r = e.x), (this.g = e.y), (this.b = e.z), this);
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      r = this.b,
      o = e.elements;
    return (
      (this.r = o[0] * t + o[3] * n + o[6] * r),
      (this.g = o[1] * t + o[4] * n + o[7] * r),
      (this.b = o[2] * t + o[5] * n + o[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return ((this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    (yield this.r, yield this.g, yield this.b);
  }
}
const xt = new Fe();
Fe.NAMES = hc;
let Yl = 0;
class _i extends zn {
  constructor() {
    (super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Yl++ }),
      (this.uuid = Oi()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = ci),
      (this.side = Sn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = mo),
      (this.blendDst = _o),
      (this.blendEquation = In),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Fe(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = fi),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = za),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Wn),
      (this.stencilZFail = Wn),
      (this.stencilZPass = Wn),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.allowOverride = !0),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0));
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    (this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e));
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          Te(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          Te(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor
          ? r.set(n)
          : r && r.isVector3 && n && n.isVector3
            ? r.copy(n)
            : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    ((n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.sheenColorMap &&
        this.sheenColorMap.isTexture &&
        (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid),
      this.sheenRoughnessMap &&
        this.sheenRoughnessMap.isTexture &&
        (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== ci && (n.blending = this.blending),
      this.side !== Sn && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== mo && (n.blendSrc = this.blendSrc),
      this.blendDst !== _o && (n.blendDst = this.blendDst),
      this.blendEquation !== In && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== fi && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== za && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== Wn && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== Wn && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== Wn && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.allowOverride === !1 && (n.allowOverride = !1),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData));
    function r(o) {
      const a = [];
      for (const s in o) {
        const c = o[s];
        (delete c.metadata, a.push(c));
      }
      return a;
    }
    if (t) {
      const o = r(e.textures),
        a = r(e.images);
      (o.length > 0 && (n.textures = o), a.length > 0 && (n.images = a));
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite));
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let o = 0; o !== r; ++o) n[o] = t[o].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.allowOverride = e.allowOverride),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class wa extends _i {
  constructor(e) {
    (super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Fe(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new jt()),
      (this.combine = Ys),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const ut = new U(),
  Zi = new We();
let jl = 0;
class Yt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.",
      );
    ((this.isBufferAttribute = !0),
      Object.defineProperty(this, "id", { value: jl++ }),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Va),
      (this.updateRanges = []),
      (this.gpuType = Xt),
      (this.version = 0));
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return ((this.usage = e), this);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    ((e *= this.itemSize), (n *= t.itemSize));
    for (let r = 0, o = this.itemSize; r < o; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return (this.array.set(e), this);
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        (Zi.fromBufferAttribute(this, t),
          Zi.applyMatrix3(e),
          this.setXY(t, Zi.x, Zi.y));
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        (ut.fromBufferAttribute(this, t),
          ut.applyMatrix3(e),
          this.setXYZ(t, ut.x, ut.y, ut.z));
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (ut.fromBufferAttribute(this, t),
        ut.applyMatrix4(e),
        this.setXYZ(t, ut.x, ut.y, ut.z));
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (ut.fromBufferAttribute(this, t),
        ut.applyNormalMatrix(e),
        this.setXYZ(t, ut.x, ut.y, ut.z));
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (ut.fromBufferAttribute(this, t),
        ut.transformDirection(e),
        this.setXYZ(t, ut.x, ut.y, ut.z));
    return this;
  }
  set(e, t = 0) {
    return (this.array.set(e, t), this);
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return (this.normalized && (n = ki(n, this.array)), n);
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = Tt(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return (this.normalized && (t = ki(t, this.array)), t);
  }
  setX(e, t) {
    return (
      this.normalized && (t = Tt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return (this.normalized && (t = ki(t, this.array)), t);
  }
  setY(e, t) {
    return (
      this.normalized && (t = Tt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return (this.normalized && (t = ki(t, this.array)), t);
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Tt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return (this.normalized && (t = ki(t, this.array)), t);
  }
  setW(e, t) {
    return (
      this.normalized && (t = Tt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Tt(t, this.array)), (n = Tt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Tt(t, this.array)),
        (n = Tt(n, this.array)),
        (r = Tt(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, o) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Tt(t, this.array)),
        (n = Tt(n, this.array)),
        (r = Tt(r, this.array)),
        (o = Tt(o, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      (this.array[e + 3] = o),
      this
    );
  }
  onUpload(e) {
    return ((this.onUploadCallback = e), this);
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Va && (e.usage = this.usage),
      e
    );
  }
}
class pc extends Yt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class mc extends Yt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class St extends Yt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Kl = 0;
const Ft = new Qe(),
  Jr = new bt(),
  ei = new U(),
  Dt = new Vn(),
  Si = new Vn(),
  mt = new U();
class Bt extends zn {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Kl++ }),
      (this.uuid = Oi()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.indirectOffset = 0),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {}));
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (lc(e) ? mc : pc)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e, t = 0) {
    return ((this.indirect = e), (this.indirectOffset = t), this);
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return ((this.attributes[e] = t), this);
  }
  deleteAttribute(e) {
    return (delete this.attributes[e], this);
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    ((this.drawRange.start = e), (this.drawRange.count = t));
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const o = new Ce().getNormalMatrix(e);
      (n.applyNormalMatrix(o), (n.needsUpdate = !0));
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return (Ft.makeRotationFromQuaternion(e), this.applyMatrix4(Ft), this);
  }
  rotateX(e) {
    return (Ft.makeRotationX(e), this.applyMatrix4(Ft), this);
  }
  rotateY(e) {
    return (Ft.makeRotationY(e), this.applyMatrix4(Ft), this);
  }
  rotateZ(e) {
    return (Ft.makeRotationZ(e), this.applyMatrix4(Ft), this);
  }
  translate(e, t, n) {
    return (Ft.makeTranslation(e, t, n), this.applyMatrix4(Ft), this);
  }
  scale(e, t, n) {
    return (Ft.makeScale(e, t, n), this.applyMatrix4(Ft), this);
  }
  lookAt(e) {
    return (
      Jr.lookAt(e),
      Jr.updateMatrix(),
      this.applyMatrix4(Jr.matrix),
      this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(ei).negate(),
      this.translate(ei.x, ei.y, ei.z),
      this
    );
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, o = e.length; r < o; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new St(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const o = e[r];
        t.setXYZ(r, o.x, o.y, o.z || 0);
      }
      (e.length > t.count &&
        Te(
          "BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.",
        ),
        (t.needsUpdate = !0));
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Vn());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (He(
        "BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this,
      ),
        this.boundingBox.set(
          new U(-1 / 0, -1 / 0, -1 / 0),
          new U(1 / 0, 1 / 0, 1 / 0),
        ));
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, r = t.length; n < r; n++) {
          const o = t[n];
          (Dt.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (mt.addVectors(this.boundingBox.min, Dt.min),
                this.boundingBox.expandByPoint(mt),
                mt.addVectors(this.boundingBox.max, Dt.max),
                this.boundingBox.expandByPoint(mt))
              : (this.boundingBox.expandByPoint(Dt.min),
                this.boundingBox.expandByPoint(Dt.max)));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      He(
        'BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new mi());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (He(
        "BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this,
      ),
        this.boundingSphere.set(new U(), 1 / 0));
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Dt.setFromBufferAttribute(e), t))
        for (let o = 0, a = t.length; o < a; o++) {
          const s = t[o];
          (Si.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (mt.addVectors(Dt.min, Si.min),
                Dt.expandByPoint(mt),
                mt.addVectors(Dt.max, Si.max),
                Dt.expandByPoint(mt))
              : (Dt.expandByPoint(Si.min), Dt.expandByPoint(Si.max)));
        }
      Dt.getCenter(n);
      let r = 0;
      for (let o = 0, a = e.count; o < a; o++)
        (mt.fromBufferAttribute(e, o),
          (r = Math.max(r, n.distanceToSquared(mt))));
      if (t)
        for (let o = 0, a = t.length; o < a; o++) {
          const s = t[o],
            c = this.morphTargetsRelative;
          for (let l = 0, f = s.count; l < f; l++)
            (mt.fromBufferAttribute(s, l),
              c && (ei.fromBufferAttribute(e, l), mt.add(ei)),
              (r = Math.max(r, n.distanceToSquared(mt))));
        }
      ((this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          He(
            'BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          ));
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      He(
        "BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
      );
      return;
    }
    const n = t.position,
      r = t.normal,
      o = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Yt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      s = [],
      c = [];
    for (let N = 0; N < n.count; N++) ((s[N] = new U()), (c[N] = new U()));
    const l = new U(),
      f = new U(),
      u = new U(),
      h = new We(),
      p = new We(),
      b = new We(),
      k = new U(),
      m = new U();
    function d(N, x, v) {
      (l.fromBufferAttribute(n, N),
        f.fromBufferAttribute(n, x),
        u.fromBufferAttribute(n, v),
        h.fromBufferAttribute(o, N),
        p.fromBufferAttribute(o, x),
        b.fromBufferAttribute(o, v),
        f.sub(l),
        u.sub(l),
        p.sub(h),
        b.sub(h));
      const P = 1 / (p.x * b.y - b.x * p.y);
      isFinite(P) &&
        (k
          .copy(f)
          .multiplyScalar(b.y)
          .addScaledVector(u, -p.y)
          .multiplyScalar(P),
        m
          .copy(u)
          .multiplyScalar(p.x)
          .addScaledVector(f, -b.x)
          .multiplyScalar(P),
        s[N].add(k),
        s[x].add(k),
        s[v].add(k),
        c[N].add(m),
        c[x].add(m),
        c[v].add(m));
    }
    let y = this.groups;
    y.length === 0 && (y = [{ start: 0, count: e.count }]);
    for (let N = 0, x = y.length; N < x; ++N) {
      const v = y[N],
        P = v.start,
        z = v.count;
      for (let B = P, W = P + z; B < W; B += 3)
        d(e.getX(B + 0), e.getX(B + 1), e.getX(B + 2));
    }
    const S = new U(),
      M = new U(),
      E = new U(),
      T = new U();
    function R(N) {
      (E.fromBufferAttribute(r, N), T.copy(E));
      const x = s[N];
      (S.copy(x),
        S.sub(E.multiplyScalar(E.dot(x))).normalize(),
        M.crossVectors(T, x));
      const P = M.dot(c[N]) < 0 ? -1 : 1;
      a.setXYZW(N, S.x, S.y, S.z, P);
    }
    for (let N = 0, x = y.length; N < x; ++N) {
      const v = y[N],
        P = v.start,
        z = v.count;
      for (let B = P, W = P + z; B < W; B += 3)
        (R(e.getX(B + 0)), R(e.getX(B + 1)), R(e.getX(B + 2)));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        ((n = new Yt(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n));
      else for (let h = 0, p = n.count; h < p; h++) n.setXYZ(h, 0, 0, 0);
      const r = new U(),
        o = new U(),
        a = new U(),
        s = new U(),
        c = new U(),
        l = new U(),
        f = new U(),
        u = new U();
      if (e)
        for (let h = 0, p = e.count; h < p; h += 3) {
          const b = e.getX(h + 0),
            k = e.getX(h + 1),
            m = e.getX(h + 2);
          (r.fromBufferAttribute(t, b),
            o.fromBufferAttribute(t, k),
            a.fromBufferAttribute(t, m),
            f.subVectors(a, o),
            u.subVectors(r, o),
            f.cross(u),
            s.fromBufferAttribute(n, b),
            c.fromBufferAttribute(n, k),
            l.fromBufferAttribute(n, m),
            s.add(f),
            c.add(f),
            l.add(f),
            n.setXYZ(b, s.x, s.y, s.z),
            n.setXYZ(k, c.x, c.y, c.z),
            n.setXYZ(m, l.x, l.y, l.z));
        }
      else
        for (let h = 0, p = t.count; h < p; h += 3)
          (r.fromBufferAttribute(t, h + 0),
            o.fromBufferAttribute(t, h + 1),
            a.fromBufferAttribute(t, h + 2),
            f.subVectors(a, o),
            u.subVectors(r, o),
            f.cross(u),
            n.setXYZ(h + 0, f.x, f.y, f.z),
            n.setXYZ(h + 1, f.x, f.y, f.z),
            n.setXYZ(h + 2, f.x, f.y, f.z));
      (this.normalizeNormals(), (n.needsUpdate = !0));
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      (mt.fromBufferAttribute(e, t),
        mt.normalize(),
        e.setXYZ(t, mt.x, mt.y, mt.z));
  }
  toNonIndexed() {
    function e(s, c) {
      const l = s.array,
        f = s.itemSize,
        u = s.normalized,
        h = new l.constructor(c.length * f);
      let p = 0,
        b = 0;
      for (let k = 0, m = c.length; k < m; k++) {
        s.isInterleavedBufferAttribute
          ? (p = c[k] * s.data.stride + s.offset)
          : (p = c[k] * f);
        for (let d = 0; d < f; d++) h[b++] = l[p++];
      }
      return new Yt(h, f, u);
    }
    if (this.index === null)
      return (
        Te(
          "BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const t = new Bt(),
      n = this.index.array,
      r = this.attributes;
    for (const s in r) {
      const c = r[s],
        l = e(c, n);
      t.setAttribute(s, l);
    }
    const o = this.morphAttributes;
    for (const s in o) {
      const c = [],
        l = o[s];
      for (let f = 0, u = l.length; f < u; f++) {
        const h = l[f],
          p = e(h, n);
        c.push(p);
      }
      t.morphAttributes[s] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let s = 0, c = a.length; s < c; s++) {
      const l = a[s];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let o = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c],
        f = [];
      for (let u = 0, h = l.length; u < h; u++) {
        const p = l[u];
        f.push(p.toJSON(e.data));
      }
      f.length > 0 && ((r[c] = f), (o = !0));
    }
    o &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const s = this.boundingSphere;
    return (s !== null && (e.data.boundingSphere = s.toJSON()), e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const r = e.attributes;
    for (const l in r) {
      const f = r[l];
      this.setAttribute(l, f.clone(t));
    }
    const o = e.morphAttributes;
    for (const l in o) {
      const f = [],
        u = o[l];
      for (let h = 0, p = u.length; h < p; h++) f.push(u[h].clone(t));
      this.morphAttributes[l] = f;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, f = a.length; l < f; l++) {
      const u = a[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const s = e.boundingBox;
    s !== null && (this.boundingBox = s.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const ns = new Qe(),
  Rn = new uc(),
  Ji = new mi(),
  is = new U(),
  Qi = new U(),
  er = new U(),
  tr = new U(),
  Qr = new U(),
  nr = new U(),
  rs = new U(),
  ir = new U();
class Ut extends bt {
  constructor(e = new Bt(), t = new wa()) {
    (super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      (this.count = 1),
      this.updateMorphTargets());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary,
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let o = 0, a = r.length; o < a; o++) {
          const s = r[o].name || String(o);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[s] = o));
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      r = n.attributes.position,
      o = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const s = this.morphTargetInfluences;
    if (o && s) {
      nr.set(0, 0, 0);
      for (let c = 0, l = o.length; c < l; c++) {
        const f = s[c],
          u = o[c];
        f !== 0 &&
          (Qr.fromBufferAttribute(u, e),
          a ? nr.addScaledVector(Qr, f) : nr.addScaledVector(Qr.sub(t), f));
      }
      t.add(nr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.material,
      o = this.matrixWorld;
    r !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ji.copy(n.boundingSphere),
      Ji.applyMatrix4(o),
      Rn.copy(e.ray).recast(e.near),
      !(
        Ji.containsPoint(Rn.origin) === !1 &&
        (Rn.intersectSphere(Ji, is) === null ||
          Rn.origin.distanceToSquared(is) > (e.far - e.near) ** 2)
      ) &&
        (ns.copy(o).invert(),
        Rn.copy(e.ray).applyMatrix4(ns),
        !(n.boundingBox !== null && Rn.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, Rn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const o = this.geometry,
      a = this.material,
      s = o.index,
      c = o.attributes.position,
      l = o.attributes.uv,
      f = o.attributes.uv1,
      u = o.attributes.normal,
      h = o.groups,
      p = o.drawRange;
    if (s !== null)
      if (Array.isArray(a))
        for (let b = 0, k = h.length; b < k; b++) {
          const m = h[b],
            d = a[m.materialIndex],
            y = Math.max(m.start, p.start),
            S = Math.min(
              s.count,
              Math.min(m.start + m.count, p.start + p.count),
            );
          for (let M = y, E = S; M < E; M += 3) {
            const T = s.getX(M),
              R = s.getX(M + 1),
              N = s.getX(M + 2);
            ((r = rr(this, d, e, n, l, f, u, T, R, N)),
              r &&
                ((r.faceIndex = Math.floor(M / 3)),
                (r.face.materialIndex = m.materialIndex),
                t.push(r)));
          }
        }
      else {
        const b = Math.max(0, p.start),
          k = Math.min(s.count, p.start + p.count);
        for (let m = b, d = k; m < d; m += 3) {
          const y = s.getX(m),
            S = s.getX(m + 1),
            M = s.getX(m + 2);
          ((r = rr(this, a, e, n, l, f, u, y, S, M)),
            r && ((r.faceIndex = Math.floor(m / 3)), t.push(r)));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let b = 0, k = h.length; b < k; b++) {
          const m = h[b],
            d = a[m.materialIndex],
            y = Math.max(m.start, p.start),
            S = Math.min(
              c.count,
              Math.min(m.start + m.count, p.start + p.count),
            );
          for (let M = y, E = S; M < E; M += 3) {
            const T = M,
              R = M + 1,
              N = M + 2;
            ((r = rr(this, d, e, n, l, f, u, T, R, N)),
              r &&
                ((r.faceIndex = Math.floor(M / 3)),
                (r.face.materialIndex = m.materialIndex),
                t.push(r)));
          }
        }
      else {
        const b = Math.max(0, p.start),
          k = Math.min(c.count, p.start + p.count);
        for (let m = b, d = k; m < d; m += 3) {
          const y = m,
            S = m + 1,
            M = m + 2;
          ((r = rr(this, a, e, n, l, f, u, y, S, M)),
            r && ((r.faceIndex = Math.floor(m / 3)), t.push(r)));
        }
      }
  }
}
function $l(i, e, t, n, r, o, a, s) {
  let c;
  if (
    (e.side === Rt
      ? (c = n.intersectTriangle(a, o, r, !0, s))
      : (c = n.intersectTriangle(r, o, a, e.side === Sn, s)),
    c === null)
  )
    return null;
  (ir.copy(s), ir.applyMatrix4(i.matrixWorld));
  const l = t.ray.origin.distanceTo(ir);
  return l < t.near || l > t.far
    ? null
    : { distance: l, point: ir.clone(), object: i };
}
function rr(i, e, t, n, r, o, a, s, c, l) {
  (i.getVertexPosition(s, Qi),
    i.getVertexPosition(c, er),
    i.getVertexPosition(l, tr));
  const f = $l(i, e, t, n, Qi, er, tr, rs);
  if (f) {
    const u = new U();
    (Ht.getBarycoord(rs, Qi, er, tr, u),
      r && (f.uv = Ht.getInterpolatedAttribute(r, s, c, l, u, new We())),
      o && (f.uv1 = Ht.getInterpolatedAttribute(o, s, c, l, u, new We())),
      a &&
        ((f.normal = Ht.getInterpolatedAttribute(a, s, c, l, u, new U())),
        f.normal.dot(n.direction) > 0 && f.normal.multiplyScalar(-1)));
    const h = { a: s, b: c, c: l, normal: new U(), materialIndex: 0 };
    (Ht.getNormal(Qi, er, tr, h.normal), (f.face = h), (f.barycoord = u));
  }
  return f;
}
class Gn extends Bt {
  constructor(e = 1, t = 1, n = 1, r = 1, o = 1, a = 1) {
    (super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: o,
        depthSegments: a,
      }));
    const s = this;
    ((r = Math.floor(r)), (o = Math.floor(o)), (a = Math.floor(a)));
    const c = [],
      l = [],
      f = [],
      u = [];
    let h = 0,
      p = 0;
    (b("z", "y", "x", -1, -1, n, t, e, a, o, 0),
      b("z", "y", "x", 1, -1, n, t, -e, a, o, 1),
      b("x", "z", "y", 1, 1, e, n, t, r, a, 2),
      b("x", "z", "y", 1, -1, e, n, -t, r, a, 3),
      b("x", "y", "z", 1, -1, e, t, n, r, o, 4),
      b("x", "y", "z", -1, -1, e, t, -n, r, o, 5),
      this.setIndex(c),
      this.setAttribute("position", new St(l, 3)),
      this.setAttribute("normal", new St(f, 3)),
      this.setAttribute("uv", new St(u, 2)));
    function b(k, m, d, y, S, M, E, T, R, N, x) {
      const v = M / R,
        P = E / N,
        z = M / 2,
        B = E / 2,
        W = T / 2,
        Y = R + 1,
        V = N + 1;
      let H = 0,
        $ = 0;
      const fe = new U();
      for (let ae = 0; ae < V; ae++) {
        const ue = ae * P - B;
        for (let Ue = 0; Ue < Y; Ue++) {
          const Le = Ue * v - z;
          ((fe[k] = Le * y),
            (fe[m] = ue * S),
            (fe[d] = W),
            l.push(fe.x, fe.y, fe.z),
            (fe[k] = 0),
            (fe[m] = 0),
            (fe[d] = T > 0 ? 1 : -1),
            f.push(fe.x, fe.y, fe.z),
            u.push(Ue / R),
            u.push(1 - ae / N),
            (H += 1));
        }
      }
      for (let ae = 0; ae < N; ae++)
        for (let ue = 0; ue < R; ue++) {
          const Ue = h + ue + Y * ae,
            Le = h + ue + Y * (ae + 1),
            rt = h + (ue + 1) + Y * (ae + 1),
            it = h + (ue + 1) + Y * ae;
          (c.push(Ue, Le, it), c.push(Le, rt, it), ($ += 6));
        }
      (s.addGroup(p, $, x), (p += $), (h += H));
    }
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new Gn(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments,
    );
  }
}
function pi(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (Te(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().",
            ),
            (e[t][n] = null))
          : (e[t][n] = r.clone())
        : Array.isArray(r)
          ? (e[t][n] = r.slice())
          : (e[t][n] = r);
    }
  }
  return e;
}
function wt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = pi(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function Zl(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function _c(i) {
  const e = i.getRenderTarget();
  return e === null
    ? i.outputColorSpace
    : e.isXRRenderTarget === !0
      ? e.texture.colorSpace
      : ze.workingColorSpace;
}
const Jl = { clone: pi, merge: wt };
var Ql = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  ef = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class rn extends _i {
  constructor(e) {
    (super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Ql),
      (this.fragmentShader = ef),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = pi(e.uniforms)),
      (this.uniformsGroups = Zl(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      (this.defaultAttributeValues = Object.assign(
        {},
        e.defaultAttributeValues,
      )),
      (this.index0AttributeName = e.index0AttributeName),
      (this.uniformsNeedUpdate = e.uniformsNeedUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    ((t.glslVersion = this.glslVersion), (t.uniforms = {}));
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture
        ? (t.uniforms[r] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
          ? (t.uniforms[r] = { type: "c", value: a.getHex() })
          : a && a.isVector2
            ? (t.uniforms[r] = { type: "v2", value: a.toArray() })
            : a && a.isVector3
              ? (t.uniforms[r] = { type: "v3", value: a.toArray() })
              : a && a.isVector4
                ? (t.uniforms[r] = { type: "v4", value: a.toArray() })
                : a && a.isMatrix3
                  ? (t.uniforms[r] = { type: "m3", value: a.toArray() })
                  : a && a.isMatrix4
                    ? (t.uniforms[r] = { type: "m4", value: a.toArray() })
                    : (t.uniforms[r] = { value: a });
    }
    (Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping));
    const n = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
    return (Object.keys(n).length > 0 && (t.extensions = n), t);
  }
}
class bc extends bt {
  constructor() {
    (super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Qe()),
      (this.projectionMatrix = new Qe()),
      (this.projectionMatrixInverse = new Qe()),
      (this.coordinateSystem = Jt),
      (this._reversedDepth = !1));
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    (super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  updateWorldMatrix(e, t) {
    (super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const vn = new U(),
  os = new We(),
  as = new We();
class Ot extends bc {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    (super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    ((this.fov = aa * 2 * Math.atan(t)), this.updateProjectionMatrix());
  }
  getFocalLength() {
    const e = Math.tan(Lr * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return aa * 2 * Math.atan(Math.tan(Lr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    (vn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(vn.x, vn.y).multiplyScalar(-e / vn.z),
      vn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(vn.x, vn.y).multiplyScalar(-e / vn.z));
  }
  getViewSize(e, t) {
    return (this.getViewBounds(e, os, as), t.subVectors(as, os));
  }
  setViewOffset(e, t, n, r, o, a) {
    ((this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = o),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Lr * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      o = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth,
        l = a.fullHeight;
      ((o += (a.offsetX * r) / c),
        (t -= (a.offsetY * n) / l),
        (r *= a.width / c),
        (n *= a.height / l));
    }
    const s = this.filmOffset;
    (s !== 0 && (o += (e * s) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        o,
        o + r,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem,
        this.reversedDepth,
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const ti = -90,
  ni = 1;
class tf extends bt {
  constructor(e, t, n) {
    (super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0));
    const r = new Ot(ti, ni, e, t);
    ((r.layers = this.layers), this.add(r));
    const o = new Ot(ti, ni, e, t);
    ((o.layers = this.layers), this.add(o));
    const a = new Ot(ti, ni, e, t);
    ((a.layers = this.layers), this.add(a));
    const s = new Ot(ti, ni, e, t);
    ((s.layers = this.layers), this.add(s));
    const c = new Ot(ti, ni, e, t);
    ((c.layers = this.layers), this.add(c));
    const l = new Ot(ti, ni, e, t);
    ((l.layers = this.layers), this.add(l));
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, r, o, a, s, c] = t;
    for (const l of t) this.remove(l);
    if (e === Jt)
      (n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        o.up.set(0, 0, -1),
        o.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        s.up.set(0, 1, 0),
        s.lookAt(0, 0, 1),
        c.up.set(0, 1, 0),
        c.lookAt(0, 0, -1));
    else if (e === xr)
      (n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        o.up.set(0, 0, 1),
        o.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        s.up.set(0, -1, 0),
        s.lookAt(0, 0, 1),
        c.up.set(0, -1, 0),
        c.lookAt(0, 0, -1));
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e,
      );
    for (const l of t) (this.add(l), l.updateMatrixWorld());
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [o, a, s, c, l, f] = this.children,
      u = e.getRenderTarget(),
      h = e.getActiveCubeFace(),
      p = e.getActiveMipmapLevel(),
      b = e.xr.enabled;
    e.xr.enabled = !1;
    const k = n.texture.generateMipmaps;
    ((n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, r),
      e.render(t, o),
      e.setRenderTarget(n, 1, r),
      e.render(t, a),
      e.setRenderTarget(n, 2, r),
      e.render(t, s),
      e.setRenderTarget(n, 3, r),
      e.render(t, c),
      e.setRenderTarget(n, 4, r),
      e.render(t, l),
      (n.texture.generateMipmaps = k),
      e.setRenderTarget(n, 5, r),
      e.render(t, f),
      e.setRenderTarget(u, h, p),
      (e.xr.enabled = b),
      (n.texture.needsPMREMUpdate = !0));
  }
}
class gc extends _t {
  constructor(e = [], t = Bn, n, r, o, a, s, c, l, f) {
    (super(e, t, n, r, o, a, s, c, l, f),
      (this.isCubeTexture = !0),
      (this.flipY = !1));
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class xc extends tn {
  constructor(e = 1, t = {}) {
    (super(e, e, t), (this.isWebGLCubeRenderTarget = !0));
    const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    ((this.texture = new gc(r)),
      this._setTextureOptions(t),
      (this.texture.isRenderTargetTexture = !0));
  }
  fromEquirectangularTexture(e, t) {
    ((this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter));
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new Gn(5, 5, 5),
      o = new rn({
        name: "CubemapFromEquirect",
        uniforms: pi(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Rt,
        blending: dn,
      });
    o.uniforms.tEquirect.value = t;
    const a = new Ut(r, o),
      s = t.minFilter;
    return (
      t.minFilter === Nn && (t.minFilter = kt),
      new tf(1, 10, this).update(e, a),
      (t.minFilter = s),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t = !0, n = !0, r = !0) {
    const o = e.getRenderTarget();
    for (let a = 0; a < 6; a++) (e.setRenderTarget(this, a), e.clear(t, n, r));
    e.setRenderTarget(o);
  }
}
class or extends bt {
  constructor() {
    (super(), (this.isGroup = !0), (this.type = "Group"));
  }
}
const nf = { type: "move" };
class eo {
  constructor() {
    ((this._targetRay = null), (this._grip = null), (this._hand = null));
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new or()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new or()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new U()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new U())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new or()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new U()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new U())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return (this.dispatchEvent({ type: "connected", data: e }), this);
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let r = null,
      o = null,
      a = null;
    const s = this._targetRay,
      c = this._grip,
      l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const k of e.hand.values()) {
          const m = t.getJointPose(k, n),
            d = this._getHandJoint(l, k);
          (m !== null &&
            (d.matrix.fromArray(m.transform.matrix),
            d.matrix.decompose(d.position, d.rotation, d.scale),
            (d.matrixWorldNeedsUpdate = !0),
            (d.jointRadius = m.radius)),
            (d.visible = m !== null));
        }
        const f = l.joints["index-finger-tip"],
          u = l.joints["thumb-tip"],
          h = f.position.distanceTo(u.position),
          p = 0.02,
          b = 0.005;
        l.inputState.pinching && h > p + b
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            h <= p - b &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((o = t.getPose(e.gripSpace, n)),
          o !== null &&
            (c.matrix.fromArray(o.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            (c.matrixWorldNeedsUpdate = !0),
            o.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(o.linearVelocity))
              : (c.hasLinearVelocity = !1),
            o.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(o.angularVelocity))
              : (c.hasAngularVelocity = !1)));
      s !== null &&
        ((r = t.getPose(e.targetRaySpace, n)),
        r === null && o !== null && (r = o),
        r !== null &&
          (s.matrix.fromArray(r.transform.matrix),
          s.matrix.decompose(s.position, s.rotation, s.scale),
          (s.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((s.hasLinearVelocity = !0),
              s.linearVelocity.copy(r.linearVelocity))
            : (s.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((s.hasAngularVelocity = !0),
              s.angularVelocity.copy(r.angularVelocity))
            : (s.hasAngularVelocity = !1),
          this.dispatchEvent(nf)));
    }
    return (
      s !== null && (s.visible = r !== null),
      c !== null && (c.visible = o !== null),
      l !== null && (l.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new or();
      ((n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n));
    }
    return e.joints[t.jointName];
  }
}
class kc extends bt {
  constructor() {
    (super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new jt()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new jt()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
class vc extends _t {
  constructor(e = null, t = 1, n = 1, r, o, a, s, c, l = ct, f = ct, u, h) {
    (super(null, a, s, c, l, f, r, o, u, h),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
class ss extends Yt {
  constructor(e, t, n, r = 1) {
    (super(e, t, n),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = r));
  }
  copy(e) {
    return (super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this);
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
const ii = new Qe(),
  cs = new Qe(),
  ar = [],
  ls = new Vn(),
  rf = new Qe(),
  yi = new Ut(),
  Ei = new mi();
class of extends Ut {
  constructor(e, t, n) {
    (super(e, t),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new ss(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.morphTexture = null),
      (this.count = n),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    for (let r = 0; r < n; r++) this.setMatrixAt(r, rf);
  }
  computeBoundingBox() {
    const e = this.geometry,
      t = this.count;
    (this.boundingBox === null && (this.boundingBox = new Vn()),
      e.boundingBox === null && e.computeBoundingBox(),
      this.boundingBox.makeEmpty());
    for (let n = 0; n < t; n++)
      (this.getMatrixAt(n, ii),
        ls.copy(e.boundingBox).applyMatrix4(ii),
        this.boundingBox.union(ls));
  }
  computeBoundingSphere() {
    const e = this.geometry,
      t = this.count;
    (this.boundingSphere === null && (this.boundingSphere = new mi()),
      e.boundingSphere === null && e.computeBoundingSphere(),
      this.boundingSphere.makeEmpty());
    for (let n = 0; n < t; n++)
      (this.getMatrixAt(n, ii),
        Ei.copy(e.boundingSphere).applyMatrix4(ii),
        this.boundingSphere.union(Ei));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.instanceMatrix.copy(e.instanceMatrix),
      e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()),
      e.instanceColor !== null &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      r = this.morphTexture.source.data.data,
      o = n.length + 1,
      a = e * o + 1;
    for (let s = 0; s < n.length; s++) n[s] = r[a + s];
  }
  raycast(e, t) {
    const n = this.matrixWorld,
      r = this.count;
    if (
      ((yi.geometry = this.geometry),
      (yi.material = this.material),
      yi.material !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        Ei.copy(this.boundingSphere),
        Ei.applyMatrix4(n),
        e.ray.intersectsSphere(Ei) !== !1))
    )
      for (let o = 0; o < r; o++) {
        (this.getMatrixAt(o, ii),
          cs.multiplyMatrices(n, ii),
          (yi.matrixWorld = cs),
          yi.raycast(e, ar));
        for (let a = 0, s = ar.length; a < s; a++) {
          const c = ar[a];
          ((c.instanceId = o), (c.object = this), t.push(c));
        }
        ar.length = 0;
      }
  }
  setColorAt(e, t) {
    (this.instanceColor === null &&
      (this.instanceColor = new ss(
        new Float32Array(this.instanceMatrix.count * 3).fill(1),
        3,
      )),
      t.toArray(this.instanceColor.array, e * 3));
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      r = n.length + 1;
    this.morphTexture === null &&
      (this.morphTexture = new vc(
        new Float32Array(r * this.count),
        r,
        this.count,
        ma,
        Xt,
      ));
    const o = this.morphTexture.source.data.data;
    let a = 0;
    for (let l = 0; l < n.length; l++) a += n[l];
    const s = this.geometry.morphTargetsRelative ? 1 : 1 - a,
      c = r * e;
    ((o[c] = s), o.set(n, c + 1));
  }
  updateMorphTargets() {}
  dispose() {
    (this.dispatchEvent({ type: "dispose" }),
      this.morphTexture !== null &&
        (this.morphTexture.dispose(), (this.morphTexture = null)));
  }
}
const to = new U(),
  af = new U(),
  sf = new Ce();
class Dn {
  constructor(e = new U(1, 0, 0), t = 0) {
    ((this.isPlane = !0), (this.normal = e), (this.constant = t));
  }
  set(e, t) {
    return (this.normal.copy(e), (this.constant = t), this);
  }
  setComponents(e, t, n, r) {
    return (this.normal.set(e, t, n), (this.constant = r), this);
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return (this.normal.copy(e), (this.constant = -t.dot(this.normal)), this);
  }
  setFromCoplanarPoints(e, t, n) {
    const r = to.subVectors(n, t).cross(af.subVectors(e, t)).normalize();
    return (this.setFromNormalAndCoplanarPoint(r, e), this);
  }
  copy(e) {
    return (this.normal.copy(e.normal), (this.constant = e.constant), this);
  }
  normalize() {
    const e = 1 / this.normal.length();
    return (this.normal.multiplyScalar(e), (this.constant *= e), this);
  }
  negate() {
    return ((this.constant *= -1), this.normal.negate(), this);
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(to),
      r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const o = -(e.start.dot(this.normal) + this.constant) / r;
    return o < 0 || o > 1 ? null : t.copy(e.start).addScaledVector(n, o);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || sf.getNormalMatrix(e),
      r = this.coplanarPoint(to).applyMatrix4(e),
      o = this.normal.applyMatrix3(n).normalize();
    return ((this.constant = -r.dot(o)), this);
  }
  translate(e) {
    return ((this.constant -= e.dot(this.normal)), this);
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Cn = new mi(),
  cf = new We(0.5, 0.5),
  sr = new U();
class Ma {
  constructor(
    e = new Dn(),
    t = new Dn(),
    n = new Dn(),
    r = new Dn(),
    o = new Dn(),
    a = new Dn(),
  ) {
    this.planes = [e, t, n, r, o, a];
  }
  set(e, t, n, r, o, a) {
    const s = this.planes;
    return (
      s[0].copy(e),
      s[1].copy(t),
      s[2].copy(n),
      s[3].copy(r),
      s[4].copy(o),
      s[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Jt, n = !1) {
    const r = this.planes,
      o = e.elements,
      a = o[0],
      s = o[1],
      c = o[2],
      l = o[3],
      f = o[4],
      u = o[5],
      h = o[6],
      p = o[7],
      b = o[8],
      k = o[9],
      m = o[10],
      d = o[11],
      y = o[12],
      S = o[13],
      M = o[14],
      E = o[15];
    if (
      (r[0].setComponents(l - a, p - f, d - b, E - y).normalize(),
      r[1].setComponents(l + a, p + f, d + b, E + y).normalize(),
      r[2].setComponents(l + s, p + u, d + k, E + S).normalize(),
      r[3].setComponents(l - s, p - u, d - k, E - S).normalize(),
      n)
    )
      (r[4].setComponents(c, h, m, M).normalize(),
        r[5].setComponents(l - c, p - h, d - m, E - M).normalize());
    else if (
      (r[4].setComponents(l - c, p - h, d - m, E - M).normalize(), t === Jt)
    )
      r[5].setComponents(l + c, p + h, d + m, E + M).normalize();
    else if (t === xr) r[5].setComponents(c, h, m, M).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t,
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      (e.boundingSphere === null && e.computeBoundingSphere(),
        Cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld));
    else {
      const t = e.geometry;
      (t.boundingSphere === null && t.computeBoundingSphere(),
        Cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld));
    }
    return this.intersectsSphere(Cn);
  }
  intersectsSprite(e) {
    Cn.center.set(0, 0, 0);
    const t = cf.distanceTo(e.center);
    return (
      (Cn.radius = 0.7071067811865476 + t),
      Cn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Cn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      r = -e.radius;
    for (let o = 0; o < 6; o++) if (t[o].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (
        ((sr.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (sr.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (sr.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(sr) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Sa extends _i {
  constructor(e) {
    (super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new Fe(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const kr = new U(),
  vr = new U(),
  fs = new Qe(),
  Ti = new uc(),
  cr = new mi(),
  no = new U(),
  us = new U();
class lf extends bt {
  constructor(e = new Bt(), t = new Sa()) {
    (super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      this.updateMorphTargets());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let r = 1, o = t.count; r < o; r++)
        (kr.fromBufferAttribute(t, r - 1),
          vr.fromBufferAttribute(t, r),
          (n[r] = n[r - 1]),
          (n[r] += kr.distanceTo(vr)));
      e.setAttribute("lineDistance", new St(n, 1));
    } else
      Te(
        "Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.",
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.matrixWorld,
      o = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      cr.copy(n.boundingSphere),
      cr.applyMatrix4(r),
      (cr.radius += o),
      e.ray.intersectsSphere(cr) === !1)
    )
      return;
    (fs.copy(r).invert(), Ti.copy(e.ray).applyMatrix4(fs));
    const s = o / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = s * s,
      l = this.isLineSegments ? 2 : 1,
      f = n.index,
      h = n.attributes.position;
    if (f !== null) {
      const p = Math.max(0, a.start),
        b = Math.min(f.count, a.start + a.count);
      for (let k = p, m = b - 1; k < m; k += l) {
        const d = f.getX(k),
          y = f.getX(k + 1),
          S = lr(this, e, Ti, c, d, y, k);
        S && t.push(S);
      }
      if (this.isLineLoop) {
        const k = f.getX(b - 1),
          m = f.getX(p),
          d = lr(this, e, Ti, c, k, m, b - 1);
        d && t.push(d);
      }
    } else {
      const p = Math.max(0, a.start),
        b = Math.min(h.count, a.start + a.count);
      for (let k = p, m = b - 1; k < m; k += l) {
        const d = lr(this, e, Ti, c, k, k + 1, k);
        d && t.push(d);
      }
      if (this.isLineLoop) {
        const k = lr(this, e, Ti, c, b - 1, p, b - 1);
        k && t.push(k);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let o = 0, a = r.length; o < a; o++) {
          const s = r[o].name || String(o);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[s] = o));
        }
      }
    }
  }
}
function lr(i, e, t, n, r, o, a) {
  const s = i.geometry.attributes.position;
  if (
    (kr.fromBufferAttribute(s, r),
    vr.fromBufferAttribute(s, o),
    t.distanceSqToSegment(kr, vr, no, us) > n)
  )
    return;
  no.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(no);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      point: us.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i,
    };
}
const ds = new U(),
  hs = new U();
class wc extends lf {
  constructor(e, t) {
    (super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments"));
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let r = 0, o = t.count; r < o; r += 2)
        (ds.fromBufferAttribute(t, r),
          hs.fromBufferAttribute(t, r + 1),
          (n[r] = r === 0 ? 0 : n[r - 1]),
          (n[r + 1] = n[r] + ds.distanceTo(hs)));
      e.setAttribute("lineDistance", new St(n, 1));
    } else
      Te(
        "LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.",
      );
    return this;
  }
}
class ff extends _t {
  constructor(e, t, n, r, o, a, s, c, l) {
    (super(e, t, n, r, o, a, s, c, l),
      (this.isCanvasTexture = !0),
      (this.needsUpdate = !0));
  }
}
class Fi extends _t {
  constructor(e, t, n = nn, r, o, a, s = ct, c = ct, l, f = mn, u = 1) {
    if (f !== mn && f !== Fn)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
      );
    const h = { width: e, height: t, depth: u };
    (super(h, r, o, a, s, c, f, n, l),
      (this.isDepthTexture = !0),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.source = new va(Object.assign({}, e.image))),
      (this.compareFunction = e.compareFunction),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class uf extends Fi {
  constructor(e, t = nn, n = Bn, r, o, a = ct, s = ct, c, l = mn) {
    const f = { width: e, height: e, depth: 1 },
      u = [f, f, f, f, f, f];
    (super(e, e, t, n, r, o, a, s, c, l),
      (this.image = u),
      (this.isCubeDepthTexture = !0),
      (this.isCubeTexture = !0));
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Mc extends _t {
  constructor(e = null) {
    (super(), (this.sourceTexture = e), (this.isExternalTexture = !0));
  }
  copy(e) {
    return (super.copy(e), (this.sourceTexture = e.sourceTexture), this);
  }
}
class Sr extends Bt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    (super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r,
      }));
    const o = e / 2,
      a = t / 2,
      s = Math.floor(n),
      c = Math.floor(r),
      l = s + 1,
      f = c + 1,
      u = e / s,
      h = t / c,
      p = [],
      b = [],
      k = [],
      m = [];
    for (let d = 0; d < f; d++) {
      const y = d * h - a;
      for (let S = 0; S < l; S++) {
        const M = S * u - o;
        (b.push(M, -y, 0), k.push(0, 0, 1), m.push(S / s), m.push(1 - d / c));
      }
    }
    for (let d = 0; d < c; d++)
      for (let y = 0; y < s; y++) {
        const S = y + l * d,
          M = y + l * (d + 1),
          E = y + 1 + l * (d + 1),
          T = y + 1 + l * d;
        (p.push(S, M, T), p.push(M, E, T));
      }
    (this.setIndex(p),
      this.setAttribute("position", new St(b, 3)),
      this.setAttribute("normal", new St(k, 3)),
      this.setAttribute("uv", new St(m, 2)));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new Sr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class df extends rn {
  constructor(e) {
    (super(e),
      (this.isRawShaderMaterial = !0),
      (this.type = "RawShaderMaterial"));
  }
}
class Pi extends _i {
  constructor(e) {
    (super(),
      (this.isMeshStandardMaterial = !0),
      (this.type = "MeshStandardMaterial"),
      (this.defines = { STANDARD: "" }),
      (this.color = new Fe(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Fe(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = cc),
      (this.normalScale = new We(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new jt()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class hf extends _i {
  constructor(e) {
    (super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Ml),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class pf extends _i {
  constructor(e) {
    (super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const io = {
  enabled: !1,
  files: {},
  add: function (i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function (i) {
    if (this.enabled !== !1) return this.files[i];
  },
  remove: function (i) {
    delete this.files[i];
  },
  clear: function () {
    this.files = {};
  },
};
class mf {
  constructor(e, t, n) {
    const r = this;
    let o = !1,
      a = 0,
      s = 0,
      c;
    const l = [];
    ((this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this._abortController = null),
      (this.itemStart = function (f) {
        (s++, o === !1 && r.onStart !== void 0 && r.onStart(f, a, s), (o = !0));
      }),
      (this.itemEnd = function (f) {
        (a++,
          r.onProgress !== void 0 && r.onProgress(f, a, s),
          a === s && ((o = !1), r.onLoad !== void 0 && r.onLoad()));
      }),
      (this.itemError = function (f) {
        r.onError !== void 0 && r.onError(f);
      }),
      (this.resolveURL = function (f) {
        return c ? c(f) : f;
      }),
      (this.setURLModifier = function (f) {
        return ((c = f), this);
      }),
      (this.addHandler = function (f, u) {
        return (l.push(f, u), this);
      }),
      (this.removeHandler = function (f) {
        const u = l.indexOf(f);
        return (u !== -1 && l.splice(u, 2), this);
      }),
      (this.getHandler = function (f) {
        for (let u = 0, h = l.length; u < h; u += 2) {
          const p = l[u],
            b = l[u + 1];
          if ((p.global && (p.lastIndex = 0), p.test(f))) return b;
        }
        return null;
      }),
      (this.abort = function () {
        return (
          this.abortController.abort(),
          (this._abortController = null),
          this
        );
      }));
  }
  get abortController() {
    return (
      this._abortController || (this._abortController = new AbortController()),
      this._abortController
    );
  }
}
const _f = new mf();
class ya {
  constructor(e) {
    ((this.manager = e !== void 0 ? e : _f),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {}));
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (r, o) {
      n.load(e, r, t, o);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return ((this.crossOrigin = e), this);
  }
  setWithCredentials(e) {
    return ((this.withCredentials = e), this);
  }
  setPath(e) {
    return ((this.path = e), this);
  }
  setResourcePath(e) {
    return ((this.resourcePath = e), this);
  }
  setRequestHeader(e) {
    return ((this.requestHeader = e), this);
  }
  abort() {
    return this;
  }
}
ya.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const ri = new WeakMap();
class Sc extends ya {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    (this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e)));
    const o = this,
      a = io.get(`image:${e}`);
    if (a !== void 0) {
      if (a.complete === !0)
        (o.manager.itemStart(e),
          setTimeout(function () {
            (t && t(a), o.manager.itemEnd(e));
          }, 0));
      else {
        let u = ri.get(a);
        (u === void 0 && ((u = []), ri.set(a, u)),
          u.push({ onLoad: t, onError: r }));
      }
      return a;
    }
    const s = Ui("img");
    function c() {
      (f(), t && t(this));
      const u = ri.get(this) || [];
      for (let h = 0; h < u.length; h++) {
        const p = u[h];
        p.onLoad && p.onLoad(this);
      }
      (ri.delete(this), o.manager.itemEnd(e));
    }
    function l(u) {
      (f(), r && r(u), io.remove(`image:${e}`));
      const h = ri.get(this) || [];
      for (let p = 0; p < h.length; p++) {
        const b = h[p];
        b.onError && b.onError(u);
      }
      (ri.delete(this), o.manager.itemError(e), o.manager.itemEnd(e));
    }
    function f() {
      (s.removeEventListener("load", c, !1),
        s.removeEventListener("error", l, !1));
    }
    return (
      s.addEventListener("load", c, !1),
      s.addEventListener("error", l, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (s.crossOrigin = this.crossOrigin),
      io.add(`image:${e}`, s),
      o.manager.itemStart(e),
      (s.src = e),
      s
    );
  }
}
class bf extends ya {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const o = new _t(),
      a = new Sc(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (s) {
          ((o.image = s), (o.needsUpdate = !0), t !== void 0 && t(o));
        },
        n,
        r,
      ),
      o
    );
  }
}
class yc extends bt {
  constructor(e, t = 1) {
    (super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Fe(e)),
      (this.intensity = t));
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      t
    );
  }
}
const ro = new Qe(),
  ps = new U(),
  ms = new U();
class gf {
  constructor(e) {
    ((this.camera = e),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new We(512, 512)),
      (this.mapType = It),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Qe()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Ma()),
      (this._frameExtents = new We(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new st(0, 0, 1, 1)]));
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    (ps.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(ps),
      ms.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(ms),
      t.updateMatrixWorld(),
      ro.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(
        ro,
        t.coordinateSystem,
        t.reversedDepth,
      ),
      t.reversedDepth
        ? n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1)
        : n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(ro));
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    (this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose());
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.intensity = e.intensity),
      (this.bias = e.bias),
      (this.radius = e.radius),
      (this.autoUpdate = e.autoUpdate),
      (this.needsUpdate = e.needsUpdate),
      (this.normalBias = e.normalBias),
      (this.blurSamples = e.blurSamples),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.intensity !== 1 && (e.intensity = this.intensity),
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class yr extends bc {
  constructor(e = -1, t = 1, n = 1, r = -1, o = 0.1, a = 2e3) {
    (super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = r),
      (this.near = o),
      (this.far = a),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, r, o, a) {
    (this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = o),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let o = n - e,
      a = n + e,
      s = r + t,
      c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        f = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      ((o += l * this.view.offsetX),
        (a = o + l * this.view.width),
        (s -= f * this.view.offsetY),
        (c = s - f * this.view.height));
    }
    (this.projectionMatrix.makeOrthographic(
      o,
      a,
      s,
      c,
      this.near,
      this.far,
      this.coordinateSystem,
      this.reversedDepth,
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
class xf extends gf {
  constructor() {
    (super(new yr(-5, 5, 5, -5, 0.5, 500)),
      (this.isDirectionalLightShadow = !0));
  }
}
class kf extends yc {
  constructor(e, t) {
    (super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(bt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new bt()),
      (this.shadow = new xf()));
  }
  dispose() {
    (super.dispose(), this.shadow.dispose());
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.shadow = this.shadow.toJSON()),
      (t.object.target = this.target.uuid),
      t
    );
  }
}
class vf extends yc {
  constructor(e, t) {
    (super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight"));
  }
}
class wf extends Ot {
  constructor(e = []) {
    (super(),
      (this.isArrayCamera = !0),
      (this.isMultiViewCamera = !1),
      (this.cameras = e));
  }
}
class Mf extends wc {
  constructor(e = 10, t = 10, n = 4473924, r = 8947848) {
    ((n = new Fe(n)), (r = new Fe(r)));
    const o = t / 2,
      a = e / t,
      s = e / 2,
      c = [],
      l = [];
    for (let h = 0, p = 0, b = -s; h <= t; h++, b += a) {
      (c.push(-s, 0, b, s, 0, b), c.push(b, 0, -s, b, 0, s));
      const k = h === o ? n : r;
      (k.toArray(l, p),
        (p += 3),
        k.toArray(l, p),
        (p += 3),
        k.toArray(l, p),
        (p += 3),
        k.toArray(l, p),
        (p += 3));
    }
    const f = new Bt();
    (f.setAttribute("position", new St(c, 3)),
      f.setAttribute("color", new St(l, 3)));
    const u = new Sa({ vertexColors: !0, toneMapped: !1 });
    (super(f, u), (this.type = "GridHelper"));
  }
  dispose() {
    (this.geometry.dispose(), this.material.dispose());
  }
}
class Sf extends wc {
  constructor(e = 1) {
    const t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
      n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
      r = new Bt();
    (r.setAttribute("position", new St(t, 3)),
      r.setAttribute("color", new St(n, 3)));
    const o = new Sa({ vertexColors: !0, toneMapped: !1 });
    (super(r, o), (this.type = "AxesHelper"));
  }
  setColors(e, t, n) {
    const r = new Fe(),
      o = this.geometry.attributes.color.array;
    return (
      r.set(e),
      r.toArray(o, 0),
      r.toArray(o, 3),
      r.set(t),
      r.toArray(o, 6),
      r.toArray(o, 9),
      r.set(n),
      r.toArray(o, 12),
      r.toArray(o, 15),
      (this.geometry.attributes.color.needsUpdate = !0),
      this
    );
  }
  dispose() {
    (this.geometry.dispose(), this.material.dispose());
  }
}
class yf extends zn {
  constructor(e, t = null) {
    (super(),
      (this.object = e),
      (this.domElement = t),
      (this.enabled = !0),
      (this.state = -1),
      (this.keys = {}),
      (this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }),
      (this.touches = { ONE: null, TWO: null }));
  }
  connect(e) {
    if (e === void 0) {
      Te("Controls: connect() now requires an element.");
      return;
    }
    (this.domElement !== null && this.disconnect(), (this.domElement = e));
  }
  disconnect() {}
  dispose() {}
  update() {}
}
function _s(i, e, t, n) {
  const r = Ef(n);
  switch (t) {
    case ac:
      return i * e;
    case ma:
      return ((i * e) / r.components) * r.byteLength;
    case _a:
      return ((i * e) / r.components) * r.byteLength;
    case di:
      return ((i * e * 2) / r.components) * r.byteLength;
    case ba:
      return ((i * e * 2) / r.components) * r.byteLength;
    case sc:
      return ((i * e * 3) / r.components) * r.byteLength;
    case qt:
      return ((i * e * 4) / r.components) * r.byteLength;
    case ga:
      return ((i * e * 4) / r.components) * r.byteLength;
    case hr:
    case pr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case mr:
    case _r:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ro:
    case Po:
      return (Math.max(i, 16) * Math.max(e, 8)) / 4;
    case Ao:
    case Co:
      return (Math.max(i, 8) * Math.max(e, 8)) / 2;
    case Lo:
    case Do:
    case Uo:
    case No:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Io:
    case Fo:
    case Oo:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Bo:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case zo:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Vo:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Go:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Ho:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Wo:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Xo:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case qo:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Yo:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case jo:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Ko:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case $o:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Zo:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Jo:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Qo:
    case ea:
    case ta:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case na:
    case ia:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case ra:
    case oa:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function Ef(i) {
  switch (i) {
    case It:
    case nc:
      return { byteLength: 1, components: 1 };
    case Di:
    case ic:
    case pn:
      return { byteLength: 2, components: 1 };
    case ha:
    case pa:
      return { byteLength: 2, components: 4 };
    case nn:
    case da:
    case Xt:
      return { byteLength: 4, components: 1 };
    case rc:
    case oc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: ua } }),
  );
typeof window < "u" &&
  (window.__THREE__
    ? Te("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = ua));
function Ec() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function r(o, a) {
    (t(o, a), (n = i.requestAnimationFrame(r)));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = i.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      (i.cancelAnimationFrame(n), (e = !1));
    },
    setAnimationLoop: function (o) {
      t = o;
    },
    setContext: function (o) {
      i = o;
    },
  };
}
function Tf(i) {
  const e = new WeakMap();
  function t(s, c) {
    const l = s.array,
      f = s.usage,
      u = l.byteLength,
      h = i.createBuffer();
    (i.bindBuffer(c, h), i.bufferData(c, l, f), s.onUploadCallback());
    let p;
    if (l instanceof Float32Array) p = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      p = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      s.isFloat16BufferAttribute ? (p = i.HALF_FLOAT) : (p = i.UNSIGNED_SHORT);
    else if (l instanceof Int16Array) p = i.SHORT;
    else if (l instanceof Uint32Array) p = i.UNSIGNED_INT;
    else if (l instanceof Int32Array) p = i.INT;
    else if (l instanceof Int8Array) p = i.BYTE;
    else if (l instanceof Uint8Array) p = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) p = i.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + l,
      );
    return {
      buffer: h,
      type: p,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: s.version,
      size: u,
    };
  }
  function n(s, c, l) {
    const f = c.array,
      u = c.updateRanges;
    if ((i.bindBuffer(l, s), u.length === 0)) i.bufferSubData(l, 0, f);
    else {
      u.sort((p, b) => p.start - b.start);
      let h = 0;
      for (let p = 1; p < u.length; p++) {
        const b = u[h],
          k = u[p];
        k.start <= b.start + b.count + 1
          ? (b.count = Math.max(b.count, k.start + k.count - b.start))
          : (++h, (u[h] = k));
      }
      u.length = h + 1;
      for (let p = 0, b = u.length; p < b; p++) {
        const k = u[p];
        i.bufferSubData(l, k.start * f.BYTES_PER_ELEMENT, f, k.start, k.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(s) {
    return (s.isInterleavedBufferAttribute && (s = s.data), e.get(s));
  }
  function o(s) {
    s.isInterleavedBufferAttribute && (s = s.data);
    const c = e.get(s);
    c && (i.deleteBuffer(c.buffer), e.delete(s));
  }
  function a(s, c) {
    if (
      (s.isInterleavedBufferAttribute && (s = s.data), s.isGLBufferAttribute)
    ) {
      const f = e.get(s);
      (!f || f.version < s.version) &&
        e.set(s, {
          buffer: s.buffer,
          type: s.type,
          bytesPerElement: s.elementSize,
          version: s.version,
        });
      return;
    }
    const l = e.get(s);
    if (l === void 0) e.set(s, t(s, c));
    else if (l.version < s.version) {
      if (l.size !== s.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      (n(l.buffer, s, c), (l.version = s.version));
    }
  }
  return { get: r, remove: o, update: a };
}
var Af = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Rf = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  Cf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Pf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Lf = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  Df = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  If = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Uf = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Nf = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  Ff = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  Of = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  Bf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  zf = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  Vf = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Gf = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Hf = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  Wf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Xf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  qf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Yf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  jf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Kf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  $f = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  Zf = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  Jf = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Qf = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  eu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  tu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  nu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  iu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  ru = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  ou = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  au = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  su = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,
  cu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  lu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  fu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  uu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  du = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  hu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  pu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  mu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  _u = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  bu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  gu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  xu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  ku = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  vu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  wu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Mu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Su = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  yu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  Eu = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Tu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Au = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Ru = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  Cu = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Pu = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Lu = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Du = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  Iu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Uu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Nu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Fu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Ou = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Bu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  zu = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  Vu = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Gu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Hu = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  Wu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Xu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  qu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Yu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  ju = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Ku = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  $u = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  Zu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  Ju = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  Qu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  ed = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  td = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  nd = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  id = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  rd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  od = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  ad = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  sd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  cd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  ld = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,
  fd = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  ud = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  dd = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  hd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  pd = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  md = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  _d = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  bd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  gd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  xd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  kd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  vd = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  wd = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  Md = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Sd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  yd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  Ed = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Td = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Ad = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Rd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Cd = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Pd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Ld = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Dd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Id = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  Ud = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Nd = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,
  Fd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Od = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Bd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  zd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Vd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Gd = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Hd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Wd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Xd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  qd = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Yd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  jd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Kd = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  $d = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Zd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  Jd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Qd = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  eh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  th = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  nh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  ih = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  rh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  oh = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  ah = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Pe = {
    alphahash_fragment: Af,
    alphahash_pars_fragment: Rf,
    alphamap_fragment: Cf,
    alphamap_pars_fragment: Pf,
    alphatest_fragment: Lf,
    alphatest_pars_fragment: Df,
    aomap_fragment: If,
    aomap_pars_fragment: Uf,
    batching_pars_vertex: Nf,
    batching_vertex: Ff,
    begin_vertex: Of,
    beginnormal_vertex: Bf,
    bsdfs: zf,
    iridescence_fragment: Vf,
    bumpmap_pars_fragment: Gf,
    clipping_planes_fragment: Hf,
    clipping_planes_pars_fragment: Wf,
    clipping_planes_pars_vertex: Xf,
    clipping_planes_vertex: qf,
    color_fragment: Yf,
    color_pars_fragment: jf,
    color_pars_vertex: Kf,
    color_vertex: $f,
    common: Zf,
    cube_uv_reflection_fragment: Jf,
    defaultnormal_vertex: Qf,
    displacementmap_pars_vertex: eu,
    displacementmap_vertex: tu,
    emissivemap_fragment: nu,
    emissivemap_pars_fragment: iu,
    colorspace_fragment: ru,
    colorspace_pars_fragment: ou,
    envmap_fragment: au,
    envmap_common_pars_fragment: su,
    envmap_pars_fragment: cu,
    envmap_pars_vertex: lu,
    envmap_physical_pars_fragment: ku,
    envmap_vertex: fu,
    fog_vertex: uu,
    fog_pars_vertex: du,
    fog_fragment: hu,
    fog_pars_fragment: pu,
    gradientmap_pars_fragment: mu,
    lightmap_pars_fragment: _u,
    lights_lambert_fragment: bu,
    lights_lambert_pars_fragment: gu,
    lights_pars_begin: xu,
    lights_toon_fragment: vu,
    lights_toon_pars_fragment: wu,
    lights_phong_fragment: Mu,
    lights_phong_pars_fragment: Su,
    lights_physical_fragment: yu,
    lights_physical_pars_fragment: Eu,
    lights_fragment_begin: Tu,
    lights_fragment_maps: Au,
    lights_fragment_end: Ru,
    logdepthbuf_fragment: Cu,
    logdepthbuf_pars_fragment: Pu,
    logdepthbuf_pars_vertex: Lu,
    logdepthbuf_vertex: Du,
    map_fragment: Iu,
    map_pars_fragment: Uu,
    map_particle_fragment: Nu,
    map_particle_pars_fragment: Fu,
    metalnessmap_fragment: Ou,
    metalnessmap_pars_fragment: Bu,
    morphinstance_vertex: zu,
    morphcolor_vertex: Vu,
    morphnormal_vertex: Gu,
    morphtarget_pars_vertex: Hu,
    morphtarget_vertex: Wu,
    normal_fragment_begin: Xu,
    normal_fragment_maps: qu,
    normal_pars_fragment: Yu,
    normal_pars_vertex: ju,
    normal_vertex: Ku,
    normalmap_pars_fragment: $u,
    clearcoat_normal_fragment_begin: Zu,
    clearcoat_normal_fragment_maps: Ju,
    clearcoat_pars_fragment: Qu,
    iridescence_pars_fragment: ed,
    opaque_fragment: td,
    packing: nd,
    premultiplied_alpha_fragment: id,
    project_vertex: rd,
    dithering_fragment: od,
    dithering_pars_fragment: ad,
    roughnessmap_fragment: sd,
    roughnessmap_pars_fragment: cd,
    shadowmap_pars_fragment: ld,
    shadowmap_pars_vertex: fd,
    shadowmap_vertex: ud,
    shadowmask_pars_fragment: dd,
    skinbase_vertex: hd,
    skinning_pars_vertex: pd,
    skinning_vertex: md,
    skinnormal_vertex: _d,
    specularmap_fragment: bd,
    specularmap_pars_fragment: gd,
    tonemapping_fragment: xd,
    tonemapping_pars_fragment: kd,
    transmission_fragment: vd,
    transmission_pars_fragment: wd,
    uv_pars_fragment: Md,
    uv_pars_vertex: Sd,
    uv_vertex: yd,
    worldpos_vertex: Ed,
    background_vert: Td,
    background_frag: Ad,
    backgroundCube_vert: Rd,
    backgroundCube_frag: Cd,
    cube_vert: Pd,
    cube_frag: Ld,
    depth_vert: Dd,
    depth_frag: Id,
    distance_vert: Ud,
    distance_frag: Nd,
    equirect_vert: Fd,
    equirect_frag: Od,
    linedashed_vert: Bd,
    linedashed_frag: zd,
    meshbasic_vert: Vd,
    meshbasic_frag: Gd,
    meshlambert_vert: Hd,
    meshlambert_frag: Wd,
    meshmatcap_vert: Xd,
    meshmatcap_frag: qd,
    meshnormal_vert: Yd,
    meshnormal_frag: jd,
    meshphong_vert: Kd,
    meshphong_frag: $d,
    meshphysical_vert: Zd,
    meshphysical_frag: Jd,
    meshtoon_vert: Qd,
    meshtoon_frag: eh,
    points_vert: th,
    points_frag: nh,
    shadow_vert: ih,
    shadow_frag: rh,
    sprite_vert: oh,
    sprite_frag: ah,
  },
  se = {
    common: {
      diffuse: { value: new Fe(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Ce() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ce() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Ce() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Ce() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
      dfgLUT: { value: null },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Ce() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Ce() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Ce() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Ce() },
      normalScale: { value: new We(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Ce() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Ce() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Ce() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Ce() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Fe(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Fe(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ce() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Ce() },
    },
    sprite: {
      diffuse: { value: new Fe(16777215) },
      opacity: { value: 1 },
      center: { value: new We(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Ce() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ce() },
      alphaTest: { value: 0 },
    },
  },
  Zt = {
    basic: {
      uniforms: wt([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.fog,
      ]),
      vertexShader: Pe.meshbasic_vert,
      fragmentShader: Pe.meshbasic_frag,
    },
    lambert: {
      uniforms: wt([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        se.lights,
        { emissive: { value: new Fe(0) } },
      ]),
      vertexShader: Pe.meshlambert_vert,
      fragmentShader: Pe.meshlambert_frag,
    },
    phong: {
      uniforms: wt([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        se.lights,
        {
          emissive: { value: new Fe(0) },
          specular: { value: new Fe(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Pe.meshphong_vert,
      fragmentShader: Pe.meshphong_frag,
    },
    standard: {
      uniforms: wt([
        se.common,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.roughnessmap,
        se.metalnessmap,
        se.fog,
        se.lights,
        {
          emissive: { value: new Fe(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Pe.meshphysical_vert,
      fragmentShader: Pe.meshphysical_frag,
    },
    toon: {
      uniforms: wt([
        se.common,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.gradientmap,
        se.fog,
        se.lights,
        { emissive: { value: new Fe(0) } },
      ]),
      vertexShader: Pe.meshtoon_vert,
      fragmentShader: Pe.meshtoon_frag,
    },
    matcap: {
      uniforms: wt([
        se.common,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Pe.meshmatcap_vert,
      fragmentShader: Pe.meshmatcap_frag,
    },
    points: {
      uniforms: wt([se.points, se.fog]),
      vertexShader: Pe.points_vert,
      fragmentShader: Pe.points_frag,
    },
    dashed: {
      uniforms: wt([
        se.common,
        se.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Pe.linedashed_vert,
      fragmentShader: Pe.linedashed_frag,
    },
    depth: {
      uniforms: wt([se.common, se.displacementmap]),
      vertexShader: Pe.depth_vert,
      fragmentShader: Pe.depth_frag,
    },
    normal: {
      uniforms: wt([
        se.common,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Pe.meshnormal_vert,
      fragmentShader: Pe.meshnormal_frag,
    },
    sprite: {
      uniforms: wt([se.sprite, se.fog]),
      vertexShader: Pe.sprite_vert,
      fragmentShader: Pe.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Ce() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Pe.background_vert,
      fragmentShader: Pe.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Ce() },
      },
      vertexShader: Pe.backgroundCube_vert,
      fragmentShader: Pe.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Pe.cube_vert,
      fragmentShader: Pe.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Pe.equirect_vert,
      fragmentShader: Pe.equirect_frag,
    },
    distance: {
      uniforms: wt([
        se.common,
        se.displacementmap,
        {
          referencePosition: { value: new U() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Pe.distance_vert,
      fragmentShader: Pe.distance_frag,
    },
    shadow: {
      uniforms: wt([
        se.lights,
        se.fog,
        { color: { value: new Fe(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Pe.shadow_vert,
      fragmentShader: Pe.shadow_frag,
    },
  };
Zt.physical = {
  uniforms: wt([
    Zt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Ce() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Ce() },
      clearcoatNormalScale: { value: new We(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Ce() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Ce() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Ce() },
      sheen: { value: 0 },
      sheenColor: { value: new Fe(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Ce() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Ce() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Ce() },
      transmissionSamplerSize: { value: new We() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Ce() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Fe(0) },
      specularColor: { value: new Fe(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Ce() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Ce() },
      anisotropyVector: { value: new We() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Ce() },
    },
  ]),
  vertexShader: Pe.meshphysical_vert,
  fragmentShader: Pe.meshphysical_frag,
};
const fr = { r: 0, b: 0, g: 0 },
  Pn = new jt(),
  sh = new Qe();
function ch(i, e, t, n, r, o, a) {
  const s = new Fe(0);
  let c = o === !0 ? 0 : 1,
    l,
    f,
    u = null,
    h = 0,
    p = null;
  function b(S) {
    let M = S.isScene === !0 ? S.background : null;
    return (
      M && M.isTexture && (M = (S.backgroundBlurriness > 0 ? t : e).get(M)),
      M
    );
  }
  function k(S) {
    let M = !1;
    const E = b(S);
    E === null ? d(s, c) : E && E.isColor && (d(E, 1), (M = !0));
    const T = i.xr.getEnvironmentBlendMode();
    (T === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : T === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
      (i.autoClear || M) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil)));
  }
  function m(S, M) {
    const E = b(M);
    E && (E.isCubeTexture || E.mapping === Mr)
      ? (f === void 0 &&
          ((f = new Ut(
            new Gn(1, 1, 1),
            new rn({
              name: "BackgroundCubeMaterial",
              uniforms: pi(Zt.backgroundCube.uniforms),
              vertexShader: Zt.backgroundCube.vertexShader,
              fragmentShader: Zt.backgroundCube.fragmentShader,
              side: Rt,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          f.geometry.deleteAttribute("normal"),
          f.geometry.deleteAttribute("uv"),
          (f.onBeforeRender = function (T, R, N) {
            this.matrixWorld.copyPosition(N.matrixWorld);
          }),
          Object.defineProperty(f.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          r.update(f)),
        Pn.copy(M.backgroundRotation),
        (Pn.x *= -1),
        (Pn.y *= -1),
        (Pn.z *= -1),
        E.isCubeTexture &&
          E.isRenderTargetTexture === !1 &&
          ((Pn.y *= -1), (Pn.z *= -1)),
        (f.material.uniforms.envMap.value = E),
        (f.material.uniforms.flipEnvMap.value =
          E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1),
        (f.material.uniforms.backgroundBlurriness.value =
          M.backgroundBlurriness),
        (f.material.uniforms.backgroundIntensity.value = M.backgroundIntensity),
        f.material.uniforms.backgroundRotation.value.setFromMatrix4(
          sh.makeRotationFromEuler(Pn),
        ),
        (f.material.toneMapped = ze.getTransfer(E.colorSpace) !== Ke),
        (u !== E || h !== E.version || p !== i.toneMapping) &&
          ((f.material.needsUpdate = !0),
          (u = E),
          (h = E.version),
          (p = i.toneMapping)),
        f.layers.enableAll(),
        S.unshift(f, f.geometry, f.material, 0, 0, null))
      : E &&
        E.isTexture &&
        (l === void 0 &&
          ((l = new Ut(
            new Sr(2, 2),
            new rn({
              name: "BackgroundMaterial",
              uniforms: pi(Zt.background.uniforms),
              vertexShader: Zt.background.vertexShader,
              fragmentShader: Zt.background.fragmentShader,
              side: Sn,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          l.geometry.deleteAttribute("normal"),
          Object.defineProperty(l.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          r.update(l)),
        (l.material.uniforms.t2D.value = E),
        (l.material.uniforms.backgroundIntensity.value = M.backgroundIntensity),
        (l.material.toneMapped = ze.getTransfer(E.colorSpace) !== Ke),
        E.matrixAutoUpdate === !0 && E.updateMatrix(),
        l.material.uniforms.uvTransform.value.copy(E.matrix),
        (u !== E || h !== E.version || p !== i.toneMapping) &&
          ((l.material.needsUpdate = !0),
          (u = E),
          (h = E.version),
          (p = i.toneMapping)),
        l.layers.enableAll(),
        S.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function d(S, M) {
    (S.getRGB(fr, _c(i)), n.buffers.color.setClear(fr.r, fr.g, fr.b, M, a));
  }
  function y() {
    (f !== void 0 && (f.geometry.dispose(), f.material.dispose(), (f = void 0)),
      l !== void 0 &&
        (l.geometry.dispose(), l.material.dispose(), (l = void 0)));
  }
  return {
    getClearColor: function () {
      return s;
    },
    setClearColor: function (S, M = 1) {
      (s.set(S), (c = M), d(s, c));
    },
    getClearAlpha: function () {
      return c;
    },
    setClearAlpha: function (S) {
      ((c = S), d(s, c));
    },
    render: k,
    addToRenderList: m,
    dispose: y,
  };
}
function lh(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    n = {},
    r = h(null);
  let o = r,
    a = !1;
  function s(v, P, z, B, W) {
    let Y = !1;
    const V = u(B, z, P);
    (o !== V && ((o = V), l(o.object)),
      (Y = p(v, B, z, W)),
      Y && b(v, B, z, W),
      W !== null && e.update(W, i.ELEMENT_ARRAY_BUFFER),
      (Y || a) &&
        ((a = !1),
        M(v, P, z, B),
        W !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(W).buffer)));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(v) {
    return i.bindVertexArray(v);
  }
  function f(v) {
    return i.deleteVertexArray(v);
  }
  function u(v, P, z) {
    const B = z.wireframe === !0;
    let W = n[v.id];
    W === void 0 && ((W = {}), (n[v.id] = W));
    let Y = W[P.id];
    Y === void 0 && ((Y = {}), (W[P.id] = Y));
    let V = Y[B];
    return (V === void 0 && ((V = h(c())), (Y[B] = V)), V);
  }
  function h(v) {
    const P = [],
      z = [],
      B = [];
    for (let W = 0; W < t; W++) ((P[W] = 0), (z[W] = 0), (B[W] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: z,
      attributeDivisors: B,
      object: v,
      attributes: {},
      index: null,
    };
  }
  function p(v, P, z, B) {
    const W = o.attributes,
      Y = P.attributes;
    let V = 0;
    const H = z.getAttributes();
    for (const $ in H)
      if (H[$].location >= 0) {
        const ae = W[$];
        let ue = Y[$];
        if (
          (ue === void 0 &&
            ($ === "instanceMatrix" &&
              v.instanceMatrix &&
              (ue = v.instanceMatrix),
            $ === "instanceColor" && v.instanceColor && (ue = v.instanceColor)),
          ae === void 0 || ae.attribute !== ue || (ue && ae.data !== ue.data))
        )
          return !0;
        V++;
      }
    return o.attributesNum !== V || o.index !== B;
  }
  function b(v, P, z, B) {
    const W = {},
      Y = P.attributes;
    let V = 0;
    const H = z.getAttributes();
    for (const $ in H)
      if (H[$].location >= 0) {
        let ae = Y[$];
        ae === void 0 &&
          ($ === "instanceMatrix" &&
            v.instanceMatrix &&
            (ae = v.instanceMatrix),
          $ === "instanceColor" && v.instanceColor && (ae = v.instanceColor));
        const ue = {};
        ((ue.attribute = ae),
          ae && ae.data && (ue.data = ae.data),
          (W[$] = ue),
          V++);
      }
    ((o.attributes = W), (o.attributesNum = V), (o.index = B));
  }
  function k() {
    const v = o.newAttributes;
    for (let P = 0, z = v.length; P < z; P++) v[P] = 0;
  }
  function m(v) {
    d(v, 0);
  }
  function d(v, P) {
    const z = o.newAttributes,
      B = o.enabledAttributes,
      W = o.attributeDivisors;
    ((z[v] = 1),
      B[v] === 0 && (i.enableVertexAttribArray(v), (B[v] = 1)),
      W[v] !== P && (i.vertexAttribDivisor(v, P), (W[v] = P)));
  }
  function y() {
    const v = o.newAttributes,
      P = o.enabledAttributes;
    for (let z = 0, B = P.length; z < B; z++)
      P[z] !== v[z] && (i.disableVertexAttribArray(z), (P[z] = 0));
  }
  function S(v, P, z, B, W, Y, V) {
    V === !0
      ? i.vertexAttribIPointer(v, P, z, W, Y)
      : i.vertexAttribPointer(v, P, z, B, W, Y);
  }
  function M(v, P, z, B) {
    k();
    const W = B.attributes,
      Y = z.getAttributes(),
      V = P.defaultAttributeValues;
    for (const H in Y) {
      const $ = Y[H];
      if ($.location >= 0) {
        let fe = W[H];
        if (
          (fe === void 0 &&
            (H === "instanceMatrix" &&
              v.instanceMatrix &&
              (fe = v.instanceMatrix),
            H === "instanceColor" && v.instanceColor && (fe = v.instanceColor)),
          fe !== void 0)
        ) {
          const ae = fe.normalized,
            ue = fe.itemSize,
            Ue = e.get(fe);
          if (Ue === void 0) continue;
          const Le = Ue.buffer,
            rt = Ue.type,
            it = Ue.bytesPerElement,
            q = rt === i.INT || rt === i.UNSIGNED_INT || fe.gpuType === da;
          if (fe.isInterleavedBufferAttribute) {
            const Z = fe.data,
              pe = Z.stride,
              Re = fe.offset;
            if (Z.isInstancedInterleavedBuffer) {
              for (let be = 0; be < $.locationSize; be++)
                d($.location + be, Z.meshPerAttribute);
              v.isInstancedMesh !== !0 &&
                B._maxInstanceCount === void 0 &&
                (B._maxInstanceCount = Z.meshPerAttribute * Z.count);
            } else
              for (let be = 0; be < $.locationSize; be++) m($.location + be);
            i.bindBuffer(i.ARRAY_BUFFER, Le);
            for (let be = 0; be < $.locationSize; be++)
              S(
                $.location + be,
                ue / $.locationSize,
                rt,
                ae,
                pe * it,
                (Re + (ue / $.locationSize) * be) * it,
                q,
              );
          } else {
            if (fe.isInstancedBufferAttribute) {
              for (let Z = 0; Z < $.locationSize; Z++)
                d($.location + Z, fe.meshPerAttribute);
              v.isInstancedMesh !== !0 &&
                B._maxInstanceCount === void 0 &&
                (B._maxInstanceCount = fe.meshPerAttribute * fe.count);
            } else for (let Z = 0; Z < $.locationSize; Z++) m($.location + Z);
            i.bindBuffer(i.ARRAY_BUFFER, Le);
            for (let Z = 0; Z < $.locationSize; Z++)
              S(
                $.location + Z,
                ue / $.locationSize,
                rt,
                ae,
                ue * it,
                (ue / $.locationSize) * Z * it,
                q,
              );
          }
        } else if (V !== void 0) {
          const ae = V[H];
          if (ae !== void 0)
            switch (ae.length) {
              case 2:
                i.vertexAttrib2fv($.location, ae);
                break;
              case 3:
                i.vertexAttrib3fv($.location, ae);
                break;
              case 4:
                i.vertexAttrib4fv($.location, ae);
                break;
              default:
                i.vertexAttrib1fv($.location, ae);
            }
        }
      }
    }
    y();
  }
  function E() {
    N();
    for (const v in n) {
      const P = n[v];
      for (const z in P) {
        const B = P[z];
        for (const W in B) (f(B[W].object), delete B[W]);
        delete P[z];
      }
      delete n[v];
    }
  }
  function T(v) {
    if (n[v.id] === void 0) return;
    const P = n[v.id];
    for (const z in P) {
      const B = P[z];
      for (const W in B) (f(B[W].object), delete B[W]);
      delete P[z];
    }
    delete n[v.id];
  }
  function R(v) {
    for (const P in n) {
      const z = n[P];
      if (z[v.id] === void 0) continue;
      const B = z[v.id];
      for (const W in B) (f(B[W].object), delete B[W]);
      delete z[v.id];
    }
  }
  function N() {
    (x(), (a = !0), o !== r && ((o = r), l(o.object)));
  }
  function x() {
    ((r.geometry = null), (r.program = null), (r.wireframe = !1));
  }
  return {
    setup: s,
    reset: N,
    resetDefaultState: x,
    dispose: E,
    releaseStatesOfGeometry: T,
    releaseStatesOfProgram: R,
    initAttributes: k,
    enableAttribute: m,
    disableUnusedAttributes: y,
  };
}
function fh(i, e, t) {
  let n;
  function r(l) {
    n = l;
  }
  function o(l, f) {
    (i.drawArrays(n, l, f), t.update(f, n, 1));
  }
  function a(l, f, u) {
    u !== 0 && (i.drawArraysInstanced(n, l, f, u), t.update(f, n, u));
  }
  function s(l, f, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, f, 0, u);
    let p = 0;
    for (let b = 0; b < u; b++) p += f[b];
    t.update(p, n, 1);
  }
  function c(l, f, u, h) {
    if (u === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let b = 0; b < l.length; b++) a(l[b], f[b], h[b]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, l, 0, f, 0, h, 0, u);
      let b = 0;
      for (let k = 0; k < u; k++) b += f[k] * h[k];
      t.update(b, n, 1);
    }
  }
  ((this.setMode = r),
    (this.render = o),
    (this.renderInstances = a),
    (this.renderMultiDraw = s),
    (this.renderMultiDrawInstances = c));
}
function uh(i, e, t, n) {
  let r;
  function o() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const R = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(R) {
    return !(
      R !== qt &&
      n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function s(R) {
    const N =
      R === pn &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      R !== It &&
      n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) &&
      R !== Xt &&
      !N
    );
  }
  function c(R) {
    if (R === "highp") {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      R = "mediump";
    }
    return R === "mediump" &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const f = c(l);
  f !== l &&
    (Te("WebGLRenderer:", l, "not supported, using", f, "instead."), (l = f));
  const u = t.logarithmicDepthBuffer === !0,
    h = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control"),
    p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    b = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    k = i.getParameter(i.MAX_TEXTURE_SIZE),
    m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    d = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    y = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    S = i.getParameter(i.MAX_VARYING_VECTORS),
    M = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    E = i.getParameter(i.MAX_SAMPLES),
    T = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: o,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: s,
    precision: l,
    logarithmicDepthBuffer: u,
    reversedDepthBuffer: h,
    maxTextures: p,
    maxVertexTextures: b,
    maxTextureSize: k,
    maxCubemapSize: m,
    maxAttributes: d,
    maxVertexUniforms: y,
    maxVaryings: S,
    maxFragmentUniforms: M,
    maxSamples: E,
    samples: T,
  };
}
function dh(i) {
  const e = this;
  let t = null,
    n = 0,
    r = !1,
    o = !1;
  const a = new Dn(),
    s = new Ce(),
    c = { value: null, needsUpdate: !1 };
  ((this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (u, h) {
      const p = u.length !== 0 || h || n !== 0 || r;
      return ((r = h), (n = u.length), p);
    }),
    (this.beginShadows = function () {
      ((o = !0), f(null));
    }),
    (this.endShadows = function () {
      o = !1;
    }),
    (this.setGlobalState = function (u, h) {
      t = f(u, h, 0);
    }),
    (this.setState = function (u, h, p) {
      const b = u.clippingPlanes,
        k = u.clipIntersection,
        m = u.clipShadows,
        d = i.get(u);
      if (!r || b === null || b.length === 0 || (o && !m)) o ? f(null) : l();
      else {
        const y = o ? 0 : n,
          S = y * 4;
        let M = d.clippingState || null;
        ((c.value = M), (M = f(b, h, S, p)));
        for (let E = 0; E !== S; ++E) M[E] = t[E];
        ((d.clippingState = M),
          (this.numIntersection = k ? this.numPlanes : 0),
          (this.numPlanes += y));
      }
    }));
  function l() {
    (c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0));
  }
  function f(u, h, p, b) {
    const k = u !== null ? u.length : 0;
    let m = null;
    if (k !== 0) {
      if (((m = c.value), b !== !0 || m === null)) {
        const d = p + k * 4,
          y = h.matrixWorldInverse;
        (s.getNormalMatrix(y),
          (m === null || m.length < d) && (m = new Float32Array(d)));
        for (let S = 0, M = p; S !== k; ++S, M += 4)
          (a.copy(u[S]).applyMatrix4(y, s),
            a.normal.toArray(m, M),
            (m[M + 3] = a.constant));
      }
      ((c.value = m), (c.needsUpdate = !0));
    }
    return ((e.numPlanes = k), (e.numIntersection = 0), m);
  }
}
function hh(i) {
  let e = new WeakMap();
  function t(a, s) {
    return (s === So ? (a.mapping = Bn) : s === yo && (a.mapping = ui), a);
  }
  function n(a) {
    if (a && a.isTexture) {
      const s = a.mapping;
      if (s === So || s === yo)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new xc(c.height);
            return (
              l.fromEquirectangularTexture(i, a),
              e.set(a, l),
              a.addEventListener("dispose", r),
              t(l.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function r(a) {
    const s = a.target;
    s.removeEventListener("dispose", r);
    const c = e.get(s);
    c !== void 0 && (e.delete(s), c.dispose());
  }
  function o() {
    e = new WeakMap();
  }
  return { get: n, dispose: o };
}
const Mn = 4,
  bs = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Un = 20,
  ph = 256,
  Ai = new yr(),
  gs = new Fe();
let oo = null,
  ao = 0,
  so = 0,
  co = !1;
const mh = new U();
class xs {
  constructor(e) {
    ((this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._lodMeshes = []),
      (this._backgroundBox = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      (this._blurMaterial = null),
      (this._ggxMaterial = null));
  }
  fromScene(e, t = 0, n = 0.1, r = 100, o = {}) {
    const { size: a = 256, position: s = mh } = o;
    ((oo = this._renderer.getRenderTarget()),
      (ao = this._renderer.getActiveCubeFace()),
      (so = this._renderer.getActiveMipmapLevel()),
      (co = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(a));
    const c = this._allocateTargets();
    return (
      (c.depthBuffer = !0),
      this._sceneToCubeUV(e, n, r, c, s),
      t > 0 && this._blur(c, 0, 0, t),
      this._applyPMREM(c),
      this._cleanup(c),
      c
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = ws()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = vs()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    (this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose(),
      this._backgroundBox !== null &&
        (this._backgroundBox.geometry.dispose(),
        this._backgroundBox.material.dispose()));
  }
  _setSize(e) {
    ((this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax)));
  }
  _dispose() {
    (this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._ggxMaterial !== null && this._ggxMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose());
    for (let e = 0; e < this._lodMeshes.length; e++)
      this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    (this._renderer.setRenderTarget(oo, ao, so),
      (this._renderer.xr.enabled = co),
      (e.scissorTest = !1),
      oi(e, 0, 0, e.width, e.height));
  }
  _fromTexture(e, t) {
    (e.mapping === Bn || e.mapping === ui
      ? this._setSize(
          e.image.length === 0
            ? 16
            : e.image[0].width || e.image[0].image.width,
        )
      : this._setSize(e.image.width / 4),
      (oo = this._renderer.getRenderTarget()),
      (ao = this._renderer.getActiveCubeFace()),
      (so = this._renderer.getActiveMipmapLevel()),
      (co = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1));
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n),
      this._applyPMREM(n),
      this._cleanup(n),
      n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: kt,
        minFilter: kt,
        generateMipmaps: !1,
        type: pn,
        format: qt,
        colorSpace: hi,
        depthBuffer: !1,
      },
      r = ks(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      (this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = ks(e, t, n)));
      const { _lodMax: o } = this;
      (({
        lodMeshes: this._lodMeshes,
        sizeLods: this._sizeLods,
        sigmas: this._sigmas,
      } = _h(o)),
        (this._blurMaterial = gh(o, e, t)),
        (this._ggxMaterial = bh(o, e, t)));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Ut(new Bt(), e);
    this._renderer.compile(t, Ai);
  }
  _sceneToCubeUV(e, t, n, r, o) {
    const c = new Ot(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      f = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      h = u.autoClear,
      p = u.toneMapping;
    (u.getClearColor(gs),
      (u.toneMapping = en),
      (u.autoClear = !1),
      u.state.buffers.depth.getReversed() &&
        (u.setRenderTarget(r), u.clearDepth(), u.setRenderTarget(null)),
      this._backgroundBox === null &&
        (this._backgroundBox = new Ut(
          new Gn(),
          new wa({
            name: "PMREM.Background",
            side: Rt,
            depthWrite: !1,
            depthTest: !1,
          }),
        )));
    const k = this._backgroundBox,
      m = k.material;
    let d = !1;
    const y = e.background;
    y
      ? y.isColor && (m.color.copy(y), (e.background = null), (d = !0))
      : (m.color.copy(gs), (d = !0));
    for (let S = 0; S < 6; S++) {
      const M = S % 3;
      M === 0
        ? (c.up.set(0, l[S], 0),
          c.position.set(o.x, o.y, o.z),
          c.lookAt(o.x + f[S], o.y, o.z))
        : M === 1
          ? (c.up.set(0, 0, l[S]),
            c.position.set(o.x, o.y, o.z),
            c.lookAt(o.x, o.y + f[S], o.z))
          : (c.up.set(0, l[S], 0),
            c.position.set(o.x, o.y, o.z),
            c.lookAt(o.x, o.y, o.z + f[S]));
      const E = this._cubeSize;
      (oi(r, M * E, S > 2 ? E : 0, E, E),
        u.setRenderTarget(r),
        d && u.render(k, c),
        u.render(e, c));
    }
    ((u.toneMapping = p), (u.autoClear = h), (e.background = y));
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      r = e.mapping === Bn || e.mapping === ui;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = ws()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = vs());
    const o = r ? this._cubemapMaterial : this._equirectMaterial,
      a = this._lodMeshes[0];
    a.material = o;
    const s = o.uniforms;
    s.envMap.value = e;
    const c = this._cubeSize;
    (oi(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, Ai));
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodMeshes.length;
    for (let o = 1; o < r; o++) this._applyGGXFilter(e, o - 1, o);
    t.autoClear = n;
  }
  _applyGGXFilter(e, t, n) {
    const r = this._renderer,
      o = this._pingPongRenderTarget,
      a = this._ggxMaterial,
      s = this._lodMeshes[n];
    s.material = a;
    const c = a.uniforms,
      l = n / (this._lodMeshes.length - 1),
      f = t / (this._lodMeshes.length - 1),
      u = Math.sqrt(l * l - f * f),
      h = 0 + l * 1.25,
      p = u * h,
      { _lodMax: b } = this,
      k = this._sizeLods[n],
      m = 3 * k * (n > b - Mn ? n - b + Mn : 0),
      d = 4 * (this._cubeSize - k);
    ((c.envMap.value = e.texture),
      (c.roughness.value = p),
      (c.mipInt.value = b - t),
      oi(o, m, d, 3 * k, 2 * k),
      r.setRenderTarget(o),
      r.render(s, Ai),
      (c.envMap.value = o.texture),
      (c.roughness.value = 0),
      (c.mipInt.value = b - n),
      oi(e, m, d, 3 * k, 2 * k),
      r.setRenderTarget(e),
      r.render(s, Ai));
  }
  _blur(e, t, n, r, o) {
    const a = this._pingPongRenderTarget;
    (this._halfBlur(e, a, t, n, r, "latitudinal", o),
      this._halfBlur(a, e, n, n, r, "longitudinal", o));
  }
  _halfBlur(e, t, n, r, o, a, s) {
    const c = this._renderer,
      l = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      He("blur direction must be either latitudinal or longitudinal!");
    const f = 3,
      u = this._lodMeshes[r];
    u.material = l;
    const h = l.uniforms,
      p = this._sizeLods[n] - 1,
      b = isFinite(o) ? Math.PI / (2 * p) : (2 * Math.PI) / (2 * Un - 1),
      k = o / b,
      m = isFinite(o) ? 1 + Math.floor(f * k) : Un;
    m > Un &&
      Te(
        `sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Un}`,
      );
    const d = [];
    let y = 0;
    for (let R = 0; R < Un; ++R) {
      const N = R / k,
        x = Math.exp((-N * N) / 2);
      (d.push(x), R === 0 ? (y += x) : R < m && (y += 2 * x));
    }
    for (let R = 0; R < d.length; R++) d[R] = d[R] / y;
    ((h.envMap.value = e.texture),
      (h.samples.value = m),
      (h.weights.value = d),
      (h.latitudinal.value = a === "latitudinal"),
      s && (h.poleAxis.value = s));
    const { _lodMax: S } = this;
    ((h.dTheta.value = b), (h.mipInt.value = S - n));
    const M = this._sizeLods[r],
      E = 3 * M * (r > S - Mn ? r - S + Mn : 0),
      T = 4 * (this._cubeSize - M);
    (oi(t, E, T, 3 * M, 2 * M), c.setRenderTarget(t), c.render(u, Ai));
  }
}
function _h(i) {
  const e = [],
    t = [],
    n = [];
  let r = i;
  const o = i - Mn + 1 + bs.length;
  for (let a = 0; a < o; a++) {
    const s = Math.pow(2, r);
    e.push(s);
    let c = 1 / s;
    (a > i - Mn ? (c = bs[a - i + Mn - 1]) : a === 0 && (c = 0), t.push(c));
    const l = 1 / (s - 2),
      f = -l,
      u = 1 + l,
      h = [f, f, u, f, u, u, f, f, u, u, f, u],
      p = 6,
      b = 6,
      k = 3,
      m = 2,
      d = 1,
      y = new Float32Array(k * b * p),
      S = new Float32Array(m * b * p),
      M = new Float32Array(d * b * p);
    for (let T = 0; T < p; T++) {
      const R = ((T % 3) * 2) / 3 - 1,
        N = T > 2 ? 0 : -1,
        x = [
          R,
          N,
          0,
          R + 2 / 3,
          N,
          0,
          R + 2 / 3,
          N + 1,
          0,
          R,
          N,
          0,
          R + 2 / 3,
          N + 1,
          0,
          R,
          N + 1,
          0,
        ];
      (y.set(x, k * b * T), S.set(h, m * b * T));
      const v = [T, T, T, T, T, T];
      M.set(v, d * b * T);
    }
    const E = new Bt();
    (E.setAttribute("position", new Yt(y, k)),
      E.setAttribute("uv", new Yt(S, m)),
      E.setAttribute("faceIndex", new Yt(M, d)),
      n.push(new Ut(E, null)),
      r > Mn && r--);
  }
  return { lodMeshes: n, sizeLods: e, sigmas: t };
}
function ks(i, e, t) {
  const n = new tn(i, e, t);
  return (
    (n.texture.mapping = Mr),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function oi(i, e, t, n, r) {
  (i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r));
}
function bh(i, e, t) {
  return new rn({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: ph,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 },
    },
    vertexShader: Er(),
    fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
    blending: dn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function gh(i, e, t) {
  const n = new Float32Array(Un),
    r = new U(0, 1, 0);
  return new rn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Un,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: Er(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: dn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function vs() {
  return new rn({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Er(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: dn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ws() {
  return new rn({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Er(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: dn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Er() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function xh(i) {
  let e = new WeakMap(),
    t = null;
  function n(s) {
    if (s && s.isTexture) {
      const c = s.mapping,
        l = c === So || c === yo,
        f = c === Bn || c === ui;
      if (l || f) {
        let u = e.get(s);
        const h = u !== void 0 ? u.texture.pmremVersion : 0;
        if (s.isRenderTargetTexture && s.pmremVersion !== h)
          return (
            t === null && (t = new xs(i)),
            (u = l ? t.fromEquirectangular(s, u) : t.fromCubemap(s, u)),
            (u.texture.pmremVersion = s.pmremVersion),
            e.set(s, u),
            u.texture
          );
        if (u !== void 0) return u.texture;
        {
          const p = s.image;
          return (l && p && p.height > 0) || (f && p && r(p))
            ? (t === null && (t = new xs(i)),
              (u = l ? t.fromEquirectangular(s) : t.fromCubemap(s)),
              (u.texture.pmremVersion = s.pmremVersion),
              e.set(s, u),
              s.addEventListener("dispose", o),
              u.texture)
            : null;
        }
      }
    }
    return s;
  }
  function r(s) {
    let c = 0;
    const l = 6;
    for (let f = 0; f < l; f++) s[f] !== void 0 && c++;
    return c === l;
  }
  function o(s) {
    const c = s.target;
    c.removeEventListener("dispose", o);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    ((e = new WeakMap()), t !== null && (t.dispose(), (t = null)));
  }
  return { get: n, dispose: a };
}
function kh(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    const r = i.getExtension(n);
    return ((e[n] = r), r);
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      (t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent"));
    },
    get: function (n) {
      const r = t(n);
      return (
        r === null && Ni("WebGLRenderer: " + n + " extension not supported."),
        r
      );
    },
  };
}
function vh(i, e, t, n) {
  const r = {},
    o = new WeakMap();
  function a(u) {
    const h = u.target;
    h.index !== null && e.remove(h.index);
    for (const b in h.attributes) e.remove(h.attributes[b]);
    (h.removeEventListener("dispose", a), delete r[h.id]);
    const p = o.get(h);
    (p && (e.remove(p), o.delete(h)),
      n.releaseStatesOfGeometry(h),
      h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount,
      t.memory.geometries--);
  }
  function s(u, h) {
    return (
      r[h.id] === !0 ||
        (h.addEventListener("dispose", a),
        (r[h.id] = !0),
        t.memory.geometries++),
      h
    );
  }
  function c(u) {
    const h = u.attributes;
    for (const p in h) e.update(h[p], i.ARRAY_BUFFER);
  }
  function l(u) {
    const h = [],
      p = u.index,
      b = u.attributes.position;
    let k = 0;
    if (p !== null) {
      const y = p.array;
      k = p.version;
      for (let S = 0, M = y.length; S < M; S += 3) {
        const E = y[S + 0],
          T = y[S + 1],
          R = y[S + 2];
        h.push(E, T, T, R, R, E);
      }
    } else if (b !== void 0) {
      const y = b.array;
      k = b.version;
      for (let S = 0, M = y.length / 3 - 1; S < M; S += 3) {
        const E = S + 0,
          T = S + 1,
          R = S + 2;
        h.push(E, T, T, R, R, E);
      }
    } else return;
    const m = new (lc(h) ? mc : pc)(h, 1);
    m.version = k;
    const d = o.get(u);
    (d && e.remove(d), o.set(u, m));
  }
  function f(u) {
    const h = o.get(u);
    if (h) {
      const p = u.index;
      p !== null && h.version < p.version && l(u);
    } else l(u);
    return o.get(u);
  }
  return { get: s, update: c, getWireframeAttribute: f };
}
function wh(i, e, t) {
  let n;
  function r(h) {
    n = h;
  }
  let o, a;
  function s(h) {
    ((o = h.type), (a = h.bytesPerElement));
  }
  function c(h, p) {
    (i.drawElements(n, p, o, h * a), t.update(p, n, 1));
  }
  function l(h, p, b) {
    b !== 0 && (i.drawElementsInstanced(n, p, o, h * a, b), t.update(p, n, b));
  }
  function f(h, p, b) {
    if (b === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, o, h, 0, b);
    let m = 0;
    for (let d = 0; d < b; d++) m += p[d];
    t.update(m, n, 1);
  }
  function u(h, p, b, k) {
    if (b === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let d = 0; d < h.length; d++) l(h[d] / a, p[d], k[d]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, o, h, 0, k, 0, b);
      let d = 0;
      for (let y = 0; y < b; y++) d += p[y] * k[y];
      t.update(d, n, 1);
    }
  }
  ((this.setMode = r),
    (this.setIndex = s),
    (this.render = c),
    (this.renderInstances = l),
    (this.renderMultiDraw = f),
    (this.renderMultiDrawInstances = u));
}
function Mh(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(o, a, s) {
    switch ((t.calls++, a)) {
      case i.TRIANGLES:
        t.triangles += s * (o / 3);
        break;
      case i.LINES:
        t.lines += s * (o / 2);
        break;
      case i.LINE_STRIP:
        t.lines += s * (o - 1);
        break;
      case i.LINE_LOOP:
        t.lines += s * o;
        break;
      case i.POINTS:
        t.points += s * o;
        break;
      default:
        He("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    ((t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0));
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n,
  };
}
function Sh(i, e, t) {
  const n = new WeakMap(),
    r = new st();
  function o(a, s, c) {
    const l = a.morphTargetInfluences,
      f =
        s.morphAttributes.position ||
        s.morphAttributes.normal ||
        s.morphAttributes.color,
      u = f !== void 0 ? f.length : 0;
    let h = n.get(s);
    if (h === void 0 || h.count !== u) {
      let x = function () {
        (R.dispose(), n.delete(s), s.removeEventListener("dispose", x));
      };
      h !== void 0 && h.texture.dispose();
      const p = s.morphAttributes.position !== void 0,
        b = s.morphAttributes.normal !== void 0,
        k = s.morphAttributes.color !== void 0,
        m = s.morphAttributes.position || [],
        d = s.morphAttributes.normal || [],
        y = s.morphAttributes.color || [];
      let S = 0;
      (p === !0 && (S = 1), b === !0 && (S = 2), k === !0 && (S = 3));
      let M = s.attributes.position.count * S,
        E = 1;
      M > e.maxTextureSize &&
        ((E = Math.ceil(M / e.maxTextureSize)), (M = e.maxTextureSize));
      const T = new Float32Array(M * E * 4 * u),
        R = new fc(T, M, E, u);
      ((R.type = Xt), (R.needsUpdate = !0));
      const N = S * 4;
      for (let v = 0; v < u; v++) {
        const P = m[v],
          z = d[v],
          B = y[v],
          W = M * E * 4 * v;
        for (let Y = 0; Y < P.count; Y++) {
          const V = Y * N;
          (p === !0 &&
            (r.fromBufferAttribute(P, Y),
            (T[W + V + 0] = r.x),
            (T[W + V + 1] = r.y),
            (T[W + V + 2] = r.z),
            (T[W + V + 3] = 0)),
            b === !0 &&
              (r.fromBufferAttribute(z, Y),
              (T[W + V + 4] = r.x),
              (T[W + V + 5] = r.y),
              (T[W + V + 6] = r.z),
              (T[W + V + 7] = 0)),
            k === !0 &&
              (r.fromBufferAttribute(B, Y),
              (T[W + V + 8] = r.x),
              (T[W + V + 9] = r.y),
              (T[W + V + 10] = r.z),
              (T[W + V + 11] = B.itemSize === 4 ? r.w : 1)));
        }
      }
      ((h = { count: u, texture: R, size: new We(M, E) }),
        n.set(s, h),
        s.addEventListener("dispose", x));
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let p = 0;
      for (let k = 0; k < l.length; k++) p += l[k];
      const b = s.morphTargetsRelative ? 1 : 1 - p;
      (c.getUniforms().setValue(i, "morphTargetBaseInfluence", b),
        c.getUniforms().setValue(i, "morphTargetInfluences", l));
    }
    (c.getUniforms().setValue(i, "morphTargetsTexture", h.texture, t),
      c.getUniforms().setValue(i, "morphTargetsTextureSize", h.size));
  }
  return { update: o };
}
function yh(i, e, t, n) {
  let r = new WeakMap();
  function o(c) {
    const l = n.render.frame,
      f = c.geometry,
      u = e.get(c, f);
    if (
      (r.get(u) !== l && (e.update(u), r.set(u, l)),
      c.isInstancedMesh &&
        (c.hasEventListener("dispose", s) === !1 &&
          c.addEventListener("dispose", s),
        r.get(c) !== l &&
          (t.update(c.instanceMatrix, i.ARRAY_BUFFER),
          c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER),
          r.set(c, l))),
      c.isSkinnedMesh)
    ) {
      const h = c.skeleton;
      r.get(h) !== l && (h.update(), r.set(h, l));
    }
    return u;
  }
  function a() {
    r = new WeakMap();
  }
  function s(c) {
    const l = c.target;
    (l.removeEventListener("dispose", s),
      t.remove(l.instanceMatrix),
      l.instanceColor !== null && t.remove(l.instanceColor));
  }
  return { update: o, dispose: a };
}
const Eh = {
  [js]: "LINEAR_TONE_MAPPING",
  [Ks]: "REINHARD_TONE_MAPPING",
  [$s]: "CINEON_TONE_MAPPING",
  [Zs]: "ACES_FILMIC_TONE_MAPPING",
  [Qs]: "AGX_TONE_MAPPING",
  [ec]: "NEUTRAL_TONE_MAPPING",
  [Js]: "CUSTOM_TONE_MAPPING",
};
function Th(i, e, t, n, r) {
  const o = new tn(e, t, { type: i, depthBuffer: n, stencilBuffer: r }),
    a = new tn(e, t, { type: pn, depthBuffer: !1, stencilBuffer: !1 }),
    s = new Bt();
  (s.setAttribute("position", new St([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
    s.setAttribute("uv", new St([0, 2, 0, 0, 2, 0], 2)));
  const c = new df({
      uniforms: { tDiffuse: { value: null } },
      vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
      fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
      depthTest: !1,
      depthWrite: !1,
    }),
    l = new Ut(s, c),
    f = new yr(-1, 1, 1, -1, 0, 1);
  let u = null,
    h = null,
    p = !1,
    b,
    k = null,
    m = [],
    d = !1;
  ((this.setSize = function (y, S) {
    (o.setSize(y, S), a.setSize(y, S));
    for (let M = 0; M < m.length; M++) {
      const E = m[M];
      E.setSize && E.setSize(y, S);
    }
  }),
    (this.setEffects = function (y) {
      ((m = y), (d = m.length > 0 && m[0].isRenderPass === !0));
      const S = o.width,
        M = o.height;
      for (let E = 0; E < m.length; E++) {
        const T = m[E];
        T.setSize && T.setSize(S, M);
      }
    }),
    (this.begin = function (y, S) {
      if (p || (y.toneMapping === en && m.length === 0)) return !1;
      if (((k = S), S !== null)) {
        const M = S.width,
          E = S.height;
        (o.width !== M || o.height !== E) && this.setSize(M, E);
      }
      return (
        d === !1 && y.setRenderTarget(o),
        (b = y.toneMapping),
        (y.toneMapping = en),
        !0
      );
    }),
    (this.hasRenderPass = function () {
      return d;
    }),
    (this.end = function (y, S) {
      ((y.toneMapping = b), (p = !0));
      let M = o,
        E = a;
      for (let T = 0; T < m.length; T++) {
        const R = m[T];
        if (R.enabled !== !1 && (R.render(y, E, M, S), R.needsSwap !== !1)) {
          const N = M;
          ((M = E), (E = N));
        }
      }
      if (u !== y.outputColorSpace || h !== y.toneMapping) {
        ((u = y.outputColorSpace),
          (h = y.toneMapping),
          (c.defines = {}),
          ze.getTransfer(u) === Ke && (c.defines.SRGB_TRANSFER = ""));
        const T = Eh[h];
        (T && (c.defines[T] = ""), (c.needsUpdate = !0));
      }
      ((c.uniforms.tDiffuse.value = M.texture),
        y.setRenderTarget(k),
        y.render(l, f),
        (k = null),
        (p = !1));
    }),
    (this.isCompositing = function () {
      return p;
    }),
    (this.dispose = function () {
      (o.dispose(), a.dispose(), s.dispose(), c.dispose());
    }));
}
const Tc = new _t(),
  sa = new Fi(1, 1),
  Ac = new fc(),
  Rc = new Bl(),
  Cc = new gc(),
  Ms = [],
  Ss = [],
  ys = new Float32Array(16),
  Es = new Float32Array(9),
  Ts = new Float32Array(4);
function bi(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let o = Ms[r];
  if ((o === void 0 && ((o = new Float32Array(r)), (Ms[r] = o)), e !== 0)) {
    n.toArray(o, 0);
    for (let a = 1, s = 0; a !== e; ++a) ((s += t), i[a].toArray(o, s));
  }
  return o;
}
function dt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function ht(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function Tr(i, e) {
  let t = Ss[e];
  t === void 0 && ((t = new Int32Array(e)), (Ss[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function Ah(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function Rh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (dt(t, e)) return;
    (i.uniform2fv(this.addr, e), ht(t, e));
  }
}
function Ch(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (dt(t, e)) return;
    (i.uniform3fv(this.addr, e), ht(t, e));
  }
}
function Ph(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (dt(t, e)) return;
    (i.uniform4fv(this.addr, e), ht(t, e));
  }
}
function Lh(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (dt(t, e)) return;
    (i.uniformMatrix2fv(this.addr, !1, e), ht(t, e));
  } else {
    if (dt(t, n)) return;
    (Ts.set(n), i.uniformMatrix2fv(this.addr, !1, Ts), ht(t, n));
  }
}
function Dh(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (dt(t, e)) return;
    (i.uniformMatrix3fv(this.addr, !1, e), ht(t, e));
  } else {
    if (dt(t, n)) return;
    (Es.set(n), i.uniformMatrix3fv(this.addr, !1, Es), ht(t, n));
  }
}
function Ih(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (dt(t, e)) return;
    (i.uniformMatrix4fv(this.addr, !1, e), ht(t, e));
  } else {
    if (dt(t, n)) return;
    (ys.set(n), i.uniformMatrix4fv(this.addr, !1, ys), ht(t, n));
  }
}
function Uh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function Nh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (dt(t, e)) return;
    (i.uniform2iv(this.addr, e), ht(t, e));
  }
}
function Fh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (dt(t, e)) return;
    (i.uniform3iv(this.addr, e), ht(t, e));
  }
}
function Oh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (dt(t, e)) return;
    (i.uniform4iv(this.addr, e), ht(t, e));
  }
}
function Bh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function zh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (dt(t, e)) return;
    (i.uniform2uiv(this.addr, e), ht(t, e));
  }
}
function Vh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (dt(t, e)) return;
    (i.uniform3uiv(this.addr, e), ht(t, e));
  }
}
function Gh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (dt(t, e)) return;
    (i.uniform4uiv(this.addr, e), ht(t, e));
  }
}
function Hh(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r));
  let o;
  (this.type === i.SAMPLER_2D_SHADOW
    ? ((sa.compareFunction = t.isReversedDepthBuffer() ? ka : xa), (o = sa))
    : (o = Tc),
    t.setTexture2D(e || o, r));
}
function Wh(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  (n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture3D(e || Rc, r));
}
function Xh(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  (n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTextureCube(e || Cc, r));
}
function qh(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  (n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2DArray(e || Ac, r));
}
function Yh(i) {
  switch (i) {
    case 5126:
      return Ah;
    case 35664:
      return Rh;
    case 35665:
      return Ch;
    case 35666:
      return Ph;
    case 35674:
      return Lh;
    case 35675:
      return Dh;
    case 35676:
      return Ih;
    case 5124:
    case 35670:
      return Uh;
    case 35667:
    case 35671:
      return Nh;
    case 35668:
    case 35672:
      return Fh;
    case 35669:
    case 35673:
      return Oh;
    case 5125:
      return Bh;
    case 36294:
      return zh;
    case 36295:
      return Vh;
    case 36296:
      return Gh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Hh;
    case 35679:
    case 36299:
    case 36307:
      return Wh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Xh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return qh;
  }
}
function jh(i, e) {
  i.uniform1fv(this.addr, e);
}
function Kh(i, e) {
  const t = bi(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function $h(i, e) {
  const t = bi(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Zh(i, e) {
  const t = bi(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Jh(i, e) {
  const t = bi(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Qh(i, e) {
  const t = bi(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function ep(i, e) {
  const t = bi(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function tp(i, e) {
  i.uniform1iv(this.addr, e);
}
function np(i, e) {
  i.uniform2iv(this.addr, e);
}
function ip(i, e) {
  i.uniform3iv(this.addr, e);
}
function rp(i, e) {
  i.uniform4iv(this.addr, e);
}
function op(i, e) {
  i.uniform1uiv(this.addr, e);
}
function ap(i, e) {
  i.uniform2uiv(this.addr, e);
}
function sp(i, e) {
  i.uniform3uiv(this.addr, e);
}
function cp(i, e) {
  i.uniform4uiv(this.addr, e);
}
function lp(i, e, t) {
  const n = this.cache,
    r = e.length,
    o = Tr(t, r);
  dt(n, o) || (i.uniform1iv(this.addr, o), ht(n, o));
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? (a = sa) : (a = Tc);
  for (let s = 0; s !== r; ++s) t.setTexture2D(e[s] || a, o[s]);
}
function fp(i, e, t) {
  const n = this.cache,
    r = e.length,
    o = Tr(t, r);
  dt(n, o) || (i.uniform1iv(this.addr, o), ht(n, o));
  for (let a = 0; a !== r; ++a) t.setTexture3D(e[a] || Rc, o[a]);
}
function up(i, e, t) {
  const n = this.cache,
    r = e.length,
    o = Tr(t, r);
  dt(n, o) || (i.uniform1iv(this.addr, o), ht(n, o));
  for (let a = 0; a !== r; ++a) t.setTextureCube(e[a] || Cc, o[a]);
}
function dp(i, e, t) {
  const n = this.cache,
    r = e.length,
    o = Tr(t, r);
  dt(n, o) || (i.uniform1iv(this.addr, o), ht(n, o));
  for (let a = 0; a !== r; ++a) t.setTexture2DArray(e[a] || Ac, o[a]);
}
function hp(i) {
  switch (i) {
    case 5126:
      return jh;
    case 35664:
      return Kh;
    case 35665:
      return $h;
    case 35666:
      return Zh;
    case 35674:
      return Jh;
    case 35675:
      return Qh;
    case 35676:
      return ep;
    case 5124:
    case 35670:
      return tp;
    case 35667:
    case 35671:
      return np;
    case 35668:
    case 35672:
      return ip;
    case 35669:
    case 35673:
      return rp;
    case 5125:
      return op;
    case 36294:
      return ap;
    case 36295:
      return sp;
    case 36296:
      return cp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return lp;
    case 35679:
    case 36299:
    case 36307:
      return fp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return up;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return dp;
  }
}
class pp {
  constructor(e, t, n) {
    ((this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = Yh(t.type)));
  }
}
class mp {
  constructor(e, t, n) {
    ((this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = hp(t.type)));
  }
}
class _p {
  constructor(e) {
    ((this.id = e), (this.seq = []), (this.map = {}));
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let o = 0, a = r.length; o !== a; ++o) {
      const s = r[o];
      s.setValue(e, t[s.id], n);
    }
  }
}
const lo = /(\w+)(\])?(\[|\.)?/g;
function As(i, e) {
  (i.seq.push(e), (i.map[e.id] = e));
}
function bp(i, e, t) {
  const n = i.name,
    r = n.length;
  for (lo.lastIndex = 0; ; ) {
    const o = lo.exec(n),
      a = lo.lastIndex;
    let s = o[1];
    const c = o[2] === "]",
      l = o[3];
    if ((c && (s = s | 0), l === void 0 || (l === "[" && a + 2 === r))) {
      As(t, l === void 0 ? new pp(s, i, e) : new mp(s, i, e));
      break;
    } else {
      let u = t.map[s];
      (u === void 0 && ((u = new _p(s)), As(t, u)), (t = u));
    }
  }
}
class br {
  constructor(e, t) {
    ((this.seq = []), (this.map = {}));
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const s = e.getActiveUniform(t, a),
        c = e.getUniformLocation(t, s.name);
      bp(s, c, this);
    }
    const r = [],
      o = [];
    for (const a of this.seq)
      a.type === e.SAMPLER_2D_SHADOW ||
      a.type === e.SAMPLER_CUBE_SHADOW ||
      a.type === e.SAMPLER_2D_ARRAY_SHADOW
        ? r.push(a)
        : o.push(a);
    r.length > 0 && (this.seq = r.concat(o));
  }
  setValue(e, t, n, r) {
    const o = this.map[t];
    o !== void 0 && o.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let o = 0, a = t.length; o !== a; ++o) {
      const s = t[o],
        c = n[s.id];
      c.needsUpdate !== !1 && s.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, o = e.length; r !== o; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Rs(i, e, t) {
  const n = i.createShader(e);
  return (i.shaderSource(n, t), i.compileShader(n), n);
}
const gp = 37297;
let xp = 0;
function kp(i, e) {
  const t = i.split(`
`),
    n = [],
    r = Math.max(e - 6, 0),
    o = Math.min(e + 6, t.length);
  for (let a = r; a < o; a++) {
    const s = a + 1;
    n.push(`${s === e ? ">" : " "} ${s}: ${t[a]}`);
  }
  return n.join(`
`);
}
const Cs = new Ce();
function vp(i) {
  ze._getMatrix(Cs, ze.workingColorSpace, i);
  const e = `mat3( ${Cs.elements.map((t) => t.toFixed(4))} )`;
  switch (ze.getTransfer(i)) {
    case gr:
      return [e, "LinearTransferOETF"];
    case Ke:
      return [e, "sRGBTransferOETF"];
    default:
      return (
        Te("WebGLProgram: Unsupported color space: ", i),
        [e, "LinearTransferOETF"]
      );
  }
}
function Ps(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    o = (i.getShaderInfoLog(e) || "").trim();
  if (n && o === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(o);
  if (a) {
    const s = parseInt(a[1]);
    return (
      t.toUpperCase() +
      `

` +
      o +
      `

` +
      kp(i.getShaderSource(e), s)
    );
  } else return o;
}
function wp(i, e) {
  const t = vp(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}",
  ].join(`
`);
}
const Mp = {
  [js]: "Linear",
  [Ks]: "Reinhard",
  [$s]: "Cineon",
  [Zs]: "ACESFilmic",
  [Qs]: "AgX",
  [ec]: "Neutral",
  [Js]: "Custom",
};
function Sp(i, e) {
  const t = Mp[e];
  return t === void 0
    ? (Te("WebGLProgram: Unsupported toneMapping:", e),
      "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }")
    : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const ur = new U();
function yp() {
  ze.getLuminanceCoefficients(ur);
  const i = ur.x.toFixed(4),
    e = ur.y.toFixed(4),
    t = ur.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function Ep(i) {
  return [
    i.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(Li).join(`
`);
}
function Tp(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Ap(i, e) {
  const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const o = i.getActiveAttrib(e, r),
      a = o.name;
    let s = 1;
    (o.type === i.FLOAT_MAT2 && (s = 2),
      o.type === i.FLOAT_MAT3 && (s = 3),
      o.type === i.FLOAT_MAT4 && (s = 4),
      (t[a] = {
        type: o.type,
        location: i.getAttribLocation(e, a),
        locationSize: s,
      }));
  }
  return t;
}
function Li(i) {
  return i !== "";
}
function Ls(i, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ds(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection,
    );
}
const Rp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ca(i) {
  return i.replace(Rp, Pp);
}
const Cp = new Map();
function Pp(i, e) {
  let t = Pe[e];
  if (t === void 0) {
    const n = Cp.get(e);
    if (n !== void 0)
      ((t = Pe[n]),
        Te(
          'WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n,
        ));
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return ca(t);
}
const Lp =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Is(i) {
  return i.replace(Lp, Dp);
}
function Dp(i, e, t, n) {
  let r = "";
  for (let o = parseInt(e); o < parseInt(t); o++)
    r += n
      .replace(/\[\s*i\s*\]/g, "[ " + o + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, o);
  return r;
}
function Us(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return (
    i.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === "mediump"
        ? (e += `
#define MEDIUM_PRECISION`)
        : i.precision === "lowp" &&
          (e += `
#define LOW_PRECISION`),
    e
  );
}
const Ip = { [dr]: "SHADOWMAP_TYPE_PCF", [Ci]: "SHADOWMAP_TYPE_VSM" };
function Up(i) {
  return Ip[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const Np = {
  [Bn]: "ENVMAP_TYPE_CUBE",
  [ui]: "ENVMAP_TYPE_CUBE",
  [Mr]: "ENVMAP_TYPE_CUBE_UV",
};
function Fp(i) {
  return i.envMap === !1
    ? "ENVMAP_TYPE_CUBE"
    : Np[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const Op = { [ui]: "ENVMAP_MODE_REFRACTION" };
function Bp(i) {
  return i.envMap === !1
    ? "ENVMAP_MODE_REFLECTION"
    : Op[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const zp = {
  [Ys]: "ENVMAP_BLENDING_MULTIPLY",
  [kl]: "ENVMAP_BLENDING_MIX",
  [vl]: "ENVMAP_BLENDING_ADD",
};
function Vp(i) {
  return i.envMap === !1
    ? "ENVMAP_BLENDING_NONE"
    : zp[i.combine] || "ENVMAP_BLENDING_NONE";
}
function Gp(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
    texelHeight: n,
    maxMip: t,
  };
}
function Hp(i, e, t, n) {
  const r = i.getContext(),
    o = t.defines;
  let a = t.vertexShader,
    s = t.fragmentShader;
  const c = Up(t),
    l = Fp(t),
    f = Bp(t),
    u = Vp(t),
    h = Gp(t),
    p = Ep(t),
    b = Tp(o),
    k = r.createProgram();
  let m,
    d,
    y = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  (t.isRawShaderMaterial
    ? ((m = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        b,
      ].filter(Li).join(`
`)),
      m.length > 0 &&
        (m += `
`),
      (d = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        b,
      ].filter(Li).join(`
`)),
      d.length > 0 &&
        (d += `
`))
    : ((m = [
        Us(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        b,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + f : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Li).join(`
`)),
      (d = [
        Us(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        b,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + l : "",
        t.envMap ? "#define " + f : "",
        t.envMap ? "#define " + u : "",
        h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
        h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
        h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor || t.batchingColor
          ? "#define USE_COLOR"
          : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== en ? "#define TONE_MAPPING" : "",
        t.toneMapping !== en ? Pe.tonemapping_pars_fragment : "",
        t.toneMapping !== en ? Sp("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Pe.colorspace_pars_fragment,
        wp("linearToOutputTexel", t.outputColorSpace),
        yp(),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Li).join(`
`))),
    (a = ca(a)),
    (a = Ls(a, t)),
    (a = Ds(a, t)),
    (s = ca(s)),
    (s = Ls(s, t)),
    (s = Ds(s, t)),
    (a = Is(a)),
    (s = Is(s)),
    t.isRawShaderMaterial !== !0 &&
      ((y = `#version 300 es
`),
      (m =
        [
          p,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        m),
      (d =
        [
          "#define varying in",
          t.glslVersion === Ga
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Ga ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        d)));
  const S = y + m + a,
    M = y + d + s,
    E = Rs(r, r.VERTEX_SHADER, S),
    T = Rs(r, r.FRAGMENT_SHADER, M);
  (r.attachShader(k, E),
    r.attachShader(k, T),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(k, 0, t.index0AttributeName)
      : t.morphTargets === !0 && r.bindAttribLocation(k, 0, "position"),
    r.linkProgram(k));
  function R(P) {
    if (i.debug.checkShaderErrors) {
      const z = r.getProgramInfoLog(k) || "",
        B = r.getShaderInfoLog(E) || "",
        W = r.getShaderInfoLog(T) || "",
        Y = z.trim(),
        V = B.trim(),
        H = W.trim();
      let $ = !0,
        fe = !0;
      if (r.getProgramParameter(k, r.LINK_STATUS) === !1)
        if ((($ = !1), typeof i.debug.onShaderError == "function"))
          i.debug.onShaderError(r, k, E, T);
        else {
          const ae = Ps(r, E, "vertex"),
            ue = Ps(r, T, "fragment");
          He(
            "THREE.WebGLProgram: Shader Error " +
              r.getError() +
              " - VALIDATE_STATUS " +
              r.getProgramParameter(k, r.VALIDATE_STATUS) +
              `

Material Name: ` +
              P.name +
              `
Material Type: ` +
              P.type +
              `

Program Info Log: ` +
              Y +
              `
` +
              ae +
              `
` +
              ue,
          );
        }
      else
        Y !== ""
          ? Te("WebGLProgram: Program Info Log:", Y)
          : (V === "" || H === "") && (fe = !1);
      fe &&
        (P.diagnostics = {
          runnable: $,
          programLog: Y,
          vertexShader: { log: V, prefix: m },
          fragmentShader: { log: H, prefix: d },
        });
    }
    (r.deleteShader(E), r.deleteShader(T), (N = new br(r, k)), (x = Ap(r, k)));
  }
  let N;
  this.getUniforms = function () {
    return (N === void 0 && R(this), N);
  };
  let x;
  this.getAttributes = function () {
    return (x === void 0 && R(this), x);
  };
  let v = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return (v === !1 && (v = r.getProgramParameter(k, gp)), v);
    }),
    (this.destroy = function () {
      (n.releaseStatesOfProgram(this),
        r.deleteProgram(k),
        (this.program = void 0));
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = xp++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = k),
    (this.vertexShader = E),
    (this.fragmentShader = T),
    this
  );
}
let Wp = 0;
class Xp {
  constructor() {
    ((this.shaderCache = new Map()), (this.materialCache = new Map()));
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      r = this._getShaderStage(t),
      o = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      a.has(o) === !1 && (a.add(o), o.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      (n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code));
    return (this.materialCache.delete(e), this);
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    (this.shaderCache.clear(), this.materialCache.clear());
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return (n === void 0 && ((n = new Set()), t.set(e, n)), n);
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return (n === void 0 && ((n = new qp(e)), t.set(e, n)), n);
  }
}
class qp {
  constructor(e) {
    ((this.id = Wp++), (this.code = e), (this.usedTimes = 0));
  }
}
function Yp(i, e, t, n, r, o, a) {
  const s = new dc(),
    c = new Xp(),
    l = new Set(),
    f = [],
    u = new Map(),
    h = r.logarithmicDepthBuffer;
  let p = r.precision;
  const b = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distance",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function k(x) {
    return (l.add(x), x === 0 ? "uv" : `uv${x}`);
  }
  function m(x, v, P, z, B) {
    const W = z.fog,
      Y = B.geometry,
      V = x.isMeshStandardMaterial ? z.environment : null,
      H = (x.isMeshStandardMaterial ? t : e).get(x.envMap || V),
      $ = H && H.mapping === Mr ? H.image.height : null,
      fe = b[x.type];
    x.precision !== null &&
      ((p = r.getMaxPrecision(x.precision)),
      p !== x.precision &&
        Te(
          "WebGLProgram.getParameters:",
          x.precision,
          "not supported, using",
          p,
          "instead.",
        ));
    const ae =
        Y.morphAttributes.position ||
        Y.morphAttributes.normal ||
        Y.morphAttributes.color,
      ue = ae !== void 0 ? ae.length : 0;
    let Ue = 0;
    (Y.morphAttributes.position !== void 0 && (Ue = 1),
      Y.morphAttributes.normal !== void 0 && (Ue = 2),
      Y.morphAttributes.color !== void 0 && (Ue = 3));
    let Le, rt, it, q;
    if (fe) {
      const Ye = Zt[fe];
      ((Le = Ye.vertexShader), (rt = Ye.fragmentShader));
    } else
      ((Le = x.vertexShader),
        (rt = x.fragmentShader),
        c.update(x),
        (it = c.getVertexShaderID(x)),
        (q = c.getFragmentShaderID(x)));
    const Z = i.getRenderTarget(),
      pe = i.state.buffers.depth.getReversed(),
      Re = B.isInstancedMesh === !0,
      be = B.isBatchedMesh === !0,
      Ve = !!x.map,
      pt = !!x.matcap,
      Be = !!H,
      qe = !!x.aoMap,
      Ze = !!x.lightMap,
      De = !!x.bumpMap,
      lt = !!x.normalMap,
      A = !!x.displacementMap,
      ft = !!x.emissiveMap,
      Xe = !!x.metalnessMap,
      et = !!x.roughnessMap,
      xe = x.anisotropy > 0,
      w = x.clearcoat > 0,
      _ = x.dispersion > 0,
      L = x.iridescence > 0,
      X = x.sheen > 0,
      K = x.transmission > 0,
      G = xe && !!x.anisotropyMap,
      ve = w && !!x.clearcoatMap,
      ne = w && !!x.clearcoatNormalMap,
      ge = w && !!x.clearcoatRoughnessMap,
      Ee = L && !!x.iridescenceMap,
      Q = L && !!x.iridescenceThicknessMap,
      re = X && !!x.sheenColorMap,
      _e = X && !!x.sheenRoughnessMap,
      ke = !!x.specularMap,
      ie = !!x.specularColorMap,
      Ie = !!x.specularIntensityMap,
      C = K && !!x.transmissionMap,
      le = K && !!x.thicknessMap,
      ee = !!x.gradientMap,
      de = !!x.alphaMap,
      J = x.alphaTest > 0,
      j = !!x.alphaHash,
      te = !!x.extensions;
    let Ae = en;
    x.toneMapped &&
      (Z === null || Z.isXRRenderTarget === !0) &&
      (Ae = i.toneMapping);
    const tt = {
      shaderID: fe,
      shaderType: x.type,
      shaderName: x.name,
      vertexShader: Le,
      fragmentShader: rt,
      defines: x.defines,
      customVertexShaderID: it,
      customFragmentShaderID: q,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: p,
      batching: be,
      batchingColor: be && B._colorsTexture !== null,
      instancing: Re,
      instancingColor: Re && B.instanceColor !== null,
      instancingMorph: Re && B.morphTexture !== null,
      outputColorSpace:
        Z === null
          ? i.outputColorSpace
          : Z.isXRRenderTarget === !0
            ? Z.texture.colorSpace
            : hi,
      alphaToCoverage: !!x.alphaToCoverage,
      map: Ve,
      matcap: pt,
      envMap: Be,
      envMapMode: Be && H.mapping,
      envMapCubeUVHeight: $,
      aoMap: qe,
      lightMap: Ze,
      bumpMap: De,
      normalMap: lt,
      displacementMap: A,
      emissiveMap: ft,
      normalMapObjectSpace: lt && x.normalMapType === Sl,
      normalMapTangentSpace: lt && x.normalMapType === cc,
      metalnessMap: Xe,
      roughnessMap: et,
      anisotropy: xe,
      anisotropyMap: G,
      clearcoat: w,
      clearcoatMap: ve,
      clearcoatNormalMap: ne,
      clearcoatRoughnessMap: ge,
      dispersion: _,
      iridescence: L,
      iridescenceMap: Ee,
      iridescenceThicknessMap: Q,
      sheen: X,
      sheenColorMap: re,
      sheenRoughnessMap: _e,
      specularMap: ke,
      specularColorMap: ie,
      specularIntensityMap: Ie,
      transmission: K,
      transmissionMap: C,
      thicknessMap: le,
      gradientMap: ee,
      opaque:
        x.transparent === !1 && x.blending === ci && x.alphaToCoverage === !1,
      alphaMap: de,
      alphaTest: J,
      alphaHash: j,
      combine: x.combine,
      mapUv: Ve && k(x.map.channel),
      aoMapUv: qe && k(x.aoMap.channel),
      lightMapUv: Ze && k(x.lightMap.channel),
      bumpMapUv: De && k(x.bumpMap.channel),
      normalMapUv: lt && k(x.normalMap.channel),
      displacementMapUv: A && k(x.displacementMap.channel),
      emissiveMapUv: ft && k(x.emissiveMap.channel),
      metalnessMapUv: Xe && k(x.metalnessMap.channel),
      roughnessMapUv: et && k(x.roughnessMap.channel),
      anisotropyMapUv: G && k(x.anisotropyMap.channel),
      clearcoatMapUv: ve && k(x.clearcoatMap.channel),
      clearcoatNormalMapUv: ne && k(x.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ge && k(x.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Ee && k(x.iridescenceMap.channel),
      iridescenceThicknessMapUv: Q && k(x.iridescenceThicknessMap.channel),
      sheenColorMapUv: re && k(x.sheenColorMap.channel),
      sheenRoughnessMapUv: _e && k(x.sheenRoughnessMap.channel),
      specularMapUv: ke && k(x.specularMap.channel),
      specularColorMapUv: ie && k(x.specularColorMap.channel),
      specularIntensityMapUv: Ie && k(x.specularIntensityMap.channel),
      transmissionMapUv: C && k(x.transmissionMap.channel),
      thicknessMapUv: le && k(x.thicknessMap.channel),
      alphaMapUv: de && k(x.alphaMap.channel),
      vertexTangents: !!Y.attributes.tangent && (lt || xe),
      vertexColors: x.vertexColors,
      vertexAlphas:
        x.vertexColors === !0 &&
        !!Y.attributes.color &&
        Y.attributes.color.itemSize === 4,
      pointsUvs: B.isPoints === !0 && !!Y.attributes.uv && (Ve || de),
      fog: !!W,
      useFog: x.fog === !0,
      fogExp2: !!W && W.isFogExp2,
      flatShading: x.flatShading === !0 && x.wireframe === !1,
      sizeAttenuation: x.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      reversedDepthBuffer: pe,
      skinning: B.isSkinnedMesh === !0,
      morphTargets: Y.morphAttributes.position !== void 0,
      morphNormals: Y.morphAttributes.normal !== void 0,
      morphColors: Y.morphAttributes.color !== void 0,
      morphTargetsCount: ue,
      morphTextureStride: Ue,
      numDirLights: v.directional.length,
      numPointLights: v.point.length,
      numSpotLights: v.spot.length,
      numSpotLightMaps: v.spotLightMap.length,
      numRectAreaLights: v.rectArea.length,
      numHemiLights: v.hemi.length,
      numDirLightShadows: v.directionalShadowMap.length,
      numPointLightShadows: v.pointShadowMap.length,
      numSpotLightShadows: v.spotShadowMap.length,
      numSpotLightShadowsWithMaps: v.numSpotLightShadowsWithMaps,
      numLightProbes: v.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: i.shadowMap.enabled && P.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Ae,
      decodeVideoTexture:
        Ve &&
        x.map.isVideoTexture === !0 &&
        ze.getTransfer(x.map.colorSpace) === Ke,
      decodeVideoTextureEmissive:
        ft &&
        x.emissiveMap.isVideoTexture === !0 &&
        ze.getTransfer(x.emissiveMap.colorSpace) === Ke,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === un,
      flipSided: x.side === Rt,
      useDepthPacking: x.depthPacking >= 0,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionClipCullDistance:
        te &&
        x.extensions.clipCullDistance === !0 &&
        n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((te && x.extensions.multiDraw === !0) || be) &&
        n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has(
        "KHR_parallel_shader_compile",
      ),
      customProgramCacheKey: x.customProgramCacheKey(),
    };
    return (
      (tt.vertexUv1s = l.has(1)),
      (tt.vertexUv2s = l.has(2)),
      (tt.vertexUv3s = l.has(3)),
      l.clear(),
      tt
    );
  }
  function d(x) {
    const v = [];
    if (
      (x.shaderID
        ? v.push(x.shaderID)
        : (v.push(x.customVertexShaderID), v.push(x.customFragmentShaderID)),
      x.defines !== void 0)
    )
      for (const P in x.defines) (v.push(P), v.push(x.defines[P]));
    return (
      x.isRawShaderMaterial === !1 &&
        (y(v, x), S(v, x), v.push(i.outputColorSpace)),
      v.push(x.customProgramCacheKey),
      v.join()
    );
  }
  function y(x, v) {
    (x.push(v.precision),
      x.push(v.outputColorSpace),
      x.push(v.envMapMode),
      x.push(v.envMapCubeUVHeight),
      x.push(v.mapUv),
      x.push(v.alphaMapUv),
      x.push(v.lightMapUv),
      x.push(v.aoMapUv),
      x.push(v.bumpMapUv),
      x.push(v.normalMapUv),
      x.push(v.displacementMapUv),
      x.push(v.emissiveMapUv),
      x.push(v.metalnessMapUv),
      x.push(v.roughnessMapUv),
      x.push(v.anisotropyMapUv),
      x.push(v.clearcoatMapUv),
      x.push(v.clearcoatNormalMapUv),
      x.push(v.clearcoatRoughnessMapUv),
      x.push(v.iridescenceMapUv),
      x.push(v.iridescenceThicknessMapUv),
      x.push(v.sheenColorMapUv),
      x.push(v.sheenRoughnessMapUv),
      x.push(v.specularMapUv),
      x.push(v.specularColorMapUv),
      x.push(v.specularIntensityMapUv),
      x.push(v.transmissionMapUv),
      x.push(v.thicknessMapUv),
      x.push(v.combine),
      x.push(v.fogExp2),
      x.push(v.sizeAttenuation),
      x.push(v.morphTargetsCount),
      x.push(v.morphAttributeCount),
      x.push(v.numDirLights),
      x.push(v.numPointLights),
      x.push(v.numSpotLights),
      x.push(v.numSpotLightMaps),
      x.push(v.numHemiLights),
      x.push(v.numRectAreaLights),
      x.push(v.numDirLightShadows),
      x.push(v.numPointLightShadows),
      x.push(v.numSpotLightShadows),
      x.push(v.numSpotLightShadowsWithMaps),
      x.push(v.numLightProbes),
      x.push(v.shadowMapType),
      x.push(v.toneMapping),
      x.push(v.numClippingPlanes),
      x.push(v.numClipIntersection),
      x.push(v.depthPacking));
  }
  function S(x, v) {
    (s.disableAll(),
      v.instancing && s.enable(0),
      v.instancingColor && s.enable(1),
      v.instancingMorph && s.enable(2),
      v.matcap && s.enable(3),
      v.envMap && s.enable(4),
      v.normalMapObjectSpace && s.enable(5),
      v.normalMapTangentSpace && s.enable(6),
      v.clearcoat && s.enable(7),
      v.iridescence && s.enable(8),
      v.alphaTest && s.enable(9),
      v.vertexColors && s.enable(10),
      v.vertexAlphas && s.enable(11),
      v.vertexUv1s && s.enable(12),
      v.vertexUv2s && s.enable(13),
      v.vertexUv3s && s.enable(14),
      v.vertexTangents && s.enable(15),
      v.anisotropy && s.enable(16),
      v.alphaHash && s.enable(17),
      v.batching && s.enable(18),
      v.dispersion && s.enable(19),
      v.batchingColor && s.enable(20),
      v.gradientMap && s.enable(21),
      x.push(s.mask),
      s.disableAll(),
      v.fog && s.enable(0),
      v.useFog && s.enable(1),
      v.flatShading && s.enable(2),
      v.logarithmicDepthBuffer && s.enable(3),
      v.reversedDepthBuffer && s.enable(4),
      v.skinning && s.enable(5),
      v.morphTargets && s.enable(6),
      v.morphNormals && s.enable(7),
      v.morphColors && s.enable(8),
      v.premultipliedAlpha && s.enable(9),
      v.shadowMapEnabled && s.enable(10),
      v.doubleSided && s.enable(11),
      v.flipSided && s.enable(12),
      v.useDepthPacking && s.enable(13),
      v.dithering && s.enable(14),
      v.transmission && s.enable(15),
      v.sheen && s.enable(16),
      v.opaque && s.enable(17),
      v.pointsUvs && s.enable(18),
      v.decodeVideoTexture && s.enable(19),
      v.decodeVideoTextureEmissive && s.enable(20),
      v.alphaToCoverage && s.enable(21),
      x.push(s.mask));
  }
  function M(x) {
    const v = b[x.type];
    let P;
    if (v) {
      const z = Zt[v];
      P = Jl.clone(z.uniforms);
    } else P = x.uniforms;
    return P;
  }
  function E(x, v) {
    let P = u.get(v);
    return (
      P !== void 0
        ? ++P.usedTimes
        : ((P = new Hp(i, v, x, o)), f.push(P), u.set(v, P)),
      P
    );
  }
  function T(x) {
    if (--x.usedTimes === 0) {
      const v = f.indexOf(x);
      ((f[v] = f[f.length - 1]), f.pop(), u.delete(x.cacheKey), x.destroy());
    }
  }
  function R(x) {
    c.remove(x);
  }
  function N() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: d,
    getUniforms: M,
    acquireProgram: E,
    releaseProgram: T,
    releaseShaderCache: R,
    programs: f,
    dispose: N,
  };
}
function jp() {
  let i = new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let s = i.get(a);
    return (s === void 0 && ((s = {}), i.set(a, s)), s);
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, s, c) {
    i.get(a)[s] = c;
  }
  function o() {
    i = new WeakMap();
  }
  return { has: e, get: t, remove: n, update: r, dispose: o };
}
function Kp(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
      ? i.renderOrder - e.renderOrder
      : i.material.id !== e.material.id
        ? i.material.id - e.material.id
        : i.z !== e.z
          ? i.z - e.z
          : i.id - e.id;
}
function Ns(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
      ? i.renderOrder - e.renderOrder
      : i.z !== e.z
        ? e.z - i.z
        : i.id - e.id;
}
function Fs() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    r = [];
  function o() {
    ((e = 0), (t.length = 0), (n.length = 0), (r.length = 0));
  }
  function a(u, h, p, b, k, m) {
    let d = i[e];
    return (
      d === void 0
        ? ((d = {
            id: u.id,
            object: u,
            geometry: h,
            material: p,
            groupOrder: b,
            renderOrder: u.renderOrder,
            z: k,
            group: m,
          }),
          (i[e] = d))
        : ((d.id = u.id),
          (d.object = u),
          (d.geometry = h),
          (d.material = p),
          (d.groupOrder = b),
          (d.renderOrder = u.renderOrder),
          (d.z = k),
          (d.group = m)),
      e++,
      d
    );
  }
  function s(u, h, p, b, k, m) {
    const d = a(u, h, p, b, k, m);
    p.transmission > 0
      ? n.push(d)
      : p.transparent === !0
        ? r.push(d)
        : t.push(d);
  }
  function c(u, h, p, b, k, m) {
    const d = a(u, h, p, b, k, m);
    p.transmission > 0
      ? n.unshift(d)
      : p.transparent === !0
        ? r.unshift(d)
        : t.unshift(d);
  }
  function l(u, h) {
    (t.length > 1 && t.sort(u || Kp),
      n.length > 1 && n.sort(h || Ns),
      r.length > 1 && r.sort(h || Ns));
  }
  function f() {
    for (let u = e, h = i.length; u < h; u++) {
      const p = i[u];
      if (p.id === null) break;
      ((p.id = null),
        (p.object = null),
        (p.geometry = null),
        (p.material = null),
        (p.group = null));
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: o,
    push: s,
    unshift: c,
    finish: f,
    sort: l,
  };
}
function $p() {
  let i = new WeakMap();
  function e(n, r) {
    const o = i.get(n);
    let a;
    return (
      o === void 0
        ? ((a = new Fs()), i.set(n, [a]))
        : r >= o.length
          ? ((a = new Fs()), o.push(a))
          : (a = o[r]),
      a
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Zp() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new U(), color: new Fe() };
          break;
        case "SpotLight":
          t = {
            position: new U(),
            direction: new U(),
            color: new Fe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new U(), color: new Fe(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new U(), skyColor: new Fe(), groundColor: new Fe() };
          break;
        case "RectAreaLight":
          t = {
            color: new Fe(),
            position: new U(),
            halfWidth: new U(),
            halfHeight: new U(),
          };
          break;
      }
      return ((i[e.id] = t), t);
    },
  };
}
function Jp() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new We(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new We(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new We(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return ((i[e.id] = t), t);
    },
  };
}
let Qp = 0;
function em(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function tm(i) {
  const e = new Zp(),
    t = Jp(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let l = 0; l < 9; l++) n.probe.push(new U());
  const r = new U(),
    o = new Qe(),
    a = new Qe();
  function s(l) {
    let f = 0,
      u = 0,
      h = 0;
    for (let x = 0; x < 9; x++) n.probe[x].set(0, 0, 0);
    let p = 0,
      b = 0,
      k = 0,
      m = 0,
      d = 0,
      y = 0,
      S = 0,
      M = 0,
      E = 0,
      T = 0,
      R = 0;
    l.sort(em);
    for (let x = 0, v = l.length; x < v; x++) {
      const P = l[x],
        z = P.color,
        B = P.intensity,
        W = P.distance;
      let Y = null;
      if (
        (P.shadow &&
          P.shadow.map &&
          (P.shadow.map.texture.format === di
            ? (Y = P.shadow.map.texture)
            : (Y = P.shadow.map.depthTexture || P.shadow.map.texture)),
        P.isAmbientLight)
      )
        ((f += z.r * B), (u += z.g * B), (h += z.b * B));
      else if (P.isLightProbe) {
        for (let V = 0; V < 9; V++)
          n.probe[V].addScaledVector(P.sh.coefficients[V], B);
        R++;
      } else if (P.isDirectionalLight) {
        const V = e.get(P);
        if ((V.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow)) {
          const H = P.shadow,
            $ = t.get(P);
          (($.shadowIntensity = H.intensity),
            ($.shadowBias = H.bias),
            ($.shadowNormalBias = H.normalBias),
            ($.shadowRadius = H.radius),
            ($.shadowMapSize = H.mapSize),
            (n.directionalShadow[p] = $),
            (n.directionalShadowMap[p] = Y),
            (n.directionalShadowMatrix[p] = P.shadow.matrix),
            y++);
        }
        ((n.directional[p] = V), p++);
      } else if (P.isSpotLight) {
        const V = e.get(P);
        (V.position.setFromMatrixPosition(P.matrixWorld),
          V.color.copy(z).multiplyScalar(B),
          (V.distance = W),
          (V.coneCos = Math.cos(P.angle)),
          (V.penumbraCos = Math.cos(P.angle * (1 - P.penumbra))),
          (V.decay = P.decay),
          (n.spot[k] = V));
        const H = P.shadow;
        if (
          (P.map &&
            ((n.spotLightMap[E] = P.map),
            E++,
            H.updateMatrices(P),
            P.castShadow && T++),
          (n.spotLightMatrix[k] = H.matrix),
          P.castShadow)
        ) {
          const $ = t.get(P);
          (($.shadowIntensity = H.intensity),
            ($.shadowBias = H.bias),
            ($.shadowNormalBias = H.normalBias),
            ($.shadowRadius = H.radius),
            ($.shadowMapSize = H.mapSize),
            (n.spotShadow[k] = $),
            (n.spotShadowMap[k] = Y),
            M++);
        }
        k++;
      } else if (P.isRectAreaLight) {
        const V = e.get(P);
        (V.color.copy(z).multiplyScalar(B),
          V.halfWidth.set(P.width * 0.5, 0, 0),
          V.halfHeight.set(0, P.height * 0.5, 0),
          (n.rectArea[m] = V),
          m++);
      } else if (P.isPointLight) {
        const V = e.get(P);
        if (
          (V.color.copy(P.color).multiplyScalar(P.intensity),
          (V.distance = P.distance),
          (V.decay = P.decay),
          P.castShadow)
        ) {
          const H = P.shadow,
            $ = t.get(P);
          (($.shadowIntensity = H.intensity),
            ($.shadowBias = H.bias),
            ($.shadowNormalBias = H.normalBias),
            ($.shadowRadius = H.radius),
            ($.shadowMapSize = H.mapSize),
            ($.shadowCameraNear = H.camera.near),
            ($.shadowCameraFar = H.camera.far),
            (n.pointShadow[b] = $),
            (n.pointShadowMap[b] = Y),
            (n.pointShadowMatrix[b] = P.shadow.matrix),
            S++);
        }
        ((n.point[b] = V), b++);
      } else if (P.isHemisphereLight) {
        const V = e.get(P);
        (V.skyColor.copy(P.color).multiplyScalar(B),
          V.groundColor.copy(P.groundColor).multiplyScalar(B),
          (n.hemi[d] = V),
          d++);
      }
    }
    (m > 0 &&
      (i.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = se.LTC_FLOAT_1), (n.rectAreaLTC2 = se.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = se.LTC_HALF_1), (n.rectAreaLTC2 = se.LTC_HALF_2))),
      (n.ambient[0] = f),
      (n.ambient[1] = u),
      (n.ambient[2] = h));
    const N = n.hash;
    (N.directionalLength !== p ||
      N.pointLength !== b ||
      N.spotLength !== k ||
      N.rectAreaLength !== m ||
      N.hemiLength !== d ||
      N.numDirectionalShadows !== y ||
      N.numPointShadows !== S ||
      N.numSpotShadows !== M ||
      N.numSpotMaps !== E ||
      N.numLightProbes !== R) &&
      ((n.directional.length = p),
      (n.spot.length = k),
      (n.rectArea.length = m),
      (n.point.length = b),
      (n.hemi.length = d),
      (n.directionalShadow.length = y),
      (n.directionalShadowMap.length = y),
      (n.pointShadow.length = S),
      (n.pointShadowMap.length = S),
      (n.spotShadow.length = M),
      (n.spotShadowMap.length = M),
      (n.directionalShadowMatrix.length = y),
      (n.pointShadowMatrix.length = S),
      (n.spotLightMatrix.length = M + E - T),
      (n.spotLightMap.length = E),
      (n.numSpotLightShadowsWithMaps = T),
      (n.numLightProbes = R),
      (N.directionalLength = p),
      (N.pointLength = b),
      (N.spotLength = k),
      (N.rectAreaLength = m),
      (N.hemiLength = d),
      (N.numDirectionalShadows = y),
      (N.numPointShadows = S),
      (N.numSpotShadows = M),
      (N.numSpotMaps = E),
      (N.numLightProbes = R),
      (n.version = Qp++));
  }
  function c(l, f) {
    let u = 0,
      h = 0,
      p = 0,
      b = 0,
      k = 0;
    const m = f.matrixWorldInverse;
    for (let d = 0, y = l.length; d < y; d++) {
      const S = l[d];
      if (S.isDirectionalLight) {
        const M = n.directional[u];
        (M.direction.setFromMatrixPosition(S.matrixWorld),
          r.setFromMatrixPosition(S.target.matrixWorld),
          M.direction.sub(r),
          M.direction.transformDirection(m),
          u++);
      } else if (S.isSpotLight) {
        const M = n.spot[p];
        (M.position.setFromMatrixPosition(S.matrixWorld),
          M.position.applyMatrix4(m),
          M.direction.setFromMatrixPosition(S.matrixWorld),
          r.setFromMatrixPosition(S.target.matrixWorld),
          M.direction.sub(r),
          M.direction.transformDirection(m),
          p++);
      } else if (S.isRectAreaLight) {
        const M = n.rectArea[b];
        (M.position.setFromMatrixPosition(S.matrixWorld),
          M.position.applyMatrix4(m),
          a.identity(),
          o.copy(S.matrixWorld),
          o.premultiply(m),
          a.extractRotation(o),
          M.halfWidth.set(S.width * 0.5, 0, 0),
          M.halfHeight.set(0, S.height * 0.5, 0),
          M.halfWidth.applyMatrix4(a),
          M.halfHeight.applyMatrix4(a),
          b++);
      } else if (S.isPointLight) {
        const M = n.point[h];
        (M.position.setFromMatrixPosition(S.matrixWorld),
          M.position.applyMatrix4(m),
          h++);
      } else if (S.isHemisphereLight) {
        const M = n.hemi[k];
        (M.direction.setFromMatrixPosition(S.matrixWorld),
          M.direction.transformDirection(m),
          k++);
      }
    }
  }
  return { setup: s, setupView: c, state: n };
}
function Os(i) {
  const e = new tm(i),
    t = [],
    n = [];
  function r(f) {
    ((l.camera = f), (t.length = 0), (n.length = 0));
  }
  function o(f) {
    t.push(f);
  }
  function a(f) {
    n.push(f);
  }
  function s() {
    e.setup(t);
  }
  function c(f) {
    e.setupView(t, f);
  }
  const l = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: r,
    state: l,
    setupLights: s,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a,
  };
}
function nm(i) {
  let e = new WeakMap();
  function t(r, o = 0) {
    const a = e.get(r);
    let s;
    return (
      a === void 0
        ? ((s = new Os(i)), e.set(r, [s]))
        : o >= a.length
          ? ((s = new Os(i)), a.push(s))
          : (s = a[o]),
      s
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
const im = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  rm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,
  om = [
    new U(1, 0, 0),
    new U(-1, 0, 0),
    new U(0, 1, 0),
    new U(0, -1, 0),
    new U(0, 0, 1),
    new U(0, 0, -1),
  ],
  am = [
    new U(0, -1, 0),
    new U(0, -1, 0),
    new U(0, 0, 1),
    new U(0, 0, -1),
    new U(0, -1, 0),
    new U(0, -1, 0),
  ],
  Bs = new Qe(),
  Ri = new U(),
  fo = new U();
function sm(i, e, t) {
  let n = new Ma();
  const r = new We(),
    o = new We(),
    a = new st(),
    s = new hf(),
    c = new pf(),
    l = {},
    f = t.maxTextureSize,
    u = { [Sn]: Rt, [Rt]: Sn, [un]: un },
    h = new rn({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new We() },
        radius: { value: 4 },
      },
      vertexShader: im,
      fragmentShader: rm,
    }),
    p = h.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const b = new Bt();
  b.setAttribute(
    "position",
    new Yt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const k = new Ut(b, h),
    m = this;
  ((this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = dr));
  let d = this.type;
  this.render = function (T, R, N) {
    if (
      m.enabled === !1 ||
      (m.autoUpdate === !1 && m.needsUpdate === !1) ||
      T.length === 0
    )
      return;
    T.type === tl &&
      (Te(
        "WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.",
      ),
      (T.type = dr));
    const x = i.getRenderTarget(),
      v = i.getActiveCubeFace(),
      P = i.getActiveMipmapLevel(),
      z = i.state;
    (z.setBlending(dn),
      z.buffers.depth.getReversed() === !0
        ? z.buffers.color.setClear(0, 0, 0, 0)
        : z.buffers.color.setClear(1, 1, 1, 1),
      z.buffers.depth.setTest(!0),
      z.setScissorTest(!1));
    const B = d !== this.type;
    B &&
      R.traverse(function (W) {
        W.material &&
          (Array.isArray(W.material)
            ? W.material.forEach((Y) => (Y.needsUpdate = !0))
            : (W.material.needsUpdate = !0));
      });
    for (let W = 0, Y = T.length; W < Y; W++) {
      const V = T[W],
        H = V.shadow;
      if (H === void 0) {
        Te("WebGLShadowMap:", V, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === !1 && H.needsUpdate === !1) continue;
      r.copy(H.mapSize);
      const $ = H.getFrameExtents();
      if (
        (r.multiply($),
        o.copy(H.mapSize),
        (r.x > f || r.y > f) &&
          (r.x > f &&
            ((o.x = Math.floor(f / $.x)),
            (r.x = o.x * $.x),
            (H.mapSize.x = o.x)),
          r.y > f &&
            ((o.y = Math.floor(f / $.y)),
            (r.y = o.y * $.y),
            (H.mapSize.y = o.y))),
        H.map === null || B === !0)
      ) {
        if (
          (H.map !== null &&
            (H.map.depthTexture !== null &&
              (H.map.depthTexture.dispose(), (H.map.depthTexture = null)),
            H.map.dispose()),
          this.type === Ci)
        ) {
          if (V.isPointLight) {
            Te(
              "WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.",
            );
            continue;
          }
          ((H.map = new tn(r.x, r.y, {
            format: di,
            type: pn,
            minFilter: kt,
            magFilter: kt,
            generateMipmaps: !1,
          })),
            (H.map.texture.name = V.name + ".shadowMap"),
            (H.map.depthTexture = new Fi(r.x, r.y, Xt)),
            (H.map.depthTexture.name = V.name + ".shadowMapDepth"),
            (H.map.depthTexture.format = mn),
            (H.map.depthTexture.compareFunction = null),
            (H.map.depthTexture.minFilter = ct),
            (H.map.depthTexture.magFilter = ct));
        } else {
          (V.isPointLight
            ? ((H.map = new xc(r.x)), (H.map.depthTexture = new uf(r.x, nn)))
            : ((H.map = new tn(r.x, r.y)),
              (H.map.depthTexture = new Fi(r.x, r.y, nn))),
            (H.map.depthTexture.name = V.name + ".shadowMap"),
            (H.map.depthTexture.format = mn));
          const ae = i.state.buffers.depth.getReversed();
          this.type === dr
            ? ((H.map.depthTexture.compareFunction = ae ? ka : xa),
              (H.map.depthTexture.minFilter = kt),
              (H.map.depthTexture.magFilter = kt))
            : ((H.map.depthTexture.compareFunction = null),
              (H.map.depthTexture.minFilter = ct),
              (H.map.depthTexture.magFilter = ct));
        }
        H.camera.updateProjectionMatrix();
      }
      const fe = H.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let ae = 0; ae < fe; ae++) {
        if (H.map.isWebGLCubeRenderTarget)
          (i.setRenderTarget(H.map, ae), i.clear());
        else {
          ae === 0 && (i.setRenderTarget(H.map), i.clear());
          const ue = H.getViewport(ae);
          (a.set(o.x * ue.x, o.y * ue.y, o.x * ue.z, o.y * ue.w),
            z.viewport(a));
        }
        if (V.isPointLight) {
          const ue = H.camera,
            Ue = H.matrix,
            Le = V.distance || ue.far;
          (Le !== ue.far && ((ue.far = Le), ue.updateProjectionMatrix()),
            Ri.setFromMatrixPosition(V.matrixWorld),
            ue.position.copy(Ri),
            fo.copy(ue.position),
            fo.add(om[ae]),
            ue.up.copy(am[ae]),
            ue.lookAt(fo),
            ue.updateMatrixWorld(),
            Ue.makeTranslation(-Ri.x, -Ri.y, -Ri.z),
            Bs.multiplyMatrices(ue.projectionMatrix, ue.matrixWorldInverse),
            H._frustum.setFromProjectionMatrix(
              Bs,
              ue.coordinateSystem,
              ue.reversedDepth,
            ));
        } else H.updateMatrices(V);
        ((n = H.getFrustum()), M(R, N, H.camera, V, this.type));
      }
      (H.isPointLightShadow !== !0 && this.type === Ci && y(H, N),
        (H.needsUpdate = !1));
    }
    ((d = this.type), (m.needsUpdate = !1), i.setRenderTarget(x, v, P));
  };
  function y(T, R) {
    const N = e.update(k);
    (h.defines.VSM_SAMPLES !== T.blurSamples &&
      ((h.defines.VSM_SAMPLES = T.blurSamples),
      (p.defines.VSM_SAMPLES = T.blurSamples),
      (h.needsUpdate = !0),
      (p.needsUpdate = !0)),
      T.mapPass === null &&
        (T.mapPass = new tn(r.x, r.y, { format: di, type: pn })),
      (h.uniforms.shadow_pass.value = T.map.depthTexture),
      (h.uniforms.resolution.value = T.mapSize),
      (h.uniforms.radius.value = T.radius),
      i.setRenderTarget(T.mapPass),
      i.clear(),
      i.renderBufferDirect(R, null, N, h, k, null),
      (p.uniforms.shadow_pass.value = T.mapPass.texture),
      (p.uniforms.resolution.value = T.mapSize),
      (p.uniforms.radius.value = T.radius),
      i.setRenderTarget(T.map),
      i.clear(),
      i.renderBufferDirect(R, null, N, p, k, null));
  }
  function S(T, R, N, x) {
    let v = null;
    const P =
      N.isPointLight === !0 ? T.customDistanceMaterial : T.customDepthMaterial;
    if (P !== void 0) v = P;
    else if (
      ((v = N.isPointLight === !0 ? c : s),
      (i.localClippingEnabled &&
        R.clipShadows === !0 &&
        Array.isArray(R.clippingPlanes) &&
        R.clippingPlanes.length !== 0) ||
        (R.displacementMap && R.displacementScale !== 0) ||
        (R.alphaMap && R.alphaTest > 0) ||
        (R.map && R.alphaTest > 0) ||
        R.alphaToCoverage === !0)
    ) {
      const z = v.uuid,
        B = R.uuid;
      let W = l[z];
      W === void 0 && ((W = {}), (l[z] = W));
      let Y = W[B];
      (Y === void 0 &&
        ((Y = v.clone()), (W[B] = Y), R.addEventListener("dispose", E)),
        (v = Y));
    }
    if (
      ((v.visible = R.visible),
      (v.wireframe = R.wireframe),
      x === Ci
        ? (v.side = R.shadowSide !== null ? R.shadowSide : R.side)
        : (v.side = R.shadowSide !== null ? R.shadowSide : u[R.side]),
      (v.alphaMap = R.alphaMap),
      (v.alphaTest = R.alphaToCoverage === !0 ? 0.5 : R.alphaTest),
      (v.map = R.map),
      (v.clipShadows = R.clipShadows),
      (v.clippingPlanes = R.clippingPlanes),
      (v.clipIntersection = R.clipIntersection),
      (v.displacementMap = R.displacementMap),
      (v.displacementScale = R.displacementScale),
      (v.displacementBias = R.displacementBias),
      (v.wireframeLinewidth = R.wireframeLinewidth),
      (v.linewidth = R.linewidth),
      N.isPointLight === !0 && v.isMeshDistanceMaterial === !0)
    ) {
      const z = i.properties.get(v);
      z.light = N;
    }
    return v;
  }
  function M(T, R, N, x, v) {
    if (T.visible === !1) return;
    if (
      T.layers.test(R.layers) &&
      (T.isMesh || T.isLine || T.isPoints) &&
      (T.castShadow || (T.receiveShadow && v === Ci)) &&
      (!T.frustumCulled || n.intersectsObject(T))
    ) {
      T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, T.matrixWorld);
      const B = e.update(T),
        W = T.material;
      if (Array.isArray(W)) {
        const Y = B.groups;
        for (let V = 0, H = Y.length; V < H; V++) {
          const $ = Y[V],
            fe = W[$.materialIndex];
          if (fe && fe.visible) {
            const ae = S(T, fe, x, v);
            (T.onBeforeShadow(i, T, R, N, B, ae, $),
              i.renderBufferDirect(N, null, B, ae, T, $),
              T.onAfterShadow(i, T, R, N, B, ae, $));
          }
        }
      } else if (W.visible) {
        const Y = S(T, W, x, v);
        (T.onBeforeShadow(i, T, R, N, B, Y, null),
          i.renderBufferDirect(N, null, B, Y, T, null),
          T.onAfterShadow(i, T, R, N, B, Y, null));
      }
    }
    const z = T.children;
    for (let B = 0, W = z.length; B < W; B++) M(z[B], R, N, x, v);
  }
  function E(T) {
    T.target.removeEventListener("dispose", E);
    for (const N in l) {
      const x = l[N],
        v = T.target.uuid;
      v in x && (x[v].dispose(), delete x[v]);
    }
  }
}
const cm = {
  [bo]: go,
  [xo]: wo,
  [ko]: Mo,
  [fi]: vo,
  [go]: bo,
  [wo]: xo,
  [Mo]: ko,
  [vo]: fi,
};
function lm(i, e) {
  function t() {
    let C = !1;
    const le = new st();
    let ee = null;
    const de = new st(0, 0, 0, 0);
    return {
      setMask: function (J) {
        ee !== J && !C && (i.colorMask(J, J, J, J), (ee = J));
      },
      setLocked: function (J) {
        C = J;
      },
      setClear: function (J, j, te, Ae, tt) {
        (tt === !0 && ((J *= Ae), (j *= Ae), (te *= Ae)),
          le.set(J, j, te, Ae),
          de.equals(le) === !1 && (i.clearColor(J, j, te, Ae), de.copy(le)));
      },
      reset: function () {
        ((C = !1), (ee = null), de.set(-1, 0, 0, 0));
      },
    };
  }
  function n() {
    let C = !1,
      le = !1,
      ee = null,
      de = null,
      J = null;
    return {
      setReversed: function (j) {
        if (le !== j) {
          const te = e.get("EXT_clip_control");
          (j
            ? te.clipControlEXT(te.LOWER_LEFT_EXT, te.ZERO_TO_ONE_EXT)
            : te.clipControlEXT(te.LOWER_LEFT_EXT, te.NEGATIVE_ONE_TO_ONE_EXT),
            (le = j));
          const Ae = J;
          ((J = null), this.setClear(Ae));
        }
      },
      getReversed: function () {
        return le;
      },
      setTest: function (j) {
        j ? Z(i.DEPTH_TEST) : pe(i.DEPTH_TEST);
      },
      setMask: function (j) {
        ee !== j && !C && (i.depthMask(j), (ee = j));
      },
      setFunc: function (j) {
        if ((le && (j = cm[j]), de !== j)) {
          switch (j) {
            case bo:
              i.depthFunc(i.NEVER);
              break;
            case go:
              i.depthFunc(i.ALWAYS);
              break;
            case xo:
              i.depthFunc(i.LESS);
              break;
            case fi:
              i.depthFunc(i.LEQUAL);
              break;
            case ko:
              i.depthFunc(i.EQUAL);
              break;
            case vo:
              i.depthFunc(i.GEQUAL);
              break;
            case wo:
              i.depthFunc(i.GREATER);
              break;
            case Mo:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          de = j;
        }
      },
      setLocked: function (j) {
        C = j;
      },
      setClear: function (j) {
        J !== j && (le && (j = 1 - j), i.clearDepth(j), (J = j));
      },
      reset: function () {
        ((C = !1), (ee = null), (de = null), (J = null), (le = !1));
      },
    };
  }
  function r() {
    let C = !1,
      le = null,
      ee = null,
      de = null,
      J = null,
      j = null,
      te = null,
      Ae = null,
      tt = null;
    return {
      setTest: function (Ye) {
        C || (Ye ? Z(i.STENCIL_TEST) : pe(i.STENCIL_TEST));
      },
      setMask: function (Ye) {
        le !== Ye && !C && (i.stencilMask(Ye), (le = Ye));
      },
      setFunc: function (Ye, Kt, on) {
        (ee !== Ye || de !== Kt || J !== on) &&
          (i.stencilFunc(Ye, Kt, on), (ee = Ye), (de = Kt), (J = on));
      },
      setOp: function (Ye, Kt, on) {
        (j !== Ye || te !== Kt || Ae !== on) &&
          (i.stencilOp(Ye, Kt, on), (j = Ye), (te = Kt), (Ae = on));
      },
      setLocked: function (Ye) {
        C = Ye;
      },
      setClear: function (Ye) {
        tt !== Ye && (i.clearStencil(Ye), (tt = Ye));
      },
      reset: function () {
        ((C = !1),
          (le = null),
          (ee = null),
          (de = null),
          (J = null),
          (j = null),
          (te = null),
          (Ae = null),
          (tt = null));
      },
    };
  }
  const o = new t(),
    a = new n(),
    s = new r(),
    c = new WeakMap(),
    l = new WeakMap();
  let f = {},
    u = {},
    h = new WeakMap(),
    p = [],
    b = null,
    k = !1,
    m = null,
    d = null,
    y = null,
    S = null,
    M = null,
    E = null,
    T = null,
    R = new Fe(0, 0, 0),
    N = 0,
    x = !1,
    v = null,
    P = null,
    z = null,
    B = null,
    W = null;
  const Y = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let V = !1,
    H = 0;
  const $ = i.getParameter(i.VERSION);
  $.indexOf("WebGL") !== -1
    ? ((H = parseFloat(/^WebGL (\d)/.exec($)[1])), (V = H >= 1))
    : $.indexOf("OpenGL ES") !== -1 &&
      ((H = parseFloat(/^OpenGL ES (\d)/.exec($)[1])), (V = H >= 2));
  let fe = null,
    ae = {};
  const ue = i.getParameter(i.SCISSOR_BOX),
    Ue = i.getParameter(i.VIEWPORT),
    Le = new st().fromArray(ue),
    rt = new st().fromArray(Ue);
  function it(C, le, ee, de) {
    const J = new Uint8Array(4),
      j = i.createTexture();
    (i.bindTexture(C, j),
      i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST));
    for (let te = 0; te < ee; te++)
      C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY
        ? i.texImage3D(le, 0, i.RGBA, 1, 1, de, 0, i.RGBA, i.UNSIGNED_BYTE, J)
        : i.texImage2D(le + te, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, J);
    return j;
  }
  const q = {};
  ((q[i.TEXTURE_2D] = it(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (q[i.TEXTURE_CUBE_MAP] = it(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (q[i.TEXTURE_2D_ARRAY] = it(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1)),
    (q[i.TEXTURE_3D] = it(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)),
    o.setClear(0, 0, 0, 1),
    a.setClear(1),
    s.setClear(0),
    Z(i.DEPTH_TEST),
    a.setFunc(fi),
    De(!1),
    lt(Na),
    Z(i.CULL_FACE),
    qe(dn));
  function Z(C) {
    f[C] !== !0 && (i.enable(C), (f[C] = !0));
  }
  function pe(C) {
    f[C] !== !1 && (i.disable(C), (f[C] = !1));
  }
  function Re(C, le) {
    return u[C] !== le
      ? (i.bindFramebuffer(C, le),
        (u[C] = le),
        C === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = le),
        C === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = le),
        !0)
      : !1;
  }
  function be(C, le) {
    let ee = p,
      de = !1;
    if (C) {
      ((ee = h.get(le)), ee === void 0 && ((ee = []), h.set(le, ee)));
      const J = C.textures;
      if (ee.length !== J.length || ee[0] !== i.COLOR_ATTACHMENT0) {
        for (let j = 0, te = J.length; j < te; j++)
          ee[j] = i.COLOR_ATTACHMENT0 + j;
        ((ee.length = J.length), (de = !0));
      }
    } else ee[0] !== i.BACK && ((ee[0] = i.BACK), (de = !0));
    de && i.drawBuffers(ee);
  }
  function Ve(C) {
    return b !== C ? (i.useProgram(C), (b = C), !0) : !1;
  }
  const pt = {
    [In]: i.FUNC_ADD,
    [il]: i.FUNC_SUBTRACT,
    [rl]: i.FUNC_REVERSE_SUBTRACT,
  };
  ((pt[ol] = i.MIN), (pt[al] = i.MAX));
  const Be = {
    [sl]: i.ZERO,
    [cl]: i.ONE,
    [ll]: i.SRC_COLOR,
    [mo]: i.SRC_ALPHA,
    [ml]: i.SRC_ALPHA_SATURATE,
    [hl]: i.DST_COLOR,
    [ul]: i.DST_ALPHA,
    [fl]: i.ONE_MINUS_SRC_COLOR,
    [_o]: i.ONE_MINUS_SRC_ALPHA,
    [pl]: i.ONE_MINUS_DST_COLOR,
    [dl]: i.ONE_MINUS_DST_ALPHA,
    [_l]: i.CONSTANT_COLOR,
    [bl]: i.ONE_MINUS_CONSTANT_COLOR,
    [gl]: i.CONSTANT_ALPHA,
    [xl]: i.ONE_MINUS_CONSTANT_ALPHA,
  };
  function qe(C, le, ee, de, J, j, te, Ae, tt, Ye) {
    if (C === dn) {
      k === !0 && (pe(i.BLEND), (k = !1));
      return;
    }
    if ((k === !1 && (Z(i.BLEND), (k = !0)), C !== nl)) {
      if (C !== m || Ye !== x) {
        if (
          ((d !== In || M !== In) &&
            (i.blendEquation(i.FUNC_ADD), (d = In), (M = In)),
          Ye)
        )
          switch (C) {
            case ci:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case Fa:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Oa:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Ba:
              i.blendFuncSeparate(
                i.DST_COLOR,
                i.ONE_MINUS_SRC_ALPHA,
                i.ZERO,
                i.ONE,
              );
              break;
            default:
              He("WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case ci:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case Fa:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case Oa:
              He(
                "WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true",
              );
              break;
            case Ba:
              He(
                "WebGLState: MultiplyBlending requires material.premultipliedAlpha = true",
              );
              break;
            default:
              He("WebGLState: Invalid blending: ", C);
              break;
          }
        ((y = null),
          (S = null),
          (E = null),
          (T = null),
          R.set(0, 0, 0),
          (N = 0),
          (m = C),
          (x = Ye));
      }
      return;
    }
    ((J = J || le),
      (j = j || ee),
      (te = te || de),
      (le !== d || J !== M) &&
        (i.blendEquationSeparate(pt[le], pt[J]), (d = le), (M = J)),
      (ee !== y || de !== S || j !== E || te !== T) &&
        (i.blendFuncSeparate(Be[ee], Be[de], Be[j], Be[te]),
        (y = ee),
        (S = de),
        (E = j),
        (T = te)),
      (Ae.equals(R) === !1 || tt !== N) &&
        (i.blendColor(Ae.r, Ae.g, Ae.b, tt), R.copy(Ae), (N = tt)),
      (m = C),
      (x = !1));
  }
  function Ze(C, le) {
    C.side === un ? pe(i.CULL_FACE) : Z(i.CULL_FACE);
    let ee = C.side === Rt;
    (le && (ee = !ee),
      De(ee),
      C.blending === ci && C.transparent === !1
        ? qe(dn)
        : qe(
            C.blending,
            C.blendEquation,
            C.blendSrc,
            C.blendDst,
            C.blendEquationAlpha,
            C.blendSrcAlpha,
            C.blendDstAlpha,
            C.blendColor,
            C.blendAlpha,
            C.premultipliedAlpha,
          ),
      a.setFunc(C.depthFunc),
      a.setTest(C.depthTest),
      a.setMask(C.depthWrite),
      o.setMask(C.colorWrite));
    const de = C.stencilWrite;
    (s.setTest(de),
      de &&
        (s.setMask(C.stencilWriteMask),
        s.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask),
        s.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)),
      ft(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits),
      C.alphaToCoverage === !0
        ? Z(i.SAMPLE_ALPHA_TO_COVERAGE)
        : pe(i.SAMPLE_ALPHA_TO_COVERAGE));
  }
  function De(C) {
    v !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW), (v = C));
  }
  function lt(C) {
    (C !== Qc
      ? (Z(i.CULL_FACE),
        C !== P &&
          (C === Na
            ? i.cullFace(i.BACK)
            : C === el
              ? i.cullFace(i.FRONT)
              : i.cullFace(i.FRONT_AND_BACK)))
      : pe(i.CULL_FACE),
      (P = C));
  }
  function A(C) {
    C !== z && (V && i.lineWidth(C), (z = C));
  }
  function ft(C, le, ee) {
    C
      ? (Z(i.POLYGON_OFFSET_FILL),
        (B !== le || W !== ee) && (i.polygonOffset(le, ee), (B = le), (W = ee)))
      : pe(i.POLYGON_OFFSET_FILL);
  }
  function Xe(C) {
    C ? Z(i.SCISSOR_TEST) : pe(i.SCISSOR_TEST);
  }
  function et(C) {
    (C === void 0 && (C = i.TEXTURE0 + Y - 1),
      fe !== C && (i.activeTexture(C), (fe = C)));
  }
  function xe(C, le, ee) {
    ee === void 0 && (fe === null ? (ee = i.TEXTURE0 + Y - 1) : (ee = fe));
    let de = ae[ee];
    (de === void 0 && ((de = { type: void 0, texture: void 0 }), (ae[ee] = de)),
      (de.type !== C || de.texture !== le) &&
        (fe !== ee && (i.activeTexture(ee), (fe = ee)),
        i.bindTexture(C, le || q[C]),
        (de.type = C),
        (de.texture = le)));
  }
  function w() {
    const C = ae[fe];
    C !== void 0 &&
      C.type !== void 0 &&
      (i.bindTexture(C.type, null), (C.type = void 0), (C.texture = void 0));
  }
  function _() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (C) {
      He("WebGLState:", C);
    }
  }
  function L() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (C) {
      He("WebGLState:", C);
    }
  }
  function X() {
    try {
      i.texSubImage2D(...arguments);
    } catch (C) {
      He("WebGLState:", C);
    }
  }
  function K() {
    try {
      i.texSubImage3D(...arguments);
    } catch (C) {
      He("WebGLState:", C);
    }
  }
  function G() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (C) {
      He("WebGLState:", C);
    }
  }
  function ve() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (C) {
      He("WebGLState:", C);
    }
  }
  function ne() {
    try {
      i.texStorage2D(...arguments);
    } catch (C) {
      He("WebGLState:", C);
    }
  }
  function ge() {
    try {
      i.texStorage3D(...arguments);
    } catch (C) {
      He("WebGLState:", C);
    }
  }
  function Ee() {
    try {
      i.texImage2D(...arguments);
    } catch (C) {
      He("WebGLState:", C);
    }
  }
  function Q() {
    try {
      i.texImage3D(...arguments);
    } catch (C) {
      He("WebGLState:", C);
    }
  }
  function re(C) {
    Le.equals(C) === !1 && (i.scissor(C.x, C.y, C.z, C.w), Le.copy(C));
  }
  function _e(C) {
    rt.equals(C) === !1 && (i.viewport(C.x, C.y, C.z, C.w), rt.copy(C));
  }
  function ke(C, le) {
    let ee = l.get(le);
    ee === void 0 && ((ee = new WeakMap()), l.set(le, ee));
    let de = ee.get(C);
    de === void 0 && ((de = i.getUniformBlockIndex(le, C.name)), ee.set(C, de));
  }
  function ie(C, le) {
    const de = l.get(le).get(C);
    c.get(le) !== de &&
      (i.uniformBlockBinding(le, de, C.__bindingPointIndex), c.set(le, de));
  }
  function Ie() {
    (i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.blendColor(0, 0, 0, 0),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      a.setReversed(!1),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
      i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      (f = {}),
      (fe = null),
      (ae = {}),
      (u = {}),
      (h = new WeakMap()),
      (p = []),
      (b = null),
      (k = !1),
      (m = null),
      (d = null),
      (y = null),
      (S = null),
      (M = null),
      (E = null),
      (T = null),
      (R = new Fe(0, 0, 0)),
      (N = 0),
      (x = !1),
      (v = null),
      (P = null),
      (z = null),
      (B = null),
      (W = null),
      Le.set(0, 0, i.canvas.width, i.canvas.height),
      rt.set(0, 0, i.canvas.width, i.canvas.height),
      o.reset(),
      a.reset(),
      s.reset());
  }
  return {
    buffers: { color: o, depth: a, stencil: s },
    enable: Z,
    disable: pe,
    bindFramebuffer: Re,
    drawBuffers: be,
    useProgram: Ve,
    setBlending: qe,
    setMaterial: Ze,
    setFlipSided: De,
    setCullFace: lt,
    setLineWidth: A,
    setPolygonOffset: ft,
    setScissorTest: Xe,
    activeTexture: et,
    bindTexture: xe,
    unbindTexture: w,
    compressedTexImage2D: _,
    compressedTexImage3D: L,
    texImage2D: Ee,
    texImage3D: Q,
    updateUBOMapping: ke,
    uniformBlockBinding: ie,
    texStorage2D: ne,
    texStorage3D: ge,
    texSubImage2D: X,
    texSubImage3D: K,
    compressedTexSubImage2D: G,
    compressedTexSubImage3D: ve,
    scissor: re,
    viewport: _e,
    reset: Ie,
  };
}
function fm(i, e, t, n, r, o, a) {
  const s = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    c =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    l = new We(),
    f = new WeakMap();
  let u;
  const h = new WeakMap();
  let p = !1;
  try {
    p =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function b(w, _) {
    return p ? new OffscreenCanvas(w, _) : Ui("canvas");
  }
  function k(w, _, L) {
    let X = 1;
    const K = xe(w);
    if (
      ((K.width > L || K.height > L) && (X = L / Math.max(K.width, K.height)),
      X < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && w instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && w instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && w instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && w instanceof VideoFrame)
      ) {
        const G = Math.floor(X * K.width),
          ve = Math.floor(X * K.height);
        u === void 0 && (u = b(G, ve));
        const ne = _ ? b(G, ve) : u;
        return (
          (ne.width = G),
          (ne.height = ve),
          ne.getContext("2d").drawImage(w, 0, 0, G, ve),
          Te(
            "WebGLRenderer: Texture has been resized from (" +
              K.width +
              "x" +
              K.height +
              ") to (" +
              G +
              "x" +
              ve +
              ").",
          ),
          ne
        );
      } else
        return (
          "data" in w &&
            Te(
              "WebGLRenderer: Image in DataTexture is too big (" +
                K.width +
                "x" +
                K.height +
                ").",
            ),
          w
        );
    return w;
  }
  function m(w) {
    return w.generateMipmaps;
  }
  function d(w) {
    i.generateMipmap(w);
  }
  function y(w) {
    return w.isWebGLCubeRenderTarget
      ? i.TEXTURE_CUBE_MAP
      : w.isWebGL3DRenderTarget
        ? i.TEXTURE_3D
        : w.isWebGLArrayRenderTarget || w.isCompressedArrayTexture
          ? i.TEXTURE_2D_ARRAY
          : i.TEXTURE_2D;
  }
  function S(w, _, L, X, K = !1) {
    if (w !== null) {
      if (i[w] !== void 0) return i[w];
      Te(
        "WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          w +
          "'",
      );
    }
    let G = _;
    if (
      (_ === i.RED &&
        (L === i.FLOAT && (G = i.R32F),
        L === i.HALF_FLOAT && (G = i.R16F),
        L === i.UNSIGNED_BYTE && (G = i.R8)),
      _ === i.RED_INTEGER &&
        (L === i.UNSIGNED_BYTE && (G = i.R8UI),
        L === i.UNSIGNED_SHORT && (G = i.R16UI),
        L === i.UNSIGNED_INT && (G = i.R32UI),
        L === i.BYTE && (G = i.R8I),
        L === i.SHORT && (G = i.R16I),
        L === i.INT && (G = i.R32I)),
      _ === i.RG &&
        (L === i.FLOAT && (G = i.RG32F),
        L === i.HALF_FLOAT && (G = i.RG16F),
        L === i.UNSIGNED_BYTE && (G = i.RG8)),
      _ === i.RG_INTEGER &&
        (L === i.UNSIGNED_BYTE && (G = i.RG8UI),
        L === i.UNSIGNED_SHORT && (G = i.RG16UI),
        L === i.UNSIGNED_INT && (G = i.RG32UI),
        L === i.BYTE && (G = i.RG8I),
        L === i.SHORT && (G = i.RG16I),
        L === i.INT && (G = i.RG32I)),
      _ === i.RGB_INTEGER &&
        (L === i.UNSIGNED_BYTE && (G = i.RGB8UI),
        L === i.UNSIGNED_SHORT && (G = i.RGB16UI),
        L === i.UNSIGNED_INT && (G = i.RGB32UI),
        L === i.BYTE && (G = i.RGB8I),
        L === i.SHORT && (G = i.RGB16I),
        L === i.INT && (G = i.RGB32I)),
      _ === i.RGBA_INTEGER &&
        (L === i.UNSIGNED_BYTE && (G = i.RGBA8UI),
        L === i.UNSIGNED_SHORT && (G = i.RGBA16UI),
        L === i.UNSIGNED_INT && (G = i.RGBA32UI),
        L === i.BYTE && (G = i.RGBA8I),
        L === i.SHORT && (G = i.RGBA16I),
        L === i.INT && (G = i.RGBA32I)),
      _ === i.RGB &&
        (L === i.UNSIGNED_INT_5_9_9_9_REV && (G = i.RGB9_E5),
        L === i.UNSIGNED_INT_10F_11F_11F_REV && (G = i.R11F_G11F_B10F)),
      _ === i.RGBA)
    ) {
      const ve = K ? gr : ze.getTransfer(X);
      (L === i.FLOAT && (G = i.RGBA32F),
        L === i.HALF_FLOAT && (G = i.RGBA16F),
        L === i.UNSIGNED_BYTE && (G = ve === Ke ? i.SRGB8_ALPHA8 : i.RGBA8),
        L === i.UNSIGNED_SHORT_4_4_4_4 && (G = i.RGBA4),
        L === i.UNSIGNED_SHORT_5_5_5_1 && (G = i.RGB5_A1));
    }
    return (
      (G === i.R16F ||
        G === i.R32F ||
        G === i.RG16F ||
        G === i.RG32F ||
        G === i.RGBA16F ||
        G === i.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      G
    );
  }
  function M(w, _) {
    let L;
    return (
      w
        ? _ === null || _ === nn || _ === Ii
          ? (L = i.DEPTH24_STENCIL8)
          : _ === Xt
            ? (L = i.DEPTH32F_STENCIL8)
            : _ === Di &&
              ((L = i.DEPTH24_STENCIL8),
              Te(
                "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.",
              ))
        : _ === null || _ === nn || _ === Ii
          ? (L = i.DEPTH_COMPONENT24)
          : _ === Xt
            ? (L = i.DEPTH_COMPONENT32F)
            : _ === Di && (L = i.DEPTH_COMPONENT16),
      L
    );
  }
  function E(w, _) {
    return m(w) === !0 ||
      (w.isFramebufferTexture && w.minFilter !== ct && w.minFilter !== kt)
      ? Math.log2(Math.max(_.width, _.height)) + 1
      : w.mipmaps !== void 0 && w.mipmaps.length > 0
        ? w.mipmaps.length
        : w.isCompressedTexture && Array.isArray(w.image)
          ? _.mipmaps.length
          : 1;
  }
  function T(w) {
    const _ = w.target;
    (_.removeEventListener("dispose", T),
      N(_),
      _.isVideoTexture && f.delete(_));
  }
  function R(w) {
    const _ = w.target;
    (_.removeEventListener("dispose", R), v(_));
  }
  function N(w) {
    const _ = n.get(w);
    if (_.__webglInit === void 0) return;
    const L = w.source,
      X = h.get(L);
    if (X) {
      const K = X[_.__cacheKey];
      (K.usedTimes--,
        K.usedTimes === 0 && x(w),
        Object.keys(X).length === 0 && h.delete(L));
    }
    n.remove(w);
  }
  function x(w) {
    const _ = n.get(w);
    i.deleteTexture(_.__webglTexture);
    const L = w.source,
      X = h.get(L);
    (delete X[_.__cacheKey], a.memory.textures--);
  }
  function v(w) {
    const _ = n.get(w);
    if (
      (w.depthTexture && (w.depthTexture.dispose(), n.remove(w.depthTexture)),
      w.isWebGLCubeRenderTarget)
    )
      for (let X = 0; X < 6; X++) {
        if (Array.isArray(_.__webglFramebuffer[X]))
          for (let K = 0; K < _.__webglFramebuffer[X].length; K++)
            i.deleteFramebuffer(_.__webglFramebuffer[X][K]);
        else i.deleteFramebuffer(_.__webglFramebuffer[X]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[X]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let X = 0; X < _.__webglFramebuffer.length; X++)
          i.deleteFramebuffer(_.__webglFramebuffer[X]);
      else i.deleteFramebuffer(_.__webglFramebuffer);
      if (
        (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer),
        _.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(_.__webglMultisampledFramebuffer),
        _.__webglColorRenderbuffer)
      )
        for (let X = 0; X < _.__webglColorRenderbuffer.length; X++)
          _.__webglColorRenderbuffer[X] &&
            i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);
      _.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const L = w.textures;
    for (let X = 0, K = L.length; X < K; X++) {
      const G = n.get(L[X]);
      (G.__webglTexture &&
        (i.deleteTexture(G.__webglTexture), a.memory.textures--),
        n.remove(L[X]));
    }
    n.remove(w);
  }
  let P = 0;
  function z() {
    P = 0;
  }
  function B() {
    const w = P;
    return (
      w >= r.maxTextures &&
        Te(
          "WebGLTextures: Trying to use " +
            w +
            " texture units while this GPU supports only " +
            r.maxTextures,
        ),
      (P += 1),
      w
    );
  }
  function W(w) {
    const _ = [];
    return (
      _.push(w.wrapS),
      _.push(w.wrapT),
      _.push(w.wrapR || 0),
      _.push(w.magFilter),
      _.push(w.minFilter),
      _.push(w.anisotropy),
      _.push(w.internalFormat),
      _.push(w.format),
      _.push(w.type),
      _.push(w.generateMipmaps),
      _.push(w.premultiplyAlpha),
      _.push(w.flipY),
      _.push(w.unpackAlignment),
      _.push(w.colorSpace),
      _.join()
    );
  }
  function Y(w, _) {
    const L = n.get(w);
    if (
      (w.isVideoTexture && Xe(w),
      w.isRenderTargetTexture === !1 &&
        w.isExternalTexture !== !0 &&
        w.version > 0 &&
        L.__version !== w.version)
    ) {
      const X = w.image;
      if (X === null)
        Te("WebGLRenderer: Texture marked for update but no image data found.");
      else if (X.complete === !1)
        Te("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        q(L, w, _);
        return;
      }
    } else
      w.isExternalTexture &&
        (L.__webglTexture = w.sourceTexture ? w.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, L.__webglTexture, i.TEXTURE0 + _);
  }
  function V(w, _) {
    const L = n.get(w);
    if (
      w.isRenderTargetTexture === !1 &&
      w.version > 0 &&
      L.__version !== w.version
    ) {
      q(L, w, _);
      return;
    } else
      w.isExternalTexture &&
        (L.__webglTexture = w.sourceTexture ? w.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, L.__webglTexture, i.TEXTURE0 + _);
  }
  function H(w, _) {
    const L = n.get(w);
    if (
      w.isRenderTargetTexture === !1 &&
      w.version > 0 &&
      L.__version !== w.version
    ) {
      q(L, w, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, L.__webglTexture, i.TEXTURE0 + _);
  }
  function $(w, _) {
    const L = n.get(w);
    if (
      w.isCubeDepthTexture !== !0 &&
      w.version > 0 &&
      L.__version !== w.version
    ) {
      Z(L, w, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, L.__webglTexture, i.TEXTURE0 + _);
  }
  const fe = { [Eo]: i.REPEAT, [Wt]: i.CLAMP_TO_EDGE, [To]: i.MIRRORED_REPEAT },
    ae = {
      [ct]: i.NEAREST,
      [wl]: i.NEAREST_MIPMAP_NEAREST,
      [Gi]: i.NEAREST_MIPMAP_LINEAR,
      [kt]: i.LINEAR,
      [Pr]: i.LINEAR_MIPMAP_NEAREST,
      [Nn]: i.LINEAR_MIPMAP_LINEAR,
    },
    ue = {
      [yl]: i.NEVER,
      [Cl]: i.ALWAYS,
      [El]: i.LESS,
      [xa]: i.LEQUAL,
      [Tl]: i.EQUAL,
      [ka]: i.GEQUAL,
      [Al]: i.GREATER,
      [Rl]: i.NOTEQUAL,
    };
  function Ue(w, _) {
    if (
      (_.type === Xt &&
        e.has("OES_texture_float_linear") === !1 &&
        (_.magFilter === kt ||
          _.magFilter === Pr ||
          _.magFilter === Gi ||
          _.magFilter === Nn ||
          _.minFilter === kt ||
          _.minFilter === Pr ||
          _.minFilter === Gi ||
          _.minFilter === Nn) &&
        Te(
          "WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.",
        ),
      i.texParameteri(w, i.TEXTURE_WRAP_S, fe[_.wrapS]),
      i.texParameteri(w, i.TEXTURE_WRAP_T, fe[_.wrapT]),
      (w === i.TEXTURE_3D || w === i.TEXTURE_2D_ARRAY) &&
        i.texParameteri(w, i.TEXTURE_WRAP_R, fe[_.wrapR]),
      i.texParameteri(w, i.TEXTURE_MAG_FILTER, ae[_.magFilter]),
      i.texParameteri(w, i.TEXTURE_MIN_FILTER, ae[_.minFilter]),
      _.compareFunction &&
        (i.texParameteri(w, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(w, i.TEXTURE_COMPARE_FUNC, ue[_.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        _.magFilter === ct ||
        (_.minFilter !== Gi && _.minFilter !== Nn) ||
        (_.type === Xt && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const L = e.get("EXT_texture_filter_anisotropic");
        (i.texParameterf(
          w,
          L.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(_.anisotropy, r.getMaxAnisotropy()),
        ),
          (n.get(_).__currentAnisotropy = _.anisotropy));
      }
    }
  }
  function Le(w, _) {
    let L = !1;
    w.__webglInit === void 0 &&
      ((w.__webglInit = !0), _.addEventListener("dispose", T));
    const X = _.source;
    let K = h.get(X);
    K === void 0 && ((K = {}), h.set(X, K));
    const G = W(_);
    if (G !== w.__cacheKey) {
      (K[G] === void 0 &&
        ((K[G] = { texture: i.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (L = !0)),
        K[G].usedTimes++);
      const ve = K[w.__cacheKey];
      (ve !== void 0 &&
        (K[w.__cacheKey].usedTimes--, ve.usedTimes === 0 && x(_)),
        (w.__cacheKey = G),
        (w.__webglTexture = K[G].texture));
    }
    return L;
  }
  function rt(w, _, L) {
    return Math.floor(Math.floor(w / L) / _);
  }
  function it(w, _, L, X) {
    const G = w.updateRanges;
    if (G.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, L, X, _.data);
    else {
      G.sort((Q, re) => Q.start - re.start);
      let ve = 0;
      for (let Q = 1; Q < G.length; Q++) {
        const re = G[ve],
          _e = G[Q],
          ke = re.start + re.count,
          ie = rt(_e.start, _.width, 4),
          Ie = rt(re.start, _.width, 4);
        _e.start <= ke + 1 &&
        ie === Ie &&
        rt(_e.start + _e.count - 1, _.width, 4) === ie
          ? (re.count = Math.max(re.count, _e.start + _e.count - re.start))
          : (++ve, (G[ve] = _e));
      }
      G.length = ve + 1;
      const ne = i.getParameter(i.UNPACK_ROW_LENGTH),
        ge = i.getParameter(i.UNPACK_SKIP_PIXELS),
        Ee = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
      for (let Q = 0, re = G.length; Q < re; Q++) {
        const _e = G[Q],
          ke = Math.floor(_e.start / 4),
          ie = Math.ceil(_e.count / 4),
          Ie = ke % _.width,
          C = Math.floor(ke / _.width),
          le = ie,
          ee = 1;
        (i.pixelStorei(i.UNPACK_SKIP_PIXELS, Ie),
          i.pixelStorei(i.UNPACK_SKIP_ROWS, C),
          t.texSubImage2D(i.TEXTURE_2D, 0, Ie, C, le, ee, L, X, _.data));
      }
      (w.clearUpdateRanges(),
        i.pixelStorei(i.UNPACK_ROW_LENGTH, ne),
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, ge),
        i.pixelStorei(i.UNPACK_SKIP_ROWS, Ee));
    }
  }
  function q(w, _, L) {
    let X = i.TEXTURE_2D;
    ((_.isDataArrayTexture || _.isCompressedArrayTexture) &&
      (X = i.TEXTURE_2D_ARRAY),
      _.isData3DTexture && (X = i.TEXTURE_3D));
    const K = Le(w, _),
      G = _.source;
    t.bindTexture(X, w.__webglTexture, i.TEXTURE0 + L);
    const ve = n.get(G);
    if (G.version !== ve.__version || K === !0) {
      t.activeTexture(i.TEXTURE0 + L);
      const ne = ze.getPrimaries(ze.workingColorSpace),
        ge = _.colorSpace === wn ? null : ze.getPrimaries(_.colorSpace),
        Ee =
          _.colorSpace === wn || ne === ge ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      (i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ee));
      let Q = k(_.image, !1, r.maxTextureSize);
      Q = et(_, Q);
      const re = o.convert(_.format, _.colorSpace),
        _e = o.convert(_.type);
      let ke = S(_.internalFormat, re, _e, _.colorSpace, _.isVideoTexture);
      Ue(X, _);
      let ie;
      const Ie = _.mipmaps,
        C = _.isVideoTexture !== !0,
        le = ve.__version === void 0 || K === !0,
        ee = G.dataReady,
        de = E(_, Q);
      if (_.isDepthTexture)
        ((ke = M(_.format === Fn, _.type)),
          le &&
            (C
              ? t.texStorage2D(i.TEXTURE_2D, 1, ke, Q.width, Q.height)
              : t.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  ke,
                  Q.width,
                  Q.height,
                  0,
                  re,
                  _e,
                  null,
                )));
      else if (_.isDataTexture)
        if (Ie.length > 0) {
          C &&
            le &&
            t.texStorage2D(i.TEXTURE_2D, de, ke, Ie[0].width, Ie[0].height);
          for (let J = 0, j = Ie.length; J < j; J++)
            ((ie = Ie[J]),
              C
                ? ee &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    J,
                    0,
                    0,
                    ie.width,
                    ie.height,
                    re,
                    _e,
                    ie.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    J,
                    ke,
                    ie.width,
                    ie.height,
                    0,
                    re,
                    _e,
                    ie.data,
                  ));
          _.generateMipmaps = !1;
        } else
          C
            ? (le && t.texStorage2D(i.TEXTURE_2D, de, ke, Q.width, Q.height),
              ee && it(_, Q, re, _e))
            : t.texImage2D(
                i.TEXTURE_2D,
                0,
                ke,
                Q.width,
                Q.height,
                0,
                re,
                _e,
                Q.data,
              );
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          C &&
            le &&
            t.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              de,
              ke,
              Ie[0].width,
              Ie[0].height,
              Q.depth,
            );
          for (let J = 0, j = Ie.length; J < j; J++)
            if (((ie = Ie[J]), _.format !== qt))
              if (re !== null)
                if (C) {
                  if (ee)
                    if (_.layerUpdates.size > 0) {
                      const te = _s(ie.width, ie.height, _.format, _.type);
                      for (const Ae of _.layerUpdates) {
                        const tt = ie.data.subarray(
                          (Ae * te) / ie.data.BYTES_PER_ELEMENT,
                          ((Ae + 1) * te) / ie.data.BYTES_PER_ELEMENT,
                        );
                        t.compressedTexSubImage3D(
                          i.TEXTURE_2D_ARRAY,
                          J,
                          0,
                          0,
                          Ae,
                          ie.width,
                          ie.height,
                          1,
                          re,
                          tt,
                        );
                      }
                      _.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        J,
                        0,
                        0,
                        0,
                        ie.width,
                        ie.height,
                        Q.depth,
                        re,
                        ie.data,
                      );
                } else
                  t.compressedTexImage3D(
                    i.TEXTURE_2D_ARRAY,
                    J,
                    ke,
                    ie.width,
                    ie.height,
                    Q.depth,
                    0,
                    ie.data,
                    0,
                    0,
                  );
              else
                Te(
                  "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                );
            else
              C
                ? ee &&
                  t.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    J,
                    0,
                    0,
                    0,
                    ie.width,
                    ie.height,
                    Q.depth,
                    re,
                    _e,
                    ie.data,
                  )
                : t.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    J,
                    ke,
                    ie.width,
                    ie.height,
                    Q.depth,
                    0,
                    re,
                    _e,
                    ie.data,
                  );
        } else {
          C &&
            le &&
            t.texStorage2D(i.TEXTURE_2D, de, ke, Ie[0].width, Ie[0].height);
          for (let J = 0, j = Ie.length; J < j; J++)
            ((ie = Ie[J]),
              _.format !== qt
                ? re !== null
                  ? C
                    ? ee &&
                      t.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        J,
                        0,
                        0,
                        ie.width,
                        ie.height,
                        re,
                        ie.data,
                      )
                    : t.compressedTexImage2D(
                        i.TEXTURE_2D,
                        J,
                        ke,
                        ie.width,
                        ie.height,
                        0,
                        ie.data,
                      )
                  : Te(
                      "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                    )
                : C
                  ? ee &&
                    t.texSubImage2D(
                      i.TEXTURE_2D,
                      J,
                      0,
                      0,
                      ie.width,
                      ie.height,
                      re,
                      _e,
                      ie.data,
                    )
                  : t.texImage2D(
                      i.TEXTURE_2D,
                      J,
                      ke,
                      ie.width,
                      ie.height,
                      0,
                      re,
                      _e,
                      ie.data,
                    ));
        }
      else if (_.isDataArrayTexture)
        if (C) {
          if (
            (le &&
              t.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                de,
                ke,
                Q.width,
                Q.height,
                Q.depth,
              ),
            ee)
          )
            if (_.layerUpdates.size > 0) {
              const J = _s(Q.width, Q.height, _.format, _.type);
              for (const j of _.layerUpdates) {
                const te = Q.data.subarray(
                  (j * J) / Q.data.BYTES_PER_ELEMENT,
                  ((j + 1) * J) / Q.data.BYTES_PER_ELEMENT,
                );
                t.texSubImage3D(
                  i.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  j,
                  Q.width,
                  Q.height,
                  1,
                  re,
                  _e,
                  te,
                );
              }
              _.clearLayerUpdates();
            } else
              t.texSubImage3D(
                i.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                Q.width,
                Q.height,
                Q.depth,
                re,
                _e,
                Q.data,
              );
        } else
          t.texImage3D(
            i.TEXTURE_2D_ARRAY,
            0,
            ke,
            Q.width,
            Q.height,
            Q.depth,
            0,
            re,
            _e,
            Q.data,
          );
      else if (_.isData3DTexture)
        C
          ? (le &&
              t.texStorage3D(i.TEXTURE_3D, de, ke, Q.width, Q.height, Q.depth),
            ee &&
              t.texSubImage3D(
                i.TEXTURE_3D,
                0,
                0,
                0,
                0,
                Q.width,
                Q.height,
                Q.depth,
                re,
                _e,
                Q.data,
              ))
          : t.texImage3D(
              i.TEXTURE_3D,
              0,
              ke,
              Q.width,
              Q.height,
              Q.depth,
              0,
              re,
              _e,
              Q.data,
            );
      else if (_.isFramebufferTexture) {
        if (le)
          if (C) t.texStorage2D(i.TEXTURE_2D, de, ke, Q.width, Q.height);
          else {
            let J = Q.width,
              j = Q.height;
            for (let te = 0; te < de; te++)
              (t.texImage2D(i.TEXTURE_2D, te, ke, J, j, 0, re, _e, null),
                (J >>= 1),
                (j >>= 1));
          }
      } else if (Ie.length > 0) {
        if (C && le) {
          const J = xe(Ie[0]);
          t.texStorage2D(i.TEXTURE_2D, de, ke, J.width, J.height);
        }
        for (let J = 0, j = Ie.length; J < j; J++)
          ((ie = Ie[J]),
            C
              ? ee && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, re, _e, ie)
              : t.texImage2D(i.TEXTURE_2D, J, ke, re, _e, ie));
        _.generateMipmaps = !1;
      } else if (C) {
        if (le) {
          const J = xe(Q);
          t.texStorage2D(i.TEXTURE_2D, de, ke, J.width, J.height);
        }
        ee && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, re, _e, Q);
      } else t.texImage2D(i.TEXTURE_2D, 0, ke, re, _e, Q);
      (m(_) && d(X), (ve.__version = G.version), _.onUpdate && _.onUpdate(_));
    }
    w.__version = _.version;
  }
  function Z(w, _, L) {
    if (_.image.length !== 6) return;
    const X = Le(w, _),
      K = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, w.__webglTexture, i.TEXTURE0 + L);
    const G = n.get(K);
    if (K.version !== G.__version || X === !0) {
      t.activeTexture(i.TEXTURE0 + L);
      const ve = ze.getPrimaries(ze.workingColorSpace),
        ne = _.colorSpace === wn ? null : ze.getPrimaries(_.colorSpace),
        ge =
          _.colorSpace === wn || ve === ne ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      (i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ge));
      const Ee = _.isCompressedTexture || _.image[0].isCompressedTexture,
        Q = _.image[0] && _.image[0].isDataTexture,
        re = [];
      for (let j = 0; j < 6; j++)
        (!Ee && !Q
          ? (re[j] = k(_.image[j], !0, r.maxCubemapSize))
          : (re[j] = Q ? _.image[j].image : _.image[j]),
          (re[j] = et(_, re[j])));
      const _e = re[0],
        ke = o.convert(_.format, _.colorSpace),
        ie = o.convert(_.type),
        Ie = S(_.internalFormat, ke, ie, _.colorSpace),
        C = _.isVideoTexture !== !0,
        le = G.__version === void 0 || X === !0,
        ee = K.dataReady;
      let de = E(_, _e);
      Ue(i.TEXTURE_CUBE_MAP, _);
      let J;
      if (Ee) {
        C &&
          le &&
          t.texStorage2D(i.TEXTURE_CUBE_MAP, de, Ie, _e.width, _e.height);
        for (let j = 0; j < 6; j++) {
          J = re[j].mipmaps;
          for (let te = 0; te < J.length; te++) {
            const Ae = J[te];
            _.format !== qt
              ? ke !== null
                ? C
                  ? ee &&
                    t.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                      te,
                      0,
                      0,
                      Ae.width,
                      Ae.height,
                      ke,
                      Ae.data,
                    )
                  : t.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                      te,
                      Ie,
                      Ae.width,
                      Ae.height,
                      0,
                      Ae.data,
                    )
                : Te(
                    "WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                  )
              : C
                ? ee &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    te,
                    0,
                    0,
                    Ae.width,
                    Ae.height,
                    ke,
                    ie,
                    Ae.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    te,
                    Ie,
                    Ae.width,
                    Ae.height,
                    0,
                    ke,
                    ie,
                    Ae.data,
                  );
          }
        }
      } else {
        if (((J = _.mipmaps), C && le)) {
          J.length > 0 && de++;
          const j = xe(re[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, de, Ie, j.width, j.height);
        }
        for (let j = 0; j < 6; j++)
          if (Q) {
            C
              ? ee &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  0,
                  0,
                  re[j].width,
                  re[j].height,
                  ke,
                  ie,
                  re[j].data,
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  Ie,
                  re[j].width,
                  re[j].height,
                  0,
                  ke,
                  ie,
                  re[j].data,
                );
            for (let te = 0; te < J.length; te++) {
              const tt = J[te].image[j].image;
              C
                ? ee &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    te + 1,
                    0,
                    0,
                    tt.width,
                    tt.height,
                    ke,
                    ie,
                    tt.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    te + 1,
                    Ie,
                    tt.width,
                    tt.height,
                    0,
                    ke,
                    ie,
                    tt.data,
                  );
            }
          } else {
            C
              ? ee &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  0,
                  0,
                  ke,
                  ie,
                  re[j],
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  Ie,
                  ke,
                  ie,
                  re[j],
                );
            for (let te = 0; te < J.length; te++) {
              const Ae = J[te];
              C
                ? ee &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    te + 1,
                    0,
                    0,
                    ke,
                    ie,
                    Ae.image[j],
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    te + 1,
                    Ie,
                    ke,
                    ie,
                    Ae.image[j],
                  );
            }
          }
      }
      (m(_) && d(i.TEXTURE_CUBE_MAP),
        (G.__version = K.version),
        _.onUpdate && _.onUpdate(_));
    }
    w.__version = _.version;
  }
  function pe(w, _, L, X, K, G) {
    const ve = o.convert(L.format, L.colorSpace),
      ne = o.convert(L.type),
      ge = S(L.internalFormat, ve, ne, L.colorSpace),
      Ee = n.get(_),
      Q = n.get(L);
    if (((Q.__renderTarget = _), !Ee.__hasExternalTextures)) {
      const re = Math.max(1, _.width >> G),
        _e = Math.max(1, _.height >> G);
      K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY
        ? t.texImage3D(K, G, ge, re, _e, _.depth, 0, ve, ne, null)
        : t.texImage2D(K, G, ge, re, _e, 0, ve, ne, null);
    }
    (t.bindFramebuffer(i.FRAMEBUFFER, w),
      ft(_)
        ? s.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            X,
            K,
            Q.__webglTexture,
            0,
            A(_),
          )
        : (K === i.TEXTURE_2D ||
            (K >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(i.FRAMEBUFFER, X, K, Q.__webglTexture, G),
      t.bindFramebuffer(i.FRAMEBUFFER, null));
  }
  function Re(w, _, L) {
    if ((i.bindRenderbuffer(i.RENDERBUFFER, w), _.depthBuffer)) {
      const X = _.depthTexture,
        K = X && X.isDepthTexture ? X.type : null,
        G = M(_.stencilBuffer, K),
        ve = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      (ft(_)
        ? s.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            A(_),
            G,
            _.width,
            _.height,
          )
        : L
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              A(_),
              G,
              _.width,
              _.height,
            )
          : i.renderbufferStorage(i.RENDERBUFFER, G, _.width, _.height),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, ve, i.RENDERBUFFER, w));
    } else {
      const X = _.textures;
      for (let K = 0; K < X.length; K++) {
        const G = X[K],
          ve = o.convert(G.format, G.colorSpace),
          ne = o.convert(G.type),
          ge = S(G.internalFormat, ve, ne, G.colorSpace);
        ft(_)
          ? s.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              A(_),
              ge,
              _.width,
              _.height,
            )
          : L
            ? i.renderbufferStorageMultisample(
                i.RENDERBUFFER,
                A(_),
                ge,
                _.width,
                _.height,
              )
            : i.renderbufferStorage(i.RENDERBUFFER, ge, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function be(w, _, L) {
    const X = _.isWebGLCubeRenderTarget === !0;
    if (
      (t.bindFramebuffer(i.FRAMEBUFFER, w),
      !(_.depthTexture && _.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture",
      );
    const K = n.get(_.depthTexture);
    if (
      ((K.__renderTarget = _),
      (!K.__webglTexture ||
        _.depthTexture.image.width !== _.width ||
        _.depthTexture.image.height !== _.height) &&
        ((_.depthTexture.image.width = _.width),
        (_.depthTexture.image.height = _.height),
        (_.depthTexture.needsUpdate = !0)),
      X)
    ) {
      if (
        (K.__webglInit === void 0 &&
          ((K.__webglInit = !0), _.depthTexture.addEventListener("dispose", T)),
        K.__webglTexture === void 0)
      ) {
        ((K.__webglTexture = i.createTexture()),
          t.bindTexture(i.TEXTURE_CUBE_MAP, K.__webglTexture),
          Ue(i.TEXTURE_CUBE_MAP, _.depthTexture));
        const Ee = o.convert(_.depthTexture.format),
          Q = o.convert(_.depthTexture.type);
        let re;
        _.depthTexture.format === mn
          ? (re = i.DEPTH_COMPONENT24)
          : _.depthTexture.format === Fn && (re = i.DEPTH24_STENCIL8);
        for (let _e = 0; _e < 6; _e++)
          i.texImage2D(
            i.TEXTURE_CUBE_MAP_POSITIVE_X + _e,
            0,
            re,
            _.width,
            _.height,
            0,
            Ee,
            Q,
            null,
          );
      }
    } else Y(_.depthTexture, 0);
    const G = K.__webglTexture,
      ve = A(_),
      ne = X ? i.TEXTURE_CUBE_MAP_POSITIVE_X + L : i.TEXTURE_2D,
      ge =
        _.depthTexture.format === Fn
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
    if (_.depthTexture.format === mn)
      ft(_)
        ? s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, ge, ne, G, 0, ve)
        : i.framebufferTexture2D(i.FRAMEBUFFER, ge, ne, G, 0);
    else if (_.depthTexture.format === Fn)
      ft(_)
        ? s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, ge, ne, G, 0, ve)
        : i.framebufferTexture2D(i.FRAMEBUFFER, ge, ne, G, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Ve(w) {
    const _ = n.get(w),
      L = w.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== w.depthTexture) {
      const X = w.depthTexture;
      if ((_.__depthDisposeCallback && _.__depthDisposeCallback(), X)) {
        const K = () => {
          (delete _.__boundDepthTexture,
            delete _.__depthDisposeCallback,
            X.removeEventListener("dispose", K));
        };
        (X.addEventListener("dispose", K), (_.__depthDisposeCallback = K));
      }
      _.__boundDepthTexture = X;
    }
    if (w.depthTexture && !_.__autoAllocateDepthBuffer)
      if (L) for (let X = 0; X < 6; X++) be(_.__webglFramebuffer[X], w, X);
      else {
        const X = w.texture.mipmaps;
        X && X.length > 0
          ? be(_.__webglFramebuffer[0], w, 0)
          : be(_.__webglFramebuffer, w, 0);
      }
    else if (L) {
      _.__webglDepthbuffer = [];
      for (let X = 0; X < 6; X++)
        if (
          (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[X]),
          _.__webglDepthbuffer[X] === void 0)
        )
          ((_.__webglDepthbuffer[X] = i.createRenderbuffer()),
            Re(_.__webglDepthbuffer[X], w, !1));
        else {
          const K = w.stencilBuffer
              ? i.DEPTH_STENCIL_ATTACHMENT
              : i.DEPTH_ATTACHMENT,
            G = _.__webglDepthbuffer[X];
          (i.bindRenderbuffer(i.RENDERBUFFER, G),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, G));
        }
    } else {
      const X = w.texture.mipmaps;
      if (
        (X && X.length > 0
          ? t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0])
          : t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer),
        _.__webglDepthbuffer === void 0)
      )
        ((_.__webglDepthbuffer = i.createRenderbuffer()),
          Re(_.__webglDepthbuffer, w, !1));
      else {
        const K = w.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          G = _.__webglDepthbuffer;
        (i.bindRenderbuffer(i.RENDERBUFFER, G),
          i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, G));
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function pt(w, _, L) {
    const X = n.get(w);
    (_ !== void 0 &&
      pe(
        X.__webglFramebuffer,
        w,
        w.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        0,
      ),
      L !== void 0 && Ve(w));
  }
  function Be(w) {
    const _ = w.texture,
      L = n.get(w),
      X = n.get(_);
    w.addEventListener("dispose", R);
    const K = w.textures,
      G = w.isWebGLCubeRenderTarget === !0,
      ve = K.length > 1;
    if (
      (ve ||
        (X.__webglTexture === void 0 && (X.__webglTexture = i.createTexture()),
        (X.__version = _.version),
        a.memory.textures++),
      G)
    ) {
      L.__webglFramebuffer = [];
      for (let ne = 0; ne < 6; ne++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          L.__webglFramebuffer[ne] = [];
          for (let ge = 0; ge < _.mipmaps.length; ge++)
            L.__webglFramebuffer[ne][ge] = i.createFramebuffer();
        } else L.__webglFramebuffer[ne] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        L.__webglFramebuffer = [];
        for (let ne = 0; ne < _.mipmaps.length; ne++)
          L.__webglFramebuffer[ne] = i.createFramebuffer();
      } else L.__webglFramebuffer = i.createFramebuffer();
      if (ve)
        for (let ne = 0, ge = K.length; ne < ge; ne++) {
          const Ee = n.get(K[ne]);
          Ee.__webglTexture === void 0 &&
            ((Ee.__webglTexture = i.createTexture()), a.memory.textures++);
        }
      if (w.samples > 0 && ft(w) === !1) {
        ((L.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (L.__webglColorRenderbuffer = []),
          t.bindFramebuffer(i.FRAMEBUFFER, L.__webglMultisampledFramebuffer));
        for (let ne = 0; ne < K.length; ne++) {
          const ge = K[ne];
          ((L.__webglColorRenderbuffer[ne] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, L.__webglColorRenderbuffer[ne]));
          const Ee = o.convert(ge.format, ge.colorSpace),
            Q = o.convert(ge.type),
            re = S(
              ge.internalFormat,
              Ee,
              Q,
              ge.colorSpace,
              w.isXRRenderTarget === !0,
            ),
            _e = A(w);
          (i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            _e,
            re,
            w.width,
            w.height,
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + ne,
              i.RENDERBUFFER,
              L.__webglColorRenderbuffer[ne],
            ));
        }
        (i.bindRenderbuffer(i.RENDERBUFFER, null),
          w.depthBuffer &&
            ((L.__webglDepthRenderbuffer = i.createRenderbuffer()),
            Re(L.__webglDepthRenderbuffer, w, !0)),
          t.bindFramebuffer(i.FRAMEBUFFER, null));
      }
    }
    if (G) {
      (t.bindTexture(i.TEXTURE_CUBE_MAP, X.__webglTexture),
        Ue(i.TEXTURE_CUBE_MAP, _));
      for (let ne = 0; ne < 6; ne++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let ge = 0; ge < _.mipmaps.length; ge++)
            pe(
              L.__webglFramebuffer[ne][ge],
              w,
              _,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_CUBE_MAP_POSITIVE_X + ne,
              ge,
            );
        else
          pe(
            L.__webglFramebuffer[ne],
            w,
            _,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_CUBE_MAP_POSITIVE_X + ne,
            0,
          );
      (m(_) && d(i.TEXTURE_CUBE_MAP), t.unbindTexture());
    } else if (ve) {
      for (let ne = 0, ge = K.length; ne < ge; ne++) {
        const Ee = K[ne],
          Q = n.get(Ee);
        let re = i.TEXTURE_2D;
        ((w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) &&
          (re = w.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
          t.bindTexture(re, Q.__webglTexture),
          Ue(re, Ee),
          pe(L.__webglFramebuffer, w, Ee, i.COLOR_ATTACHMENT0 + ne, re, 0),
          m(Ee) && d(re));
      }
      t.unbindTexture();
    } else {
      let ne = i.TEXTURE_2D;
      if (
        ((w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) &&
          (ne = w.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
        t.bindTexture(ne, X.__webglTexture),
        Ue(ne, _),
        _.mipmaps && _.mipmaps.length > 0)
      )
        for (let ge = 0; ge < _.mipmaps.length; ge++)
          pe(L.__webglFramebuffer[ge], w, _, i.COLOR_ATTACHMENT0, ne, ge);
      else pe(L.__webglFramebuffer, w, _, i.COLOR_ATTACHMENT0, ne, 0);
      (m(_) && d(ne), t.unbindTexture());
    }
    w.depthBuffer && Ve(w);
  }
  function qe(w) {
    const _ = w.textures;
    for (let L = 0, X = _.length; L < X; L++) {
      const K = _[L];
      if (m(K)) {
        const G = y(w),
          ve = n.get(K).__webglTexture;
        (t.bindTexture(G, ve), d(G), t.unbindTexture());
      }
    }
  }
  const Ze = [],
    De = [];
  function lt(w) {
    if (w.samples > 0) {
      if (ft(w) === !1) {
        const _ = w.textures,
          L = w.width,
          X = w.height;
        let K = i.COLOR_BUFFER_BIT;
        const G = w.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          ve = n.get(w),
          ne = _.length > 1;
        if (ne)
          for (let Ee = 0; Ee < _.length; Ee++)
            (t.bindFramebuffer(
              i.FRAMEBUFFER,
              ve.__webglMultisampledFramebuffer,
            ),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + Ee,
                i.RENDERBUFFER,
                null,
              ),
              t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + Ee,
                i.TEXTURE_2D,
                null,
                0,
              ));
        t.bindFramebuffer(
          i.READ_FRAMEBUFFER,
          ve.__webglMultisampledFramebuffer,
        );
        const ge = w.texture.mipmaps;
        ge && ge.length > 0
          ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ve.__webglFramebuffer[0])
          : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ve.__webglFramebuffer);
        for (let Ee = 0; Ee < _.length; Ee++) {
          if (
            (w.resolveDepthBuffer &&
              (w.depthBuffer && (K |= i.DEPTH_BUFFER_BIT),
              w.stencilBuffer &&
                w.resolveStencilBuffer &&
                (K |= i.STENCIL_BUFFER_BIT)),
            ne)
          ) {
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              ve.__webglColorRenderbuffer[Ee],
            );
            const Q = n.get(_[Ee]).__webglTexture;
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_2D,
              Q,
              0,
            );
          }
          (i.blitFramebuffer(0, 0, L, X, 0, 0, L, X, K, i.NEAREST),
            c === !0 &&
              ((Ze.length = 0),
              (De.length = 0),
              Ze.push(i.COLOR_ATTACHMENT0 + Ee),
              w.depthBuffer &&
                w.resolveDepthBuffer === !1 &&
                (Ze.push(G),
                De.push(G),
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, De)),
              i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Ze)));
        }
        if (
          (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
          ne)
        )
          for (let Ee = 0; Ee < _.length; Ee++) {
            (t.bindFramebuffer(
              i.FRAMEBUFFER,
              ve.__webglMultisampledFramebuffer,
            ),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + Ee,
                i.RENDERBUFFER,
                ve.__webglColorRenderbuffer[Ee],
              ));
            const Q = n.get(_[Ee]).__webglTexture;
            (t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + Ee,
                i.TEXTURE_2D,
                Q,
                0,
              ));
          }
        t.bindFramebuffer(
          i.DRAW_FRAMEBUFFER,
          ve.__webglMultisampledFramebuffer,
        );
      } else if (w.depthBuffer && w.resolveDepthBuffer === !1 && c) {
        const _ = w.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function A(w) {
    return Math.min(r.maxSamples, w.samples);
  }
  function ft(w) {
    const _ = n.get(w);
    return (
      w.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      _.__useRenderToTexture !== !1
    );
  }
  function Xe(w) {
    const _ = a.render.frame;
    f.get(w) !== _ && (f.set(w, _), w.update());
  }
  function et(w, _) {
    const L = w.colorSpace,
      X = w.format,
      K = w.type;
    return (
      w.isCompressedTexture === !0 ||
        w.isVideoTexture === !0 ||
        (L !== hi &&
          L !== wn &&
          (ze.getTransfer(L) === Ke
            ? (X !== qt || K !== It) &&
              Te(
                "WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.",
              )
            : He("WebGLTextures: Unsupported texture color space:", L))),
      _
    );
  }
  function xe(w) {
    return (
      typeof HTMLImageElement < "u" && w instanceof HTMLImageElement
        ? ((l.width = w.naturalWidth || w.width),
          (l.height = w.naturalHeight || w.height))
        : typeof VideoFrame < "u" && w instanceof VideoFrame
          ? ((l.width = w.displayWidth), (l.height = w.displayHeight))
          : ((l.width = w.width), (l.height = w.height)),
      l
    );
  }
  ((this.allocateTextureUnit = B),
    (this.resetTextureUnits = z),
    (this.setTexture2D = Y),
    (this.setTexture2DArray = V),
    (this.setTexture3D = H),
    (this.setTextureCube = $),
    (this.rebindTextures = pt),
    (this.setupRenderTarget = Be),
    (this.updateRenderTargetMipmap = qe),
    (this.updateMultisampleRenderTarget = lt),
    (this.setupDepthRenderbuffer = Ve),
    (this.setupFrameBufferTexture = pe),
    (this.useMultisampledRTT = ft),
    (this.isReversedDepthBuffer = function () {
      return t.buffers.depth.getReversed();
    }));
}
function um(i, e) {
  function t(n, r = wn) {
    let o;
    const a = ze.getTransfer(r);
    if (n === It) return i.UNSIGNED_BYTE;
    if (n === ha) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === pa) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === rc) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === oc) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === nc) return i.BYTE;
    if (n === ic) return i.SHORT;
    if (n === Di) return i.UNSIGNED_SHORT;
    if (n === da) return i.INT;
    if (n === nn) return i.UNSIGNED_INT;
    if (n === Xt) return i.FLOAT;
    if (n === pn) return i.HALF_FLOAT;
    if (n === ac) return i.ALPHA;
    if (n === sc) return i.RGB;
    if (n === qt) return i.RGBA;
    if (n === mn) return i.DEPTH_COMPONENT;
    if (n === Fn) return i.DEPTH_STENCIL;
    if (n === ma) return i.RED;
    if (n === _a) return i.RED_INTEGER;
    if (n === di) return i.RG;
    if (n === ba) return i.RG_INTEGER;
    if (n === ga) return i.RGBA_INTEGER;
    if (n === hr || n === pr || n === mr || n === _r)
      if (a === Ke)
        if (((o = e.get("WEBGL_compressed_texture_s3tc_srgb")), o !== null)) {
          if (n === hr) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === pr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === mr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === _r) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((o = e.get("WEBGL_compressed_texture_s3tc")), o !== null)) {
        if (n === hr) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === pr) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === mr) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === _r) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === Ao || n === Ro || n === Co || n === Po)
      if (((o = e.get("WEBGL_compressed_texture_pvrtc")), o !== null)) {
        if (n === Ao) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Ro) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Co) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Po) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (
      n === Lo ||
      n === Do ||
      n === Io ||
      n === Uo ||
      n === No ||
      n === Fo ||
      n === Oo
    )
      if (((o = e.get("WEBGL_compressed_texture_etc")), o !== null)) {
        if (n === Lo || n === Do)
          return a === Ke ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (n === Io)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : o.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === Uo) return o.COMPRESSED_R11_EAC;
        if (n === No) return o.COMPRESSED_SIGNED_R11_EAC;
        if (n === Fo) return o.COMPRESSED_RG11_EAC;
        if (n === Oo) return o.COMPRESSED_SIGNED_RG11_EAC;
      } else return null;
    if (
      n === Bo ||
      n === zo ||
      n === Vo ||
      n === Go ||
      n === Ho ||
      n === Wo ||
      n === Xo ||
      n === qo ||
      n === Yo ||
      n === jo ||
      n === Ko ||
      n === $o ||
      n === Zo ||
      n === Jo
    )
      if (((o = e.get("WEBGL_compressed_texture_astc")), o !== null)) {
        if (n === Bo)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === zo)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Vo)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Go)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Ho)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Wo)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Xo)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === qo)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Yo)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === jo)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Ko)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === $o)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Zo)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Jo)
          return a === Ke
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === Qo || n === ea || n === ta)
      if (((o = e.get("EXT_texture_compression_bptc")), o !== null)) {
        if (n === Qo)
          return a === Ke
            ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === ea) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === ta) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === na || n === ia || n === ra || n === oa)
      if (((o = e.get("EXT_texture_compression_rgtc")), o !== null)) {
        if (n === na) return o.COMPRESSED_RED_RGTC1_EXT;
        if (n === ia) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === ra) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === oa) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === Ii ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const dm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  hm = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class pm {
  constructor() {
    ((this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0));
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new Mc(e.texture);
      ((e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) &&
        ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
        (this.texture = n));
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        n = new rn({
          vertexShader: dm,
          fragmentShader: hm,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new Ut(new Sr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    ((this.texture = null), (this.mesh = null));
  }
  getDepthTexture() {
    return this.texture;
  }
}
class mm extends zn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null,
      o = 1,
      a = null,
      s = "local-floor",
      c = 1,
      l = null,
      f = null,
      u = null,
      h = null,
      p = null,
      b = null;
    const k = typeof XRWebGLBinding < "u",
      m = new pm(),
      d = {},
      y = t.getContextAttributes();
    let S = null,
      M = null;
    const E = [],
      T = [],
      R = new We();
    let N = null;
    const x = new Ot();
    x.viewport = new st();
    const v = new Ot();
    v.viewport = new st();
    const P = [x, v],
      z = new wf();
    let B = null,
      W = null;
    ((this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (q) {
        let Z = E[q];
        return (
          Z === void 0 && ((Z = new eo()), (E[q] = Z)),
          Z.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (q) {
        let Z = E[q];
        return (Z === void 0 && ((Z = new eo()), (E[q] = Z)), Z.getGripSpace());
      }),
      (this.getHand = function (q) {
        let Z = E[q];
        return (Z === void 0 && ((Z = new eo()), (E[q] = Z)), Z.getHandSpace());
      }));
    function Y(q) {
      const Z = T.indexOf(q.inputSource);
      if (Z === -1) return;
      const pe = E[Z];
      pe !== void 0 &&
        (pe.update(q.inputSource, q.frame, l || a),
        pe.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function V() {
      (r.removeEventListener("select", Y),
        r.removeEventListener("selectstart", Y),
        r.removeEventListener("selectend", Y),
        r.removeEventListener("squeeze", Y),
        r.removeEventListener("squeezestart", Y),
        r.removeEventListener("squeezeend", Y),
        r.removeEventListener("end", V),
        r.removeEventListener("inputsourceschange", H));
      for (let q = 0; q < E.length; q++) {
        const Z = T[q];
        Z !== null && ((T[q] = null), E[q].disconnect(Z));
      }
      ((B = null), (W = null), m.reset());
      for (const q in d) delete d[q];
      (e.setRenderTarget(S),
        (p = null),
        (h = null),
        (u = null),
        (r = null),
        (M = null),
        it.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(N),
        e.setSize(R.width, R.height, !1),
        n.dispatchEvent({ type: "sessionend" }));
    }
    ((this.setFramebufferScaleFactor = function (q) {
      ((o = q),
        n.isPresenting === !0 &&
          Te(
            "WebXRManager: Cannot change framebuffer scale while presenting.",
          ));
    }),
      (this.setReferenceSpaceType = function (q) {
        ((s = q),
          n.isPresenting === !0 &&
            Te(
              "WebXRManager: Cannot change reference space type while presenting.",
            ));
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (q) {
        l = q;
      }),
      (this.getBaseLayer = function () {
        return h !== null ? h : p;
      }),
      (this.getBinding = function () {
        return (u === null && k && (u = new XRWebGLBinding(r, t)), u);
      }),
      (this.getFrame = function () {
        return b;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (q) {
        if (((r = q), r !== null)) {
          if (
            ((S = e.getRenderTarget()),
            r.addEventListener("select", Y),
            r.addEventListener("selectstart", Y),
            r.addEventListener("selectend", Y),
            r.addEventListener("squeeze", Y),
            r.addEventListener("squeezestart", Y),
            r.addEventListener("squeezeend", Y),
            r.addEventListener("end", V),
            r.addEventListener("inputsourceschange", H),
            y.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (N = e.getPixelRatio()),
            e.getSize(R),
            k && "createProjectionLayer" in XRWebGLBinding.prototype)
          ) {
            let pe = null,
              Re = null,
              be = null;
            y.depth &&
              ((be = y.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (pe = y.stencil ? Fn : mn),
              (Re = y.stencil ? Ii : nn));
            const Ve = {
              colorFormat: t.RGBA8,
              depthFormat: be,
              scaleFactor: o,
            };
            ((u = this.getBinding()),
              (h = u.createProjectionLayer(Ve)),
              r.updateRenderState({ layers: [h] }),
              e.setPixelRatio(1),
              e.setSize(h.textureWidth, h.textureHeight, !1),
              (M = new tn(h.textureWidth, h.textureHeight, {
                format: qt,
                type: It,
                depthTexture: new Fi(
                  h.textureWidth,
                  h.textureHeight,
                  Re,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  pe,
                ),
                stencilBuffer: y.stencil,
                colorSpace: e.outputColorSpace,
                samples: y.antialias ? 4 : 0,
                resolveDepthBuffer: h.ignoreDepthValues === !1,
                resolveStencilBuffer: h.ignoreDepthValues === !1,
              })));
          } else {
            const pe = {
              antialias: y.antialias,
              alpha: !0,
              depth: y.depth,
              stencil: y.stencil,
              framebufferScaleFactor: o,
            };
            ((p = new XRWebGLLayer(r, t, pe)),
              r.updateRenderState({ baseLayer: p }),
              e.setPixelRatio(1),
              e.setSize(p.framebufferWidth, p.framebufferHeight, !1),
              (M = new tn(p.framebufferWidth, p.framebufferHeight, {
                format: qt,
                type: It,
                colorSpace: e.outputColorSpace,
                stencilBuffer: y.stencil,
                resolveDepthBuffer: p.ignoreDepthValues === !1,
                resolveStencilBuffer: p.ignoreDepthValues === !1,
              })));
          }
          ((M.isXRRenderTarget = !0),
            this.setFoveation(c),
            (l = null),
            (a = await r.requestReferenceSpace(s)),
            it.setContext(r),
            it.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" }));
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return m.getDepthTexture();
      }));
    function H(q) {
      for (let Z = 0; Z < q.removed.length; Z++) {
        const pe = q.removed[Z],
          Re = T.indexOf(pe);
        Re >= 0 && ((T[Re] = null), E[Re].disconnect(pe));
      }
      for (let Z = 0; Z < q.added.length; Z++) {
        const pe = q.added[Z];
        let Re = T.indexOf(pe);
        if (Re === -1) {
          for (let Ve = 0; Ve < E.length; Ve++)
            if (Ve >= T.length) {
              (T.push(pe), (Re = Ve));
              break;
            } else if (T[Ve] === null) {
              ((T[Ve] = pe), (Re = Ve));
              break;
            }
          if (Re === -1) break;
        }
        const be = E[Re];
        be && be.connect(pe);
      }
    }
    const $ = new U(),
      fe = new U();
    function ae(q, Z, pe) {
      ($.setFromMatrixPosition(Z.matrixWorld),
        fe.setFromMatrixPosition(pe.matrixWorld));
      const Re = $.distanceTo(fe),
        be = Z.projectionMatrix.elements,
        Ve = pe.projectionMatrix.elements,
        pt = be[14] / (be[10] - 1),
        Be = be[14] / (be[10] + 1),
        qe = (be[9] + 1) / be[5],
        Ze = (be[9] - 1) / be[5],
        De = (be[8] - 1) / be[0],
        lt = (Ve[8] + 1) / Ve[0],
        A = pt * De,
        ft = pt * lt,
        Xe = Re / (-De + lt),
        et = Xe * -De;
      if (
        (Z.matrixWorld.decompose(q.position, q.quaternion, q.scale),
        q.translateX(et),
        q.translateZ(Xe),
        q.matrixWorld.compose(q.position, q.quaternion, q.scale),
        q.matrixWorldInverse.copy(q.matrixWorld).invert(),
        be[10] === -1)
      )
        (q.projectionMatrix.copy(Z.projectionMatrix),
          q.projectionMatrixInverse.copy(Z.projectionMatrixInverse));
      else {
        const xe = pt + Xe,
          w = Be + Xe,
          _ = A - et,
          L = ft + (Re - et),
          X = ((qe * Be) / w) * xe,
          K = ((Ze * Be) / w) * xe;
        (q.projectionMatrix.makePerspective(_, L, X, K, xe, w),
          q.projectionMatrixInverse.copy(q.projectionMatrix).invert());
      }
    }
    function ue(q, Z) {
      (Z === null
        ? q.matrixWorld.copy(q.matrix)
        : q.matrixWorld.multiplyMatrices(Z.matrixWorld, q.matrix),
        q.matrixWorldInverse.copy(q.matrixWorld).invert());
    }
    this.updateCamera = function (q) {
      if (r === null) return;
      let Z = q.near,
        pe = q.far;
      (m.texture !== null &&
        (m.depthNear > 0 && (Z = m.depthNear),
        m.depthFar > 0 && (pe = m.depthFar)),
        (z.near = v.near = x.near = Z),
        (z.far = v.far = x.far = pe),
        (B !== z.near || W !== z.far) &&
          (r.updateRenderState({ depthNear: z.near, depthFar: z.far }),
          (B = z.near),
          (W = z.far)),
        (z.layers.mask = q.layers.mask | 6),
        (x.layers.mask = z.layers.mask & 3),
        (v.layers.mask = z.layers.mask & 5));
      const Re = q.parent,
        be = z.cameras;
      ue(z, Re);
      for (let Ve = 0; Ve < be.length; Ve++) ue(be[Ve], Re);
      (be.length === 2
        ? ae(z, x, v)
        : z.projectionMatrix.copy(x.projectionMatrix),
        Ue(q, z, Re));
    };
    function Ue(q, Z, pe) {
      (pe === null
        ? q.matrix.copy(Z.matrixWorld)
        : (q.matrix.copy(pe.matrixWorld),
          q.matrix.invert(),
          q.matrix.multiply(Z.matrixWorld)),
        q.matrix.decompose(q.position, q.quaternion, q.scale),
        q.updateMatrixWorld(!0),
        q.projectionMatrix.copy(Z.projectionMatrix),
        q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),
        q.isPerspectiveCamera &&
          ((q.fov = aa * 2 * Math.atan(1 / q.projectionMatrix.elements[5])),
          (q.zoom = 1)));
    }
    ((this.getCamera = function () {
      return z;
    }),
      (this.getFoveation = function () {
        if (!(h === null && p === null)) return c;
      }),
      (this.setFoveation = function (q) {
        ((c = q),
          h !== null && (h.fixedFoveation = q),
          p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = q));
      }),
      (this.hasDepthSensing = function () {
        return m.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return m.getMesh(z);
      }),
      (this.getCameraTexture = function (q) {
        return d[q];
      }));
    let Le = null;
    function rt(q, Z) {
      if (((f = Z.getViewerPose(l || a)), (b = Z), f !== null)) {
        const pe = f.views;
        p !== null &&
          (e.setRenderTargetFramebuffer(M, p.framebuffer),
          e.setRenderTarget(M));
        let Re = !1;
        pe.length !== z.cameras.length && ((z.cameras.length = 0), (Re = !0));
        for (let Be = 0; Be < pe.length; Be++) {
          const qe = pe[Be];
          let Ze = null;
          if (p !== null) Ze = p.getViewport(qe);
          else {
            const lt = u.getViewSubImage(h, qe);
            ((Ze = lt.viewport),
              Be === 0 &&
                (e.setRenderTargetTextures(
                  M,
                  lt.colorTexture,
                  lt.depthStencilTexture,
                ),
                e.setRenderTarget(M)));
          }
          let De = P[Be];
          (De === void 0 &&
            ((De = new Ot()),
            De.layers.enable(Be),
            (De.viewport = new st()),
            (P[Be] = De)),
            De.matrix.fromArray(qe.transform.matrix),
            De.matrix.decompose(De.position, De.quaternion, De.scale),
            De.projectionMatrix.fromArray(qe.projectionMatrix),
            De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),
            De.viewport.set(Ze.x, Ze.y, Ze.width, Ze.height),
            Be === 0 &&
              (z.matrix.copy(De.matrix),
              z.matrix.decompose(z.position, z.quaternion, z.scale)),
            Re === !0 && z.cameras.push(De));
        }
        const be = r.enabledFeatures;
        if (
          be &&
          be.includes("depth-sensing") &&
          r.depthUsage == "gpu-optimized" &&
          k
        ) {
          u = n.getBinding();
          const Be = u.getDepthInformation(pe[0]);
          Be && Be.isValid && Be.texture && m.init(Be, r.renderState);
        }
        if (be && be.includes("camera-access") && k) {
          (e.state.unbindTexture(), (u = n.getBinding()));
          for (let Be = 0; Be < pe.length; Be++) {
            const qe = pe[Be].camera;
            if (qe) {
              let Ze = d[qe];
              Ze || ((Ze = new Mc()), (d[qe] = Ze));
              const De = u.getCameraImage(qe);
              Ze.sourceTexture = De;
            }
          }
        }
      }
      for (let pe = 0; pe < E.length; pe++) {
        const Re = T[pe],
          be = E[pe];
        Re !== null && be !== void 0 && be.update(Re, Z, l || a);
      }
      (Le && Le(q, Z),
        Z.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: Z }),
        (b = null));
    }
    const it = new Ec();
    (it.setAnimationLoop(rt),
      (this.setAnimationLoop = function (q) {
        Le = q;
      }),
      (this.dispose = function () {}));
  }
}
const Ln = new jt(),
  _m = new Qe();
function bm(i, e) {
  function t(m, d) {
    (m.matrixAutoUpdate === !0 && m.updateMatrix(), d.value.copy(m.matrix));
  }
  function n(m, d) {
    (d.color.getRGB(m.fogColor.value, _c(i)),
      d.isFog
        ? ((m.fogNear.value = d.near), (m.fogFar.value = d.far))
        : d.isFogExp2 && (m.fogDensity.value = d.density));
  }
  function r(m, d, y, S, M) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial
      ? o(m, d)
      : d.isMeshToonMaterial
        ? (o(m, d), u(m, d))
        : d.isMeshPhongMaterial
          ? (o(m, d), f(m, d))
          : d.isMeshStandardMaterial
            ? (o(m, d), h(m, d), d.isMeshPhysicalMaterial && p(m, d, M))
            : d.isMeshMatcapMaterial
              ? (o(m, d), b(m, d))
              : d.isMeshDepthMaterial
                ? o(m, d)
                : d.isMeshDistanceMaterial
                  ? (o(m, d), k(m, d))
                  : d.isMeshNormalMaterial
                    ? o(m, d)
                    : d.isLineBasicMaterial
                      ? (a(m, d), d.isLineDashedMaterial && s(m, d))
                      : d.isPointsMaterial
                        ? c(m, d, y, S)
                        : d.isSpriteMaterial
                          ? l(m, d)
                          : d.isShadowMaterial
                            ? (m.color.value.copy(d.color),
                              (m.opacity.value = d.opacity))
                            : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function o(m, d) {
    ((m.opacity.value = d.opacity),
      d.color && m.diffuse.value.copy(d.color),
      d.emissive &&
        m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),
      d.map && ((m.map.value = d.map), t(d.map, m.mapTransform)),
      d.alphaMap &&
        ((m.alphaMap.value = d.alphaMap), t(d.alphaMap, m.alphaMapTransform)),
      d.bumpMap &&
        ((m.bumpMap.value = d.bumpMap),
        t(d.bumpMap, m.bumpMapTransform),
        (m.bumpScale.value = d.bumpScale),
        d.side === Rt && (m.bumpScale.value *= -1)),
      d.normalMap &&
        ((m.normalMap.value = d.normalMap),
        t(d.normalMap, m.normalMapTransform),
        m.normalScale.value.copy(d.normalScale),
        d.side === Rt && m.normalScale.value.negate()),
      d.displacementMap &&
        ((m.displacementMap.value = d.displacementMap),
        t(d.displacementMap, m.displacementMapTransform),
        (m.displacementScale.value = d.displacementScale),
        (m.displacementBias.value = d.displacementBias)),
      d.emissiveMap &&
        ((m.emissiveMap.value = d.emissiveMap),
        t(d.emissiveMap, m.emissiveMapTransform)),
      d.specularMap &&
        ((m.specularMap.value = d.specularMap),
        t(d.specularMap, m.specularMapTransform)),
      d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest));
    const y = e.get(d),
      S = y.envMap,
      M = y.envMapRotation;
    (S &&
      ((m.envMap.value = S),
      Ln.copy(M),
      (Ln.x *= -1),
      (Ln.y *= -1),
      (Ln.z *= -1),
      S.isCubeTexture &&
        S.isRenderTargetTexture === !1 &&
        ((Ln.y *= -1), (Ln.z *= -1)),
      m.envMapRotation.value.setFromMatrix4(_m.makeRotationFromEuler(Ln)),
      (m.flipEnvMap.value =
        S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1),
      (m.reflectivity.value = d.reflectivity),
      (m.ior.value = d.ior),
      (m.refractionRatio.value = d.refractionRatio)),
      d.lightMap &&
        ((m.lightMap.value = d.lightMap),
        (m.lightMapIntensity.value = d.lightMapIntensity),
        t(d.lightMap, m.lightMapTransform)),
      d.aoMap &&
        ((m.aoMap.value = d.aoMap),
        (m.aoMapIntensity.value = d.aoMapIntensity),
        t(d.aoMap, m.aoMapTransform)));
  }
  function a(m, d) {
    (m.diffuse.value.copy(d.color),
      (m.opacity.value = d.opacity),
      d.map && ((m.map.value = d.map), t(d.map, m.mapTransform)));
  }
  function s(m, d) {
    ((m.dashSize.value = d.dashSize),
      (m.totalSize.value = d.dashSize + d.gapSize),
      (m.scale.value = d.scale));
  }
  function c(m, d, y, S) {
    (m.diffuse.value.copy(d.color),
      (m.opacity.value = d.opacity),
      (m.size.value = d.size * y),
      (m.scale.value = S * 0.5),
      d.map && ((m.map.value = d.map), t(d.map, m.uvTransform)),
      d.alphaMap &&
        ((m.alphaMap.value = d.alphaMap), t(d.alphaMap, m.alphaMapTransform)),
      d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest));
  }
  function l(m, d) {
    (m.diffuse.value.copy(d.color),
      (m.opacity.value = d.opacity),
      (m.rotation.value = d.rotation),
      d.map && ((m.map.value = d.map), t(d.map, m.mapTransform)),
      d.alphaMap &&
        ((m.alphaMap.value = d.alphaMap), t(d.alphaMap, m.alphaMapTransform)),
      d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest));
  }
  function f(m, d) {
    (m.specular.value.copy(d.specular),
      (m.shininess.value = Math.max(d.shininess, 1e-4)));
  }
  function u(m, d) {
    d.gradientMap && (m.gradientMap.value = d.gradientMap);
  }
  function h(m, d) {
    ((m.metalness.value = d.metalness),
      d.metalnessMap &&
        ((m.metalnessMap.value = d.metalnessMap),
        t(d.metalnessMap, m.metalnessMapTransform)),
      (m.roughness.value = d.roughness),
      d.roughnessMap &&
        ((m.roughnessMap.value = d.roughnessMap),
        t(d.roughnessMap, m.roughnessMapTransform)),
      d.envMap && (m.envMapIntensity.value = d.envMapIntensity));
  }
  function p(m, d, y) {
    ((m.ior.value = d.ior),
      d.sheen > 0 &&
        (m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),
        (m.sheenRoughness.value = d.sheenRoughness),
        d.sheenColorMap &&
          ((m.sheenColorMap.value = d.sheenColorMap),
          t(d.sheenColorMap, m.sheenColorMapTransform)),
        d.sheenRoughnessMap &&
          ((m.sheenRoughnessMap.value = d.sheenRoughnessMap),
          t(d.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
      d.clearcoat > 0 &&
        ((m.clearcoat.value = d.clearcoat),
        (m.clearcoatRoughness.value = d.clearcoatRoughness),
        d.clearcoatMap &&
          ((m.clearcoatMap.value = d.clearcoatMap),
          t(d.clearcoatMap, m.clearcoatMapTransform)),
        d.clearcoatRoughnessMap &&
          ((m.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap),
          t(d.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
        d.clearcoatNormalMap &&
          ((m.clearcoatNormalMap.value = d.clearcoatNormalMap),
          t(d.clearcoatNormalMap, m.clearcoatNormalMapTransform),
          m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),
          d.side === Rt && m.clearcoatNormalScale.value.negate())),
      d.dispersion > 0 && (m.dispersion.value = d.dispersion),
      d.iridescence > 0 &&
        ((m.iridescence.value = d.iridescence),
        (m.iridescenceIOR.value = d.iridescenceIOR),
        (m.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0]),
        (m.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1]),
        d.iridescenceMap &&
          ((m.iridescenceMap.value = d.iridescenceMap),
          t(d.iridescenceMap, m.iridescenceMapTransform)),
        d.iridescenceThicknessMap &&
          ((m.iridescenceThicknessMap.value = d.iridescenceThicknessMap),
          t(d.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
      d.transmission > 0 &&
        ((m.transmission.value = d.transmission),
        (m.transmissionSamplerMap.value = y.texture),
        m.transmissionSamplerSize.value.set(y.width, y.height),
        d.transmissionMap &&
          ((m.transmissionMap.value = d.transmissionMap),
          t(d.transmissionMap, m.transmissionMapTransform)),
        (m.thickness.value = d.thickness),
        d.thicknessMap &&
          ((m.thicknessMap.value = d.thicknessMap),
          t(d.thicknessMap, m.thicknessMapTransform)),
        (m.attenuationDistance.value = d.attenuationDistance),
        m.attenuationColor.value.copy(d.attenuationColor)),
      d.anisotropy > 0 &&
        (m.anisotropyVector.value.set(
          d.anisotropy * Math.cos(d.anisotropyRotation),
          d.anisotropy * Math.sin(d.anisotropyRotation),
        ),
        d.anisotropyMap &&
          ((m.anisotropyMap.value = d.anisotropyMap),
          t(d.anisotropyMap, m.anisotropyMapTransform))),
      (m.specularIntensity.value = d.specularIntensity),
      m.specularColor.value.copy(d.specularColor),
      d.specularColorMap &&
        ((m.specularColorMap.value = d.specularColorMap),
        t(d.specularColorMap, m.specularColorMapTransform)),
      d.specularIntensityMap &&
        ((m.specularIntensityMap.value = d.specularIntensityMap),
        t(d.specularIntensityMap, m.specularIntensityMapTransform)));
  }
  function b(m, d) {
    d.matcap && (m.matcap.value = d.matcap);
  }
  function k(m, d) {
    const y = e.get(d).light;
    (m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),
      (m.nearDistance.value = y.shadow.camera.near),
      (m.farDistance.value = y.shadow.camera.far));
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function gm(i, e, t, n) {
  let r = {},
    o = {},
    a = [];
  const s = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(y, S) {
    const M = S.program;
    n.uniformBlockBinding(y, M);
  }
  function l(y, S) {
    let M = r[y.id];
    M === void 0 &&
      (b(y), (M = f(y)), (r[y.id] = M), y.addEventListener("dispose", m));
    const E = S.program;
    n.updateUBOMapping(y, E);
    const T = e.render.frame;
    o[y.id] !== T && (h(y), (o[y.id] = T));
  }
  function f(y) {
    const S = u();
    y.__bindingPointIndex = S;
    const M = i.createBuffer(),
      E = y.__size,
      T = y.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, M),
      i.bufferData(i.UNIFORM_BUFFER, E, T),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, S, M),
      M
    );
  }
  function u() {
    for (let y = 0; y < s; y++) if (a.indexOf(y) === -1) return (a.push(y), y);
    return (
      He(
        "WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.",
      ),
      0
    );
  }
  function h(y) {
    const S = r[y.id],
      M = y.uniforms,
      E = y.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, S);
    for (let T = 0, R = M.length; T < R; T++) {
      const N = Array.isArray(M[T]) ? M[T] : [M[T]];
      for (let x = 0, v = N.length; x < v; x++) {
        const P = N[x];
        if (p(P, T, x, E) === !0) {
          const z = P.__offset,
            B = Array.isArray(P.value) ? P.value : [P.value];
          let W = 0;
          for (let Y = 0; Y < B.length; Y++) {
            const V = B[Y],
              H = k(V);
            typeof V == "number" || typeof V == "boolean"
              ? ((P.__data[0] = V),
                i.bufferSubData(i.UNIFORM_BUFFER, z + W, P.__data))
              : V.isMatrix3
                ? ((P.__data[0] = V.elements[0]),
                  (P.__data[1] = V.elements[1]),
                  (P.__data[2] = V.elements[2]),
                  (P.__data[3] = 0),
                  (P.__data[4] = V.elements[3]),
                  (P.__data[5] = V.elements[4]),
                  (P.__data[6] = V.elements[5]),
                  (P.__data[7] = 0),
                  (P.__data[8] = V.elements[6]),
                  (P.__data[9] = V.elements[7]),
                  (P.__data[10] = V.elements[8]),
                  (P.__data[11] = 0))
                : (V.toArray(P.__data, W),
                  (W += H.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          i.bufferSubData(i.UNIFORM_BUFFER, z, P.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(y, S, M, E) {
    const T = y.value,
      R = S + "_" + M;
    if (E[R] === void 0)
      return (
        typeof T == "number" || typeof T == "boolean"
          ? (E[R] = T)
          : (E[R] = T.clone()),
        !0
      );
    {
      const N = E[R];
      if (typeof T == "number" || typeof T == "boolean") {
        if (N !== T) return ((E[R] = T), !0);
      } else if (N.equals(T) === !1) return (N.copy(T), !0);
    }
    return !1;
  }
  function b(y) {
    const S = y.uniforms;
    let M = 0;
    const E = 16;
    for (let R = 0, N = S.length; R < N; R++) {
      const x = Array.isArray(S[R]) ? S[R] : [S[R]];
      for (let v = 0, P = x.length; v < P; v++) {
        const z = x[v],
          B = Array.isArray(z.value) ? z.value : [z.value];
        for (let W = 0, Y = B.length; W < Y; W++) {
          const V = B[W],
            H = k(V),
            $ = M % E,
            fe = $ % H.boundary,
            ae = $ + fe;
          ((M += fe),
            ae !== 0 && E - ae < H.storage && (M += E - ae),
            (z.__data = new Float32Array(
              H.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (z.__offset = M),
            (M += H.storage));
        }
      }
    }
    const T = M % E;
    return (T > 0 && (M += E - T), (y.__size = M), (y.__cache = {}), this);
  }
  function k(y) {
    const S = { boundary: 0, storage: 0 };
    return (
      typeof y == "number" || typeof y == "boolean"
        ? ((S.boundary = 4), (S.storage = 4))
        : y.isVector2
          ? ((S.boundary = 8), (S.storage = 8))
          : y.isVector3 || y.isColor
            ? ((S.boundary = 16), (S.storage = 12))
            : y.isVector4
              ? ((S.boundary = 16), (S.storage = 16))
              : y.isMatrix3
                ? ((S.boundary = 48), (S.storage = 48))
                : y.isMatrix4
                  ? ((S.boundary = 64), (S.storage = 64))
                  : y.isTexture
                    ? Te(
                        "WebGLRenderer: Texture samplers can not be part of an uniforms group.",
                      )
                    : Te("WebGLRenderer: Unsupported uniform value type.", y),
      S
    );
  }
  function m(y) {
    const S = y.target;
    S.removeEventListener("dispose", m);
    const M = a.indexOf(S.__bindingPointIndex);
    (a.splice(M, 1), i.deleteBuffer(r[S.id]), delete r[S.id], delete o[S.id]);
  }
  function d() {
    for (const y in r) i.deleteBuffer(r[y]);
    ((a = []), (r = {}), (o = {}));
  }
  return { bind: c, update: l, dispose: d };
}
const xm = new Uint16Array([
  12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545,
  13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829,
  15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880,
  14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410,
  14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958,
  11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039,
  14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743,
  12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751,
  14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764,
  13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387,
  14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782,
  10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831,
  14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886,
  11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600,
  14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104,
  12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205,
  14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603,
  8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451,
  15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932,
  10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461,
  8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631,
  15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883,
  9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279,
  7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229,
  9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697,
  8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337,
  8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119,
  8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448,
  6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340,
  7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933,
  7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007,
  5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302,
  6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679,
  6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359,
  4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188,
  6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377,
  4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354,
  2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981,
  4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808,
  3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322,
  2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681,
  3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1,
  15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133,
  1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996,
  1398, 13702, 1183,
]);
let $t = null;
function km() {
  return (
    $t === null &&
      (($t = new vc(xm, 16, 16, di, pn)),
      ($t.name = "DFG_LUT"),
      ($t.minFilter = kt),
      ($t.magFilter = kt),
      ($t.wrapS = Wt),
      ($t.wrapT = Wt),
      ($t.generateMipmaps = !1),
      ($t.needsUpdate = !0)),
    $t
  );
}
class Pc {
  constructor(e = {}) {
    const {
      canvas: t = Pl(),
      context: n = null,
      depth: r = !0,
      stencil: o = !1,
      alpha: a = !1,
      antialias: s = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: f = "default",
      failIfMajorPerformanceCaveat: u = !1,
      reversedDepthBuffer: h = !1,
      outputBufferType: p = It,
    } = e;
    this.isWebGLRenderer = !0;
    let b;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163.",
        );
      b = n.getContextAttributes().alpha;
    } else b = a;
    const k = p,
      m = new Set([ga, ba, _a]),
      d = new Set([It, nn, Di, Ii, ha, pa]),
      y = new Uint32Array(4),
      S = new Int32Array(4);
    let M = null,
      E = null;
    const T = [],
      R = [];
    let N = null;
    ((this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.toneMapping = en),
      (this.toneMappingExposure = 1),
      (this.transmissionResolutionScale = 1));
    const x = this;
    let v = !1;
    this._outputColorSpace = Mt;
    let P = 0,
      z = 0,
      B = null,
      W = -1,
      Y = null;
    const V = new st(),
      H = new st();
    let $ = null;
    const fe = new Fe(0);
    let ae = 0,
      ue = t.width,
      Ue = t.height,
      Le = 1,
      rt = null,
      it = null;
    const q = new st(0, 0, ue, Ue),
      Z = new st(0, 0, ue, Ue);
    let pe = !1;
    const Re = new Ma();
    let be = !1,
      Ve = !1;
    const pt = new Qe(),
      Be = new U(),
      qe = new st(),
      Ze = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let De = !1;
    function lt() {
      return B === null ? Le : 1;
    }
    let A = n;
    function ft(g, D) {
      return t.getContext(g, D);
    }
    try {
      const g = {
        alpha: !0,
        depth: r,
        stencil: o,
        antialias: s,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: f,
        failIfMajorPerformanceCaveat: u,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${ua}`),
        t.addEventListener("webglcontextlost", Ae, !1),
        t.addEventListener("webglcontextrestored", tt, !1),
        t.addEventListener("webglcontextcreationerror", Ye, !1),
        A === null)
      ) {
        const D = "webgl2";
        if (((A = ft(D, g)), A === null))
          throw ft(D)
            ? new Error(
                "Error creating WebGL context with your selected attributes.",
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (g) {
      throw (He("WebGLRenderer: " + g.message), g);
    }
    let Xe,
      et,
      xe,
      w,
      _,
      L,
      X,
      K,
      G,
      ve,
      ne,
      ge,
      Ee,
      Q,
      re,
      _e,
      ke,
      ie,
      Ie,
      C,
      le,
      ee,
      de,
      J;
    function j() {
      ((Xe = new kh(A)),
        Xe.init(),
        (ee = new um(A, Xe)),
        (et = new uh(A, Xe, e, ee)),
        (xe = new lm(A, Xe)),
        et.reversedDepthBuffer && h && xe.buffers.depth.setReversed(!0),
        (w = new Mh(A)),
        (_ = new jp()),
        (L = new fm(A, Xe, xe, _, et, ee, w)),
        (X = new hh(x)),
        (K = new xh(x)),
        (G = new Tf(A)),
        (de = new lh(A, G)),
        (ve = new vh(A, G, w, de)),
        (ne = new yh(A, ve, G, w)),
        (Ie = new Sh(A, et, L)),
        (_e = new dh(_)),
        (ge = new Yp(x, X, K, Xe, et, de, _e)),
        (Ee = new bm(x, _)),
        (Q = new $p()),
        (re = new nm(Xe)),
        (ie = new ch(x, X, K, xe, ne, b, c)),
        (ke = new sm(x, ne, et)),
        (J = new gm(A, w, et, xe)),
        (C = new fh(A, Xe, w)),
        (le = new wh(A, Xe, w)),
        (w.programs = ge.programs),
        (x.capabilities = et),
        (x.extensions = Xe),
        (x.properties = _),
        (x.renderLists = Q),
        (x.shadowMap = ke),
        (x.state = xe),
        (x.info = w));
    }
    (j(), k !== It && (N = new Th(k, t.width, t.height, r, o)));
    const te = new mm(x, A);
    ((this.xr = te),
      (this.getContext = function () {
        return A;
      }),
      (this.getContextAttributes = function () {
        return A.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const g = Xe.get("WEBGL_lose_context");
        g && g.loseContext();
      }),
      (this.forceContextRestore = function () {
        const g = Xe.get("WEBGL_lose_context");
        g && g.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return Le;
      }),
      (this.setPixelRatio = function (g) {
        g !== void 0 && ((Le = g), this.setSize(ue, Ue, !1));
      }),
      (this.getSize = function (g) {
        return g.set(ue, Ue);
      }),
      (this.setSize = function (g, D, O = !0) {
        if (te.isPresenting) {
          Te("WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        ((ue = g),
          (Ue = D),
          (t.width = Math.floor(g * Le)),
          (t.height = Math.floor(D * Le)),
          O === !0 && ((t.style.width = g + "px"), (t.style.height = D + "px")),
          N !== null && N.setSize(t.width, t.height),
          this.setViewport(0, 0, g, D));
      }),
      (this.getDrawingBufferSize = function (g) {
        return g.set(ue * Le, Ue * Le).floor();
      }),
      (this.setDrawingBufferSize = function (g, D, O) {
        ((ue = g),
          (Ue = D),
          (Le = O),
          (t.width = Math.floor(g * O)),
          (t.height = Math.floor(D * O)),
          this.setViewport(0, 0, g, D));
      }),
      (this.setEffects = function (g) {
        if (k === It) {
          console.error(
            "THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.",
          );
          return;
        }
        if (g) {
          for (let D = 0; D < g.length; D++)
            if (g[D].isOutputPass === !0) {
              console.warn(
                "THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.",
              );
              break;
            }
        }
        N.setEffects(g || []);
      }),
      (this.getCurrentViewport = function (g) {
        return g.copy(V);
      }),
      (this.getViewport = function (g) {
        return g.copy(q);
      }),
      (this.setViewport = function (g, D, O, F) {
        (g.isVector4 ? q.set(g.x, g.y, g.z, g.w) : q.set(g, D, O, F),
          xe.viewport(V.copy(q).multiplyScalar(Le).round()));
      }),
      (this.getScissor = function (g) {
        return g.copy(Z);
      }),
      (this.setScissor = function (g, D, O, F) {
        (g.isVector4 ? Z.set(g.x, g.y, g.z, g.w) : Z.set(g, D, O, F),
          xe.scissor(H.copy(Z).multiplyScalar(Le).round()));
      }),
      (this.getScissorTest = function () {
        return pe;
      }),
      (this.setScissorTest = function (g) {
        xe.setScissorTest((pe = g));
      }),
      (this.setOpaqueSort = function (g) {
        rt = g;
      }),
      (this.setTransparentSort = function (g) {
        it = g;
      }),
      (this.getClearColor = function (g) {
        return g.copy(ie.getClearColor());
      }),
      (this.setClearColor = function () {
        ie.setClearColor(...arguments);
      }),
      (this.getClearAlpha = function () {
        return ie.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        ie.setClearAlpha(...arguments);
      }),
      (this.clear = function (g = !0, D = !0, O = !0) {
        let F = 0;
        if (g) {
          let I = !1;
          if (B !== null) {
            const oe = B.texture.format;
            I = m.has(oe);
          }
          if (I) {
            const oe = B.texture.type,
              he = d.has(oe),
              ce = ie.getClearColor(),
              me = ie.getClearAlpha(),
              we = ce.r,
              ye = ce.g,
              Me = ce.b;
            he
              ? ((y[0] = we),
                (y[1] = ye),
                (y[2] = Me),
                (y[3] = me),
                A.clearBufferuiv(A.COLOR, 0, y))
              : ((S[0] = we),
                (S[1] = ye),
                (S[2] = Me),
                (S[3] = me),
                A.clearBufferiv(A.COLOR, 0, S));
          } else F |= A.COLOR_BUFFER_BIT;
        }
        (D && (F |= A.DEPTH_BUFFER_BIT),
          O &&
            ((F |= A.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          A.clear(F));
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        (t.removeEventListener("webglcontextlost", Ae, !1),
          t.removeEventListener("webglcontextrestored", tt, !1),
          t.removeEventListener("webglcontextcreationerror", Ye, !1),
          ie.dispose(),
          Q.dispose(),
          re.dispose(),
          _.dispose(),
          X.dispose(),
          K.dispose(),
          ne.dispose(),
          de.dispose(),
          J.dispose(),
          ge.dispose(),
          te.dispose(),
          te.removeEventListener("sessionstart", Ra),
          te.removeEventListener("sessionend", Ca),
          yn.stop());
      }));
    function Ae(g) {
      (g.preventDefault(), Wa("WebGLRenderer: Context Lost."), (v = !0));
    }
    function tt() {
      (Wa("WebGLRenderer: Context Restored."), (v = !1));
      const g = w.autoReset,
        D = ke.enabled,
        O = ke.autoUpdate,
        F = ke.needsUpdate,
        I = ke.type;
      (j(),
        (w.autoReset = g),
        (ke.enabled = D),
        (ke.autoUpdate = O),
        (ke.needsUpdate = F),
        (ke.type = I));
    }
    function Ye(g) {
      He(
        "WebGLRenderer: A WebGL context could not be created. Reason: ",
        g.statusMessage,
      );
    }
    function Kt(g) {
      const D = g.target;
      (D.removeEventListener("dispose", Kt), on(D));
    }
    function on(g) {
      (Bc(g), _.remove(g));
    }
    function Bc(g) {
      const D = _.get(g).programs;
      D !== void 0 &&
        (D.forEach(function (O) {
          ge.releaseProgram(O);
        }),
        g.isShaderMaterial && ge.releaseShaderCache(g));
    }
    this.renderBufferDirect = function (g, D, O, F, I, oe) {
      D === null && (D = Ze);
      const he = I.isMesh && I.matrixWorld.determinant() < 0,
        ce = Vc(g, D, O, F, I);
      xe.setMaterial(F, he);
      let me = O.index,
        we = 1;
      if (F.wireframe === !0) {
        if (((me = ve.getWireframeAttribute(O)), me === void 0)) return;
        we = 2;
      }
      const ye = O.drawRange,
        Me = O.attributes.position;
      let Ne = ye.start * we,
        $e = (ye.start + ye.count) * we;
      (oe !== null &&
        ((Ne = Math.max(Ne, oe.start * we)),
        ($e = Math.min($e, (oe.start + oe.count) * we))),
        me !== null
          ? ((Ne = Math.max(Ne, 0)), ($e = Math.min($e, me.count)))
          : Me != null &&
            ((Ne = Math.max(Ne, 0)), ($e = Math.min($e, Me.count))));
      const ot = $e - Ne;
      if (ot < 0 || ot === 1 / 0) return;
      de.setup(I, F, ce, O, me);
      let at,
        Je = C;
      if (
        (me !== null && ((at = G.get(me)), (Je = le), Je.setIndex(at)),
        I.isMesh)
      )
        F.wireframe === !0
          ? (xe.setLineWidth(F.wireframeLinewidth * lt()), Je.setMode(A.LINES))
          : Je.setMode(A.TRIANGLES);
      else if (I.isLine) {
        let Se = F.linewidth;
        (Se === void 0 && (Se = 1),
          xe.setLineWidth(Se * lt()),
          I.isLineSegments
            ? Je.setMode(A.LINES)
            : I.isLineLoop
              ? Je.setMode(A.LINE_LOOP)
              : Je.setMode(A.LINE_STRIP));
      } else
        I.isPoints
          ? Je.setMode(A.POINTS)
          : I.isSprite && Je.setMode(A.TRIANGLES);
      if (I.isBatchedMesh)
        if (I._multiDrawInstances !== null)
          (Ni(
            "WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.",
          ),
            Je.renderMultiDrawInstances(
              I._multiDrawStarts,
              I._multiDrawCounts,
              I._multiDrawCount,
              I._multiDrawInstances,
            ));
        else if (Xe.get("WEBGL_multi_draw"))
          Je.renderMultiDraw(
            I._multiDrawStarts,
            I._multiDrawCounts,
            I._multiDrawCount,
          );
        else {
          const Se = I._multiDrawStarts,
            je = I._multiDrawCounts,
            Ge = I._multiDrawCount,
            Ct = me ? G.get(me).bytesPerElement : 1,
            Hn = _.get(F).currentProgram.getUniforms();
          for (let Pt = 0; Pt < Ge; Pt++)
            (Hn.setValue(A, "_gl_DrawID", Pt), Je.render(Se[Pt] / Ct, je[Pt]));
        }
      else if (I.isInstancedMesh) Je.renderInstances(Ne, ot, I.count);
      else if (O.isInstancedBufferGeometry) {
        const Se = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0,
          je = Math.min(O.instanceCount, Se);
        Je.renderInstances(Ne, ot, je);
      } else Je.render(Ne, ot);
    };
    function Aa(g, D, O) {
      g.transparent === !0 && g.side === un && g.forceSinglePass === !1
        ? ((g.side = Rt),
          (g.needsUpdate = !0),
          Vi(g, D, O),
          (g.side = Sn),
          (g.needsUpdate = !0),
          Vi(g, D, O),
          (g.side = un))
        : Vi(g, D, O);
    }
    ((this.compile = function (g, D, O = null) {
      (O === null && (O = g),
        (E = re.get(O)),
        E.init(D),
        R.push(E),
        O.traverseVisible(function (I) {
          I.isLight &&
            I.layers.test(D.layers) &&
            (E.pushLight(I), I.castShadow && E.pushShadow(I));
        }),
        g !== O &&
          g.traverseVisible(function (I) {
            I.isLight &&
              I.layers.test(D.layers) &&
              (E.pushLight(I), I.castShadow && E.pushShadow(I));
          }),
        E.setupLights());
      const F = new Set();
      return (
        g.traverse(function (I) {
          if (!(I.isMesh || I.isPoints || I.isLine || I.isSprite)) return;
          const oe = I.material;
          if (oe)
            if (Array.isArray(oe))
              for (let he = 0; he < oe.length; he++) {
                const ce = oe[he];
                (Aa(ce, O, I), F.add(ce));
              }
            else (Aa(oe, O, I), F.add(oe));
        }),
        (E = R.pop()),
        F
      );
    }),
      (this.compileAsync = function (g, D, O = null) {
        const F = this.compile(g, D, O);
        return new Promise((I) => {
          function oe() {
            if (
              (F.forEach(function (he) {
                _.get(he).currentProgram.isReady() && F.delete(he);
              }),
              F.size === 0)
            ) {
              I(g);
              return;
            }
            setTimeout(oe, 10);
          }
          Xe.get("KHR_parallel_shader_compile") !== null
            ? oe()
            : setTimeout(oe, 10);
        });
      }));
    let Ar = null;
    function zc(g) {
      Ar && Ar(g);
    }
    function Ra() {
      yn.stop();
    }
    function Ca() {
      yn.start();
    }
    const yn = new Ec();
    (yn.setAnimationLoop(zc),
      typeof self < "u" && yn.setContext(self),
      (this.setAnimationLoop = function (g) {
        ((Ar = g), te.setAnimationLoop(g), g === null ? yn.stop() : yn.start());
      }),
      te.addEventListener("sessionstart", Ra),
      te.addEventListener("sessionend", Ca),
      (this.render = function (g, D) {
        if (D !== void 0 && D.isCamera !== !0) {
          He(
            "WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
          return;
        }
        if (v === !0) return;
        const O = te.enabled === !0 && te.isPresenting === !0,
          F = N !== null && (B === null || O) && N.begin(x, B);
        if (
          (g.matrixWorldAutoUpdate === !0 && g.updateMatrixWorld(),
          D.parent === null &&
            D.matrixWorldAutoUpdate === !0 &&
            D.updateMatrixWorld(),
          te.enabled === !0 &&
            te.isPresenting === !0 &&
            (N === null || N.isCompositing() === !1) &&
            (te.cameraAutoUpdate === !0 && te.updateCamera(D),
            (D = te.getCamera())),
          g.isScene === !0 && g.onBeforeRender(x, g, D, B),
          (E = re.get(g, R.length)),
          E.init(D),
          R.push(E),
          pt.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse),
          Re.setFromProjectionMatrix(pt, Jt, D.reversedDepth),
          (Ve = this.localClippingEnabled),
          (be = _e.init(this.clippingPlanes, Ve)),
          (M = Q.get(g, T.length)),
          M.init(),
          T.push(M),
          te.enabled === !0 && te.isPresenting === !0)
        ) {
          const he = x.xr.getDepthSensingMesh();
          he !== null && Rr(he, D, -1 / 0, x.sortObjects);
        }
        (Rr(g, D, 0, x.sortObjects),
          M.finish(),
          x.sortObjects === !0 && M.sort(rt, it),
          (De =
            te.enabled === !1 ||
            te.isPresenting === !1 ||
            te.hasDepthSensing() === !1),
          De && ie.addToRenderList(M, g),
          this.info.render.frame++,
          be === !0 && _e.beginShadows());
        const I = E.state.shadowsArray;
        if (
          (ke.render(I, g, D),
          be === !0 && _e.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          (F && N.hasRenderPass()) === !1)
        ) {
          const he = M.opaque,
            ce = M.transmissive;
          if ((E.setupLights(), D.isArrayCamera)) {
            const me = D.cameras;
            if (ce.length > 0)
              for (let we = 0, ye = me.length; we < ye; we++) {
                const Me = me[we];
                La(he, ce, g, Me);
              }
            De && ie.render(g);
            for (let we = 0, ye = me.length; we < ye; we++) {
              const Me = me[we];
              Pa(M, g, Me, Me.viewport);
            }
          } else
            (ce.length > 0 && La(he, ce, g, D),
              De && ie.render(g),
              Pa(M, g, D));
        }
        (B !== null &&
          z === 0 &&
          (L.updateMultisampleRenderTarget(B), L.updateRenderTargetMipmap(B)),
          F && N.end(x),
          g.isScene === !0 && g.onAfterRender(x, g, D),
          de.resetDefaultState(),
          (W = -1),
          (Y = null),
          R.pop(),
          R.length > 0
            ? ((E = R[R.length - 1]),
              be === !0 && _e.setGlobalState(x.clippingPlanes, E.state.camera))
            : (E = null),
          T.pop(),
          T.length > 0 ? (M = T[T.length - 1]) : (M = null));
      }));
    function Rr(g, D, O, F) {
      if (g.visible === !1) return;
      if (g.layers.test(D.layers)) {
        if (g.isGroup) O = g.renderOrder;
        else if (g.isLOD) g.autoUpdate === !0 && g.update(D);
        else if (g.isLight) (E.pushLight(g), g.castShadow && E.pushShadow(g));
        else if (g.isSprite) {
          if (!g.frustumCulled || Re.intersectsSprite(g)) {
            F && qe.setFromMatrixPosition(g.matrixWorld).applyMatrix4(pt);
            const he = ne.update(g),
              ce = g.material;
            ce.visible && M.push(g, he, ce, O, qe.z, null);
          }
        } else if (
          (g.isMesh || g.isLine || g.isPoints) &&
          (!g.frustumCulled || Re.intersectsObject(g))
        ) {
          const he = ne.update(g),
            ce = g.material;
          if (
            (F &&
              (g.boundingSphere !== void 0
                ? (g.boundingSphere === null && g.computeBoundingSphere(),
                  qe.copy(g.boundingSphere.center))
                : (he.boundingSphere === null && he.computeBoundingSphere(),
                  qe.copy(he.boundingSphere.center)),
              qe.applyMatrix4(g.matrixWorld).applyMatrix4(pt)),
            Array.isArray(ce))
          ) {
            const me = he.groups;
            for (let we = 0, ye = me.length; we < ye; we++) {
              const Me = me[we],
                Ne = ce[Me.materialIndex];
              Ne && Ne.visible && M.push(g, he, Ne, O, qe.z, Me);
            }
          } else ce.visible && M.push(g, he, ce, O, qe.z, null);
        }
      }
      const oe = g.children;
      for (let he = 0, ce = oe.length; he < ce; he++) Rr(oe[he], D, O, F);
    }
    function Pa(g, D, O, F) {
      const { opaque: I, transmissive: oe, transparent: he } = g;
      (E.setupLightsView(O),
        be === !0 && _e.setGlobalState(x.clippingPlanes, O),
        F && xe.viewport(V.copy(F)),
        I.length > 0 && zi(I, D, O),
        oe.length > 0 && zi(oe, D, O),
        he.length > 0 && zi(he, D, O),
        xe.buffers.depth.setTest(!0),
        xe.buffers.depth.setMask(!0),
        xe.buffers.color.setMask(!0),
        xe.setPolygonOffset(!1));
    }
    function La(g, D, O, F) {
      if ((O.isScene === !0 ? O.overrideMaterial : null) !== null) return;
      if (E.state.transmissionRenderTarget[F.id] === void 0) {
        const Ne =
          Xe.has("EXT_color_buffer_half_float") ||
          Xe.has("EXT_color_buffer_float");
        E.state.transmissionRenderTarget[F.id] = new tn(1, 1, {
          generateMipmaps: !0,
          type: Ne ? pn : It,
          minFilter: Nn,
          samples: et.samples,
          stencilBuffer: o,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: ze.workingColorSpace,
        });
      }
      const oe = E.state.transmissionRenderTarget[F.id],
        he = F.viewport || V;
      oe.setSize(
        he.z * x.transmissionResolutionScale,
        he.w * x.transmissionResolutionScale,
      );
      const ce = x.getRenderTarget(),
        me = x.getActiveCubeFace(),
        we = x.getActiveMipmapLevel();
      (x.setRenderTarget(oe),
        x.getClearColor(fe),
        (ae = x.getClearAlpha()),
        ae < 1 && x.setClearColor(16777215, 0.5),
        x.clear(),
        De && ie.render(O));
      const ye = x.toneMapping;
      x.toneMapping = en;
      const Me = F.viewport;
      if (
        (F.viewport !== void 0 && (F.viewport = void 0),
        E.setupLightsView(F),
        be === !0 && _e.setGlobalState(x.clippingPlanes, F),
        zi(g, O, F),
        L.updateMultisampleRenderTarget(oe),
        L.updateRenderTargetMipmap(oe),
        Xe.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let Ne = !1;
        for (let $e = 0, ot = D.length; $e < ot; $e++) {
          const at = D[$e],
            { object: Je, geometry: Se, material: je, group: Ge } = at;
          if (je.side === un && Je.layers.test(F.layers)) {
            const Ct = je.side;
            ((je.side = Rt),
              (je.needsUpdate = !0),
              Da(Je, O, F, Se, je, Ge),
              (je.side = Ct),
              (je.needsUpdate = !0),
              (Ne = !0));
          }
        }
        Ne === !0 &&
          (L.updateMultisampleRenderTarget(oe), L.updateRenderTargetMipmap(oe));
      }
      (x.setRenderTarget(ce, me, we),
        x.setClearColor(fe, ae),
        Me !== void 0 && (F.viewport = Me),
        (x.toneMapping = ye));
    }
    function zi(g, D, O) {
      const F = D.isScene === !0 ? D.overrideMaterial : null;
      for (let I = 0, oe = g.length; I < oe; I++) {
        const he = g[I],
          { object: ce, geometry: me, group: we } = he;
        let ye = he.material;
        (ye.allowOverride === !0 && F !== null && (ye = F),
          ce.layers.test(O.layers) && Da(ce, D, O, me, ye, we));
      }
    }
    function Da(g, D, O, F, I, oe) {
      (g.onBeforeRender(x, D, O, F, I, oe),
        g.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, g.matrixWorld),
        g.normalMatrix.getNormalMatrix(g.modelViewMatrix),
        I.onBeforeRender(x, D, O, F, g, oe),
        I.transparent === !0 && I.side === un && I.forceSinglePass === !1
          ? ((I.side = Rt),
            (I.needsUpdate = !0),
            x.renderBufferDirect(O, D, F, I, g, oe),
            (I.side = Sn),
            (I.needsUpdate = !0),
            x.renderBufferDirect(O, D, F, I, g, oe),
            (I.side = un))
          : x.renderBufferDirect(O, D, F, I, g, oe),
        g.onAfterRender(x, D, O, F, I, oe));
    }
    function Vi(g, D, O) {
      D.isScene !== !0 && (D = Ze);
      const F = _.get(g),
        I = E.state.lights,
        oe = E.state.shadowsArray,
        he = I.state.version,
        ce = ge.getParameters(g, I.state, oe, D, O),
        me = ge.getProgramCacheKey(ce);
      let we = F.programs;
      ((F.environment = g.isMeshStandardMaterial ? D.environment : null),
        (F.fog = D.fog),
        (F.envMap = (g.isMeshStandardMaterial ? K : X).get(
          g.envMap || F.environment,
        )),
        (F.envMapRotation =
          F.environment !== null && g.envMap === null
            ? D.environmentRotation
            : g.envMapRotation),
        we === void 0 &&
          (g.addEventListener("dispose", Kt),
          (we = new Map()),
          (F.programs = we)));
      let ye = we.get(me);
      if (ye !== void 0) {
        if (F.currentProgram === ye && F.lightsStateVersion === he)
          return (Ua(g, ce), ye);
      } else
        ((ce.uniforms = ge.getUniforms(g)),
          g.onBeforeCompile(ce, x),
          (ye = ge.acquireProgram(ce, me)),
          we.set(me, ye),
          (F.uniforms = ce.uniforms));
      const Me = F.uniforms;
      return (
        ((!g.isShaderMaterial && !g.isRawShaderMaterial) ||
          g.clipping === !0) &&
          (Me.clippingPlanes = _e.uniform),
        Ua(g, ce),
        (F.needsLights = Hc(g)),
        (F.lightsStateVersion = he),
        F.needsLights &&
          ((Me.ambientLightColor.value = I.state.ambient),
          (Me.lightProbe.value = I.state.probe),
          (Me.directionalLights.value = I.state.directional),
          (Me.directionalLightShadows.value = I.state.directionalShadow),
          (Me.spotLights.value = I.state.spot),
          (Me.spotLightShadows.value = I.state.spotShadow),
          (Me.rectAreaLights.value = I.state.rectArea),
          (Me.ltc_1.value = I.state.rectAreaLTC1),
          (Me.ltc_2.value = I.state.rectAreaLTC2),
          (Me.pointLights.value = I.state.point),
          (Me.pointLightShadows.value = I.state.pointShadow),
          (Me.hemisphereLights.value = I.state.hemi),
          (Me.directionalShadowMap.value = I.state.directionalShadowMap),
          (Me.directionalShadowMatrix.value = I.state.directionalShadowMatrix),
          (Me.spotShadowMap.value = I.state.spotShadowMap),
          (Me.spotLightMatrix.value = I.state.spotLightMatrix),
          (Me.spotLightMap.value = I.state.spotLightMap),
          (Me.pointShadowMap.value = I.state.pointShadowMap),
          (Me.pointShadowMatrix.value = I.state.pointShadowMatrix)),
        (F.currentProgram = ye),
        (F.uniformsList = null),
        ye
      );
    }
    function Ia(g) {
      if (g.uniformsList === null) {
        const D = g.currentProgram.getUniforms();
        g.uniformsList = br.seqWithValue(D.seq, g.uniforms);
      }
      return g.uniformsList;
    }
    function Ua(g, D) {
      const O = _.get(g);
      ((O.outputColorSpace = D.outputColorSpace),
        (O.batching = D.batching),
        (O.batchingColor = D.batchingColor),
        (O.instancing = D.instancing),
        (O.instancingColor = D.instancingColor),
        (O.instancingMorph = D.instancingMorph),
        (O.skinning = D.skinning),
        (O.morphTargets = D.morphTargets),
        (O.morphNormals = D.morphNormals),
        (O.morphColors = D.morphColors),
        (O.morphTargetsCount = D.morphTargetsCount),
        (O.numClippingPlanes = D.numClippingPlanes),
        (O.numIntersection = D.numClipIntersection),
        (O.vertexAlphas = D.vertexAlphas),
        (O.vertexTangents = D.vertexTangents),
        (O.toneMapping = D.toneMapping));
    }
    function Vc(g, D, O, F, I) {
      (D.isScene !== !0 && (D = Ze), L.resetTextureUnits());
      const oe = D.fog,
        he = F.isMeshStandardMaterial ? D.environment : null,
        ce =
          B === null
            ? x.outputColorSpace
            : B.isXRRenderTarget === !0
              ? B.texture.colorSpace
              : hi,
        me = (F.isMeshStandardMaterial ? K : X).get(F.envMap || he),
        we =
          F.vertexColors === !0 &&
          !!O.attributes.color &&
          O.attributes.color.itemSize === 4,
        ye = !!O.attributes.tangent && (!!F.normalMap || F.anisotropy > 0),
        Me = !!O.morphAttributes.position,
        Ne = !!O.morphAttributes.normal,
        $e = !!O.morphAttributes.color;
      let ot = en;
      F.toneMapped &&
        (B === null || B.isXRRenderTarget === !0) &&
        (ot = x.toneMapping);
      const at =
          O.morphAttributes.position ||
          O.morphAttributes.normal ||
          O.morphAttributes.color,
        Je = at !== void 0 ? at.length : 0,
        Se = _.get(F),
        je = E.state.lights;
      if (be === !0 && (Ve === !0 || g !== Y)) {
        const vt = g === Y && F.id === W;
        _e.setState(F, g, vt);
      }
      let Ge = !1;
      F.version === Se.__version
        ? ((Se.needsLights && Se.lightsStateVersion !== je.state.version) ||
            Se.outputColorSpace !== ce ||
            (I.isBatchedMesh && Se.batching === !1) ||
            (!I.isBatchedMesh && Se.batching === !0) ||
            (I.isBatchedMesh &&
              Se.batchingColor === !0 &&
              I.colorTexture === null) ||
            (I.isBatchedMesh &&
              Se.batchingColor === !1 &&
              I.colorTexture !== null) ||
            (I.isInstancedMesh && Se.instancing === !1) ||
            (!I.isInstancedMesh && Se.instancing === !0) ||
            (I.isSkinnedMesh && Se.skinning === !1) ||
            (!I.isSkinnedMesh && Se.skinning === !0) ||
            (I.isInstancedMesh &&
              Se.instancingColor === !0 &&
              I.instanceColor === null) ||
            (I.isInstancedMesh &&
              Se.instancingColor === !1 &&
              I.instanceColor !== null) ||
            (I.isInstancedMesh &&
              Se.instancingMorph === !0 &&
              I.morphTexture === null) ||
            (I.isInstancedMesh &&
              Se.instancingMorph === !1 &&
              I.morphTexture !== null) ||
            Se.envMap !== me ||
            (F.fog === !0 && Se.fog !== oe) ||
            (Se.numClippingPlanes !== void 0 &&
              (Se.numClippingPlanes !== _e.numPlanes ||
                Se.numIntersection !== _e.numIntersection)) ||
            Se.vertexAlphas !== we ||
            Se.vertexTangents !== ye ||
            Se.morphTargets !== Me ||
            Se.morphNormals !== Ne ||
            Se.morphColors !== $e ||
            Se.toneMapping !== ot ||
            Se.morphTargetsCount !== Je) &&
          (Ge = !0)
        : ((Ge = !0), (Se.__version = F.version));
      let Ct = Se.currentProgram;
      Ge === !0 && (Ct = Vi(F, D, I));
      let Hn = !1,
        Pt = !1,
        gi = !1;
      const nt = Ct.getUniforms(),
        yt = Se.uniforms;
      if (
        (xe.useProgram(Ct.program) && ((Hn = !0), (Pt = !0), (gi = !0)),
        F.id !== W && ((W = F.id), (Pt = !0)),
        Hn || Y !== g)
      ) {
        (xe.buffers.depth.getReversed() &&
          g.reversedDepth !== !0 &&
          ((g._reversedDepth = !0), g.updateProjectionMatrix()),
          nt.setValue(A, "projectionMatrix", g.projectionMatrix),
          nt.setValue(A, "viewMatrix", g.matrixWorldInverse));
        const Et = nt.map.cameraPosition;
        (Et !== void 0 &&
          Et.setValue(A, Be.setFromMatrixPosition(g.matrixWorld)),
          et.logarithmicDepthBuffer &&
            nt.setValue(
              A,
              "logDepthBufFC",
              2 / (Math.log(g.far + 1) / Math.LN2),
            ),
          (F.isMeshPhongMaterial ||
            F.isMeshToonMaterial ||
            F.isMeshLambertMaterial ||
            F.isMeshBasicMaterial ||
            F.isMeshStandardMaterial ||
            F.isShaderMaterial) &&
            nt.setValue(A, "isOrthographic", g.isOrthographicCamera === !0),
          Y !== g && ((Y = g), (Pt = !0), (gi = !0)));
      }
      if (
        (Se.needsLights &&
          (je.state.directionalShadowMap.length > 0 &&
            nt.setValue(
              A,
              "directionalShadowMap",
              je.state.directionalShadowMap,
              L,
            ),
          je.state.spotShadowMap.length > 0 &&
            nt.setValue(A, "spotShadowMap", je.state.spotShadowMap, L),
          je.state.pointShadowMap.length > 0 &&
            nt.setValue(A, "pointShadowMap", je.state.pointShadowMap, L)),
        I.isSkinnedMesh)
      ) {
        (nt.setOptional(A, I, "bindMatrix"),
          nt.setOptional(A, I, "bindMatrixInverse"));
        const vt = I.skeleton;
        vt &&
          (vt.boneTexture === null && vt.computeBoneTexture(),
          nt.setValue(A, "boneTexture", vt.boneTexture, L));
      }
      I.isBatchedMesh &&
        (nt.setOptional(A, I, "batchingTexture"),
        nt.setValue(A, "batchingTexture", I._matricesTexture, L),
        nt.setOptional(A, I, "batchingIdTexture"),
        nt.setValue(A, "batchingIdTexture", I._indirectTexture, L),
        nt.setOptional(A, I, "batchingColorTexture"),
        I._colorsTexture !== null &&
          nt.setValue(A, "batchingColorTexture", I._colorsTexture, L));
      const Nt = O.morphAttributes;
      if (
        ((Nt.position !== void 0 ||
          Nt.normal !== void 0 ||
          Nt.color !== void 0) &&
          Ie.update(I, O, Ct),
        (Pt || Se.receiveShadow !== I.receiveShadow) &&
          ((Se.receiveShadow = I.receiveShadow),
          nt.setValue(A, "receiveShadow", I.receiveShadow)),
        F.isMeshGouraudMaterial &&
          F.envMap !== null &&
          ((yt.envMap.value = me),
          (yt.flipEnvMap.value =
            me.isCubeTexture && me.isRenderTargetTexture === !1 ? -1 : 1)),
        F.isMeshStandardMaterial &&
          F.envMap === null &&
          D.environment !== null &&
          (yt.envMapIntensity.value = D.environmentIntensity),
        yt.dfgLUT !== void 0 && (yt.dfgLUT.value = km()),
        Pt &&
          (nt.setValue(A, "toneMappingExposure", x.toneMappingExposure),
          Se.needsLights && Gc(yt, gi),
          oe && F.fog === !0 && Ee.refreshFogUniforms(yt, oe),
          Ee.refreshMaterialUniforms(
            yt,
            F,
            Le,
            Ue,
            E.state.transmissionRenderTarget[g.id],
          ),
          br.upload(A, Ia(Se), yt, L)),
        F.isShaderMaterial &&
          F.uniformsNeedUpdate === !0 &&
          (br.upload(A, Ia(Se), yt, L), (F.uniformsNeedUpdate = !1)),
        F.isSpriteMaterial && nt.setValue(A, "center", I.center),
        nt.setValue(A, "modelViewMatrix", I.modelViewMatrix),
        nt.setValue(A, "normalMatrix", I.normalMatrix),
        nt.setValue(A, "modelMatrix", I.matrixWorld),
        F.isShaderMaterial || F.isRawShaderMaterial)
      ) {
        const vt = F.uniformsGroups;
        for (let Et = 0, Cr = vt.length; Et < Cr; Et++) {
          const En = vt[Et];
          (J.update(En, Ct), J.bind(En, Ct));
        }
      }
      return Ct;
    }
    function Gc(g, D) {
      ((g.ambientLightColor.needsUpdate = D),
        (g.lightProbe.needsUpdate = D),
        (g.directionalLights.needsUpdate = D),
        (g.directionalLightShadows.needsUpdate = D),
        (g.pointLights.needsUpdate = D),
        (g.pointLightShadows.needsUpdate = D),
        (g.spotLights.needsUpdate = D),
        (g.spotLightShadows.needsUpdate = D),
        (g.rectAreaLights.needsUpdate = D),
        (g.hemisphereLights.needsUpdate = D));
    }
    function Hc(g) {
      return (
        g.isMeshLambertMaterial ||
        g.isMeshToonMaterial ||
        g.isMeshPhongMaterial ||
        g.isMeshStandardMaterial ||
        g.isShadowMaterial ||
        (g.isShaderMaterial && g.lights === !0)
      );
    }
    ((this.getActiveCubeFace = function () {
      return P;
    }),
      (this.getActiveMipmapLevel = function () {
        return z;
      }),
      (this.getRenderTarget = function () {
        return B;
      }),
      (this.setRenderTargetTextures = function (g, D, O) {
        const F = _.get(g);
        ((F.__autoAllocateDepthBuffer = g.resolveDepthBuffer === !1),
          F.__autoAllocateDepthBuffer === !1 && (F.__useRenderToTexture = !1),
          (_.get(g.texture).__webglTexture = D),
          (_.get(g.depthTexture).__webglTexture = F.__autoAllocateDepthBuffer
            ? void 0
            : O),
          (F.__hasExternalTextures = !0));
      }),
      (this.setRenderTargetFramebuffer = function (g, D) {
        const O = _.get(g);
        ((O.__webglFramebuffer = D),
          (O.__useDefaultFramebuffer = D === void 0));
      }));
    const Wc = A.createFramebuffer();
    ((this.setRenderTarget = function (g, D = 0, O = 0) {
      ((B = g), (P = D), (z = O));
      let F = null,
        I = !1,
        oe = !1;
      if (g) {
        const ce = _.get(g);
        if (ce.__useDefaultFramebuffer !== void 0) {
          (xe.bindFramebuffer(A.FRAMEBUFFER, ce.__webglFramebuffer),
            V.copy(g.viewport),
            H.copy(g.scissor),
            ($ = g.scissorTest),
            xe.viewport(V),
            xe.scissor(H),
            xe.setScissorTest($),
            (W = -1));
          return;
        } else if (ce.__webglFramebuffer === void 0) L.setupRenderTarget(g);
        else if (ce.__hasExternalTextures)
          L.rebindTextures(
            g,
            _.get(g.texture).__webglTexture,
            _.get(g.depthTexture).__webglTexture,
          );
        else if (g.depthBuffer) {
          const ye = g.depthTexture;
          if (ce.__boundDepthTexture !== ye) {
            if (
              ye !== null &&
              _.has(ye) &&
              (g.width !== ye.image.width || g.height !== ye.image.height)
            )
              throw new Error(
                "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.",
              );
            L.setupDepthRenderbuffer(g);
          }
        }
        const me = g.texture;
        (me.isData3DTexture ||
          me.isDataArrayTexture ||
          me.isCompressedArrayTexture) &&
          (oe = !0);
        const we = _.get(g).__webglFramebuffer;
        (g.isWebGLCubeRenderTarget
          ? (Array.isArray(we[D]) ? (F = we[D][O]) : (F = we[D]), (I = !0))
          : g.samples > 0 && L.useMultisampledRTT(g) === !1
            ? (F = _.get(g).__webglMultisampledFramebuffer)
            : Array.isArray(we)
              ? (F = we[O])
              : (F = we),
          V.copy(g.viewport),
          H.copy(g.scissor),
          ($ = g.scissorTest));
      } else
        (V.copy(q).multiplyScalar(Le).floor(),
          H.copy(Z).multiplyScalar(Le).floor(),
          ($ = pe));
      if (
        (O !== 0 && (F = Wc),
        xe.bindFramebuffer(A.FRAMEBUFFER, F) && xe.drawBuffers(g, F),
        xe.viewport(V),
        xe.scissor(H),
        xe.setScissorTest($),
        I)
      ) {
        const ce = _.get(g.texture);
        A.framebufferTexture2D(
          A.FRAMEBUFFER,
          A.COLOR_ATTACHMENT0,
          A.TEXTURE_CUBE_MAP_POSITIVE_X + D,
          ce.__webglTexture,
          O,
        );
      } else if (oe) {
        const ce = D;
        for (let me = 0; me < g.textures.length; me++) {
          const we = _.get(g.textures[me]);
          A.framebufferTextureLayer(
            A.FRAMEBUFFER,
            A.COLOR_ATTACHMENT0 + me,
            we.__webglTexture,
            O,
            ce,
          );
        }
      } else if (g !== null && O !== 0) {
        const ce = _.get(g.texture);
        A.framebufferTexture2D(
          A.FRAMEBUFFER,
          A.COLOR_ATTACHMENT0,
          A.TEXTURE_2D,
          ce.__webglTexture,
          O,
        );
      }
      W = -1;
    }),
      (this.readRenderTargetPixels = function (g, D, O, F, I, oe, he, ce = 0) {
        if (!(g && g.isWebGLRenderTarget)) {
          He(
            "WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let me = _.get(g).__webglFramebuffer;
        if ((g.isWebGLCubeRenderTarget && he !== void 0 && (me = me[he]), me)) {
          xe.bindFramebuffer(A.FRAMEBUFFER, me);
          try {
            const we = g.textures[ce],
              ye = we.format,
              Me = we.type;
            if (!et.textureFormatReadable(ye)) {
              He(
                "WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            if (!et.textureTypeReadable(Me)) {
              He(
                "WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            D >= 0 &&
              D <= g.width - F &&
              O >= 0 &&
              O <= g.height - I &&
              (g.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + ce),
              A.readPixels(D, O, F, I, ee.convert(ye), ee.convert(Me), oe));
          } finally {
            const we = B !== null ? _.get(B).__webglFramebuffer : null;
            xe.bindFramebuffer(A.FRAMEBUFFER, we);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        g,
        D,
        O,
        F,
        I,
        oe,
        he,
        ce = 0,
      ) {
        if (!(g && g.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
        let me = _.get(g).__webglFramebuffer;
        if ((g.isWebGLCubeRenderTarget && he !== void 0 && (me = me[he]), me))
          if (D >= 0 && D <= g.width - F && O >= 0 && O <= g.height - I) {
            xe.bindFramebuffer(A.FRAMEBUFFER, me);
            const we = g.textures[ce],
              ye = we.format,
              Me = we.type;
            if (!et.textureFormatReadable(ye))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.",
              );
            if (!et.textureTypeReadable(Me))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
            const Ne = A.createBuffer();
            (A.bindBuffer(A.PIXEL_PACK_BUFFER, Ne),
              A.bufferData(A.PIXEL_PACK_BUFFER, oe.byteLength, A.STREAM_READ),
              g.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + ce),
              A.readPixels(D, O, F, I, ee.convert(ye), ee.convert(Me), 0));
            const $e = B !== null ? _.get(B).__webglFramebuffer : null;
            xe.bindFramebuffer(A.FRAMEBUFFER, $e);
            const ot = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              A.flush(),
              await Ll(A, ot, 4),
              A.bindBuffer(A.PIXEL_PACK_BUFFER, Ne),
              A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, oe),
              A.deleteBuffer(Ne),
              A.deleteSync(ot),
              oe
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.",
            );
      }),
      (this.copyFramebufferToTexture = function (g, D = null, O = 0) {
        const F = Math.pow(2, -O),
          I = Math.floor(g.image.width * F),
          oe = Math.floor(g.image.height * F),
          he = D !== null ? D.x : 0,
          ce = D !== null ? D.y : 0;
        (L.setTexture2D(g, 0),
          A.copyTexSubImage2D(A.TEXTURE_2D, O, 0, 0, he, ce, I, oe),
          xe.unbindTexture());
      }));
    const Xc = A.createFramebuffer(),
      qc = A.createFramebuffer();
    ((this.copyTextureToTexture = function (
      g,
      D,
      O = null,
      F = null,
      I = 0,
      oe = null,
    ) {
      oe === null &&
        (I !== 0
          ? (Ni(
              "WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.",
            ),
            (oe = I),
            (I = 0))
          : (oe = 0));
      let he, ce, me, we, ye, Me, Ne, $e, ot;
      const at = g.isCompressedTexture ? g.mipmaps[oe] : g.image;
      if (O !== null)
        ((he = O.max.x - O.min.x),
          (ce = O.max.y - O.min.y),
          (me = O.isBox3 ? O.max.z - O.min.z : 1),
          (we = O.min.x),
          (ye = O.min.y),
          (Me = O.isBox3 ? O.min.z : 0));
      else {
        const Nt = Math.pow(2, -I);
        ((he = Math.floor(at.width * Nt)),
          (ce = Math.floor(at.height * Nt)),
          g.isDataArrayTexture
            ? (me = at.depth)
            : g.isData3DTexture
              ? (me = Math.floor(at.depth * Nt))
              : (me = 1),
          (we = 0),
          (ye = 0),
          (Me = 0));
      }
      F !== null
        ? ((Ne = F.x), ($e = F.y), (ot = F.z))
        : ((Ne = 0), ($e = 0), (ot = 0));
      const Je = ee.convert(D.format),
        Se = ee.convert(D.type);
      let je;
      (D.isData3DTexture
        ? (L.setTexture3D(D, 0), (je = A.TEXTURE_3D))
        : D.isDataArrayTexture || D.isCompressedArrayTexture
          ? (L.setTexture2DArray(D, 0), (je = A.TEXTURE_2D_ARRAY))
          : (L.setTexture2D(D, 0), (je = A.TEXTURE_2D)),
        A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, D.flipY),
        A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha),
        A.pixelStorei(A.UNPACK_ALIGNMENT, D.unpackAlignment));
      const Ge = A.getParameter(A.UNPACK_ROW_LENGTH),
        Ct = A.getParameter(A.UNPACK_IMAGE_HEIGHT),
        Hn = A.getParameter(A.UNPACK_SKIP_PIXELS),
        Pt = A.getParameter(A.UNPACK_SKIP_ROWS),
        gi = A.getParameter(A.UNPACK_SKIP_IMAGES);
      (A.pixelStorei(A.UNPACK_ROW_LENGTH, at.width),
        A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, at.height),
        A.pixelStorei(A.UNPACK_SKIP_PIXELS, we),
        A.pixelStorei(A.UNPACK_SKIP_ROWS, ye),
        A.pixelStorei(A.UNPACK_SKIP_IMAGES, Me));
      const nt = g.isDataArrayTexture || g.isData3DTexture,
        yt = D.isDataArrayTexture || D.isData3DTexture;
      if (g.isDepthTexture) {
        const Nt = _.get(g),
          vt = _.get(D),
          Et = _.get(Nt.__renderTarget),
          Cr = _.get(vt.__renderTarget);
        (xe.bindFramebuffer(A.READ_FRAMEBUFFER, Et.__webglFramebuffer),
          xe.bindFramebuffer(A.DRAW_FRAMEBUFFER, Cr.__webglFramebuffer));
        for (let En = 0; En < me; En++)
          (nt &&
            (A.framebufferTextureLayer(
              A.READ_FRAMEBUFFER,
              A.COLOR_ATTACHMENT0,
              _.get(g).__webglTexture,
              I,
              Me + En,
            ),
            A.framebufferTextureLayer(
              A.DRAW_FRAMEBUFFER,
              A.COLOR_ATTACHMENT0,
              _.get(D).__webglTexture,
              oe,
              ot + En,
            )),
            A.blitFramebuffer(
              we,
              ye,
              he,
              ce,
              Ne,
              $e,
              he,
              ce,
              A.DEPTH_BUFFER_BIT,
              A.NEAREST,
            ));
        (xe.bindFramebuffer(A.READ_FRAMEBUFFER, null),
          xe.bindFramebuffer(A.DRAW_FRAMEBUFFER, null));
      } else if (I !== 0 || g.isRenderTargetTexture || _.has(g)) {
        const Nt = _.get(g),
          vt = _.get(D);
        (xe.bindFramebuffer(A.READ_FRAMEBUFFER, Xc),
          xe.bindFramebuffer(A.DRAW_FRAMEBUFFER, qc));
        for (let Et = 0; Et < me; Et++)
          (nt
            ? A.framebufferTextureLayer(
                A.READ_FRAMEBUFFER,
                A.COLOR_ATTACHMENT0,
                Nt.__webglTexture,
                I,
                Me + Et,
              )
            : A.framebufferTexture2D(
                A.READ_FRAMEBUFFER,
                A.COLOR_ATTACHMENT0,
                A.TEXTURE_2D,
                Nt.__webglTexture,
                I,
              ),
            yt
              ? A.framebufferTextureLayer(
                  A.DRAW_FRAMEBUFFER,
                  A.COLOR_ATTACHMENT0,
                  vt.__webglTexture,
                  oe,
                  ot + Et,
                )
              : A.framebufferTexture2D(
                  A.DRAW_FRAMEBUFFER,
                  A.COLOR_ATTACHMENT0,
                  A.TEXTURE_2D,
                  vt.__webglTexture,
                  oe,
                ),
            I !== 0
              ? A.blitFramebuffer(
                  we,
                  ye,
                  he,
                  ce,
                  Ne,
                  $e,
                  he,
                  ce,
                  A.COLOR_BUFFER_BIT,
                  A.NEAREST,
                )
              : yt
                ? A.copyTexSubImage3D(je, oe, Ne, $e, ot + Et, we, ye, he, ce)
                : A.copyTexSubImage2D(je, oe, Ne, $e, we, ye, he, ce));
        (xe.bindFramebuffer(A.READ_FRAMEBUFFER, null),
          xe.bindFramebuffer(A.DRAW_FRAMEBUFFER, null));
      } else
        yt
          ? g.isDataTexture || g.isData3DTexture
            ? A.texSubImage3D(je, oe, Ne, $e, ot, he, ce, me, Je, Se, at.data)
            : D.isCompressedArrayTexture
              ? A.compressedTexSubImage3D(
                  je,
                  oe,
                  Ne,
                  $e,
                  ot,
                  he,
                  ce,
                  me,
                  Je,
                  at.data,
                )
              : A.texSubImage3D(je, oe, Ne, $e, ot, he, ce, me, Je, Se, at)
          : g.isDataTexture
            ? A.texSubImage2D(A.TEXTURE_2D, oe, Ne, $e, he, ce, Je, Se, at.data)
            : g.isCompressedTexture
              ? A.compressedTexSubImage2D(
                  A.TEXTURE_2D,
                  oe,
                  Ne,
                  $e,
                  at.width,
                  at.height,
                  Je,
                  at.data,
                )
              : A.texSubImage2D(A.TEXTURE_2D, oe, Ne, $e, he, ce, Je, Se, at);
      (A.pixelStorei(A.UNPACK_ROW_LENGTH, Ge),
        A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, Ct),
        A.pixelStorei(A.UNPACK_SKIP_PIXELS, Hn),
        A.pixelStorei(A.UNPACK_SKIP_ROWS, Pt),
        A.pixelStorei(A.UNPACK_SKIP_IMAGES, gi),
        oe === 0 && D.generateMipmaps && A.generateMipmap(je),
        xe.unbindTexture());
    }),
      (this.initRenderTarget = function (g) {
        _.get(g).__webglFramebuffer === void 0 && L.setupRenderTarget(g);
      }),
      (this.initTexture = function (g) {
        (g.isCubeTexture
          ? L.setTextureCube(g, 0)
          : g.isData3DTexture
            ? L.setTexture3D(g, 0)
            : g.isDataArrayTexture || g.isCompressedArrayTexture
              ? L.setTexture2DArray(g, 0)
              : L.setTexture2D(g, 0),
          xe.unbindTexture());
      }),
      (this.resetState = function () {
        ((P = 0), (z = 0), (B = null), xe.reset(), de.reset());
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  get coordinateSystem() {
    return Jt;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    ((t.drawingBufferColorSpace = ze._getDrawingBufferColorSpace(e)),
      (t.unpackColorSpace = ze._getUnpackColorSpace()));
  }
}
const ai = new jt(0, 0, 0, "YXZ"),
  si = new U(),
  vm = { type: "change" },
  wm = { type: "lock" },
  Mm = { type: "unlock" },
  zs = 0.002,
  Vs = Math.PI / 2;
class Sm extends yf {
  constructor(e, t = null) {
    (super(e, t),
      (this.isLocked = !1),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.pointerSpeed = 1),
      (this._onMouseMove = ym.bind(this)),
      (this._onPointerlockChange = Em.bind(this)),
      (this._onPointerlockError = Tm.bind(this)),
      this.domElement !== null && this.connect(this.domElement));
  }
  connect(e) {
    (super.connect(e),
      this.domElement.ownerDocument.addEventListener(
        "mousemove",
        this._onMouseMove,
      ),
      this.domElement.ownerDocument.addEventListener(
        "pointerlockchange",
        this._onPointerlockChange,
      ),
      this.domElement.ownerDocument.addEventListener(
        "pointerlockerror",
        this._onPointerlockError,
      ));
  }
  disconnect() {
    (this.domElement.ownerDocument.removeEventListener(
      "mousemove",
      this._onMouseMove,
    ),
      this.domElement.ownerDocument.removeEventListener(
        "pointerlockchange",
        this._onPointerlockChange,
      ),
      this.domElement.ownerDocument.removeEventListener(
        "pointerlockerror",
        this._onPointerlockError,
      ));
  }
  dispose() {
    this.disconnect();
  }
  getDirection(e) {
    return e.set(0, 0, -1).applyQuaternion(this.object.quaternion);
  }
  moveForward(e) {
    if (this.enabled === !1) return;
    const t = this.object;
    (si.setFromMatrixColumn(t.matrix, 0),
      si.crossVectors(t.up, si),
      t.position.addScaledVector(si, e));
  }
  moveRight(e) {
    if (this.enabled === !1) return;
    const t = this.object;
    (si.setFromMatrixColumn(t.matrix, 0), t.position.addScaledVector(si, e));
  }
  lock(e = !1) {
    this.domElement.requestPointerLock({ unadjustedMovement: e });
  }
  unlock() {
    this.domElement.ownerDocument.exitPointerLock();
  }
}
function ym(i) {
  if (this.enabled === !1 || this.isLocked === !1) return;
  const e = this.object;
  (ai.setFromQuaternion(e.quaternion),
    (ai.y -= i.movementX * zs * this.pointerSpeed),
    (ai.x -= i.movementY * zs * this.pointerSpeed),
    (ai.x = Math.max(
      Vs - this.maxPolarAngle,
      Math.min(Vs - this.minPolarAngle, ai.x),
    )),
    e.quaternion.setFromEuler(ai),
    this.dispatchEvent(vm));
}
function Em() {
  this.domElement.ownerDocument.pointerLockElement === this.domElement
    ? (this.dispatchEvent(wm), (this.isLocked = !0))
    : (this.dispatchEvent(Mm), (this.isLocked = !1));
}
function Tm() {
  console.error("THREE.PointerLockControls: Unable to use Pointer Lock API");
}
function Am(i, e) {
  i.fromArray(e);
}
function Rm(i = {}) {
  const {
      backgroundColor: e = 8433151,
      axesHelper: t = {},
      grid: n = {},
      camera: r = {},
      ambientLight: o = {},
      renderer: a = {},
    } = i,
    { enabled: s = !0, size: c = 100 } = t,
    {
      enabled: l = !0,
      size: f = At.BLOCK_SIZE * At.WORLD_SIZE_BLOCKS,
      divisions: u = At.BLOCK_SIZE * At.WORLD_SIZE_BLOCKS,
    } = n,
    {
      fov: h = 70,
      aspect: p = 1,
      near: b = 1,
      far: k = 100,
      position: m = At.PLAYER_STARTING_POSITION,
      lookAt: d = [0, 0, 0],
    } = r,
    { enabled: y = !0, color: S = 16777215, intensity: M = 1 } = o,
    { antialias: E = !0, pixelRatio: T = window.devicePixelRatio } = a,
    R = new kc();
  (s && R.add(new Sf(c)), (R.background = new Fe(e)));
  const N = new Pc({ antialias: E });
  (N.setPixelRatio(T), l && R.add(new Mf(f, u)));
  const x = new Ot(h, p, b, k);
  (Am(x.position, m),
    x.lookAt(d[0], d[1], d[2]),
    R.add(x),
    y && R.add(new vf(S, M)));
  const v = new Sm(x, N.domElement);
  return { scene: R, renderer: N, camera: x, pointerControls: v };
}
class Cm {
  keyMap;
  keyStore;
  constructor(e, t) {
    ((this.keyMap = e), (this.keyStore = t));
  }
  isPressed(e) {
    const t = this.keyMap.getKey(e);
    return typeof t == "string" ? this.keyStore.hasPressedKey(t) : !1;
  }
}
class Pm {
  keys;
  constructor() {
    this.keys = new Map();
  }
  init(e) {
    Object.keys(e).forEach((t) => {
      this.keys.set(t, e[t]);
    });
  }
  setKey(e, t) {
    this.keys.set(e, t);
  }
  getKey(e) {
    return this.keys.get(e);
  }
}
class Lm {
  curPressedKeys;
  constructor() {
    this.curPressedKeys = new Set();
  }
  hasPressedKey(e) {
    return this.curPressedKeys.has(e);
  }
  addPressedKey(e) {
    this.curPressedKeys.add(e);
  }
  removePressedKey(e) {
    this.curPressedKeys.delete(e);
  }
  clear() {
    this.curPressedKeys.clear();
  }
}
class Dm {
  player;
  inputManager;
  camera;
  constructor(e, t, n) {
    ((this.player = e), (this.inputManager = t), (this.camera = n));
  }
}
class Im extends Dm {
  constructor(e, t, n) {
    super(e, t, n);
  }
  getDirection() {
    let e = 0,
      t = 0,
      n = 0;
    (this.inputManager.isPressed("UP") && (t += 1),
      this.inputManager.isPressed("DOWN") && (t -= 1),
      this.inputManager.isPressed("FORWARD") && (n += 1),
      this.inputManager.isPressed("BACKWARD") && (n -= 1),
      this.inputManager.isPressed("LEFT") && (e -= 1),
      this.inputManager.isPressed("RIGHT") && (e += 1));
    const r = new U();
    (this.camera.getWorldDirection(r), (r.y = 0), r.normalize());
    const o = new U();
    o.crossVectors(r, new U(0, 1, 0)).normalize();
    const a = new U();
    return (
      a.addScaledVector(r, n),
      a.addScaledVector(o, e),
      a.lengthSq() > 0 && a.normalize(),
      { dx: a.x, dy: t, dz: a.z }
    );
  }
  updatePlayer(e) {
    const { dx: t, dy: n, dz: r } = this.getDirection(),
      o = this.inputManager.isPressed("SPRINT") ? 1.5 : 1,
      a = new U(
        t * this.player.speed * o,
        n * this.player.speed * o,
        r * this.player.speed * o,
      );
    (this.player.move(a, 20, e),
      this.camera.position.copy(this.player.position));
  }
}
class Um {
  inputManager;
  playerController;
  constructor(e, t) {
    ((this.inputManager = e), (this.playerController = t));
  }
  animate(e, t, n, r) {}
}
class Nm extends Um {
  uiHandler;
  lastFrameTime;
  constructor(e, t, n) {
    (super(e, n), (this.uiHandler = t), (this.lastFrameTime = null));
  }
  worldUpdate(e) {
    this.playerController.updatePlayer(e);
  }
  animate(e, t, n, r) {
    const o = this.lastFrameTime === null ? 0 : (e - this.lastFrameTime) / 1e3;
    ((this.lastFrameTime = e),
      this.uiHandler.isUIOpen() || this.worldUpdate(o),
      t.render(n, r));
  }
}
const Fm = {
    textures: {
      down: "minecraft:block/acacia_log_top",
      up: "minecraft:block/acacia_log_top",
      north: "minecraft:block/acacia_log",
      south: "minecraft:block/acacia_log",
      west: "minecraft:block/acacia_log",
      east: "minecraft:block/acacia_log",
      particle: "minecraft:block/acacia_log",
    },
  },
  Om = {
    textures: {
      down: "minecraft:block/acacia_planks",
      up: "minecraft:block/acacia_planks",
      north: "minecraft:block/acacia_planks",
      south: "minecraft:block/acacia_planks",
      west: "minecraft:block/acacia_planks",
      east: "minecraft:block/acacia_planks",
      particle: "minecraft:block/acacia_planks",
    },
  },
  Bm = {
    textures: {
      down: "minecraft:block/acacia_log",
      up: "minecraft:block/acacia_log",
      north: "minecraft:block/acacia_log",
      south: "minecraft:block/acacia_log",
      west: "minecraft:block/acacia_log",
      east: "minecraft:block/acacia_log",
      particle: "minecraft:block/acacia_log",
    },
  },
  zm = {
    textures: {
      down: "minecraft:block/amethyst_block",
      up: "minecraft:block/amethyst_block",
      north: "minecraft:block/amethyst_block",
      south: "minecraft:block/amethyst_block",
      west: "minecraft:block/amethyst_block",
      east: "minecraft:block/amethyst_block",
      particle: "minecraft:block/amethyst_block",
    },
  },
  Vm = {
    textures: {
      down: "minecraft:block/ancient_debris_top",
      up: "minecraft:block/ancient_debris_top",
      north: "minecraft:block/ancient_debris_side",
      south: "minecraft:block/ancient_debris_side",
      west: "minecraft:block/ancient_debris_side",
      east: "minecraft:block/ancient_debris_side",
      particle: "minecraft:block/ancient_debris_side",
    },
  },
  Gm = {
    textures: {
      down: "minecraft:block/andesite",
      up: "minecraft:block/andesite",
      north: "minecraft:block/andesite",
      south: "minecraft:block/andesite",
      west: "minecraft:block/andesite",
      east: "minecraft:block/andesite",
      particle: "minecraft:block/andesite",
    },
  },
  Hm = {
    textures: {
      down: "minecraft:block/azalea_leaves",
      up: "minecraft:block/azalea_leaves",
      north: "minecraft:block/azalea_leaves",
      south: "minecraft:block/azalea_leaves",
      west: "minecraft:block/azalea_leaves",
      east: "minecraft:block/azalea_leaves",
      particle: "minecraft:block/azalea_leaves",
    },
  },
  Wm = {
    textures: {
      down: "minecraft:block/bamboo_block_top",
      up: "minecraft:block/bamboo_block_top",
      north: "minecraft:block/bamboo_block",
      south: "minecraft:block/bamboo_block",
      west: "minecraft:block/bamboo_block",
      east: "minecraft:block/bamboo_block",
      particle: "minecraft:block/bamboo_block",
    },
  },
  Xm = {
    textures: {
      down: "minecraft:block/bamboo_mosaic",
      up: "minecraft:block/bamboo_mosaic",
      north: "minecraft:block/bamboo_mosaic",
      south: "minecraft:block/bamboo_mosaic",
      west: "minecraft:block/bamboo_mosaic",
      east: "minecraft:block/bamboo_mosaic",
      particle: "minecraft:block/bamboo_mosaic",
    },
  },
  qm = {
    textures: {
      down: "minecraft:block/bamboo_planks",
      up: "minecraft:block/bamboo_planks",
      north: "minecraft:block/bamboo_planks",
      south: "minecraft:block/bamboo_planks",
      west: "minecraft:block/bamboo_planks",
      east: "minecraft:block/bamboo_planks",
      particle: "minecraft:block/bamboo_planks",
    },
  },
  Ym = {
    textures: {
      down: "minecraft:block/basalt_top",
      up: "minecraft:block/basalt_top",
      north: "minecraft:block/basalt_side",
      south: "minecraft:block/basalt_side",
      west: "minecraft:block/basalt_side",
      east: "minecraft:block/basalt_side",
      particle: "minecraft:block/basalt_side",
    },
  },
  jm = {
    textures: {
      down: "minecraft:block/bedrock",
      up: "minecraft:block/bedrock",
      north: "minecraft:block/bedrock",
      south: "minecraft:block/bedrock",
      west: "minecraft:block/bedrock",
      east: "minecraft:block/bedrock",
      particle: "minecraft:block/bedrock",
    },
  },
  Km = {
    textures: {
      down: "minecraft:block/birch_log_top",
      up: "minecraft:block/birch_log_top",
      north: "minecraft:block/birch_log",
      south: "minecraft:block/birch_log",
      west: "minecraft:block/birch_log",
      east: "minecraft:block/birch_log",
      particle: "minecraft:block/birch_log",
    },
  },
  $m = {
    textures: {
      down: "minecraft:block/birch_log_top",
      up: "minecraft:block/birch_log_top",
      north: "minecraft:block/birch_log",
      south: "minecraft:block/birch_log",
      west: "minecraft:block/birch_log",
      east: "minecraft:block/birch_log",
      particle: "minecraft:block/birch_log",
    },
  },
  Zm = {
    textures: {
      down: "minecraft:block/birch_planks",
      up: "minecraft:block/birch_planks",
      north: "minecraft:block/birch_planks",
      south: "minecraft:block/birch_planks",
      west: "minecraft:block/birch_planks",
      east: "minecraft:block/birch_planks",
      particle: "minecraft:block/birch_planks",
    },
  },
  Jm = {
    textures: {
      down: "minecraft:block/birch_log",
      up: "minecraft:block/birch_log",
      north: "minecraft:block/birch_log",
      south: "minecraft:block/birch_log",
      west: "minecraft:block/birch_log",
      east: "minecraft:block/birch_log",
      particle: "minecraft:block/birch_log",
    },
  },
  Qm = {
    textures: {
      down: "minecraft:block/blackstone_top",
      up: "minecraft:block/blackstone_top",
      north: "minecraft:block/blackstone",
      south: "minecraft:block/blackstone",
      west: "minecraft:block/blackstone",
      east: "minecraft:block/blackstone",
      particle: "minecraft:block/blackstone",
    },
  },
  e_ = {
    textures: {
      down: "minecraft:block/black_concrete",
      up: "minecraft:block/black_concrete",
      north: "minecraft:block/black_concrete",
      south: "minecraft:block/black_concrete",
      west: "minecraft:block/black_concrete",
      east: "minecraft:block/black_concrete",
      particle: "minecraft:block/black_concrete",
    },
  },
  t_ = {
    textures: {
      down: "minecraft:block/black_concrete_powder",
      up: "minecraft:block/black_concrete_powder",
      north: "minecraft:block/black_concrete_powder",
      south: "minecraft:block/black_concrete_powder",
      west: "minecraft:block/black_concrete_powder",
      east: "minecraft:block/black_concrete_powder",
      particle: "minecraft:block/black_concrete_powder",
    },
  },
  n_ = {
    textures: {
      down: "minecraft:block/black_stained_glass",
      up: "minecraft:block/black_stained_glass",
      north: "minecraft:block/black_stained_glass",
      south: "minecraft:block/black_stained_glass",
      west: "minecraft:block/black_stained_glass",
      east: "minecraft:block/black_stained_glass",
      particle: "minecraft:block/black_stained_glass",
    },
  },
  i_ = {
    textures: {
      down: "minecraft:block/black_terracotta",
      up: "minecraft:block/black_terracotta",
      north: "minecraft:block/black_terracotta",
      south: "minecraft:block/black_terracotta",
      west: "minecraft:block/black_terracotta",
      east: "minecraft:block/black_terracotta",
      particle: "minecraft:block/black_terracotta",
    },
  },
  r_ = {
    textures: {
      down: "minecraft:block/black_wool",
      up: "minecraft:block/black_wool",
      north: "minecraft:block/black_wool",
      south: "minecraft:block/black_wool",
      west: "minecraft:block/black_wool",
      east: "minecraft:block/black_wool",
      particle: "minecraft:block/black_wool",
    },
  },
  o_ = {
    textures: {
      down: "minecraft:block/blast_furnace_top",
      up: "minecraft:block/blast_furnace_top",
      north: "minecraft:block/blast_furnace_front",
      south: "minecraft:block/blast_furnace_side",
      west: "minecraft:block/blast_furnace_side",
      east: "minecraft:block/blast_furnace_side",
      particle: "minecraft:block/blast_furnace_front",
    },
  },
  a_ = {
    textures: {
      down: "minecraft:block/blast_furnace_top",
      up: "minecraft:block/blast_furnace_top",
      north: "minecraft:block/blast_furnace_front_on",
      south: "minecraft:block/blast_furnace_side",
      west: "minecraft:block/blast_furnace_side",
      east: "minecraft:block/blast_furnace_side",
      particle: "minecraft:block/blast_furnace_front_on",
    },
  },
  s_ = {
    textures: {
      down: "minecraft:block/blue_concrete",
      up: "minecraft:block/blue_concrete",
      north: "minecraft:block/blue_concrete",
      south: "minecraft:block/blue_concrete",
      west: "minecraft:block/blue_concrete",
      east: "minecraft:block/blue_concrete",
      particle: "minecraft:block/blue_concrete",
    },
  },
  c_ = {
    textures: {
      down: "minecraft:block/blue_concrete_powder",
      up: "minecraft:block/blue_concrete_powder",
      north: "minecraft:block/blue_concrete_powder",
      south: "minecraft:block/blue_concrete_powder",
      west: "minecraft:block/blue_concrete_powder",
      east: "minecraft:block/blue_concrete_powder",
      particle: "minecraft:block/blue_concrete_powder",
    },
  },
  l_ = {
    textures: {
      down: "minecraft:block/blue_ice",
      up: "minecraft:block/blue_ice",
      north: "minecraft:block/blue_ice",
      south: "minecraft:block/blue_ice",
      west: "minecraft:block/blue_ice",
      east: "minecraft:block/blue_ice",
      particle: "minecraft:block/blue_ice",
    },
  },
  f_ = {
    textures: {
      down: "minecraft:block/blue_stained_glass",
      up: "minecraft:block/blue_stained_glass",
      north: "minecraft:block/blue_stained_glass",
      south: "minecraft:block/blue_stained_glass",
      west: "minecraft:block/blue_stained_glass",
      east: "minecraft:block/blue_stained_glass",
      particle: "minecraft:block/blue_stained_glass",
    },
  },
  u_ = {
    textures: {
      down: "minecraft:block/blue_terracotta",
      up: "minecraft:block/blue_terracotta",
      north: "minecraft:block/blue_terracotta",
      south: "minecraft:block/blue_terracotta",
      west: "minecraft:block/blue_terracotta",
      east: "minecraft:block/blue_terracotta",
      particle: "minecraft:block/blue_terracotta",
    },
  },
  d_ = {
    textures: {
      down: "minecraft:block/blue_wool",
      up: "minecraft:block/blue_wool",
      north: "minecraft:block/blue_wool",
      south: "minecraft:block/blue_wool",
      west: "minecraft:block/blue_wool",
      east: "minecraft:block/blue_wool",
      particle: "minecraft:block/blue_wool",
    },
  },
  h_ = {
    textures: {
      down: "minecraft:block/bone_block_top",
      up: "minecraft:block/bone_block_top",
      north: "minecraft:block/bone_block_side",
      south: "minecraft:block/bone_block_side",
      west: "minecraft:block/bone_block_side",
      east: "minecraft:block/bone_block_side",
      particle: "minecraft:block/bone_block_side",
    },
  },
  p_ = {
    textures: {
      down: "minecraft:block/oak_planks",
      up: "minecraft:block/oak_planks",
      north: "minecraft:block/bookshelf",
      south: "minecraft:block/bookshelf",
      west: "minecraft:block/bookshelf",
      east: "minecraft:block/bookshelf",
      particle: "minecraft:block/bookshelf",
    },
  },
  m_ = {
    textures: {
      down: "minecraft:block/brain_coral_block",
      up: "minecraft:block/brain_coral_block",
      north: "minecraft:block/brain_coral_block",
      south: "minecraft:block/brain_coral_block",
      west: "minecraft:block/brain_coral_block",
      east: "minecraft:block/brain_coral_block",
      particle: "minecraft:block/brain_coral_block",
    },
  },
  __ = {
    textures: {
      down: "minecraft:block/bricks",
      up: "minecraft:block/bricks",
      north: "minecraft:block/bricks",
      south: "minecraft:block/bricks",
      west: "minecraft:block/bricks",
      east: "minecraft:block/bricks",
      particle: "minecraft:block/bricks",
    },
  },
  b_ = {
    textures: {
      down: "minecraft:block/brown_concrete",
      up: "minecraft:block/brown_concrete",
      north: "minecraft:block/brown_concrete",
      south: "minecraft:block/brown_concrete",
      west: "minecraft:block/brown_concrete",
      east: "minecraft:block/brown_concrete",
      particle: "minecraft:block/brown_concrete",
    },
  },
  g_ = {
    textures: {
      down: "minecraft:block/brown_concrete_powder",
      up: "minecraft:block/brown_concrete_powder",
      north: "minecraft:block/brown_concrete_powder",
      south: "minecraft:block/brown_concrete_powder",
      west: "minecraft:block/brown_concrete_powder",
      east: "minecraft:block/brown_concrete_powder",
      particle: "minecraft:block/brown_concrete_powder",
    },
  },
  x_ = {
    textures: {
      down: "minecraft:block/brown_mushroom_block",
      up: "minecraft:block/brown_mushroom_block",
      north: "minecraft:block/brown_mushroom_block",
      south: "minecraft:block/brown_mushroom_block",
      west: "minecraft:block/brown_mushroom_block",
      east: "minecraft:block/brown_mushroom_block",
      particle: "minecraft:block/brown_mushroom_block",
    },
  },
  k_ = {
    textures: {
      down: "minecraft:block/brown_stained_glass",
      up: "minecraft:block/brown_stained_glass",
      north: "minecraft:block/brown_stained_glass",
      south: "minecraft:block/brown_stained_glass",
      west: "minecraft:block/brown_stained_glass",
      east: "minecraft:block/brown_stained_glass",
      particle: "minecraft:block/brown_stained_glass",
    },
  },
  v_ = {
    textures: {
      down: "minecraft:block/brown_terracotta",
      up: "minecraft:block/brown_terracotta",
      north: "minecraft:block/brown_terracotta",
      south: "minecraft:block/brown_terracotta",
      west: "minecraft:block/brown_terracotta",
      east: "minecraft:block/brown_terracotta",
      particle: "minecraft:block/brown_terracotta",
    },
  },
  w_ = {
    textures: {
      down: "minecraft:block/brown_wool",
      up: "minecraft:block/brown_wool",
      north: "minecraft:block/brown_wool",
      south: "minecraft:block/brown_wool",
      west: "minecraft:block/brown_wool",
      east: "minecraft:block/brown_wool",
      particle: "minecraft:block/brown_wool",
    },
  },
  M_ = {
    textures: {
      down: "minecraft:block/bubble_coral_block",
      up: "minecraft:block/bubble_coral_block",
      north: "minecraft:block/bubble_coral_block",
      south: "minecraft:block/bubble_coral_block",
      west: "minecraft:block/bubble_coral_block",
      east: "minecraft:block/bubble_coral_block",
      particle: "minecraft:block/bubble_coral_block",
    },
  },
  S_ = {
    textures: {
      down: "minecraft:block/budding_amethyst",
      up: "minecraft:block/budding_amethyst",
      north: "minecraft:block/budding_amethyst",
      south: "minecraft:block/budding_amethyst",
      west: "minecraft:block/budding_amethyst",
      east: "minecraft:block/budding_amethyst",
      particle: "minecraft:block/budding_amethyst",
    },
  },
  y_ = {
    textures: {
      down: "minecraft:block/calcite",
      up: "minecraft:block/calcite",
      north: "minecraft:block/calcite",
      south: "minecraft:block/calcite",
      west: "minecraft:block/calcite",
      east: "minecraft:block/calcite",
      particle: "minecraft:block/calcite",
    },
  },
  E_ = {
    textures: {
      down: "minecraft:block/dark_oak_planks",
      up: "minecraft:block/cartography_table_top",
      north: "minecraft:block/cartography_table_side3",
      south: "minecraft:block/cartography_table_side1",
      west: "minecraft:block/cartography_table_side2",
      east: "minecraft:block/cartography_table_side3",
      particle: "minecraft:block/cartography_table_side3",
    },
  },
  T_ = {
    textures: {
      down: "minecraft:block/pumpkin_top",
      up: "minecraft:block/pumpkin_top",
      north: "minecraft:block/carved_pumpkin",
      south: "minecraft:block/pumpkin_side",
      west: "minecraft:block/pumpkin_side",
      east: "minecraft:block/pumpkin_side",
      particle: "minecraft:block/carved_pumpkin",
    },
  },
  A_ = {
    textures: {
      down: "minecraft:block/cherry_log_top",
      up: "minecraft:block/cherry_log_top",
      north: "minecraft:block/cherry_log",
      south: "minecraft:block/cherry_log",
      west: "minecraft:block/cherry_log",
      east: "minecraft:block/cherry_log",
      particle: "minecraft:block/cherry_log",
    },
  },
  R_ = {
    textures: {
      down: "minecraft:block/cherry_planks",
      up: "minecraft:block/cherry_planks",
      north: "minecraft:block/cherry_planks",
      south: "minecraft:block/cherry_planks",
      west: "minecraft:block/cherry_planks",
      east: "minecraft:block/cherry_planks",
      particle: "minecraft:block/cherry_planks",
    },
  },
  C_ = {
    textures: {
      down: "minecraft:block/cherry_log",
      up: "minecraft:block/cherry_log",
      north: "minecraft:block/cherry_log",
      south: "minecraft:block/cherry_log",
      west: "minecraft:block/cherry_log",
      east: "minecraft:block/cherry_log",
      particle: "minecraft:block/cherry_log",
    },
  },
  P_ = {
    textures: {
      north: "block/chiseled_bookshelf_empty",
      east: "block/chiseled_bookshelf_side",
      south: "block/chiseled_bookshelf_side",
      west: "block/chiseled_bookshelf_side",
      up: "block/chiseled_bookshelf_top",
      down: "block/chiseled_bookshelf_top",
      particle: "block/chiseled_bookshelf_top",
    },
  },
  L_ = {
    textures: {
      down: "minecraft:block/chiseled_copper",
      up: "minecraft:block/chiseled_copper",
      north: "minecraft:block/chiseled_copper",
      south: "minecraft:block/chiseled_copper",
      west: "minecraft:block/chiseled_copper",
      east: "minecraft:block/chiseled_copper",
      particle: "minecraft:block/chiseled_copper",
    },
  },
  D_ = {
    textures: {
      down: "minecraft:block/chiseled_deepslate",
      up: "minecraft:block/chiseled_deepslate",
      north: "minecraft:block/chiseled_deepslate",
      south: "minecraft:block/chiseled_deepslate",
      west: "minecraft:block/chiseled_deepslate",
      east: "minecraft:block/chiseled_deepslate",
      particle: "minecraft:block/chiseled_deepslate",
    },
  },
  I_ = {
    textures: {
      down: "minecraft:block/chiseled_nether_bricks",
      up: "minecraft:block/chiseled_nether_bricks",
      north: "minecraft:block/chiseled_nether_bricks",
      south: "minecraft:block/chiseled_nether_bricks",
      west: "minecraft:block/chiseled_nether_bricks",
      east: "minecraft:block/chiseled_nether_bricks",
      particle: "minecraft:block/chiseled_nether_bricks",
    },
  },
  U_ = {
    textures: {
      down: "minecraft:block/chiseled_polished_blackstone",
      up: "minecraft:block/chiseled_polished_blackstone",
      north: "minecraft:block/chiseled_polished_blackstone",
      south: "minecraft:block/chiseled_polished_blackstone",
      west: "minecraft:block/chiseled_polished_blackstone",
      east: "minecraft:block/chiseled_polished_blackstone",
      particle: "minecraft:block/chiseled_polished_blackstone",
    },
  },
  N_ = {
    textures: {
      down: "minecraft:block/chiseled_quartz_block_top",
      up: "minecraft:block/chiseled_quartz_block_top",
      north: "minecraft:block/chiseled_quartz_block",
      south: "minecraft:block/chiseled_quartz_block",
      west: "minecraft:block/chiseled_quartz_block",
      east: "minecraft:block/chiseled_quartz_block",
      particle: "minecraft:block/chiseled_quartz_block",
    },
  },
  F_ = {
    textures: {
      down: "minecraft:block/red_sandstone_top",
      up: "minecraft:block/red_sandstone_top",
      north: "minecraft:block/chiseled_red_sandstone",
      south: "minecraft:block/chiseled_red_sandstone",
      west: "minecraft:block/chiseled_red_sandstone",
      east: "minecraft:block/chiseled_red_sandstone",
      particle: "minecraft:block/chiseled_red_sandstone",
    },
  },
  O_ = {
    textures: {
      down: "minecraft:block/chiseled_resin_bricks",
      up: "minecraft:block/chiseled_resin_bricks",
      north: "minecraft:block/chiseled_resin_bricks",
      south: "minecraft:block/chiseled_resin_bricks",
      west: "minecraft:block/chiseled_resin_bricks",
      east: "minecraft:block/chiseled_resin_bricks",
      particle: "minecraft:block/chiseled_resin_bricks",
    },
  },
  B_ = {
    textures: {
      down: "minecraft:block/sandstone_top",
      up: "minecraft:block/sandstone_top",
      north: "minecraft:block/chiseled_sandstone",
      south: "minecraft:block/chiseled_sandstone",
      west: "minecraft:block/chiseled_sandstone",
      east: "minecraft:block/chiseled_sandstone",
      particle: "minecraft:block/chiseled_sandstone",
    },
  },
  z_ = {
    textures: {
      down: "minecraft:block/chiseled_stone_bricks",
      up: "minecraft:block/chiseled_stone_bricks",
      north: "minecraft:block/chiseled_stone_bricks",
      south: "minecraft:block/chiseled_stone_bricks",
      west: "minecraft:block/chiseled_stone_bricks",
      east: "minecraft:block/chiseled_stone_bricks",
      particle: "minecraft:block/chiseled_stone_bricks",
    },
  },
  V_ = {
    textures: {
      down: "minecraft:block/chiseled_tuff_top",
      up: "minecraft:block/chiseled_tuff_top",
      north: "minecraft:block/chiseled_tuff",
      south: "minecraft:block/chiseled_tuff",
      west: "minecraft:block/chiseled_tuff",
      east: "minecraft:block/chiseled_tuff",
      particle: "minecraft:block/chiseled_tuff",
    },
  },
  G_ = {
    textures: {
      down: "minecraft:block/chiseled_tuff_bricks_top",
      up: "minecraft:block/chiseled_tuff_bricks_top",
      north: "minecraft:block/chiseled_tuff_bricks",
      south: "minecraft:block/chiseled_tuff_bricks",
      west: "minecraft:block/chiseled_tuff_bricks",
      east: "minecraft:block/chiseled_tuff_bricks",
      particle: "minecraft:block/chiseled_tuff_bricks",
    },
  },
  H_ = {
    textures: {
      down: "minecraft:block/clay",
      up: "minecraft:block/clay",
      north: "minecraft:block/clay",
      south: "minecraft:block/clay",
      west: "minecraft:block/clay",
      east: "minecraft:block/clay",
      particle: "minecraft:block/clay",
    },
  },
  W_ = {
    textures: {
      down: "minecraft:block/coal_block",
      up: "minecraft:block/coal_block",
      north: "minecraft:block/coal_block",
      south: "minecraft:block/coal_block",
      west: "minecraft:block/coal_block",
      east: "minecraft:block/coal_block",
      particle: "minecraft:block/coal_block",
    },
  },
  X_ = {
    textures: {
      down: "minecraft:block/coal_ore",
      up: "minecraft:block/coal_ore",
      north: "minecraft:block/coal_ore",
      south: "minecraft:block/coal_ore",
      west: "minecraft:block/coal_ore",
      east: "minecraft:block/coal_ore",
      particle: "minecraft:block/coal_ore",
    },
  },
  q_ = {
    textures: {
      down: "minecraft:block/coarse_dirt",
      up: "minecraft:block/coarse_dirt",
      north: "minecraft:block/coarse_dirt",
      south: "minecraft:block/coarse_dirt",
      west: "minecraft:block/coarse_dirt",
      east: "minecraft:block/coarse_dirt",
      particle: "minecraft:block/coarse_dirt",
    },
  },
  Y_ = {
    textures: {
      down: "minecraft:block/cobbled_deepslate",
      up: "minecraft:block/cobbled_deepslate",
      north: "minecraft:block/cobbled_deepslate",
      south: "minecraft:block/cobbled_deepslate",
      west: "minecraft:block/cobbled_deepslate",
      east: "minecraft:block/cobbled_deepslate",
      particle: "minecraft:block/cobbled_deepslate",
    },
  },
  j_ = {
    textures: {
      down: "minecraft:block/cobblestone",
      up: "minecraft:block/cobblestone",
      north: "minecraft:block/cobblestone",
      south: "minecraft:block/cobblestone",
      west: "minecraft:block/cobblestone",
      east: "minecraft:block/cobblestone",
      particle: "minecraft:block/cobblestone",
    },
  },
  K_ = {
    textures: {
      down: "minecraft:block/copper_block",
      up: "minecraft:block/copper_block",
      north: "minecraft:block/copper_block",
      south: "minecraft:block/copper_block",
      west: "minecraft:block/copper_block",
      east: "minecraft:block/copper_block",
      particle: "minecraft:block/copper_block",
    },
  },
  $_ = {
    textures: {
      down: "minecraft:block/copper_bulb",
      up: "minecraft:block/copper_bulb",
      north: "minecraft:block/copper_bulb",
      south: "minecraft:block/copper_bulb",
      west: "minecraft:block/copper_bulb",
      east: "minecraft:block/copper_bulb",
      particle: "minecraft:block/copper_bulb",
    },
  },
  Z_ = {
    textures: {
      down: "minecraft:block/copper_bulb_lit",
      up: "minecraft:block/copper_bulb_lit",
      north: "minecraft:block/copper_bulb_lit",
      south: "minecraft:block/copper_bulb_lit",
      west: "minecraft:block/copper_bulb_lit",
      east: "minecraft:block/copper_bulb_lit",
      particle: "minecraft:block/copper_bulb_lit",
    },
  },
  J_ = {
    textures: {
      down: "minecraft:block/copper_bulb_lit_powered",
      up: "minecraft:block/copper_bulb_lit_powered",
      north: "minecraft:block/copper_bulb_lit_powered",
      south: "minecraft:block/copper_bulb_lit_powered",
      west: "minecraft:block/copper_bulb_lit_powered",
      east: "minecraft:block/copper_bulb_lit_powered",
      particle: "minecraft:block/copper_bulb_lit_powered",
    },
  },
  Q_ = {
    textures: {
      down: "minecraft:block/copper_bulb_powered",
      up: "minecraft:block/copper_bulb_powered",
      north: "minecraft:block/copper_bulb_powered",
      south: "minecraft:block/copper_bulb_powered",
      west: "minecraft:block/copper_bulb_powered",
      east: "minecraft:block/copper_bulb_powered",
      particle: "minecraft:block/copper_bulb_powered",
    },
  },
  eb = {
    textures: {
      down: "minecraft:block/copper_grate",
      up: "minecraft:block/copper_grate",
      north: "minecraft:block/copper_grate",
      south: "minecraft:block/copper_grate",
      west: "minecraft:block/copper_grate",
      east: "minecraft:block/copper_grate",
      particle: "minecraft:block/copper_grate",
    },
  },
  tb = {
    textures: {
      down: "minecraft:block/copper_ore",
      up: "minecraft:block/copper_ore",
      north: "minecraft:block/copper_ore",
      south: "minecraft:block/copper_ore",
      west: "minecraft:block/copper_ore",
      east: "minecraft:block/copper_ore",
      particle: "minecraft:block/copper_ore",
    },
  },
  nb = {
    textures: {
      down: "minecraft:block/cracked_deepslate_bricks",
      up: "minecraft:block/cracked_deepslate_bricks",
      north: "minecraft:block/cracked_deepslate_bricks",
      south: "minecraft:block/cracked_deepslate_bricks",
      west: "minecraft:block/cracked_deepslate_bricks",
      east: "minecraft:block/cracked_deepslate_bricks",
      particle: "minecraft:block/cracked_deepslate_bricks",
    },
  },
  ib = {
    textures: {
      down: "minecraft:block/cracked_deepslate_tiles",
      up: "minecraft:block/cracked_deepslate_tiles",
      north: "minecraft:block/cracked_deepslate_tiles",
      south: "minecraft:block/cracked_deepslate_tiles",
      west: "minecraft:block/cracked_deepslate_tiles",
      east: "minecraft:block/cracked_deepslate_tiles",
      particle: "minecraft:block/cracked_deepslate_tiles",
    },
  },
  rb = {
    textures: {
      down: "minecraft:block/cracked_nether_bricks",
      up: "minecraft:block/cracked_nether_bricks",
      north: "minecraft:block/cracked_nether_bricks",
      south: "minecraft:block/cracked_nether_bricks",
      west: "minecraft:block/cracked_nether_bricks",
      east: "minecraft:block/cracked_nether_bricks",
      particle: "minecraft:block/cracked_nether_bricks",
    },
  },
  ob = {
    textures: {
      down: "minecraft:block/cracked_polished_blackstone_bricks",
      up: "minecraft:block/cracked_polished_blackstone_bricks",
      north: "minecraft:block/cracked_polished_blackstone_bricks",
      south: "minecraft:block/cracked_polished_blackstone_bricks",
      west: "minecraft:block/cracked_polished_blackstone_bricks",
      east: "minecraft:block/cracked_polished_blackstone_bricks",
      particle: "minecraft:block/cracked_polished_blackstone_bricks",
    },
  },
  ab = {
    textures: {
      down: "minecraft:block/cracked_stone_bricks",
      up: "minecraft:block/cracked_stone_bricks",
      north: "minecraft:block/cracked_stone_bricks",
      south: "minecraft:block/cracked_stone_bricks",
      west: "minecraft:block/cracked_stone_bricks",
      east: "minecraft:block/cracked_stone_bricks",
      particle: "minecraft:block/cracked_stone_bricks",
    },
  },
  sb = {
    textures: {
      down: "block/crafter_bottom",
      up: "block/crafter_top",
      north: "block/crafter_north",
      south: "block/crafter_south",
      west: "block/crafter_west",
      east: "block/crafter_east",
      particle: "block/crafter_north",
    },
  },
  cb = {
    textures: {
      down: "minecraft:block/oak_planks",
      up: "minecraft:block/crafting_table_top",
      north: "minecraft:block/crafting_table_front",
      south: "minecraft:block/crafting_table_side",
      west: "minecraft:block/crafting_table_front",
      east: "minecraft:block/crafting_table_side",
      particle: "minecraft:block/crafting_table_front",
    },
  },
  lb = {
    textures: {
      down: "minecraft:block/creaking_heart_top",
      up: "minecraft:block/creaking_heart_top",
      north: "minecraft:block/creaking_heart",
      south: "minecraft:block/creaking_heart",
      west: "minecraft:block/creaking_heart",
      east: "minecraft:block/creaking_heart",
      particle: "minecraft:block/creaking_heart",
    },
  },
  fb = {
    textures: {
      down: "minecraft:block/creaking_heart_top_awake",
      up: "minecraft:block/creaking_heart_top_awake",
      north: "minecraft:block/creaking_heart_awake",
      south: "minecraft:block/creaking_heart_awake",
      west: "minecraft:block/creaking_heart_awake",
      east: "minecraft:block/creaking_heart_awake",
      particle: "minecraft:block/creaking_heart_awake",
    },
  },
  ub = {
    textures: {
      down: "minecraft:block/creaking_heart_top_awake",
      up: "minecraft:block/creaking_heart_top_awake",
      north: "minecraft:block/creaking_heart_awake",
      south: "minecraft:block/creaking_heart_awake",
      west: "minecraft:block/creaking_heart_awake",
      east: "minecraft:block/creaking_heart_awake",
      particle: "minecraft:block/creaking_heart_awake",
    },
  },
  db = {
    textures: {
      down: "minecraft:block/creaking_heart_top_dormant",
      up: "minecraft:block/creaking_heart_top_dormant",
      north: "minecraft:block/creaking_heart_dormant",
      south: "minecraft:block/creaking_heart_dormant",
      west: "minecraft:block/creaking_heart_dormant",
      east: "minecraft:block/creaking_heart_dormant",
      particle: "minecraft:block/creaking_heart_dormant",
    },
  },
  hb = {
    textures: {
      down: "minecraft:block/creaking_heart_top_dormant",
      up: "minecraft:block/creaking_heart_top_dormant",
      north: "minecraft:block/creaking_heart_dormant",
      south: "minecraft:block/creaking_heart_dormant",
      west: "minecraft:block/creaking_heart_dormant",
      east: "minecraft:block/creaking_heart_dormant",
      particle: "minecraft:block/creaking_heart_dormant",
    },
  },
  pb = {
    textures: {
      down: "minecraft:block/creaking_heart_top",
      up: "minecraft:block/creaking_heart_top",
      north: "minecraft:block/creaking_heart",
      south: "minecraft:block/creaking_heart",
      west: "minecraft:block/creaking_heart",
      east: "minecraft:block/creaking_heart",
      particle: "minecraft:block/creaking_heart",
    },
  },
  mb = {
    textures: {
      down: "minecraft:block/crimson_stem",
      up: "minecraft:block/crimson_stem",
      north: "minecraft:block/crimson_stem",
      south: "minecraft:block/crimson_stem",
      west: "minecraft:block/crimson_stem",
      east: "minecraft:block/crimson_stem",
      particle: "minecraft:block/crimson_stem",
    },
  },
  _b = {
    textures: {
      down: "minecraft:block/crimson_planks",
      up: "minecraft:block/crimson_planks",
      north: "minecraft:block/crimson_planks",
      south: "minecraft:block/crimson_planks",
      west: "minecraft:block/crimson_planks",
      east: "minecraft:block/crimson_planks",
      particle: "minecraft:block/crimson_planks",
    },
  },
  bb = {
    textures: {
      down: "minecraft:block/crimson_stem_top",
      up: "minecraft:block/crimson_stem_top",
      north: "minecraft:block/crimson_stem",
      south: "minecraft:block/crimson_stem",
      west: "minecraft:block/crimson_stem",
      east: "minecraft:block/crimson_stem",
      particle: "minecraft:block/crimson_stem",
    },
  },
  gb = {
    textures: {
      down: "minecraft:block/crying_obsidian",
      up: "minecraft:block/crying_obsidian",
      north: "minecraft:block/crying_obsidian",
      south: "minecraft:block/crying_obsidian",
      west: "minecraft:block/crying_obsidian",
      east: "minecraft:block/crying_obsidian",
      particle: "minecraft:block/crying_obsidian",
    },
  },
  xb = {
    textures: {
      down: "minecraft:block/cut_copper",
      up: "minecraft:block/cut_copper",
      north: "minecraft:block/cut_copper",
      south: "minecraft:block/cut_copper",
      west: "minecraft:block/cut_copper",
      east: "minecraft:block/cut_copper",
      particle: "minecraft:block/cut_copper",
    },
  },
  kb = {
    textures: {
      down: "minecraft:block/red_sandstone_top",
      up: "minecraft:block/red_sandstone_top",
      north: "minecraft:block/cut_red_sandstone",
      south: "minecraft:block/cut_red_sandstone",
      west: "minecraft:block/cut_red_sandstone",
      east: "minecraft:block/cut_red_sandstone",
      particle: "minecraft:block/cut_red_sandstone",
    },
  },
  vb = {
    textures: {
      down: "minecraft:block/sandstone_top",
      up: "minecraft:block/sandstone_top",
      north: "minecraft:block/cut_sandstone",
      south: "minecraft:block/cut_sandstone",
      west: "minecraft:block/cut_sandstone",
      east: "minecraft:block/cut_sandstone",
      particle: "minecraft:block/cut_sandstone",
    },
  },
  wb = {
    textures: {
      down: "minecraft:block/cyan_concrete",
      up: "minecraft:block/cyan_concrete",
      north: "minecraft:block/cyan_concrete",
      south: "minecraft:block/cyan_concrete",
      west: "minecraft:block/cyan_concrete",
      east: "minecraft:block/cyan_concrete",
      particle: "minecraft:block/cyan_concrete",
    },
  },
  Mb = {
    textures: {
      down: "minecraft:block/cyan_concrete_powder",
      up: "minecraft:block/cyan_concrete_powder",
      north: "minecraft:block/cyan_concrete_powder",
      south: "minecraft:block/cyan_concrete_powder",
      west: "minecraft:block/cyan_concrete_powder",
      east: "minecraft:block/cyan_concrete_powder",
      particle: "minecraft:block/cyan_concrete_powder",
    },
  },
  Sb = {
    textures: {
      down: "minecraft:block/cyan_stained_glass",
      up: "minecraft:block/cyan_stained_glass",
      north: "minecraft:block/cyan_stained_glass",
      south: "minecraft:block/cyan_stained_glass",
      west: "minecraft:block/cyan_stained_glass",
      east: "minecraft:block/cyan_stained_glass",
      particle: "minecraft:block/cyan_stained_glass",
    },
  },
  yb = {
    textures: {
      down: "minecraft:block/cyan_terracotta",
      up: "minecraft:block/cyan_terracotta",
      north: "minecraft:block/cyan_terracotta",
      south: "minecraft:block/cyan_terracotta",
      west: "minecraft:block/cyan_terracotta",
      east: "minecraft:block/cyan_terracotta",
      particle: "minecraft:block/cyan_terracotta",
    },
  },
  Eb = {
    textures: {
      down: "minecraft:block/cyan_wool",
      up: "minecraft:block/cyan_wool",
      north: "minecraft:block/cyan_wool",
      south: "minecraft:block/cyan_wool",
      west: "minecraft:block/cyan_wool",
      east: "minecraft:block/cyan_wool",
      particle: "minecraft:block/cyan_wool",
    },
  },
  Tb = {
    textures: {
      down: "minecraft:block/dark_oak_log_top",
      up: "minecraft:block/dark_oak_log_top",
      north: "minecraft:block/dark_oak_log",
      south: "minecraft:block/dark_oak_log",
      west: "minecraft:block/dark_oak_log",
      east: "minecraft:block/dark_oak_log",
      particle: "minecraft:block/dark_oak_log",
    },
  },
  Ab = {
    textures: {
      down: "minecraft:block/dark_oak_log_top",
      up: "minecraft:block/dark_oak_log_top",
      north: "minecraft:block/dark_oak_log",
      south: "minecraft:block/dark_oak_log",
      west: "minecraft:block/dark_oak_log",
      east: "minecraft:block/dark_oak_log",
      particle: "minecraft:block/dark_oak_log",
    },
  },
  Rb = {
    textures: {
      down: "minecraft:block/dark_oak_planks",
      up: "minecraft:block/dark_oak_planks",
      north: "minecraft:block/dark_oak_planks",
      south: "minecraft:block/dark_oak_planks",
      west: "minecraft:block/dark_oak_planks",
      east: "minecraft:block/dark_oak_planks",
      particle: "minecraft:block/dark_oak_planks",
    },
  },
  Cb = {
    textures: {
      down: "minecraft:block/dark_oak_log",
      up: "minecraft:block/dark_oak_log",
      north: "minecraft:block/dark_oak_log",
      south: "minecraft:block/dark_oak_log",
      west: "minecraft:block/dark_oak_log",
      east: "minecraft:block/dark_oak_log",
      particle: "minecraft:block/dark_oak_log",
    },
  },
  Pb = {
    textures: {
      down: "minecraft:block/dark_prismarine",
      up: "minecraft:block/dark_prismarine",
      north: "minecraft:block/dark_prismarine",
      south: "minecraft:block/dark_prismarine",
      west: "minecraft:block/dark_prismarine",
      east: "minecraft:block/dark_prismarine",
      particle: "minecraft:block/dark_prismarine",
    },
  },
  Lb = {
    textures: {
      down: "minecraft:block/dead_brain_coral_block",
      up: "minecraft:block/dead_brain_coral_block",
      north: "minecraft:block/dead_brain_coral_block",
      south: "minecraft:block/dead_brain_coral_block",
      west: "minecraft:block/dead_brain_coral_block",
      east: "minecraft:block/dead_brain_coral_block",
      particle: "minecraft:block/dead_brain_coral_block",
    },
  },
  Db = {
    textures: {
      down: "minecraft:block/dead_bubble_coral_block",
      up: "minecraft:block/dead_bubble_coral_block",
      north: "minecraft:block/dead_bubble_coral_block",
      south: "minecraft:block/dead_bubble_coral_block",
      west: "minecraft:block/dead_bubble_coral_block",
      east: "minecraft:block/dead_bubble_coral_block",
      particle: "minecraft:block/dead_bubble_coral_block",
    },
  },
  Ib = {
    textures: {
      down: "minecraft:block/dead_fire_coral_block",
      up: "minecraft:block/dead_fire_coral_block",
      north: "minecraft:block/dead_fire_coral_block",
      south: "minecraft:block/dead_fire_coral_block",
      west: "minecraft:block/dead_fire_coral_block",
      east: "minecraft:block/dead_fire_coral_block",
      particle: "minecraft:block/dead_fire_coral_block",
    },
  },
  Ub = {
    textures: {
      down: "minecraft:block/dead_horn_coral_block",
      up: "minecraft:block/dead_horn_coral_block",
      north: "minecraft:block/dead_horn_coral_block",
      south: "minecraft:block/dead_horn_coral_block",
      west: "minecraft:block/dead_horn_coral_block",
      east: "minecraft:block/dead_horn_coral_block",
      particle: "minecraft:block/dead_horn_coral_block",
    },
  },
  Nb = {
    textures: {
      down: "minecraft:block/dead_tube_coral_block",
      up: "minecraft:block/dead_tube_coral_block",
      north: "minecraft:block/dead_tube_coral_block",
      south: "minecraft:block/dead_tube_coral_block",
      west: "minecraft:block/dead_tube_coral_block",
      east: "minecraft:block/dead_tube_coral_block",
      particle: "minecraft:block/dead_tube_coral_block",
    },
  },
  Fb = {
    textures: {
      down: "minecraft:block/deepslate_top",
      up: "minecraft:block/deepslate_top",
      north: "minecraft:block/deepslate",
      south: "minecraft:block/deepslate",
      west: "minecraft:block/deepslate",
      east: "minecraft:block/deepslate",
      particle: "minecraft:block/deepslate",
    },
  },
  Ob = {
    textures: {
      down: "minecraft:block/deepslate_bricks",
      up: "minecraft:block/deepslate_bricks",
      north: "minecraft:block/deepslate_bricks",
      south: "minecraft:block/deepslate_bricks",
      west: "minecraft:block/deepslate_bricks",
      east: "minecraft:block/deepslate_bricks",
      particle: "minecraft:block/deepslate_bricks",
    },
  },
  Bb = {
    textures: {
      down: "minecraft:block/deepslate_coal_ore",
      up: "minecraft:block/deepslate_coal_ore",
      north: "minecraft:block/deepslate_coal_ore",
      south: "minecraft:block/deepslate_coal_ore",
      west: "minecraft:block/deepslate_coal_ore",
      east: "minecraft:block/deepslate_coal_ore",
      particle: "minecraft:block/deepslate_coal_ore",
    },
  },
  zb = {
    textures: {
      down: "minecraft:block/deepslate_copper_ore",
      up: "minecraft:block/deepslate_copper_ore",
      north: "minecraft:block/deepslate_copper_ore",
      south: "minecraft:block/deepslate_copper_ore",
      west: "minecraft:block/deepslate_copper_ore",
      east: "minecraft:block/deepslate_copper_ore",
      particle: "minecraft:block/deepslate_copper_ore",
    },
  },
  Vb = {
    textures: {
      down: "minecraft:block/deepslate_diamond_ore",
      up: "minecraft:block/deepslate_diamond_ore",
      north: "minecraft:block/deepslate_diamond_ore",
      south: "minecraft:block/deepslate_diamond_ore",
      west: "minecraft:block/deepslate_diamond_ore",
      east: "minecraft:block/deepslate_diamond_ore",
      particle: "minecraft:block/deepslate_diamond_ore",
    },
  },
  Gb = {
    textures: {
      down: "minecraft:block/deepslate_emerald_ore",
      up: "minecraft:block/deepslate_emerald_ore",
      north: "minecraft:block/deepslate_emerald_ore",
      south: "minecraft:block/deepslate_emerald_ore",
      west: "minecraft:block/deepslate_emerald_ore",
      east: "minecraft:block/deepslate_emerald_ore",
      particle: "minecraft:block/deepslate_emerald_ore",
    },
  },
  Hb = {
    textures: {
      down: "minecraft:block/deepslate_gold_ore",
      up: "minecraft:block/deepslate_gold_ore",
      north: "minecraft:block/deepslate_gold_ore",
      south: "minecraft:block/deepslate_gold_ore",
      west: "minecraft:block/deepslate_gold_ore",
      east: "minecraft:block/deepslate_gold_ore",
      particle: "minecraft:block/deepslate_gold_ore",
    },
  },
  Wb = {
    textures: {
      down: "minecraft:block/deepslate_iron_ore",
      up: "minecraft:block/deepslate_iron_ore",
      north: "minecraft:block/deepslate_iron_ore",
      south: "minecraft:block/deepslate_iron_ore",
      west: "minecraft:block/deepslate_iron_ore",
      east: "minecraft:block/deepslate_iron_ore",
      particle: "minecraft:block/deepslate_iron_ore",
    },
  },
  Xb = {
    textures: {
      down: "minecraft:block/deepslate_lapis_ore",
      up: "minecraft:block/deepslate_lapis_ore",
      north: "minecraft:block/deepslate_lapis_ore",
      south: "minecraft:block/deepslate_lapis_ore",
      west: "minecraft:block/deepslate_lapis_ore",
      east: "minecraft:block/deepslate_lapis_ore",
      particle: "minecraft:block/deepslate_lapis_ore",
    },
  },
  qb = {
    textures: {
      down: "minecraft:block/deepslate_redstone_ore",
      up: "minecraft:block/deepslate_redstone_ore",
      north: "minecraft:block/deepslate_redstone_ore",
      south: "minecraft:block/deepslate_redstone_ore",
      west: "minecraft:block/deepslate_redstone_ore",
      east: "minecraft:block/deepslate_redstone_ore",
      particle: "minecraft:block/deepslate_redstone_ore",
    },
  },
  Yb = {
    textures: {
      down: "minecraft:block/deepslate_tiles",
      up: "minecraft:block/deepslate_tiles",
      north: "minecraft:block/deepslate_tiles",
      south: "minecraft:block/deepslate_tiles",
      west: "minecraft:block/deepslate_tiles",
      east: "minecraft:block/deepslate_tiles",
      particle: "minecraft:block/deepslate_tiles",
    },
  },
  jb = {
    textures: {
      down: "minecraft:block/diamond_block",
      up: "minecraft:block/diamond_block",
      north: "minecraft:block/diamond_block",
      south: "minecraft:block/diamond_block",
      west: "minecraft:block/diamond_block",
      east: "minecraft:block/diamond_block",
      particle: "minecraft:block/diamond_block",
    },
  },
  Kb = {
    textures: {
      down: "minecraft:block/diamond_ore",
      up: "minecraft:block/diamond_ore",
      north: "minecraft:block/diamond_ore",
      south: "minecraft:block/diamond_ore",
      west: "minecraft:block/diamond_ore",
      east: "minecraft:block/diamond_ore",
      particle: "minecraft:block/diamond_ore",
    },
  },
  $b = {
    textures: {
      down: "minecraft:block/diorite",
      up: "minecraft:block/diorite",
      north: "minecraft:block/diorite",
      south: "minecraft:block/diorite",
      west: "minecraft:block/diorite",
      east: "minecraft:block/diorite",
      particle: "minecraft:block/diorite",
    },
  },
  Zb = {
    textures: {
      down: "minecraft:block/dirt",
      up: "minecraft:block/dirt",
      north: "minecraft:block/dirt",
      south: "minecraft:block/dirt",
      west: "minecraft:block/dirt",
      east: "minecraft:block/dirt",
      particle: "minecraft:block/dirt",
    },
  },
  Jb = {
    textures: {
      down: "minecraft:block/furnace_top",
      up: "minecraft:block/furnace_top",
      north: "minecraft:block/dispenser_front",
      south: "minecraft:block/furnace_side",
      west: "minecraft:block/furnace_side",
      east: "minecraft:block/furnace_side",
      particle: "minecraft:block/dispenser_front",
    },
  },
  Qb = {
    textures: {
      down: "block/dried_kelp_bottom",
      up: "block/dried_kelp_top",
      north: "block/dried_kelp_side",
      south: "block/dried_kelp_side",
      west: "block/dried_kelp_side",
      east: "block/dried_kelp_side",
      particle: "block/dried_kelp_side",
    },
  },
  eg = {
    textures: {
      down: "minecraft:block/dripstone_block",
      up: "minecraft:block/dripstone_block",
      north: "minecraft:block/dripstone_block",
      south: "minecraft:block/dripstone_block",
      west: "minecraft:block/dripstone_block",
      east: "minecraft:block/dripstone_block",
      particle: "minecraft:block/dripstone_block",
    },
  },
  tg = {
    textures: {
      down: "minecraft:block/furnace_top",
      up: "minecraft:block/furnace_top",
      north: "minecraft:block/dropper_front",
      south: "minecraft:block/furnace_side",
      west: "minecraft:block/furnace_side",
      east: "minecraft:block/furnace_side",
      particle: "minecraft:block/dropper_front",
    },
  },
  ng = {
    textures: {
      down: "minecraft:block/emerald_block",
      up: "minecraft:block/emerald_block",
      north: "minecraft:block/emerald_block",
      south: "minecraft:block/emerald_block",
      west: "minecraft:block/emerald_block",
      east: "minecraft:block/emerald_block",
      particle: "minecraft:block/emerald_block",
    },
  },
  ig = {
    textures: {
      down: "minecraft:block/emerald_ore",
      up: "minecraft:block/emerald_ore",
      north: "minecraft:block/emerald_ore",
      south: "minecraft:block/emerald_ore",
      west: "minecraft:block/emerald_ore",
      east: "minecraft:block/emerald_ore",
      particle: "minecraft:block/emerald_ore",
    },
  },
  rg = {
    textures: {
      down: "minecraft:block/end_stone",
      up: "minecraft:block/end_stone",
      north: "minecraft:block/end_stone",
      south: "minecraft:block/end_stone",
      west: "minecraft:block/end_stone",
      east: "minecraft:block/end_stone",
      particle: "minecraft:block/end_stone",
    },
  },
  og = {
    textures: {
      down: "minecraft:block/end_stone_bricks",
      up: "minecraft:block/end_stone_bricks",
      north: "minecraft:block/end_stone_bricks",
      south: "minecraft:block/end_stone_bricks",
      west: "minecraft:block/end_stone_bricks",
      east: "minecraft:block/end_stone_bricks",
      particle: "minecraft:block/end_stone_bricks",
    },
  },
  ag = {
    textures: {
      down: "minecraft:block/exposed_chiseled_copper",
      up: "minecraft:block/exposed_chiseled_copper",
      north: "minecraft:block/exposed_chiseled_copper",
      south: "minecraft:block/exposed_chiseled_copper",
      west: "minecraft:block/exposed_chiseled_copper",
      east: "minecraft:block/exposed_chiseled_copper",
      particle: "minecraft:block/exposed_chiseled_copper",
    },
  },
  sg = {
    textures: {
      down: "minecraft:block/exposed_copper",
      up: "minecraft:block/exposed_copper",
      north: "minecraft:block/exposed_copper",
      south: "minecraft:block/exposed_copper",
      west: "minecraft:block/exposed_copper",
      east: "minecraft:block/exposed_copper",
      particle: "minecraft:block/exposed_copper",
    },
  },
  cg = {
    textures: {
      down: "minecraft:block/exposed_copper_bulb",
      up: "minecraft:block/exposed_copper_bulb",
      north: "minecraft:block/exposed_copper_bulb",
      south: "minecraft:block/exposed_copper_bulb",
      west: "minecraft:block/exposed_copper_bulb",
      east: "minecraft:block/exposed_copper_bulb",
      particle: "minecraft:block/exposed_copper_bulb",
    },
  },
  lg = {
    textures: {
      down: "minecraft:block/exposed_copper_bulb_lit",
      up: "minecraft:block/exposed_copper_bulb_lit",
      north: "minecraft:block/exposed_copper_bulb_lit",
      south: "minecraft:block/exposed_copper_bulb_lit",
      west: "minecraft:block/exposed_copper_bulb_lit",
      east: "minecraft:block/exposed_copper_bulb_lit",
      particle: "minecraft:block/exposed_copper_bulb_lit",
    },
  },
  fg = {
    textures: {
      down: "minecraft:block/exposed_copper_bulb_lit_powered",
      up: "minecraft:block/exposed_copper_bulb_lit_powered",
      north: "minecraft:block/exposed_copper_bulb_lit_powered",
      south: "minecraft:block/exposed_copper_bulb_lit_powered",
      west: "minecraft:block/exposed_copper_bulb_lit_powered",
      east: "minecraft:block/exposed_copper_bulb_lit_powered",
      particle: "minecraft:block/exposed_copper_bulb_lit_powered",
    },
  },
  ug = {
    textures: {
      down: "minecraft:block/exposed_copper_bulb_powered",
      up: "minecraft:block/exposed_copper_bulb_powered",
      north: "minecraft:block/exposed_copper_bulb_powered",
      south: "minecraft:block/exposed_copper_bulb_powered",
      west: "minecraft:block/exposed_copper_bulb_powered",
      east: "minecraft:block/exposed_copper_bulb_powered",
      particle: "minecraft:block/exposed_copper_bulb_powered",
    },
  },
  dg = {
    textures: {
      down: "minecraft:block/exposed_copper_grate",
      up: "minecraft:block/exposed_copper_grate",
      north: "minecraft:block/exposed_copper_grate",
      south: "minecraft:block/exposed_copper_grate",
      west: "minecraft:block/exposed_copper_grate",
      east: "minecraft:block/exposed_copper_grate",
      particle: "minecraft:block/exposed_copper_grate",
    },
  },
  hg = {
    textures: {
      down: "minecraft:block/exposed_cut_copper",
      up: "minecraft:block/exposed_cut_copper",
      north: "minecraft:block/exposed_cut_copper",
      south: "minecraft:block/exposed_cut_copper",
      west: "minecraft:block/exposed_cut_copper",
      east: "minecraft:block/exposed_cut_copper",
      particle: "minecraft:block/exposed_cut_copper",
    },
  },
  pg = {
    textures: {
      down: "minecraft:block/fire_coral_block",
      up: "minecraft:block/fire_coral_block",
      north: "minecraft:block/fire_coral_block",
      south: "minecraft:block/fire_coral_block",
      west: "minecraft:block/fire_coral_block",
      east: "minecraft:block/fire_coral_block",
      particle: "minecraft:block/fire_coral_block",
    },
  },
  mg = {
    textures: {
      down: "minecraft:block/birch_planks",
      up: "minecraft:block/fletching_table_top",
      north: "minecraft:block/fletching_table_front",
      south: "minecraft:block/fletching_table_front",
      west: "minecraft:block/fletching_table_side",
      east: "minecraft:block/fletching_table_side",
      particle: "minecraft:block/fletching_table_front",
    },
  },
  _g = {
    textures: {
      down: "minecraft:block/acacia_leaves",
      up: "minecraft:block/acacia_leaves",
      north: "minecraft:block/acacia_leaves",
      south: "minecraft:block/acacia_leaves",
      west: "minecraft:block/acacia_leaves",
      east: "minecraft:block/acacia_leaves",
      particle: "minecraft:block/acacia_leaves",
    },
  },
  bg = {
    textures: {
      down: "minecraft:block/flowering_azalea_leaves",
      up: "minecraft:block/flowering_azalea_leaves",
      north: "minecraft:block/flowering_azalea_leaves",
      south: "minecraft:block/flowering_azalea_leaves",
      west: "minecraft:block/flowering_azalea_leaves",
      east: "minecraft:block/flowering_azalea_leaves",
      particle: "minecraft:block/flowering_azalea_leaves",
    },
  },
  gg = {
    textures: {
      down: "minecraft:block/birch_leaves",
      up: "minecraft:block/birch_leaves",
      north: "minecraft:block/birch_leaves",
      south: "minecraft:block/birch_leaves",
      west: "minecraft:block/birch_leaves",
      east: "minecraft:block/birch_leaves",
      particle: "minecraft:block/birch_leaves",
    },
  },
  xg = {
    textures: {
      down: "minecraft:block/cherry_leaves",
      up: "minecraft:block/cherry_leaves",
      north: "minecraft:block/cherry_leaves",
      south: "minecraft:block/cherry_leaves",
      west: "minecraft:block/cherry_leaves",
      east: "minecraft:block/cherry_leaves",
      particle: "minecraft:block/cherry_leaves",
    },
  },
  kg = {
    textures: {
      down: "minecraft:block/dark_oak_leaves",
      up: "minecraft:block/dark_oak_leaves",
      north: "minecraft:block/dark_oak_leaves",
      south: "minecraft:block/dark_oak_leaves",
      west: "minecraft:block/dark_oak_leaves",
      east: "minecraft:block/dark_oak_leaves",
      particle: "minecraft:block/dark_oak_leaves",
    },
  },
  vg = {
    textures: {
      down: "minecraft:block/jungle_leaves",
      up: "minecraft:block/jungle_leaves",
      north: "minecraft:block/jungle_leaves",
      south: "minecraft:block/jungle_leaves",
      west: "minecraft:block/jungle_leaves",
      east: "minecraft:block/jungle_leaves",
      particle: "minecraft:block/jungle_leaves",
    },
  },
  wg = {
    textures: {
      down: "minecraft:block/mangrove_leaves",
      up: "minecraft:block/mangrove_leaves",
      north: "minecraft:block/mangrove_leaves",
      south: "minecraft:block/mangrove_leaves",
      west: "minecraft:block/mangrove_leaves",
      east: "minecraft:block/mangrove_leaves",
      particle: "minecraft:block/mangrove_leaves",
    },
  },
  Mg = {
    textures: {
      down: "minecraft:block/oak_leaves",
      up: "minecraft:block/oak_leaves",
      north: "minecraft:block/oak_leaves",
      south: "minecraft:block/oak_leaves",
      west: "minecraft:block/oak_leaves",
      east: "minecraft:block/oak_leaves",
      particle: "minecraft:block/oak_leaves",
    },
  },
  Sg = {
    textures: {
      down: "minecraft:block/pale_oak_leaves",
      up: "minecraft:block/pale_oak_leaves",
      north: "minecraft:block/pale_oak_leaves",
      south: "minecraft:block/pale_oak_leaves",
      west: "minecraft:block/pale_oak_leaves",
      east: "minecraft:block/pale_oak_leaves",
      particle: "minecraft:block/pale_oak_leaves",
    },
  },
  yg = {
    textures: {
      down: "minecraft:block/spruce_leaves",
      up: "minecraft:block/spruce_leaves",
      north: "minecraft:block/spruce_leaves",
      south: "minecraft:block/spruce_leaves",
      west: "minecraft:block/spruce_leaves",
      east: "minecraft:block/spruce_leaves",
      particle: "minecraft:block/spruce_leaves",
    },
  },
  Eg = {
    textures: {
      down: "minecraft:block/frosted_ice_0",
      up: "minecraft:block/frosted_ice_0",
      north: "minecraft:block/frosted_ice_0",
      south: "minecraft:block/frosted_ice_0",
      west: "minecraft:block/frosted_ice_0",
      east: "minecraft:block/frosted_ice_0",
      particle: "minecraft:block/frosted_ice_0",
    },
  },
  Tg = {
    textures: {
      down: "minecraft:block/frosted_ice_1",
      up: "minecraft:block/frosted_ice_1",
      north: "minecraft:block/frosted_ice_1",
      south: "minecraft:block/frosted_ice_1",
      west: "minecraft:block/frosted_ice_1",
      east: "minecraft:block/frosted_ice_1",
      particle: "minecraft:block/frosted_ice_1",
    },
  },
  Ag = {
    textures: {
      down: "minecraft:block/frosted_ice_2",
      up: "minecraft:block/frosted_ice_2",
      north: "minecraft:block/frosted_ice_2",
      south: "minecraft:block/frosted_ice_2",
      west: "minecraft:block/frosted_ice_2",
      east: "minecraft:block/frosted_ice_2",
      particle: "minecraft:block/frosted_ice_2",
    },
  },
  Rg = {
    textures: {
      down: "minecraft:block/frosted_ice_3",
      up: "minecraft:block/frosted_ice_3",
      north: "minecraft:block/frosted_ice_3",
      south: "minecraft:block/frosted_ice_3",
      west: "minecraft:block/frosted_ice_3",
      east: "minecraft:block/frosted_ice_3",
      particle: "minecraft:block/frosted_ice_3",
    },
  },
  Cg = {
    textures: {
      down: "minecraft:block/furnace_top",
      up: "minecraft:block/furnace_top",
      north: "minecraft:block/furnace_front",
      south: "minecraft:block/furnace_side",
      west: "minecraft:block/furnace_side",
      east: "minecraft:block/furnace_side",
      particle: "minecraft:block/furnace_front",
    },
  },
  Pg = {
    textures: {
      down: "minecraft:block/furnace_top",
      up: "minecraft:block/furnace_top",
      north: "minecraft:block/furnace_front_on",
      south: "minecraft:block/furnace_side",
      west: "minecraft:block/furnace_side",
      east: "minecraft:block/furnace_side",
      particle: "minecraft:block/furnace_front_on",
    },
  },
  Lg = {
    textures: {
      down: "minecraft:block/gilded_blackstone",
      up: "minecraft:block/gilded_blackstone",
      north: "minecraft:block/gilded_blackstone",
      south: "minecraft:block/gilded_blackstone",
      west: "minecraft:block/gilded_blackstone",
      east: "minecraft:block/gilded_blackstone",
      particle: "minecraft:block/gilded_blackstone",
    },
  },
  Dg = {
    textures: {
      down: "minecraft:block/glass",
      up: "minecraft:block/glass",
      north: "minecraft:block/glass",
      south: "minecraft:block/glass",
      west: "minecraft:block/glass",
      east: "minecraft:block/glass",
      particle: "minecraft:block/glass",
    },
  },
  Ig = {
    textures: {
      down: "minecraft:block/glowstone",
      up: "minecraft:block/glowstone",
      north: "minecraft:block/glowstone",
      south: "minecraft:block/glowstone",
      west: "minecraft:block/glowstone",
      east: "minecraft:block/glowstone",
      particle: "minecraft:block/glowstone",
    },
  },
  Ug = {
    textures: {
      down: "minecraft:block/gold_block",
      up: "minecraft:block/gold_block",
      north: "minecraft:block/gold_block",
      south: "minecraft:block/gold_block",
      west: "minecraft:block/gold_block",
      east: "minecraft:block/gold_block",
      particle: "minecraft:block/gold_block",
    },
  },
  Ng = {
    textures: {
      down: "minecraft:block/gold_ore",
      up: "minecraft:block/gold_ore",
      north: "minecraft:block/gold_ore",
      south: "minecraft:block/gold_ore",
      west: "minecraft:block/gold_ore",
      east: "minecraft:block/gold_ore",
      particle: "minecraft:block/gold_ore",
    },
  },
  Fg = {
    textures: {
      down: "minecraft:block/granite",
      up: "minecraft:block/granite",
      north: "minecraft:block/granite",
      south: "minecraft:block/granite",
      west: "minecraft:block/granite",
      east: "minecraft:block/granite",
      particle: "minecraft:block/granite",
    },
  },
  Og = {
    textures: {
      down: "block/dirt",
      up: "block/grass_block_top",
      north: "block/grass_block_side",
      south: "block/grass_block_side",
      west: "block/grass_block_side",
      east: "block/grass_block_side",
      particle: "block/dirt",
    },
  },
  Bg = {
    textures: {
      down: "minecraft:block/gravel",
      up: "minecraft:block/gravel",
      north: "minecraft:block/gravel",
      south: "minecraft:block/gravel",
      west: "minecraft:block/gravel",
      east: "minecraft:block/gravel",
      particle: "minecraft:block/gravel",
    },
  },
  zg = {
    textures: {
      down: "minecraft:block/gray_concrete",
      up: "minecraft:block/gray_concrete",
      north: "minecraft:block/gray_concrete",
      south: "minecraft:block/gray_concrete",
      west: "minecraft:block/gray_concrete",
      east: "minecraft:block/gray_concrete",
      particle: "minecraft:block/gray_concrete",
    },
  },
  Vg = {
    textures: {
      down: "minecraft:block/gray_concrete_powder",
      up: "minecraft:block/gray_concrete_powder",
      north: "minecraft:block/gray_concrete_powder",
      south: "minecraft:block/gray_concrete_powder",
      west: "minecraft:block/gray_concrete_powder",
      east: "minecraft:block/gray_concrete_powder",
      particle: "minecraft:block/gray_concrete_powder",
    },
  },
  Gg = {
    textures: {
      down: "minecraft:block/gray_stained_glass",
      up: "minecraft:block/gray_stained_glass",
      north: "minecraft:block/gray_stained_glass",
      south: "minecraft:block/gray_stained_glass",
      west: "minecraft:block/gray_stained_glass",
      east: "minecraft:block/gray_stained_glass",
      particle: "minecraft:block/gray_stained_glass",
    },
  },
  Hg = {
    textures: {
      down: "minecraft:block/gray_terracotta",
      up: "minecraft:block/gray_terracotta",
      north: "minecraft:block/gray_terracotta",
      south: "minecraft:block/gray_terracotta",
      west: "minecraft:block/gray_terracotta",
      east: "minecraft:block/gray_terracotta",
      particle: "minecraft:block/gray_terracotta",
    },
  },
  Wg = {
    textures: {
      down: "minecraft:block/gray_wool",
      up: "minecraft:block/gray_wool",
      north: "minecraft:block/gray_wool",
      south: "minecraft:block/gray_wool",
      west: "minecraft:block/gray_wool",
      east: "minecraft:block/gray_wool",
      particle: "minecraft:block/gray_wool",
    },
  },
  Xg = {
    textures: {
      down: "minecraft:block/green_concrete",
      up: "minecraft:block/green_concrete",
      north: "minecraft:block/green_concrete",
      south: "minecraft:block/green_concrete",
      west: "minecraft:block/green_concrete",
      east: "minecraft:block/green_concrete",
      particle: "minecraft:block/green_concrete",
    },
  },
  qg = {
    textures: {
      down: "minecraft:block/green_concrete_powder",
      up: "minecraft:block/green_concrete_powder",
      north: "minecraft:block/green_concrete_powder",
      south: "minecraft:block/green_concrete_powder",
      west: "minecraft:block/green_concrete_powder",
      east: "minecraft:block/green_concrete_powder",
      particle: "minecraft:block/green_concrete_powder",
    },
  },
  Yg = {
    textures: {
      down: "minecraft:block/green_stained_glass",
      up: "minecraft:block/green_stained_glass",
      north: "minecraft:block/green_stained_glass",
      south: "minecraft:block/green_stained_glass",
      west: "minecraft:block/green_stained_glass",
      east: "minecraft:block/green_stained_glass",
      particle: "minecraft:block/green_stained_glass",
    },
  },
  jg = {
    textures: {
      down: "minecraft:block/green_terracotta",
      up: "minecraft:block/green_terracotta",
      north: "minecraft:block/green_terracotta",
      south: "minecraft:block/green_terracotta",
      west: "minecraft:block/green_terracotta",
      east: "minecraft:block/green_terracotta",
      particle: "minecraft:block/green_terracotta",
    },
  },
  Kg = {
    textures: {
      down: "minecraft:block/green_wool",
      up: "minecraft:block/green_wool",
      north: "minecraft:block/green_wool",
      south: "minecraft:block/green_wool",
      west: "minecraft:block/green_wool",
      east: "minecraft:block/green_wool",
      particle: "minecraft:block/green_wool",
    },
  },
  $g = {
    textures: {
      down: "minecraft:block/hay_block_top",
      up: "minecraft:block/hay_block_top",
      north: "minecraft:block/hay_block_side",
      south: "minecraft:block/hay_block_side",
      west: "minecraft:block/hay_block_side",
      east: "minecraft:block/hay_block_side",
      particle: "minecraft:block/hay_block_side",
    },
  },
  Zg = {
    textures: {
      down: "minecraft:block/hay_block_top",
      up: "minecraft:block/hay_block_top",
      north: "minecraft:block/hay_block_side",
      south: "minecraft:block/hay_block_side",
      west: "minecraft:block/hay_block_side",
      east: "minecraft:block/hay_block_side",
      particle: "minecraft:block/hay_block_side",
    },
  },
  Jg = {
    textures: {
      down: "minecraft:block/honeycomb_block",
      up: "minecraft:block/honeycomb_block",
      north: "minecraft:block/honeycomb_block",
      south: "minecraft:block/honeycomb_block",
      west: "minecraft:block/honeycomb_block",
      east: "minecraft:block/honeycomb_block",
      particle: "minecraft:block/honeycomb_block",
    },
  },
  Qg = {
    textures: {
      down: "block/honey_block_bottom",
      up: "block/honey_block_bottom",
      north: "block/honey_block_bottom",
      south: "block/honey_block_bottom",
      west: "block/honey_block_bottom",
      east: "block/honey_block_bottom",
      particle: "block/honey_block_top",
    },
  },
  ex = {
    textures: {
      down: "minecraft:block/horn_coral_block",
      up: "minecraft:block/horn_coral_block",
      north: "minecraft:block/horn_coral_block",
      south: "minecraft:block/horn_coral_block",
      west: "minecraft:block/horn_coral_block",
      east: "minecraft:block/horn_coral_block",
      particle: "minecraft:block/horn_coral_block",
    },
  },
  tx = {
    textures: {
      down: "minecraft:block/ice",
      up: "minecraft:block/ice",
      north: "minecraft:block/ice",
      south: "minecraft:block/ice",
      west: "minecraft:block/ice",
      east: "minecraft:block/ice",
      particle: "minecraft:block/ice",
    },
  },
  nx = {
    textures: {
      down: "minecraft:block/iron_block",
      up: "minecraft:block/iron_block",
      north: "minecraft:block/iron_block",
      south: "minecraft:block/iron_block",
      west: "minecraft:block/iron_block",
      east: "minecraft:block/iron_block",
      particle: "minecraft:block/iron_block",
    },
  },
  ix = {
    textures: {
      down: "minecraft:block/iron_ore",
      up: "minecraft:block/iron_ore",
      north: "minecraft:block/iron_ore",
      south: "minecraft:block/iron_ore",
      west: "minecraft:block/iron_ore",
      east: "minecraft:block/iron_ore",
      particle: "minecraft:block/iron_ore",
    },
  },
  rx = {
    textures: {
      down: "minecraft:block/pumpkin_top",
      up: "minecraft:block/pumpkin_top",
      north: "minecraft:block/jack_o_lantern",
      south: "minecraft:block/pumpkin_side",
      west: "minecraft:block/pumpkin_side",
      east: "minecraft:block/pumpkin_side",
      particle: "minecraft:block/jack_o_lantern",
    },
  },
  ox = {
    textures: {
      down: "minecraft:block/jigsaw_side",
      up: "minecraft:block/jigsaw_lock",
      north: "minecraft:block/jigsaw_top",
      south: "minecraft:block/jigsaw_bottom",
      west: "minecraft:block/jigsaw_side",
      east: "minecraft:block/jigsaw_side",
      particle: "minecraft:block/jigsaw_top",
    },
  },
  ax = {
    textures: {
      down: "minecraft:block/jukebox_side",
      up: "minecraft:block/jukebox_top",
      north: "minecraft:block/jukebox_side",
      south: "minecraft:block/jukebox_side",
      west: "minecraft:block/jukebox_side",
      east: "minecraft:block/jukebox_side",
      particle: "minecraft:block/jukebox_side",
    },
  },
  sx = {
    textures: {
      down: "minecraft:block/jungle_log_top",
      up: "minecraft:block/jungle_log_top",
      north: "minecraft:block/jungle_log",
      south: "minecraft:block/jungle_log",
      west: "minecraft:block/jungle_log",
      east: "minecraft:block/jungle_log",
      particle: "minecraft:block/jungle_log",
    },
  },
  cx = {
    textures: {
      down: "minecraft:block/jungle_log_top",
      up: "minecraft:block/jungle_log_top",
      north: "minecraft:block/jungle_log",
      south: "minecraft:block/jungle_log",
      west: "minecraft:block/jungle_log",
      east: "minecraft:block/jungle_log",
      particle: "minecraft:block/jungle_log",
    },
  },
  lx = {
    textures: {
      down: "minecraft:block/jungle_planks",
      up: "minecraft:block/jungle_planks",
      north: "minecraft:block/jungle_planks",
      south: "minecraft:block/jungle_planks",
      west: "minecraft:block/jungle_planks",
      east: "minecraft:block/jungle_planks",
      particle: "minecraft:block/jungle_planks",
    },
  },
  fx = {
    textures: {
      down: "minecraft:block/jungle_log",
      up: "minecraft:block/jungle_log",
      north: "minecraft:block/jungle_log",
      south: "minecraft:block/jungle_log",
      west: "minecraft:block/jungle_log",
      east: "minecraft:block/jungle_log",
      particle: "minecraft:block/jungle_log",
    },
  },
  ux = {
    textures: {
      down: "minecraft:block/lapis_block",
      up: "minecraft:block/lapis_block",
      north: "minecraft:block/lapis_block",
      south: "minecraft:block/lapis_block",
      west: "minecraft:block/lapis_block",
      east: "minecraft:block/lapis_block",
      particle: "minecraft:block/lapis_block",
    },
  },
  dx = {
    textures: {
      down: "minecraft:block/lapis_ore",
      up: "minecraft:block/lapis_ore",
      north: "minecraft:block/lapis_ore",
      south: "minecraft:block/lapis_ore",
      west: "minecraft:block/lapis_ore",
      east: "minecraft:block/lapis_ore",
      particle: "minecraft:block/lapis_ore",
    },
  },
  hx = {
    textures: {
      down: "minecraft:block/light_blue_concrete",
      up: "minecraft:block/light_blue_concrete",
      north: "minecraft:block/light_blue_concrete",
      south: "minecraft:block/light_blue_concrete",
      west: "minecraft:block/light_blue_concrete",
      east: "minecraft:block/light_blue_concrete",
      particle: "minecraft:block/light_blue_concrete",
    },
  },
  px = {
    textures: {
      down: "minecraft:block/light_blue_concrete_powder",
      up: "minecraft:block/light_blue_concrete_powder",
      north: "minecraft:block/light_blue_concrete_powder",
      south: "minecraft:block/light_blue_concrete_powder",
      west: "minecraft:block/light_blue_concrete_powder",
      east: "minecraft:block/light_blue_concrete_powder",
      particle: "minecraft:block/light_blue_concrete_powder",
    },
  },
  mx = {
    textures: {
      down: "minecraft:block/light_blue_stained_glass",
      up: "minecraft:block/light_blue_stained_glass",
      north: "minecraft:block/light_blue_stained_glass",
      south: "minecraft:block/light_blue_stained_glass",
      west: "minecraft:block/light_blue_stained_glass",
      east: "minecraft:block/light_blue_stained_glass",
      particle: "minecraft:block/light_blue_stained_glass",
    },
  },
  _x = {
    textures: {
      down: "minecraft:block/light_blue_terracotta",
      up: "minecraft:block/light_blue_terracotta",
      north: "minecraft:block/light_blue_terracotta",
      south: "minecraft:block/light_blue_terracotta",
      west: "minecraft:block/light_blue_terracotta",
      east: "minecraft:block/light_blue_terracotta",
      particle: "minecraft:block/light_blue_terracotta",
    },
  },
  bx = {
    textures: {
      down: "minecraft:block/light_blue_wool",
      up: "minecraft:block/light_blue_wool",
      north: "minecraft:block/light_blue_wool",
      south: "minecraft:block/light_blue_wool",
      west: "minecraft:block/light_blue_wool",
      east: "minecraft:block/light_blue_wool",
      particle: "minecraft:block/light_blue_wool",
    },
  },
  gx = {
    textures: {
      down: "minecraft:block/light_gray_concrete",
      up: "minecraft:block/light_gray_concrete",
      north: "minecraft:block/light_gray_concrete",
      south: "minecraft:block/light_gray_concrete",
      west: "minecraft:block/light_gray_concrete",
      east: "minecraft:block/light_gray_concrete",
      particle: "minecraft:block/light_gray_concrete",
    },
  },
  xx = {
    textures: {
      down: "minecraft:block/light_gray_concrete_powder",
      up: "minecraft:block/light_gray_concrete_powder",
      north: "minecraft:block/light_gray_concrete_powder",
      south: "minecraft:block/light_gray_concrete_powder",
      west: "minecraft:block/light_gray_concrete_powder",
      east: "minecraft:block/light_gray_concrete_powder",
      particle: "minecraft:block/light_gray_concrete_powder",
    },
  },
  kx = {
    textures: {
      down: "minecraft:block/light_gray_stained_glass",
      up: "minecraft:block/light_gray_stained_glass",
      north: "minecraft:block/light_gray_stained_glass",
      south: "minecraft:block/light_gray_stained_glass",
      west: "minecraft:block/light_gray_stained_glass",
      east: "minecraft:block/light_gray_stained_glass",
      particle: "minecraft:block/light_gray_stained_glass",
    },
  },
  vx = {
    textures: {
      down: "minecraft:block/light_gray_terracotta",
      up: "minecraft:block/light_gray_terracotta",
      north: "minecraft:block/light_gray_terracotta",
      south: "minecraft:block/light_gray_terracotta",
      west: "minecraft:block/light_gray_terracotta",
      east: "minecraft:block/light_gray_terracotta",
      particle: "minecraft:block/light_gray_terracotta",
    },
  },
  wx = {
    textures: {
      down: "minecraft:block/light_gray_wool",
      up: "minecraft:block/light_gray_wool",
      north: "minecraft:block/light_gray_wool",
      south: "minecraft:block/light_gray_wool",
      west: "minecraft:block/light_gray_wool",
      east: "minecraft:block/light_gray_wool",
      particle: "minecraft:block/light_gray_wool",
    },
  },
  Mx = {
    textures: {
      down: "minecraft:block/lime_concrete",
      up: "minecraft:block/lime_concrete",
      north: "minecraft:block/lime_concrete",
      south: "minecraft:block/lime_concrete",
      west: "minecraft:block/lime_concrete",
      east: "minecraft:block/lime_concrete",
      particle: "minecraft:block/lime_concrete",
    },
  },
  Sx = {
    textures: {
      down: "minecraft:block/lime_concrete_powder",
      up: "minecraft:block/lime_concrete_powder",
      north: "minecraft:block/lime_concrete_powder",
      south: "minecraft:block/lime_concrete_powder",
      west: "minecraft:block/lime_concrete_powder",
      east: "minecraft:block/lime_concrete_powder",
      particle: "minecraft:block/lime_concrete_powder",
    },
  },
  yx = {
    textures: {
      down: "minecraft:block/lime_stained_glass",
      up: "minecraft:block/lime_stained_glass",
      north: "minecraft:block/lime_stained_glass",
      south: "minecraft:block/lime_stained_glass",
      west: "minecraft:block/lime_stained_glass",
      east: "minecraft:block/lime_stained_glass",
      particle: "minecraft:block/lime_stained_glass",
    },
  },
  Ex = {
    textures: {
      down: "minecraft:block/lime_terracotta",
      up: "minecraft:block/lime_terracotta",
      north: "minecraft:block/lime_terracotta",
      south: "minecraft:block/lime_terracotta",
      west: "minecraft:block/lime_terracotta",
      east: "minecraft:block/lime_terracotta",
      particle: "minecraft:block/lime_terracotta",
    },
  },
  Tx = {
    textures: {
      down: "minecraft:block/lime_wool",
      up: "minecraft:block/lime_wool",
      north: "minecraft:block/lime_wool",
      south: "minecraft:block/lime_wool",
      west: "minecraft:block/lime_wool",
      east: "minecraft:block/lime_wool",
      particle: "minecraft:block/lime_wool",
    },
  },
  Ax = {
    textures: {
      down: "minecraft:block/lodestone_top",
      up: "minecraft:block/lodestone_top",
      north: "minecraft:block/lodestone_side",
      south: "minecraft:block/lodestone_side",
      west: "minecraft:block/lodestone_side",
      east: "minecraft:block/lodestone_side",
      particle: "minecraft:block/lodestone_side",
    },
  },
  Rx = {
    textures: {
      down: "minecraft:block/magenta_concrete",
      up: "minecraft:block/magenta_concrete",
      north: "minecraft:block/magenta_concrete",
      south: "minecraft:block/magenta_concrete",
      west: "minecraft:block/magenta_concrete",
      east: "minecraft:block/magenta_concrete",
      particle: "minecraft:block/magenta_concrete",
    },
  },
  Cx = {
    textures: {
      down: "minecraft:block/magenta_concrete_powder",
      up: "minecraft:block/magenta_concrete_powder",
      north: "minecraft:block/magenta_concrete_powder",
      south: "minecraft:block/magenta_concrete_powder",
      west: "minecraft:block/magenta_concrete_powder",
      east: "minecraft:block/magenta_concrete_powder",
      particle: "minecraft:block/magenta_concrete_powder",
    },
  },
  Px = {
    textures: {
      down: "minecraft:block/magenta_stained_glass",
      up: "minecraft:block/magenta_stained_glass",
      north: "minecraft:block/magenta_stained_glass",
      south: "minecraft:block/magenta_stained_glass",
      west: "minecraft:block/magenta_stained_glass",
      east: "minecraft:block/magenta_stained_glass",
      particle: "minecraft:block/magenta_stained_glass",
    },
  },
  Lx = {
    textures: {
      down: "minecraft:block/magenta_terracotta",
      up: "minecraft:block/magenta_terracotta",
      north: "minecraft:block/magenta_terracotta",
      south: "minecraft:block/magenta_terracotta",
      west: "minecraft:block/magenta_terracotta",
      east: "minecraft:block/magenta_terracotta",
      particle: "minecraft:block/magenta_terracotta",
    },
  },
  Dx = {
    textures: {
      down: "minecraft:block/magenta_wool",
      up: "minecraft:block/magenta_wool",
      north: "minecraft:block/magenta_wool",
      south: "minecraft:block/magenta_wool",
      west: "minecraft:block/magenta_wool",
      east: "minecraft:block/magenta_wool",
      particle: "minecraft:block/magenta_wool",
    },
  },
  Ix = {
    textures: {
      down: "minecraft:block/magma",
      up: "minecraft:block/magma",
      north: "minecraft:block/magma",
      south: "minecraft:block/magma",
      west: "minecraft:block/magma",
      east: "minecraft:block/magma",
      particle: "minecraft:block/magma",
    },
  },
  Ux = {
    textures: {
      down: "minecraft:block/mangrove_log_top",
      up: "minecraft:block/mangrove_log_top",
      north: "minecraft:block/mangrove_log",
      south: "minecraft:block/mangrove_log",
      west: "minecraft:block/mangrove_log",
      east: "minecraft:block/mangrove_log",
      particle: "minecraft:block/mangrove_log",
    },
  },
  Nx = {
    textures: {
      down: "minecraft:block/mangrove_log_top",
      up: "minecraft:block/mangrove_log_top",
      north: "minecraft:block/mangrove_log",
      south: "minecraft:block/mangrove_log",
      west: "minecraft:block/mangrove_log",
      east: "minecraft:block/mangrove_log",
      particle: "minecraft:block/mangrove_log",
    },
  },
  Fx = {
    textures: {
      down: "minecraft:block/mangrove_planks",
      up: "minecraft:block/mangrove_planks",
      north: "minecraft:block/mangrove_planks",
      south: "minecraft:block/mangrove_planks",
      west: "minecraft:block/mangrove_planks",
      east: "minecraft:block/mangrove_planks",
      particle: "minecraft:block/mangrove_planks",
    },
  },
  Ox = {
    textures: {
      down: "minecraft:block/mangrove_log",
      up: "minecraft:block/mangrove_log",
      north: "minecraft:block/mangrove_log",
      south: "minecraft:block/mangrove_log",
      west: "minecraft:block/mangrove_log",
      east: "minecraft:block/mangrove_log",
      particle: "minecraft:block/mangrove_log",
    },
  },
  Bx = {
    textures: {
      down: "minecraft:block/melon_top",
      up: "minecraft:block/melon_top",
      north: "minecraft:block/melon_side",
      south: "minecraft:block/melon_side",
      west: "minecraft:block/melon_side",
      east: "minecraft:block/melon_side",
      particle: "minecraft:block/melon_side",
    },
  },
  zx = {
    textures: {
      down: "minecraft:block/mossy_cobblestone",
      up: "minecraft:block/mossy_cobblestone",
      north: "minecraft:block/mossy_cobblestone",
      south: "minecraft:block/mossy_cobblestone",
      west: "minecraft:block/mossy_cobblestone",
      east: "minecraft:block/mossy_cobblestone",
      particle: "minecraft:block/mossy_cobblestone",
    },
  },
  Vx = {
    textures: {
      down: "minecraft:block/mossy_stone_bricks",
      up: "minecraft:block/mossy_stone_bricks",
      north: "minecraft:block/mossy_stone_bricks",
      south: "minecraft:block/mossy_stone_bricks",
      west: "minecraft:block/mossy_stone_bricks",
      east: "minecraft:block/mossy_stone_bricks",
      particle: "minecraft:block/mossy_stone_bricks",
    },
  },
  Gx = {
    textures: {
      down: "minecraft:block/moss_block",
      up: "minecraft:block/moss_block",
      north: "minecraft:block/moss_block",
      south: "minecraft:block/moss_block",
      west: "minecraft:block/moss_block",
      east: "minecraft:block/moss_block",
      particle: "minecraft:block/moss_block",
    },
  },
  Hx = {
    textures: {
      down: "minecraft:block/mud",
      up: "minecraft:block/mud",
      north: "minecraft:block/mud",
      south: "minecraft:block/mud",
      west: "minecraft:block/mud",
      east: "minecraft:block/mud",
      particle: "minecraft:block/mud",
    },
  },
  Wx = {
    textures: {
      down: "minecraft:block/muddy_mangrove_roots_top",
      up: "minecraft:block/muddy_mangrove_roots_top",
      north: "minecraft:block/muddy_mangrove_roots_side",
      south: "minecraft:block/muddy_mangrove_roots_side",
      west: "minecraft:block/muddy_mangrove_roots_side",
      east: "minecraft:block/muddy_mangrove_roots_side",
      particle: "minecraft:block/muddy_mangrove_roots_side",
    },
  },
  Xx = {
    textures: {
      down: "minecraft:block/mud_bricks",
      up: "minecraft:block/mud_bricks",
      north: "minecraft:block/mud_bricks",
      south: "minecraft:block/mud_bricks",
      west: "minecraft:block/mud_bricks",
      east: "minecraft:block/mud_bricks",
      particle: "minecraft:block/mud_bricks",
    },
  },
  qx = {
    textures: {
      down: "minecraft:block/mushroom_stem",
      up: "minecraft:block/mushroom_stem",
      north: "minecraft:block/mushroom_stem",
      south: "minecraft:block/mushroom_stem",
      west: "minecraft:block/mushroom_stem",
      east: "minecraft:block/mushroom_stem",
      particle: "minecraft:block/mushroom_stem",
    },
  },
  Yx = {
    textures: {
      down: "minecraft:block/netherite_block",
      up: "minecraft:block/netherite_block",
      north: "minecraft:block/netherite_block",
      south: "minecraft:block/netherite_block",
      west: "minecraft:block/netherite_block",
      east: "minecraft:block/netherite_block",
      particle: "minecraft:block/netherite_block",
    },
  },
  jx = {
    textures: {
      down: "minecraft:block/netherrack",
      up: "minecraft:block/netherrack",
      north: "minecraft:block/netherrack",
      south: "minecraft:block/netherrack",
      west: "minecraft:block/netherrack",
      east: "minecraft:block/netherrack",
      particle: "minecraft:block/netherrack",
    },
  },
  Kx = {
    textures: {
      down: "minecraft:block/nether_bricks",
      up: "minecraft:block/nether_bricks",
      north: "minecraft:block/nether_bricks",
      south: "minecraft:block/nether_bricks",
      west: "minecraft:block/nether_bricks",
      east: "minecraft:block/nether_bricks",
      particle: "minecraft:block/nether_bricks",
    },
  },
  $x = {
    textures: {
      down: "minecraft:block/nether_gold_ore",
      up: "minecraft:block/nether_gold_ore",
      north: "minecraft:block/nether_gold_ore",
      south: "minecraft:block/nether_gold_ore",
      west: "minecraft:block/nether_gold_ore",
      east: "minecraft:block/nether_gold_ore",
      particle: "minecraft:block/nether_gold_ore",
    },
  },
  Zx = {
    textures: {
      down: "minecraft:block/nether_quartz_ore",
      up: "minecraft:block/nether_quartz_ore",
      north: "minecraft:block/nether_quartz_ore",
      south: "minecraft:block/nether_quartz_ore",
      west: "minecraft:block/nether_quartz_ore",
      east: "minecraft:block/nether_quartz_ore",
      particle: "minecraft:block/nether_quartz_ore",
    },
  },
  Jx = {
    textures: {
      down: "minecraft:block/nether_wart_block",
      up: "minecraft:block/nether_wart_block",
      north: "minecraft:block/nether_wart_block",
      south: "minecraft:block/nether_wart_block",
      west: "minecraft:block/nether_wart_block",
      east: "minecraft:block/nether_wart_block",
      particle: "minecraft:block/nether_wart_block",
    },
  },
  Qx = {
    textures: {
      down: "minecraft:block/note_block",
      up: "minecraft:block/note_block",
      north: "minecraft:block/note_block",
      south: "minecraft:block/note_block",
      west: "minecraft:block/note_block",
      east: "minecraft:block/note_block",
      particle: "minecraft:block/note_block",
    },
  },
  ek = {
    textures: {
      down: "minecraft:block/oak_log_top",
      up: "minecraft:block/oak_log_top",
      north: "minecraft:block/oak_log",
      south: "minecraft:block/oak_log",
      west: "minecraft:block/oak_log",
      east: "minecraft:block/oak_log",
      particle: "minecraft:block/oak_log",
    },
  },
  tk = {
    textures: {
      down: "minecraft:block/oak_log_top",
      up: "minecraft:block/oak_log_top",
      north: "minecraft:block/oak_log",
      south: "minecraft:block/oak_log",
      west: "minecraft:block/oak_log",
      east: "minecraft:block/oak_log",
      particle: "minecraft:block/oak_log",
    },
  },
  nk = {
    textures: {
      down: "minecraft:block/oak_planks",
      up: "minecraft:block/oak_planks",
      north: "minecraft:block/oak_planks",
      south: "minecraft:block/oak_planks",
      west: "minecraft:block/oak_planks",
      east: "minecraft:block/oak_planks",
      particle: "minecraft:block/oak_planks",
    },
  },
  ik = {
    textures: {
      down: "minecraft:block/oak_log",
      up: "minecraft:block/oak_log",
      north: "minecraft:block/oak_log",
      south: "minecraft:block/oak_log",
      west: "minecraft:block/oak_log",
      east: "minecraft:block/oak_log",
      particle: "minecraft:block/oak_log",
    },
  },
  rk = {
    textures: {
      down: "block/observer_top",
      up: "block/observer_top",
      north: "block/observer_front",
      south: "block/observer_back",
      west: "block/observer_side",
      east: "block/observer_side",
      particle: "block/observer_front",
    },
  },
  ok = {
    textures: {
      down: "minecraft:block/obsidian",
      up: "minecraft:block/obsidian",
      north: "minecraft:block/obsidian",
      south: "minecraft:block/obsidian",
      west: "minecraft:block/obsidian",
      east: "minecraft:block/obsidian",
      particle: "minecraft:block/obsidian",
    },
  },
  ak = {
    textures: {
      down: "minecraft:block/ochre_froglight_top",
      up: "minecraft:block/ochre_froglight_top",
      north: "minecraft:block/ochre_froglight_side",
      south: "minecraft:block/ochre_froglight_side",
      west: "minecraft:block/ochre_froglight_side",
      east: "minecraft:block/ochre_froglight_side",
      particle: "minecraft:block/ochre_froglight_side",
    },
  },
  sk = {
    textures: {
      down: "minecraft:block/ochre_froglight_top",
      up: "minecraft:block/ochre_froglight_top",
      north: "minecraft:block/ochre_froglight_side",
      south: "minecraft:block/ochre_froglight_side",
      west: "minecraft:block/ochre_froglight_side",
      east: "minecraft:block/ochre_froglight_side",
      particle: "minecraft:block/ochre_froglight_side",
    },
  },
  ck = {
    textures: {
      down: "minecraft:block/orange_concrete",
      up: "minecraft:block/orange_concrete",
      north: "minecraft:block/orange_concrete",
      south: "minecraft:block/orange_concrete",
      west: "minecraft:block/orange_concrete",
      east: "minecraft:block/orange_concrete",
      particle: "minecraft:block/orange_concrete",
    },
  },
  lk = {
    textures: {
      down: "minecraft:block/orange_concrete_powder",
      up: "minecraft:block/orange_concrete_powder",
      north: "minecraft:block/orange_concrete_powder",
      south: "minecraft:block/orange_concrete_powder",
      west: "minecraft:block/orange_concrete_powder",
      east: "minecraft:block/orange_concrete_powder",
      particle: "minecraft:block/orange_concrete_powder",
    },
  },
  fk = {
    textures: {
      down: "minecraft:block/orange_stained_glass",
      up: "minecraft:block/orange_stained_glass",
      north: "minecraft:block/orange_stained_glass",
      south: "minecraft:block/orange_stained_glass",
      west: "minecraft:block/orange_stained_glass",
      east: "minecraft:block/orange_stained_glass",
      particle: "minecraft:block/orange_stained_glass",
    },
  },
  uk = {
    textures: {
      down: "minecraft:block/orange_terracotta",
      up: "minecraft:block/orange_terracotta",
      north: "minecraft:block/orange_terracotta",
      south: "minecraft:block/orange_terracotta",
      west: "minecraft:block/orange_terracotta",
      east: "minecraft:block/orange_terracotta",
      particle: "minecraft:block/orange_terracotta",
    },
  },
  dk = {
    textures: {
      down: "minecraft:block/orange_wool",
      up: "minecraft:block/orange_wool",
      north: "minecraft:block/orange_wool",
      south: "minecraft:block/orange_wool",
      west: "minecraft:block/orange_wool",
      east: "minecraft:block/orange_wool",
      particle: "minecraft:block/orange_wool",
    },
  },
  hk = {
    textures: {
      particle: "#side",
      down: "#side",
      up: "#front",
      north: "#side",
      east: "#side",
      south: "#side",
      west: "#side",
    },
  },
  pk = {
    textures: {
      particle: "#front",
      down: "#bottom",
      up: "#top",
      north: "#front",
      east: "#side",
      south: "#side",
      west: "#side",
    },
  },
  mk = {
    textures: {
      down: "minecraft:block/oxidized_chiseled_copper",
      up: "minecraft:block/oxidized_chiseled_copper",
      north: "minecraft:block/oxidized_chiseled_copper",
      south: "minecraft:block/oxidized_chiseled_copper",
      west: "minecraft:block/oxidized_chiseled_copper",
      east: "minecraft:block/oxidized_chiseled_copper",
      particle: "minecraft:block/oxidized_chiseled_copper",
    },
  },
  _k = {
    textures: {
      down: "minecraft:block/oxidized_copper",
      up: "minecraft:block/oxidized_copper",
      north: "minecraft:block/oxidized_copper",
      south: "minecraft:block/oxidized_copper",
      west: "minecraft:block/oxidized_copper",
      east: "minecraft:block/oxidized_copper",
      particle: "minecraft:block/oxidized_copper",
    },
  },
  bk = {
    textures: {
      down: "minecraft:block/oxidized_copper_bulb",
      up: "minecraft:block/oxidized_copper_bulb",
      north: "minecraft:block/oxidized_copper_bulb",
      south: "minecraft:block/oxidized_copper_bulb",
      west: "minecraft:block/oxidized_copper_bulb",
      east: "minecraft:block/oxidized_copper_bulb",
      particle: "minecraft:block/oxidized_copper_bulb",
    },
  },
  gk = {
    textures: {
      down: "minecraft:block/oxidized_copper_bulb_lit",
      up: "minecraft:block/oxidized_copper_bulb_lit",
      north: "minecraft:block/oxidized_copper_bulb_lit",
      south: "minecraft:block/oxidized_copper_bulb_lit",
      west: "minecraft:block/oxidized_copper_bulb_lit",
      east: "minecraft:block/oxidized_copper_bulb_lit",
      particle: "minecraft:block/oxidized_copper_bulb_lit",
    },
  },
  xk = {
    textures: {
      down: "minecraft:block/oxidized_copper_bulb_lit_powered",
      up: "minecraft:block/oxidized_copper_bulb_lit_powered",
      north: "minecraft:block/oxidized_copper_bulb_lit_powered",
      south: "minecraft:block/oxidized_copper_bulb_lit_powered",
      west: "minecraft:block/oxidized_copper_bulb_lit_powered",
      east: "minecraft:block/oxidized_copper_bulb_lit_powered",
      particle: "minecraft:block/oxidized_copper_bulb_lit_powered",
    },
  },
  kk = {
    textures: {
      down: "minecraft:block/oxidized_copper_bulb_powered",
      up: "minecraft:block/oxidized_copper_bulb_powered",
      north: "minecraft:block/oxidized_copper_bulb_powered",
      south: "minecraft:block/oxidized_copper_bulb_powered",
      west: "minecraft:block/oxidized_copper_bulb_powered",
      east: "minecraft:block/oxidized_copper_bulb_powered",
      particle: "minecraft:block/oxidized_copper_bulb_powered",
    },
  },
  vk = {
    textures: {
      down: "minecraft:block/oxidized_copper_grate",
      up: "minecraft:block/oxidized_copper_grate",
      north: "minecraft:block/oxidized_copper_grate",
      south: "minecraft:block/oxidized_copper_grate",
      west: "minecraft:block/oxidized_copper_grate",
      east: "minecraft:block/oxidized_copper_grate",
      particle: "minecraft:block/oxidized_copper_grate",
    },
  },
  wk = {
    textures: {
      down: "minecraft:block/oxidized_cut_copper",
      up: "minecraft:block/oxidized_cut_copper",
      north: "minecraft:block/oxidized_cut_copper",
      south: "minecraft:block/oxidized_cut_copper",
      west: "minecraft:block/oxidized_cut_copper",
      east: "minecraft:block/oxidized_cut_copper",
      particle: "minecraft:block/oxidized_cut_copper",
    },
  },
  Mk = {
    textures: {
      down: "minecraft:block/packed_ice",
      up: "minecraft:block/packed_ice",
      north: "minecraft:block/packed_ice",
      south: "minecraft:block/packed_ice",
      west: "minecraft:block/packed_ice",
      east: "minecraft:block/packed_ice",
      particle: "minecraft:block/packed_ice",
    },
  },
  Sk = {
    textures: {
      down: "minecraft:block/packed_mud",
      up: "minecraft:block/packed_mud",
      north: "minecraft:block/packed_mud",
      south: "minecraft:block/packed_mud",
      west: "minecraft:block/packed_mud",
      east: "minecraft:block/packed_mud",
      particle: "minecraft:block/packed_mud",
    },
  },
  yk = {
    textures: {
      down: "minecraft:block/pale_moss_block",
      up: "minecraft:block/pale_moss_block",
      north: "minecraft:block/pale_moss_block",
      south: "minecraft:block/pale_moss_block",
      west: "minecraft:block/pale_moss_block",
      east: "minecraft:block/pale_moss_block",
      particle: "minecraft:block/pale_moss_block",
    },
  },
  Ek = {
    textures: {
      down: "minecraft:block/pale_oak_log_top",
      up: "minecraft:block/pale_oak_log_top",
      north: "minecraft:block/pale_oak_log",
      south: "minecraft:block/pale_oak_log",
      west: "minecraft:block/pale_oak_log",
      east: "minecraft:block/pale_oak_log",
      particle: "minecraft:block/pale_oak_log",
    },
  },
  Tk = {
    textures: {
      down: "minecraft:block/pale_oak_log_top",
      up: "minecraft:block/pale_oak_log_top",
      north: "minecraft:block/pale_oak_log",
      south: "minecraft:block/pale_oak_log",
      west: "minecraft:block/pale_oak_log",
      east: "minecraft:block/pale_oak_log",
      particle: "minecraft:block/pale_oak_log",
    },
  },
  Ak = {
    textures: {
      down: "minecraft:block/pale_oak_planks",
      up: "minecraft:block/pale_oak_planks",
      north: "minecraft:block/pale_oak_planks",
      south: "minecraft:block/pale_oak_planks",
      west: "minecraft:block/pale_oak_planks",
      east: "minecraft:block/pale_oak_planks",
      particle: "minecraft:block/pale_oak_planks",
    },
  },
  Rk = {
    textures: {
      down: "minecraft:block/pale_oak_log",
      up: "minecraft:block/pale_oak_log",
      north: "minecraft:block/pale_oak_log",
      south: "minecraft:block/pale_oak_log",
      west: "minecraft:block/pale_oak_log",
      east: "minecraft:block/pale_oak_log",
      particle: "minecraft:block/pale_oak_log",
    },
  },
  Ck = {
    textures: {
      down: "minecraft:block/pearlescent_froglight_top",
      up: "minecraft:block/pearlescent_froglight_top",
      north: "minecraft:block/pearlescent_froglight_side",
      south: "minecraft:block/pearlescent_froglight_side",
      west: "minecraft:block/pearlescent_froglight_side",
      east: "minecraft:block/pearlescent_froglight_side",
      particle: "minecraft:block/pearlescent_froglight_side",
    },
  },
  Pk = {
    textures: {
      down: "minecraft:block/pearlescent_froglight_top",
      up: "minecraft:block/pearlescent_froglight_top",
      north: "minecraft:block/pearlescent_froglight_side",
      south: "minecraft:block/pearlescent_froglight_side",
      west: "minecraft:block/pearlescent_froglight_side",
      east: "minecraft:block/pearlescent_froglight_side",
      particle: "minecraft:block/pearlescent_froglight_side",
    },
  },
  Lk = {
    textures: {
      down: "minecraft:block/pink_concrete",
      up: "minecraft:block/pink_concrete",
      north: "minecraft:block/pink_concrete",
      south: "minecraft:block/pink_concrete",
      west: "minecraft:block/pink_concrete",
      east: "minecraft:block/pink_concrete",
      particle: "minecraft:block/pink_concrete",
    },
  },
  Dk = {
    textures: {
      down: "minecraft:block/pink_concrete_powder",
      up: "minecraft:block/pink_concrete_powder",
      north: "minecraft:block/pink_concrete_powder",
      south: "minecraft:block/pink_concrete_powder",
      west: "minecraft:block/pink_concrete_powder",
      east: "minecraft:block/pink_concrete_powder",
      particle: "minecraft:block/pink_concrete_powder",
    },
  },
  Ik = {
    textures: {
      down: "minecraft:block/pink_stained_glass",
      up: "minecraft:block/pink_stained_glass",
      north: "minecraft:block/pink_stained_glass",
      south: "minecraft:block/pink_stained_glass",
      west: "minecraft:block/pink_stained_glass",
      east: "minecraft:block/pink_stained_glass",
      particle: "minecraft:block/pink_stained_glass",
    },
  },
  Uk = {
    textures: {
      down: "minecraft:block/pink_terracotta",
      up: "minecraft:block/pink_terracotta",
      north: "minecraft:block/pink_terracotta",
      south: "minecraft:block/pink_terracotta",
      west: "minecraft:block/pink_terracotta",
      east: "minecraft:block/pink_terracotta",
      particle: "minecraft:block/pink_terracotta",
    },
  },
  Nk = {
    textures: {
      down: "minecraft:block/pink_wool",
      up: "minecraft:block/pink_wool",
      north: "minecraft:block/pink_wool",
      south: "minecraft:block/pink_wool",
      west: "minecraft:block/pink_wool",
      east: "minecraft:block/pink_wool",
      particle: "minecraft:block/pink_wool",
    },
  },
  Fk = {
    textures: {
      down: "minecraft:block/polished_andesite",
      up: "minecraft:block/polished_andesite",
      north: "minecraft:block/polished_andesite",
      south: "minecraft:block/polished_andesite",
      west: "minecraft:block/polished_andesite",
      east: "minecraft:block/polished_andesite",
      particle: "minecraft:block/polished_andesite",
    },
  },
  Ok = {
    textures: {
      down: "minecraft:block/polished_basalt_top",
      up: "minecraft:block/polished_basalt_top",
      north: "minecraft:block/polished_basalt_side",
      south: "minecraft:block/polished_basalt_side",
      west: "minecraft:block/polished_basalt_side",
      east: "minecraft:block/polished_basalt_side",
      particle: "minecraft:block/polished_basalt_side",
    },
  },
  Bk = {
    textures: {
      down: "minecraft:block/polished_blackstone",
      up: "minecraft:block/polished_blackstone",
      north: "minecraft:block/polished_blackstone",
      south: "minecraft:block/polished_blackstone",
      west: "minecraft:block/polished_blackstone",
      east: "minecraft:block/polished_blackstone",
      particle: "minecraft:block/polished_blackstone",
    },
  },
  zk = {
    textures: {
      down: "minecraft:block/polished_blackstone_bricks",
      up: "minecraft:block/polished_blackstone_bricks",
      north: "minecraft:block/polished_blackstone_bricks",
      south: "minecraft:block/polished_blackstone_bricks",
      west: "minecraft:block/polished_blackstone_bricks",
      east: "minecraft:block/polished_blackstone_bricks",
      particle: "minecraft:block/polished_blackstone_bricks",
    },
  },
  Vk = {
    textures: {
      down: "minecraft:block/polished_deepslate",
      up: "minecraft:block/polished_deepslate",
      north: "minecraft:block/polished_deepslate",
      south: "minecraft:block/polished_deepslate",
      west: "minecraft:block/polished_deepslate",
      east: "minecraft:block/polished_deepslate",
      particle: "minecraft:block/polished_deepslate",
    },
  },
  Gk = {
    textures: {
      down: "minecraft:block/polished_diorite",
      up: "minecraft:block/polished_diorite",
      north: "minecraft:block/polished_diorite",
      south: "minecraft:block/polished_diorite",
      west: "minecraft:block/polished_diorite",
      east: "minecraft:block/polished_diorite",
      particle: "minecraft:block/polished_diorite",
    },
  },
  Hk = {
    textures: {
      down: "minecraft:block/polished_granite",
      up: "minecraft:block/polished_granite",
      north: "minecraft:block/polished_granite",
      south: "minecraft:block/polished_granite",
      west: "minecraft:block/polished_granite",
      east: "minecraft:block/polished_granite",
      particle: "minecraft:block/polished_granite",
    },
  },
  Wk = {
    textures: {
      down: "minecraft:block/polished_tuff",
      up: "minecraft:block/polished_tuff",
      north: "minecraft:block/polished_tuff",
      south: "minecraft:block/polished_tuff",
      west: "minecraft:block/polished_tuff",
      east: "minecraft:block/polished_tuff",
      particle: "minecraft:block/polished_tuff",
    },
  },
  Xk = {
    textures: {
      down: "minecraft:block/prismarine",
      up: "minecraft:block/prismarine",
      north: "minecraft:block/prismarine",
      south: "minecraft:block/prismarine",
      west: "minecraft:block/prismarine",
      east: "minecraft:block/prismarine",
      particle: "minecraft:block/prismarine",
    },
  },
  qk = {
    textures: {
      down: "minecraft:block/prismarine_bricks",
      up: "minecraft:block/prismarine_bricks",
      north: "minecraft:block/prismarine_bricks",
      south: "minecraft:block/prismarine_bricks",
      west: "minecraft:block/prismarine_bricks",
      east: "minecraft:block/prismarine_bricks",
      particle: "minecraft:block/prismarine_bricks",
    },
  },
  Yk = {
    textures: {
      down: "block/pumpkin_top",
      up: "block/pumpkin_top",
      north: "block/pumpkin_side",
      south: "block/pumpkin_side",
      west: "block/pumpkin_side",
      east: "block/pumpkin_side",
      particle: "block/pumpkin_side",
    },
  },
  jk = {
    textures: {
      down: "minecraft:block/purple_concrete",
      up: "minecraft:block/purple_concrete",
      north: "minecraft:block/purple_concrete",
      south: "minecraft:block/purple_concrete",
      west: "minecraft:block/purple_concrete",
      east: "minecraft:block/purple_concrete",
      particle: "minecraft:block/purple_concrete",
    },
  },
  Kk = {
    textures: {
      down: "minecraft:block/purple_concrete_powder",
      up: "minecraft:block/purple_concrete_powder",
      north: "minecraft:block/purple_concrete_powder",
      south: "minecraft:block/purple_concrete_powder",
      west: "minecraft:block/purple_concrete_powder",
      east: "minecraft:block/purple_concrete_powder",
      particle: "minecraft:block/purple_concrete_powder",
    },
  },
  $k = {
    textures: {
      down: "minecraft:block/purple_stained_glass",
      up: "minecraft:block/purple_stained_glass",
      north: "minecraft:block/purple_stained_glass",
      south: "minecraft:block/purple_stained_glass",
      west: "minecraft:block/purple_stained_glass",
      east: "minecraft:block/purple_stained_glass",
      particle: "minecraft:block/purple_stained_glass",
    },
  },
  Zk = {
    textures: {
      down: "minecraft:block/purple_terracotta",
      up: "minecraft:block/purple_terracotta",
      north: "minecraft:block/purple_terracotta",
      south: "minecraft:block/purple_terracotta",
      west: "minecraft:block/purple_terracotta",
      east: "minecraft:block/purple_terracotta",
      particle: "minecraft:block/purple_terracotta",
    },
  },
  Jk = {
    textures: {
      down: "minecraft:block/purple_wool",
      up: "minecraft:block/purple_wool",
      north: "minecraft:block/purple_wool",
      south: "minecraft:block/purple_wool",
      west: "minecraft:block/purple_wool",
      east: "minecraft:block/purple_wool",
      particle: "minecraft:block/purple_wool",
    },
  },
  Qk = {
    textures: {
      down: "minecraft:block/purpur_block",
      up: "minecraft:block/purpur_block",
      north: "minecraft:block/purpur_block",
      south: "minecraft:block/purpur_block",
      west: "minecraft:block/purpur_block",
      east: "minecraft:block/purpur_block",
      particle: "minecraft:block/purpur_block",
    },
  },
  e0 = {
    textures: {
      down: "minecraft:block/purpur_pillar_top",
      up: "minecraft:block/purpur_pillar_top",
      north: "minecraft:block/purpur_pillar",
      south: "minecraft:block/purpur_pillar",
      west: "minecraft:block/purpur_pillar",
      east: "minecraft:block/purpur_pillar",
      particle: "minecraft:block/purpur_pillar",
    },
  },
  t0 = {
    textures: {
      down: "minecraft:block/purpur_pillar_top",
      up: "minecraft:block/purpur_pillar_top",
      north: "minecraft:block/purpur_pillar",
      south: "minecraft:block/purpur_pillar",
      west: "minecraft:block/purpur_pillar",
      east: "minecraft:block/purpur_pillar",
      particle: "minecraft:block/purpur_pillar",
    },
  },
  n0 = {
    textures: {
      down: "minecraft:block/quartz_block_top",
      up: "minecraft:block/quartz_block_top",
      north: "minecraft:block/quartz_block_side",
      south: "minecraft:block/quartz_block_side",
      west: "minecraft:block/quartz_block_side",
      east: "minecraft:block/quartz_block_side",
      particle: "minecraft:block/quartz_block_side",
    },
  },
  i0 = {
    textures: {
      down: "minecraft:block/quartz_bricks",
      up: "minecraft:block/quartz_bricks",
      north: "minecraft:block/quartz_bricks",
      south: "minecraft:block/quartz_bricks",
      west: "minecraft:block/quartz_bricks",
      east: "minecraft:block/quartz_bricks",
      particle: "minecraft:block/quartz_bricks",
    },
  },
  r0 = {
    textures: {
      down: "minecraft:block/quartz_pillar_top",
      up: "minecraft:block/quartz_pillar_top",
      north: "minecraft:block/quartz_pillar",
      south: "minecraft:block/quartz_pillar",
      west: "minecraft:block/quartz_pillar",
      east: "minecraft:block/quartz_pillar",
      particle: "minecraft:block/quartz_pillar",
    },
  },
  o0 = {
    textures: {
      down: "minecraft:block/quartz_pillar_top",
      up: "minecraft:block/quartz_pillar_top",
      north: "minecraft:block/quartz_pillar",
      south: "minecraft:block/quartz_pillar",
      west: "minecraft:block/quartz_pillar",
      east: "minecraft:block/quartz_pillar",
      particle: "minecraft:block/quartz_pillar",
    },
  },
  a0 = {
    textures: {
      down: "minecraft:block/raw_copper_block",
      up: "minecraft:block/raw_copper_block",
      north: "minecraft:block/raw_copper_block",
      south: "minecraft:block/raw_copper_block",
      west: "minecraft:block/raw_copper_block",
      east: "minecraft:block/raw_copper_block",
      particle: "minecraft:block/raw_copper_block",
    },
  },
  s0 = {
    textures: {
      down: "minecraft:block/raw_gold_block",
      up: "minecraft:block/raw_gold_block",
      north: "minecraft:block/raw_gold_block",
      south: "minecraft:block/raw_gold_block",
      west: "minecraft:block/raw_gold_block",
      east: "minecraft:block/raw_gold_block",
      particle: "minecraft:block/raw_gold_block",
    },
  },
  c0 = {
    textures: {
      down: "minecraft:block/raw_iron_block",
      up: "minecraft:block/raw_iron_block",
      north: "minecraft:block/raw_iron_block",
      south: "minecraft:block/raw_iron_block",
      west: "minecraft:block/raw_iron_block",
      east: "minecraft:block/raw_iron_block",
      particle: "minecraft:block/raw_iron_block",
    },
  },
  l0 = {
    textures: {
      down: "minecraft:block/redstone_block",
      up: "minecraft:block/redstone_block",
      north: "minecraft:block/redstone_block",
      south: "minecraft:block/redstone_block",
      west: "minecraft:block/redstone_block",
      east: "minecraft:block/redstone_block",
      particle: "minecraft:block/redstone_block",
    },
  },
  f0 = {
    textures: {
      down: "minecraft:block/redstone_lamp",
      up: "minecraft:block/redstone_lamp",
      north: "minecraft:block/redstone_lamp",
      south: "minecraft:block/redstone_lamp",
      west: "minecraft:block/redstone_lamp",
      east: "minecraft:block/redstone_lamp",
      particle: "minecraft:block/redstone_lamp",
    },
  },
  u0 = {
    textures: {
      down: "minecraft:block/redstone_lamp_on",
      up: "minecraft:block/redstone_lamp_on",
      north: "minecraft:block/redstone_lamp_on",
      south: "minecraft:block/redstone_lamp_on",
      west: "minecraft:block/redstone_lamp_on",
      east: "minecraft:block/redstone_lamp_on",
      particle: "minecraft:block/redstone_lamp_on",
    },
  },
  d0 = {
    textures: {
      down: "minecraft:block/redstone_ore",
      up: "minecraft:block/redstone_ore",
      north: "minecraft:block/redstone_ore",
      south: "minecraft:block/redstone_ore",
      west: "minecraft:block/redstone_ore",
      east: "minecraft:block/redstone_ore",
      particle: "minecraft:block/redstone_ore",
    },
  },
  h0 = {
    textures: {
      down: "minecraft:block/red_concrete",
      up: "minecraft:block/red_concrete",
      north: "minecraft:block/red_concrete",
      south: "minecraft:block/red_concrete",
      west: "minecraft:block/red_concrete",
      east: "minecraft:block/red_concrete",
      particle: "minecraft:block/red_concrete",
    },
  },
  p0 = {
    textures: {
      down: "minecraft:block/red_concrete_powder",
      up: "minecraft:block/red_concrete_powder",
      north: "minecraft:block/red_concrete_powder",
      south: "minecraft:block/red_concrete_powder",
      west: "minecraft:block/red_concrete_powder",
      east: "minecraft:block/red_concrete_powder",
      particle: "minecraft:block/red_concrete_powder",
    },
  },
  m0 = {
    textures: {
      down: "minecraft:block/red_mushroom_block",
      up: "minecraft:block/red_mushroom_block",
      north: "minecraft:block/red_mushroom_block",
      south: "minecraft:block/red_mushroom_block",
      west: "minecraft:block/red_mushroom_block",
      east: "minecraft:block/red_mushroom_block",
      particle: "minecraft:block/red_mushroom_block",
    },
  },
  _0 = {
    textures: {
      down: "minecraft:block/red_nether_bricks",
      up: "minecraft:block/red_nether_bricks",
      north: "minecraft:block/red_nether_bricks",
      south: "minecraft:block/red_nether_bricks",
      west: "minecraft:block/red_nether_bricks",
      east: "minecraft:block/red_nether_bricks",
      particle: "minecraft:block/red_nether_bricks",
    },
  },
  b0 = {
    textures: {
      down: "minecraft:block/red_sand",
      up: "minecraft:block/red_sand",
      north: "minecraft:block/red_sand",
      south: "minecraft:block/red_sand",
      west: "minecraft:block/red_sand",
      east: "minecraft:block/red_sand",
      particle: "minecraft:block/red_sand",
    },
  },
  g0 = {
    textures: {
      down: "minecraft:block/red_stained_glass",
      up: "minecraft:block/red_stained_glass",
      north: "minecraft:block/red_stained_glass",
      south: "minecraft:block/red_stained_glass",
      west: "minecraft:block/red_stained_glass",
      east: "minecraft:block/red_stained_glass",
      particle: "minecraft:block/red_stained_glass",
    },
  },
  x0 = {
    textures: {
      down: "minecraft:block/red_terracotta",
      up: "minecraft:block/red_terracotta",
      north: "minecraft:block/red_terracotta",
      south: "minecraft:block/red_terracotta",
      west: "minecraft:block/red_terracotta",
      east: "minecraft:block/red_terracotta",
      particle: "minecraft:block/red_terracotta",
    },
  },
  k0 = {
    textures: {
      down: "minecraft:block/red_wool",
      up: "minecraft:block/red_wool",
      north: "minecraft:block/red_wool",
      south: "minecraft:block/red_wool",
      west: "minecraft:block/red_wool",
      east: "minecraft:block/red_wool",
      particle: "minecraft:block/red_wool",
    },
  },
  v0 = {
    textures: {
      down: "minecraft:block/resin_block",
      up: "minecraft:block/resin_block",
      north: "minecraft:block/resin_block",
      south: "minecraft:block/resin_block",
      west: "minecraft:block/resin_block",
      east: "minecraft:block/resin_block",
      particle: "minecraft:block/resin_block",
    },
  },
  w0 = {
    textures: {
      down: "minecraft:block/resin_bricks",
      up: "minecraft:block/resin_bricks",
      north: "minecraft:block/resin_bricks",
      south: "minecraft:block/resin_bricks",
      west: "minecraft:block/resin_bricks",
      east: "minecraft:block/resin_bricks",
      particle: "minecraft:block/resin_bricks",
    },
  },
  M0 = {
    textures: {
      down: "minecraft:block/rooted_dirt",
      up: "minecraft:block/rooted_dirt",
      north: "minecraft:block/rooted_dirt",
      south: "minecraft:block/rooted_dirt",
      west: "minecraft:block/rooted_dirt",
      east: "minecraft:block/rooted_dirt",
      particle: "minecraft:block/rooted_dirt",
    },
  },
  S0 = {
    textures: {
      down: "minecraft:block/sand",
      up: "minecraft:block/sand",
      north: "minecraft:block/sand",
      south: "minecraft:block/sand",
      west: "minecraft:block/sand",
      east: "minecraft:block/sand",
      particle: "minecraft:block/sand",
    },
  },
  y0 = {
    textures: {
      down: "minecraft:block/sculk",
      up: "minecraft:block/sculk",
      north: "minecraft:block/sculk",
      south: "minecraft:block/sculk",
      west: "minecraft:block/sculk",
      east: "minecraft:block/sculk",
      particle: "minecraft:block/sculk",
    },
  },
  E0 = {
    textures: {
      down: "minecraft:block/sea_lantern",
      up: "minecraft:block/sea_lantern",
      north: "minecraft:block/sea_lantern",
      south: "minecraft:block/sea_lantern",
      west: "minecraft:block/sea_lantern",
      east: "minecraft:block/sea_lantern",
      particle: "minecraft:block/sea_lantern",
    },
  },
  T0 = {
    textures: {
      down: "minecraft:block/shroomlight",
      up: "minecraft:block/shroomlight",
      north: "minecraft:block/shroomlight",
      south: "minecraft:block/shroomlight",
      west: "minecraft:block/shroomlight",
      east: "minecraft:block/shroomlight",
      particle: "minecraft:block/shroomlight",
    },
  },
  A0 = {
    textures: {
      down: "block/slime_block",
      up: "block/slime_block",
      north: "block/slime_block",
      south: "block/slime_block",
      west: "block/slime_block",
      east: "block/slime_block",
      particle: "block/slime_block",
    },
  },
  R0 = {
    textures: {
      down: "minecraft:block/smithing_table_bottom",
      up: "minecraft:block/smithing_table_top",
      north: "minecraft:block/smithing_table_front",
      south: "minecraft:block/smithing_table_front",
      west: "minecraft:block/smithing_table_side",
      east: "minecraft:block/smithing_table_side",
      particle: "minecraft:block/smithing_table_front",
    },
  },
  C0 = {
    textures: {
      down: "minecraft:block/smooth_basalt",
      up: "minecraft:block/smooth_basalt",
      north: "minecraft:block/smooth_basalt",
      south: "minecraft:block/smooth_basalt",
      west: "minecraft:block/smooth_basalt",
      east: "minecraft:block/smooth_basalt",
      particle: "minecraft:block/smooth_basalt",
    },
  },
  P0 = {
    textures: {
      down: "minecraft:block/quartz_block_bottom",
      up: "minecraft:block/quartz_block_bottom",
      north: "minecraft:block/quartz_block_bottom",
      south: "minecraft:block/quartz_block_bottom",
      west: "minecraft:block/quartz_block_bottom",
      east: "minecraft:block/quartz_block_bottom",
      particle: "minecraft:block/quartz_block_bottom",
    },
  },
  L0 = {
    textures: {
      down: "minecraft:block/red_sandstone_top",
      up: "minecraft:block/red_sandstone_top",
      north: "minecraft:block/red_sandstone_top",
      south: "minecraft:block/red_sandstone_top",
      west: "minecraft:block/red_sandstone_top",
      east: "minecraft:block/red_sandstone_top",
      particle: "minecraft:block/red_sandstone_top",
    },
  },
  D0 = {
    textures: {
      down: "minecraft:block/sandstone_top",
      up: "minecraft:block/sandstone_top",
      north: "minecraft:block/sandstone_top",
      south: "minecraft:block/sandstone_top",
      west: "minecraft:block/sandstone_top",
      east: "minecraft:block/sandstone_top",
      particle: "minecraft:block/sandstone_top",
    },
  },
  I0 = {
    textures: {
      down: "minecraft:block/smooth_stone",
      up: "minecraft:block/smooth_stone",
      north: "minecraft:block/smooth_stone",
      south: "minecraft:block/smooth_stone",
      west: "minecraft:block/smooth_stone",
      east: "minecraft:block/smooth_stone",
      particle: "minecraft:block/smooth_stone",
    },
  },
  U0 = {
    textures: {
      down: "minecraft:block/smooth_stone",
      up: "minecraft:block/smooth_stone",
      north: "minecraft:block/smooth_stone_slab_side",
      south: "minecraft:block/smooth_stone_slab_side",
      west: "minecraft:block/smooth_stone_slab_side",
      east: "minecraft:block/smooth_stone_slab_side",
      particle: "minecraft:block/smooth_stone_slab_side",
    },
  },
  N0 = {
    textures: {
      down: "minecraft:block/snow",
      up: "minecraft:block/snow",
      north: "minecraft:block/snow",
      south: "minecraft:block/snow",
      west: "minecraft:block/snow",
      east: "minecraft:block/snow",
      particle: "minecraft:block/snow",
    },
  },
  F0 = {
    textures: {
      down: "minecraft:block/soul_sand",
      up: "minecraft:block/soul_sand",
      north: "minecraft:block/soul_sand",
      south: "minecraft:block/soul_sand",
      west: "minecraft:block/soul_sand",
      east: "minecraft:block/soul_sand",
      particle: "minecraft:block/soul_sand",
    },
  },
  O0 = {
    textures: {
      down: "minecraft:block/soul_soil",
      up: "minecraft:block/soul_soil",
      north: "minecraft:block/soul_soil",
      south: "minecraft:block/soul_soil",
      west: "minecraft:block/soul_soil",
      east: "minecraft:block/soul_soil",
      particle: "minecraft:block/soul_soil",
    },
  },
  B0 = {
    textures: {
      down: "minecraft:block/sponge",
      up: "minecraft:block/sponge",
      north: "minecraft:block/sponge",
      south: "minecraft:block/sponge",
      west: "minecraft:block/sponge",
      east: "minecraft:block/sponge",
      particle: "minecraft:block/sponge",
    },
  },
  z0 = {
    textures: {
      down: "minecraft:block/spruce_log_top",
      up: "minecraft:block/spruce_log_top",
      north: "minecraft:block/spruce_log",
      south: "minecraft:block/spruce_log",
      west: "minecraft:block/spruce_log",
      east: "minecraft:block/spruce_log",
      particle: "minecraft:block/spruce_log",
    },
  },
  V0 = {
    textures: {
      down: "minecraft:block/spruce_log_top",
      up: "minecraft:block/spruce_log_top",
      north: "minecraft:block/spruce_log",
      south: "minecraft:block/spruce_log",
      west: "minecraft:block/spruce_log",
      east: "minecraft:block/spruce_log",
      particle: "minecraft:block/spruce_log",
    },
  },
  G0 = {
    textures: {
      down: "minecraft:block/spruce_planks",
      up: "minecraft:block/spruce_planks",
      north: "minecraft:block/spruce_planks",
      south: "minecraft:block/spruce_planks",
      west: "minecraft:block/spruce_planks",
      east: "minecraft:block/spruce_planks",
      particle: "minecraft:block/spruce_planks",
    },
  },
  H0 = {
    textures: {
      down: "minecraft:block/spruce_log",
      up: "minecraft:block/spruce_log",
      north: "minecraft:block/spruce_log",
      south: "minecraft:block/spruce_log",
      west: "minecraft:block/spruce_log",
      east: "minecraft:block/spruce_log",
      particle: "minecraft:block/spruce_log",
    },
  },
  W0 = {
    textures: {
      down: "minecraft:block/stone",
      up: "minecraft:block/stone",
      north: "minecraft:block/stone",
      south: "minecraft:block/stone",
      west: "minecraft:block/stone",
      east: "minecraft:block/stone",
      particle: "minecraft:block/stone",
    },
  },
  X0 = {
    textures: {
      down: "minecraft:block/stone_bricks",
      up: "minecraft:block/stone_bricks",
      north: "minecraft:block/stone_bricks",
      south: "minecraft:block/stone_bricks",
      west: "minecraft:block/stone_bricks",
      east: "minecraft:block/stone_bricks",
      particle: "minecraft:block/stone_bricks",
    },
  },
  q0 = {
    textures: {
      down: "minecraft:block/stripped_acacia_log_top",
      up: "minecraft:block/stripped_acacia_log_top",
      north: "minecraft:block/stripped_acacia_log",
      south: "minecraft:block/stripped_acacia_log",
      west: "minecraft:block/stripped_acacia_log",
      east: "minecraft:block/stripped_acacia_log",
      particle: "minecraft:block/stripped_acacia_log",
    },
  },
  Y0 = {
    textures: {
      down: "minecraft:block/stripped_acacia_log_top",
      up: "minecraft:block/stripped_acacia_log_top",
      north: "minecraft:block/stripped_acacia_log",
      south: "minecraft:block/stripped_acacia_log",
      west: "minecraft:block/stripped_acacia_log",
      east: "minecraft:block/stripped_acacia_log",
      particle: "minecraft:block/stripped_acacia_log",
    },
  },
  j0 = {
    textures: {
      down: "minecraft:block/stripped_acacia_log",
      up: "minecraft:block/stripped_acacia_log",
      north: "minecraft:block/stripped_acacia_log",
      south: "minecraft:block/stripped_acacia_log",
      west: "minecraft:block/stripped_acacia_log",
      east: "minecraft:block/stripped_acacia_log",
      particle: "minecraft:block/stripped_acacia_log",
    },
  },
  K0 = {
    textures: {
      down: "minecraft:block/stripped_bamboo_block_top",
      up: "minecraft:block/stripped_bamboo_block_top",
      north: "minecraft:block/stripped_bamboo_block",
      south: "minecraft:block/stripped_bamboo_block",
      west: "minecraft:block/stripped_bamboo_block",
      east: "minecraft:block/stripped_bamboo_block",
      particle: "minecraft:block/stripped_bamboo_block",
    },
  },
  $0 = {
    textures: {
      down: "minecraft:block/stripped_birch_log_top",
      up: "minecraft:block/stripped_birch_log_top",
      north: "minecraft:block/stripped_birch_log",
      south: "minecraft:block/stripped_birch_log",
      west: "minecraft:block/stripped_birch_log",
      east: "minecraft:block/stripped_birch_log",
      particle: "minecraft:block/stripped_birch_log",
    },
  },
  Z0 = {
    textures: {
      down: "minecraft:block/stripped_birch_log_top",
      up: "minecraft:block/stripped_birch_log_top",
      north: "minecraft:block/stripped_birch_log",
      south: "minecraft:block/stripped_birch_log",
      west: "minecraft:block/stripped_birch_log",
      east: "minecraft:block/stripped_birch_log",
      particle: "minecraft:block/stripped_birch_log",
    },
  },
  J0 = {
    textures: {
      down: "minecraft:block/stripped_birch_log",
      up: "minecraft:block/stripped_birch_log",
      north: "minecraft:block/stripped_birch_log",
      south: "minecraft:block/stripped_birch_log",
      west: "minecraft:block/stripped_birch_log",
      east: "minecraft:block/stripped_birch_log",
      particle: "minecraft:block/stripped_birch_log",
    },
  },
  Q0 = {
    textures: {
      down: "minecraft:block/stripped_cherry_log_top",
      up: "minecraft:block/stripped_cherry_log_top",
      north: "minecraft:block/stripped_cherry_log",
      south: "minecraft:block/stripped_cherry_log",
      west: "minecraft:block/stripped_cherry_log",
      east: "minecraft:block/stripped_cherry_log",
      particle: "minecraft:block/stripped_cherry_log",
    },
  },
  ev = {
    textures: {
      down: "minecraft:block/stripped_cherry_log",
      up: "minecraft:block/stripped_cherry_log",
      north: "minecraft:block/stripped_cherry_log",
      south: "minecraft:block/stripped_cherry_log",
      west: "minecraft:block/stripped_cherry_log",
      east: "minecraft:block/stripped_cherry_log",
      particle: "minecraft:block/stripped_cherry_log",
    },
  },
  tv = {
    textures: {
      down: "minecraft:block/stripped_crimson_stem",
      up: "minecraft:block/stripped_crimson_stem",
      north: "minecraft:block/stripped_crimson_stem",
      south: "minecraft:block/stripped_crimson_stem",
      west: "minecraft:block/stripped_crimson_stem",
      east: "minecraft:block/stripped_crimson_stem",
      particle: "minecraft:block/stripped_crimson_stem",
    },
  },
  nv = {
    textures: {
      down: "minecraft:block/stripped_crimson_stem_top",
      up: "minecraft:block/stripped_crimson_stem_top",
      north: "minecraft:block/stripped_crimson_stem",
      south: "minecraft:block/stripped_crimson_stem",
      west: "minecraft:block/stripped_crimson_stem",
      east: "minecraft:block/stripped_crimson_stem",
      particle: "minecraft:block/stripped_crimson_stem",
    },
  },
  iv = {
    textures: {
      down: "minecraft:block/stripped_dark_oak_log_top",
      up: "minecraft:block/stripped_dark_oak_log_top",
      north: "minecraft:block/stripped_dark_oak_log",
      south: "minecraft:block/stripped_dark_oak_log",
      west: "minecraft:block/stripped_dark_oak_log",
      east: "minecraft:block/stripped_dark_oak_log",
      particle: "minecraft:block/stripped_dark_oak_log",
    },
  },
  rv = {
    textures: {
      down: "minecraft:block/stripped_dark_oak_log_top",
      up: "minecraft:block/stripped_dark_oak_log_top",
      north: "minecraft:block/stripped_dark_oak_log",
      south: "minecraft:block/stripped_dark_oak_log",
      west: "minecraft:block/stripped_dark_oak_log",
      east: "minecraft:block/stripped_dark_oak_log",
      particle: "minecraft:block/stripped_dark_oak_log",
    },
  },
  ov = {
    textures: {
      down: "minecraft:block/stripped_dark_oak_log",
      up: "minecraft:block/stripped_dark_oak_log",
      north: "minecraft:block/stripped_dark_oak_log",
      south: "minecraft:block/stripped_dark_oak_log",
      west: "minecraft:block/stripped_dark_oak_log",
      east: "minecraft:block/stripped_dark_oak_log",
      particle: "minecraft:block/stripped_dark_oak_log",
    },
  },
  av = {
    textures: {
      down: "minecraft:block/stripped_jungle_log_top",
      up: "minecraft:block/stripped_jungle_log_top",
      north: "minecraft:block/stripped_jungle_log",
      south: "minecraft:block/stripped_jungle_log",
      west: "minecraft:block/stripped_jungle_log",
      east: "minecraft:block/stripped_jungle_log",
      particle: "minecraft:block/stripped_jungle_log",
    },
  },
  sv = {
    textures: {
      down: "minecraft:block/stripped_jungle_log_top",
      up: "minecraft:block/stripped_jungle_log_top",
      north: "minecraft:block/stripped_jungle_log",
      south: "minecraft:block/stripped_jungle_log",
      west: "minecraft:block/stripped_jungle_log",
      east: "minecraft:block/stripped_jungle_log",
      particle: "minecraft:block/stripped_jungle_log",
    },
  },
  cv = {
    textures: {
      down: "minecraft:block/stripped_jungle_log",
      up: "minecraft:block/stripped_jungle_log",
      north: "minecraft:block/stripped_jungle_log",
      south: "minecraft:block/stripped_jungle_log",
      west: "minecraft:block/stripped_jungle_log",
      east: "minecraft:block/stripped_jungle_log",
      particle: "minecraft:block/stripped_jungle_log",
    },
  },
  lv = {
    textures: {
      down: "minecraft:block/stripped_mangrove_log_top",
      up: "minecraft:block/stripped_mangrove_log_top",
      north: "minecraft:block/stripped_mangrove_log",
      south: "minecraft:block/stripped_mangrove_log",
      west: "minecraft:block/stripped_mangrove_log",
      east: "minecraft:block/stripped_mangrove_log",
      particle: "minecraft:block/stripped_mangrove_log",
    },
  },
  fv = {
    textures: {
      down: "minecraft:block/stripped_mangrove_log_top",
      up: "minecraft:block/stripped_mangrove_log_top",
      north: "minecraft:block/stripped_mangrove_log",
      south: "minecraft:block/stripped_mangrove_log",
      west: "minecraft:block/stripped_mangrove_log",
      east: "minecraft:block/stripped_mangrove_log",
      particle: "minecraft:block/stripped_mangrove_log",
    },
  },
  uv = {
    textures: {
      down: "minecraft:block/stripped_mangrove_log",
      up: "minecraft:block/stripped_mangrove_log",
      north: "minecraft:block/stripped_mangrove_log",
      south: "minecraft:block/stripped_mangrove_log",
      west: "minecraft:block/stripped_mangrove_log",
      east: "minecraft:block/stripped_mangrove_log",
      particle: "minecraft:block/stripped_mangrove_log",
    },
  },
  dv = {
    textures: {
      down: "minecraft:block/stripped_oak_log_top",
      up: "minecraft:block/stripped_oak_log_top",
      north: "minecraft:block/stripped_oak_log",
      south: "minecraft:block/stripped_oak_log",
      west: "minecraft:block/stripped_oak_log",
      east: "minecraft:block/stripped_oak_log",
      particle: "minecraft:block/stripped_oak_log",
    },
  },
  hv = {
    textures: {
      down: "minecraft:block/stripped_oak_log_top",
      up: "minecraft:block/stripped_oak_log_top",
      north: "minecraft:block/stripped_oak_log",
      south: "minecraft:block/stripped_oak_log",
      west: "minecraft:block/stripped_oak_log",
      east: "minecraft:block/stripped_oak_log",
      particle: "minecraft:block/stripped_oak_log",
    },
  },
  pv = {
    textures: {
      down: "minecraft:block/stripped_oak_log",
      up: "minecraft:block/stripped_oak_log",
      north: "minecraft:block/stripped_oak_log",
      south: "minecraft:block/stripped_oak_log",
      west: "minecraft:block/stripped_oak_log",
      east: "minecraft:block/stripped_oak_log",
      particle: "minecraft:block/stripped_oak_log",
    },
  },
  mv = {
    textures: {
      down: "minecraft:block/stripped_pale_oak_log_top",
      up: "minecraft:block/stripped_pale_oak_log_top",
      north: "minecraft:block/stripped_pale_oak_log",
      south: "minecraft:block/stripped_pale_oak_log",
      west: "minecraft:block/stripped_pale_oak_log",
      east: "minecraft:block/stripped_pale_oak_log",
      particle: "minecraft:block/stripped_pale_oak_log",
    },
  },
  _v = {
    textures: {
      down: "minecraft:block/stripped_pale_oak_log_top",
      up: "minecraft:block/stripped_pale_oak_log_top",
      north: "minecraft:block/stripped_pale_oak_log",
      south: "minecraft:block/stripped_pale_oak_log",
      west: "minecraft:block/stripped_pale_oak_log",
      east: "minecraft:block/stripped_pale_oak_log",
      particle: "minecraft:block/stripped_pale_oak_log",
    },
  },
  bv = {
    textures: {
      down: "minecraft:block/stripped_pale_oak_log",
      up: "minecraft:block/stripped_pale_oak_log",
      north: "minecraft:block/stripped_pale_oak_log",
      south: "minecraft:block/stripped_pale_oak_log",
      west: "minecraft:block/stripped_pale_oak_log",
      east: "minecraft:block/stripped_pale_oak_log",
      particle: "minecraft:block/stripped_pale_oak_log",
    },
  },
  gv = {
    textures: {
      down: "minecraft:block/stripped_spruce_log_top",
      up: "minecraft:block/stripped_spruce_log_top",
      north: "minecraft:block/stripped_spruce_log",
      south: "minecraft:block/stripped_spruce_log",
      west: "minecraft:block/stripped_spruce_log",
      east: "minecraft:block/stripped_spruce_log",
      particle: "minecraft:block/stripped_spruce_log",
    },
  },
  xv = {
    textures: {
      down: "minecraft:block/stripped_spruce_log_top",
      up: "minecraft:block/stripped_spruce_log_top",
      north: "minecraft:block/stripped_spruce_log",
      south: "minecraft:block/stripped_spruce_log",
      west: "minecraft:block/stripped_spruce_log",
      east: "minecraft:block/stripped_spruce_log",
      particle: "minecraft:block/stripped_spruce_log",
    },
  },
  kv = {
    textures: {
      down: "minecraft:block/stripped_spruce_log",
      up: "minecraft:block/stripped_spruce_log",
      north: "minecraft:block/stripped_spruce_log",
      south: "minecraft:block/stripped_spruce_log",
      west: "minecraft:block/stripped_spruce_log",
      east: "minecraft:block/stripped_spruce_log",
      particle: "minecraft:block/stripped_spruce_log",
    },
  },
  vv = {
    textures: {
      down: "minecraft:block/stripped_warped_stem",
      up: "minecraft:block/stripped_warped_stem",
      north: "minecraft:block/stripped_warped_stem",
      south: "minecraft:block/stripped_warped_stem",
      west: "minecraft:block/stripped_warped_stem",
      east: "minecraft:block/stripped_warped_stem",
      particle: "minecraft:block/stripped_warped_stem",
    },
  },
  wv = {
    textures: {
      down: "minecraft:block/stripped_warped_stem_top",
      up: "minecraft:block/stripped_warped_stem_top",
      north: "minecraft:block/stripped_warped_stem",
      south: "minecraft:block/stripped_warped_stem",
      west: "minecraft:block/stripped_warped_stem",
      east: "minecraft:block/stripped_warped_stem",
      particle: "minecraft:block/stripped_warped_stem",
    },
  },
  Mv = {
    textures: {
      down: "minecraft:block/structure_block",
      up: "minecraft:block/structure_block",
      north: "minecraft:block/structure_block",
      south: "minecraft:block/structure_block",
      west: "minecraft:block/structure_block",
      east: "minecraft:block/structure_block",
      particle: "minecraft:block/structure_block",
    },
  },
  Sv = {
    textures: {
      down: "minecraft:block/structure_block_corner",
      up: "minecraft:block/structure_block_corner",
      north: "minecraft:block/structure_block_corner",
      south: "minecraft:block/structure_block_corner",
      west: "minecraft:block/structure_block_corner",
      east: "minecraft:block/structure_block_corner",
      particle: "minecraft:block/structure_block_corner",
    },
  },
  yv = {
    textures: {
      down: "minecraft:block/structure_block_data",
      up: "minecraft:block/structure_block_data",
      north: "minecraft:block/structure_block_data",
      south: "minecraft:block/structure_block_data",
      west: "minecraft:block/structure_block_data",
      east: "minecraft:block/structure_block_data",
      particle: "minecraft:block/structure_block_data",
    },
  },
  Ev = {
    textures: {
      down: "minecraft:block/structure_block_load",
      up: "minecraft:block/structure_block_load",
      north: "minecraft:block/structure_block_load",
      south: "minecraft:block/structure_block_load",
      west: "minecraft:block/structure_block_load",
      east: "minecraft:block/structure_block_load",
      particle: "minecraft:block/structure_block_load",
    },
  },
  Tv = {
    textures: {
      down: "minecraft:block/structure_block_save",
      up: "minecraft:block/structure_block_save",
      north: "minecraft:block/structure_block_save",
      south: "minecraft:block/structure_block_save",
      west: "minecraft:block/structure_block_save",
      east: "minecraft:block/structure_block_save",
      particle: "minecraft:block/structure_block_save",
    },
  },
  Av = {
    textures: {
      down: "minecraft:block/suspicious_gravel_0",
      up: "minecraft:block/suspicious_gravel_0",
      north: "minecraft:block/suspicious_gravel_0",
      south: "minecraft:block/suspicious_gravel_0",
      west: "minecraft:block/suspicious_gravel_0",
      east: "minecraft:block/suspicious_gravel_0",
      particle: "minecraft:block/suspicious_gravel_0",
    },
  },
  Rv = {
    textures: {
      down: "minecraft:block/suspicious_gravel_1",
      up: "minecraft:block/suspicious_gravel_1",
      north: "minecraft:block/suspicious_gravel_1",
      south: "minecraft:block/suspicious_gravel_1",
      west: "minecraft:block/suspicious_gravel_1",
      east: "minecraft:block/suspicious_gravel_1",
      particle: "minecraft:block/suspicious_gravel_1",
    },
  },
  Cv = {
    textures: {
      down: "minecraft:block/suspicious_gravel_2",
      up: "minecraft:block/suspicious_gravel_2",
      north: "minecraft:block/suspicious_gravel_2",
      south: "minecraft:block/suspicious_gravel_2",
      west: "minecraft:block/suspicious_gravel_2",
      east: "minecraft:block/suspicious_gravel_2",
      particle: "minecraft:block/suspicious_gravel_2",
    },
  },
  Pv = {
    textures: {
      down: "minecraft:block/suspicious_gravel_3",
      up: "minecraft:block/suspicious_gravel_3",
      north: "minecraft:block/suspicious_gravel_3",
      south: "minecraft:block/suspicious_gravel_3",
      west: "minecraft:block/suspicious_gravel_3",
      east: "minecraft:block/suspicious_gravel_3",
      particle: "minecraft:block/suspicious_gravel_3",
    },
  },
  Lv = {
    textures: {
      down: "minecraft:block/suspicious_sand_0",
      up: "minecraft:block/suspicious_sand_0",
      north: "minecraft:block/suspicious_sand_0",
      south: "minecraft:block/suspicious_sand_0",
      west: "minecraft:block/suspicious_sand_0",
      east: "minecraft:block/suspicious_sand_0",
      particle: "minecraft:block/suspicious_sand_0",
    },
  },
  Dv = {
    textures: {
      down: "minecraft:block/suspicious_sand_1",
      up: "minecraft:block/suspicious_sand_1",
      north: "minecraft:block/suspicious_sand_1",
      south: "minecraft:block/suspicious_sand_1",
      west: "minecraft:block/suspicious_sand_1",
      east: "minecraft:block/suspicious_sand_1",
      particle: "minecraft:block/suspicious_sand_1",
    },
  },
  Iv = {
    textures: {
      down: "minecraft:block/suspicious_sand_2",
      up: "minecraft:block/suspicious_sand_2",
      north: "minecraft:block/suspicious_sand_2",
      south: "minecraft:block/suspicious_sand_2",
      west: "minecraft:block/suspicious_sand_2",
      east: "minecraft:block/suspicious_sand_2",
      particle: "minecraft:block/suspicious_sand_2",
    },
  },
  Uv = {
    textures: {
      down: "minecraft:block/suspicious_sand_3",
      up: "minecraft:block/suspicious_sand_3",
      north: "minecraft:block/suspicious_sand_3",
      south: "minecraft:block/suspicious_sand_3",
      west: "minecraft:block/suspicious_sand_3",
      east: "minecraft:block/suspicious_sand_3",
      particle: "minecraft:block/suspicious_sand_3",
    },
  },
  Nv = {
    textures: {
      down: "minecraft:block/target_top",
      up: "minecraft:block/target_top",
      north: "minecraft:block/target_side",
      south: "minecraft:block/target_side",
      west: "minecraft:block/target_side",
      east: "minecraft:block/target_side",
      particle: "minecraft:block/target_side",
    },
  },
  Fv = {
    textures: {
      down: "minecraft:block/terracotta",
      up: "minecraft:block/terracotta",
      north: "minecraft:block/terracotta",
      south: "minecraft:block/terracotta",
      west: "minecraft:block/terracotta",
      east: "minecraft:block/terracotta",
      particle: "minecraft:block/terracotta",
    },
  },
  Ov = {
    textures: {
      down: "minecraft:block/test_block_accept",
      up: "minecraft:block/test_block_accept",
      north: "minecraft:block/test_block_accept",
      south: "minecraft:block/test_block_accept",
      west: "minecraft:block/test_block_accept",
      east: "minecraft:block/test_block_accept",
      particle: "minecraft:block/test_block_accept",
    },
  },
  Bv = {
    textures: {
      down: "minecraft:block/test_block_fail",
      up: "minecraft:block/test_block_fail",
      north: "minecraft:block/test_block_fail",
      south: "minecraft:block/test_block_fail",
      west: "minecraft:block/test_block_fail",
      east: "minecraft:block/test_block_fail",
      particle: "minecraft:block/test_block_fail",
    },
  },
  zv = {
    textures: {
      down: "minecraft:block/test_block_log",
      up: "minecraft:block/test_block_log",
      north: "minecraft:block/test_block_log",
      south: "minecraft:block/test_block_log",
      west: "minecraft:block/test_block_log",
      east: "minecraft:block/test_block_log",
      particle: "minecraft:block/test_block_log",
    },
  },
  Vv = {
    textures: {
      down: "minecraft:block/test_block_start",
      up: "minecraft:block/test_block_start",
      north: "minecraft:block/test_block_start",
      south: "minecraft:block/test_block_start",
      west: "minecraft:block/test_block_start",
      east: "minecraft:block/test_block_start",
      particle: "minecraft:block/test_block_start",
    },
  },
  Gv = {
    textures: {
      down: "minecraft:block/test_instance_block",
      up: "minecraft:block/test_instance_block",
      north: "minecraft:block/test_instance_block",
      south: "minecraft:block/test_instance_block",
      west: "minecraft:block/test_instance_block",
      east: "minecraft:block/test_instance_block",
      particle: "minecraft:block/test_instance_block",
    },
  },
  Hv = {
    textures: {
      down: "minecraft:block/tinted_glass",
      up: "minecraft:block/tinted_glass",
      north: "minecraft:block/tinted_glass",
      south: "minecraft:block/tinted_glass",
      west: "minecraft:block/tinted_glass",
      east: "minecraft:block/tinted_glass",
      particle: "minecraft:block/tinted_glass",
    },
  },
  Wv = {
    textures: {
      down: "minecraft:block/tube_coral_block",
      up: "minecraft:block/tube_coral_block",
      north: "minecraft:block/tube_coral_block",
      south: "minecraft:block/tube_coral_block",
      west: "minecraft:block/tube_coral_block",
      east: "minecraft:block/tube_coral_block",
      particle: "minecraft:block/tube_coral_block",
    },
  },
  Xv = {
    textures: {
      down: "minecraft:block/tuff",
      up: "minecraft:block/tuff",
      north: "minecraft:block/tuff",
      south: "minecraft:block/tuff",
      west: "minecraft:block/tuff",
      east: "minecraft:block/tuff",
      particle: "minecraft:block/tuff",
    },
  },
  qv = {
    textures: {
      down: "minecraft:block/tuff_bricks",
      up: "minecraft:block/tuff_bricks",
      north: "minecraft:block/tuff_bricks",
      south: "minecraft:block/tuff_bricks",
      west: "minecraft:block/tuff_bricks",
      east: "minecraft:block/tuff_bricks",
      particle: "minecraft:block/tuff_bricks",
    },
  },
  Yv = {
    textures: {
      down: "minecraft:block/verdant_froglight_top",
      up: "minecraft:block/verdant_froglight_top",
      north: "minecraft:block/verdant_froglight_side",
      south: "minecraft:block/verdant_froglight_side",
      west: "minecraft:block/verdant_froglight_side",
      east: "minecraft:block/verdant_froglight_side",
      particle: "minecraft:block/verdant_froglight_side",
    },
  },
  jv = {
    textures: {
      down: "minecraft:block/verdant_froglight_top",
      up: "minecraft:block/verdant_froglight_top",
      north: "minecraft:block/verdant_froglight_side",
      south: "minecraft:block/verdant_froglight_side",
      west: "minecraft:block/verdant_froglight_side",
      east: "minecraft:block/verdant_froglight_side",
      particle: "minecraft:block/verdant_froglight_side",
    },
  },
  Kv = {
    textures: {
      down: "minecraft:block/warped_stem",
      up: "minecraft:block/warped_stem",
      north: "minecraft:block/warped_stem",
      south: "minecraft:block/warped_stem",
      west: "minecraft:block/warped_stem",
      east: "minecraft:block/warped_stem",
      particle: "minecraft:block/warped_stem",
    },
  },
  $v = {
    textures: {
      down: "minecraft:block/warped_planks",
      up: "minecraft:block/warped_planks",
      north: "minecraft:block/warped_planks",
      south: "minecraft:block/warped_planks",
      west: "minecraft:block/warped_planks",
      east: "minecraft:block/warped_planks",
      particle: "minecraft:block/warped_planks",
    },
  },
  Zv = {
    textures: {
      down: "minecraft:block/warped_stem_top",
      up: "minecraft:block/warped_stem_top",
      north: "minecraft:block/warped_stem",
      south: "minecraft:block/warped_stem",
      west: "minecraft:block/warped_stem",
      east: "minecraft:block/warped_stem",
      particle: "minecraft:block/warped_stem",
    },
  },
  Jv = {
    textures: {
      down: "minecraft:block/warped_wart_block",
      up: "minecraft:block/warped_wart_block",
      north: "minecraft:block/warped_wart_block",
      south: "minecraft:block/warped_wart_block",
      west: "minecraft:block/warped_wart_block",
      east: "minecraft:block/warped_wart_block",
      particle: "minecraft:block/warped_wart_block",
    },
  },
  Qv = {
    textures: {
      down: "minecraft:block/weathered_chiseled_copper",
      up: "minecraft:block/weathered_chiseled_copper",
      north: "minecraft:block/weathered_chiseled_copper",
      south: "minecraft:block/weathered_chiseled_copper",
      west: "minecraft:block/weathered_chiseled_copper",
      east: "minecraft:block/weathered_chiseled_copper",
      particle: "minecraft:block/weathered_chiseled_copper",
    },
  },
  ew = {
    textures: {
      down: "minecraft:block/weathered_copper",
      up: "minecraft:block/weathered_copper",
      north: "minecraft:block/weathered_copper",
      south: "minecraft:block/weathered_copper",
      west: "minecraft:block/weathered_copper",
      east: "minecraft:block/weathered_copper",
      particle: "minecraft:block/weathered_copper",
    },
  },
  tw = {
    textures: {
      down: "minecraft:block/weathered_copper_bulb",
      up: "minecraft:block/weathered_copper_bulb",
      north: "minecraft:block/weathered_copper_bulb",
      south: "minecraft:block/weathered_copper_bulb",
      west: "minecraft:block/weathered_copper_bulb",
      east: "minecraft:block/weathered_copper_bulb",
      particle: "minecraft:block/weathered_copper_bulb",
    },
  },
  nw = {
    textures: {
      down: "minecraft:block/weathered_copper_bulb_lit",
      up: "minecraft:block/weathered_copper_bulb_lit",
      north: "minecraft:block/weathered_copper_bulb_lit",
      south: "minecraft:block/weathered_copper_bulb_lit",
      west: "minecraft:block/weathered_copper_bulb_lit",
      east: "minecraft:block/weathered_copper_bulb_lit",
      particle: "minecraft:block/weathered_copper_bulb_lit",
    },
  },
  iw = {
    textures: {
      down: "minecraft:block/weathered_copper_bulb_lit_powered",
      up: "minecraft:block/weathered_copper_bulb_lit_powered",
      north: "minecraft:block/weathered_copper_bulb_lit_powered",
      south: "minecraft:block/weathered_copper_bulb_lit_powered",
      west: "minecraft:block/weathered_copper_bulb_lit_powered",
      east: "minecraft:block/weathered_copper_bulb_lit_powered",
      particle: "minecraft:block/weathered_copper_bulb_lit_powered",
    },
  },
  rw = {
    textures: {
      down: "minecraft:block/weathered_copper_bulb_powered",
      up: "minecraft:block/weathered_copper_bulb_powered",
      north: "minecraft:block/weathered_copper_bulb_powered",
      south: "minecraft:block/weathered_copper_bulb_powered",
      west: "minecraft:block/weathered_copper_bulb_powered",
      east: "minecraft:block/weathered_copper_bulb_powered",
      particle: "minecraft:block/weathered_copper_bulb_powered",
    },
  },
  ow = {
    textures: {
      down: "minecraft:block/weathered_copper_grate",
      up: "minecraft:block/weathered_copper_grate",
      north: "minecraft:block/weathered_copper_grate",
      south: "minecraft:block/weathered_copper_grate",
      west: "minecraft:block/weathered_copper_grate",
      east: "minecraft:block/weathered_copper_grate",
      particle: "minecraft:block/weathered_copper_grate",
    },
  },
  aw = {
    textures: {
      down: "minecraft:block/weathered_cut_copper",
      up: "minecraft:block/weathered_cut_copper",
      north: "minecraft:block/weathered_cut_copper",
      south: "minecraft:block/weathered_cut_copper",
      west: "minecraft:block/weathered_cut_copper",
      east: "minecraft:block/weathered_cut_copper",
      particle: "minecraft:block/weathered_cut_copper",
    },
  },
  sw = {
    textures: {
      down: "minecraft:block/wet_sponge",
      up: "minecraft:block/wet_sponge",
      north: "minecraft:block/wet_sponge",
      south: "minecraft:block/wet_sponge",
      west: "minecraft:block/wet_sponge",
      east: "minecraft:block/wet_sponge",
      particle: "minecraft:block/wet_sponge",
    },
  },
  cw = {
    textures: {
      down: "minecraft:block/white_concrete",
      up: "minecraft:block/white_concrete",
      north: "minecraft:block/white_concrete",
      south: "minecraft:block/white_concrete",
      west: "minecraft:block/white_concrete",
      east: "minecraft:block/white_concrete",
      particle: "minecraft:block/white_concrete",
    },
  },
  lw = {
    textures: {
      down: "minecraft:block/white_concrete_powder",
      up: "minecraft:block/white_concrete_powder",
      north: "minecraft:block/white_concrete_powder",
      south: "minecraft:block/white_concrete_powder",
      west: "minecraft:block/white_concrete_powder",
      east: "minecraft:block/white_concrete_powder",
      particle: "minecraft:block/white_concrete_powder",
    },
  },
  fw = {
    textures: {
      down: "minecraft:block/white_stained_glass",
      up: "minecraft:block/white_stained_glass",
      north: "minecraft:block/white_stained_glass",
      south: "minecraft:block/white_stained_glass",
      west: "minecraft:block/white_stained_glass",
      east: "minecraft:block/white_stained_glass",
      particle: "minecraft:block/white_stained_glass",
    },
  },
  uw = {
    textures: {
      down: "minecraft:block/white_terracotta",
      up: "minecraft:block/white_terracotta",
      north: "minecraft:block/white_terracotta",
      south: "minecraft:block/white_terracotta",
      west: "minecraft:block/white_terracotta",
      east: "minecraft:block/white_terracotta",
      particle: "minecraft:block/white_terracotta",
    },
  },
  dw = {
    textures: {
      down: "minecraft:block/white_wool",
      up: "minecraft:block/white_wool",
      north: "minecraft:block/white_wool",
      south: "minecraft:block/white_wool",
      west: "minecraft:block/white_wool",
      east: "minecraft:block/white_wool",
      particle: "minecraft:block/white_wool",
    },
  },
  hw = {
    textures: {
      down: "minecraft:block/yellow_concrete",
      up: "minecraft:block/yellow_concrete",
      north: "minecraft:block/yellow_concrete",
      south: "minecraft:block/yellow_concrete",
      west: "minecraft:block/yellow_concrete",
      east: "minecraft:block/yellow_concrete",
      particle: "minecraft:block/yellow_concrete",
    },
  },
  pw = {
    textures: {
      down: "minecraft:block/yellow_concrete_powder",
      up: "minecraft:block/yellow_concrete_powder",
      north: "minecraft:block/yellow_concrete_powder",
      south: "minecraft:block/yellow_concrete_powder",
      west: "minecraft:block/yellow_concrete_powder",
      east: "minecraft:block/yellow_concrete_powder",
      particle: "minecraft:block/yellow_concrete_powder",
    },
  },
  mw = {
    textures: {
      down: "minecraft:block/yellow_stained_glass",
      up: "minecraft:block/yellow_stained_glass",
      north: "minecraft:block/yellow_stained_glass",
      south: "minecraft:block/yellow_stained_glass",
      west: "minecraft:block/yellow_stained_glass",
      east: "minecraft:block/yellow_stained_glass",
      particle: "minecraft:block/yellow_stained_glass",
    },
  },
  _w = {
    textures: {
      down: "minecraft:block/yellow_terracotta",
      up: "minecraft:block/yellow_terracotta",
      north: "minecraft:block/yellow_terracotta",
      south: "minecraft:block/yellow_terracotta",
      west: "minecraft:block/yellow_terracotta",
      east: "minecraft:block/yellow_terracotta",
      particle: "minecraft:block/yellow_terracotta",
    },
  },
  bw = {
    textures: {
      down: "minecraft:block/yellow_wool",
      up: "minecraft:block/yellow_wool",
      north: "minecraft:block/yellow_wool",
      south: "minecraft:block/yellow_wool",
      west: "minecraft:block/yellow_wool",
      east: "minecraft:block/yellow_wool",
      particle: "minecraft:block/yellow_wool",
    },
  },
  gw = {
    acacia_log: Fm,
    acacia_planks: Om,
    acacia_wood: Bm,
    amethyst_block: zm,
    ancient_debris: Vm,
    andesite: Gm,
    azalea_leaves: Hm,
    bamboo_block: Wm,
    bamboo_mosaic: Xm,
    bamboo_planks: qm,
    basalt: Ym,
    bedrock: jm,
    birch_log: Km,
    birch_log_horizontal: $m,
    birch_planks: Zm,
    birch_wood: Jm,
    blackstone: Qm,
    black_concrete: e_,
    black_concrete_powder: t_,
    black_stained_glass: n_,
    black_terracotta: i_,
    black_wool: r_,
    blast_furnace: o_,
    blast_furnace_on: a_,
    blue_concrete: s_,
    blue_concrete_powder: c_,
    blue_ice: l_,
    blue_stained_glass: f_,
    blue_terracotta: u_,
    blue_wool: d_,
    bone_block: h_,
    bookshelf: p_,
    brain_coral_block: m_,
    bricks: __,
    brown_concrete: b_,
    brown_concrete_powder: g_,
    brown_mushroom_block_inventory: x_,
    brown_stained_glass: k_,
    brown_terracotta: v_,
    brown_wool: w_,
    bubble_coral_block: M_,
    budding_amethyst: S_,
    calcite: y_,
    cartography_table: E_,
    carved_pumpkin: T_,
    cherry_log: A_,
    cherry_planks: R_,
    cherry_wood: C_,
    chiseled_bookshelf_inventory: P_,
    chiseled_copper: L_,
    chiseled_deepslate: D_,
    chiseled_nether_bricks: I_,
    chiseled_polished_blackstone: U_,
    chiseled_quartz_block: N_,
    chiseled_red_sandstone: F_,
    chiseled_resin_bricks: O_,
    chiseled_sandstone: B_,
    chiseled_stone_bricks: z_,
    chiseled_tuff: V_,
    chiseled_tuff_bricks: G_,
    clay: H_,
    coal_block: W_,
    coal_ore: X_,
    coarse_dirt: q_,
    cobbled_deepslate: Y_,
    cobblestone: j_,
    copper_block: K_,
    copper_bulb: $_,
    copper_bulb_lit: Z_,
    copper_bulb_lit_powered: J_,
    copper_bulb_powered: Q_,
    copper_grate: eb,
    copper_ore: tb,
    cracked_deepslate_bricks: nb,
    cracked_deepslate_tiles: ib,
    cracked_nether_bricks: rb,
    cracked_polished_blackstone_bricks: ob,
    cracked_stone_bricks: ab,
    crafter: sb,
    crafting_table: cb,
    creaking_heart: lb,
    creaking_heart_awake: fb,
    creaking_heart_awake_horizontal: ub,
    creaking_heart_dormant: db,
    creaking_heart_dormant_horizontal: hb,
    creaking_heart_horizontal: pb,
    crimson_hyphae: mb,
    crimson_planks: _b,
    crimson_stem: bb,
    crying_obsidian: gb,
    cut_copper: xb,
    cut_red_sandstone: kb,
    cut_sandstone: vb,
    cyan_concrete: wb,
    cyan_concrete_powder: Mb,
    cyan_stained_glass: Sb,
    cyan_terracotta: yb,
    cyan_wool: Eb,
    dark_oak_log: Tb,
    dark_oak_log_horizontal: Ab,
    dark_oak_planks: Rb,
    dark_oak_wood: Cb,
    dark_prismarine: Pb,
    dead_brain_coral_block: Lb,
    dead_bubble_coral_block: Db,
    dead_fire_coral_block: Ib,
    dead_horn_coral_block: Ub,
    dead_tube_coral_block: Nb,
    deepslate: Fb,
    deepslate_bricks: Ob,
    deepslate_coal_ore: Bb,
    deepslate_copper_ore: zb,
    deepslate_diamond_ore: Vb,
    deepslate_emerald_ore: Gb,
    deepslate_gold_ore: Hb,
    deepslate_iron_ore: Wb,
    deepslate_lapis_ore: Xb,
    deepslate_redstone_ore: qb,
    deepslate_tiles: Yb,
    diamond_block: jb,
    diamond_ore: Kb,
    diorite: $b,
    dirt: Zb,
    dispenser: Jb,
    dried_kelp_block: Qb,
    dripstone_block: eg,
    dropper: tg,
    emerald_block: ng,
    emerald_ore: ig,
    end_stone: rg,
    end_stone_bricks: og,
    exposed_chiseled_copper: ag,
    exposed_copper: sg,
    exposed_copper_bulb: cg,
    exposed_copper_bulb_lit: lg,
    exposed_copper_bulb_lit_powered: fg,
    exposed_copper_bulb_powered: ug,
    exposed_copper_grate: dg,
    exposed_cut_copper: hg,
    fire_coral_block: pg,
    fletching_table: mg,
    acacia_leaves: _g,
    flowering_azalea_leaves: bg,
    birch_leaves: gg,
    cherry_leaves: xg,
    dark_oak_leaves: kg,
    jungle_leaves: vg,
    mangrove_leaves: wg,
    oak_leaves: Mg,
    pale_oak_leaves: Sg,
    spruce_leaves: yg,
    frosted_ice_0: Eg,
    frosted_ice_1: Tg,
    frosted_ice_2: Ag,
    frosted_ice_3: Rg,
    furnace: Cg,
    furnace_on: Pg,
    gilded_blackstone: Lg,
    glass: Dg,
    glowstone: Ig,
    gold_block: Ug,
    gold_ore: Ng,
    granite: Fg,
    grass_block: Og,
    gravel: Bg,
    gray_concrete: zg,
    gray_concrete_powder: Vg,
    gray_stained_glass: Gg,
    gray_terracotta: Hg,
    gray_wool: Wg,
    green_concrete: Xg,
    green_concrete_powder: qg,
    green_stained_glass: Yg,
    green_terracotta: jg,
    green_wool: Kg,
    hay_block: $g,
    hay_block_horizontal: Zg,
    honeycomb_block: Jg,
    honey_block: Qg,
    horn_coral_block: ex,
    ice: tx,
    iron_block: nx,
    iron_ore: ix,
    jack_o_lantern: rx,
    jigsaw: ox,
    jukebox: ax,
    jungle_log: sx,
    jungle_log_horizontal: cx,
    jungle_planks: lx,
    jungle_wood: fx,
    lapis_block: ux,
    lapis_ore: dx,
    light_blue_concrete: hx,
    light_blue_concrete_powder: px,
    light_blue_stained_glass: mx,
    light_blue_terracotta: _x,
    light_blue_wool: bx,
    light_gray_concrete: gx,
    light_gray_concrete_powder: xx,
    light_gray_stained_glass: kx,
    light_gray_terracotta: vx,
    light_gray_wool: wx,
    lime_concrete: Mx,
    lime_concrete_powder: Sx,
    lime_stained_glass: yx,
    lime_terracotta: Ex,
    lime_wool: Tx,
    lodestone: Ax,
    magenta_concrete: Rx,
    magenta_concrete_powder: Cx,
    magenta_stained_glass: Px,
    magenta_terracotta: Lx,
    magenta_wool: Dx,
    magma_block: Ix,
    mangrove_log: Ux,
    mangrove_log_horizontal: Nx,
    mangrove_planks: Fx,
    mangrove_wood: Ox,
    melon: Bx,
    mossy_cobblestone: zx,
    mossy_stone_bricks: Vx,
    moss_block: Gx,
    mud: Hx,
    muddy_mangrove_roots: Wx,
    mud_bricks: Xx,
    mushroom_stem_inventory: qx,
    netherite_block: Yx,
    netherrack: jx,
    nether_bricks: Kx,
    nether_gold_ore: $x,
    nether_quartz_ore: Zx,
    nether_wart_block: Jx,
    note_block: Qx,
    oak_log: ek,
    oak_log_horizontal: tk,
    oak_planks: nk,
    oak_wood: ik,
    observer: rk,
    obsidian: ok,
    ochre_froglight: ak,
    ochre_froglight_horizontal: sk,
    orange_concrete: ck,
    orange_concrete_powder: lk,
    orange_stained_glass: fk,
    orange_terracotta: uk,
    orange_wool: dk,
    orientable_vertical: hk,
    orientable_with_bottom: pk,
    oxidized_chiseled_copper: mk,
    oxidized_copper: _k,
    oxidized_copper_bulb: bk,
    oxidized_copper_bulb_lit: gk,
    oxidized_copper_bulb_lit_powered: xk,
    oxidized_copper_bulb_powered: kk,
    oxidized_copper_grate: vk,
    oxidized_cut_copper: wk,
    packed_ice: Mk,
    packed_mud: Sk,
    pale_moss_block: yk,
    pale_oak_log: Ek,
    pale_oak_log_horizontal: Tk,
    pale_oak_planks: Ak,
    pale_oak_wood: Rk,
    pearlescent_froglight: Ck,
    pearlescent_froglight_horizontal: Pk,
    pink_concrete: Lk,
    pink_concrete_powder: Dk,
    pink_stained_glass: Ik,
    pink_terracotta: Uk,
    pink_wool: Nk,
    polished_andesite: Fk,
    polished_basalt: Ok,
    polished_blackstone: Bk,
    polished_blackstone_bricks: zk,
    polished_deepslate: Vk,
    polished_diorite: Gk,
    polished_granite: Hk,
    polished_tuff: Wk,
    prismarine: Xk,
    prismarine_bricks: qk,
    pumpkin: Yk,
    purple_concrete: jk,
    purple_concrete_powder: Kk,
    purple_stained_glass: $k,
    purple_terracotta: Zk,
    purple_wool: Jk,
    purpur_block: Qk,
    purpur_pillar: e0,
    purpur_pillar_horizontal: t0,
    quartz_block: n0,
    quartz_bricks: i0,
    quartz_pillar: r0,
    quartz_pillar_horizontal: o0,
    raw_copper_block: a0,
    raw_gold_block: s0,
    raw_iron_block: c0,
    redstone_block: l0,
    redstone_lamp: f0,
    redstone_lamp_on: u0,
    redstone_ore: d0,
    red_concrete: h0,
    red_concrete_powder: p0,
    red_mushroom_block_inventory: m0,
    red_nether_bricks: _0,
    red_sand: b0,
    red_stained_glass: g0,
    red_terracotta: x0,
    red_wool: k0,
    resin_block: v0,
    resin_bricks: w0,
    rooted_dirt: M0,
    sand: S0,
    sculk: y0,
    sea_lantern: E0,
    shroomlight: T0,
    slime_block: A0,
    smithing_table: R0,
    smooth_basalt: C0,
    smooth_quartz: P0,
    smooth_red_sandstone: L0,
    smooth_sandstone: D0,
    smooth_stone: I0,
    smooth_stone_slab_double: U0,
    snow_block: N0,
    soul_sand: F0,
    soul_soil: O0,
    sponge: B0,
    spruce_log: z0,
    spruce_log_horizontal: V0,
    spruce_planks: G0,
    spruce_wood: H0,
    stone: W0,
    stone_bricks: X0,
    stripped_acacia_log: q0,
    stripped_acacia_log_horizontal: Y0,
    stripped_acacia_wood: j0,
    stripped_bamboo_block: K0,
    stripped_birch_log: $0,
    stripped_birch_log_horizontal: Z0,
    stripped_birch_wood: J0,
    stripped_cherry_log: Q0,
    stripped_cherry_wood: ev,
    stripped_crimson_hyphae: tv,
    stripped_crimson_stem: nv,
    stripped_dark_oak_log: iv,
    stripped_dark_oak_log_horizontal: rv,
    stripped_dark_oak_wood: ov,
    stripped_jungle_log: av,
    stripped_jungle_log_horizontal: sv,
    stripped_jungle_wood: cv,
    stripped_mangrove_log: lv,
    stripped_mangrove_log_horizontal: fv,
    stripped_mangrove_wood: uv,
    stripped_oak_log: dv,
    stripped_oak_log_horizontal: hv,
    stripped_oak_wood: pv,
    stripped_pale_oak_log: mv,
    stripped_pale_oak_log_horizontal: _v,
    stripped_pale_oak_wood: bv,
    stripped_spruce_log: gv,
    stripped_spruce_log_horizontal: xv,
    stripped_spruce_wood: kv,
    stripped_warped_hyphae: vv,
    stripped_warped_stem: wv,
    structure_block: Mv,
    structure_block_corner: Sv,
    structure_block_data: yv,
    structure_block_load: Ev,
    structure_block_save: Tv,
    suspicious_gravel_0: Av,
    suspicious_gravel_1: Rv,
    suspicious_gravel_2: Cv,
    suspicious_gravel_3: Pv,
    suspicious_sand_0: Lv,
    suspicious_sand_1: Dv,
    suspicious_sand_2: Iv,
    suspicious_sand_3: Uv,
    target: Nv,
    terracotta: Fv,
    test_block_accept: Ov,
    test_block_fail: Bv,
    test_block_log: zv,
    test_block_start: Vv,
    test_instance_block: Gv,
    tinted_glass: Hv,
    tube_coral_block: Wv,
    tuff: Xv,
    tuff_bricks: qv,
    verdant_froglight: Yv,
    verdant_froglight_horizontal: jv,
    warped_hyphae: Kv,
    warped_planks: $v,
    warped_stem: Zv,
    warped_wart_block: Jv,
    weathered_chiseled_copper: Qv,
    weathered_copper: ew,
    weathered_copper_bulb: tw,
    weathered_copper_bulb_lit: nw,
    weathered_copper_bulb_lit_powered: iw,
    weathered_copper_bulb_powered: rw,
    weathered_copper_grate: ow,
    weathered_cut_copper: aw,
    wet_sponge: sw,
    white_concrete: cw,
    white_concrete_powder: lw,
    white_stained_glass: fw,
    white_terracotta: uw,
    white_wool: dw,
    yellow_concrete: hw,
    yellow_concrete_powder: pw,
    yellow_stained_glass: mw,
    yellow_terracotta: _w,
    yellow_wool: bw,
  },
  Qt = 16,
  On = "__missing__",
  xw = new Sc(),
  uo = new Map();
function Lc(i) {
  return typeof i != "string" || i.length === 0
    ? On
    : (i.split("/").pop() ?? On);
}
async function kw({ blocks: i, faceMappings: e }) {
  const t = ww(i, e),
    n = Mw(t.length),
    r = document.createElement("canvas");
  ((r.width = n.size), (r.height = n.size));
  const o = r.getContext("2d");
  if (!o)
    throw new Error("Could not create block texture atlas canvas context.");
  o.imageSmoothingEnabled = !1;
  const a = new Map();
  for (let f = 0; f < t.length; f += 1) {
    const u = t[f],
      h = Sw(f, n);
    if (u === On) Gs(o, h.x, h.y);
    else {
      const p = await Tw(u);
      p ? Aw(o, p, h.x, h.y) : Gs(o, h.x, h.y);
    }
    a.set(
      u,
      yw({ column: h.column, row: h.row, tilesPerSide: n.tilesPerSide }),
    );
  }
  const s = new ff(r);
  ((s.colorSpace = Mt),
    (s.magFilter = ct),
    (s.minFilter = ct),
    (s.wrapS = Wt),
    (s.wrapT = Wt),
    (s.generateMipmaps = !1),
    (s.needsUpdate = !0));
  const c = a.get(On);
  if (!c) throw new Error("Missing atlas UV rect was not generated.");
  const l = new Map();
  return (
    Object.entries(i).forEach(([f, u]) => {
      const h = u.textures ?? {},
        p = e.map((b) => {
          const k = Lc(h[b]);
          return a.get(k) ?? c;
        });
      l.set(f, p);
    }),
    { atlasTexture: s, blockFaceUvs: l }
  );
}
function vw(i) {
  const e = new Gn(1, 1, 1),
    t = e.getAttribute("uv");
  return (
    i.forEach((n, r) => {
      const o = r * 4;
      for (let a = 0; a < 4; a += 1) {
        const s = o + a;
        t.setXY(
          s,
          Hs(n.minU, n.maxU, t.getX(s)),
          Hs(n.minV, n.maxV, t.getY(s)),
        );
      }
    }),
    (t.needsUpdate = !0),
    e
  );
}
function ww(i, e) {
  const t = new Set([On]);
  return (
    Object.values(i).forEach((n) => {
      const r = n.textures ?? {};
      e.forEach((o) => {
        t.add(Lc(r[o]));
      });
    }),
    [...t].sort((n, r) => (n === On ? -1 : r === On ? 1 : n.localeCompare(r)))
  );
}
function Mw(i) {
  const e = Math.max(1, Math.ceil(Math.sqrt(i))),
    t = Ew(e);
  return { tilesPerSide: t, size: t * Qt };
}
function Sw(i, e) {
  const t = i % e.tilesPerSide,
    n = Math.floor(i / e.tilesPerSide);
  return { column: t, row: n, x: t * Qt, y: n * Qt };
}
function yw({ column: i, row: e, tilesPerSide: t }) {
  const n = 1 / t;
  return {
    minU: i * n,
    maxU: (i + 1) * n,
    minV: 1 - (e + 1) * n,
    maxV: 1 - e * n,
  };
}
function Ew(i) {
  return 2 ** Math.ceil(Math.log2(i));
}
async function Tw(i) {
  if (uo.has(i)) return uo.get(i) ?? null;
  const e = await new Promise((t) => {
    xw.load(
      `/assets/blocks/${i}.png`,
      (n) => t(n),
      void 0,
      () => t(null),
    );
  });
  return (uo.set(i, e), e);
}
function Aw(i, e, t, n) {
  const r = Math.min(Qt, e.naturalWidth || e.width),
    o = Math.min(Qt, e.naturalHeight || e.height);
  i.drawImage(e, 0, 0, r, o, t, n, Qt, Qt);
}
function Gs(i, e, t) {
  const n = Qt / 2;
  ((i.fillStyle = "#ff00ff"),
    i.fillRect(e, t, Qt, Qt),
    (i.fillStyle = "#111111"),
    i.fillRect(e, t, n, n),
    i.fillRect(e + n, t + n, n, n));
}
function Hs(i, e, t) {
  return i + (e - i) * t;
}
const Rw = new bf(),
  Dc = ["east", "west", "up", "down", "north", "south"],
  Ea = gw,
  wr = new Map(),
  Ws = new Map(),
  Xs = new Map(),
  Cw = kw({ blocks: Ea, faceMappings: Dc });
function Pw() {
  return Object.keys(Ea);
}
function Lw(i) {
  const e = Ea[i];
  if (!e) throw new Error(`Block "${i}" not found`);
  return e;
}
async function Ic() {
  return Cw;
}
async function Dw(i) {
  const e = wr.get(i);
  return (
    e ||
    new Promise((t, n) => {
      Rw.load(
        i,
        (r) => {
          ((r.magFilter = ct),
            (r.minFilter = ct),
            (r.colorSpace = Mt),
            wr.set(i, r),
            t(r));
        },
        void 0,
        n,
      );
    })
  );
}
async function Iw(i) {
  const e = wr.get(i);
  if (e) return e;
  const t = await Dw(`/assets/blocks/${i}.png`);
  return (wr.set(i, t), t);
}
async function Uw(i) {
  if (!i) return new Pi({ color: 16711935 });
  const e = i.split("/").pop();
  if (!e) return new Pi({ color: 16711935 });
  try {
    const t = await Iw(e);
    return new Pi({ map: t, alphaTest: 0.5, depthWrite: !e.includes("glass") });
  } catch {
    return new Pi({ color: 16711935 });
  }
}
async function Nw(i = {}) {
  return Promise.all(Dc.map((e) => Uw(i[e])));
}
async function Fw(i) {
  const e = await Ic();
  return new Ut(Uc(i, e), Nc(e.atlasTexture));
}
function Uc(i, e) {
  const t = Xs.get(i);
  if (t) return t;
  const n = e.blockFaceUvs.get(i);
  if (!n) throw new Error(`Block atlas UVs for "${i}" not found`);
  const r = vw(n);
  return (Xs.set(i, r), r);
}
function Nc(i) {
  const e = Ws.get(i);
  if (e) return e;
  const t = new Pi({ map: i, alphaTest: 0.5, depthWrite: !1 });
  return (Ws.set(i, t), t);
}
async function Ow(i) {
  const e = await Ic();
  return { geometry: Uc(i, e), material: Nc(e.atlasTexture) };
}
class Bw {
  mesh;
  constructor(e) {
    this.mesh = e;
  }
}
class zw extends Bw {
  speed;
  position;
  velocity;
  height;
  constructor(e, t) {
    (super(e),
      (this.speed = t.speed ?? 7),
      (this.position = this.mesh.position),
      (this.velocity = new U()),
      (this.height = t.height ?? 1.85));
  }
  move(e, t, n) {
    (this.velocity.lerp(e, t * n),
      this.position.addScaledVector(this.velocity, n));
  }
}
class Ta {
  htmlElement;
  events;
  constructor(e) {
    ((this.htmlElement = e), (this.events = new EventTarget()));
  }
  show() {
    this.htmlElement.classList.remove("hidden");
  }
  hide() {
    this.htmlElement.classList.add("hidden");
  }
  on(e, t, n) {
    return typeof t != "function"
      ? () => {}
      : (this.events.addEventListener(e, t, n),
        () => {
          this.events.removeEventListener(e, t, n);
        });
  }
  off(e, t, n) {
    typeof t == "function" && this.events.removeEventListener(e, t, n);
  }
  emit(e, t) {
    return this.events.dispatchEvent(new CustomEvent(e, { detail: t }));
  }
}
class la extends Ta {
  openState;
  constructor(e) {
    (super(e), (this.openState = !1), this.close());
  }
  close() {
    ((this.openState = !1), this.hide());
  }
  open() {
    ((this.openState = !0), this.show());
  }
  isOpen() {
    return this.openState;
  }
}
class Vw {
  inputManager;
  ptrControls;
  activeUI;
  constructor(e, t) {
    ((this.inputManager = e), (this.ptrControls = t), (this.activeUI = null));
  }
  isUIOpen() {
    return this.activeUI !== null;
  }
  closeActiveUI() {
    return this.activeUI
      ? (this.activeUI.close(),
        (this.activeUI = null),
        this.ptrControls.lock(),
        !1)
      : (this.ptrControls.lock(), !1);
  }
  setActiveUI(e) {
    return e === null
      ? this.closeActiveUI()
      : this.activeUI === e
        ? this.closeActiveUI()
        : (this.activeUI?.close(),
          (this.activeUI = e),
          this.activeUI
            ? (this.activeUI.open(), this.ptrControls.unlock(), !0)
            : (this.ptrControls.lock(), !1));
  }
  toggle(e) {
    return this.setActiveUI(e);
  }
}
class Gw extends Vw {
  hideOnUIHtmlElems;
  modals;
  modalListeners;
  constructor(e, t, n = []) {
    (super(e, t),
      (this.hideOnUIHtmlElems = n),
      (this.modals = new Map()),
      (this.modalListeners = new Map()));
  }
  registerModal(e, t) {
    return (
      this.modalListeners.get(e)?.(),
      this.modals.set(e, t),
      this.modalListeners.set(
        e,
        t.on("close-request", () => {
          this.activeUI === t && this.closeActiveUI();
        }),
      ),
      t
    );
  }
  getModal(e) {
    return this.modals.get(e) ?? null;
  }
  openModal(e) {
    return this.setActiveUI(this.requireModal(e));
  }
  toggleModal(e) {
    return this.toggle(this.requireModal(e));
  }
  closeModal(e) {
    const t = this.requireModal(e);
    return this.activeUI === t ? this.closeActiveUI() : (t.close(), !1);
  }
  setActiveUI(e) {
    const t = super.setActiveUI(e);
    return (this.syncHiddenElements(), t);
  }
  requireModal(e) {
    const t = this.getModal(e);
    if (!t) throw new Error(`Unknown modal: ${e}`);
    return t;
  }
  syncHiddenElements() {
    const e = this.isUIOpen();
    this.hideOnUIHtmlElems.forEach((t) => {
      t.classList.toggle("hidden", e);
    });
  }
}
function Fc(i, e, t) {
  const n = Math.max(1, e),
    r = Math.ceil(i / n),
    o = n * t,
    a = r * t;
  return {
    columns: n,
    rows: r,
    logicalWidth: o,
    logicalHeight: a,
    backgroundSize: `${o}px ${a}px`,
  };
}
function Oc(i, e, t, n) {
  const r = {};
  return (
    i.forEach((o, a) => {
      const s = a % e,
        c = Math.floor(a / e),
        l = s * t,
        f = c * t;
      r[o] = {
        id: o,
        backgroundPosition: `-${l}px -${f}px`,
        backgroundSize: n,
      };
    }),
    r
  );
}
async function Hw(i, e = {}) {
  const t = e.columns ?? 16,
    n = e.iconSize ?? 64,
    r = e.chunkSize ?? 20,
    o = e.renderScale ?? Math.min(window.devicePixelRatio || 1, 2),
    a = e.onProgress,
    s = Fc(i.length, t, n),
    c = document.createElement("canvas");
  ((c.width = s.logicalWidth * o), (c.height = s.logicalHeight * o));
  const l = c.getContext("2d");
  if (!l)
    throw new Error("Could not create the block texture sheet canvas context.");
  ((l.imageSmoothingEnabled = !0), l.clearRect(0, 0, c.width, c.height));
  const f = new Pc({ alpha: !0, antialias: !0, preserveDrawingBuffer: !0 });
  (f.setPixelRatio(o),
    (f.outputColorSpace = Mt),
    f.setSize(n, n, !1),
    f.setClearColor(0, 0));
  const u = new kc(),
    h = new yr(-1.15, 1.15, 1.15, -1.15, 0.1, 10);
  (h.position.set(-2.6, 1.8, 2.6),
    h.lookAt(0, 0, 0),
    h.updateProjectionMatrix());
  const p = new kf(16777215, 3);
  (p.position.set(-5, 10, 1), p.lookAt(0, 0, 0), u.add(p));
  const b = new Gn(1, 1, 1),
    k = new wa({ transparent: !0, opacity: 0 }),
    m = new Ut(b, k);
  u.add(m);
  const d = Oc(i, s.columns, n, s.backgroundSize),
    y = i.length;
  a?.({ completed: 0, total: y });
  for (let M = 0; M < i.length; M += 1) {
    const E = i[M],
      T = Lw(E),
      R = await Nw(T.textures ?? {});
    ((m.material = R), f.clear(), f.render(u, h));
    const N = M % s.columns,
      x = Math.floor(M / s.columns),
      v = N * n,
      P = x * n;
    (l.drawImage(f.domElement, v * o, P * o),
      Ww(R),
      a?.({ completed: M + 1, total: y }),
      (M + 1) % r === 0 && (await Xw()));
  }
  ((m.material = k), b.dispose(), k.dispose(), f.dispose());
  const S = c.toDataURL("image/png");
  return {
    sheetCanvas: c,
    sheetUrl: S,
    textureSheetUrl: S,
    iconSize: n,
    items: i.map((M) => ({ ...d[M], textureSheetUrl: S })),
    metadata: d,
  };
}
function Ww(i) {
  (Array.isArray(i) ? i : [i]).forEach((t) => {
    t.dispose();
  });
}
function Xw() {
  return new Promise((i) => {
    requestAnimationFrame(() => i());
  });
}
class qw extends Ta {
  slots;
  constructor() {
    const e = document.createElement("div");
    ((e.className = "inventory-grid hidden"), super(e), (this.slots = []));
  }
  setTextureSheet(e) {
    ((this.slots = e.items.map((t) => this.createSlot(t))),
      this.htmlElement.replaceChildren(...this.slots),
      this.show());
  }
  applyFilter(e) {
    const t = e.trim().toLowerCase();
    let n = 0;
    return (
      this.slots.forEach((r) => {
        const a = (r.dataset.name ?? "").includes(t);
        (r.classList.toggle("hidden", !a), a && (n += 1));
      }),
      { query: t, totalCount: this.slots.length, visibleCount: n }
    );
  }
  createSlot(e) {
    const t = document.createElement("button");
    ((t.type = "button"), (t.className = "inventory-slot"));
    const n = Yw(e.id);
    ((t.title = n),
      t.setAttribute("aria-label", n),
      (t.dataset.name = n.toLowerCase()));
    const r = document.createElement("span");
    return (
      (r.className = "inventory-icon"),
      (r.style.backgroundImage = `url(${e.textureSheetUrl})`),
      (r.style.backgroundPosition = e.backgroundPosition),
      (r.style.backgroundSize = e.backgroundSize),
      t.append(r),
      t
    );
  }
}
function Yw(i) {
  return i
    .split("_")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join(" ");
}
class jw extends Ta {
  inputElement;
  constructor() {
    const e = document.createElement("div");
    ((e.className = "inventory-search-container"),
      super(e),
      (this.inputElement = document.createElement("input")),
      (this.inputElement.autocorrect = !1),
      (this.inputElement.type = "search"),
      (this.inputElement.className = "inventory-search"),
      this.inputElement.setAttribute("aria-label", "Search inventory blocks"),
      (this.inputElement.id = "inventory-search-input"));
    const t = document.createElement("label");
    ((t.textContent = "Search Blocks:"),
      (t.className = "inventory-search-label"),
      t.setAttribute("for", "inventory-search-input"),
      this.htmlElement.append(t),
      this.inputElement.addEventListener("input", () => {
        this.emit("querychange", { query: this.inputElement.value });
      }),
      this.htmlElement.append(this.inputElement));
  }
  clear() {
    this.inputElement.value = "";
  }
  setDisabled(e) {
    this.inputElement.disabled = e;
  }
}
class Kw extends la {
  downloadFileName;
  textureSheet;
  statusElement;
  headerElement;
  actionsElement;
  closeButton;
  downloadButton;
  searchComponent;
  gridComponent;
  constructor(e, t = {}) {
    super(e);
    const {
      showDownloadButton: n = !1,
      downloadFileName: r = "block-texture-sheet.png",
    } = t;
    ((this.downloadFileName = r),
      (this.textureSheet = null),
      (this.statusElement = document.createElement("p")),
      (this.statusElement.className = "inventory-status"),
      (this.headerElement = document.createElement("div")),
      (this.headerElement.className = "inventory-header"),
      (this.actionsElement = document.createElement("div")),
      (this.actionsElement.className = "inventory-actions"),
      (this.closeButton = document.createElement("button")),
      (this.closeButton.type = "button"),
      (this.closeButton.className =
        "inventory-action-button inventory-close-button"),
      this.closeButton.setAttribute("aria-label", "Close inventory"),
      this.closeButton.addEventListener("click", () => {
        this.emit("close-request");
      }),
      (this.downloadButton = null),
      n &&
        ((this.downloadButton = document.createElement("button")),
        (this.downloadButton.type = "button"),
        (this.downloadButton.className = "inventory-action-button"),
        (this.downloadButton.textContent = "Download Texture Sheet"),
        this.downloadButton.setAttribute(
          "aria-label",
          "Download block texture sheet",
        ),
        (this.downloadButton.disabled = !0),
        this.downloadButton.addEventListener("click", () => {
          this.downloadTextureSheet();
        })),
      (this.searchComponent = new jw()),
      this.searchComponent.on("querychange", (o) => {
        if (!(o instanceof CustomEvent)) return;
        const a = o.detail;
        this.applyFilter(a?.query ?? "");
      }),
      (this.gridComponent = new qw()),
      this.actionsElement.append(
        this.searchComponent.htmlElement,
        ...(this.downloadButton ? [this.downloadButton] : []),
      ),
      this.headerElement.append(this.statusElement, this.closeButton),
      this.htmlElement.replaceChildren(
        this.headerElement,
        this.actionsElement,
        this.gridComponent.htmlElement,
      ),
      this.setLoadingState("Loading block texture sheet..."));
  }
  setLoadingState(e) {
    ((this.textureSheet = null),
      (this.statusElement.textContent = e),
      this.gridComponent.hide(),
      this.searchComponent.setDisabled(!0),
      this.downloadButton?.setAttribute("disabled", "true"));
  }
  setErrorState(e) {
    ((this.textureSheet = null),
      (this.statusElement.textContent = e),
      this.gridComponent.hide(),
      this.searchComponent.setDisabled(!0),
      this.downloadButton?.setAttribute("disabled", "true"),
      this.statusElement.classList.add("error"),
      this.statusElement.classList.remove("success"));
  }
  setGridTextureSheet(e) {
    ((this.textureSheet = e),
      this.gridComponent.setTextureSheet(e),
      (this.statusElement.textContent = `${e.items.length} blocks loaded`),
      this.statusElement.classList.add("success"),
      this.statusElement.classList.remove("error"),
      this.searchComponent.setDisabled(!1),
      this.downloadButton?.removeAttribute("disabled"),
      this.searchComponent.clear(),
      this.applyFilter(""));
  }
  applyFilter(e) {
    const {
      query: t,
      totalCount: n,
      visibleCount: r,
    } = this.gridComponent.applyFilter(e);
    this.statusElement.textContent = t
      ? `${r} of ${n} blocks`
      : `${n} blocks loaded`;
  }
  downloadTextureSheet() {
    const e = this.textureSheet?.textureSheetUrl;
    if (!e) return;
    const t = document.createElement("a");
    ((t.href = e),
      (t.download = this.downloadFileName),
      document.body.append(t),
      t.click(),
      t.remove());
  }
}
async function $w(i, e = {}) {
  const t = e.textureSheetUrl ?? "/assets/images/block-texture-sheet.png",
    n = e.columns ?? 16,
    r = e.iconSize ?? 64,
    o = await Zw(t),
    a = Fc(i.length, n, r),
    s = Oc(i, a.columns, r, a.backgroundSize);
  return {
    textureSheetUrl: t,
    textureSheetImage: o,
    iconSize: r,
    items: i.map((c) => ({ ...s[c], textureSheetUrl: t })),
    metadata: s,
  };
}
function Zw(i) {
  return new Promise((e, t) => {
    const n = new Image();
    (n.addEventListener("load", () => e(n), { once: !0 }),
      n.addEventListener(
        "error",
        () => {
          t(new Error(`Failed to load block texture sheet image: ${i}`));
        },
        { once: !0 },
      ),
      (n.src = i));
  });
}
function Jw({
  inputManager: i,
  pointerControls: e,
  gameParams: t,
  hideOnUIHtmlElems: n = [],
}) {
  const r = new Gw(i, e, n),
    o = r.registerModal("menu", new la(t.menuHtmlElm)),
    a = r.registerModal("worldgen", new la(t.worldGenHtmlElm)),
    s = r.registerModal(
      "inventory",
      new Kw(t.inventoryHtmlElm, t.inventoryBlockTextureSheetParams),
    );
  return (
    r.openModal("worldgen"),
    Qw(s, t.inventoryBlockTextureSheetParams),
    { uiHandler: r, menu: o, worldgen: a, inventory: s }
  );
}
async function Qw(i, e = {}) {
  try {
    const t = Pw().sort(),
      {
        source: n = "static",
        staticTextureSheetUrl: r = "/assets/images/block-texture-sheet.png",
        columns: o = 16,
        iconSize: a = 64,
        chunkSize: s = 20,
        renderScale: c,
      } = e,
      l =
        n === "generated"
          ? await eM(i, t, {
              columns: o,
              iconSize: a,
              chunkSize: s,
              renderScale: c,
            })
          : await tM(i, t, { textureSheetUrl: r, columns: o, iconSize: a });
    i.setGridTextureSheet(l);
  } catch (t) {
    (console.error(t), i.setErrorState("Failed to load block texture sheet."));
  }
}
async function eM(i, e, t) {
  return (
    i.setLoadingState(`Generating block texture sheet... 0/${e.length} blocks`),
    Hw(e, {
      ...t,
      onProgress: ({ completed: n, total: r }) => {
        i.setLoadingState(`Generating block texture sheet... ${n}/${r} blocks`);
      },
    })
  );
}
async function tM(i, e, t) {
  return (
    i.setLoadingState(`Loading block texture sheet... ${e.length} blocks`),
    $w(e, t)
  );
}
async function nM({
  scene: i,
  camera: e,
  pointerControls: t,
  gameParams: n,
  options: r = {},
}) {
  const {
      keyPreset: o = n.keysPreset ?? fa,
      player: a = {},
      ui: s = {},
      actions: c = {},
    } = r,
    {
      blockName: l = "redstone_block",
      spawnPosition: f = At.PLAYER_STARTING_POSITION,
      params: u = n.playerParams,
    } = a,
    h = s.hideOnUIHtmlElems ?? [n.crosshairHtmlElm, n.hudHintHtmlElm],
    { menu: p = "MENU", inventory: b = "INVENTORY" } = c,
    k = new Pm();
  k.init(o);
  const m = new Lm(),
    d = new Cm(k, m),
    { uiHandler: y } = Jw({
      inputManager: d,
      pointerControls: t,
      gameParams: n,
      hideOnUIHtmlElems: h,
    }),
    S = await Fw(l);
  (S.position.set(...f), i.add(S));
  const M = new zw(S, u),
    E = new Im(M, d, e),
    T = new Nm(d, y, E);
  return (
    iM({
      system: T,
      keyStore: m,
      uiHandler: y,
      menuAction: p,
      inventoryAction: b,
    }),
    { player: M, system: T, uiHandler: y, inputManager: d, keyStore: m }
  );
}
function iM({
  system: i,
  keyStore: e,
  uiHandler: t,
  menuAction: n,
  inventoryAction: r,
}) {
  const o = (c, l) => {
      const f = (u) => {
        rM(u) || l(u.key.toLowerCase(), u);
      };
      document.addEventListener(c, f);
    },
    a = t.getModal("menu"),
    s = t.getModal("worldgen");
  (o("keydown", (c) => {
    (console.log(`Key down: ${c}`), e.addPressedKey(c));
  }),
    o("keyup", (c) => {
      e.removePressedKey(c);
    }),
    a?.htmlElement.addEventListener("click", (c) => {
      c.target === a.htmlElement && t.closeModal("menu");
    }),
    o("keydown", () => {
      s?.isOpen() || (i.inputManager.isPressed(n) && t.toggleModal("menu"));
    }),
    o("keydown", () => {
      s?.isOpen() ||
        (i.inputManager.isPressed(r) && t.toggleModal("inventory"));
    }),
    window.addEventListener("blur", () => {
      e.clear();
    }));
}
function rM(i) {
  const e = i.target;
  return (
    e instanceof HTMLInputElement ||
    e instanceof HTMLTextAreaElement ||
    e instanceof HTMLSelectElement ||
    (e instanceof HTMLElement && e.isContentEditable)
  );
}
function ho(i, e) {
  return Math.ceil(i / e);
}
async function oM({
  blockName: i,
  blockSize: e,
  startX: t,
  startZ: n,
  endX: r,
  endZ: o,
  startY: a,
  endY: s = 0,
}) {
  const { geometry: c, material: l } = await Ow(i),
    f = ho(r - t, e),
    u = ho(o - n, e),
    h = ho(s - a, e),
    p = f * u * h,
    b = new of(c, l, p),
    k = new Qe(),
    m = e / 2;
  let d = 0;
  for (let y = 0; y < h; y++)
    for (let S = 0; S < u; S++)
      for (let M = 0; M < f; M++)
        (k.setPosition(t + M * e + m, a + y * e + m, n + S * e + m),
          b.setMatrixAt(d, k),
          (d += 1));
  return ((b.instanceMatrix.needsUpdate = !0), b);
}
function aM() {
  const i = document.getElementById("worldgen-form");
  if (!(i instanceof HTMLFormElement))
    throw new Error("Missing required worldgen form.");
  return i;
}
function sM() {
  const i = document.getElementById("reset-world");
  return i instanceof HTMLButtonElement ? i : null;
}
function po(i, e) {
  const t = i.elements.namedItem(e);
  if (!(t instanceof HTMLInputElement))
    throw new Error(`Missing numeric worldgen field: ${e}`);
  return t.valueAsNumber;
}
function cM({ scene: i, system: e }) {
  const t = aM(),
    n = sM();
  (t.addEventListener("submit", async (r) => {
    r.preventDefault();
    const o = po(t, "x"),
      a = po(t, "y"),
      s = po(t, "z"),
      c = await lM({ xBlocks: o, yBlocks: a, zBlocks: s });
    (i.add(c), e.uiHandler.closeModal("worldgen"));
  }),
    n?.addEventListener("click", () => {
      window.location.reload();
    }));
}
async function lM({ xBlocks: i, yBlocks: e, zBlocks: t }) {
  const n = At.BLOCK_SIZE,
    r = i * n,
    o = t * n,
    a = e * n,
    s = -r / 2,
    c = -o / 2,
    l = 0,
    f = l - a;
  return oM({
    blockName: At.GROUND_BLOCK_NAME,
    blockSize: n,
    startX: s,
    startZ: c,
    endX: s + r,
    endZ: c + o,
    startY: f,
    endY: l,
  });
}
async function fM() {
  const { scene: i, renderer: e, camera: t, pointerControls: n } = Rm(Kc),
    { system: r } = await nM({
      scene: i,
      camera: t,
      pointerControls: n,
      gameParams: qs,
      options: $c,
    });
  ((globalThis.system = r),
    e.setAnimationLoop((o) => {
      r.animate(o, e, i, t);
    }),
    Zc(t, e),
    cM({ scene: i, system: r }));
}
await fM();
