const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = [
	'Backstreet Freestyle - Remix',
	'Touch the Sky - Remix',
	'You & Me - Remix',
	'Tracy Chapman - Fast car',
];

// Keep track of song
let songIndex = 1;

// Update song details (can also work with wave or png or etc)
const loadSong = (song) => {
	title.innerText = song;
	audio.src = `music/${song}.mp3`;
	cover.src = `images/${song}.jpg`;
};

// Initailly load song details into DOM
loadSong(songs[songIndex]);

// Play is an audio api to play
const playSong = () => {
	musicContainer.classList.add('play');
	playBtn.querySelector('i.fas').classList.remove('fa-play');
	playBtn.querySelector('i.fas').classList.add('fa-pause');

	audio.play();
};

// Pause is an audio api method to pause
const pauseSong = () => {
	musicContainer.classList.remove('play');
	playBtn.querySelector('i.fas').classList.add('fa-play');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');

	audio.pause();
};

const prevSong = () => {
	songIndex -= 1;

	// minus 1 because index are zero base
	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}

	loadSong(songs[songIndex]);

	playSong();
};

const nextSong = () => {
	songIndex += 1;

	// minus 1 because index are zero base
	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}

	loadSong(songs[songIndex]);

	playSong();
};

// duration and currentTime are from the audio api
const updateProgress = (event) => {
	const { duration, currentTime } = event.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
};

// this represents the total element of the progress container
// clickX gives you the durtation of where you click or the time you want to go to
function setProgress(event) {
	const width = this.clientWidth;
	const clickX = event.offsetX;
	const duration = audio.duration;

	audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');

	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update (specific to audio api)
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Ended is used on the audio api for when a song ends
audio.addEventListener('ended', nextSong);
