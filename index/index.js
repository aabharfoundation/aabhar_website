document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger1');
    const navLinks = document.querySelector('.nav-links1');
    const navItems = document.querySelectorAll('.nav-link1');
    // Get references to the hamburger and navigation panel elements
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navList');

// When the hamburger is clicked, toggle the 'active' class to animate the icon and 'open' class to show the navigation menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');  // Toggles the 'active' class on the hamburger to switch between hamburger and 'X'
  navList.classList.toggle('open');      // Toggles the 'open' class on the nav panel to slide it in/out
});

    // Toggle the mobile menu
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
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
