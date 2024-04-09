import styled from "styled-components";
import facts from "../data/facts";
import Navbar from "../components/moledules/Navbar";
import LangosImage from "../assets/img/langos-section-img.svg";
import drinkImage from "../assets/img/drinks-section-img.svg";

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

const FoodImage = styled.img``;
const FoodSection = styled(Section)``;

const DrinkSection = styled(Section)`
	color: var(--compliment-color);
	width: 100%;
	background-color: var(--secondary-color);
`;
const FooterSection = styled.footer`;
      color:var(--compliment-color);
      width: 100%; 
	  min-height: auto; 
`;

 const H6 = styled.h6`
 color: var(--secondary-color);

 `;

const Line = styled.hr`
boder:none;
margin: 2rem; 
flex-grow: 2;
`;

const DrinkText = styled.div`
text-align: center;
font-size:20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  
  `;

const Landing = () => {
	const randomFact = facts[Math.floor(Math.random() * facts.length)];
	const factString = randomFact.fact;
	return (
		<main>
			<Navbar />
			<StyledLanding>
				<FoodSection>
					<Title>Sugen på </Title>
					<Title>
						<LangosSpan> FUCKING </LangosSpan>langos?
					</Title>

					<FoodImage src={LangosImage} alt="Langos" />

					<Row> 
						<Line/>
					<DrinkText>langos</DrinkText>
					<Line/>
					</Row>
				</FoodSection>


				<DrinkSection>
					<Title>Sugen på</Title>
					<Title>
						<DrinkSpan> FUCKING</DrinkSpan> bärs?
					</Title>
					<img src={drinkImage} alt="Drinks" />

					<Row> 
						<Line/>
					<DrinkText>drinks</DrinkText>
					<Line/>
					</Row>
					
				</DrinkSection>

				<RandomFact>{factString}</RandomFact>
				<Subtitle></Subtitle>


				<FooterSection className="FooterSection"> 
					<H6>ANDRA LANGOS </H6>
				</FooterSection>

			</StyledLanding>
		</main>
	);
};
export default Landing;
