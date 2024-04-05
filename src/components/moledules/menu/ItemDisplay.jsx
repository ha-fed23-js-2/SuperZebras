import styled from "styled-components";
import PropTypes from "prop-types";

const ItemDisplay = ({ image }) => {
	console.log("Image URL:", image); // Log the image URL
	return (
		<StyledItemDisplay>
			<img src={image} alt="" />
		</StyledItemDisplay>
	);
};

const StyledItemDisplay = styled.div`
	width: 100%;
	height: 100%;
`;

ItemDisplay.propTypes = {
	image: PropTypes.string.isRequired,
};

export default ItemDisplay;
