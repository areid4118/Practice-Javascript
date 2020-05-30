// GET REQUEST
// used to get data from an api
function getTodos() {
	// _limit= 5 is the params which you can change
	// params: {_limit=5}
	// method: get
	axios
		.get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
			timeout: 5000,
		})
		.then((response) => showOutput(response))
		.catch((error) => console.error(error));
}

// POST REQUEST
// used to create data or post
function addTodo() {
	axios
		.post('https://jsonplaceholder.typicode.com/todos?_limit=5', {
			title: 'New Todo',
			completed: false,
		})
		.then((response) => showOutput(response))
		.catch((error) => console.error(error));
}

// PUT/PATCH REQUEST
// used to update data
function updateTodo() {
	axios
		.put('https://jsonplaceholder.typicode.com/todos/1', {
			title: 'Updated Todo',
			completed: true,
		})
		.then((response) => showOutput(response))
		.catch((error) => console.error(error));
}

// DELETE REQUEST
// Delete data
function removeTodo() {
	// do not need to pass anything in the second argument becuase you are juse deleting the
	axios
		.delete('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => showOutput(response))
		.catch((error) => console.error(error));
}

// INTERCEPTING REQUESTS & RESPONSES
// IMPORTANT this keeps a log of all the request you make
axios.interceptors.request.use(
	(config) => {
		console.log(
			`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`,
		);

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// Show output in browser
function showOutput(res) {
	document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
