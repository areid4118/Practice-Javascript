/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
export class Modal {
	constructor(contentId) {
		this.contentTemplateEl = document.getElementById(`${contentId}`);
		this.modalTemplateEl = document.getElementById('modal-template');
	}

	show() {
		const modalElements = document.importNode(this.modalTemplateEl.content, true);
		// Using this instead of const makes the varibles avalibe for all methods in the  class
		this.modalElement = modalElements.querySelector('.modal');
		this.backdropElement = modalElements.querySelector('.backdrop');
		const contentElement = document.importNode(this.contentTemplateEl.content, true);

		this.modalElement.appendChild(contentElement);

		// have to use this beacuse above they were defined with this not const
		document.body.insertAdjacentElement('afterbegin', this.modalElement);
		document.body.insertAdjacentElement('afterbegin', this.backdropElement);
	}

	hide() {
		// checking if there is a modal element showing
		if (this.modalElement) {
			document.body.removeChild(this.modalElement);
			document.body.removeChild(this.backdropElement);
			this.modalElement = null;
			this.backdropElement = null;
		}
	}
}
