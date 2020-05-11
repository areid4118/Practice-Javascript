/* eslint-disable radix */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
const computerGuess = () => {
	const max = 5;
	const min = 0;
	const numberRange = Math.floor(Math.random() * (max - min + 1)) + min;
	return numberRange;
};

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
	const userTyped = parseInt(document.querySelector('input').value);
	const cpuGuess = computerGuess();

	if (Number.isNaN(userTyped) || userTyped > 5 || userTyped < 0) {
		return alert('Please guess a valid number between 0 - 5');
	}

	if (userTyped === cpuGuess) {
		alert(
			`You are a wizard!. You guessed ${userTyped} fingers. I was holding ${cpuGuess} fingers.`
		);
	} else {
		alert(`You are human. I was holding ${cpuGuess} fingers.`);
	}
});
