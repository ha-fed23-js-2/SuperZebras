import styled from "styled-components";
import PropTypes from "prop-types";

const StyledItemDisplay = styled.div`
	width: 100%;
	height: 100%;
`;

const PriceDisplay = ({ price }) => {
	return (
		<StyledItemDisplay>
			<h3>{price}</h3>
		</StyledItemDisplay>
	);
};

PriceDisplay.propTypes = {
	price: PropTypes.string.isRequired,
};

export default PriceDisplay;
