document.addEventListener("DOMContentLoaded", function () {
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
			}});
	});


lifeStoryScroll.addEventListener('touchstart', () => isScrolling = true);
lifeStoryScroll.addEventListener('touchend', () => isScrolling = false);

setInterval(() => {
if (!isScrolling) {
srollLifeStory();
}
}, 20);

galleryScroll.addEventListener('touchstart', () => isScrolling = true);
galleryScroll.addEventListener('touchend', () => isScrolling = false);

setInterval(() => {
if (!isScrolling) {
scrollGallery();
}
}, 20);

ourProjectScroll.addEventListener('touchstart', () => isScrolling = true);
ourProjectScroll.addEventListener('touchend', () => isScrolling = false);

setInterval(() => {
if (!isScrolling) {
scrollOurProject();
}
}, 20);
});
