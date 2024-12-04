document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger'); // Select the hamburger icon
    const navList = document.querySelector('.nav-links'); // Select the navigation links container
    const navItems = document.querySelectorAll('.nav-links li a'); // Select all navigation links
    
    // Toggle the mobile menu when the hamburger is clicked
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Highlight the active navigation link on click
    navItems.forEach((item) => {
        item.addEventListener('click', function () {
            navItems.forEach(link => {
                link.classList.remove('active'); // Remove 'active' class from all links
                link.querySelector('.underline').style.width = '0'; // Reset the underline width
            });

            this.classList.add('active'); // Add 'active' class to the clicked link
            this.querySelector('.underline').style.width = '100%'; // Expand the underline
        });
    });

    // Highlight the active navigation link based on scroll position
    window.addEventListener('scroll', updateActiveNav);

    function updateActiveNav() {
        const viewportHeight = window.innerHeight; // Get the viewport height
        const scrollPosition = window.scrollY; // Current scroll position

        navItems.forEach((link, index) => {
            const section = document.querySelector(link.getAttribute('href')); // Linked section
            const sectionTop = section.offsetTop; // Section's top offset
            const sectionHeight = section.offsetHeight; // Section's height
            const sectionBottom = sectionTop + sectionHeight; // Section's bottom position

            // Check if the current section is in the viewport
            if (
                scrollPosition >= sectionTop - viewportHeight / 2 && // Section top is in view
                scrollPosition < sectionBottom - viewportHeight / 2 // Section bottom is not completely out of view
            ) {
                navItems.forEach(link => {
                    link.classList.remove('active'); // Remove 'active' from all links
                    link.querySelector('.underline').style.width = '0'; // Reset underline
                });

                link.classList.add('active'); // Activate the current section's link
                link.querySelector('.underline').style.width = '100%'; // Expand underline
            }
        });
    }
});
