document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger'); // Hamburger icon
    const navList = document.querySelector('.nav-links'); // Navigation links container
    const navItems = document.querySelectorAll('.nav-links li a'); // All navigation links
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Navbar height

    // Toggle the mobile menu on hamburger click
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Smooth scroll to section and offset for navbar
    navItems.forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href'); // Get target section ID
            const targetSection = document.querySelector(targetId); // Get the section element

            // Scroll to the section, offset by navbar height
            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight, 
                behavior: 'smooth', // Smooth scrolling
            });

            // Update active link styles
            navItems.forEach(link => {
                link.classList.remove('active');
                link.querySelector('.underline').style.width = '0';
            });
            this.classList.add('active');
            this.querySelector('.underline').style.width = '100%';
        });
    });
});
