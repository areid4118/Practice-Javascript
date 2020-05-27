/* ==========================
   Basic Password Checker 
   ========================= */

// const PASSWORD = 'hello world';
// let repsonse;

// while (repsonse !== PASSWORD) {
// 	repsonse = window.prompt('Enter Password');
// }
// alert("That's correct");

/* ==========================
   Password Limit
   ========================= */

const PASSWORD = 'hello world';
let repsonse;
let ENTRY_COUNT = 0;
const ENTRY_LIMIT = 3;
let ERROR = false;

while (repsonse !== PASSWORD && !ERROR) {
	if (ENTRY_COUNT < ENTRY_LIMIT) {
		repsonse = prompt('Enter Password');
		// Keeps track of number of tries
		ENTRY_COUNT += 1;
	} else {
		ERROR = true;
	}
}
if (ERROR) {
	alert('Too many entries');
} else {
	alert("That's correct");
}
