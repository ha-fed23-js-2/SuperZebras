import { useEffect, useState } from "react";
import MenuItemForm from "../components/atoms/MenuItemFormInput";
import styled from "styled-components";
import logo from "/assets/img/test-logo-img.svg";
import EditMenuItem from "../components/organisms/EditMenuItem";
import { saveFoodToApi } from "../components/atoms/apiConnection";
import { useLangosStore } from "../data/ItemStore";

const StyledMumsMenu = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	font-size: var(--font-med);
	align-items: center;
	justify-content: flex-start;
	text-align: center;
	padding: 20px;
	box-sizing: border-box;
`;

const Logo = styled.img`
	align-self: center;
	width: 200px;
	height: auto;
	margin-top: 286px;
	margin-bottom: 20px;
`;

const ItemLine = styled.p`
	width: 100%;
	text-align: center;
	border-bottom: 1px solid var(--compliment-color);
	line-height: 0.05em;
	font-size: var(--font-med-bigger);
	letter-spacing: var(--letter-spacing-big);
	span {
		padding: 0 14px;
		background-color: var(--main-color);
	}
	&.food-item-line {
		padding-top: 4rem;
	}
`;

const MumsMenu = () => {
	const { addDrinkItem, addFoodItem } = useLangosStore();
	const [menuItems, setMenuItems] = useState([]);
	const [drinkItems, setDrinkItems] = useState([]);

	// refactored this to avoid brain injuries
	const addMenuItem = (newMenuItem, category) => {
		// Define a mapping from category to the corresponding state and API function
		const categoryFunctions = {
			Food: {
				setItems: setMenuItems,
				addItem: addFoodItem,
			},
			Drinks: {
				setItems: setDrinkItems,
				addItem: addDrinkItem,
			},
		};

		// Check if the category is either 'Food' or 'Drinks'
		if (category in categoryFunctions) {
			// Update the state
			categoryFunctions[category].setItems((prevItems) => [...prevItems, newMenuItem]);

			// Call the API function
			categoryFunctions[category].addItem(newMenuItem);
		}
	};

	const saveTheFoodPlease = async () => {
		const foodAndDrinks = {
			food: menuItems,
			drinks: drinkItems,
		};
		await saveFoodToApi(foodAndDrinks);
	};

	useEffect(() => {
		if (menuItems.length > 0 || drinkItems.length > 0) {
			saveTheFoodPlease();
		}
	}, [menuItems, drinkItems]);
	return (
		<StyledMumsMenu>
			<Logo src={logo} alt="logo" />
			<MenuItemForm addMenuItem={addMenuItem} />

			<ItemLine className="food-item-line">
				<span>Foods:</span>
			</ItemLine>
			<EditMenuItem category="food" />

			<ItemLine>
				<span>Drinks:</span>
			</ItemLine>
			<EditMenuItem category="drinks" />
		</StyledMumsMenu>
	);
};

export default MumsMenu;
