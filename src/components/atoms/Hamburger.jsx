import React, { useState } from "react";
import styled from "styled-components";
import hamburgerLine from "../../assets/img/hamburger-line.svg";

const StyledBurger = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 3px;
    z-index: 1000;
`;

const HamburgerLine = styled.img`
    width: 50px;
    height: auto;
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 750px;
    height: 100vh;
    background-color: var(--main-color);
    z-index: 999;
    display: ${(props) => (props.$isVisible ? "block" : "none")};
    transition: opacity 0.3s ease-in-out;
    opacity: ${(props) => (props.$isVisible ? 1 : 0)};
`;

const StyledUl = styled.ul `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 0;
    list-style: none;
    height: 100%;
    gap: 2em;
`

const StyledATag = styled.a `
    color: var(--secondary-color);
    font-size: 3rem;
`

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsOverlayVisible(!isOverlayVisible);
    };

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
        setIsOpen(!isOpen);
    };

    return (
        <>
            <StyledBurger 
                onClick={toggleMenu} 
                alt="Hamburger menu"
                aria-expanded={isOpen} 
                aria-controls="overlay-menu"
            >
                <HamburgerLine
                    src={hamburgerLine}
                    style={{
                        transform: isOpen
                            ? "rotate(-45deg) translate(-11px, 11px)"
                            : "none",
                    }}
                />
                <HamburgerLine
                    src={hamburgerLine}
                    style={{
                        opacity: isOpen ? "0" : "1",
                    }}
                />
                <HamburgerLine
                    src={hamburgerLine}
                    style={{
                        transform: isOpen
                            ? "rotate(45deg) translate(-11px, -11px)"
                            : "none",
                    }}
                />
            </StyledBurger>
            <Overlay $isVisible={isOverlayVisible} onClick={toggleOverlay} id="overlay-menu">
                <StyledUl>
                    <li><StyledATag href="#">Langos</StyledATag></li>
                    <li><StyledATag href="#">Drinks</StyledATag></li>
                    <li><StyledATag href="#">About us</StyledATag></li>
                </StyledUl>
            </Overlay>
        </>
    );
}