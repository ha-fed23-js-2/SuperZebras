import styled from "styled-components";
import facts from "../data/facts";
import Navbar from "../components/moledules/Navbar";
import LangosImage from "../assets/img/langos-section-img.svg";
import drinkImage from "../assets/img/drinks-section-img.svg";
import sectionBg from "../assets/img/section-bg.svg";
import YourOrderOverlay from "../components/organisms/YourOrderOverlay";

const StyledLanding = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-size: var(--font-med);
    align-items: center;
    // justify-content: flex-start;
    text-align: center;
    box-sizing: border-box;
`;

const Title = styled.h1`
    color: var(--secondary-color);
    padding: 1rem;
    line-height: 1;
`;
const Title2 = styled.h1`
    color: var(--compliment-color);
    padding: 1rem;
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
    background-color: var(--secondary-color);
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
    // font-size: var(--font-normal);
`;

const FoodImage = styled.img`
    width: 200px;
    margin: 1em auto;
`;

const FoodSection = styled(Section)`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0 20px;
`;

const DrinkSection = styled(Section)`
    color: var(--compliment-color);
    width: 100%;
    background-color: var(--secondary-color);
    background-image: url(${sectionBg});
    // background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    padding-top: 200px;
    padding: 200px 20px;
`;
const FooterSection = styled.footer`
    color: var(--compliment-color);
    width: 100%;
    min-height: auto;
`;

const H6 = styled.h6`
    color: var(--secondary-color);
`;

const Line = styled.hr`
    margin: 1rem;
    flex-grow: 2;
`;

const DrinkText = styled.div`
    text-align: center;
    font-size: 20px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    color: var(--secondary-color);
    background-color: var(secondary-color);
    align-items: center;
`;

const DrinkSectionBg = styled.div`
background-color: var(--secondary-color);
    background-image: url(${sectionBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    padding-top: 200px;
    width: 100%;
    `

const Landing = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const factString = randomFact.fact;

    return (
        <main>
            <YourOrderOverlay />

            <Navbar />
            <StyledLanding>
                <FoodSection>
                    <Title>
                        Sugen på <br />
                        <LangosSpan> fucking </LangosSpan>langos?
                    </Title>

                    <FoodImage src={LangosImage} alt="Langos" />

                    <Row>
                        <Line />
                        <DrinkText>langos</DrinkText>
                        <Line />
                    </Row>
                </FoodSection>
                <DrinkSectionBg>
                    <DrinkSection>
                        <Title2>
                            Sugen på <br />
                            <DrinkSpan> FUCKING</DrinkSpan> bärs?
                        </Title2>
                        <FoodImage src={drinkImage} alt="Drinks" />

                        <Row>
                            <Line />
                            <DrinkText >drinks</DrinkText>
                            <Line />
                        </Row>
                    </DrinkSection>
                </DrinkSectionBg>

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
