// ═══════════════════════════════════════════════════════════════════════════
// ULTRA-PREMIUM 3D PORTFOLIO - MAIN JAVASCRIPT
// Advanced animations, WebGL effects, and interactive features
// ═══════════════════════════════════════════════════════════════════════════

// ── CUSTOM CURSOR ──
class CustomCursor {
  constructor() {
    this.cursor = document.getElementById("cursor");
    this.ring = document.getElementById("cursor-ring");
    this.cursorPos = { x: 0, y: 0 };
    this.ringPos = { x: 0, y: 0 };
    this.isHovering = false;

    this.init();
  }

  init() {
    document.addEventListener("mousemove", (e) => {
      this.cursorPos.x = e.clientX;
      this.cursorPos.y = e.clientY;

      this.cursor.style.left = `${e.clientX}px`;
      this.cursor.style.top = `${e.clientY}px`;
    });

    // Interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, .skill-pill, .stat-item, .magnetic, [data-cursor]",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        this.ring.classList.add("hover");
        this.cursor.classList.add("active");
      });

      el.addEventListener("mouseleave", () => {
        this.ring.classList.remove("hover");
        this.cursor.classList.remove("active");
      });
    });

    // Click effect
    document.addEventListener("mousedown", () => {
      this.ring.classList.add("click");
    });

    document.addEventListener("mouseup", () => {
      this.ring.classList.remove("click");
    });

    this.animate();
  }

  animate() {
    // Smooth ring following
    this.ringPos.x += (this.cursorPos.x - this.ringPos.x) * 0.12;
    this.ringPos.y += (this.cursorPos.y - this.ringPos.y) * 0.12;

    this.ring.style.left = `${this.ringPos.x}px`;
    this.ring.style.top = `${this.ringPos.y}px`;

    requestAnimationFrame(() => this.animate());
  }
}

// ── MAGNETIC EFFECT ──
class MagneticEffect {
  constructor() {
    this.elements = document.querySelectorAll(".magnetic");
    this.init();
  }

  init() {
    this.elements.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });

      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0, 0)";
      });
    });
  }
}

// ── SCROLL PROGRESS ──
class ScrollProgress {
  constructor() {
    this.progressBar = document.querySelector(".progress-bar");
    this.init();
  }

  init() {
    window.addEventListener("scroll", () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      this.progressBar.style.width = `${scrolled}%`;
    });
  }
}

// ── NAVIGATION ──
class Navigation {
  constructor() {
    this.nav = document.getElementById("main-nav");
    this.lastScroll = 0;
    this.init();
  }

  init() {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        this.nav.classList.add("scrolled");
      } else {
        this.nav.classList.remove("scrolled");
      }

      this.lastScroll = currentScroll;
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }
}

// ── TYPEWRITER EFFECT ──
class Typewriter {
  constructor() {
    this.element = document.getElementById("typed");
    this.words = [
      "data pipelines.",
      "ML models.",
      "BI dashboards.",
      "SQL queries.",
      "web apps.",
      "visual stories.",
      "clean code.",
      "insights.",
    ];
    this.wordIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.typeSpeed = 80;
    this.deleteSpeed = 40;
    this.pauseTime = 2000;

    this.init();
  }

  init() {
    this.type();
  }

  type() {
    const currentWord = this.words[this.wordIndex];

    if (!this.isDeleting) {
      this.element.textContent = currentWord.slice(0, ++this.charIndex);

      if (this.charIndex === currentWord.length) {
        this.isDeleting = true;
        setTimeout(() => this.type(), this.pauseTime);
        return;
      }
    } else {
      this.element.textContent = currentWord.slice(0, --this.charIndex);

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
      }
    }

    const speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
    setTimeout(() => this.type(), speed);
  }
}

// ── HERO NAME 3D EFFECT ──
class HeroName3D {
  constructor() {
    this.letters = document.querySelectorAll(".name-letter");
    this.init();
  }

  init() {
    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      this.letters.forEach((letter, index) => {
        const delay = index * 0.02;
        const rotateX = y * -8;
        const rotateY = x * 8;
        const translateZ = Math.abs(x * y) * 20;

        letter.style.transform = `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateZ(${translateZ}px)
                `;
        letter.style.transitionDelay = `${delay}s`;
      });
    });
  }
}

// ── SCROLL REVEAL ──
class ScrollReveal {
  constructor() {
    this.elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );
    this.init();
  }

  init() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Animate skill bars
            entry.target.querySelectorAll(".sb-fill").forEach((bar) => {
              bar.style.transform = `scaleX(${bar.dataset.w})`;
            });

            // Animate stat rings
            entry.target.querySelectorAll(".stat-ring-fill").forEach((ring) => {
              const percent = ring.dataset.percent;
              ring.style.strokeDashoffset = 283 - (283 * percent) / 100;
            });
          }
        });
      },
      { threshold: 0.15 },
    );

    this.elements.forEach((el) => observer.observe(el));

    // Also observe key-skills section for skill bars
    const keySkills = document.querySelector(".key-skills");
    if (keySkills) {
      observer.observe(keySkills);
    }
  }
}

// ── PROJECT CARD TILT ──
class ProjectCardTilt {
  constructor() {
    this.cards = document.querySelectorAll(".project-card");
    this.init();
  }

  init() {
    this.cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-10px)
                `;

        // Update glow position
        const glow = card.querySelector(".card-glow");
        if (glow) {
          glow.style.setProperty("--x", `${(x / rect.width) * 100}%`);
          glow.style.setProperty("--y", `${(y / rect.height) * 100}%`);
        }
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }
}

// ── SKILL PILL GLOW ──
class SkillPillGlow {
  constructor() {
    this.pills = document.querySelectorAll(".skill-pill");
    this.init();
  }

  init() {
    this.pills.forEach((pill) => {
      pill.addEventListener("mousemove", (e) => {
        const rect = pill.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        pill.style.setProperty("--x", `${x}%`);
        pill.style.setProperty("--y", `${y}%`);
      });
    });
  }
}

// ── VIDEO BACKGROUND ──
class VideoBackground {
  constructor() {
    this.videos = [
      document.getElementById("vid0"),
      document.getElementById("vid2"),
    ];
    this.dots = document.querySelectorAll(".vid-dot");
    this.currentIndex = 0;
    this.interval = 15000;

    this.init();
  }

  init() {
    // Load and play all videos
    this.videos.forEach((video) => {
      if (video) {
        video.load();
        video.play().catch(() => {});
      }
    });

    // Start cycling
    setInterval(() => this.next(), this.interval);

    // Parallax effect
    const vbg = document.getElementById("video-bg");
    if (vbg) {
      document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        vbg.style.transform = `scale(1.05) translate(${-x}px, ${-y}px)`;
      });
    }
  }

  next() {
    if (!this.videos[this.currentIndex]) return;

    this.videos[this.currentIndex].classList.remove("active");
    if (this.dots[this.currentIndex]) {
      this.dots[this.currentIndex].classList.remove("active");
    }

    this.currentIndex = (this.currentIndex + 1) % this.videos.length;

    if (this.videos[this.currentIndex]) {
      this.videos[this.currentIndex].classList.add("active");
      this.videos[this.currentIndex].currentTime = 0;
      this.videos[this.currentIndex].play().catch(() => {});
    }

    if (this.dots[this.currentIndex]) {
      this.dots[this.currentIndex].classList.add("active");
    }
  }
}

// ── WEBGL GALAXY ──
class WebGLGalaxy {
  constructor() {
    this.canvas = document.getElementById("bg-canvas");
    if (!this.canvas) return;

    this.gl =
      this.canvas.getContext("webgl") ||
      this.canvas.getContext("experimental-webgl");

    if (this.gl) {
      this.init();
    } else {
      this.fallback();
    }
  }

  init() {
    const gl = this.gl;
    let W = (this.canvas.width = window.innerWidth);
    let H = (this.canvas.height = window.innerHeight);
    gl.viewport(0, 0, W, H);

    window.addEventListener("resize", () => {
      W = this.canvas.width = window.innerWidth;
      H = this.canvas.height = window.innerHeight;
      gl.viewport(0, 0, W, H);
    });

    const N = 1200;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 4);

    // Rose gold color palette
    const palette = [
      [0.91, 0.71, 0.72, 0.5], // Rose gold
      [0.66, 0.33, 0.97, 0.4], // Purple
      [0.02, 0.71, 0.83, 0.4], // Cyan
      [0.98, 0.44, 0.52, 0.35], // Coral
      [1, 0.98, 0.95, 0.3], // Cream
    ];

    for (let i = 0; i < N; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 0.25 + Math.random() * 0.75;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 4] = c[0];
      col[i * 4 + 1] = c[1];
      col[i * 4 + 2] = c[2];
      col[i * 4 + 3] = c[3] * (0.3 + Math.random() * 0.5);
    }

    const vertexShader = `
            attribute vec3 a_position;
            attribute vec4 a_color;
            uniform float u_time;
            uniform vec2 u_mouse;
            uniform vec2 u_resolution;
            varying vec4 v_color;
            
            void main() {
                vec3 pos = a_position;
                
                // Rotation
                float ct = cos(u_time * 0.05);
                float st = sin(u_time * 0.05);
                float x2 = pos.x * ct - pos.z * st;
                float z2 = pos.x * st + pos.z * ct;
                pos = vec3(x2, pos.y, z2);
                
                // Mouse interaction
                vec2 nd = vec2(u_mouse.x / u_resolution.x * 2.0 - 1.0, -(u_mouse.y / u_resolution.y * 2.0 - 1.0));
                pos.xy += nd * 0.04;
                
                gl_Position = vec4(pos.xy, pos.z * 0.4 + 0.4, 1.0);
                gl_PointSize = clamp(2.5 * (1.1 - pos.z), 1.0, 4.5);
                v_color = a_color;
            }
        `;

    const fragmentShader = `
            precision mediump float;
            varying vec4 v_color;
            
            void main() {
                float dist = length(gl_PointCoord - 0.5) * 2.0;
                float alpha = 1.0 - smoothstep(0.3, 1.0, dist);
                gl_FragColor = vec4(v_color.rgb, v_color.a * alpha);
            }
        `;

    const createShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram();
    gl.attachShader(program, createShader(gl.VERTEX_SHADER, vertexShader));
    gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, fragmentShader));
    gl.linkProgram(program);
    gl.useProgram(program);

    // Position buffer
    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, pos, gl.STATIC_DRAW);
    const aPosition = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);

    // Color buffer
    const colBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, col, gl.STATIC_DRAW);
    const aColor = gl.getAttribLocation(program, "a_color");
    gl.enableVertexAttribArray(aColor);
    gl.vertexAttribPointer(aColor, 4, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uResolution = gl.getUniformLocation(program, "u_resolution");

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    let mouseX = W / 2;
    let mouseY = H / 2;
    let time = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const render = () => {
      time += 1;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(uTime, time);
      gl.uniform2f(uMouse, mouseX, mouseY);
      gl.uniform2f(uResolution, W, H);

      gl.drawArrays(gl.POINTS, 0, N);
      requestAnimationFrame(render);
    };

    render();
  }

  fallback() {
    const ctx = this.canvas.getContext("2d");
    let W, H;
    const stars = [];

    const resize = () => {
      W = this.canvas.width = window.innerWidth;
      H = this.canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.05 + 0.02,
        twinkleDir: 1,
        twinkleSpeed: Math.random() * 0.005 + 0.002,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, W, H);

      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed * star.twinkleDir;
        if (star.alpha > 0.8 || star.alpha < 0.1) star.twinkleDir *= -1;

        star.y += star.speed;
        if (star.y > H) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 180, 184, ${star.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(render);
    };

    render();
  }
}

// ── SHOOTING STARS ──
class ShootingStars {
  constructor() {
    this.canvas = document.getElementById("shoot-canvas");
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    this.trails = [];
    this.colors = [
      "rgba(232, 180, 184,",
      "rgba(168, 85, 247,",
      "rgba(6, 182, 212,",
      "rgba(255, 255, 255,",
      "rgba(251, 113, 133,",
    ];

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());

    setInterval(() => this.spawn(), 2500);
    this.spawn();
    this.render();
  }

  resize() {
    this.W = this.canvas.width = this.canvas.offsetWidth;
    this.H = this.canvas.height = this.canvas.offsetHeight;
  }

  spawn() {
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.trails.push({
      x: Math.random() * this.W * 0.7 + this.W * 0.1,
      y: Math.random() * this.H * 0.3,
      length: Math.random() * 100 + 50,
      speed: Math.random() * 6 + 5,
      angle: Math.PI / 4 + Math.random() * 0.4 - 0.2,
      alpha: 1,
      color,
      tail: [],
    });
  }

  render() {
    this.ctx.clearRect(0, 0, this.W, this.H);

    for (let i = this.trails.length - 1; i >= 0; i--) {
      const star = this.trails[i];

      star.x += Math.cos(star.angle) * star.speed;
      star.y += Math.sin(star.angle) * star.speed;
      star.alpha -= 0.015;

      star.tail.push({ x: star.x, y: star.y, a: star.alpha });
      if (star.tail.length > 30) star.tail.shift();

      // Draw tail
      for (let j = 0; j < star.tail.length; j++) {
        const t = star.tail[j];
        const fade = t.a * (j / star.tail.length);
        this.ctx.beginPath();
        this.ctx.arc(t.x, t.y, (j / star.tail.length) * 2, 0, Math.PI * 2);
        this.ctx.fillStyle = star.color + Math.max(0, fade) + ")";
        this.ctx.fill();
      }

      // Draw head glow
      const gradient = this.ctx.createRadialGradient(
        star.x,
        star.y,
        0,
        star.x,
        star.y,
        8,
      );
      gradient.addColorStop(0, star.color + "1)");
      gradient.addColorStop(1, star.color + "0)");
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, 8, 0, Math.PI * 2);
      this.ctx.fillStyle = gradient;
      this.ctx.fill();

      if (star.alpha <= 0 || star.x > this.W + 50 || star.y > this.H + 50) {
        this.trails.splice(i, 1);
      }
    }

    requestAnimationFrame(() => this.render());
  }
}

// ── AURORA EFFECT ──
class AuroraEffect {
  constructor() {
    this.canvas = document.getElementById("aurora-canvas");
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    this.time = 0;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.render();
  }

  resize() {
    this.W = this.canvas.width = window.innerWidth;
    this.H = this.canvas.height = window.innerHeight;
  }

  render() {
    this.time += 0.005;
    this.ctx.clearRect(0, 0, this.W, this.H);

    // Create aurora waves
    for (let i = 0; i < 3; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, this.H);

      for (let x = 0; x <= this.W; x += 5) {
        const y =
          this.H * 0.3 +
          Math.sin(x * 0.003 + this.time + i) * 50 +
          Math.sin(x * 0.007 + this.time * 1.5 + i) * 30 +
          Math.sin(x * 0.001 + this.time * 0.5 + i) * 80;
        this.ctx.lineTo(x, y);
      }

      this.ctx.lineTo(this.W, this.H);
      this.ctx.closePath();

      const gradient = this.ctx.createLinearGradient(0, 0, this.W, 0);
      const alpha = 0.03 - i * 0.008;
      gradient.addColorStop(0, `rgba(232, 180, 184, ${alpha})`);
      gradient.addColorStop(0.5, `rgba(168, 85, 247, ${alpha})`);
      gradient.addColorStop(1, `rgba(6, 182, 212, ${alpha})`);

      this.ctx.fillStyle = gradient;
      this.ctx.fill();
    }

    requestAnimationFrame(() => this.render());
  }
}

// ── STAT COUNTER ANIMATION ──
class StatCounter {
  constructor() {
    this.counters = document.querySelectorAll(".counter");
    this.init();
  }

  init() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCounter(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    this.counters.forEach((counter) => observer.observe(counter));
  }

  animateCounter(el) {
    const target = parseInt(el.textContent);
    if (isNaN(target)) return;

    let current = 0;
    const duration = 2000;
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.floor(eased * target);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(update);
  }
}

// ── INITIALIZE EVERYTHING ──
document.addEventListener("DOMContentLoaded", () => {
  // Core features
  new CustomCursor();
  new MagneticEffect();
  new ScrollProgress();
  new Navigation();
  new Typewriter();
  new HeroName3D();
  new ScrollReveal();

  // Interactive features
  new ProjectCardTilt();
  new SkillPillGlow();
  new StatCounter();

  // Background effects
  new VideoBackground();
  new WebGLGalaxy();
  new ShootingStars();
  new AuroraEffect();

  // Add SVG gradients for stat rings
  const svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgDefs.innerHTML = `
        <defs>
            <linearGradient id="statGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#e8b4b8"/>
                <stop offset="50%" style="stop-color:#a855f7"/>
                <stop offset="100%" style="stop-color:#06b6d4"/>
            </linearGradient>
        </defs>
    `;
  svgDefs.style.position = "absolute";
  svgDefs.style.width = "0";
  svgDefs.style.height = "0";
  document.body.appendChild(svgDefs);

  // Update stat ring strokes to use gradient
  document.querySelectorAll(".stat-ring-fill").forEach((ring) => {
    ring.style.stroke = "url(#statGradient)";
  });

  console.log("🚀 Portfolio initialized successfully!");
});

// ── SMOOTH SCROLL POLYFILL FOR SAFARI ──
if (!("scrollBehavior" in document.documentElement.style)) {
  import("https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js").then(
    () => (window.__forceSmoothScrollPolyfill__ = true),
  );
}
