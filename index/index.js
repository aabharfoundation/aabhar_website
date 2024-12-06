document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    const sections = Array.from(navItems).map(link => document.querySelector(link.getAttribute('href')));
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;

    // Toggle mobile menu when hamburger is clicked
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close mobile menu when a nav link is clicked
    navItems.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    function updateActiveNav() {
        const scrollPosition = window.scrollY + navbarHeight;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navItems.forEach(link => {
                    link.classList.remove('active');
                    link.querySelector('.underline').style.width = '0';
                });
                navItems[index].classList.add('active');
                navItems[index].querySelector('.underline').style.width = '100%';
            }
        });
    }

    navItems.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            navItems.forEach(link => {
                link.classList.remove('active');
                link.querySelector('.underline').style.width = '0';
            });
            this.classList.add('active');
            this.querySelector('.underline').style.width = '100%';
        });
    });

    window.addEventListener('scroll', updateActiveNav);

    function loadLifestorySections() {
        const lifestoryContainer = document.querySelector('.lifestory-scroll');

        for (let i = 1; i <= 10; i++) {
            const div = document.createElement('div');
            div.classList.add('container');
            div.innerHTML = `
                <h2>Lifestory ${i}</h2>
                <p>Description of the lifestory ${i}</p>
                <p class="story">Here is the detailed story of lifestory ${i}.</p>
                <img src="image${i}.jpg" alt="Lifestory ${i}">
                <a href="story/lifestory.html#lifestory${i}" class="read-more">Read More</a>
            `;
            lifestoryContainer.appendChild(div);
        }
    }

    function loadNewsSections() {
        const newsContainer = document.querySelector('.news-scroll');

        for (let i = 1; i <= 10; i++) {
            const div = document.createElement('div');
            div.classList.add('container');
            div.innerHTML = `
                <h2>News ${i}</h2>
                <p>Description of the news ${i}</p>
                <p class="news">Here is the detailed news article ${i}.</p>
                <img src="news${i}.jpg" alt="News ${i}">
                <a href="newsblogs/news.html#news${i}" class="read-more">Read More</a>
            `;
            newsContainer.appendChild(div);
        }
    }

    loadLifestorySections();
    loadNewsSections();

    const lifestoryScroller = document.querySelector('.lifestory-scroll');
    const newsScroller = document.querySelector('.news-scroll');

    function setupLoopScrolling(scroller) {
        let autoScrollInterval;
        let isUserInteracting = false;
        const scrollSpeed = 2; // Speed of scroll
        const resetThreshold = 10; // Pixels before reset

        function startAutoScroll() {
            autoScrollInterval = setInterval(() => {
                if (!isUserInteracting) {
                    scroller.scrollLeft += scrollSpeed;

                    // Check if we've reached the end and reset scroll smoothly
                    if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth - resetThreshold) {
                        // Reset to the beginning smoothly
                        scroller.scrollLeft = 0;
                    }
                }
            }, 20);
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

    setupLoopScrolling(lifestoryScroller);
    setupLoopScrolling(newsScroller);
});


        function smoothScroll() {
            if (!isUserInteracting) {
                const scrollPos = scroller.scrollLeft;

                if (scrollPos >= scroller.scrollWidth - scroller.clientWidth - resetThreshold) {
                    // Smoothly reset back to the start
                    scroller.scrollLeft = 0;
                } else {
                    // Scroll by scrollSpeed smoothly
                    scroller.scrollLeft += scrollSpeed;
                }

                lastScrollPos = scrollPos;
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    const sections = Array.from(navItems).map(link => document.querySelector(link.getAttribute('href')));
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;

    // Toggle mobile menu when hamburger is clicked
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close mobile menu when a nav link is clicked
    navItems.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    function updateActiveNav() {
        const scrollPosition = window.scrollY + navbarHeight;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navItems.forEach(link => {
                    link.classList.remove('active');
                    link.querySelector('.underline').style.width = '0';
                });
                navItems[index].classList.add('active');
                navItems[index].querySelector('.underline').style.width = '100%';
            }
        });
    }

    navItems.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            navItems.forEach(link => {
                link.classList.remove('active');
                link.querySelector('.underline').style.width = '0';
            });
            this.classList.add('active');
            this.querySelector('.underline').style.width = '100%';
        });
    });

    window.addEventListener('scroll', updateActiveNav);

    function loadLifestorySections() {
        const lifestoryContainer = document.querySelector('.lifestory-scroll');

        for (let i = 1; i <= 10; i++) {
            const div = document.createElement('div');
            div.classList.add('container');
            div.innerHTML = `
                <h2>Lifestory ${i}</h2>
                <p>Description of the lifestory ${i}</p>
                <p class="story">Here is the detailed story of lifestory ${i}.</p>
                <img src="image${i}.jpg" alt="Lifestory ${i}">
                <a href="story/lifestory.html#lifestory${i}" class="read-more">Read More</a>
            `;
            lifestoryContainer.appendChild(div);
        }
    }

    function loadNewsSections() {
        const newsContainer = document.querySelector('.news-scroll');

        for (let i = 1; i <= 10; i++) {
            const div = document.createElement('div');
            div.classList.add('container');
            div.innerHTML = `
                <h2>News ${i}</h2>
                <p>Description of the news ${i}</p>
                <p class="news">Here is the detailed news article ${i}.</p>
                <img src="news${i}.jpg" alt="News ${i}">
                <a href="newsblogs/news.html#news${i}" class="read-more">Read More</a>
            `;
            newsContainer.appendChild(div);
        }
    }

    loadLifestorySections();
    loadNewsSections();

    const lifestoryScroller = document.querySelector('.lifestory-scroll');
    const newsScroller = document.querySelector('.news-scroll');

    function setupLoopScrolling(scroller) {
        const scrollerContent = scroller.innerHTML;
        scroller.innerHTML += scrollerContent; // Duplicate content for seamless loop

        let autoScrollInterval;
        let isUserInteracting = false;

        function startAutoScroll() {
            autoScrollInterval = setInterval(() => {
                if (!isUserInteracting) {
                    scroller.scrollLeft += 2;
                    // Reset scroll position for seamless loop
                    if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
                        scroller.scrollLeft = 0;
                    }
                }
            }, 20);
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

    setupLoopScrolling(lifestoryScroller);
    setupLoopScrolling(newsScroller);
});
