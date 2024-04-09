import { useState } from "react";
import MenuItemForm from "../components/atoms/MenuItemFormInput";
import styled from "styled-components";
import logo from "../assets/img/andra-longos-light-logo.svg";
import RenderMenuItem from "../components/organisms/RenderMenuItem"

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
	const [menuItems, setMenuItems] = useState([]);
	const addMenuItem = (newMenuItem) => {
		const updatedMenuItems = [...menuItems, newMenuItem];
		setMenuItems(updatedMenuItems);
	};
	return (
		<StyledMumsMenu>
			<Logo src={logo} alt="logo" />
			<MenuItemForm addMenuItem={addMenuItem} />
		</StyledMumsMenu>
	);
};

export default MumsMenu;
