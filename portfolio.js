// ── CURSOR ──
const cursor = document.getElementById("cursor"),
  ring = document.getElementById("cursor-ring");
let cx = 0,
  cy = 0,
  rx = 0,
  ry = 0;
document.addEventListener("mousemove", (e) => {
  cx = e.clientX;
  cy = e.clientY;
  cursor.style.left = cx + "px";
  cursor.style.top = cy + "px";
});
(function animRing() {
  rx += (cx - rx) * 0.1;
  ry += (cy - ry) * 0.1;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animRing);
})();
document
  .querySelectorAll("a,.project-card,.skill-pill,.stat-item")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%,-50%) scale(1.6)";
      cursor.style.background = "var(--violet2)";
      ring.style.width = "52px";
      ring.style.height = "52px";
      ring.style.borderColor = "var(--violet2)";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%,-50%) scale(1)";
      cursor.style.background = "var(--cyan)";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(124,58,237,.55)";
    });
  });

// ── WEBGL GALAXY ──
const canvas = document.getElementById("bg-canvas");
const gl =
  canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
if (gl) {
  initGL(gl);
} else {
  fallback();
}

function initGL(gl) {
  let W = (canvas.width = window.innerWidth),
    H = (canvas.height = window.innerHeight);
  gl.viewport(0, 0, W, H);
  window.addEventListener("resize", () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    gl.viewport(0, 0, W, H);
  });

  const N = 900;
  const pos = new Float32Array(N * 3),
    col = new Float32Array(N * 4);
  const pal = [
    [1, 0.9, 1, 0.45],
    [0.55, 0.25, 0.95, 0.35],
    [0.13, 0.8, 0.93, 0.4],
    [1, 0.28, 0.65, 0.3],
    [1, 1, 0.75, 0.3],
  ];
  for (let i = 0; i < N; i++) {
    const u = Math.random(),
      v = Math.random(),
      th = 2 * Math.PI * u,
      ph = Math.acos(2 * v - 1);
    const r = 0.3 + Math.random() * 0.7;
    pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
    pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
    pos[i * 3 + 2] = r * Math.cos(ph);
    const c = pal[Math.floor(Math.random() * pal.length)];
    col[i * 4] = c[0];
    col[i * 4 + 1] = c[1];
    col[i * 4 + 2] = c[2];
    col[i * 4 + 3] = c[3] * (0.4 + Math.random() * 0.4);
  }
  const vs = `attribute vec3 a_p;attribute vec4 a_c;uniform float u_t;uniform vec2 u_m;uniform vec2 u_r;varying vec4 v_c;
  void main(){vec3 p=a_p;float ct=cos(u_t*.08),st=sin(u_t*.08);float x2=p.x*ct-p.z*st,z2=p.x*st+p.z*ct;p=vec3(x2,p.y,z2);
  vec2 nd=vec2(u_m.x/u_r.x*2.-1.,-(u_m.y/u_r.y*2.-1.));p.xy+=nd*.03;
  gl_Position=vec4(p.xy,p.z*.4+.4,1.);gl_PointSize=clamp(2.2*(1.1-p.z),.8,3.8);v_c=a_c;}`;
  const fs = `precision mediump float;varying vec4 v_c;void main(){float d=length(gl_PointCoord-.5)*2.;float a=1.-smoothstep(.4,.9,d);gl_FragColor=vec4(v_c.rgb,v_c.a*a);}`;

  function sh(t, s) {
    const x = gl.createShader(t);
    gl.shaderSource(x, s);
    gl.compileShader(x);
    return x;
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  gl.useProgram(prog);
  const pb = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, pb);
  gl.bufferData(gl.ARRAY_BUFFER, pos, gl.STATIC_DRAW);
  const ap = gl.getAttribLocation(prog, "a_p");
  gl.enableVertexAttribArray(ap);
  gl.vertexAttribPointer(ap, 3, gl.FLOAT, false, 0, 0);
  const cb = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, cb);
  gl.bufferData(gl.ARRAY_BUFFER, col, gl.STATIC_DRAW);
  const ac = gl.getAttribLocation(prog, "a_c");
  gl.enableVertexAttribArray(ac);
  gl.vertexAttribPointer(ac, 4, gl.FLOAT, false, 0, 0);
  const uT = gl.getUniformLocation(prog, "u_t"),
    uM = gl.getUniformLocation(prog, "u_m"),
    uR = gl.getUniformLocation(prog, "u_r");
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
  let mx = W / 2,
    my = H / 2,
    t = 0;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
  });
  (function frame() {
    t += 1;
    gl.clearColor(0, 0, 0, 0); // IMPORTANT: Transparent background
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(uT, t);
    gl.uniform2f(uM, mx, my);
    gl.uniform2f(uR, W, H);
    gl.drawArrays(gl.POINTS, 0, N);
    requestAnimationFrame(frame);
  })();
}

function fallback() {
  const ctx = canvas.getContext("2d");
  let W,
    H,
    S = [];

  function sz() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  sz();
  window.addEventListener("resize", sz);
  S = Array.from(
    {
      length: 120,
    },
    () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() + 0.3,
      a: 0.2 + Math.random() * 0.5,
      s: 0.03 + Math.random() * 0.07,
      td: 1,
      ts: 0.003 + Math.random() * 0.004,
    }),
  );
  (function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const s of S) {
      s.a += s.ts * s.td;
      if (s.a > 0.75 || s.a < 0.1) s.td *= -1;
      s.y += s.s;
      if (s.y > H) s.y = 0;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, 6.28);
      ctx.globalAlpha = s.a;
      ctx.fillStyle = "#fff";
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  })();
}

// ── TYPEWRITER ──
const words = [
  "data pipelines.",
  "ML models.",
  "BI dashboards.",
  "SQL queries.",
  "web apps.",
  "visual stories.",
  "clean code.",
  "insights.",
];
const el = document.getElementById("typed");
let wi = 0,
  ci = 0,
  del = false;

function type() {
  const w = words[wi];
  if (!del) {
    el.textContent = w.slice(0, ++ci);
    if (ci === w.length) {
      del = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = w.slice(0, --ci);
    if (ci === 0) {
      del = false;
      wi = (wi + 1) % words.length;
    }
  }
  setTimeout(type, del ? 45 : 90);
}
type();

// ── HERO NAME 3D PARALLAX ──
const hname = document.getElementById("hero-name");
document.addEventListener("mousemove", (e) => {
  const rx = (e.clientY / window.innerHeight - 0.5) * -16;
  const ry = (e.clientX / window.innerWidth - 0.5) * 16;
  hname.style.textShadow = `${ry * 0.25}px ${rx * 0.25}px 0 rgba(124,58,237,.75),${ry * 0.55}px ${rx * 0.55}px 0 rgba(34,211,238,.35)`;
  hname.style.transform = `perspective(900px) rotateX(${rx * 0.35}deg) rotateY(${ry * 0.35}deg)`;
});

// ── PROJECT CARD TILT ──
document.querySelectorAll(".project-card").forEach((c) => {
  c.addEventListener("mousemove", (e) => {
    const r = c.getBoundingClientRect(),
      x = e.clientX - r.left,
      y = e.clientY - r.top;
    const rx2 = ((y - r.height / 2) / r.height) * -8,
      ry2 = ((x - r.width / 2) / r.width) * 8;
    c.style.transform = `perspective(800px) rotateX(${rx2}deg) rotateY(${ry2}deg) translateY(-7px)`;
  });
  c.addEventListener("mouseleave", () => {
    c.style.transform = "";
  });
});

// ── SCROLL REVEAL + SKILL BARS ──
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        e.target.querySelectorAll(".sb-fill").forEach((b) => {
          b.style.transform = `scaleX(${b.dataset.w})`;
        });
      }
    });
  },
  {
    threshold: 0.2,
  },
);
document
  .querySelectorAll(".reveal,.reveal-left,.reveal-right")
  .forEach((el) => obs.observe(el));

const kso = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target
          .querySelectorAll(".sb-fill")
          .forEach((b) => (b.style.transform = `scaleX(${b.dataset.w})`));
        kso.disconnect();
      }
    });
  },
  {
    threshold: 0.2,
  },
);
document.querySelectorAll(".key-skills").forEach((el) => kso.observe(el));

// ── VIDEO BACKGROUND CYCLING ──
(function () {
  const videos = [
    document.getElementById("vid0"),
    document.getElementById("vid2"),
  ];
  const dots = document.querySelectorAll(".vid-dot");
  let current = 0;

  videos.forEach((v, i) => {
    // Only attempt to interact if the video element exists
    if (v) {
      v.load();
      // Catch play promises to prevent console errors if video is missing
      let playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          /* Video likely missing or blocked, ignore */
        });
      }
    }
  });

  function switchTo(idx) {
    if (!videos[current] || !videos[idx]) return;

    videos[current].classList.remove("active");
    if (dots[current]) dots[current].classList.remove("active");

    current = idx;

    videos[current].classList.add("active");
    if (dots[current]) dots[current].classList.add("active");

    videos[current].currentTime = 0;
    let playPromise = videos[current].play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        /* Ignore */
      });
    }
  }

  setInterval(() => {
    switchTo((current + 1) % videos.length);
  }, 12000);

  const vbg = document.getElementById("video-bg");
  if (vbg) {
    document.addEventListener("mousemove", (e) => {
      const xr = (e.clientX / window.innerWidth - 0.5) * 8;
      const yr = (e.clientY / window.innerHeight - 0.5) * 8;
      vbg.style.transform = `scale(1.04) translate(${-xr * 0.5}px,${-yr * 0.5}px)`;
    });
  }
})();

// ── SHOOTING STARS ──
(function () {
  const sc = document.getElementById("shoot-canvas");
  if (!sc) return;
  const ctx2 = sc.getContext("2d");
  let W2, H2;

  function rsz() {
    W2 = sc.width = sc.offsetWidth;
    H2 = sc.height = sc.offsetHeight;
  }
  rsz();
  window.addEventListener("resize", rsz);

  const trails = [];
  const colors = [
    "rgba(196,181,253,",
    "rgba(103,232,249,",
    "rgba(249,168,212,",
    "rgba(255,255,255,",
    "rgba(94,234,212,",
  ];

  function spawn() {
    const col = colors[Math.floor(Math.random() * colors.length)];
    trails.push({
      x: Math.random() * W2 * 0.8 + W2 * 0.1,
      y: Math.random() * H2 * 0.4,
      len: Math.random() * 120 + 60,
      speed: Math.random() * 5 + 4,
      angle: Math.PI / 4 + Math.random() * 0.3 - 0.15,
      alpha: 1,
      col,
      tail: [],
    });
  }
  setInterval(spawn, 2200);
  spawn();

  (function drawStars() {
    ctx2.clearRect(0, 0, W2, H2);
    for (let i = trails.length - 1; i >= 0; i--) {
      const s = trails[i];
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.alpha -= 0.018;
      s.tail.push({
        x: s.x,
        y: s.y,
        a: s.alpha,
      });
      if (s.tail.length > 28) s.tail.shift();

      for (let j = 0; j < s.tail.length; j++) {
        const t = s.tail[j];
        const fade = t.a * (j / s.tail.length);
        ctx2.beginPath();
        ctx2.arc(t.x, t.y, (j / s.tail.length) * 1.8, 0, Math.PI * 2);
        ctx2.fillStyle = s.col + Math.max(0, fade) + ")";
        ctx2.fill();
      }
      const grd = ctx2.createRadialGradient(s.x, s.y, 0, s.x, s.y, 6);
      grd.addColorStop(0, s.col + "1)");
      grd.addColorStop(1, s.col + "0)");
      ctx2.beginPath();
      ctx2.arc(s.x, s.y, 6, 0, Math.PI * 2);
      ctx2.fillStyle = grd;
      ctx2.fill();

      if (s.alpha <= 0 || s.x > W2 + 50 || s.y > H2 + 50) trails.splice(i, 1);
    }
    requestAnimationFrame(drawStars);
  })();
})();
