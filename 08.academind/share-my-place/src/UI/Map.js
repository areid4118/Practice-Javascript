/* eslint-disable import/prefer-default-export */
/* eslint-disable no-new */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
export class Map {
	constructor(coords) {
		this.createMap(coords);
	}

	createMap(coordinates) {
		// if google maps does not load correctly
		if (!google) {
			alert('Could not load maps correctly - please try again later.');
		}

		//  coordinates refers to the user coordinates
		const map = new google.maps.Map(document.getElementById('map'), {
			center: coordinates,
			zoom: 12,
		});

		// places a marker at the user coordinates on the map created
		new google.maps.Marker({
			position: coordinates,
			map: map,
		});
	}
}
