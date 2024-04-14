import MenuItem from "../molecules/menu/MenuItem";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { loadFoodFromApi } from "../atoms/apiConnection";

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

const StyledButton = styled.button`
	position: absolute;
	transform: translateY(-4rem) translateX(21rem);
`;
export const myCart = [];

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

	const handleBuy = (index) => {
		myCart.push(items[index]);
		console.log("Köpt:", items[index]);
	};

	return (
		<StyledMenuRender>
			{items.map((item, index) => (
				<div key={index}>
					<div>
						<MenuItem image={item.image} title={item.name} ingredients={item.ingredients} price={item.price} />
						<StyledButton onClick={() => handleBuy(index)}>Köp</StyledButton>
					</div>
				</div>
			))}
		</StyledMenuRender>
	);
};

export default RenderMenuItem;
