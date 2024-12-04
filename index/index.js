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
});
