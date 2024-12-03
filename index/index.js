document.addEventListener("DOMContentLoaded", function () {
    const hamBurger = document.querySelector('.hamburger'); // Select the hamburger icon
    const navList = document.querySelector('.nav-links'); // Select the navigation links container
    const navItems = document.querySelectorAll('.nav-links li a'); // Select all the navigation links
    
    // Toggle the mobile menu when the hamburger is clicked
    hamburger.addEventListener('click', function () {
        hamBurger.classList.toggle('active');
        navList.classList.toggle('active');
         // Toggle the 'active' class on the hamburger (for transforming to 'X')
         // Toggle the 'active' class on nav-links (for sliding in the menu)
    });

    // Highlight the active navigation link on click
    navItems.forEach((item) => {
        item.addEventListener('click', function () {
            navItems.forEach(link => link.classList.remove('active')); // Remove 'active' class from all links
            item.classList.add('active'); // Add 'active' class to the clicked link
        });
    });

    // Highlight the active navigation link based on scroll position
    window.addEventListener('scroll', updateActiveNav);

    function updateActiveNav() {
        let scrollPosition = window.scrollY + 100; // Offset for fixed navbar
        navItems.forEach((link) => {
            const section = document.querySelector(link.getAttribute('href')); // Get section linked to the navigation item
            if (
                section.offsetTop <= scrollPosition && // If the section is in view
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                navItems.forEach(link => link.classList.remove('active')); // Remove 'active' class from all links
                link.classList.add('active'); // Add 'active' class to the current section's link
            }
        });
    }
});
