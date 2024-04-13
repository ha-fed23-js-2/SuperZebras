import styled from "styled-components";
import PropTypes from "prop-types";

const StyledItem = styled.div`
	width: 100%;
	height: 100%;
	padding-block: 3rem;
`;

const StyledTitle = styled.h2`
	font-size: var(--font-med-bigger);
	padding-block: 0.35rem;
`;

const StyledMenuImg = styled.img`
	width: 25%;
	padding-inline: 1rem;
`;

const MenuItem = ({ image, title, ingredients, price }) => {
	return (
		<StyledItem>
			<div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
				<StyledMenuImg src={image} alt={`menu-item-${title}`} />
				<StyledTitle>{title}</StyledTitle>
				<h3>{price}</h3>
			</div>
			<div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
				<h3>{ingredients}</h3>
			</div>
		</StyledItem>
	);
};

export default MenuItem;
