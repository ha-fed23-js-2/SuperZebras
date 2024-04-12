import { useState } from "react";
import styled from "styled-components";
import DropdownItem from "./DropdownItem";

const DropdownMenu = styled.div`
	display: flex;
	box-shadow: var(--shadow);
	width: 20%;
	// margin: 0 auto;
	flex-direction: column;
	gap: 0.5rem;
	padding: 0.65rem;
	border-radius: 10px;
	margin-bottom: 2rem;
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
const DropDownMenuCategory = styled.div`
	display: flex;
	box-shadow: var(--shadow);
	width: 20%;
	// margin: 0 auto;
	flex-direction: column;
	gap: 0.5rem;
	padding: 0.65rem;
	border-radius: 10px;
	margin-bottom: 2rem;
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

const Dropdowns = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0 auto;
	justify-content: center;
	gap: 3rem;
	align-items: center;
`;

const Dropdown = () => {
	//for dropdown
	const [open, setOpen] = useState(false);
	const [openCat, setCatOpen] = useState(false);

	const toggle = () => {
		setOpen(!open);
	};
	const toggleCat = () => {
		setCatOpen(!openCat);
	};

	const [category, setCategory] = useState("Food");

	return (
		<Dropdowns>
			<DropdownMenu onClick={toggle} style={{ height: open ? "100%" : "118px" }}>
				<div style={{ display: "flex", justifyContent: "space-between", overflow: "hidden" }}>
					<DropdownItem></DropdownItem>
				</div>
			</DropdownMenu>

			{/* render food/drink divs only when open; when closed only render whatever category currently is selected */}
			<DropDownMenuCategory onClick={toggleCat} style={{ height: openCat ? "max-content" : "3rem" }}>
				{openCat ? (
					<>
						<div
							style={{ display: "flex", justifyContent: "space-between", overflow: "hidden", margin: "0 auto" }}
							onClick={() => setCategory("Food")}>
							Food
						</div>
						<div
							style={{ display: "flex", justifyContent: "space-between", overflow: "hidden", margin: "0 auto" }}
							onClick={() => setCategory("Drinks")}>
							Drinks
						</div>
					</>
				) : (
					<div style={{ display: "flex", justifyContent: "space-between", overflow: "hidden", margin: "0 auto" }}>
						{category}
					</div>
				)}
			</DropDownMenuCategory>
		</Dropdowns>
	);
};

export default Dropdown;
