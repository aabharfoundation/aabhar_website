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

	// Smooth scrolling functionality for multiple sections
	const sections = {
		lifeStoryScroll: document.querySelector('.life-story-scroll'),
		galleryScroll: document.querySelector('.gallery-scroll'),
		ourProjectScroll: document.querySelector('.our-project-scroll')
	};

	Object.keys(sections).forEach(section => {
		const element = sections[section];
		if (element) {
			let isScrolling = false;

			element.addEventListener('touchstart', () => isScrolling = true);
			element.addEventListener('touchend', () => isScrolling = false);

			setInterval(() => {
				if (!isScrolling) {
					element.scrollBy({ left: 1, behavior: 'smooth' });
				}
			}, 20);
		}
	});
});
