import styled from "styled-components";
import PriceDisplay from "../../molecules/menu/PriceDisplay";
const StyledItem = styled.div`
    width: 100%;
    height: 100%;
    padding-block: 3rem;
    display: flex;
    flex-direction: column;
`;

const StyledTitle = styled.h2`
    font-size: var(--font-med-bigger);
    padding-block: 0.35rem;
`;

const StyledMenuImg = styled.img`
    width: 150px;
    padding-inline: 1rem;
`;
const StyledIngredients = styled.h3`
    font-size: var(--font-med);
`;

const MenuItem = ({ image, title, ingredients, price }) => {
    return (
        <StyledItem>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
					
                    
                }}
            >
                <div>
                    <StyledMenuImg src={image} alt={`menu-item-${title}`} />
                </div>
                <div
                    style={{
                        flexGrow: "1",
                        textAlign: "left",
                        color: "var(--compliment-color)",
                    }}
                >
                    <StyledTitle>{title}</StyledTitle>
                    <StyledIngredients>{ingredients}</StyledIngredients>
                </div>
            </div>
            <div>
                <PriceDisplay price={price}></PriceDisplay>
            </div>
        </StyledItem>
    );
};

export default MenuItem;
