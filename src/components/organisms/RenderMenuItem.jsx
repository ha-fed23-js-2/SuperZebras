import PriceDisplay from "../moledules/menu/PriceDisplay";
import MenuItem from "../moledules/menu/MenuItem";
import styled from "styled-components";
import { ImageStore, MenuItems } from "../../data/ItemStore";
import PropTypes from "prop-types";

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

const title = MenuItems.items[0].title;
const ingredients = MenuItems.items[0].ingredients;
const price = MenuItems.items[0].price;

const MenuRender = ({ selectedIndex }) => {
	const { images } = ImageStore();
	let img;
	if (images && images.food && images.food[selectedIndex]) {
		img = images.food[selectedIndex].img;
	}
	console.log({ img });
	console.log(img);

	return (
		<StyledMenuRender>
			{img && <MenuItem img={img} title={title} ingredients={ingredients} />}
			<PriceDisplay price={price} />
		</StyledMenuRender>
	);
};

MenuRender.propTypes = {
	selectedIndex: PropTypes.number.isRequired,
};

export default MenuRender;
