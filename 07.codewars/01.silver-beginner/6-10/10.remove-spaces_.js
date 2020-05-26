// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
	const stringArry = x.split(' ').join('');
	// let letter = '';

	// for (let i = 0; i < stringArry.length; i += 1) {
	// 	if (stringArry[i] !== ' ') {
	// 		letter += stringArry[i];
	// 	}
	// }
	return stringArry;
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
