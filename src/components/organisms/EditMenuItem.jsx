import MumsEditItem from "../molecules/menu/MumsEditItem";
import { useItemStore } from "../../data/ItemStore";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { loadFoodFromApi, saveFoodToApi, deleteFoodFromApi } from "../atoms/apiConnection";

const StyledMenuRender = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	font-size: var(--font-med);
	justify-content: flex-start;
	text-align: center;
	padding: 20px;
	box-sizing: border-box;
`;

const StyledParagraph = styled.p`
	padding: 4rem;
`;

const RenderMenuItem = ({ category }) => {
	const [items, setItems] = useState([]);
	const selectedImageUrl = useItemStore((state) => state.selectedImageUrl);

	useEffect(() => {
		fetchData();
	}, [category]); // Refetch when category changes

	const fetchData = async () => {
		try {
			const result = await loadFoodFromApi();
			if (result && (category === "food" || category === "drinks")) {
				console.log(`Items fetched for ${category}:`, result[category]); // Because god damn we need to debug to figure out what's going on :D
				setItems(result[category]);
			} else {
				console.error("Unexpected category or result structure:", category, result);
				setItems([]);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
			setItems([]);
		}
	};

	const handleDeleteItem = async (index) => {
		try {
			await deleteFoodFromApi(index, category);
			// local array that we use to update
			const updatedItems = [...items.slice(0, index), ...items.slice(index + 1)];
			setItems(updatedItems); // local item update
		} catch (error) {
			console.error("Failed to delete item:", error);
		}
	};

	const handleSaveUpdatedItem = async (updatedItem, index) => {
		const updatedItems = [...items];
		updatedItems[index] = updatedItem; // update item from local
		const dataToSave = {
			food: category === "food" ? updatedItems : [],
			drinks: category === "drinks" ? updatedItems : [],
		};

		try {
			await saveFoodToApi(dataToSave);
			fetchData(); // update UI
		} catch (error) {
			console.error("Failed to update item", error);
		}
	};

	return (
		<StyledMenuRender>
			{items.length > 0 ? (
				items.map((item, index) => (
					<div key={index}>
						<MumsEditItem
							index={index}
							item={item}
							onSave={(updatedItem) => handleSaveUpdatedItem(updatedItem, index)}
							onDelete={() => handleDeleteItem(index)}
							itemType={category}
						/>
					</div>
				))
			) : (
				<StyledParagraph>Fanns inte så mycket här du..</StyledParagraph>
			)}
		</StyledMenuRender>
	);
};
export default RenderMenuItem;
