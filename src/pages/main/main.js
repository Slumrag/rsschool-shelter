import './main.scss';
import './main.html';
import {
	burgerHandler,
	importAll,
	getRandomIntInclusive,
	shuffleArr,
} from '/index.js';
import Pets from '/assets/data/pets.json';
burgerHandler();
//importing pets images
//
const petsImages = importAll(
	require.context('/assets/img/pets', false, /\.(png)$/)
);
function sliderHandler(params) {
	const MAX_CARDS = 3; //max number of cards in slider container
	const sliderCards = document.querySelector('.slider__cards');
	const templateCard = sliderCards.children[0].cloneNode(true);
	const cards = [];
	Pets.forEach((element) => {
		let card = {};
		card.id = element.name.toLowerCase();
		card.name = element.name;
		card.img = petsImages[element.img];
		cards.push(card);
	});

	// renders array of cards to slider__cards
	// returns passed array
	function renderCards(pets) {
		if (Array.isArray(pets)) {
			sliderCards.innerHTML = '';
			pets.forEach((element) => {
				let card = templateCard.cloneNode(true);
				card.id = element.id;
				card.querySelector('.card__name').innerText = element.name;
				card.querySelector('img').src = element.img;
				card.querySelector('img').alt = element.id;
				sliderCards.insertAdjacentElement('beforeend', card);
			});
			return pets;
		}
	}
	//returns a subarry of specified length from randomly assigned range
	function sliceRandom(arr, length = arr.length) {
		if (Array.isArray(arr) && length <= arr.length) {
			const startIndex = getRandomIntInclusive(0, arr.length - length);
			const endIndex = startIndex + length;
			return arr.slice(startIndex, endIndex);
		}
	}

	//returns an array of uniqe elements from 2 arrays
	function findUniqe(arr1, arr2) {
		return arr1.filter((el) => !arr2.includes(el));
	}
	shuffleArr(cards);
	let cardsCurrent = renderCards(sliceRandom(cards, MAX_CARDS));
	let cardsRight = sliceRandom(findUniqe(cards, cardsCurrent), MAX_CARDS);
	let cardsLeft = sliceRandom(findUniqe(cards, cardsCurrent), MAX_CARDS);

	document.addEventListener('click', (e) => {
		if (e.target.closest('.slider__left')) {
			let temp = cardsCurrent;
			cardsCurrent = cardsLeft;
			cardsRight = temp;
			cardsLeft = sliceRandom(findUniqe(cards, cardsCurrent), MAX_CARDS);
			// console.log('left');
		}
		if (e.target.closest('.slider__right')) {
			let temp = cardsCurrent;
			cardsCurrent = cardsRight;
			cardsLeft = temp;
			cardsRight = sliceRandom(findUniqe(cards, cardsCurrent), MAX_CARDS);
			// console.log('right');
		}
		renderCards(cardsCurrent);
		shuffleArr(cards);
	});
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
		console.log(petInfo);
	}
	// console.log('popup');
}
sliderHandler();
popUpHandler();
