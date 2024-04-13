import styled from "styled-components";
import PropTypes from "prop-types";

const StyledIngredientDisplay = styled.div`
	width: 100%;
	height: 100%;
`;

const StyledTitle = styled.h2`
	font-size: var(--font-med-small);
`;

const MenuItem = ({ title, desc }) => {
	return (
		<StyledIngredientDisplay>
			<StyledTitle>{title}</StyledTitle>
			<h3>{desc}</h3>
			<h3>{price}</h3>
		</StyledIngredientDisplay>
	);
};
MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
};

export default MenuItem;
