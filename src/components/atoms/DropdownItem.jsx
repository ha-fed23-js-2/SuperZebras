import { useState } from "react";
import styled from "styled-components";
import { useItemStore } from "../../data/ItemStore";

const StyledImg = styled.img`
	display: flex;
	margin: 0 auto;
	width: 95%;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
`;

// in case we want to style them, keeping for brevity :)
const Item = styled.div`
	font-size: 1rem;
	// margin-bottom: 0 auto;
	padding: 0.35rem;
	transition: text-shadow 0.15s 0.01s, transform 0.15s 0.01s;
	background: var(--secondary-color);
	text-shadow: transparent;

	&:hover,
	&.selected {
		transform: scale(1.02);
		text-shadow: 0px 0px 10px #cecece;
		background: var(--secondary-color);
		cursor: pointer;
		overflow: hidden;
		border-radius: 10px;
	}
`;
const DropDownItem = ({ onImageSelect }) => {
	const { images } = useItemStore();

	const handleSelect = (index) => {
		const selectedImage = images[index];
		onImageSelect(selectedImage.img); // Assuming you want to pass the image URL back
	};

	return (
		<Item>
			{images.map((item, index) => (
				<StyledImg key={index} src={item.img} alt={`image-menu-item-${index}`} onClick={() => handleSelect(index)} />
			))}
		</Item>
	);
};

export default DropDownItem;
