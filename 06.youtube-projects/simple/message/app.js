const inputBox = document.querySelector('input');

const clearInput = () => {
	inputBox.value = '';
	inputBox.focus();
};

const sendMessage = () => {
	const newMessage = document.createElement('li');

	newMessage.innerHTML = inputBox.value;
	document.querySelector('ul').append(newMessage);

	return clearInput();
};

document.querySelector('button').addEventListener('click', (event) => {
	event.preventDefault();
	return sendMessage();
});
