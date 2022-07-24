import './index.html';
// import 'main.js';
import Pets from '/assets/data/pets.json';
const petsImages = importAll(
	require.context('/assets/img/pets', false, /\.(png)$/)
);
function burgerHandler() {
	const logo = document.querySelector('.header__logo');
	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.header__menu');
	const content = document.querySelector('.header__content');
	// const header = document.querySelector('.header');
	const mql = window.matchMedia('screen and (max-width:767px)');
	const burgerElements = [burger, logo, menu, content];

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
//returns object of URLs referinsing static file
//used with r=require.context(path,false,regexp)
function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
function shuffleArr(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}
function popUpHandler(params) {
	const mwPrefix = 'modal-window';
	const modalWindow = document.querySelector(`.${mwPrefix}`);
	document.addEventListener('click', (e) => {
		// console.log(e.target.closest('.card'));
		if (e.target.closest('.card')) {
			let cardId = e.target.classList.contains('card')
				? e.target.id
				: e.target.parentElement.closest('.card').id;
			renderWindow(cardId);
			modalWindow.classList.remove('_display-none');
		}
		if (
			e.target.closest(`.${mwPrefix}`) ||
			e.target.closest(`.${mwPrefix}__close`)
		) {
			modalWindow.classList.add('_display-none');
		}
	});
	function renderWindow(cardId) {
		// const petsImages
		const petInfo = Pets.find((el) => el.name.toLowerCase() === cardId);
		modalWindow.querySelector(`.${mwPrefix}__name`).innerText =
			petInfo.name;
		modalWindow.querySelector(
			`.${mwPrefix}__breed`
		).innerText = `${petInfo.type} - ${petInfo.breed}`;
		modalWindow.querySelector(`.${mwPrefix}__image`).src =
			petsImages[petInfo.img];
		modalWindow.querySelector(`.${mwPrefix}__image`).alt =
			petInfo.name.toLowerCase();
		modalWindow.querySelector(`.${mwPrefix}__description`).innerText =
			petInfo.description;
		document.getElementById('age').innerText = ` ${petInfo.age}`;
		document.getElementById(
			'inoculations'
		).innerText = ` ${petInfo.inoculations.join(', ')}`;
		document.getElementById(
			'diseases'
		).innerText = ` ${petInfo.diseases.join(', ')}`;
		document.getElementById(
			'parasites'
		).innerText = ` ${petInfo.parasites.join(', ')}`;
		// console.log(petInfo);
	}
	// console.log('popup');
}
export {
	burgerHandler,
	importAll,
	getRandomIntInclusive,
	shuffleArr,
	popUpHandler,
};