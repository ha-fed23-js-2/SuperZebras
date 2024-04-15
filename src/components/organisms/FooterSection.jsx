import styled from "styled-components";
import facts from "../../data/facts";

import footerSectionBg from "/assets/img/wavy-footer-bg.svg";

const StyledFooterSection = styled.footer`
	width: 100%;
	// min-height: 500px;
	// border-radius: 20px 20px 0 0;
	background-color: var(--compliment-color);
	background-image: url(${footerSectionBg});
	// background-size: cover;
	background-repeat: no-repeat;
	// background-position: top;
	box-sixing: border-box;
	padding: 0 20px;
`;

const Subtitle = styled.h2`
	color: var(--secondary-color);
	padding: 1rem;
	font-size: var(--font-med-small);
	line-height: 1;
`;
const RandomFact = styled.h3`
	color: var(--secondary-color);
	// background-color: var(--secondary-color);
	padding: 1rem;
	font-size: var(--font-med-smaller);
	line-height: 1.15;
	letter-spacing: 1px;
	padding-top: 150px;
	box-sizing: border-box;
	span {
		font-size: 2em;
	}
	letter-spacing: var(--letter-spacing-big);
`;

const FooterInformationContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: var(--secondary-color);
	padding: 1rem;
	font-size: var(--font-med-smaller);
	letter-spacing: var(--letter-spacing-med);
`;

const LeftContainer = styled.div``;
const RightContainer = styled.div``;

export default function FooterSection() {
	const randomFact = facts[Math.floor(Math.random() * facts.length)];
	const factString = randomFact.fact;
	return (
		<StyledFooterSection>
			<RandomFact>
				<span>Visste du att?</span> <br />
				{factString}
			</RandomFact>
			<Subtitle></Subtitle>
			<FooterInformationContainer>
				<LeftContainer>Adress: mellan första och tredje lång</LeftContainer>
				<RightContainer>andra-langos@gmail.com</RightContainer>
			</FooterInformationContainer>
		</StyledFooterSection>
	);
}
