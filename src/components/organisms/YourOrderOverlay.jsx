import React from "react";
import styled from "styled-components";
import { useOverlayStore } from "../../data/ItemStore";
import logo from "../../assets/img/test-logo-img.svg";
import hamburgerLine from "../../assets/img/hamburger-line.svg";
// import Button from "../atoms/Button";

const OverlayContainer = styled.div`
    position: fixed;
    margin: 0 auto;
    top: 0;
    width: 100%;
    max-width: 800px;
    height: 100vh;
    background-color: var(--compliment-color);
    z-index: 2000;
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
    transition: opacity 0.2s ease-in-out; 
    padding-top: 10px;

`;

const ContentContainer = styled.div`
    display: flex;
    box-sixing: border-box;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding:  0 20px;
    color: var(--secondary-color); /* Set the color */
`;
const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    width: 100px;
    height: auto;
`;

const StyledBurger = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 3px;
`;

const HamburgerLine = styled.img`
    width: 35px;
    height: auto;
    &:nth-child(2) {
        display: none; /* Hide the middle line */
    }
    &:first-child {
        transform: rotate(-45deg) translate(-5px, 5px);
    }
    &:last-child {
        transform: rotate(45deg) translate(-3px, -3px);
    }
`;

const OrderTitle = styled.h1`
    font-size: 2em; /* Set the font-size */
    color: var(--secondary-color); /* Set the color */
`;

const OrderSum = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.7em;
`;

const OrderTitleContainer = styled.div`
    margin-top: 2em;
`;
const OrderSumContainer = styled.div`
    margin-top: auto;
`;

const YourOrderSection = styled.section``;

const Divider = styled.div`
    background-color: var(--secondary-color);
    height: 2px;
    width: 100%;
    margin: 0 auto;
`;

export default function YourOrderOverlay() {
    const overlayVisible = useOverlayStore((state) => state.overlayVisible);
    const toggleOverlay = useOverlayStore((state) => state.toggleOverlay);

    const handleCloseOverlay = () => {
        toggleOverlay();
    };

    return (
        <OverlayContainer $visible={overlayVisible}>
            <ContentContainer>
                <NavContainer>
                    <Logo src={logo} alt="Logo" />
                    <StyledBurger onClick={handleCloseOverlay}>
                        <HamburgerLine src={hamburgerLine} />
                        <HamburgerLine src={hamburgerLine} />
                        <HamburgerLine src={hamburgerLine} />
                    </StyledBurger>
                </NavContainer>
                <OrderTitleContainer>
                    <OrderTitle>Your Order</OrderTitle>
                    <Divider></Divider>
                </OrderTitleContainer>
                <YourOrderSection />
                <OrderTitle></OrderTitle>
                {/* TODO: Insert from API Here */}
                <OrderSumContainer>
                    <Divider />
                    <OrderSum>
                        <p>Your sum</p>
                        <button>Pay</button>
                    </OrderSum>
                </OrderSumContainer>
            </ContentContainer>
        </OverlayContainer>
    );
}
