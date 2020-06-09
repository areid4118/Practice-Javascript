export default {
	search(searchTerm, searchLimit, sortBy) {
		return axios
			.get(
				`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`,
			)
			.then((response) => response.data.data.children.map((data) => data.data))
			.catch((error) => console.log(error));
	},
};
