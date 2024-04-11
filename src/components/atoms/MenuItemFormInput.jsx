import { useState, useEffect } from "react";
import styled from "styled-components";
import Dropdown from "./DropDownMenuImg";
import { saveFoodToApi } from "./apiConnection";

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
	margin: 0 auto;
	opacity: ${({ disabled }) => disabled ? '0.5' : '1'};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
`;

const MenuItemForm = ({ addMenuItem }) => {
	const [name, setName] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [formValid, setFormValid] = useState(false);
	useEffect(() => {
		setFormValid(name !== "" && ingredients !== "" && price !== "");
	}, [name, ingredients, price]);
	const submitHandler = (e) => {
		e.preventDefault();
		const newMenuItem = {
			name,
			ingredients,
			price,
			image,
		};
		addMenuItem(newMenuItem);
		setName("");
		setIngredients("");
		setPrice("");
		setImage("");
		// setTimeout(saveTheFoodPlease, 30)
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
					<StyledP>Bild</StyledP>
					{/* todo: get img src from json */}
					<Dropdown onChange={(e) => setImage(e.target.value)} />
                    <StyledButton type="submit" disabled={!formValid}> Lägg till </StyledButton>
				</label>
			</form>
		</StyledForm>
	);
};

export default MenuItemForm;
