import styled from "styled-components";
import LangosImage from "../../assets/img/langos-section-img.svg";
import RenderMenuItem from "./RenderMenuItem";
import { useEffect, useState } from "react";
const LangosSection = styled.section`
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	padding: 0 20px;
	background-color: var(--main-color);
	color: var(--secondary-color);
`;

const ItemLine = styled.p`
	width: 100%;
	text-align: center;
	border-bottom: 1px solid rgb(221, 206, 205);
	line-height: 0.05em;
	font-size: var(--font-med-smaller);
	span {
		padding: 0 14px;
		background-color: var(--main-color);
	}
`;

const Title = styled.h1`
	line-height: 1;
`;
const LangosSpan = styled.span`
	font-size: var(--font-med-small);
`;

const FoodImage = styled.img`
	width: 200px;
	margin: 1em auto;
`;

// TODO: Insert code for render food items here:
const RenderFoodItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default function FoodSection() {
	// wait for promise to resolve with this ugly hack because hax
	const [showMenuItem, setShowMenuItem] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowMenuItem(true);
		}, 1000);
	}, []);

	return (
		<LangosSection>
			<Title>
				Sugen på <br />
				<LangosSpan> god jävla </LangosSpan>langos?
			</Title>
			<FoodImage src={LangosImage} alt="Langos" />
			<ItemLine>
				<span>Langos</span>
			</ItemLine>
			<RenderFoodItems> {showMenuItem && <RenderMenuItem category="food">test</RenderMenuItem>}</RenderFoodItems>
		</LangosSection>
	);
}
