// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
	return array.reduce((preValue, curValue) => (String(preValue).length < String(curValue).length ? curValue : preValue));
}

findLongest([1, 10, 100]);
// answer 900
