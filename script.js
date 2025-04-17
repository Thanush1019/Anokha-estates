// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to your server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your inquiry. We will contact you shortly.');
    contactForm.reset();
});

// Image gallery lightbox
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', () => {
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        
        const img = document.createElement('img');
        img.src = image.src;
        
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);
        
        // Close lightbox on click
        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksAnchors = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = navLinks.classList.contains('active') 
        ? 'rotate(45deg) translate(5px, 5px)' 
        : 'none';
    spans[1].style.opacity = navLinks.classList.contains('active') 
        ? '0' 
        : '1';
    spans[2].style.transform = navLinks.classList.contains('active') 
        ? 'rotate(-45deg) translate(7px, -7px)' 
        : 'none';
});

// Close mobile menu when clicking a link
navLinksAnchors.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            // Reset hamburger
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && 
        !navLinks.contains(e.target) && 
        navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        // Reset hamburger
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Add touch events for better mobile interaction
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', e => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', e => {
    touchEndY = e.changedTouches[0].screenY;
    if (touchStartY - touchEndY > 50) {
        // Swipe up - close menu
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// Update the carousel functionality
const carousel = {
    currentSlide: 0,
    slides: document.querySelectorAll('.carousel-slide'),
    dots: document.querySelectorAll('.dot'),
    prevBtn: document.querySelector('.carousel-btn.prev'),
    nextBtn: document.querySelector('.carousel-btn.next'),
    autoPlayInterval: null,

    init() {
        // Check if carousel elements exist
        if (!this.slides.length) return;

        // Set initial state
        this.showSlide(0);
        
        // Start autoplay immediately
        this.startAutoPlay();

        // Add event listeners
        this.prevBtn.addEventListener('click', () => {
            this.prevSlide();
            this.resetAutoPlay();
        });

        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
            this.resetAutoPlay();
        });

        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.showSlide(index);
                this.resetAutoPlay();
            });
        });

        // Pause on hover
        const carouselElement = document.querySelector('.carousel');
        if (carouselElement) {
            carouselElement.addEventListener('mouseenter', () => {
                this.stopAutoPlay();
            });

            carouselElement.addEventListener('mouseleave', () => {
                this.startAutoPlay();
            });
        }
    },

    showSlide(index) {
        // Remove active class from all slides and dots
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));

        // Handle circular rotation
        this.currentSlide = index;
        if (this.currentSlide >= this.slides.length) this.currentSlide = 0;
        if (this.currentSlide < 0) this.currentSlide = this.slides.length - 1;

        // Add active class to current slide and dot
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    },

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    },

    prevSlide() {
        this.showSlide(this.currentSlide - 1);
    },

    startAutoPlay() {
        // Clear any existing interval first
        this.stopAutoPlay();
        // Start new interval
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 2000);
    },

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    },

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
};

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    carousel.init();
    
    // Log to verify initialization
    console.log('Carousel initialized with', carousel.slides.length, 'slides');
});

// Add this Blueprint Carousel functionality to your script.js

const blueprintCarousel = {
    currentSlide: 0,
    slides: document.querySelectorAll('.blueprint-slide'),
    indicators: document.querySelectorAll('.indicator'),
    prevBtn: document.querySelector('.blueprint-btn.prev'),
    nextBtn: document.querySelector('.blueprint-btn.next'),
    touchStartX: 0,
    touchEndX: 0,

    init() {
        if (!this.slides.length) return;

        this.showSlide(0);
        this.setupEventListeners();
    },

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.showSlide(index));
        });

        // Touch events for mobile
        const carousel = document.querySelector('.blueprint-carousel');
        carousel.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].clientX;
            this.handleSwipe();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    },

    showSlide(index) {
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.indicators.forEach(indicator => indicator.classList.remove('active'));

        this.currentSlide = index;
        if (this.currentSlide >= this.slides.length) this.currentSlide = 0;
        if (this.currentSlide < 0) this.currentSlide = this.slides.length - 1;

        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
    },

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    },

    prevSlide() {
        this.showSlide(this.currentSlide - 1);
    },

    handleSwipe() {
        const swipeDistance = this.touchEndX - this.touchStartX;
        if (Math.abs(swipeDistance) > 50) {
            if (swipeDistance > 0) {
                this.prevSlide();
            } else {
                this.nextSlide();
            }
        }
    }
};

// Initialize blueprint carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    blueprintCarousel.init();
}); 