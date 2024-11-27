// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", function () {

    // Smooth Scroll for Navigation
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetSectionId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Header Text Animations - Make sure the content is in place before animation
    const headerTextBig = document.querySelector('.header-text .big-text');
    const headerTextSmall = document.querySelector('.header-text .small-text');

    // Trigger animation after the page loads
    setTimeout(() => {
        headerTextBig.style.animation = 'fadeIn 2s ease-out';
        headerTextSmall.style.animation = 'slideIn 2s ease-out';
    }, 100);

    // Add 3D animation to navigation buttons when hovered
    const navItems = document.querySelectorAll('.nav-button');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1) rotateY(15deg)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) rotateY(0deg)';
            this.style.boxShadow = 'none';
        });
    });

    // Handle smooth scroll for the top navigation bar (optional)
    const topBarLinks = document.querySelectorAll('.top-bar a');
    
    topBarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetUrl = this.href;
            window.location.href = targetUrl;
        });
    });

    // Life Story Auto Scroll Logic
    const lifeStoryScroll = document.querySelector('.life-story-scroll');
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust the speed as necessary

    // Function to auto-scroll the life story blocks
    function scrollLifeStory() {
        if (scrollAmount >= lifeStoryScroll.scrollWidth - lifeStoryScroll.clientWidth) {
            scrollAmount = 0; // Reset scroll when it reaches the end
        } else {
            scrollAmount += scrollSpeed; // Scroll by scrollSpeed
        }
        lifeStoryScroll.scrollLeft = scrollAmount; // Apply scroll position
    }

    // Set interval to auto scroll every 20 milliseconds
    setInterval(scrollLifeStory, 20);

});


    // =======================
    // Gallery Auto Scroll Logic
    // =======================
    const galleryScroll = document.querySelector('.gallery-scroll');
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust speed here

    // Function to auto-scroll the gallery images
    function scrollGallery() {
        if (scrollAmount >= galleryScroll.scrollWidth - galleryScroll.clientWidth) {
            scrollAmount = 0; // Reset scroll when it reaches the end
        } else {
            scrollAmount += scrollSpeed; // Scroll by scrollSpeed
        }
        galleryScroll.scrollLeft = scrollAmount; // Apply scroll position
    }

    // Set interval to auto scroll every 20 milliseconds
    setInterval(scrollGallery, 20);

});
