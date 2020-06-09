const btn = document.querySelector('#modal-btn');
const modal = document.querySelector('#my-modal');
const closeBtn = document.querySelector('span.close');

const clickOutside = (event) => {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
};

const closeModal = () => {
	modal.style.display = 'none';
};

const openModal = () => {
	modal.style.display = 'block';
};

btn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);
