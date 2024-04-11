import styled from "styled-components";
import PropTypes from "prop-types";

const ItemDisplay = ({ image }) => {
	console.log("Image URL:", image);
	return (
		<StyledItemDisplay>
			<img src={image} alt="" />
		</StyledItemDisplay>
	);
};

const StyledItemDisplay = styled.div`
	height: 50%;
	display: flex;
	flex-direction: column;
	gap: 0.15rem;
	background: var(--secondary-color);
`;

ItemDisplay.propTypes = {
	image: PropTypes.string.isRequired,
};

export default ItemDisplay;
