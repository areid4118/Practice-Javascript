const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// const dummyTransactions = [
// 	{ id: 1, text: 'Flower', amount: -20 },
// 	{ id: 2, text: 'Salary', amount: 300 },
// 	{ id: 3, text: 'Book', amount: -10 },
// 	{ id: 4, text: 'Camera', amount: 150 },
// ];

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

// let transactions = dummyTransactions;
// if there is anything in local storage use that else set an empty array
let transactions = localStorage.getItem('transactions') ? localStorageTransactions : [];

// Add transactions to DOM list
const addTransactionDOM = (transaction) => {
	// Get sign
	const sign = transaction.amount < 0 ? '-' : '+';

	const item = document.createElement('li');

	// Add class based on value
	item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

	item.innerHTML = `
      ${transaction.text} <span>${sign}${Math.abs(
		transaction.amount,
	)}</span> <button onclick="removeTransaction(${transaction.id})" class="delete-btn">x</button>
   `;

	list.appendChild(item);
};

// update the balance, income and expense
const updateValues = () => {
	const amounts = transactions.map((transaction) => transaction.amount);

	const total = amounts.reduce((preValue, curValue) => preValue + curValue, 0).toFixed(2);

	const income = amounts
		.filter((item) => item > 0)
		.reduce((preValue, curValue) => preValue + curValue, 0)
		.toFixed(2);

	const expense =
		amounts
			.filter((item) => item < 0)
			.reduce((preValue, curValue) => preValue + curValue, 0)
			.toFixed(2) * -1;

	balance.innerText = `$${total}`;
	money_plus.innerText = `$${income}`;
	money_minus.innerText = `$${expense}`;
};

const init = () => {
	list.innerHTML = '';

	transactions.forEach(addTransactionDOM);
	updateValues();
};

init();

const updateLocalStorage = () => {
	localStorage.setItem('transactions', JSON.stringify(transactions));
};

const removeTransaction = (id) => {
	transactions = transactions.filter((transaction) => transaction.id !== id);

	updateLocalStorage();

	init();
};

const generateID = () => {
	return Math.floor(Math.random() * 1000000000);
};

const addTransaction = (event) => {
	event.preventDefault();

	if (text.value.trim() !== '' || amount.value.trim() !== '') {
		alert('Please enter a text and amount value');
	} else {
		const transaction = {
			id: generateID(),
			text: text.value,
			amount: parseFloat(amount.value),
		};

		transactions.push(transaction);

		addTransactionDOM(transaction);

		updateValues();

		updateLocalStorage();

		text.value = '';
		amount.value = '';
	}
};

form.addEventListener('submit', addTransaction);
