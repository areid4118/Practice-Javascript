const search = document.querySelector('#search');
const matchList = document.querySelector('#match-list');

const outputHTML = (matches) => {
	let html = '';

	matches.map((match) => {
		const markup = `
               <div class="card card-body mb-1">
                  <h4>${match.name} (${match.abbr})
                     <span class="text-primary">${match.capital}</span>
                  </h4>
                  <small>Lat: ${match.lat} / Long: ${match.long}</small>
               </div>
            `;
		html += markup;

		return html;
	});

	matchList.innerHTML = html;
	return matchList.innerHTML;
};

const searchStates = (searchText) => {
	axios
		.get('state_capitals.json')
		.then((response) => {
			// Get matches to current text input
			let matches = response.data.filter((state) => {
				const regex = new RegExp(`^${searchText}`, 'gi');
				return state.name.match(regex) || state.abbr.match(regex);
			});

			if (search.value.length === 0) {
				matches = [];
				matchList.innerHTML = '';
			}

			outputHTML(matches);
		})
		.catch((error) => console.error(error));
};

search.addEventListener('input', () => searchStates(search.value));
