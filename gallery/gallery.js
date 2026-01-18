// Gallery items collection - populate immediately without waiting for DOMContentLoaded
let items = [];
let currentIndex = 0;
let galleryInitialized = false;

// Initialize gallery items
function initGalleryItems() {
    if (galleryInitialized) return;
    
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    const figures = Array.from(grid.querySelectorAll('figure'));
    items = figures.map(f => {
        const img = f.querySelector('img');
        return { 
            src: img.getAttribute('src'), 
            alt: img.getAttribute('alt'),
            figure: f
        };
    });
    
    galleryInitialized = true;
}

// Open lightbox at specific index - opens immediately, image loads in background
function openAt(index) {
    initGalleryItems();
    
    const item = items[index];
    if (!item) return;
    
    const lightbox = document.getElementById('lightbox');
    const lbImage = document.getElementById('lbImage');
    const lbCaption = document.getElementById('lbCaption');
    
    if (!lightbox || !lbImage) return;
    
    // Open lightbox immediately without waiting for image to load
    lbCaption.textContent = item.alt || '';
    lightbox.setAttribute('aria-hidden', 'false');
    currentIndex = index;
    document.body.style.overflow = 'hidden';
    
    // Load image in background - show placeholder while loading
    lbImage.style.opacity = '0.5';
    const img = new Image();
    img.onload = () => {
        lbImage.src = item.src;
        lbImage.alt = item.alt || '';
        lbImage.style.opacity = '1';
    };
    img.onerror = () => {
        // Keep showing lightbox even if image fails
        lbImage.alt = item.alt || '(Failed to load image)';
        lbImage.style.opacity = '1';
    };
    // Start loading image
    img.src = item.src;
}

// Close lightbox
function closeLB() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    lightbox.setAttribute('aria-hidden', 'true');
    const lbImage = document.getElementById('lbImage');
    if (lbImage) lbImage.src = '';
    document.body.style.overflow = '';
}

// Navigation functions
function showNext() {
    initGalleryItems();
    openAt((currentIndex + 1) % items.length);
}

function showPrev() {
    initGalleryItems();
    openAt((currentIndex - 1 + items.length) % items.length);
}

// Setup event listeners on gallery items using event delegation
function setupGalleryClickListeners() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    grid.addEventListener('click', (e) => {
        const figure = e.target.closest('figure');
        if (figure) {
            const idx = Array.from(grid.querySelectorAll('figure')).indexOf(figure);
            if (idx !== -1) openAt(idx);
        }
    });
}

// Setup lightbox controls
function setupLightboxControls() {
    const btnClose = document.querySelector('.lb-close');
    const btnPrev = document.querySelector('.lb-prev');
    const btnNext = document.querySelector('.lb-next');
    const lightbox = document.getElementById('lightbox');
    
    if (btnClose) btnClose.addEventListener('click', closeLB);
    if (btnNext) btnNext.addEventListener('click', showNext);
    if (btnPrev) btnPrev.addEventListener('click', showPrev);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox || lightbox.getAttribute('aria-hidden') !== 'false') return;
        if (e.key === 'Escape') closeLB();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });
    
    // Click outside to close
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLB();
        });
    }
}

// Initialize on DOMContentLoaded or immediately if DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setupGalleryClickListeners();
        setupLightboxControls();
        initGalleryItems();
    });
} else {
    // DOM already loaded
    setupGalleryClickListeners();
    setupLightboxControls();
    initGalleryItems();
}
