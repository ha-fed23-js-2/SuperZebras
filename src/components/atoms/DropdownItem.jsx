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
const DropDownItem = () => {
	const { images } = useItemStore();
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleSelect = (index) => {
		setSelectedIndex(index);
	};

	// we create a new array here and puts the selected item as the first index, followed by all the items in order.
	const reorderedItems = [images.items[selectedIndex]].concat(
		images.items.slice(0, selectedIndex),
		images.items.slice(selectedIndex + 1)
	);

	return (
		<Item>
			{Array.isArray(reorderedItems) &&
				reorderedItems.map((item, index) => (
					<StyledImg key={index} src={item.img} alt={`image-menu-item-${index}`} onClick={() => handleSelect(index)} />
				))}
		</Item>
	);
};
//

export default DropDownItem;
