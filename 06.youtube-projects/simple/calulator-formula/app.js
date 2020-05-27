/* eslint-disable no-alert */
const numEntered1 = prompt('Enter number 1');
const numEntered2 = prompt('Enter number 2');
const operation = prompt('Math operation');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiple = (a, b) => a * b;
const divide = (a, b) => a / b;

const math = (num1, num2, sign) => {
	const cleanNum1 = parseFloat(num1);
	const cleanNum2 = parseFloat(num2);

	if (sign === 'add') {
		return add(cleanNum1, cleanNum2);
	}

	if (sign === 'subtract') {
		return subtract(cleanNum1, cleanNum2);
	}

	if (sign === 'divide') {
		return divide(cleanNum1, cleanNum2);
	}

	if (sign === 'multiple') {
		return multiple(cleanNum1, cleanNum2);
	}

	return 'Looks like there was a typo';
};

document.write(math(numEntered1, numEntered2, operation));
