import PriceDisplay from "../moledules/menu/PriceDisplay";
import MenuItem from "../moledules/menu/MenuItem";
import ItemDisplay from "../moledules/menu/ItemDisplay";
import styled from "styled-components";
import ImageStore from "../../data/ItemStore";

const StyledMenuRender = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	font-size: var(--font-med);
	align-items: center;
	justify-content: flex-start;
	text-align: center;
	padding: 20px;
	box-sizing: border-box;
`;

const title = "Basic Bitch";
const ingredients = "ost, och tråkig sourcream";
const price = "65 spänn";
// let image = ImageStore.images[1];

const MenuRender = () => {
	return (
		<StyledMenuRender>
			{/* <ItemDisplay img={image} /> */}
			<MenuItem title={title} ingredients={ingredients} />
			<PriceDisplay price={price} />
		</StyledMenuRender>
	);
};

export default MenuRender;
