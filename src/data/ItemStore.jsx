import { create } from "zustand";
import img from "./menu-img.json";

export const ImageStore = create(() => ({
	images: img,
}));


// export default ItemStore;
