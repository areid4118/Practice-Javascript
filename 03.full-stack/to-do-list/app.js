const submitBtn = document.querySelector('#submitBtn');

// eslint-disable-next-line no-unused-vars
const deleteItem = (elementToDelete) => {
	elementToDelete.parentElement.remove();
};

const createListItem = () => {
	const listGroup = document.querySelector('ul');
	const inputBox = document.querySelector('#userTyped');
	const userTyped = inputBox.value;
	const newListItem = `<li>${userTyped} <button onclick="deleteItem(this)">Delete</button></li>`;

	if (userTyped === '') {
		return alert('Please Enter a value before creating an item');
	}

	listGroup.insertAdjacentHTML('beforeend', newListItem);
	inputBox.value = '';
	inputBox.focus();
};

submitBtn.addEventListener('click', (event) => {
	event.preventDefault();
	return createListItem();
});
