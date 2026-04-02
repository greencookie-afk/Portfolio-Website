import './style.css';

// ═══════════════════════════════════════════════════════════════
// MITHUN CHAKLADAR — PORTFOLIO
// Vanilla TS · No framework · Raw performance
// ═══════════════════════════════════════════════════════════════

const app = document.querySelector<HTMLDivElement>('#app')!;

// ── DATA ──────────────────────────────────────────────────────

const PROJECTS = [
  {
    name: 'Konfide',
    desc: 'Peer-to-peer mental health support platform connecting listeners with users through real-time video calls and escrow payments.',
    tech: ['Next.js', 'TypeScript', 'PeerJS', 'Stripe', 'Prisma'],
    github: 'https://github.com/greencookie-afk/konfide',
    live: 'https://konfide-web.vercel.app', 
  },
  {
    name: 'CareLine',
    desc: 'Patient & caretaker medication management system with OCR prescription scanning and automated reminders.',
    tech: ['Python', 'OCR', 'Flask', 'MongoDB'],
    github: 'https://github.com/greencookie-afk/CareLine',
    live: '',
  },
  {
    name: 'Versatile',
    desc: 'Gig-based esports platform for gamers — built at Ignite Arena IIIT, a 36-hour offline hackathon.',
    tech: ['JavaScript', 'React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/greencookie-afk/versatile-frontend',
    live: 'https://versatile-esports.vercel.app',
  },
  {
    name: 'SkillLink',
    desc: 'Blockchain-powered decentralized learning platform built at GITM 24hr hackathon.',
    tech: ['Solidity', 'React', 'Web3.js', 'IPFS'],
    github: 'https://github.com/greencookie-afk/learnChain-dapp',
    live: '',
  },
];



const OPENSOURCE = [
  { repo: 'AhoyISki/duat', desc: 'Added Night Owl colorscheme mapping UI and syntax forms to official palette.', type: 'FEATURE', prLink: 'https://github.com/AhoyISki/duat/pull/51', prNumber: '#51' },
  { repo: 'shadcn-ui/ui', desc: 'Added thumbLabels prop to Slider component for multi-thumb accessibility complying with WAI-ARIA.', type: 'FIX', prLink: 'https://github.com/shadcn-ui/ui/pull/10249', prNumber: '#10248' },
  { repo: 'niklasmarderx/Ember', desc: 'Implemented --format flag for structured outputs (JSON, Markdown) in ember chat.', type: 'FEATURE', prLink: 'https://github.com/niklasmarderx/Ember/pull/42', prNumber: '#42' },
  { repo: 'tree-sitter/tree-sitter', desc: 'Updated GrammarSchema TypeScript type to match actual grammar() DSL return value.', type: 'FIX', prLink: 'https://github.com/tree-sitter/tree-sitter/pull/5481', prNumber: '#5481' },
];

const SKILLS = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
  'Rust', 'Solidity', 'Linux', 'Docker', 'Git',
  'PostgreSQL', 'MongoDB', 'Prisma', 'Redis', 'WebRTC',
  'Figma', 'Photoshop', 'After Effects',
];

const CONTACTS = [
  { label: 'Email', value: 'mithunchakladar123@gmail.com', link: 'mailto:mithunchakladar123@gmail.com' },
  { label: 'GitHub', value: 'greencookie-afk', link: 'https://github.com/greencookie-afk' },
  { label: 'Twitter / X', value: '@MithStruct', link: 'https://x.com/MithStruct' },
  { label: 'LinkedIn', value: 'mithun-chakladar', link: 'https://linkedin.com/in/mithun-chakladar' },
  { label: 'Instagram', value: '@midtwt', link: 'https://instagram.com/midtwt' },
  { label: 'Phone', value: '+91 8178958838', link: 'tel:+918178958838' },
  { label: 'Location', value: 'Shyam Vihar, New Delhi 110043', link: '' },
  { label: 'University', value: 'MDU — SAITM (2023–2027)', link: '' },
];

const IG_POSTS = [
  { url: 'https://instagram.com/lichiofheaven', img: '/assets/media__1775142809870.jpg' },
  { url: 'https://instagram.com/lichiofheaven', img: '/assets/media__1775142828090.jpg' },
  { url: 'https://instagram.com/lichiofheaven', img: '/assets/media__1775142853292.jpg' },
  { url: 'https://instagram.com/lichiofheaven', img: '/assets/media__1775142859539.jpg' },
];

// Prevents scroll jump on reload
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

// ── RENDER ────────────────────────────────────────────────────

function render() {
  app.innerHTML = `
    <!-- Scroll Progress -->
    <div id="scroll-progress"></div>

    <!-- Custom Cursor -->
    <div id="cursor-dot"></div>

    <!-- Navigation -->
    <nav class="nav" id="nav">
      <div class="nav__logo">
        <span class="dot"></span>
      </div>
      <ul class="nav__links">
        <li><a href="#about">About</a></li>
        <li><a href="#opensource">OSS</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#creative">Creative</a></li>
        <li><a href="#skills">Tech Stack</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="nav__time" id="nav-time"></div>
    </nav>

    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="hero__inner">
        <div class="hero__layout">
          <!-- Main Content -->
          <div class="hero__main">
            <h1 class="hero__name reveal">
              Mithun<br/>
              Chakladar
            </h1>
            
            <p class="hero__subtitle reveal reveal-delay-1">
              Web developer, <span class="text-red">open source contributor</span>, and former graphic designer. 
              Building systems that are engineered to last — not just to ship.
            </p>

            <div class="hero__meta reveal reveal-delay-2">
              <div class="hero__meta-item">
                <span class="label">Status</span>
                <span class="value">Open to Opportunities</span>
              </div>
              <div class="hero__meta-item">
                <span class="label">Location</span>
                <span class="value">New Delhi, India</span>
              </div>
              <div class="hero__meta-item">
                <span class="label">Stack</span>
                <span class="value">React · Node · Python · Rust</span>
              </div>
              <div class="hero__meta-item">
                <span class="label">OS</span>
                <span class="value">arch user btw</span>
              </div>
            </div>
          </div>
          
          <!-- Side Content (GitHub Graph) -->
          <div class="hero__side reveal reveal-delay-3">
            <div class="hero__github-header">
              <span class="label">Live GitHub Activity</span>
              <span class="value text-red" id="github-contrib-count">Fetching...</span>
            </div>
            <div class="hero__github-chart">
              <a href="https://github.com/greencookie-afk" target="_blank" rel="noopener">
                <!-- Uses 1A1A1A for the dark green blocks to match theme -->
                <img src="https://ghchart.rshah.org/1A1A1A/greencookie-afk" alt="Mithun's GitHub Contributions" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="section" id="about">
      <div class="section__inner">
        <div class="section__label reveal">
          <span>About</span>
          <span>01</span>
        </div>
        <div class="about__grid">
          <div class="about__text reveal">
            <h2>I build things<br/>that solve problems.</h2>
            <p>
              I'm a B.Tech Computer Science student at MDU with a deep interest in 
              <span class="text-red">distributed systems</span>, system design, and the open-source ecosystem. I don't 
              just write code — I architect solutions with intention.
            </p>
            <p>
              Before diving into development, I spent a year as a freelance graphic designer 
              for Extraction Esports under the alias @lichiofheaven — designing logos, posters, 
              and thumbnails. That creative eye now shapes everything I build.
            </p>
            <p>
              When I'm not coding, I'm tweaking my Arch Linux setup, exploring Rust, 
              or hunting for the perfect Spotify playlist.
            </p>
          </div>
          <div class="about__stats reveal reveal-delay-2">
            <div class="stat-card">
              <span class="stat-card__number" data-count="5">0</span>
              <span class="stat-card__label">Hackathons</span>
            </div>
            <div class="stat-card">
              <span class="stat-card__number" data-count="4">0</span>
              <span class="stat-card__label">Major Projects</span>
            </div>
            <div class="stat-card">
              <span class="stat-card__number" data-count="6">0</span>
              <span class="stat-card__label">OSS Contributions</span>
            </div>
            <div class="stat-card">
              <span class="stat-card__number" data-count="1">0</span>
              <span class="stat-card__label">Year as Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OPEN SOURCE -->
    <section class="section section--light" id="opensource">
      <div class="section__inner">
        <div class="section__label reveal">
          <span class="text-red">Open Source Contributions</span>
          <span>02</span>
        </div>
        <div class="opensource__list stagger-children">
          ${OPENSOURCE.map((item, i) => `
            <a href="${item.prLink}" target="_blank" rel="noopener" class="opensource-item reveal" style="--i:${i}; text-decoration: none; color: inherit;">
              <div class="opensource-item__repo">${item.repo}</div>
              <div class="opensource-item__desc">${item.desc}</div>
              <div style="display: flex; gap: var(--space-sm); align-items: center;">
                <div class="opensource-item__type">${item.type}</div>
                <div class="opensource-item__type" style="background: var(--black); color: var(--white);">${item.prNumber}</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- PROJECT DETAIL CARDS -->
    <section class="section section--dark" id="projects">
      <div class="section__inner">
        <div class="section__label reveal">
          <span>Selected Projects</span>
          <span>03</span>
        </div>
        <div class="project-cards stagger-children">
          ${PROJECTS.map((proj, i) => `
            <div class="project-card reveal" style="--i:${i}">
              <div class="project-card__header">
                <span class="project-card__number">0${i + 1}</span>
                <div class="project-card__links">
                  ${proj.github ? `<a href="${proj.github}" target="_blank" rel="noopener">GitHub</a>` : ''}
                  ${proj.live ? `<a href="${proj.live}" target="_blank" rel="noopener" style="background: var(--white); color: var(--black);">Live Preview</a>` : ''}
                </div>
              </div>
              <h3 class="project-card__name">${proj.name}</h3>
              <p class="project-card__desc">${proj.desc}</p>
              <div class="project-card__tech">
                ${proj.tech.map(t => `<span>${t}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CREATIVE -->
    <section class="section section--light" id="creative">
      <div class="section__inner">
        <div class="section__label reveal">
          <span>Creative Work</span>
          <span>04</span>
        </div>
        <div class="creative__intro reveal">
          <h2>1 year as a<br/>freelance designer.</h2>
          <p>
            Before code, there was design. I worked with Extraction Esports as a freelance 
            graphic designer under @lichiofheaven — creating visual identities, tournament 
            branding, posters, logos, and YouTube thumbnails that reached thousands.
          </p>
        </div>
        <div class="creative__gallery stagger-children">
          <div class="creative__card reveal" style="--i:0">
            <div class="creative__card-icon">◎</div>
            <h3>Logo Design</h3>
            <p>Brand identities for esports teams and content creators. Sharp, bold, memorable.</p>
          </div>
          <div class="creative__card reveal" style="--i:1">
            <div class="creative__card-icon">▣</div>
            <h3>Poster & Banner</h3>
            <p>Tournament announcements, event graphics, and social media visuals with high engagement.</p>
          </div>
          <div class="creative__card reveal" style="--i:2">
            <div class="creative__card-icon">▶</div>
            <h3>Thumbnails</h3>
            <p>YouTube thumbnail design optimized for click-through — dynamic compositions and bold typography.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- INSTAGRAM SHOWCASE -->
    <section class="section section--light" id="instagram-showcase" style="padding-top: 0;">
      <div class="section__inner">
        <div class="section__label reveal">
          <span>Instagram @lichiofheaven</span>
          <span>04.1</span>
        </div>
        <div class="ig__intro reveal">
          <p style="margin-bottom: 2rem; font-size: 13px; color: var(--dark-gray);">
            A glimpse into my creative canvas. Here are some featured posts from my designer journey as @lichiofheaven.
          </p>
        </div>
        <div class="ig__grid grid-2x2 stagger-children">
          ${IG_POSTS.map((post, i) => `
            <a href="${post.url}" class="ig-card reveal" style="--i:${i}" target="_blank" rel="noopener">
              <div class="ig-card__inner">
                <img src="${post.img}" alt="Instagram post placeholder ${i+1}" />
                <div class="ig-card__overlay">
                  <span>View Post</span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="section section--dark" id="skills">
      <div class="section__inner">
        <div class="section__label reveal">
          <span>Tech Stack</span>
          <span>05</span>
        </div>
        <div class="skills__grid stagger-children">
          ${SKILLS.map((skill, i) => `
            <div class="skill-tag reveal" style="--i:${i}">
              ${skill}
            </div>
          `).join('')}
        </div>
      </div>
    </section>



    <!-- ACHIEVEMENTS (Dark) -->
    <section class="section section--dark" id="achievements">
      <div class="section__inner">
        <div class="section__label reveal">
          <span>Achievements</span>
          <span>06</span>
        </div>
        <div class="about__grid">
          <div class="about__text reveal">
            <h2 style="color: var(--white);">1st Place<br/>SAITM Ideathon</h2>
            <p style="color: rgba(255,255,255,0.6);">
              Built an AI Bias Analyzer — a tool that detects and measures bias in 
              machine learning models. Fine-tuned a model on HuggingFace to identify 
              subtle patterns of discrimination in training data and model outputs.
            </p>
            <p style="color: rgba(255,255,255,0.6);">
              The project earned first position at the college-level ideathon, 
              recognized for its technical depth and real-world applicability in 
              responsible AI development.
            </p>
          </div>
          <div class="about__stats reveal reveal-delay-2" style="background: rgba(255,255,255,0.06);">
            <div class="stat-card" style="background: rgba(255,255,255,0.03); color: var(--white);">
              <span class="stat-card__number" style="color: var(--white);">1st</span>
              <span class="stat-card__label">Position</span>
            </div>
            <div class="stat-card" style="background: rgba(255,255,255,0.03); color: var(--white);">
              <span class="stat-card__number" style="color: var(--white);">AI</span>
              <span class="stat-card__label">Domain</span>
            </div>
            <div class="stat-card" style="background: rgba(255,255,255,0.03); color: var(--white);">
              <span class="stat-card__number" style="color: var(--white);">HF</span>
              <span class="stat-card__label">HuggingFace Model</span>
            </div>
            <div class="stat-card" style="background: rgba(255,255,255,0.03); color: var(--white);">
              <span class="stat-card__number" style="color: var(--white);">ML</span>
              <span class="stat-card__label">Bias Detection</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="contact" id="contact">
      <div class="contact__inner">
        <div class="section__label reveal" style="color: rgba(255,255,255,0.35); border-color: rgba(255,255,255,0.08);">
          <span class="text-red">Get in Touch</span>
          <span>07</span>
        </div>
        <div class="contact__header reveal">
          <h2>Let's build<br/>something real.</h2>
          <p>Open for freelance, collaborations, open source, and full-time opportunities. Drop a message.</p>
        </div>
        <div class="contact__grid stagger-children">
          ${CONTACTS.map((c, i) => `
            <div class="contact__item reveal" style="--i:${i}">
              <div class="contact__item-label">${c.label}</div>
              <div class="contact__item-value">
                ${c.link ? `<a href="${c.link}" target="_blank" rel="noopener">${c.value}</a>` : c.value}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__copy">© ${new Date().getFullYear()} Mithun Chakladar. Crafted with intention.</div>
        <div class="footer__links">
          <a href="https://github.com/greencookie-afk" target="_blank" rel="noopener">GitHub</a>
          <a href="https://x.com/MithStruct" target="_blank" rel="noopener">Twitter</a>
          <a href="https://linkedin.com/in/mithun-chakladar" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </footer>
  `;

  initInteractions();
  fetchGitHubContributions();
  window.scrollTo(0, 0); // Fix scroll preservation on reload
}

// ── INTERACTIONS ──────────────────────────────────────────────

// Fetch GitHub contributions count via a public API proxy
async function fetchGitHubContributions() {
  try {
    const ts = new Date().getTime();
    // Cache bust using timestamp attached to github URL
    const res = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://github.com/greencookie-afk?t=' + ts));
    if (!res.ok) throw new Error('API down');
    const data = await res.json();
    const html = data.contents;
    // Use regex to find text like "164 contributions in the last year"
    const match = html.match(/class="f4[^>]*>\s*([0-9,]+)\s*contributions/i);
    const countEl = document.getElementById('github-contrib-count');
    if (match && match[1] && countEl) {
      countEl.textContent = match[1] + ' contributions done this year';
    } else if (countEl) {
      countEl.textContent = '';
    }
  } catch (err) {
    const countEl = document.getElementById('github-contrib-count');
    if (countEl) countEl.textContent = '';
  }
}

function initInteractions() {
  initScrollProgress();
  initNavHide();
  initRevealObserver();
  initCursorDot();
  initNavTime();
  initCountUp();
  initSmoothScroll();
}

// Scroll progress bar
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress')!;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = `${progress}%`;
  }, { passive: true });
}

// Hide nav on scroll down, show on scroll up
function initNavHide() {
  const nav = document.getElementById('nav')!;
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 100) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
    lastScroll = currentScroll;
  }, { passive: true });
}

// Intersection observer for reveal animations
function initRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// Custom cursor dot
function initCursorDot() {
  const dot = document.getElementById('cursor-dot')!;

  // Only on non-touch devices
  if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      dot.style.left = `${e.clientX - 4}px`;
      dot.style.top = `${e.clientY - 4}px`;
    });

    // Expand on interactive elements
    document.querySelectorAll('a, button, .project-card, .skill-tag, .contact__item, .ig-card, .opensource-item').forEach((el) => {
      el.addEventListener('mouseenter', () => dot.classList.add('expanded'));
      el.addEventListener('mouseleave', () => dot.classList.remove('expanded'));
    });
  }
}

// Live clock in nav
function initNavTime() {
  const el = document.getElementById('nav-time')!;

  function update() {
    const now = new Date();
    el.textContent = now.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata',
    }) + ' IST';
  }

  update();
  setInterval(update, 1000);
}

// Count-up animation for stat numbers
function initCountUp() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.count || '0', 10);
          animateCount(el, 0, target, 800);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-count]').forEach((el) => observer.observe(el));
}

function animateCount(el: HTMLElement, start: number, end: number, duration: number) {
  const startTime = performance.now();

  function tick(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
    const current = Math.round(start + (end - start) * eased);
    el.textContent = current.toString();

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

// Smooth scroll for nav links
function initSmoothScroll() {
  document.querySelectorAll('.nav__links a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = (link as HTMLAnchorElement).getAttribute('href');
      if (href) {
        let target = document.querySelector(href);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── INIT ──────────────────────────────────────────────────────
render();
