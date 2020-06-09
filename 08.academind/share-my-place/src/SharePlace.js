/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
/* eslint-disable no-useless-return */

import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import { getCoordsFromAddress } from './Utility/Location';

class PlaceFinder {
	constructor() {
		const addressForm = document.querySelector('form');
		const locateUserBtn = document.getElementById('locate-btn');

		// bind makes the handlers is refer to the PlaceFinder class since they have this in front of them
		locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
		addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
	}

	// coordinates should have a lat and lng key which are in the locateUserHandler
	// if there is already is a map then create the orignal map else create a new map. This aviods the function always creating a new map
	selectPlace(coordinates) {
		if (this.map) {
			this.map.createMap(coordinates);
		} else {
			this.map = new Map(coordinates);
		}
	}

	locateUserHandler() {
		if (!navigator.geolocation) {
			alert(
				'Location feature is not avaliable in your broser - please use a more modern browser or manually enter an address',
			);
			return;
		}

		// modal.show and modal.hide are for a loader. I would just add an event listener with a loading gif instead so these can be ignored. Only pay attendtion where they were put
		const modal = new Modal('loading-modal-content', 'Loading location pleast wait');
		modal.show();

		navigator.geolocation.getCurrentPosition(
			(accessGranted) => {
				// coords is a method on geolocation
				const coordinates = {
					lat: accessGranted.coords.latitude,
					lng: accessGranted.coords.longitude,
				};

				this.selectPlace(coordinates);
				modal.hide();
			},
			(accessDenied) => {
				alert('Could not locate you. Please enter an address manually.');
				modal.hide();
			},
		);
	}

	async findAddressHandler(event) {
		event.preventDefault();
		const address = event.target.querySelector('input').value;
		if (!address || address.trim().length === 0) {
			alert('Invalid address entered - please try again.');
			return;
		}

		const modal = new Modal('loading-modal-content', 'Loading location pleast wait');
		modal.show();

		try {
			const coordinates = await getCoordsFromAddress(address);
			this.selectPlace(coordinates);
		} catch (err) {
			alert(err);
		}
		modal.hide();
	}
}

new PlaceFinder();
