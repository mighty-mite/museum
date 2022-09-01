const container = document.querySelector('.gallery__inner-container');
let imgs = [
	'assets/images/galery1.jpg',
	'assets/images/galery2.jpg',
	'assets/images/galery3.jpg',
	'assets/images/galery4.jpg',
	'assets/images/galery5.jpg',
	'assets/images/galery6.jpg',
	'assets/images/galery7.jpg',
	'assets/images/galery8.jpg',
	'assets/images/galery9.jpg',
	'assets/images/galery10.jpg',
	'assets/images/galery11.jpg',
	'assets/images/galery12.jpg',
	'assets/images/galery13.jpg',
	'assets/images/galery14.jpg',
	'assets/images/galery15.jpg',
];

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function addPictures() {
	let arr = shuffle(imgs);
	arr.map((el, i) => {
		const img = `<img class="gallery__img" src="${arr[i]}" alt="galery-picture">`;
		container.innerHTML += img;
	});
}

addPictures();

/*          SLIDE IN            */

const sliderImages = document.querySelectorAll('.gallery__img');

function debounce(func, wait = 20, immediate = true) {
	let timeout;
	return function () {
		let context = this,
			args = arguments;
		let later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

function checkSlide() {
	sliderImages.forEach((sliderImage) => {
		// half way through the image
		const slideInAt =
			window.scrollY + window.innerHeight - sliderImage.height / 75;
		// bottom of the image
		const imageBottom =
			sliderImage.getBoundingClientRect().top +
			window.scrollY +
			sliderImage.height;

		const isHalfShown =
			slideInAt > sliderImage.getBoundingClientRect().top + window.scrollY;

		if (isHalfShown) {
			sliderImage.classList.add('active');
		} else {
			sliderImage.classList.remove('active');
		}
	});
}

window.addEventListener('scroll', debounce(checkSlide));
