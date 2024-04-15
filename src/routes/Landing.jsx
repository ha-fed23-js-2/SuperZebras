import styled from "styled-components";
import Navbar from "../components/molecules/Navbar";
import FoodSection from "../components/organisms/FoodSection";
import DrinkSection from "../components/organisms/DrinkSection";
import FooterSection from "../components/organisms/FooterSection";
import sectionBg from "/assets/img/wavy-drink-bg.svg";
import YourOrderOverlay from "../components/organisms/YourOrderOverlay";

const StyledLanding = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	font-size: var(--font-med);
	align-items: center;
	text-align: center;
	box-sizing: border-box;
`;

const DrinkSectionBg = styled.div`
	background-color: var(--secondary-color);
	background-image: url(${sectionBg});
	background-repeat: no-repeat;
	background-position: top;
	padding-top: 200px;
	width: 100%;
`;

const Landing = () => {
	return (
		<main>
			<YourOrderOverlay />
			<Navbar />
			<StyledLanding>
				<FoodSection />
				<DrinkSectionBg id="drinks">
					<DrinkSection />
				</DrinkSectionBg>
			</StyledLanding>
			<FooterSection />
		</main>
	);
};
export default Landing;
