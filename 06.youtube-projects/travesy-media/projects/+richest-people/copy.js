const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
	'Jeff Bezos',
	'Bill Gates',
	'Warren Buffett',
	'Bernard Arnault',
	'Carlos Slim Helu',
	'Amancio Ortega',
	'Larry Ellison',
	'Mark Zuckerberg',
	'Michael Bloomberg',
	'Larry Page',
];

// Store listitems
const listItems = [];

let dragStartIndex;

// par1 is when we first click element, par2 is when we drop it
// makes the elements able to move around
function swapItems(fromIndex, toIndex) {
	const itemOne = listItems[fromIndex].querySelector('.draggable');
	const itemTwo = listItems[toIndex].querySelector('.draggable');

	listItems[toIndex].appendChild(itemOne);
	listItems[fromIndex].appendChild(itemTwo);
}

// gives you the index of the current element being dragged
function dragStart() {
	dragStartIndex = +this.closest('li').getAttribute('data-index');
}

// When you enter a potential drop zone it adds a gray effect
function dragEnter(event) {
	event.preventDefault();
	this.classList.add('over');
}

// When you leave a potential drop zone it remove a gray effect
function dragLeave() {
	this.classList.remove('over');
}

// always prevent
function dragOver(event) {
	event.preventDefault();
}

function dragDrop() {
	const dragEndIndex = +this.getAttribute('data-index');
	swapItems(dragStartIndex, dragEndIndex);

	// gets rid of gray background once dropped
	this.classList.remove('over');
}

// right is green text
// wrong is red text
const checkOrder = () => {
	listItems.forEach((listItem, index) => {
		const personName = listItem.querySelector('.draggable').innerText.trim();

		if (personName !== richestPeople[index]) {
			listItem.classList.add('wrong');
		} else {
			listItem.classList.remove('wrong');
			listItem.classList.add('right');
		}
	});
};

const addEventListeners = () => {
	const draggables = document.querySelectorAll('.draggable');
	const dragListItems = document.querySelectorAll('.draggable-list li');

	draggables.forEach((draggable) => {
		draggable.addEventListener('dragstart', dragStart);
	});

	dragListItems.forEach((item) => {
		item.addEventListener('dragover', dragOver);
		item.addEventListener('drop', dragDrop);
		item.addEventListener('dragenter', dragEnter);
		item.addEventListener('dragleave', dragLeave);
	});
};

// Insert list items into DOM
const createList = () => {
	[...richestPeople]
		.map((a) => ({ value: a, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map((a) => a.value)
		.forEach((person, index) => {
			const listItem = document.createElement('li');

			listItem.setAttribute('data-index', index);

			listItem.innerHTML = `
				<span class="number">${index + 1}</span>
				<div class="draggable" draggable="true">
					<p class="person-name">${person}</p>
					<i class="fas fa-grip-lines"></i>
				</div>
			`;

			listItems.push(listItem);

			draggable_list.appendChild(listItem);
		});

	addEventListeners();
};

createList();


check.addEventListener('click', checkOrder);
