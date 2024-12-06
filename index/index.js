document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger'); // Hamburger icon
    const navList = document.querySelector('.nav-links'); // Navigation links container
    const navItems = document.querySelectorAll('.nav-links li a'); // All nav links
    const sections = Array.from(navItems).map(link => document.querySelector(link.getAttribute('href'))); // Sections
    const navbar = document.querySelector('.navbar'); // Navbar
    const navbarHeight = navbar.offsetHeight; // Navbar height

    // Toggle mobile menu when hamburger is clicked
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active'); // Toggle hamburger icon to 'X'
        navList.classList.toggle('active'); // Show/hide nav links
    });

    // Close mobile menu when a nav link is clicked
    navItems.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active'); // Reset hamburger icon
            navList.classList.remove('active'); // Hide nav menu on click
        });
    });

    // Function to highlight the active nav link based on scroll position
    function updateActiveNav() {
        const scrollPosition = window.scrollY + navbarHeight; // Adjusted scroll position

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navItems.forEach(link => {
                    link.classList.remove('active'); // Reset all links
                    link.querySelector('.underline').style.width = '0'; // Reset underline
                });

                // Highlight the active link
                navItems[index].classList.add('active');
                navItems[index].querySelector('.underline').style.width = '100%';
            }
        });
    }

    // Scroll to section with offset adjustment on link click
    navItems.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const targetSection = document.querySelector(this.getAttribute('href'));
            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update active link immediately on click
            navItems.forEach(link => {
                link.classList.remove('active');
                link.querySelector('.underline').style.width = '0';
            });
            this.classList.add('active');
            this.querySelector('.underline').style.width = '100%';
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNav);

    // Functionality to dynamically load lifestory sections
    function loadLifestorySections() {
        const lifestoryContainer = document.querySelector('.lifestory-scroll');

        // Fetch or hardcode content for the first 10 lifestory sections
        for (let i = 1; i <= 10; i++) {
            const div = document.createElement('div');
            div.classList.add('container');
            div.innerHTML = `
                <h2>Lifestory ${i}</h2>
                <p>Description of the lifestory ${i}</p>
                <p class="story">Here is the detailed story of lifestory ${i}.</p>
                <img src="image${i}.jpg" alt="Lifestory ${i}">
                <a href="lifestory.html#lifestory${i}" class="read-more">Read More</a>
            `;
            lifestoryContainer.appendChild(div);
        }
    }

    // Functionality to dynamically load news sections
    function loadNewsSections() {
        const newsContainer = document.querySelector('.news-scroll');

        // Fetch or hardcode content for the first 10 news sections
        for (let i = 1; i <= 10; i++) {
            const div = document.createElement('div');
            div.classList.add('container');
            div.innerHTML = `
                <h2>News ${i}</h2>
                <p>Description of the news ${i}</p>
                <p class="news">Here is the detailed news article ${i}.</p>
                <img src="news${i}.jpg" alt="News ${i}">
                <a href="news.html#news${i}" class="read-more">Read More</a>
            `;
            newsContainer.appendChild(div);
        }
    }

    // Load lifestory and news sections after DOM is ready
    loadLifestorySections();
    loadNewsSections();

    
    let autoScrollInterval; // To store the auto-scroll interval
    let isUserInteracting = false; // Track user interaction

    // Function to start auto-scroll
    function startAutoScroll(scroller) {
        autoScrollInterval = setInterval(() => {
            if (!isUserInteracting) {
                scroller.scrollLeft += 2; // Auto-scroll horizontally by 2px
            }
        }, 20); // Adjust the speed with this interval (lower = faster)
    }

    // Function to stop auto-scroll
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Detect user interaction and pause auto-scroll
    function addUserInteractionListeners(scroller) {
        scroller.addEventListener('mousedown', () => (isUserInteracting = true)); // User starts interaction
        scroller.addEventListener('mouseup', () => (isUserInteracting = false)); // User stops interaction
        scroller.addEventListener('mouseleave', () => (isUserInteracting = false)); // Mouse leaves scroller
        scroller.addEventListener('wheel', () => (isUserInteracting = true)); // Mouse wheel interaction
        scroller.addEventListener('touchstart', () => (isUserInteracting = true)); // Touch start (mobile)
        scroller.addEventListener('touchend', () => (isUserInteracting = false)); // Touch end (mobile)
    }

    // Initialize auto-scroll for both scrollers
    startAutoScroll(lifestoryScroller);
    startAutoScroll(newsScroller);

    // Add interaction listeners to pause/resume auto-scroll
    addUserInteractionListeners(lifestoryScroller);
    addUserInteractionListeners(newsScroller);

    // Stop auto-scroll when switching tabs or minimizing
    window.addEventListener('blur', stopAutoScroll);
    window.addEventListener('focus', () => {
        startAutoScroll(lifestoryScroller);
        startAutoScroll(newsScroller);
    });

});
