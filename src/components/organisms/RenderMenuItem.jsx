import MenuItem from "../moledules/menu/MenuItem";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { loadFoodFromApi } from "../atoms/apiConnection";

const StyledButton = styled.button`
    color: var(--secondary-color);
    margin: 0;
    width: 120px;
    display: block;
    background-color: var(--notification-color);
    font-size: var(--font-med-smaller);
    transform: rotate(3deg);
    // box-shadow: var(--shadow);
    position: absolute;
    right: 0;
    top: 170px;
    padding: 4px 0;
    @media (max-width: 480px) {
        margin: 0 auto;
        position: inherit;
    }
`;

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
    @media (max-width: 480px) {
        align-items: center;
    }
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
                console.error(
                    "Unexpected category or result structure:",
                    category,
                    result
                );
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
                    <div style={{ position: "relative" }}>
                        <MenuItem
                            image={item.image}
                            title={item.name}
                            ingredients={item.ingredients}
                            price={item.price}
                        />
                        <StyledButton onClick={() => handleBuy(index)}>
                            Lägg till
                        </StyledButton>
                    </div>
                </div>
            ))}
        </StyledMenuRender>
    );
};

export default RenderMenuItem;
