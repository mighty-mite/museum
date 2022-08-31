const prev = document.querySelector('.welcome__prev'),
	next = document.querySelector('.welcome__next'),
	slides = document.querySelectorAll('.welcome__slide'),
	dots = document.querySelectorAll('.welcome__dot'),
	dotsContainer = document.querySelector('.welcome__dots');

let currentNum = document.querySelector('.welcome__current-num');

let index = 0;

function activeSlide(n) {
	for (let slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}

function activeDot(n) {
	for (let dot of dots) {
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
}

function nextSlide() {
	if (index === slides.length - 1) {
		index = 0;
		showActiveSlide(index);
		currentNum.textContent = index + 1;
	} else {
		index++;
		showActiveSlide(index);
		currentNum.textContent = index + 1;
	}
}

function prevSlide() {
	if (index === 0) {
		index = slides.length - 1;
		showActiveSlide(index);
		currentNum.textContent = slides.length;
	} else {
		index--;
		showActiveSlide(index);
		currentNum.textContent = index + 1;
	}
}

function showActiveSlide(i) {
	activeSlide(i);
	activeDot(i);
}

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		showActiveSlide(index);
		currentNum.textContent = indexDot + 1;
	});
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
