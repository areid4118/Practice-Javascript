// This is the SpeechSynth Browser API
const synth = window.speechSynthesis;

// DOM Elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const body = document.querySelector('body');

let voices = [];

// gets the browser voices on the api
const getVoices = () => {
	voices = synth.getVoices();

	voices.forEach((voice) => {
		const option = document.createElement('option');

		option.textContent = `${voice.name} (${voice.lang})`;

		option.setAttribute('data-lang', voice.lang);
		option.setAttribute('data-name', voice.name);
		voiceSelect.appendChild(option);
	});
};

getVoices();
if (synth.onvoiceschanged !== undefined) {
	synth.onvoiceschanged = getVoices;
}

// Speaking function
const speak = () => {
	// finds out his the voice is alreay speakin
	if (synth.speaking) {
		console.error('aleready speaking');
	}

	if (textInput.value !== '') {
		// add background
		body.style.background = '#141414 url(img/wave.gif)';
		body.style.backgroundRepeat = 'repeat-x';
		body.style.backgroundSize = '100% 100%';

		// Get the text to speak
		// representes the person or voice speaking
		const speakText = new SpeechSynthesisUtterance(textInput.value);

		// Finds out when the voice stops speaking
		speakText.onend = () => {
			console.log('Done speaking');
			body.style.background = '#141414';
		};

		// Speak error
		speakText.onerror = () => {
			console.error('Something went wrong');
		};

		// selected voice
		const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

		// loop through voices
		voices.forEach((voice) => {
			if (voice.name === selectedVoice) {
				speakText.voice = voice;
			}
		});

		// Set pitch and rate
		speakText.rate = rate.value;
		speakText.pitch = pitch.value;

		// Speak
		synth.speak(speakText);
	}
};

textForm.addEventListener('submit', (event) => {
	event.preventDefault();
	speak();
	textInput.blur();
});

// sycnhing the rate slider and value
rate.addEventListener('change', () => {
	rateValue.textContent = rate.value;
	return rateValue.textContent;
});

// sycnhing the pitch slider and value
pitch.addEventListener('change', () => {
	pitchValue.textContent = pitch.value;
	return pitchValue.textContent;
});

// Do not need the code below
// // voice select change
// voiceSelect.addEventListener('change', () => {
// 	speak();
// });
