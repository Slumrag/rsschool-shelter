import './pets.scss';
import './pets.html';
import { burgerHandler, importAll, popUpHandler } from '/index.js';
import Pets from '/assets/data/pets.json';
const petsImages = importAll(
	require.context('/assets/img/pets', false, /\.(png)$/)
);
burgerHandler();
popUpHandler();
