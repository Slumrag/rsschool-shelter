import './pets.scss';
import './pets.html';
import {
	burgerHandler,
	popUpHandler,
	renderCards,
	shuffleArr,
	sliceRandom,
	Pets,
} from '/index.js';
burgerHandler();
popUpHandler(Pets);
paginationHandler(Pets);

function paginationHandler(data) {
	const TOTAL_CARDS = 48;
	let cardsPerPage = 8;
	let numberOfPages = 6;
	if (
		window.visualViewport.width < 1280 &&
		window.visualViewport.width >= 768
	) {
		cardsPerPage = 6;
		numberOfPages = 8;
	}
	if (window.visualViewport.width < 768) {
		cardsPerPage = 3;
		numberOfPages = 16;
	}
	const cardPages = [];
	for (let index = 0; index < numberOfPages; index++) {
		cardPages.push(sliceRandom(shuffleArr([...data]), cardsPerPage));
	}
	const navButtons = ['first', 'previous', 'next', 'last'].reduce(
		(acc, curr) => {
			return {
				...acc,
				[curr]: document.getElementById(curr),
			};
		},
		{}
	);
	const pageIndicator = document.getElementById('indicator');
	let pageCounter = 1;
	navButtons['first'].setAttribute('disabled', 'disabled');
	navButtons['previous'].setAttribute('disabled', 'disabled');
	shuffleArr(cardPages[pageCounter - 1]);
	renderCards(cardPages[pageCounter - 1], 'pets__cards');
	document.addEventListener('click', (e) => {
		if (e.target.closest('.navigation__button:not(#indicator)')) {
			switch (e.target.id) {
				case 'first':
					pageCounter = 1;
					// console.log('first', e.target);
					break;
				case 'previous':
					// console.log('previous', e.target);
					if (pageCounter > 1) pageCounter--;
					else {
						pageCounter = 1;
					}
					break;
				case 'next':
					// console.log('next', e.target);
					if (pageCounter < cardPages.length) pageCounter++;
					else {
						pageCounter = cardPages.length;
					}
					break;
				case 'last':
					pageCounter = cardPages.length;
					// console.log('last', e.target);
					break;
				default:
					break;
			}
			if (pageCounter > 1 || pageCounter < cardPages.length) {
				navButtons['last'].removeAttribute('disabled');
				navButtons['next'].removeAttribute('disabled');
				navButtons['first'].removeAttribute('disabled');
				navButtons['previous'].removeAttribute('disabled');
			}
			if (pageCounter <= 1) {
				navButtons['first'].setAttribute('disabled', 'disabled');
				navButtons['previous'].setAttribute('disabled', 'disabled');
			}
			if (pageCounter >= cardPages.length) {
				navButtons['last'].setAttribute('disabled', 'disabled');
				navButtons['next'].setAttribute('disabled', 'disabled');
			}
			renderCards(cardPages[pageCounter - 1], 'pets__cards');
			pageIndicator.innerText = pageCounter;
		}
	});
}
