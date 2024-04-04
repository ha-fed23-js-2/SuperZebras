import React, { useState } from "react";
import styled from "styled-components";
import hamburgerLine from "../../assets/img/hamburger-line.svg";

const StyledBurger = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 3px;
`;
const HamburgerLine = styled.img`
    width: 50px;
    height: auto;
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
`;

export default function Hamburger() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <StyledBurger onClick={toggleMenu} alt="Hamburger menu">
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
    );
}
