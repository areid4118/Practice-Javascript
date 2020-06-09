/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// set first image opacity
imgs[0].style.opacity = opacity;

const imgClick = (event) => {
	// reset the opacity of the image
	imgs.forEach((img) => (img.style.opacity = 1));

	// Changed the current image src to the clicked image
	current.src = event.target.src;

	// Add gade in class
	current.classList.add('fade-in');

	// Remove fade in class in .5 second (Do not need to redo)
	setTimeout(() => current.classList.remove('fade-in'), 500);

	// Change the clicked image to opacity we have defined
	event.target.style.opacity = opacity;
};

imgs.forEach((image) => image.addEventListener('click', imgClick));

// const mainImg = document.querySelector('.main-img img');
// const imgs = document.querySelectorAll('.imgs img');

// const updateImg = (event) => {
// 	mainImg.src = event.target.src;
// };

// imgs.forEach((img) => img.addEventListener('click', updateImg));
