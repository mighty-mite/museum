const form = document.querySelector('.buy');
const formBtn = document.querySelector('.tickets__button');
const closeBtn = document.querySelector('.buy__close');
const modalOverlay = document.querySelector('.modal-overlay');

formBtn.addEventListener('click', (e) => {
	e.preventDefault();
	form.style.left = 12.5 + '%';
	form.style.top = 5 + '%';
	modalOverlay.classList.add('open');
});

closeBtn.addEventListener('click', (e) => {
	e.preventDefault();
	form.style.left = -300 + '%';
	modalOverlay.classList.remove('open');
});

modalOverlay.addEventListener('click', () => {
	form.style.left = -300 + '%';
	modalOverlay.classList.remove('open');
});
