import { create } from "zustand";
import img from "./menu-img.json";

export const ImageStore = create(() => ({
	images: img,
}));

// export default ItemStore;

export const FoodItems = {
	items: [
		{
			id: 1,
			title: "basic bitch",
			ingredients: "ost, och tråkig sourcream",
			price: "65 spänn",
		},
		{
			id: 2,
			title: "fancy bitch",
			ingredients: "Ost, tråkig sourcream och renjävel",
			price: "75 spänn",
		},
		{
			id: 3,
			title: "royal douche",
			ingredients: "västerbotten ost, rysk kaviar, picklad jävla lök",
			price: "125 spänn",
		},
	],
};
export const DrinkItems = {
	items: [
		{
			id: 1,
			title: "drunk bastard",
			ingredients: "simpel jävla öl på tapp",
			price: "49 spänn",
		},
		{
			id: 2,
			title: "sån där indisk skit",
			ingredients: "en IPA",
			price: "69 spänn",
		},
		{
			id: 3,
			title: "cider",
			ingredients: "ja, vad fan tror du?",
			price: "59 spänn",
		},
	],
};
