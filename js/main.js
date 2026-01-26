// --- 1. YOUR PROJECT LIST (Add new games here!) ---
const projectData = [
    {
        name: "GN Learning",
        desc: "Massive library of games. Prestigious project forked from GN-math.",
        url: "https://supboiii552.github.io/gn"
    },
    {
        name: "Sandboxels",
        desc: "Physics-based sandbox simulator. Experiment with elements!",
        url: "https://supboiii552.github.io/sandboxels"
    },
    {
        name: "Mathgames 66",
        desc: "Unique titles and unblocked math games.",
        url: "https://supboiii552.github.io/66"
    },
    {
        name: "MonkeyGG",
        desc: "Large catalog of games including Asteroids.",
        url: "https://supboiii552.github.io/monkeygg"
    }
];

// --- 2. THE ENGINE (Builds the site) ---
const listContainer = document.getElementById('project-list');

projectData.forEach(p => {
    listContainer.innerHTML += `
        <a href="${p.url}" target="_blank" class="project-card block p-6 rounded-2xl">
            <h3 class="text-xl font-bold text-blue-400 mb-1">${p.name}</h3>
            <p class="text-gray-400 text-sm mb-3">${p.desc}</p>
            <span class="text-xs font-mono text-gray-600">${p.url.replace('https://', '')}</span>
        </a>
    `;
});

// --- 3. REACT BITS: BLUR TEXT ANIMATION ---
const titleText = "supboiii552's Projects";
const titleContainer = document.getElementById('blur-title');

// Split into characters
titleText.split("").forEach(char => {
    const span = document.createElement("span");
    span.innerText = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    span.className = "title-char";
    titleContainer.appendChild(span);
});

// Run Animations
const tl = gsap.timeline();

tl.from(".title-char", {
    duration: 1,
    opacity: 0,
    filter: "blur(15px)",
    stagger: 0.05,
    ease: "power2.out"
})
.to("#hero-subtext", {
    opacity: 1,
    y: -10,
    duration: 0.8
}, "-=0.5")
.from(".project-card", {
    opacity: 0,
    x: -20,
    stagger: 0.1,
    duration: 0.6,
    ease: "power2.out"
}, "-=0.3");
