document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');
    // Get references to the hamburger and navigation panel elements
    // Toggle the mobile menu
    hamburger.addEventListener('click', function () {
        hamburger.classList.tonggle('active');
        nav-links.classList.toggle('active');
        
    });

    // Highlight the active navigation link on scroll or click
    window.addEventListener('scroll', updateActiveNav);
    navItems.forEach((item) => {
        item.addEventListener('click', function () {
            navItems.forEach(link => link.classList.remove('active'));
            item.classList.add('active');
        });
    });

    function updateActiveNav() {
        let scrollPosition = window.scrollY + 100; // Offset for fixed navbar
        navItems.forEach((link) => {
            const section = document.querySelector(link.getAttribute('href'));
            if (
                section.offsetTop <= scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                navItems.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }
});
