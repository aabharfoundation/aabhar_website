I have the css as you mentioned please change the js accordingly again, sharing you existing file. The activeness of section name is not required, only the line animation is required.
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
        item.classList.add('active'); // Add 'active' class to the current section's link
        item.querySelector('.underline').style.width = '100%'; // Expand the underline
    });
});

    // Highlight the active navigation link based on scroll position
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
            navItems.forEach(link => {
                link.classList.remove('active'); // Remove 'active' class from all links
                link.querySelector('.underline').style.width = '0'; // Reset the underline width
            });

            link.classList.add('active'); // Add 'active' class to the current section's link
            link.querySelector('.underline').style.width = '100%'; // Expand the underline
        }
    });
}
});
