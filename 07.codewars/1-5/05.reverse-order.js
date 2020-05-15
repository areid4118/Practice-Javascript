/* eslint-disable linebreak-style */
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
	const wordSplit = str.split('');
	const reverse = wordSplit.reverse();
	const joinWords = reverse.join('');
	const splitAgain = joinWords.split(' ');
	const reverseAgain = splitAgain.reverse();
	const joinWordsAgain = reverseAgain.join(' ');
	return joinWordsAgain;
}

console.log(reverseWords('double  spaces'));
// console.clear();
