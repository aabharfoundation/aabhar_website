// Smooth scroll to sections when clicking navigation buttons
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 50, // Adjust for navigation bar offset
        behavior: 'smooth'
    });
}
