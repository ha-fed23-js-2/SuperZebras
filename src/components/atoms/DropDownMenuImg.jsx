import { useState } from "react";
import styled from "styled-components";
import DropdownItem from "./DropdownItem";
import { useItemStore } from "../../data/ItemStore";

const DropdownMenu = styled.div`
	display: flex;
	box-shadow: var(--shadow);
	width: 20%;
	flex-direction: column;
	gap: 0.5rem;
	padding: 0.65rem;
	border-radius: 10px;
	margin-bottom: 2rem;
	box-shadow: 0px 0px 10px #202020; // Corrected the color code
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
	width: 20%;
	flex-direction: column;
	gap: 0.85rem;
	padding: 0.65rem;
	border-radius: 10px;
	margin-bottom: 2rem;
	box-shadow: 0px 0px 10px #202020; // Corrected the color code
	border: 1px solid #3e3e3e;
	background-color: var(--secondary-color);
	color: var(--compliment-color);
	cursor: pointer;
	height: 5%;
	justify-content: center; // Added this line to center the content vertically

	&:hover {
		background-color: var(--secondary-color_alpha);
	}
`;

const Dropdowns = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0 auto;
	justify-content: center;
	gap: 5rem;
	align-items: center;
`;

const Dropdown = ({ onCategoryChange }) => {
	const setSelectedImageUrl = useItemStore((state) => state.setSelectedImageUrl);
	const handleImageSelect = (imageUrl) => {
		setSelectedImageUrl(imageUrl);
		console.log(imageUrl);
	};

	const [open, setOpen] = useState(false);
	const [openCat, setCatOpen] = useState(false);

	const toggle = () => setOpen(!open);
	const toggleCat = () => setCatOpen(!openCat);

	const [category, setCategory] = useState("Food");

	const handleCategoryChange = (newCategory, event) => {
		event.stopPropagation();
		setCategory(newCategory);
		onCategoryChange(newCategory); // Use the passed prop for handling category changes
	};

	return (
		<Dropdowns>
			<DropdownMenu onClick={toggle} style={{ height: open ? "100%" : "118px" }}>
				<div style={{ display: "flex", justifyContent: "space-between", overflow: "hidden" }}>
					<DropdownItem onImageSelect={handleImageSelect}></DropdownItem>
				</div>
			</DropdownMenu>

			<DropDownMenuCategory onClick={toggleCat} style={{ height: openCat ? "max-content" : "118px" }}>
				{openCat ? (
					<>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								overflow: "hidden",
								margin: "0 auto",
								padding: "20px",
							}}
							onClick={(e) => handleCategoryChange("Food", e)}>
							<span>Food</span>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								overflow: "hidden",
								margin: "0 auto",
								padding: "20px",
							}}
							onClick={(e) => handleCategoryChange("Drinks", e)}>
							<span>Drinks</span>
						</div>
					</>
				) : (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							overflow: "hidden",
							margin: "0 auto",
							padding: "20px",
						}}>
						{category}
					</div>
				)}
			</DropDownMenuCategory>
		</Dropdowns>
	);
};
//
export default Dropdown;
