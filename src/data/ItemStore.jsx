import { create } from "zustand";
import images from "./menu-img.json";

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
  
