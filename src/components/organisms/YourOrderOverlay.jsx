import styled from "styled-components";
import { useOverlayStore } from "../../data/ItemStore";
import logo from "../../assets/img/test-logo-img.svg";
import hamburgerLine from "../../assets/img/hamburger-line.svg";
import { myCart } from "./RenderMenuItem";
import MenuItem from "../moledules/menu/MenuItem";
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
    padding: 0 20px;
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

const YourOrderSection = styled.section`
// background-color: var(--secondary-color)`;

const Divider = styled.div`
    background-color: var(--secondary-color);
    height: 2px;
    width: 100%;
    margin: 0 auto;
`;

const DeleteOrderItem = styled.button`
    color: var(--compliment-color);
    background-color: var(--secondary-color);
    padding: 0.15rem 0.15rem;
    width: 6rem;
    border-radius: 10px;
    margin: 0 auto;
    padding: 0.35rem;

    font-size: var(--font-med-small);
    font-family: var(--font-family);
    color: var(--compliment-color);
    box-shadow: var(--shadow);
    opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;
const RenderCartItems = () => {
    return (
        <div>
            {myCart.map((item, index) => (
                <div key={index}>
                    <div >
                        <MenuItem
                            image={item.image}
                            title={item.name}
                            ingredients={item.ingredients}
                            price={item.price}
                        />
                    </div>
					{/* <input type="text" placeholder="Allergisk?" /> */}
                    <DeleteOrderItem>Remove</DeleteOrderItem>
                </div>
            ))}
        </div>
    );
};

export default function YourOrderOverlay() {
    const overlayVisible = useOverlayStore((state) => state.overlayVisible);
    const toggleOverlay = useOverlayStore((state) => state.toggleOverlay);

    const handleCloseOverlay = () => {
        toggleOverlay();
    };

    let myPrice = myCart.map((item) => item.price);

    const totalPrice = () => {
        let total = 0;
        if (myPrice.length > 0) {
            return myPrice.reduce((accumulator, current) => {
                const priceArray = current.split(" ");
                return accumulator + parseFloat(priceArray[0]);
            }, 0);
        }
        return total;
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
                <RenderCartItems />
                <OrderSumContainer>
                    <Divider />
                    <OrderSum>
                        <p>Your sum {totalPrice()}:- </p>
                        <button>Pay</button>
                    </OrderSum>
                </OrderSumContainer>
            </ContentContainer>
        </OverlayContainer>
    );
}
