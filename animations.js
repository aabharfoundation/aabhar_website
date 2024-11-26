document.addEventListener('DOMContentLoaded', () => {
    // Add animations on scroll
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = 0;
    heroContent.style.transform = 'translateY(50px)';

    setTimeout(() => {
        heroContent.style.transition = 'opacity 1.5s, transform 1.5s';
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateY(0)';
    }, 500);
});
// Fade-in effect for Gallery Items
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transition = `opacity 0.8s ease ${index * 0.2}s`;
    window.addEventListener('scroll', () => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            item.style.opacity = 1;
        }
    });
});

// Slide-in effect for News Items
const newsItems = document.querySelectorAll('.news-item');
newsItems.forEach((item, index) => {
    item.style.transform = 'translateX(-50px)';
    item.style.opacity = 0;
    item.style.transition = `all 0.8s ease ${index * 0.2}s`;
    window.addEventListener('scroll', () => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            item.style.transform = 'translateX(0)';
            item.style.opacity = 1;
        }
    });
});
// Timeline Scroll Animation
const timelineItems = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
    timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add('visible');
        }
    });
});
// Programs Section Animation
const programItems = document.querySelectorAll('.program-item');

window.addEventListener('scroll', () => {
    programItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add('visible');
        }
    });
});
fetch('news.json')
    .then((response) => response.json())
    .then((newsData) => {
        newsData.forEach((news) => {
            const newsItem = `
                <div class="news-card">
                    <img src="${news.image}" alt="${news.title}" class="news-image">
                    <div class="news-content">
                        <h3>${news.title}</h3>
                        <p>${news.description}</p>
                        <a href="${news.link}" class="read-more">अधिक वाचा</a>
                    </div>
                </div>
            `;
            newsGrid.insertAdjacentHTML('beforeend', newsItem);
        });
    });
