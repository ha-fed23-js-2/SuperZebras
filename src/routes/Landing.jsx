import styled from "styled-components";
import facts from "../data/facts";
import logo from "../assets/img/andra-longos-light-logo.svg";
import LangoImage from "../assets/img/langos-section-img.svg"


const StyledLanding = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	font-size: var(--font-med);
	align-items: center;
	justify-content: flex-start;
	text-align: center;
	padding: 20px;
	box-sizing: border-box;
`;

const Logo = styled.img`
	align-self: flex-start;
	width: 200px;
	height: auto;
	margin-bottom: 20px;
`;

const Title = styled.h1`
	color: var(--Secondary-color);
	padding: 0.5rem;
	line-height: 1;

`;

const Subtitle = styled.h2`
	color: var(--compliment-color);
	padding: 1rem;
	font-size: var(--font-med-small);
	line-height: 1;
`;
const RandomFact = styled.h3`
	color: var(--compliment-color);
	padding: 1rem;
	font-size: var(--font-med-smaller);
	line-height: 1.15;
	letter-spacing: 1px;
`;
const Span = styled.span`
    color: var(--secondary-color);
	font-size: var(--font-med-small);
`;


const Landing = () => {
	const randomFact = facts[Math.floor(Math.random() * facts.length)];
	const factString = randomFact.fact;
	

	return (
		<StyledLanding>
			<Logo src={logo} alt="Logo" />
						<Title>Sugen på
						</Title> 
						<Title><Span> FUCKING</Span> langos?</Title>
						
            <img src={LangoImage} alt="Langos"/>

			<h5>langos</h5>
			
			<RandomFact>{factString}</RandomFact>
			<Subtitle></Subtitle>
		</StyledLanding>
		
	);
};

export default Landing;
