import './main.scss';
import './main.html';
import {
	burgerHandler,
	popUpHandler,
	// importAll,
	// getRandomIntInclusive,
	shuffleArr,
	findUniqe,
	sliceRandom,
	renderCards,
	Pets,
} from '/index.js';
burgerHandler();
sliderHandler(Pets);
popUpHandler(Pets);
// import Pets from '/assets/data/pets.json';
function sliderHandler(data) {
	const MAX_CARDS = 3; //max number of cards in slider container

	shuffleArr(data);
	let cardsCurrent = renderCards(
		sliceRandom(data, MAX_CARDS),
		'slider__cards'
	);
	let cardsRight = sliceRandom(findUniqe(data, cardsCurrent), MAX_CARDS);
	let cardsLeft = sliceRandom(findUniqe(data, cardsCurrent), MAX_CARDS);

	document.addEventListener('click', (e) => {
		if (e.target.closest('.slider__left')) {
			let temp = cardsCurrent;
			cardsCurrent = cardsLeft;
			cardsRight = temp;
			cardsLeft = sliceRandom(findUniqe(data, cardsCurrent), MAX_CARDS);
			// console.log('left');
			document
				.querySelector('.slider__cards')
				.classList.add('_fade-left');
		}
		if (e.target.closest('.slider__right')) {
			let temp = cardsCurrent;
			cardsCurrent = cardsRight;
			cardsLeft = temp;
			cardsRight = sliceRandom(findUniqe(data, cardsCurrent), MAX_CARDS);
			// console.log('right');
			document
				.querySelector('.slider__cards')
				.classList.add('_fade-right');
		}
		document.addEventListener('animationend', (e) => {
			if (e.target.classList.contains('slider__cards')) {
				// console.log('end animation', e.target);
				document
					.querySelector('.slider__cards')
					.classList.remove('_fade-left', '_fade-right');
				renderCards(cardsCurrent, 'slider__cards');
				shuffleArr(data);
			}
		});
	});
}

// export { popUpHandler };
