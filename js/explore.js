const slider = document.querySelector('.explore__slider');
const img = document.querySelector('.img2');

slider.addEventListener('input', (e) => {
	img.style.width = `${e.target.value}%`;
});
