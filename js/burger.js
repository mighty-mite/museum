const burger = document.querySelector('.burger');
const burgerBtn = document.querySelector('.burger__btn');
const burgerExit = document.querySelector('.burger__exit');
const menu = document.querySelector('.header__menu');
const headerText = document.querySelector('.welcome__top-wrapper');

let isMenuOpen = false;

function showMenu() {
	if (isMenuOpen) {
		menu.style.left = -150 + '%';
		document.body.style.overflow = 'auto';
		document.body.style.height = 'auto';
		burgerBtn.style.display = 'block';
		burgerExit.style.display = 'none';
		headerText.style.opacity = 1;
		isMenuOpen = false;
	} else {
		menu.style.left = 0;
		document.body.style.overflow = 'hidden';
		document.body.style.height = '100vh';
		burgerBtn.style.display = 'none';
		burgerExit.style.display = 'block';
		headerText.style.opacity = '0';
		isMenuOpen = true;
	}
}

burger.addEventListener('click', showMenu);

function changeMenu(e) {
	if (e.target.classList.contains('header__link')) {
		if (isMenuOpen) {
			document.body.style.overflow = 'auto';
			document.body.style.height = 'auto';
			menu.style.left = -150 + '%';
			burgerBtn.style.display = 'block';
			burgerExit.style.display = 'none';
			headerText.style.opacity = 1;
			isMenuOpen = false;
		}
	}
}
menu.addEventListener('click', changeMenu);
