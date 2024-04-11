import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "../atoms/Hamburger";
import logo from "../../assets/img/andra-longos-light-logo.svg";
import YourOrder from "../atoms/YourOrder";
import sectionBg from "../../assets/img/section-bg-png.png";

import { useOverlayStore } from "../../data/ItemStore";

const StyledNavbar = styled.nav`
    // padding: 20px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    background-color: var(--main-color);

    // with: 100%;
`;

const StyledUl = styled.ul`
    display: flex;
    // justify-content: space-between;
    align-items: center;
    position: relative;
    // padding:20px;
`;

const Logo = styled.img`
    width: 100px;
    height: auto;
    z-index: 3000;
    padding-left: 20px;
`;

export default function Navbar() {
    const toggleOverlay = useOverlayStore((state) => state.toggleOverlay);
    // console.log("Navbar - toggleOverlay:", toggleOverlay);

    return (
        <StyledNavbar>
            <StyledUl>
                <Logo src={logo} alt="Logo" />
                <div style={{ flexGrow: 1 }}></div>
                <button onClick={toggleOverlay}>
                    <YourOrder />
                </button>{" "}
                <Hamburger />
            </StyledUl>
        </StyledNavbar>
    );
}
