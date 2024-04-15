import MenuItem from "../molecules/menu/MenuItem";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { loadFoodFromApi, deleteFoodFromApi } from "../atoms/apiConnection";

const StyledMenuRender = styled.div`
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

const RenderMenuItem = ({ category }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetchData();
	}, [category]); // Refetch when category changes

	const fetchData = async () => {
		try {
			const result = await loadFoodFromApi();
			if (result && (category === "food" || category === "drinks")) {
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

	const handleDelete = async (index) => {
		console.log("trying to delete: ", items[index]);
		try {
			await deleteFoodFromApi(index, category);
			fetchData(); // Refetch items after deletion to update UI
		} catch (error) {
			console.error("Failed to delete item:", error);
		}
	};
	return (
		<StyledMenuRender>
			{items.map((item, index) => (
				<div key={index}>
					<div>
						<MenuItem image={item.image} title={item.name} ingredients={item.ingredients} price={item.price} />
						<button onClick={() => handleDelete(index)}>Delete Item</button>
					</div>
				</div>
			))}
		</StyledMenuRender>
	);
};

export default RenderMenuItem;
