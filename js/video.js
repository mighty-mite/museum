// const videoContainer = document.querySelector('.video__slider'),
//       videoSlider = document.querySelector('.video__row'),
//       prevBtn = document.querySelector('.video__prev'),
//       nextBtn = document.querySelector('.video__next');

// let videoSlides = document.querySelectorAll('.video__item');
// let idx = 1;

// const firstClone = videoSlides[0].cloneNode(true);
// const lastClone = videoSlides[videoSlides.length - 1].cloneNode(true);

// firstClone.id = 'first clone';
// lastClone.id = 'last clone';

// videoSlider.append(firstClone);
// videoSlider.prepend(lastClone);

// let slideWidth = videoSlides[0].clientWidth;
// let margin = window.getComputedStyle(videoSlides[0], null).getPropertyValue('margin-right');

// videoSlider.style.transform = `translateX(${-slideWidth * idx - margin}px)`;

// function nextSlide() {
//     idx++;
//     videoSlider.style.transform = `translateX(${-slideWidth * idx - margin}px)`
// }

// nextBtn.addEventListener('click', nextSlide);

/*          CUSTOM PLAYER               */

const video = document.querySelector('.video__player');
const bigPlayButton = document.querySelector('.video__play-btn');
const playAndPauseBtn = document.querySelector('.video__play-pause');
const playBtn = playAndPauseBtn.querySelector('.video__icon-play');
const pauseBtn = playAndPauseBtn.querySelector('.video__icon-pause');
const volumeBar = document.querySelector('.video__ctrl-vol');

const volumeContainer = document.querySelector('.video__volume');
const volumeBtn = document.querySelector('.video__icon-vol');
const muteBtn = document.querySelector('.video__icon-mute');

const progressBar = document.querySelector('.video__ctrl-vid');

const videoPlayer = document.querySelector('.video__player-wrapper');

let playback = document.querySelector('.video__playback');

function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();

	if (method === 'play') {
		bigPlayButton.style.opacity = 0;
	} else {
		bigPlayButton.style.opacity = 1;
	}
}

function updateButton() {
	if (!this.paused) {
		pauseBtn.style.display = 'none';
		playBtn.style.display = 'block';
	} else {
		pauseBtn.style.display = 'block';
		playBtn.style.display = 'none';
	}
}

function handleVolumeUpdate() {
	video['volume'] = this.value / 100;
	if (+volumeBar.value === 0) {
		volumeBtn.classList.add('inactive');
		muteBtn.classList.add('active');
	} else {
		volumeBtn.classList.remove('inactive');
		muteBtn.classList.remove('active');
	}
}

function handleMute() {
	if (video.volume !== 0) {
		volumeBtn.classList.toggle('inactive');
		muteBtn.classList.toggle('active');

		video.volume = 0;
		volumeBar.value = 0;
		volumeBar.style.background = '#C4C4C4';
	} else {
		volumeBtn.classList.toggle('inactive');
		muteBtn.classList.toggle('active');

		video.volume = 0.5;
		volumeBar.value = 50;
		volumeBar.style.background = `linear-gradient(to right, #710707 0%, #710707 50%, #C4C4C4 50%, #C4C4C4 100%)`;
	}
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.value = percent;
	paintProgressBar();
}

function scrub(e) {
	const scrubTime = (progressBar.value / progressBar.max) * video.duration;
	video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
bigPlayButton.addEventListener('click', togglePlay);
playAndPauseBtn.addEventListener('click', togglePlay);
progressBar.addEventListener('input', scrub);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

volumeBar.addEventListener('input', handleVolumeUpdate);
volumeContainer.addEventListener('click', handleMute);

function paintProgressBar() {
	const value = progressBar.value;
	progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%)`;
}

function paintVolumeBar() {
	const value = this.value;
	this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%)`;
}

progressBar.addEventListener('input', paintProgressBar);
volumeBar.addEventListener('input', paintVolumeBar);

// document.addEventListener("keydown", function(e) {
//     if (e.keyCode == 77) {
//         volumeBtn.classList.toggle('inactive');
//         muteBtn.classList.toggle('active');
//     }

//     if (video.volume !== 0) {

//         video.volume = 0;
//         volumeBar.value = 0;
//         volumeBar.style.background ='#C4C4C4'
//     } else {

//         video.volume = 0.5;
//         volumeBar.value = 50;
//         volumeBar.style.background = `linear-gradient(to right, #710707 0%, #710707 50%, #C4C4C4 50%, #C4C4C4 100%)`;
//     }

//   }, false);

/*            FULLSCREEN              */
// const fullscreen = document.querySelector('.video__icon-full');
const fullscreenContainer = document.querySelector('.video__fullscreen-btns');
const fullscreenOn = document.querySelector('.video__icon-full');
const fullscreenOff = document.querySelector('.video__icon-full-exit');

fullscreenContainer.addEventListener(
	'click',
	function (e) {
		toggleFullScreen();
		console.log('pushed');
	},
	false
);

function toggleFullScreen() {
	if (!document.fullscreenElement) {
		videoPlayer.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
}

function fullscreenInAndOut() {
	if (document.fullscreenElement) {
		fullscreenOn.style.display = 'none';
		fullscreenOff.style.display = 'block';
	} else {
		fullscreenOn.style.display = 'block';
		fullscreenOff.style.display = 'none';
	}
}

videoPlayer.addEventListener('fullscreenchange', fullscreenInAndOut);

// document.addEventListener("keydown", function(e) {
//     if (e.keyCode == 70) {
//       toggleFullScreen();
//       fullscreenInAndOut()
//     }
//   }, false);

document.addEventListener(
	'keydown',
	(e) => {
		if (e.key === 'f' || e.key === 'а') {
			toggleFullScreen();
			fullscreenInAndOut();
		}

		if (e.key === ' ') {
			e.preventDefault();
			togglePlay();
		}

		if (e.key === 'm' || e.key === 'ь') {
			handleMute();
		}
	},
	false
);

function runOnKeys(func, ...codes) {
	let pressed = new Set();

	document.addEventListener('keydown', function (e) {
		pressed.add(e.code);

		for (let code of codes) {
			if (!pressed.has(code)) {
				return;
			}
		}

		pressed.clear;

		func();
	});

	document.addEventListener('keyup', function (e) {
		pressed.delete(e.code);
	});
}

function increasePlaybackRate() {
	if (video.playbackRate > 1.75) return;

	video.playbackRate += 0.25;

	playback.textContent = `${video.playbackRate}x`;
	playback.style.display = 'block';

	setTimeout(() => {
		playback.style.display = 'none';
	}, 750);
}

function decreasePlaybackRate() {
	if (video.playbackRate < 0.5) return;

	video.playbackRate -= 0.25;

	playback.textContent = `${video.playbackRate}x`;
	playback.style.display = 'block';

	setTimeout(() => {
		playback.style.display = 'none';
	}, 750);
}

runOnKeys(increasePlaybackRate, 'ShiftLeft', 'Period');

runOnKeys(decreasePlaybackRate, 'ShiftLeft', 'Comma');
