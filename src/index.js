// Swiper
const swiper = new Swiper('.swiper-container', {
	speed: 400,
	spaceBetween: 300,
	effect: 'flip',
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// Navigation Physics
const { styler, spring, listen, pointer, value } = window.popmotion;

const navBrand = document.querySelector('.nav__brand');
const divStyler = styler(navBrand);
const brandXY = value({ x: 0, y: 0 }, divStyler.set);

listen(navBrand, 'mousedown touchstart').start((e) => {
	e.preventDefault();
	pointer(brandXY.get()).start(brandXY);
});

listen(document, 'mouseup touchend').start(() => {
	spring({
		from: brandXY.get(),
		velocity: brandXY.getVelocity(),
		to: { x: 0, y: 0 },
		stiffness: 200,
		// mass: 1,
		// damping: 10
	}).start(brandXY);
});
