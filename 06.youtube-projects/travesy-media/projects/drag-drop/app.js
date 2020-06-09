/* eslint-disable spaced-comment */
/* eslint-disable no-restricted-syntax */
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

/* By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element. This is done by calling the event.preventDefault() method for the ondragover event.
Drag and drop is a very common feature in HTML5. It is when you "grab" an object and drag it to a different location. For more information, see our HTML Tutorial on HTML5 Drag and Drop.*/
// You must cancel the default action for ondragenter and ondragover in order for ondrop to fire.

// Need to add prevent default; for example if you click a link it might activate it but you want to drag
// Cannot use arrow functions beacuse you are using this
// Fill is calling it so its this
// this keyword allows us to refer to any element that has the fill queryselector
// when we had the hold class there i
function dragStart() {
	this.classList.add('hold');
	setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
	this.className = 'fill';
}

// when you move it over a potential destenation
// must preventDefault for dragOver for drop to work
function dragOver(event) {
	event.preventDefault();
}

// when you enter a new potential destenation
function dragEnter(event) {
	event.preventDefault();
	this.classList.add('hovered');
}

// when you leave a potential destenation
function dragLeave() {
	this.className = 'empty';
}

// when you drop on a potential destenation (called drop)
// must preventDefault for dragOver for drop to work
function dragDrop() {
	this.className = 'empty';
	this.append(fill);
}

// dragstart is when you click and hold it
// dragend is when you let go
// Fill listener
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for (const empty of empties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}
