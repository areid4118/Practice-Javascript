import reddit from './redditapi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

const showMessage = (message, className) => {
	const div = document.createElement('div');

	div.className = `alert alert-${className}`;

	div.appendChild(document.createTextNode(message));

	const searchContainer = document.getElementById('search-container');

	const search = document.getElementById('search');

	searchContainer.insertBefore(div, search);

	setTimeout(() => {
		document.querySelector('.alert').remove();
	}, 3000);
};

// This truncate text was found on stack overflow
const truncateText = (text, limit) => {
	// uses a space so it returns full words
	const shortened = text.indexOf(' ', limit);

	// If it cannot find the space at the limit the return the original txt
	// means he text is less than the length
	if (shortened == -1) return text;
	return text.substring(0, shortened);
};

searchForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const searchTerm = searchInput.value;

	// returns only the input that is check
	const sortBy = document.querySelector('input[name="sortby"]:checked').value;

	const searchLimit = document.getElementById('limit').value;

	if (searchTerm === '') {
		showMessage('Please add a search term', 'alert alert-danger');
	}

	searchInput.value = '';

	// comming from other file
	reddit.search(searchTerm, searchLimit, sortBy).then((results) => {
		let output = '<div class="card-columns">';

		results.forEach((post) => {
			const image = post.preview
				? post.preview.images[0].source.url
				: 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';
         output += `
         <div class="card mb-2">
            <img class="card-img-top" src="${image}" alt="Card image cap">
            
            <div class="card-body">
               <h5 class="card-title">${post.title}</h5>
               <p class="card-text">${truncateText(post.selftext, 100)}</p>
               <a href="${post.url}" target="_blank" class="btn btn-primary">Read More</a>

               <hr>
               <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
               <span class="badge badge-dark">Score: ${post.score}</span>
            </div>
         </div>
            `;
		});
		output += '</div>';

		document.getElementById('results').innerHTML = output;
	});
});
