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

const particles = document.getElementById("particles");
for (let i = 0; i < 28; i++) {
    const p = document.createElement("span");
    p.style.cssText = `
        position:fixed;
        width:${Math.random() > .8 ? 3 : 2}px;
        height:${Math.random() > .8 ? 3 : 2}px;
        background:#aaa;
        border-radius:50%;
        left:${Math.random()*100}%;
        top:${Math.random()*100}%;
        opacity:${0.15 + Math.random()*.35};
        box-shadow:0 0 8px rgba(255,255,255,.4);
        animation:float ${5 + Math.random()*10}s ease-in-out infinite alternate;
        pointer-events:none;
    `;
    particles.appendChild(p);
}

const style = document.createElement("style");
style.textContent = `
@keyframes float {
    from { transform: translateY(0) translateX(0); }
    to { transform: translateY(-24px) translateX(12px); }
}
`;
document.head.appendChild(style);
