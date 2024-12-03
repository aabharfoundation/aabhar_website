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
// Select all the navigation items and the underline element
const navItems = document.querySelectorAll('.nav-links a');
const underline = document.querySelector('.underline');
let isClicked = false; // Flag to track if a section was clicked

window.addEventListener('scroll', updateActiveNav);
navItems.forEach(item => {
    item.addEventListener('click', handleNavClick);
});

function updateActiveNav() {
    if (isClicked) return; // If clicked, don't run the scroll logic

    let scrollPosition = window.scrollY + 100; // Offset for fixed navbar

    navItems.forEach((link) => {
        const section = document.querySelector(link.getAttribute('href')); // Get section linked to the navigation item

        if (
            section.offsetTop <= scrollPosition && // If the section is in view
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {
            navItems.forEach(link => link.classList.remove('active')); // Remove 'active' class from all links
            link.classList.add('active'); // Add 'active' class to the current section's link

            // Move the underline to the current active link
            moveUnderline(link);
        }
    });
}

function handleNavClick(event) {
    // Prevent default link behavior
    event.preventDefault();

    // Set the clicked flag to true
    isClicked = true;

    const targetSection = document.querySelector(event.target.getAttribute('href'));

    // Scroll to the section manually with offset for fixed navbar
    window.scrollTo({
        top: targetSection.offsetTop - 80, // Adjust this value based on your navbar height
        behavior: 'smooth'
    });

    // Add active class and move the underline to the clicked section
    navItems.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
    moveUnderline(event.target);

    // Reset the isClicked flag after a short delay (enough to allow scroll to complete)
    setTimeout(() => {
        isClicked = false;
    }, 500); // Adjust timeout as needed based on your scroll duration
}

function moveUnderline(link) {
    // Get the position of the clicked link and adjust the underline position
    const linkPosition = link.getBoundingClientRect();
    const underline = link.querySelector('.underline');

    // Move the underline to the center of the link
    underline.style.left = `${linkPosition.left + linkPosition.width / 2 - underline.offsetWidth / 2}px`;
    underline.style.width = `${linkPosition.width}px`; // Make the underline span the width of the link
}

});
