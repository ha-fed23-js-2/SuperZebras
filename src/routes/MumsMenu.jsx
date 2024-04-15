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

const MumsMenu = () => {
	const { addDrinkItem, addFoodItem } = useLangosStore();
	const [menuItems, setMenuItems] = useState([]);
	const [drinkItems, setDrinkItems] = useState([]);

	const addMenuItem = (newMenuItem, category) => {
		if (category === "Food") {
			setMenuItems((prevMenuItems) => [...prevMenuItems, newMenuItem]);
			addFoodItem(newMenuItem);
		} else {
			setDrinkItems((prevDrinkItems) => [...prevDrinkItems, newMenuItem]);
			addDrinkItem(newMenuItem);
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
			Foods:
			<EditMenuItem category="food" />
			Drinks:
			<EditMenuItem category="drinks" />
		</StyledMumsMenu>
	);
};

export default MumsMenu;
