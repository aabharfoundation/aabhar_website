document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger'); // Select the hamburger icon
    const navList = document.querySelector('.nav-links'); // Select the navigation links container
    const navItems = document.querySelectorAll('.nav-links li a'); // Select all the navigation links
    
    // Toggle the mobile menu when the hamburger is clicked
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
         // Toggle the 'active' class on the hamburger (for transforming to 'X')
         // Toggle the 'active' class on nav-links (for sliding in the menu)
    });

    // Highlight the active navigation link on click
    navItems.forEach((item) => {
    item.addEventListener('click', function () {
        navItems.forEach(link => {
            link.classList.remove('active'); // Remove 'active' class from all links
            link.querySelector('.underline').style.width = '0'; // Reset the underline width
        });

        // Add 'active' class to the clicked link
        link.classList.add('active'); // Add 'active' class to the current section's link
        link.querySelector('.underline').style.width = '100%'; // Expand the underline
    });
});

    // Highlight the active navigation link based on scroll position
    window.addEventListener('scroll', updateActiveNav);

    function updateActiveNav() {
    const viewportHeight = window.innerHeight; // Get the viewport height
    const scrollPosition = window.scrollY; // Current vertical scroll position

    navItems.forEach((link, index) => {
        const section = document.querySelector(link.getAttribute('href')); // Get the linked section
        const nextSection = index < navItems.length - 1 
                            ? document.querySelector(navItems[index + 1].getAttribute('href')) 
                            : null; // Get the next section if it exists

        const sectionTop = section.offsetTop; // Top position of the current section
        const nextSectionTop = nextSection ? nextSection.offsetTop : Infinity; // Top position of the next section (or infinity if no next section)

        // Check if the next section's top is above 50% of the viewport height
        if (
            scrollPosition >= sectionTop + section.offsetHeight || // Current section is out of the viewport
            (nextSection && scrollPosition + viewportHeight / 3 >= nextSectionTop) // Next section top is above 50% of the viewport
        ) {
            navItems.forEach(link => {
                link.classList.remove('active'); // Reset active class
                link.querySelector('.underline').style.width = '0'; // Reset underline
            });

            if (nextSection) {
                // Activate the next section's link
                navItems[index + 1].classList.add('active');
                navItems[index + 1].querySelector('.underline').style.width = '100%';
            }
        } else if (scrollPosition >= sectionTop) {
            // Activate the current section's link if the scroll is within its range
            navItems.forEach(link => {
                link.classList.remove('active'); // Reset active class
                link.querySelector('.underline').style.width = '0'; // Reset underline
            });

            link.classList.add('active'); // Activate the current section
            link.querySelector('.underline').style.width = '100%'; // Expand the underline
        }
    });
    }
});
