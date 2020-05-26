function myfuntion(myArr) {
	let total = 0;
	for (let num of myArr) {
		total += num;
	}
	return total;
}
console.log(myfuntion([2, 3, 4, 5, 6]));
