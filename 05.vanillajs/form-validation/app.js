const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const fixPassword2 = (password2Message) => password2Message.replace('2', '');

const showError = (input, message) => {
	if (message.indexOf('password2') !== -1) {
		message = fixPassword2(message);
	}

	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = input.nextElementSibling;
	const properCaseMessage = message.charAt(0).toUpperCase() + message.slice(1);
	small.innerHTML = properCaseMessage;
};

const showSuccess = (input) => {
	input.parentElement.className = 'form-control success';
};

const checkEmail = (input) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, 'Email is not valid');
	}
};

const checkPasswordsMatch = (pass, pass2) => {
	if (pass.value !== pass2.value) {
		showError(pass2, 'Passwords do not match');
	}
};

const checkLength = (inputType, min) => {
	if (inputType.value.length < min) {
		showError(inputType, `${inputType.id} must be at least ${min} characters long`);
	}
};

const checkRequired = (inputArr) => {
	inputArr.forEach((input) => {
		if (input.value.trim() === '') {
			showError(input, `${input.id} is required`);
		} else {
			showSuccess(input);
		}
	});
};

form.addEventListener('submit', (event) => {
	event.preventDefault();
	checkRequired([username, email, password, password2]);
	checkLength(username, 3);
	checkLength(password, 6);
	checkEmail(email);
	checkPasswordsMatch(password, password2);
});
