const fetchData = async (searchTerm) => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: 'd9835cc5',
			s: searchTerm,
		},
	});

	// used to handle errors
	if (response.data.Error) {
		return [];
	}

	// console.log(response.data);
	return response.data.Search;
};

const input = document.querySelector('input');

// only calls the api after 1 second
let timeoutId;
const onInput = (event) => {
	if (timeoutId) {
		clearTimeout(timeoutId);
	}

	// need async await beacuse axios returns a promise
	timeoutId = setTimeout(async () => {
		const movies = await fetchData(event.target.value);
		console.log(movies);
	}, 1000);
};

input.addEventListener('input', onInput);
