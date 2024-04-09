import React from "react";
import styled from "styled-components";
import yourOrderLogo from "../../assets/img/your-order.svg";

const YourOrderContainer = styled.div`
    width: 35px;
    position: absolute;
    height: auto;
    bottom: -60px;
    left: 0;
`;

const YourOrderLogo = styled.img`
    width: 35px;
    position: relative;
`;

const YourOrderValueContainer = styled.div`
    position: absolute;
    right: -6px;
    top: 20px;
    transform: rotate(-5deg);

    
`;

const YourOrderValueBackground = styled.div`
    padding: 1px 6px;
    background-color: var(--notification-color);
    color: var(--secondary-color);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;`;

const YourOrderValue = styled.p`
    position: relative;
    transform: rotate(5deg);
    
`;

export default function YourOrder() {
    return (
        <YourOrderContainer>
            <YourOrderLogo src={yourOrderLogo} />
            <YourOrderValueContainer>
                <YourOrderValueBackground> 
                    <YourOrderValue>0</YourOrderValue> 
                </YourOrderValueBackground>
            </YourOrderValueContainer>
        </YourOrderContainer>
    );
}