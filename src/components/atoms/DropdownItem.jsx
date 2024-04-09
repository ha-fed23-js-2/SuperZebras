import { useState } from "react";
import styled from "styled-components";
import { useItemStore } from "../../data/ItemStore";

const StyledImg = styled.img`
	width: 50%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
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
		<div>
			{Array.isArray(reorderedItems) &&
				reorderedItems.map((item, index) => (
					<StyledImg key={index} src={item.img} alt={`image-menu-item-${index}`} onClick={() => handleSelect(index)} />
				))}
		</div>
	);
};

export default DropDownItem;
