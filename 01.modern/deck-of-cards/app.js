// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
// Pick a random value from:
// ---- 2,3,4,5,6,7,8,9,10,J,Q,K,A
// Pick a random suit from:
// ---- clubs,spades, hearts, diamonds
// Return both in an object

function getCard() {
	const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
	const randomValuesLength = Math.floor(Math.random() * values.length);
	const randomValue = values[randomValuesLength];

	const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
	const randomSuitsLength = Math.floor(Math.random() * suits.length);
	const randomSuit = suits[randomSuitsLength];

	const randomCard = {
		value: randomValue,
		suit: randomSuit,
	};

	return randomCard;
}

console.log(getCard());
