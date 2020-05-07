let arr = [
	[1, 2],
	[3, 4],
	[5, 6],
];

function multiplyAll(arr) {
	var product = 1;
	// Only change code below this line
	for (let i = 0; i < arr.length; i += 1) {
		for (let j = 0; j < arr.length; j += 1) {
			console.log(arr[i][j]);
		}
	}
	// Only change code above this line
	return product;
}

multiplyAll([
	[1, 2],
	[3, 4],
	[5, 6, 7],
]);
// multiplyAll should return 6