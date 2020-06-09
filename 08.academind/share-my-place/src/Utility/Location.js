/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/prefer-default-export
const API_KEY = 'AIzaSyAakGOfrNPUY_uwVZ4nq-d74dGQcrcb1z0';

export async function getCoordsFromAddress(address) {
	const urlAddress = encodeURI(address);
	const response = await fetch(
		`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${API_KEY}`,
	);
	if (!response.ok) {
		throw new Error('Failed to fetch coordinates. Please try again!');
	}
	const data = await response.json();
	if (data.error_message) {
		throw new Error(data.error_message);
	}

	const coordinates = data.results[0].geometry.location;
	return coordinates;
}

// export function getCoordsFromAddress(address) {
// 	const urlAddress = encodeURI(address);

// 	axios
// 		.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${API_KEY}`)
// 		.then((response) => {
// 			const coordinates = response.data.results[0].geometry.location;
// 			return coordinates;
// 		})
// 		.catch((error) => console.log(error));
// }
