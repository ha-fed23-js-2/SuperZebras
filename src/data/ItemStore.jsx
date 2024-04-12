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