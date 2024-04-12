const baseUrl = 'https://forverkliga.se/JavaScript/api/jsonStore.php';
const key = 'SuperZebras';

async function saveFoodToApi(newItem) {
	console.log('New item:', newItem);
	const currentData = await loadFoodFromApi(); // we first load the current state
	const updatedData = {
		food: newItem.food ?
			[...currentData.food, ...newItem.food.map(item =>
				({ ...item, imageUrl: item.imageUrl || "" }))] :
			[...currentData.food],
		drinks: newItem.drinks ?
			[...currentData.drinks, ...newItem.drinks.map(drink =>
				({ ...drink, imageUrl: drink.imageUrl || "" }))] :
			[...currentData.drinks],
	};
	console.log('Saving data to API:', updatedData);
	const url = `${baseUrl}?method=save`;
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			key: key,
			value: updatedData,
		}),
	});
	if (!response.ok) {
		throw new Error(`API save failed with status: ${response.status}`);
	}
}


async function loadFoodFromApi() {
	const url = baseUrl + '?method=load&key=' + key;
	const response = await fetch(url, {
		method: 'GET'
	});
	// const data = await response.json();
	console.log('loadFromApi response ok? ', response.ok);
	let result = await response.json();
	console.log('loadFromApi result: ', result);
	return result;
}

async function updateFoodInApi(newData) {
	const url = `${baseUrl}?method=save`;
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			key: key,
			value: newData,
		}),
	});
	if (!response.ok) {
		throw new Error(`API update failed with status: ${response.status}`);
	}
}

async function deleteFoodFromApi(index, category) {
	console.log('Deleting item at index:', index, 'from category:', category);
	const currentData = await loadFoodFromApi();
	const updatedData = {
		food: category === 'food' ? [...currentData.food.slice(0, index), ...currentData.food.slice(index + 1)] : currentData.food,
		drinks: category === 'drinks' ? [...currentData.drinks.slice(0, index), ...currentData.drinks.slice(index + 1)] : currentData.drinks,
	};
	await updateFoodInApi(updatedData);
}




export { saveFoodToApi, loadFoodFromApi, deleteFoodFromApi };


