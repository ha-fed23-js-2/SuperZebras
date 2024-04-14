import styled from "styled-components";
import PriceDisplay from "../../molecules/menu/PriceDisplay";
const StyledItem = styled.div`
	width: 100%;
	height: 100%;
	padding-block: 3rem;
	display: flex;
`;

const StyledTitle = styled.h2`
	font-size: var(--font-med-bigger);
	padding-block: 0.35rem;
`;

const StyledMenuImg = styled.img`
	width: 25%;
	padding-inline: 1rem;
`;
const StyledIngredients = styled.h3`
	font-size: var(--font-med);
`;

const MenuItem = ({ image, title, ingredients, price }) => {
	return (
		<StyledItem>
			<div
				style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-evenly" }}>
				<StyledMenuImg src={image} alt={`menu-item-${title}`} />
				<PriceDisplay price={price}></PriceDisplay>
			</div>
			<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
				<StyledTitle>{title}</StyledTitle>
				<StyledIngredients>{ingredients}</StyledIngredients>
			</div>
		</StyledItem>
	);
};

export default MenuItem;
