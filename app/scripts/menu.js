const BURGER_BTN = document.getElementById('navToggle');
const MAIN_NAV = document.querySelector('.main-nav');
const BODY = document.querySelector('.main');

BURGER_BTN.onclick = function() {
	BURGER_BTN.classList.toggle('navBurger--active');
	MAIN_NAV.classList.toggle('main-nav--active');
	BODY.classList.toggle('overflow-hidden');
}