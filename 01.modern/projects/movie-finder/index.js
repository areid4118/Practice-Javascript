/* eslint-disable no-undef */
const fetchData = async (searchTerm) => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: '2a680250',
			s: searchTerm,
		},
	});

	return response.data.Search;
};

const input = document.querySelector('input');

const onInput = async (event) => {
	const movies = await fetchData(event.target.value);
	console.log(movies);
};

input.addEventListener('input', debounce(onInput, 500));
