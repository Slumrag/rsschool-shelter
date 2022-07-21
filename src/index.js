import './index.html';
// import 'main.js';
export default function burgerHandler() {
	// const logo = document.querySelector('.header__logo');
	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.header__menu');
	const content = document.querySelector('.header__content');
	const header = document.querySelector('.header');
	const mql = window.matchMedia('screen and (max-width:767px)');
	const burgerElements = [burger, menu, content];

	function toggleBurger() {
		burgerElements.forEach((el) => el.classList.toggle('_active'));
		document.body.classList.toggle('_scroll-lock');
	}
	function disableBurger() {
		burgerElements.forEach((el) => el.classList.remove('_active'));
		document.body.classList.remove('_scroll-lock');
	}
	document.addEventListener('click', (event) => {
		// toggles active class on burger click
		if (event.target.closest('.header__burger')) {
			toggleBurger();
			// console.log('burger');
		}
		// disables burger menu on click outside header menu
		if (event.target.closest('._active') && event.target === content) {
			disableBurger();
			// console.log('not menu active', event.target);
		}
	});
	//removes active class from burger menu on resizing
	mql.addEventListener('change', disableBurger);
}
