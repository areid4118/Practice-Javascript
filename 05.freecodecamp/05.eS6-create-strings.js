const result = {
	success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
	failure: ['no-var', 'var-on-top', 'linebreak'],
	skipped: ['id-blacklist', 'no-dup-keys'],
};

function makeList(arr) {
	'use strict';
	// change code below this line
	const resultDisplayArray = [];

	for (let i = 0; i < arr.length; i += 1) {
		resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
	}
	// change code above this line
	return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);
