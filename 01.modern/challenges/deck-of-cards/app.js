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

function randomPick(arrayName) {
	const randomArrayIndex = Math.floor(Math.random() * arrayName.length);
	return arrayName[randomArrayIndex];
}

function getCard() {
	const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
	const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

	const randomValue = randomPick(values);
	const randomSuit = randomPick(suits);

	const randomCard = { value: randomValue, suit: randomSuit };
	return randomCard;
}

console.log(getCard());
