const countdown = document.querySelector('.countdown');

// Set Launvh Date (get time turns the date into millisecodns)
const launchDate = new Date('July 14, 2020 16:00:00').getTime();

// Udates every 1 second
const intvl = setInterval(() => {
	// get todays date and time (ms)
	// New date gives you the current date when nothing is passed in
	const now = new Date().getTime();

	// Distance from now to the launch
	const distance = launchDate - now;

	// Time calculations
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	countdown.innerHTML = `
      <div>${days}<span>Days</span></div>
      <div>${hours}<span>Hours</span></div>
      <div>${mins}<span>Minutes</span></div>
      <div>${seconds}<span>Seconds</span></div>   
   `;

	// If the countdown has expired
	if (distance < 0) {
		// Stop countdown
		clearInterval(intvl);
		// Style and output text
		countdown.style.color = '#17a2b8';
		countdown.innerHTML = 'Launched!';
	}
}, 1000);
