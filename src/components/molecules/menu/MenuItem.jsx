import styled from "styled-components";
import PriceDisplay from "../../molecules/menu/PriceDisplay";
const StyledItem = styled.div`
	width: 100%;
	height: 100%;
	// padding-block: 3rem 3rem 1rem 3rem;
	padding-top: 3rem;
	padding-bottom: 1rem;
	display: flex;
	flex-direction: column;
`;

const StyledItemContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

const StyledTextContent = styled.div`
	flex-grow: 1;
	text-align: left;
	color: var(--compliment-color);
	@media (max-width: 768px) {
		text-align: center;
	}
`;

const PriceDisplayContainer = styled.div`
	@media (max-width: 768px) {
		align-self: center;
	}
`;

const StyledTitle = styled.h2`
	font-size: var(--font-med-bigger);
	padding-block: 0.35rem;
`;

const StyledMenuImg = styled.img`
	width: 150px;
	padding-inline: 1rem;
`;
const StyledIngredients = styled.h3`
	font-size: var(--font-med-small);
	letter-spacing: var(--letter-spacing-med);
`;

const MenuItem = ({ image, title, ingredients, price }) => {
	return (
		<StyledItem>
			<StyledItemContent>
				<StyledMenuImg src={image} alt={`menu-item-${title}`} />
				<StyledTextContent>
					<StyledTitle>{title}</StyledTitle>
					<StyledIngredients>{ingredients}</StyledIngredients>
				</StyledTextContent>
			</StyledItemContent>
			<PriceDisplayContainer>
				<PriceDisplay price={price}></PriceDisplay>
			</PriceDisplayContainer>
		</StyledItem>
	);
};

export default MenuItem;
