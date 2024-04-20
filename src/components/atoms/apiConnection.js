const baseUrl = 'https://forverkliga.se/JavaScript/api/jsonStore.php';
const key = 'SuperZebras';
const url = `${baseUrl}?method=save&key=${key}`;

async function saveFoodToApi(newItem) {
	console.log('Saving new item to API:', newItem);
	const currentData = await loadFoodFromApi();

	// if shit doesnt exist, make an empty array
	if (!currentData.food) {
		currentData.food = [];
	}
	if (!currentData.drinks) {
		currentData.drinks = [];
	}
	// make sure these are arrays otherwise everything breaks
	const newFood = Array.isArray(newItem.food) ? newItem.food : [newItem.food];
	const newDrinks = Array.isArray(newItem.drinks) ? newItem.drinks : [newItem.drinks];

	const updatedData = {
		food: [
			...currentData.food.filter(item => !item || item.name !== newItem.food.name),
			...newFood.map(item => item ? { ...item, imageUrl: item.imageUrl || "" } : {})
		],
		drinks: [
			...currentData.drinks.filter(drink => !drink || drink.name !== newItem.drinks.name),
			...newDrinks.map(drink => drink ? { ...drink, imageUrl: drink.imageUrl || "" } : {})
		],
	};

	console.log('Saving data to API:', updatedData);
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
	try {
		const response = await fetch(url, {
			method: 'GET'
		});
		if (!response.ok) {
			throw new Error(`Failed to fetch data with status: ${response.status}`);
		}
		const text = await response.text();
		let result;
		try {
			result = JSON.parse(text);
		} catch (e) {
			throw new Error("Failed to parse response as JSON");
		}

		// Check if its an actual object heh
		if (typeof result !== 'object' || result === null || !result.food || !result.drinks) {
			console.log("API store is empty or corrupt. Initializing default structure.");
			result = { food: [], drinks: [] };
			await saveDataToApi(result);  // because we are async, we await the save
		}

		return result;
	} catch (error) {
		console.error('Error loading food from API:', error);
		return { food: [], drinks: [] };  // if shit breaks we return an empty array to not crash everything
	}
}

async function saveDataToApi(data) {
	const url = `${baseUrl}?method=save&key=${key}`;
	const body = JSON.stringify({
		key: key,  // The API key, though it's also included in the URL, for brevity or something
		value: data  // Wrap the actual data in a 'value' property
	});
	console.log("Sending data to API:", body);
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: body
		});
		if (!response.ok) {
			const errorResponse = await response.text();
			throw new Error(`API save failed with status: ${response.status} - ${errorResponse}`);
		}
		console.log("Data initialized and saved to API.");
	} catch (error) {
		console.error("Failed to save data:", error);
		throw error;  // Rethrow the error to handle it elsewhere if needed, because we kinda want to know what just happened, right?
	}
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
	console.log("newData", newData);
}

// refactored this to not cause brain injuries
async function deleteFoodFromApi(index, category) {
	console.log('Deleting item at index:', index, 'from category:', category);

	const currentData = await loadFoodFromApi();

	// copy of the current data
	let updatedData = { ...currentData };

	// Check if the category is either 'food' or 'drinks'
	if (category === 'food' || category === 'drinks') {
		// new array without the item at the given index
		let updatedCategoryItems = [
			...updatedData[category].slice(0, index),
			...updatedData[category].slice(index + 1)
		];

		// Update the category array updatedData
		updatedData[category] = updatedCategoryItems;
	}


	await updateFoodInApi(updatedData);
}




export { saveFoodToApi, loadFoodFromApi, deleteFoodFromApi };


