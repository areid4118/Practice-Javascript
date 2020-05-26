// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
	const lowerCaseString = str.toLowerCase();
	const words = lowerCaseString.split(' ');

	const properCase = words.map((word) => {
		const firstLetter = word.charAt(0);
		const upperCaseFirstLetter = firstLetter.toUpperCase();
		const capitalizeWord = word.replace(firstLetter, upperCaseFirstLetter);

		return capitalizeWord;
	});

	const capitalizeString = properCase.join(' ');

	return capitalizeString;
}

titleCase("I'm a little tea pot");

// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
// titleCase("sHoRt AnD sToUt") should return Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
