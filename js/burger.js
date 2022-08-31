const burger = document.querySelector('.burger');
const burgerBtn = document.querySelector('.burger__btn');
const burgerExit = document.querySelector('.burger__exit');
const menu = document.querySelector('.header__menu');
const headerText = document.querySelector('.welcome__top-wrapper');

let isMenuOpen = false;

function showMenu() {
	if (burgerBtn.style.display === 'block') {
		menu.style.left = 0;
		burgerBtn.style.display = 'none';
		burgerExit.style.display = 'block';
		headerText.style.opacity = '0';
		isMenuOpen = true;
	} else {
		menu.style.left = -150 + '%';
		burgerBtn.style.display = 'block';
		burgerExit.style.display = 'none';
		headerText.style.opacity = 1;
		isMenuOpen = false;
	}
}

burger.addEventListener('click', showMenu);

function changeMenu(e) {
	if (e.target.className == 'header__link') {
		if (isMenuOpen === true) {
			menu.style.left = -150 + '%';
			burgerBtn.style.display = 'block';
			burgerExit.style.display = 'none';
			headerText.style.opacity = 1;
			isMenuOpen = false;
		}
	}
}
menu.addEventListener('click', changeMenu);
