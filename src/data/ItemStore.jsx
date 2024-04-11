import { create } from "zustand";
import images from "./menu-img.json";
import { saveFoodToApi, loadFoodFromApi } from "../components/atoms/apiConnection";

// export default ItemStore;

const img = create((set) => ({
	images,
	setImages: (imgs) => set({ images: imgs }),
}));

export const useItemStore = create((set) => ({
	images: img.getState().images,
	setImages: (imgs) => set({ images: imgs }),
}));

export const useOverlayStore = create((set) => ({
	overlayVisible: false,
	toggleOverlay: () => set((state) => ({ overlayVisible: !state.overlayVisible })),
  }));
  
// export const useMenuStore = create((set) => ({
// 	menuItems: [],
// 	drinkItems: [],
// 	category: "",
// 	setCategory: (category) => set({category}),
// 	addMenuItem: (newMenuItem) => set((state) => {
// 		if (state.category === "Food") {
// 			return {menuItems: [...state.menuItems, newMenuItem]}
// 		} else if (state.category === "Drinks") {
// 			return { drinkItems: [...state.drinkItems, newMenuItem]}
// 		}
// 	}),
// 	saveTheFoodPlease: async () => {
// 		const state = useMenuStore.getState()
// 		const foodAndDrinks = {
// 			food: state.menuItems,
// 			drinks: state.drinkItems
// 		}
// 		await saveFoodToApi(foodAndDrinks)
// 	},
// 	loadTheFoodPlease: async () => {
// 		const data = await loadFoodFromApi()
// 		set({
// 			menuItems: data.food,
// 			drinkItems: data.drinks})
// 	}
// }))

export const useLangosStore = create(set => ({
	drinkItems : [],
	foodItems: [],
	addDrinkItem: (drinkItem) => set(state => ({
		drinkItems: [...state.drinkItems, drinkItem]
	})),
	addFoodItem: (foodItem) => set(state => ({
		foodItems: [...state.foodItems, foodItem]
	}))
}))