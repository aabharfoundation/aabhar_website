document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger'); // Select the hamburger icon
    const navList = document.querySelector('.nav-links'); // Select the navigation links container
    const navItems = document.querySelectorAll('.nav-links li a'); // Select all the navigation links
    const underline = document.querySelector('.underline'); // Underline element to animate

    // Toggle the mobile menu when the hamburger is clicked
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Move underline when clicking a navigation item
    navItems.forEach((item) => {
        item.addEventListener('click', function () {
            moveUnderline(item); // Move underline to clicked item
            scrollToSection(item); // Smooth scroll to the section
        });
    });

    // Highlight the underline based on scroll position
    window.addEventListener('scroll', updateActiveNav);

    function updateActiveNav() {
        let scrollPosition = window.scrollY + 100; // Offset for fixed navbar
        let viewportHeight = window.innerHeight; // Height of the visible part of the window

        navItems.forEach((link) => {
            const section = document.querySelector(link.getAttribute('href')); // Get section linked to the navigation item

            // Get the middle point of the section
            let sectionMiddle = section.offsetTop + section.offsetHeight / 2;

            // Check if the middle of the section is within the viewport
            if (
                sectionMiddle >= scrollPosition && // Section's middle is past the scroll position
                sectionMiddle <= scrollPosition + viewportHeight // Section's middle is within the viewport height
            ) {
                moveUnderline(link); // Move the underline to the currently visible section
            }
        });
    }

    // Function to animate underline
    function moveUnderline(link) {
        const linkPosition = link.getBoundingClientRect(); // Get position of the link
        const underline = link.querySelector('.underline'); // Get underline element

        // Set the underline's position and width
        underline.style.left = `${linkPosition.left + linkPosition.width / 2 - underline.offsetWidth / 2}px`;
        underline.style.width = `${linkPosition.width}px`; // Set width to match the link's width
    }

    // Function to smoothly scroll to the section when a link is clicked
    function scrollToSection(item) {
        const targetSection = document.querySelector(item.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Adjust this based on navbar height
            behavior: 'smooth'
        });
    }
});
