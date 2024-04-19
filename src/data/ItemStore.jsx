import { create } from "zustand";
import images from "./menu-img.json";
import { saveFoodToApi, loadFoodFromApi, deleteFoodFromApi } from "../components/atoms/apiConnection";

// export default ItemStore;

export const useItemStore = create((set) => ({
	images: images.items,
	selectedImageUrl: "",
	setImages: (images) => set({ images }),
	setSelectedImageUrl: (url) => set({ selectedImageUrl: url }),
}));

export const useOverlayStore = create((set) => ({
	overlayVisible: false,
	toggleOverlay: () => set((state) => ({ overlayVisible: !state.overlayVisible })),
}));

export const useCartStore = create((set) => ({
	cartStuff: 0,
	addToCart: () =>
		set((state) => ({
			cartStuff: state.cartStuff + 1,
		})),

	removeFromCart: () =>
		set((state) => ({
			cartStuff: state.cartStuff - 1,
		})),
	totalSum: 0,
}));

export const useLangosStore = create((set) => ({
	category: "Food", // Default category
	drinkItems: [],
	foodItems: [],
	addDrinkItem: (drinkItem) =>
		set((state) => {
			const image =
				useItemStore.getState().selectedImageUrl || drinkItem.image || useItemStore.getState().images[0].img;
			const newDrinkItem = { ...drinkItem, image };

			// Save the new drink item to the API
			saveFoodToApi(newDrinkItem)
				.then(() => {
					// Load from the API after saving has resolved
					loadFoodFromApi()
						.then((apiData) => {
							// Assuming apiData contains an array of drink items
							set({ drinkItems: apiData.drinks || [] });
						})
						.catch((error) => {
							console.error("Failed to load drink items from API", error);
						});
				})
				.catch((error) => {
					console.error("Failed to save drink item to API", error);
				});

			return state;
		}),

	addFoodItem: (foodItem) =>
		set((state) => {
			const image = useItemStore.getState().selectedImageUrl || foodItem.image || useItemStore.getState().images[0].img;
			const newFoodItem = { ...foodItem, image };

			saveFoodToApi(newFoodItem)
				.then(() => {
					// Load from api
					loadFoodFromApi()
						.then((apiData) => {
							set({ foodItems: apiData.food || [] });
						})
						.catch((error) => {
							console.error("Failed to load food items from API", error);
						});
				})
				.catch((error) => {
					console.error("Failed to save food item to API", error);
				});

			return state;
		}),
	deleteItem: async (itemId, category) => {
		try {
			await deleteFoodFromApi(itemId, category);
			await loadFoodFromApi();
		} catch (error) {
			console.error("Failed to delete item from API", error);
		}
	},
	
}));
