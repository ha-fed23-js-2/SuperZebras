import styled from "styled-components";
import Hamburger from "../atoms/Hamburger";
import logo from "../../assets/img/andra-longos-light-logo.svg";
import YourOrder from "../atoms/YourOrder";
import { useOverlayStore } from "../../data/ItemStore";

const StyledNavbar = styled.nav`
	margin: 20px;
	box-sizing: border-box;
	position: sticky;
	top: 0;
	// background-color: var(--main-color);
	// with: 100%;
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
	z-index: 3000;
`;

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
`;

export default function Navbar() {
	const toggleOverlay = useOverlayStore((state) => state.toggleOverlay);
	console.log("Navbar - toggleOverlay:", toggleOverlay);

	return (
		<StyledNavbar>
			<StyledUl>
				<Logo src={logo} alt="Logo" />
				<Container>
					<button onClick={toggleOverlay}>
						<YourOrder />
					</button>{" "}
					<Hamburger />
				</Container>
			</StyledUl>
		</StyledNavbar>
	);
}
