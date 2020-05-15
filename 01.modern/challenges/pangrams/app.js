// A pangram is a sentence that contains every letter of the alphabet, like:
// "The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

const alphabet = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

function isPangram(sentence) {
	const lowerCaseSentence = sentence.toLowerCase();

	for (let letter of alphabet) {
		if (!lowerCaseSentence.includes(letter)) {
			return false;
		}
	}
	return true;
}

console.log(isPangram('the quick brown fox jumps over the lazy dog'));
