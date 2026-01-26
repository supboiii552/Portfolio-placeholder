// This function acts like a React Component
export function createProjectCard(name, desc, url, tag = "Fork") {
    return `
        <a href="${url}" target="_blank" class="project-card block p-6 rounded-2xl">
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold text-blue-400">${name}</h3>
                <span class="text-[10px] uppercase tracking-widest bg-blue-500/10 text-blue-500 border border-blue-500/20 px-2 py-0.5 rounded">
                    ${tag}
                </span>
            </div>
            <p class="text-gray-400 text-sm mb-3 leading-relaxed">${desc}</p>
            <div class="flex items-center text-xs font-mono text-gray-600">
                <span class="mr-2">🔗</span>
                <span>${url.replace('https://', '')}</span>
            </div>
        </a>
    `;
}
