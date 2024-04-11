import { useState } from "react";
import MenuItemForm from "../components/atoms/MenuItemFormInput";
import styled from "styled-components";
import logo from "../assets/img/andra-longos-light-logo.svg";
import RenderMenuItem from "../components/organisms/RenderMenuItem";
import { saveFoodToApi, loadFoodFromApi } from "../components/atoms/apiConnection";

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
`;
const MumsMenu = () => {
	const [menuItems, setMenuItems] = useState([]);
	const [drinkItems, setDrinkItems] = useState([]);

	const addMenuItem = (newMenuItem) => {
		if (newMenuItem.type === "food") {
			setMenuItems([...menuItems, newMenuItem]);
		} else {
			setDrinkItems([...drinkItems, newMenuItem]);
		}
	};
	const saveTheFoodPlease = async () => {
		const foodAndDrinks = {
			food: menuItems,
			drinks: drinkItems,
		};
		await saveFoodToApi(foodAndDrinks);
	};
	const loadTheFoodPlease = async () => {
		await loadFoodFromApi();
	};
	return (
		<StyledMumsMenu>
			<Logo src={logo} alt="logo" />
			<MenuItemForm addMenuItem={addMenuItem} />
			<StyledButton type="button" onClick={saveTheFoodPlease}>
				Spara
			</StyledButton>
		</StyledMumsMenu>
	);
};

export default MumsMenu;
