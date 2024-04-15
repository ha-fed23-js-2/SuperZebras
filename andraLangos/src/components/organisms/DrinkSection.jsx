import React from "react";
import styled from "styled-components";
import drinkImage from "../../assets/img/drinks-section-img.svg";
import RenderMenuItem from "./RenderMenuItem";
import { useEffect, useState } from "react";

const BeerSection = styled.section`
	color: var(--compliment-color);
	width: 100%;
	background-color: var(--secondary-color);
	padding: 0 20px 200px 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Title2 = styled.h1`
	line-height: 1;
`;

const DrinkSpan = styled.span`
	font-size: var(--font-med-small);
`;

const FoodImage = styled.img`
	width: 200px;
	margin: 1em auto;
`;

const ItemLine = styled.p`
	width: 100%;
	text-align: center;
	border-bottom: 1px solid rgb(221, 206, 205);
	line-height: 0.05em;
	font-size: var(--font-med-smaller);
	span {
		padding: 0 14px;
		background-color: var(--secondary-color);
	}
`;

const RenderDrinkItems = styled.div`
	display: flex;
	flex-direction: column;
`;

export default function DrinkSection() {
	const [showMenuItem, setShowMenuItem] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowMenuItem(true);
		}, 1000);
	}, []);
	return (
		<BeerSection>
			<Title2>
				Sugen på <br />
				<DrinkSpan> god jävla</DrinkSpan> bärs?
			</Title2>
			<FoodImage src={drinkImage} alt="Drinks" />
			<ItemLine>
				<span>Bärs</span>
			</ItemLine>
			<RenderDrinkItems>{showMenuItem && <RenderMenuItem category="drinks">test</RenderMenuItem>}</RenderDrinkItems>
		</BeerSection>
	);
}
