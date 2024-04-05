import React from "react";
import styled from "styled-components";
import Hamburger from "../atoms/Hamburger";
import logo from "../../assets/img/andra-longos-light-logo.svg";
import YourOrder from "../atoms/YourOrder";

const StyledNavbar = styled.nav`
    padding: 20px;
    position: sticky;
    top: 0;
    background-color: var(--main-color);
`;

const StyledUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const Logo = styled.img`
    width: 100px;
    height: auto;
    z-index: 1002;
`;


export default function Navbar() {
    return (
        <StyledNavbar>
            <StyledUl>
                <Logo src={logo} alt="Logo" />
                <YourOrder/>
                <Hamburger />
            </StyledUl>
        </StyledNavbar>
    );
}
