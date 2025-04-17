// Gallery data structure
const galleryImages = [
    {
        id: 1,
        src: 'images/living/living-1.jpg',
        category: 'living',
        caption: 'Spacious Living Room with Ocean View'
    },
    // Add more images here following the same structure
];

// Initialize gallery
function initGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    // Populate gallery with images
    galleryImages.forEach(image => {
        const galleryItem = createGalleryItem(image);
        galleryGrid.appendChild(galleryItem);
    });
}

// Create gallery item
function createGalleryItem(image) {
    const item = document.createElement('div');
    item.className = `gallery-item ${image.category}`;
    item.setAttribute('data-aos', 'fade-up');
    
    item.innerHTML = `
        <img src="${image.src}" alt="${image.caption}">
        <div class="overlay">
            <h3>${image.caption}</h3>
        </div>
    `;
    
    item.addEventListener('click', () => openLightbox(image));
    return item;
}

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter gallery items
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Lightbox functionality
const lightbox = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
let currentImageIndex = 0;

function openLightbox(image) {
    lightbox.classList.add('active');
    lightboxImage.src = image.src;
    lightboxCaption.textContent = image.caption;
    currentImageIndex = galleryImages.findIndex(img => img.id === image.id);
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function navigateLightbox(direction) {
    currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
    const image = galleryImages[currentImageIndex];
    lightboxImage.src = image.src;
    lightboxCaption.textContent = image.caption;
}

// Lightbox event listeners
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
document.querySelector('.lightbox-next').addEventListener('click', () => navigateLightbox(1));

// Close lightbox on outside click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            navigateLightbox(-1);
            break;
        case 'ArrowRight':
            navigateLightbox(1);
            break;
    }
});

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true
});

// Initialize gallery on page load
document.addEventListener('DOMContentLoaded', initGallery); 