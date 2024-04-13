import styled from "styled-components";
import PropTypes from "prop-types";

const StyledIngredientDisplay = styled.div`
	width: 100%;
	height: 100%;
`;

const StyledTitle = styled.h2`
	font-size: var(--font-med-small);
`;

const StyledText = styled.p`
	margin: 0;
	padding: 0.35rem;
	letter-spacing: 2px;
	line-height: 1.05;
	font-size: var(--font-med-smaller);
`;

const MenuItem = ({ title, desc, price }) => {
	return (
		<StyledIngredientDisplay>
			<StyledTitle>{title}</StyledTitle>
			<StyledText>{desc}</StyledText>
			<StyledText>{price}</StyledText>
		</StyledIngredientDisplay>
	);
};
MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
};

export default MenuItem;
