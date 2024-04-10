import { useState } from "react";
import styled from "styled-components";
import DropdownItem from "./DropdownItem";

const DropdownMenu = styled.div`
	width: 75%;
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
`;

// in case we want to style them, keeping for brevity :)
const DropDownItem = styled.div`
	font-size: 1rem;
    margin-bottom: 1rem;
	padding: 0.35rem;
	transition: text-shadow 0.15s 0.01s, transform 0.15s 0.01s;
	text-shadow: transparent;

	&:hover,
	&.selected {
		transform: scale(1.02);
		text-shadow: 0px 0px 10px #cecece;
		background: var(--secondary-color);
		cursor: pointer;
		overflow: hidden;
	}
`;

const Dropdown = () => {
	//for dropdown
	const [open, setOpen] = useState(false);

	const toggle = () => {
		setOpen(!open);
	};

	return (
		<DropdownMenu onClick={toggle} style={{ height: open ? "13%" : "3%" }}>
			<div style={{ display: "flex", justifyContent: "space-between", overflow: "hidden" }}>
				<DropdownItem></DropdownItem>
			</div>
		</DropdownMenu>
	);
};

export default Dropdown;
