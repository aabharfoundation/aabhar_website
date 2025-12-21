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

    // ====== Reusable Scroll Buttons Setup ======
    function setupScrollButtons(leftSelector, rightSelector, wrapperSelector) {
        const leftButton = document.querySelector(leftSelector);
        const rightButton = document.querySelector(rightSelector);
        const wrapper = document.querySelector(wrapperSelector);

        if (leftButton && rightButton && wrapper) {
            leftButton.addEventListener('click', () => {
                wrapper.scrollLeft -= 300;
            });

            rightButton.addEventListener('click', () => {
                wrapper.scrollLeft += 300;
            });
        }
    }

    // Setup scroll buttons for LifeStory Section
    setupScrollButtons('.left-btn', '.right-btn', '.auto-scroll-wrapper');

    // Setup scroll buttons for Thoughts Section
    setupScrollButtons('.left-btn-thoughts', '.right-btn-thoughts', '.auto-scroll-wrapper-thoughts');

    // Make gallery figures keyboard-focusable and add Enter/Space activation for accessibility
    const galleryFigures = document.querySelectorAll('.gallery-grid figure');
    galleryFigures.forEach(fig => {
        // add tabindex and role for accessibility without changing markup files
        if (!fig.hasAttribute('tabindex')) fig.setAttribute('tabindex', '0');
        if (!fig.hasAttribute('role')) fig.setAttribute('role', 'button');

        fig.addEventListener('keydown', (ev) => {
            if (ev.key === 'Enter' || ev.key === ' ') {
                ev.preventDefault();
                // simulate click so existing handlers (like lightbox) trigger
                fig.click();
            }
        });
    });

    // Adjust scroll button vertical alignment to match the center of their scroll wrappers
    function adjustScrollButtons() {
        const groups = [
            { left: '.left-btn', right: '.right-btn', wrapper: '.auto-scroll-wrapper' },
            { left: '.left-btn-thoughts', right: '.right-btn-thoughts', wrapper: '.auto-scroll-wrapper-thoughts' }
        ];

        groups.forEach(g => {
            const left = document.querySelector(g.left);
            const right = document.querySelector(g.right);
            const wrapper = document.querySelector(g.wrapper);
            if (!wrapper) return;

            // Parent that buttons are absolutely positioned against
            const parent = wrapper.parentElement;
            if (!parent) return;

            const parentRect = parent.getBoundingClientRect();
            const wrapperRect = wrapper.getBoundingClientRect();

            // Calculate top position in pixels relative to parent
            const topPx = (wrapperRect.top - parentRect.top) + (wrapperRect.height / 2);

            if (left) left.style.top = `${topPx}px`;
            if (right) right.style.top = `${topPx}px`;
        });
    }

    // Run on load and resize to keep buttons centered on the scroll wrappers
    adjustScrollButtons();
    window.addEventListener('resize', adjustScrollButtons);
});
