const posts = [
	{
		title: 'Post One',
		body: 'THis is post one',
	},
	{
		title: 'Post One',
		body: 'THis is post one',
	},
];

function getPosts() {
	setTimeout(() => {
		let output = '';
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

function createPost(post) {
	// Promises are always written like below
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);

			const error = false;

			// always call the resolve and rejection like functions
			if (!error) {
				resolve();
			} else {
				reject('Error: Something went wrong');
			}
		}, 2000);
	});
}

// Promises use .then and .catch
// the then means to run the create post function then the getPost function
// .catch is if the their is an error
createPost({ title: 'Post Three', body: 'THis is post three' })
	.then(getPosts)
	.catch((error) => console.log(error));

// Option two would be to use async/await
// waits for the createPost function to be done before it runs get post
async function init() {
	await createPost({ title: 'Post Three', body: 'THis is post three' });

	getPosts();
}

init();
