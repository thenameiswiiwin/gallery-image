const prevBtn = document.querySelector('.btn--prev');
const nextBtn = document.querySelector('.btn--next');
const images = document.querySelectorAll('.gallery__image');
let currentlySelected = 0;

prevBtn.addEventListener('click', () => {
	images[currentlySelected].classList.remove('gallery__image--active');
	currentlySelected--;
	images[currentlySelected].classList.add('gallery__image--active');
	nextBtn.disabled = false;

	if (currentlySelected === 0) prevBtn.disabled = true;
});

nextBtn.addEventListener('click', () => {
	images[currentlySelected].classList.remove('gallery__image--active');
	currentlySelected++;
	images[currentlySelected].classList.add('gallery__image--active');
	prevBtn.disabled = false;

	if (images.length === currentlySelected + 1) nextBtn.disabled = true;
});
