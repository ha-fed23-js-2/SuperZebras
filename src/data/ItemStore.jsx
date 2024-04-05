import { create } from "zustand";
import img from "./menu-img.json";

const ImageStore = create(() => ({
	images: img,
}));

export default ImageStore;
