/* eslint-disable no-restricted-syntax */
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
/* ===============================================
	Did not realize all of the requirements
	Not fully right
================================================== */

function translatePigLatin(str) {
	const string = [...str.toLowerCase()];
	const firstLetter = string[0];
	const isVowel =
		firstLetter === 'a' ||
		firstLetter === 'e' ||
		firstLetter === 'i' ||
		firstLetter === 'o' ||
		firstLetter === 'a';

	if (isVowel) {
		let vowelString = '';
		for (const letter of string) {
			vowelString += letter;
		}
		return `${vowelString}way`;
	}

	const stringCopy = [...string];
	const newString = stringCopy.splice(1);

	let fLetter = '';
	for (const letter of stringCopy) {
		fLetter += letter;
	}

	const addEndingLetters = newString.push(`${fLetter}ay`);

	let pigLatin = '';
	for (const letter of newString) {
		pigLatin += letter;
	}

	return pigLatin;
}

translatePigLatin('algorithm');

// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
// Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
