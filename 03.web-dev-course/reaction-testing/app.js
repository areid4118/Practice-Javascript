/* eslint-disable no-multi-assign */
const shape = document.querySelector('#shape');
let startTime = new Date().getTime();

const shapeAppears = () => {
	let startTime = new Date().getTime();
	console.warn('cannot figure out how to reset the timer when the shape appears');
	const showShape = (shape.style.display = 'block');
	return showShape;
};

const shapeDisappears = () => {
	const hideShape = (shape.style.display = 'none');
	return hideShape;
};

const timer = () => {
	const endTime = new Date().getTime();
	const timeTaken = (endTime - startTime) / 1000;
	const timeText = document.querySelector('#timerText');
	const updateTimeText = (timeText.textContent = `Your time: ${timeTaken}s`);
	return updateTimeText;
};

const randomMovement = () => {
	const randomY = Math.floor(Math.random() * 100) * 6;
	const randomX = Math.floor(Math.random() * 100) * 10;
	const movement = (shape.style.transform = `translate(${randomX}px, ${randomY}px)`);
	return movement;
};

const randomColor = () => {
	const colorGenerator = Math.floor(Math.random() * 16777215).toString(16);
	const hexColor = `#${colorGenerator}`;
	const shapeColor = (shape.style.backgroundColor = `${hexColor}`);
	return shapeColor;
};

const randomShape = () => {
	const random = Math.floor(Math.random() * 50);
	const borderRadius = (shape.style.borderRadius = `${random}%`);
	return borderRadius;
};

const randomSize = () => {
	const randomWidth = Math.floor(Math.random() * 400) + 100;
	const randomHeight = Math.floor(Math.random() * 250) + 100;
	const height = (shape.style.height = `${randomHeight}px`);
	const width = (shape.style.width = `${randomWidth}px`);
	return height && width;
};

shape.addEventListener('click', () => {
	randomMovement();
	randomColor();
	randomShape();
	randomSize();
	timer();
	shapeDisappears();

	setTimeout(shapeAppears, 1000);
});
