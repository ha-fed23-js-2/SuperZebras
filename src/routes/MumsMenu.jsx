import RenderMenuItem from "../components/organisms/RenderMenuItem";
import { useItemStore } from "../data/ItemStore";

const MumsMenu = () => {
	const { images, FoodItems, DrinkItems } = useItemStore();

	// todo:  save current menuItem as new item, don't hardcode either food or drink
	console.log("imagePAth", images);
	return (
		<div>
			<h2> Välkommen! </h2>
			<p> PERSONALSIDANNANANAN </p>
			<p> test-render itemDisplay: </p>
			<RenderMenuItem
				selectedImg={images.items[1]}
				title={FoodItems.items[1].title}
				desc={FoodItems.items[1].ingredients}
				price={FoodItems.items[1].price}
			/>
		</div>
	);
};

export default MumsMenu;
