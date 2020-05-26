// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
	let string = '';
	for (let i = 0; i < num; i += 1) {
		string += str;
	}
	return num < 0 ? '' : string;
}

repeatStringNumTimes('*', 3);

// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".
// The built-in repeat() method should not be used.
// repeatStringNumTimes("abc", 0) should return "".
