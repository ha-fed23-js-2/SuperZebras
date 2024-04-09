import styled from "styled-components";
import facts from "../data/facts";
import Navbar from "../components/moledules/Navbar";
import LangosImage from "../assets/img/langos-section-img.svg"
import drinkImage from "../assets/img/drinks-section-img.svg"


const StyledLanding = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	font-size: var(--font-med);
	align-items: center;
	justify-content: flex-start;
	text-align: center;
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
const Section = styled.section`
    padding: 0;

`;

const LangosSpan = styled.span`
    color: var(--secondary-color);
	font-size: var(--font-med-small);
`;

const DrinkSpan = styled.span`
    color: var(--compliment-color);
	font-size: var(--font-med-small);
`;

const FoodImage = styled.img`
  
`;
const FoodSection = styled(Section)`
    
`;

const DrinkSection= styled(Section)`
    color: var(--compliment-color);
	width:100%;
	background-color: var(--secondary-color);
	
`;

const Landing = () => {
	const randomFact = facts[Math.floor(Math.random() * facts.length)];
	const factString = randomFact.fact;
	
	return (
		<main>
			<Navbar />
		<StyledLanding>
			<Logo src={logo} alt="Logo" />
         
			<FoodSection> 
				<Title>Sugen på </Title> 
					 <Title><LangosSpan> FUCKING </LangosSpan>langos?</Title>
						
            <FoodImage src={LangosImage} alt="Langos"/>

			<h5>langos</h5>

			</FoodSection>
						
			<DrinkSection> 
				<Title>Sugen på
						</Title> 
						<Title><DrinkSpan> FUCKING</DrinkSpan> bärs?</Title>
						<img src={drinkImage} alt="Drinks"/>
						<h5>drinks</h5>
			</DrinkSection>

			<RandomFact>{factString}</RandomFact>
			<Subtitle></Subtitle>
		</StyledLanding>
		
	);
};

export default Landing;
