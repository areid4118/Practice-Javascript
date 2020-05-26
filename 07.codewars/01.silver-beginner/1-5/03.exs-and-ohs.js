// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true

function XO(str) {
	let x = 0;
	let o = 0;

	for (let i = 0; i < str.length; i += 1) {
		if (str[i].toLowerCase() === 'x') {
			x = x + 1;
		} else if (str[i].toLowerCase() === 'o') {
			o = o + 1;
		}
	}
	return x === o;
}
