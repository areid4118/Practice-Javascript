// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(numbersArray) {
	let total = 0;
	for (const number of numbersArray) {
		total += number;
	}
	const average = total / numbersArray.length;
	return average;
}

console.log(avg([0, 100, 25]));
