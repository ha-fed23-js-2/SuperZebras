import { create } from "zustand";

const imageModules = import.meta.globEager("../assets/img/menu-imgs/*.{jpg,jpeg,png,svg}");

let images = {};
for (const path in imageModules) {
	images[path] = imageModules[path].default;
}

const ImageStore = create((set) => ({
	images: images,
}));

export default ImageStore;
