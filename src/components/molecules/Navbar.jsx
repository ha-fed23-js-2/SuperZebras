import styled from "styled-components";
import Hamburger from "../atoms/Hamburger";
import logo from "/assets/img/test-logo-img.svg";
import YourOrder from "../atoms/YourOrder";
import { useOverlayStore, useCartStore } from "../../data/ItemStore";
const StyledNavbar = styled.nav`
	padding: 20px 0;
	box-sizing: border-box;
	position: sticky;
	top: 0;
	background-color: var(--main-color);
	z-index: 2999;
	border-radius: 0 0 10px 10px;
	// with: 100%;
	@media (max-width: 480px) {
		border-radius: 0;
	}
`;

const StyledUl = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;

const Logo = styled.img`
	width: 120px;
	height: auto;
	z-index: 3001;
	padding-left: 20px;
`;

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
`;

export default function Navbar() {
	let cartItems = useCartStore((state) => state.cart);
	const toggleOverlay = useOverlayStore((state) => state.toggleOverlay);
	// console.log("Navbar - toggleOverlay:", toggleOverlay);

	return (
		<StyledNavbar>
			<StyledUl>
				<Logo src={logo} alt="Logo" />
				<Container>
					<button onClick={toggleOverlay}>
						<YourOrder CartItems={cartItems} />
					</button>{" "}
					<Hamburger />
				</Container>
			</StyledUl>
		</StyledNavbar>
	);
}
