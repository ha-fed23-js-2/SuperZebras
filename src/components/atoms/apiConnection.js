const baseUrl = 'https://forverkliga.se/JavaScript/api/jsonStore.php'
const key = 'SuperZebras'

async function saveFoodToApi(foodAndDrinks) {
	const url = baseUrl + '?method=save'
	console.log('saveFoodToApi sending request to ' + url);
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key: key,
			value: foodAndDrinks  // kan vara hela state
		})
	});
	// If response.ok is true, the request succeeded
	console.log('saveFoodToApi response ok? ', response.ok);
	// TODO: finish this when it's working
}

async function loadFoodFromApi() {
	const url = baseUrl + '?method=load&key=' + key
	const response = await fetch(url, {
		method: 'GET'
	});
	// const data = await response.json();
	console.log('loadFromApi response ok? ', response.ok);
	let result = await response.json()
	console.log('loadFromApi result: ', result);
	return result
}

export { saveFoodToApi, loadFoodFromApi }

