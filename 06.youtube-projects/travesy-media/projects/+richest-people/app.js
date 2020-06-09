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

function swap(startIndex, endIndex) {
	const itemOne = listItems[startIndex].querySelector('.draggable');
	const itemTwo = listItems[endIndex].querySelector('.draggable');

	listItems[endIndex].appendChild(itemOne);
	listItems[startIndex].appendChild(itemTwo);
}

// dragStartIndex
let dragStartIndex;

function dragStart() {
	dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter(event) {
	event.preventDefault();
}

function dragLeave() {
	this.classList.remove('over');
}

function dragOver(event) {
	event.preventDefault();
	this.classList.add('over');
}

function dragDrop() {
	this.classList.remove('over');
	const dragEndIndex = +this.closest('li').getAttribute('data-index');
	swap(dragStartIndex, dragEndIndex);
}

const addEvnentListeners = () => {
	const draggables = document.querySelectorAll('.draggable');
	const dragListItems = document.querySelectorAll('.draggable-list li');

	// think about changing this
	draggables.forEach((draggable) => {
		draggable.addEventListener('dragstart', dragStart);
	});

	dragListItems.forEach((dragListItem) => {
		dragListItem.addEventListener('dragenter', dragEnter);
		dragListItem.addEventListener('dragleave', dragLeave);
		dragListItem.addEventListener('dragover', dragOver);
		dragListItem.addEventListener('drop', dragDrop);
	});
};

const createList = () => {
	[...richestPeople]
		.map((name) => ({ value: name, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map((idk) => idk.value)
		.forEach((person, index) => {
			const li = document.createElement('li');
			li.setAttribute('data-index', index);

			li.innerHTML = `
			<span class="number">${index + 1}</span>
			<div class="draggable" draggable="true">
				<p class="person-name">${person}</p>
				<i class="fas fa-grip-lines"></i>
			</div>
		`;

			listItems.push(li);

			draggable_list.appendChild(li);
		});

	addEvnentListeners();
};

createList();

const checkOrder = () => {
	listItems.forEach((item, index) => {
		if (richestPeople[index] === item.querySelector('.draggable').innerText.trim()) {
			item.classList.add('right');
			item.classList.remove('wrong');
		} else {
			item.classList.add('wrong');
			item.classList.remove('right');
		}
	});
};

check.addEventListener('click', checkOrder);
