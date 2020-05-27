const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetArray = alphabet.split('');

const encrypt = (sentence) => {
	const sentenceArray = sentence.toLowerCase().split('').reverse();

	const encryption = [];

	for (let i = 0; i < sentenceArray.length; i += 1) {
		if (sentenceArray[i] === ' ') {
			encryption.push(' ');
		} else {
			const letterIndex = alphabetArray.indexOf(sentenceArray[i]);
			if (letterIndex < 10) encryption.push(`0${letterIndex}`);
			else encryption.push(letterIndex);
		}
	}
	return encryption.join('');
};

encrypt('abc Def');

const decrypt = (numbers) => {
	const decryption = [];

	const numSegments = numbers.split(' ');
	for (let i = 0; i < numSegments.length; i += 1) {
		const numSegment = numSegments[i];
		for (let j = 0; j < numSegment.length; j += 2) {
			const alphabetPosition = parseInt(numSegment.substring(j, j + 2));
			decryption.push(alphabet[alphabetPosition]);
		}
		if (i < numSegments.length - 1) {
			decryption.push(' ');
		}
	}

	return decryption.reverse().join('');
};

decrypt('050403 020100');
