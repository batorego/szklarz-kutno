import { initCarousel } from './carousel.js';
import { initGallery } from './gallery.js';
import { initAnalytics } from './analytics.js';
import { initContactPage } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Google Analytics
    initAnalytics();
    
    // Initialize components based on current page
    const isContactPage = window.location.pathname.includes('kontakt.html');
    
    if (isContactPage) {
        initContactPage();
    } else {
        initCarousel();
        initGallery();
    }
});