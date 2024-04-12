import styled from "styled-components";
import PropTypes from "prop-types";

const StyledItem = styled.div`
	width: 100%;
	height: 100%;
`;

const StyledTitle = styled.h2`
	font-size: var(--font-med-bigger);
	padding-block: 1rem;
`;

const StyledMenuImg = styled.img`
	width: 25%;
	padding-inline: 1rem;
`;

const MenuItem = ({ image, title, ingredients, price }) => {
	return (
		<StyledItem>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<StyledMenuImg src={image} alt={`menu-item-${title}`} />
				<StyledTitle>{title}</StyledTitle>
			</div>
			<h3>{ingredients}</h3>
			<h3>{price}</h3>
		</StyledItem>
	);
};

export default MenuItem;
