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

const Item = styled.div`
	font-size: 1rem;
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
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleSelect = (index) => {
		setSelectedIndex(index);
		if (onImageSelect) {
			onImageSelect(images[index].img); // Callback with the selected image URL
		}
	};

	// Reorder images array so selected image is first
	const reorderedImages = [
		images[selectedIndex],
		...images.slice(0, selectedIndex),
		...images.slice(selectedIndex + 1),
	];

	return (
		<Item>
			{reorderedImages.map((item, index) => (
				<StyledImg
					key={index} // Note: using index as key is not recommended if list can change order
					src={item.img}
					alt={`image-menu-item-${index}`}
					onClick={() => handleSelect(index)}
				/>
			))}
		</Item>
	);
};

export default DropDownItem;
