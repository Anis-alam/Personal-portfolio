// ===== CASE STUDY DATA =====
        const caseStudies = {
            project1: {
                title: 'Healthcare <span class="gradient-text">Power BI Dashboard</span>',
                techTags: ['Power BI', 'DAX', 'SQL', 'Data Modeling', 'Excel', 'CSV'],
                sections: [{
                    icon: 'fas fa-exclamation-triangle',
                    iconClass: 'red',
                    title: 'The Problem',
                    content: `<p>Hospitals generate massive volumes of data — patient admissions, treatment records, resource allocation logs — but this data often sits in disconnected spreadsheets and databases.</p><div class="cs-highlight">Critical healthcare metrics are buried in raw data files, making it impossible to monitor hospital performance in real-time.</div>`
                }, {
                    icon: 'fas fa-rocket',
                    iconClass: 'green',
                    title: 'The Solution',
                    content: `<p>I built a <strong>comprehensive Power BI dashboard</strong> providing a unified view of hospital operations:</p><ul><li><strong>Patient Admissions Tracking:</strong> Real-time monitoring of admission trends</li><li><strong>Treatment Outcomes Analysis:</strong> Visual breakdown of recovery rates by department</li><li><strong>Resource Utilization:</strong> Bed occupancy rates with threshold alerts</li><li><strong>Dynamic KPIs with DAX:</strong> Calculated measures for key metrics</li></ul>`
                }, {
                    icon: 'fas fa-sitemap',
                    iconClass: 'blue',
                    title: 'Data Architecture',
                    type: 'architecture',
                    nodes: ['CSV/Excel/SQL', 'Power Query ETL', 'Star Schema', 'DAX Measures', 'Dashboard', 'Reports']
                }, {
                    icon: 'fas fa-layer-group',
                    iconClass: 'blue',
                    title: 'Tech Stack',
                    type: 'techstack',
                    items: [{
                        icon: 'fas fa-chart-pie',
                        label: 'Power BI'
                    }, {
                        icon: 'fas fa-calculator',
                        label: 'DAX'
                    }, {
                        icon: 'fas fa-database',
                        label: 'SQL'
                    }, {
                        icon: 'fas fa-file-excel',
                        label: 'Excel/CSV'
                    }, {
                        icon: 'fas fa-project-diagram',
                        label: 'Data Modeling'
                    }, {
                        icon: 'fas fa-filter',
                        label: 'Power Query'
                    }]
                }, {
                    icon: 'fas fa-chart-line',
                    iconClass: 'green',
                    title: 'Impact & Results',
                    type: 'impact',
                    metrics: [{
                        number: 'Real-time',
                        label: 'Monitoring'
                    }, {
                        number: '5+',
                        label: 'KPIs Tracked'
                    }, {
                        number: '3',
                        label: 'Data Sources'
                    }, {
                        number: 'Drill-down',
                        label: 'Filtering'
                    }]
                }, {
                    icon: 'fas fa-star',
                    iconClass: 'yellow',
                    title: 'Key Features',
                    type: 'features',
                    features: [{
                        icon: 'fas fa-bed',
                        title: 'Bed Occupancy',
                        desc: 'Real-time monitoring across departments'
                    }, {
                        icon: 'fas fa-heartbeat',
                        title: 'Readmission Analysis',
                        desc: 'Track readmission rates to improve care'
                    }, {
                        icon: 'fas fa-filter',
                        title: 'Cross-Report Filtering',
                        desc: 'Click to filter entire dashboard'
                    }, {
                        icon: 'fas fa-calculator',
                        title: 'DAX KPIs',
                        desc: 'Dynamic measures updating in real-time'
                    }]
                }]
            },
            project2: {
                title: 'Customer Behavior <span class="gradient-text">Analysis</span>',
                techTags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'RFM Analysis', 'Clustering'],
                sections: [{
                    icon: 'fas fa-exclamation-triangle',
                    iconClass: 'red',
                    title: 'The Problem',
                    content: `<p>E-commerce businesses collect thousands of transactions daily, but without analysis, this data remains underutilized.</p><div class="cs-highlight">Without customer segmentation, businesses can't personalize marketing — leading to wasted ad spend and missed retention opportunities.</div>`
                }, {
                    icon: 'fas fa-rocket',
                    iconClass: 'green',
                    title: 'The Solution',
                    content: `<p>I conducted an <strong>end-to-end customer behavior analysis</strong> using Python:</p><ul><li><strong>Data Cleaning:</strong> Handled missing values, duplicates using Pandas</li><li><strong>RFM Analysis:</strong> Scored customers on Recency, Frequency, Monetary value</li><li><strong>Segmentation:</strong> Clustering for targeted marketing segments</li><li><strong>Visualization:</strong> Charts communicating churn risk and patterns</li></ul>`
                }, {
                    icon: 'fas fa-sitemap',
                    iconClass: 'blue',
                    title: 'Analysis Pipeline',
                    type: 'architecture',
                    nodes: ['Raw Data', 'Cleaning', 'EDA', 'RFM Scoring', 'Segmentation', 'Insights']
                }, {
                    icon: 'fas fa-layer-group',
                    iconClass: 'blue',
                    title: 'Tech Stack',
                    type: 'techstack',
                    items: [{
                        icon: 'fab fa-python',
                        label: 'Python'
                    }, {
                        icon: 'fas fa-table',
                        label: 'Pandas'
                    }, {
                        icon: 'fas fa-chart-bar',
                        label: 'Matplotlib'
                    }, {
                        icon: 'fas fa-palette',
                        label: 'Seaborn'
                    }, {
                        icon: 'fas fa-users',
                        label: 'RFM'
                    }, {
                        icon: 'fas fa-project-diagram',
                        label: 'Clustering'
                    }]
                }, {
                    icon: 'fas fa-chart-line',
                    iconClass: 'green',
                    title: 'Impact',
                    type: 'impact',
                    metrics: [{
                        number: '5+',
                        label: 'Segments'
                    }, {
                        number: 'RFM',
                        label: 'Framework'
                    }, {
                        number: 'Churn',
                        label: 'Risk Flagged'
                    }, {
                        number: 'Actionable',
                        label: 'Recommendations'
                    }]
                }, {
                    icon: 'fas fa-star',
                    iconClass: 'yellow',
                    title: 'Key Features',
                    type: 'features',
                    features: [{
                        icon: 'fas fa-users',
                        title: 'Segmentation',
                        desc: 'Grouped customers by purchasing behavior'
                    }, {
                        icon: 'fas fa-exclamation-circle',
                        title: 'Churn Prediction',
                        desc: 'Identified at-risk customers'
                    }, {
                        icon: 'fas fa-crown',
                        title: 'High-Value Profiling',
                        desc: 'Pinpointed top-spending customers'
                    }, {
                        icon: 'fas fa-calendar-alt',
                        title: 'Seasonal Patterns',
                        desc: 'Discovered buying trends for campaign timing'
                    }]
                }]
            },
            project3: {
                title: 'Sales Analysis <span class="gradient-text">Dashboard</span>',
                techTags: ['Power BI', 'DAX', 'Data Modeling', 'Row-Level Security', 'Dynamic Filtering'],
                sections: [{
                    icon: 'fas fa-exclamation-triangle',
                    iconClass: 'red',
                    title: 'The Problem',
                    content: `<p>Sales teams need visibility into performance, but a single static report doesn't work for everyone.</p><div class="cs-highlight">One-size-fits-all reports fail to serve diverse stakeholders — leading to delayed decisions and missed opportunities.</div>`
                }, {
                    icon: 'fas fa-rocket',
                    iconClass: 'green',
                    title: 'The Solution',
                    content: `<p>I built a <strong>fully interactive Power BI sales dashboard</strong> with personalized views:</p><ul><li><strong>Revenue & Profit:</strong> Real-time tracking across products and regions</li><li><strong>Dynamic DAX KPIs:</strong> Auto-updating sales growth % and profit margin</li><li><strong>Row-Level Security:</strong> Role-based data access</li><li><strong>Dynamic Filtering:</strong> Interactive slicers with cross-filtering</li></ul>`
                }, {
                    icon: 'fas fa-sitemap',
                    iconClass: 'blue',
                    title: 'Architecture',
                    type: 'architecture',
                    nodes: ['Data Sources', 'Power Query', 'Star Schema', 'DAX', 'RLS', 'Dashboard']
                }, {
                    icon: 'fas fa-layer-group',
                    iconClass: 'blue',
                    title: 'Tech Stack',
                    type: 'techstack',
                    items: [{
                        icon: 'fas fa-chart-pie',
                        label: 'Power BI'
                    }, {
                        icon: 'fas fa-calculator',
                        label: 'DAX'
                    }, {
                        icon: 'fas fa-lock',
                        label: 'RLS'
                    }, {
                        icon: 'fas fa-project-diagram',
                        label: 'Modeling'
                    }, {
                        icon: 'fas fa-filter',
                        label: 'Filtering'
                    }, {
                        icon: 'fas fa-file-excel',
                        label: 'Multi-Source'
                    }]
                }, {
                    icon: 'fas fa-chart-line',
                    iconClass: 'green',
                    title: 'Impact',
                    type: 'impact',
                    metrics: [{
                        number: 'Real-time',
                        label: 'Monitoring'
                    }, {
                        number: 'RLS',
                        label: 'Role-Based'
                    }, {
                        number: '6+',
                        label: 'KPIs'
                    }, {
                        number: 'Multi',
                        label: 'Regions'
                    }]
                }, {
                    icon: 'fas fa-star',
                    iconClass: 'yellow',
                    title: 'Key Features',
                    type: 'features',
                    features: [{
                        icon: 'fas fa-lock',
                        title: 'Row-Level Security',
                        desc: 'Role-based data access'
                    }, {
                        icon: 'fas fa-chart-line',
                        title: 'Growth Tracking',
                        desc: 'Automated growth calculations via DAX'
                    }, {
                        icon: 'fas fa-trophy',
                        title: 'Top Performers',
                        desc: 'Dynamic ranking by revenue and profit'
                    }, {
                        icon: 'fas fa-sliders-h',
                        title: 'Interactive Filtering',
                        desc: 'Cross-visual filtering with slicers'
                    }]
                }]
            }
        };

        // ===== CASE STUDY MODAL =====
        function openCaseStudy(projectId) {
            const data = caseStudies[projectId];
            if (!data) return;
            document.getElementById('csTitle').innerHTML = data.title;
            document.getElementById('csTechTags').innerHTML = data.techTags.map(t => `<span class="project-tech-tag">${t}</span>`).join('');
            let html = '';
            data.sections.forEach(s => {
                        html += `<div class="cs-section"><div class="cs-section-header"><div class="cs-section-icon ${s.iconClass}"><i class="${s.icon}"></i></div><h3 class="cs-section-title">${s.title}</h3></div>`;
                        if (s.type === 'architecture') {
                            html += `<div class="cs-architecture-flow">`;
                            s.nodes.forEach((n, i) => {
                                html += `<span class="cs-arch-node">${n}</span>`;
                                if (i < s.nodes.length - 1) html += `<span class="cs-arch-arrow"><i class="fas fa-arrow-right"></i></span>`;
                            });
                            html += `</div>`;
                        } else if (s.type === 'techstack') {
                            html += `<div class="cs-tech-grid">${s.items.map(i => `<div class="cs-tech-item"><i class="${i.icon}"></i> ${i.label}</div>`).join('')}</div>`;
                } else if (s.type === 'impact') {
                    html += `<div class="cs-impact-grid">${s.metrics.map(m => `<div class="cs-impact-card"><div class="cs-impact-number">${m.number}</div><div class="cs-impact-label">${m.label}</div></div>`).join('')}</div>`;
                } else if (s.type === 'features') {
                    html += `<div class="cs-features-grid">${s.features.map(f => `<div class="cs-feature-card"><i class="${f.icon}"></i><h4>${f.title}</h4><p>${f.desc}</p></div>`).join('')}</div>`;
                } else {
                    html += `<div class="cs-section-content">${s.content}</div>`;
                }
                html += `</div>`;
            });
            document.getElementById('csBody').innerHTML = html;
            document.getElementById('caseStudyOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeCaseStudy() {
            document.getElementById('caseStudyOverlay').classList.remove('active');
            document.body.style.overflow = '';
        }

        document.getElementById('caseStudyOverlay').addEventListener('click', function (e) { if (e.target === this) closeCaseStudy(); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeCaseStudy(); });

        // ===== LOADING SCREEN =====
        const loaderPercentage = document.getElementById('loaderPercentage');
        let loadPercent = 0;
        const loadInterval = setInterval(() => {
            loadPercent += Math.random() * 15 + 5;
            if (loadPercent >= 100) { loadPercent = 100; clearInterval(loadInterval); }
            loaderPercentage.textContent = Math.floor(loadPercent) + '%';
        }, 200);

        window.addEventListener('load', () => {
            setTimeout(() => {
                loadPercent = 100;
                loaderPercentage.textContent = '100%';
                setTimeout(() => document.getElementById('loader').classList.add('hidden'), 300);
            }, 2200);
        });

        // ===== CUSTOM CURSOR =====
        const customCursor = document.getElementById('customCursor');
        const cursorDot = document.getElementById('cursorDot');
        const cursorGlow = document.getElementById('cursorGlow');
        let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
            cursorGlow.style.left = mouseX + 'px';
            cursorGlow.style.top = mouseY + 'px';
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            customCursor.style.left = cursorX + 'px';
            customCursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effect on interactive elements
        const hoverTargets = document.querySelectorAll('a, button, .btn, .project-card, .skill-tag, .social-link, .info-item, .highlight-card, .contact-method, .cert-card, .education-card, .nav-resume-btn, input, textarea');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => customCursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => customCursor.classList.remove('hover'));
        });

        document.addEventListener('mousedown', () => customCursor.classList.add('click'));
        document.addEventListener('mouseup', () => customCursor.classList.remove('click'));

        // ===== PARTICLES =====
        const canvas = document.getElementById('particles-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.4 + 0.1;
                this.color = Math.random() > 0.5 ? '0, 229, 255' : '191, 90, 242';
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                ctx.fill();
            }
        }

        function initParticles() {
            const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 20000));
            particles = [];
            for (let i = 0; i < count; i++) particles.push(new Particle());
        }
        initParticles();

        function connectParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 130) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 229, 255, ${0.06 * (1 - dist / 130)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            connectParticles();
            requestAnimationFrame(animateParticles);
        }
        animateParticles();

        // ===== NAVBAR SCROLL =====
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

        // ===== MOBILE MENU =====
        const mobileToggle = document.getElementById('mobileToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileOverlay = document.getElementById('mobileOverlay');

        function toggleMobileMenu() {
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            mobileOverlay.classList.toggle('open');
        }
        mobileToggle.addEventListener('click', toggleMobileMenu);
        mobileOverlay.addEventListener('click', toggleMobileMenu);
        mobileMenu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => { if (mobileMenu.classList.contains('open')) toggleMobileMenu(); }));

        // ===== TYPING EFFECT =====
        const roles = ['Data Analyst', 'SQL Developer', 'Power BI Developer', 'Python Analyst', 'Dashboard Builder', 'Data Storyteller'];
        let roleIndex = 0, charIndex = 0, isDeleting = false;
        const typedText = document.getElementById('typedText');

        function typeEffect() {
            const current = roles[roleIndex];
            typedText.textContent = isDeleting ? current.substring(0, --charIndex) : current.substring(0, ++charIndex);
            let speed = isDeleting ? 35 : 75;
            if (!isDeleting && charIndex === current.length) { speed = 2000; isDeleting = true; }
            else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; speed = 500; }
            setTimeout(typeEffect, speed);
        }
        setTimeout(typeEffect, 2500);

        // ===== SCROLL ANIMATIONS =====
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

        // ===== COUNTER ANIMATION =====
        function animateCounters() {
            document.querySelectorAll('.stat-number[data-count]').forEach(el => {
                const target = parseInt(el.getAttribute('data-count'));
                const duration = 1500, start = performance.now();
                function update(t) {
                    const p = Math.min((t - start) / duration, 1);
                    el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target) + '+';
                    if (p < 1) requestAnimationFrame(update);
                }
                requestAnimationFrame(update);
            });
        }
        const heroObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) { animateCounters(); heroObserver.disconnect(); }
        }, { threshold: 0.3 });
        const heroStats = document.querySelector('.hero-stats');
        if (heroStats) heroObserver.observe(heroStats);

        // ===== SCROLL TO TOP =====
        const scrollTopBtn = document.getElementById('scrollTop');
        window.addEventListener('scroll', () => scrollTopBtn.classList.toggle('visible', window.scrollY > 400));
        scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        // ===== SMOOTH SCROLL =====
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // ===== FORM SUBMIT =====
        function handleFormSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const orig = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            btn.style.background = 'linear-gradient(135deg, #64ffda, #00e5ff)';
            setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; e.target.reset(); }, 3000);
        }

        // ===== ACTIVE NAV ON SCROLL =====
        const sections = document.querySelectorAll('section[id]');
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY + 100;
            sections.forEach(section => {
                const top = section.offsetTop, height = section.offsetHeight, id = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
                if (navLink) {
                    if (scrollY >= top && scrollY < top + height) {
                        document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
                        navLink.style.color = 'var(--accent)';
                    }
                }
            });
        });

        // ===== 3D TILT ON PROJECT CARDS =====
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });
            card.addEventListener('mouseleave', function () {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });

        // ===== MAGNETIC BUTTONS =====
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            btn.addEventListener('mouseleave', function () {
                this.style.transform = '';
            });
        });
