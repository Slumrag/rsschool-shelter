import './main.scss';
import './main.html';
import burgerHandler from '/index.js';
burgerHandler();

// const logo = document.querySelector('.header__logo');
// const burger = document.querySelector('.header__burger');
// const menu = document.querySelector('.header__menu');
// const content = document.querySelector('.header__content');
// const mql = window.matchMedia('screen and (max-width:767px)');
// const burgerElements = [burger, logo, menu, content];
// //removes active class from burger menu on resizing
// mql.addEventListener('change', () => {
// 	burgerElements.forEach((el) => el.classList.remove('_active'));
// 	console.log('resize');
// });
// // toggles active class on burger click
// burger.addEventListener('click', () => {
// 	burgerElements.forEach((el) => el.classList.toggle('_active'));
// });
