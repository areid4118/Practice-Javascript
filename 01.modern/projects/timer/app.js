// Did not fix the animation from stopping properly or not overflowing
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart() {
		console.log('Timer Started');
	},
	onTick() {
		console.log('Timer just ticked down');
		circle.setAttribute('stroke-dashoffset', currentOffset);
		currentOffset -= 1;
	},
	onComplete() {
		console.log('Timer is completed');
	},
});
