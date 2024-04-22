import { useState, useEffect } from "react";
import styled from "styled-components";
import PriceDisplay from "../../molecules/menu/PriceDisplay";

const StyledItem = styled.div`
	width: 100%;
	height: 100%;
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
	& > input {
		font-size: var(--font-med-small);
		letter-spacing: var(--letter-spacing-med);
		width: 100%; // Ensure full width for better usability
		margin-bottom: 0.5rem; // Add some space between inputs
	}
	@media (max-width: 768px) {
		text-align: center;
	}
`;

const PriceDisplayContainer = styled.div`
	@media (max-width: 768px) {
		align-self: center;
	}
`;

const StyledMenuImg = styled.img`
	width: 150px;
	padding-inline: 1rem;
`;

const ButtonRow = styled.div`
	display: flex;
	justify-content: space-between;
`;
const MumsEditItem = ({ item, onSave, onDelete, index }) => {
	const [editedTitle, setEditedTitle] = useState(item.name);
	const [editedIngredients, setEditedIngredients] = useState(
		Array.isArray(item.ingredients) ? item.ingredients.join(", ") : item.ingredients
	);
	const [editedPrice, setEditedPrice] = useState(item.price);

	useEffect(() => {
		console.log("Received item in MumsEditItem:", item);
	}, [item]);

	const handleSave = () => {
		const updatedItem = {
			...item,
			name: editedTitle,
			ingredients: editedIngredients.split(", "),
			price: editedPrice,
		};
		onSave(updatedItem, index);
	};

	return (
		<StyledItem>
			<StyledItemContent>
				<StyledMenuImg src={item.image || item.imageUrl} alt={`menu-item-${editedTitle}`} />
				<StyledTextContent>
					<label htmlFor="title">Title</label>
					<input type="text" id="title" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
					<label htmlFor="ingredients">Ingredients</label>
					<input
						type="text"
						id="ingredients"
						value={editedIngredients}
						onChange={(e) => setEditedIngredients(e.target.value)}
					/>
					<label htmlFor="price">Price</label>
					<input type="text" id="price" value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} />
					<ButtonRow>
						<button onClick={handleSave}>Save</button>
						<button onClick={onDelete}>Delete Item</button>
					</ButtonRow>
				</StyledTextContent>
			</StyledItemContent>
			<PriceDisplayContainer>
				<PriceDisplay price={editedPrice} />
			</PriceDisplayContainer>
		</StyledItem>
	);
};
export default MumsEditItem;
