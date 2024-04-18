import MenuItem from "../molecules/menu/MenuItem";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { loadFoodFromApi } from "../atoms/apiConnection";
import { useCartStore, useItemStore } from "../../data/ItemStore";

const StyledButton = styled.button`
	color: var(--secondary-color);
	margin: 0;
	// width: 120px;
	display: block;
	background-color: var(--notification-color);
	font-size: var(--font-med-small);
	transition: font-size 0.3s ease-in-out;
	letter-spacing: var(--letter-spacing-med);
	transform: rotate(3deg);
	// box-shadow: var(--shadow);
	position: absolute;
	right: 0;
	top: 170px;
	padding: 0.4rem 0.8rem;
	&:hover {
		font-size: 101%;
	}
	@media (max-width: 480px) {
		margin: 10px auto;
		position: static;
	}
`;

const StyledMenuRender = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	font-size: var(--font-med);
	// align-items: center;
	justify-content: flex-start;
	// text-align: center;
	padding: 20px;
	box-sizing: border-box;
`;

export let myCart = [];
export let CartItems = "";

const RenderMenuItem = ({ category }) => {
	const { selectedImageUrl } = useItemStore((state) => state.selectedImageUrl);
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

	const { addToCart, cartStuff } = useCartStore();

	const handleBuy = (index) => {
		myCart.push(items[index]);
		console.log("Köpt:", items[index]);
		addToCart();
		console.log("cartStuff :", cartStuff);
		// cartstuff here
		// console.log("my current items:", CartItems);
	};

	return (
		<StyledMenuRender>
			{items.map(
				(item, index) =>
					// Check if the item is not null before rendering
					item !== null && (
						<div key={index}>
							<div style={{ position: "relative" }}>
								<MenuItem
									image={selectedImageUrl ? selectedImageUrl : item.image || ""} // Handle null image value
									title={item.name}
									ingredients={item.ingredients}
									price={item.price}
								/>
								<StyledButton onClick={() => handleBuy(index)}>Köp</StyledButton>
							</div>
						</div>
					)
			)}
		</StyledMenuRender>
	);
};

export default RenderMenuItem;
