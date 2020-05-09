// Convert number to reversed array of digits
// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
	const numString = n.toString();
	const numArry = Array.from(numString);
	const reverseArry = numArry.reverse();
	const convertToNums = reverseArry.map((x) => Number(x));
	return convertToNums;
}

digitize(348597);
