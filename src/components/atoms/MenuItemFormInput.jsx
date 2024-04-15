import { useState, useEffect } from "react";
import styled from "styled-components";
import Dropdown from "./DropDownMenuImg";
import { loadFoodFromApi, saveFoodToApi } from "./apiConnection";
import { useItemStore, useLangosStore } from "../../data/ItemStore";

const StyledForm = styled.div`
	// height: 15%;
`;
const StyledP = styled.p`
	color: var(--secondary-color);
	padding: 1rem;
	font-size: var(--font-med-small);
	line-height: 1.15;
	letter-spacing: 1px;
`;
const StyledInput = styled.input`
	border-radius: var(--border-radius);
	color: var(--complment-color);
	background-color: var(--secondary-color);
	padding: 0.15rem 0.15rem;
	width: 75%;
	margin: 0 auto;
	font-size: var(--font-med-small);
	font-family: var(--font-family);
	color: var(--compliment-color);
	box-shadow: var(--shadow);
	&::placeholder {
		color: var(--compliment-color_alpha);
		text-align: center;
	}
	margin-left: 1rem;
`;

const StyledButton = styled.button`
	border-radius: var(--border-radius);
	color: var(--complment-color);
	background-color: var(--secondary-color);
	padding: 0.15rem 0.15rem;
	width: 30%;
	margin: 0 auto;
	font-size: var(--font-med-small);
	font-family: var(--font-family);
	color: var(--compliment-color);
	box-shadow: var(--shadow);
	opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
	cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
	pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: 3rem;
	justify-content: center;
`;

const MenuItemForm = () => {
	const { addFoodItem, addDrinkItem } = useLangosStore();
	const [category, setCategory] = useState("Food");

	const [name, setName] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [formValid, setFormValid] = useState(false);

	const { images } = useItemStore();

	useEffect(() => {
		if (images.length > 0) {
			setImage(images[0].img);
		}
	}, [images]);

	useEffect(() => {
		setFormValid(name !== "" && ingredients !== "" && price !== "");
	}, [name, ingredients, price]);

	const submitHandler = async (e) => {
		e.preventDefault();
		const newMenuItem = {
			name,
			ingredients,
			price,
			image,
		};

		try {
			// Update the state in the store
			if (category === "Food") {
				addFoodItem(newMenuItem);
			} else {
				addDrinkItem(newMenuItem);
			}

			// Structure the data as expected by the API
			const dataToSave =
				category === "Food" ? { food: [newMenuItem], drinks: [] } : { food: [], drinks: [newMenuItem] };

			await saveFoodToApi(dataToSave);

			// Reset form fields after successful submission
			setName("");
			setIngredients("");
			setPrice("");
			setImage("");
			setCategory("Food");

			await loadFoodFromApi();
			// window.location.reload();
		} catch (error) {
			console.error("Failed to save menu item:", error);
		}
	};
	return (
		<StyledForm>
			<form onSubmit={submitHandler}>
				<label>
					<StyledP>Namn på Produkt</StyledP>
					<StyledInput type="text" value={name} placeholder="just name me" onChange={(e) => setName(e.target.value)} />
				</label>

				<label>
					<StyledP>Ingredienser</StyledP>
					<StyledInput
						type="text"
						value={ingredients}
						placeholder="a pinch of hope"
						onChange={(e) => setIngredients(e.target.value)}
					/>
				</label>

				<label>
					<StyledP>Pris</StyledP>
					<StyledInput type="text" value={price} placeholder="999" onChange={(e) => setPrice(e.target.value)} />
				</label>
				{/* bara en placeholder tills logik för bildurlen */}
				<label>
					<Container>
						<StyledP>Bild:</StyledP>
						<StyledP>Kategori:</StyledP>
					</Container>
					{/* todo: get img src from json */}
					<Dropdown
						onChange={(e) => {
							console.log("Dropdown value:", e.target.value);
							setImage(e.target.value);
						}}
						onCategoryChange={setCategory}
					/>
					<StyledButton type="submit" disabled={!formValid}>
						Lägg till
					</StyledButton>
				</label>
			</form>
		</StyledForm>
	);
};

export default MenuItemForm;
