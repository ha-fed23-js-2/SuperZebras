import { useState } from "react";
import styled from "styled-components";
import DropdownItem from "./DropdownItem";

const DropdownMenu = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 0.65rem;
	border-radius: 10px;
	margin-bottom: 1rem;
	box-shadow: 0px 0px 10px ##202020;
	border: 1px solid #3e3e3e;
	background-color: var(--secondary-color);
	color: var(--compliment-color);
	cursor: pointer;
	height: 5%;

	&:hover {
		background-color: var(--secondary-color_alpha);
	}
`;

const Dropdown = () => {
	//for dropdown
	const [open, setOpen] = useState(false);

	const toggle = () => {
		setOpen(!open);
	};

	return (
		<DropdownMenu onClick={toggle} style={{ height: open ? "100%" : "118px" }}>
			<div style={{ display: "flex", justifyContent: "space-between", overflow: "hidden" }}>
				<DropdownItem></DropdownItem>
			</div>
		</DropdownMenu>
	);
};

export default Dropdown;
