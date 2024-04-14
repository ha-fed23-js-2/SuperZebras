import styled from "styled-components";
import PropTypes from "prop-types";

const StyledItem = styled.div`
    width: 100%;
    height: 100%;
    padding-block: 3rem;
    display: flex;
    flex-direction: column;
`;

const StyledMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    color: var(--compliment-color);
    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledInformation = styled.div`
    text-align: left;
    flex-grow: 1;
    @media (max-width: 480px) {
        text-align: center;
        align-items: center;
    }
`;

// style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}

const StyledTitle = styled.h2`
    font-size: var(--font-med);
    padding-block: 0.35rem;
`;

const StyledMenuImg = styled.img`
    // width: 25%;
    width: 150px;
    padding-inline: 1rem;
    align-self: flex-start;
	margin-right: 1.5em;
    @media (max-width: 480px) {
        align-self: center;
		margin-right: 0;
    }
`;

const StyledIngredients = styled.h3`
    font-size: var(--font-med-smaller);
`;
const StyledPriceTilt = styled.div`
    // color: var(--secondary-color);
    margin: 0;
    width: 120px;
    // display: inline-flex;
    text-align: center;
    align-self: left;
    // padding: 0.3em;
    margin-top: 0.4em;
    background-color: var(--compliment-color);
    transform: rotate(-3deg);
    @media (max-width: 480px) {
        text-align: center;
        align-self: center;
    }
`;

const StyledPrice = styled.h3`
    font-size: var(--font-med-smaller);
	color: var(--secondary-color)
    transform: rotate(3deg);
`;

const MenuItem = ({ image, title, ingredients, price }) => {
    return (
        <StyledItem>
            <StyledMenuContainer>
                <StyledMenuImg src={image} alt={`menu-item-${title}`} />
                <StyledInformation>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledIngredients>{ingredients}</StyledIngredients>
                </StyledInformation>
            </StyledMenuContainer>
            <StyledPriceTilt>
                {" "}
                <StyledPrice>{price}</StyledPrice>
            </StyledPriceTilt>
        </StyledItem>
    );
};

export default MenuItem;
