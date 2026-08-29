const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn?.setAttribute("aria-expanded", "false");
    });
});

/* --- Floating particle field --- */
const canvas = document.getElementById("particle-canvas");
const ctx = canvas?.getContext("2d");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let particles = [];
let mouse = { x: -9999, y: -9999 };

function resizeCanvas() {
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + "px";
    canvas.style.height = innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles = Array.from({ length: Math.min(110, Math.max(55, Math.floor(innerWidth / 12))) }, () => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        vx: (Math.random() - .5) * .35,
        vy: (Math.random() - .5) * .35,
        r: Math.random() * 1.7 + .4,
        a: Math.random() * .55 + .12,
        pulse: Math.random() * Math.PI * 2
    }));
}

function animateParticles(t = 0) {
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    particles.forEach((p, i) => {
        if (!prefersReducedMotion) {
            p.x += p.vx;
            p.y += p.vy;
            p.pulse += .015;
            const dx = mouse.x - p.x, dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 130) {
                p.x -= dx * .0009;
                p.y -= dy * .0009;
            }
            if (p.x < -10) p.x = innerWidth + 10;
            if (p.x > innerWidth + 10) p.x = -10;
            if (p.y < -10) p.y = innerHeight + 10;
            if (p.y > innerHeight + 10) p.y = -10;
        }
        const alpha = Math.max(.06, p.a + Math.sin(p.pulse) * .12);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230,235,235,${alpha})`;
        ctx.fill();

        // Subtle constellation lines
        for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];
            const d = Math.hypot(p.x - q.x, p.y - q.y);
            if (d < 95) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.strokeStyle = `rgba(190,200,200,${(1 - d / 95) * .055})`;
                ctx.lineWidth = .6;
                ctx.stroke();
            }
        }
    });
    requestAnimationFrame(animateParticles);
}

resizeCanvas();
addEventListener("resize", resizeCanvas);
addEventListener("pointermove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
if (!prefersReducedMotion) requestAnimationFrame(animateParticles);

/* --- Ghost assistant --- */
const ghost = document.getElementById("ghost");
const bubble = document.getElementById("ghost-bubble");
const ghostMessages = [
    ["Hey! I'm Boo 👻", "Need a tour?"],
    ["Welcome to Sarvesh.exe", "Scroll around — I know the place."],
    ["Mission unlocked! 🎮", "Check out the projects."],
    ["Skill tree detected ⚡", "Python + web + AI."],
    ["Want to connect?", "The contact panel is downstairs ↓"]
];
let ghostIndex = 0;

function showGhostMessage(index) {
    if (!bubble) return;
    const [title, sub] = ghostMessages[index % ghostMessages.length];
    bubble.innerHTML = `${title}<br><span>${sub}</span>`;
    bubble.classList.remove("pop");
    void bubble.offsetWidth;
    bubble.classList.add("pop");
}

ghost?.addEventListener("click", () => {
    ghostIndex++;
    showGhostMessage(ghostIndex);
    ghost.classList.add("happy");
    setTimeout(() => ghost.classList.remove("happy"), 650);
});

document.querySelectorAll(".nav-links a, .hero-actions a").forEach(link => {
    link.addEventListener("click", () => {
        const target = link.getAttribute("href");
        const map = {"#home":0,"#projects":2,"#skills":3,"#contact":4,"#about":1,"#education":1};
        if (target in map) {
            ghostIndex = map[target];
            showGhostMessage(ghostIndex);
        }
    });
});

// Make the ghost gently follow the pointer, without becoming annoying.
addEventListener("pointermove", e => {
    if (!ghost || innerWidth < 700 || prefersReducedMotion) return;
    const x = (e.clientX / innerWidth - .5) * 12;
    const y = (e.clientY / innerHeight - .5) * 8;
    ghost.style.setProperty("--mx", `${x}px`);
    ghost.style.setProperty("--my", `${y}px`);
});

setInterval(() => {
    if (document.visibilityState === "visible") {
        ghostIndex++;
        showGhostMessage(ghostIndex);
    }
}, 9000);
