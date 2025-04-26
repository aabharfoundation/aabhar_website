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

    // ====== Manual Scroll Buttons for Auto-Scroll Wrapper ======
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const scroller = document.querySelector('.auto-scroll-wrapper');

    if (leftBtn && rightBtn && scroller) {
        leftBtn.addEventListener('click', () => {
            scroller.scrollLeft -= 300;
        });

        rightBtn.addEventListener('click', () => {
            scroller.scrollLeft += 300;
        });
    }
});
