import styled from "styled-components";
import PropTypes from "prop-types";
const ItemDisplay = ({ image }) => {
	return <StyledItemDisplay>{image}</StyledItemDisplay>;
};

const StyledItemDisplay = styled.div`
	width: 100%;
	height: 100%;
`;

ItemDisplay.propTypes = {
	image: PropTypes.node.isRequired,
};

export default ItemDisplay;
