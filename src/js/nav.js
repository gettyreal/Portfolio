// Navigation module - handles page navigation and button setup

// Navigation helper functions
export function homeLink() {
    window.location.href = 'index.html';
}

export function projectsLink() {
    window.location.href = 'projects.html';
}

export function contactLink() {
    window.location.href = 'contact.html';
}

// Setup navigation event listeners (called from main.js)
export function setupNavigation() {
    const homeBtn = document.getElementById('home');
    const projectsBtn = document.getElementById('projects');
    const contactBtn = document.getElementById('contact');

    if (homeBtn) homeBtn.addEventListener('click', homeLink);
    if (projectsBtn) projectsBtn.addEventListener('click', projectsLink);
    if (contactBtn) contactBtn.addEventListener('click', contactLink);
}
