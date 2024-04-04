import styled from "styled-components";
import PropTypes from "prop-types";

const StyledIngredientDisplay = styled.div`
	width: 100%;
	height: 100%;
`;

const StyledTitle = styled.h2`
	font-size: var(--font-med-small);
`;

const MenuItem = ({ img, title, ingredients }) => {
	return (
		<StyledIngredientDisplay>
			<StyledTitle>{title}</StyledTitle>
			<h3>{ingredients}</h3>
			<img src={img} alt={title} />
		</StyledIngredientDisplay>
	);
};
MenuItem.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	ingredients: PropTypes.string.isRequired,
};

export default MenuItem;
