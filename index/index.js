document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation buttons
  const navButtons = document.querySelectorAll('.nav-button');
  navButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default button behavior
      const targetSectionId = this.getAttribute('data-target');
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Toggle the menu visibility for mobile view
  function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle("responsive"); // Toggle the 'responsive' class on the menu
  }

  // Add click event to the hamburger menu button to toggle the menu
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", toggleMenu);
  }
});
