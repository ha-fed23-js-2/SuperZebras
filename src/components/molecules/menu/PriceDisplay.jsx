import styled from "styled-components";
import PropTypes from "prop-types";

const StyledItemDisplay = styled.div`
	width: 100%;
	height: 100%;
	padding-inline: 1.65rem;
	padding-top: 1rem;
`;

const PriceBackground = styled.div`
	background-color: var(--compliment-color);
	padding: 0 0.35rem;
	width: fit-content;
	transform: skew(3deg, 1deg) rotate(356deg);
`;
const StyledPrice = styled.h3`
	font-size: var(--font-med-small);
	color: var(--main-color);
	letter-spacing: var(--letter-spacing-med);
	margin: 0;
	width: content-size;
	display: inline-block;
	transform: rotate(4deg);
`;
const PriceDisplay = ({ price }) => {
	if (price === undefined || price === null) {
		return <StyledItemDisplay>Price not available</StyledItemDisplay>;
	}
	return (
		<StyledItemDisplay>
			<PriceBackground>
				<StyledPrice>{price}</StyledPrice>
			</PriceBackground>
		</StyledItemDisplay>
	);
};
PriceDisplay.propTypes = {
	price: PropTypes.string,
};

export default PriceDisplay;
