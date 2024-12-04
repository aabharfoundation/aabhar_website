document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger'); // Hamburger icon
    const navList = document.querySelector('.nav-links'); // Navigation links container
    const navItems = document.querySelectorAll('.nav-links li a'); // All navigation links

    // Toggle the mobile menu on hamburger click
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Highlight the active navigation link on click
    navItems.forEach((item) => {
        item.addEventListener('click', function () {
            // Remove 'active' from all links and reset underlines
            navItems.forEach(link => {
                link.classList.remove('active');
                link.querySelector('.underline').style.width = '0';
            });

            // Add 'active' to the clicked link
            this.classList.add('active');
            this.querySelector('.underline').style.width = '100%'; // Underline animation
        });
    });

    // Highlight the active link based on scroll position
    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY; // Current scroll position

        navItems.forEach((link) => {
            const section = document.querySelector(link.getAttribute('href')); // Section linked to the navigation link
            const sectionTop = section.offsetTop; // Top of the section
            const sectionBottom = sectionTop + section.offsetHeight; // Bottom of the section

            // Check if the scroll position is within the section's range
            if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionBottom - 50) {
                // Remove 'active' from all links and reset underlines
                navItems.forEach(link => {
                    link.classList.remove('active');
                    link.querySelector('.underline').style.width = '0';
                });

                // Add 'active' to the current section's link
                link.classList.add('active');
                link.querySelector('.underline').style.width = '100%';
            }
        });
    });
});
