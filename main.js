// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const images = carousel.querySelectorAll('img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        
        // Auto-advance carousel
        setInterval(nextSlide, 5000);
    }

    // Gallery setup
    const galleryData = {
        "28022614428_4d2a068ca9_h.jpg": "Szyby kuchenne z grafiką",
        "41849402942_24fc0037a6_k.jpg": "Szyby kuchenne z grafiką",
        "8484614069_6419161cf3_b.jpg": "Oszklona kabina prysznicowa",
        "41849398212_a8797f8947_b.jpg": "Szyby kuchenne z grafiką",
        "8484575385_ec54256dcd_b.jpg": "Oszklona kabina prysznicowa",
        "28022615208_8d659cf119_c.jpg": "Szyba z grafiką",
        "41849403622_05b5cb6143_c.jpg": "Oszklona kabina prysznicowa",
        "41849404342_6def1325da_h.jpg": "Szyby kuchenne z grafiką",
        "41849405172_3ee71afab0_b.jpg": "Szyby kuchenne z grafiką"
    };

    const gallery = document.getElementById('gallery');
    if (gallery) {
        Object.entries(galleryData).forEach(([image, caption]) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            galleryItem.innerHTML = `
                <img src="originals/${image}" alt="${caption}">
                <div class="caption">${caption}</div>
            `;
            
            gallery.appendChild(galleryItem);
        });
    }
});