import { createProjectCard } from './components.js';

const projectData = [
    { name: "GN Learning", desc: "Massive library. Prestigious project.", url: "https://supboiii552.github.io/gn", tag: "Most Popular" },
    { name: "Sandboxels", desc: "Physics simulator. Experiment with elements.", url: "https://supboiii552.github.io/sandboxels", tag: "Physics" },
    { name: "Proll Games", desc: "Includes bookmark hacks and a large library.", url: "https://supboiii552.github.io/proll", tag: "Tools" }
];

const listContainer = document.getElementById('project-list');

// We use the component function here
projectData.forEach(p => {
    listContainer.innerHTML += createProjectCard(p.name, p.desc, p.url, p.tag);
});

// ... (Keep the GSAP animation code from the previous step below this)
