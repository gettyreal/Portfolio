// App initialization - imports modules and sets up event listeners
import { fetchProfile } from './api.js';
import { setupNavigation } from './nav.js';

// Initialize app on document ready
document.addEventListener('DOMContentLoaded', async function() {
    // Setup navigation handlers
    setupNavigation();

    // Fetch and display GitHub profile
    const profile = await fetchProfile();
    if (profile) {
        const profileImage = document.getElementById('profile-image');
        const profileName = document.getElementById('profile-name');
        if (profileImage) profileImage.src = profile.avatar_url;
        if (profileName) profileName.textContent = profile.login;
    }
});
