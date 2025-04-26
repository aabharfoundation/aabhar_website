document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    const sections = Array.from(navItems).map(link => document.querySelector(link.getAttribute('href')));
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close mobile menu on nav link click
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    function clearActiveStates() {
        navItems.forEach(link => {
            link.classList.remove('active');
            const underline = link.querySelector('.underline');
            if (underline) underline.style.width = '0';
        });
    }

    function updateActiveNav() {
        const scrollPosition = window.scrollY + navbarHeight;

        sections.forEach((section, index) => {
            if (!section) return;
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                clearActiveStates();
                navItems[index].classList.add('active');
                const underline = navItems[index].querySelector('.underline');
                if (underline) underline.style.width = '100%';
            }
        });
    }

    navItems.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (!targetSection) return;

            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            clearActiveStates();
            this.classList.add('active');
            const underline = this.querySelector('.underline');
            if (underline) underline.style.width = '100%';
        });
    });

    window.addEventListener('scroll', updateActiveNav);
});

    function loadThoughtsSections() {
        const newsContainer = document.querySelector('.news-scroll');

        for (let i = 1; i <= 10; i++) {
            const div = document.createElement('div');
            div.classList.add('thoughts-container');
            div.innerHTML = `
                <h2>Thoughts ${i}</h2>
                <p>Description of the news ${i}</p>
                <p class="thoughts">Here is the detailed news article ${i}.</p>
                <img src="thoughts${i}.jpg" alt="Thoughts ${i}">
                <a href="thoughts/thoughts.html#news${i}" class="read-more">Read More</a>
            `;
            newsContainer.appendChild(div);
        }
    }

    loadLifestorySections();
    loadNewsSections();

    const lifestoryScroller = document.querySelector('.lifestory-scroll');
    const newsScroller = document.querySelector('.news-scroll');

    function setupBackAndForthScrolling(scroller) {
        const scrollerContent = scroller.innerHTML;
        scroller.innerHTML += scrollerContent; // Duplicate content for seamless loop

        let autoScrollInterval;
        let isUserInteracting = false;
        let scrollDirection = 1; // 1 for forward, -1 for backward

        function startAutoScroll() {
            autoScrollInterval = setInterval(() => {
                if (!isUserInteracting) {
                    scroller.scrollLeft += 2 * scrollDirection;

                    // If the scroll reaches the end, change direction
                    if (scroller.scrollLeft >= scroller.scrollWidth - scroller.offsetWidth || scroller.scrollLeft <= 0) {
                        scrollDirection *= -1; // Reverse direction
                    }
                }
            }, 20); // Adjust interval for speed
        }

        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }

        scroller.addEventListener('mousedown', () => (isUserInteracting = true));
        scroller.addEventListener('mouseup', () => (isUserInteracting = false));
        scroller.addEventListener('mouseleave', () => (isUserInteracting = false));
        scroller.addEventListener('wheel', () => (isUserInteracting = true));
        scroller.addEventListener('touchstart', () => (isUserInteracting = true));
        scroller.addEventListener('touchend', () => (isUserInteracting = false));

        window.addEventListener('blur', stopAutoScroll);
        window.addEventListener('focus', startAutoScroll);

        startAutoScroll();
    }

    setupBackAndForthScrolling(lifestoryScroller);
    setupBackAndForthScrolling(newsScroller);
});
