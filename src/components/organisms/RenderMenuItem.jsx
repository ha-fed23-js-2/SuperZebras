import PriceDisplay from "../moledules/menu/PriceDisplay";
import MenuItem from "../moledules/menu/MenuItem";
import ItemDisplay from "../moledules/menu/ItemDisplay";
import styled from "styled-components";
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

const MenuRender = ({ selectedImg, title, desc, price }) => {
	return (
		<StyledMenuRender>
			{selectedImg && selectedImg.img && <ItemDisplay image={selectedImg.img} />}
			<MenuItem title={title} desc={desc} price={price} />
		</StyledMenuRender>
	);
};

MenuRender.propTypes = {
	selectedImg: PropTypes.object,
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
};
export default MenuRender;
