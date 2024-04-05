import PriceDisplay from "../moledules/menu/PriceDisplay";
import MenuItem from "../moledules/menu/MenuItem";
import styled from "styled-components";
import { ImageStore } from "../../data/ItemStore";
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

const title = "Basic Bitch";
const ingredients = "ost, och tråkig sourcream";
const price = "65 spänn";

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
