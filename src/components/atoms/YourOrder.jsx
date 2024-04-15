import styled from "styled-components";
import yourOrderLogo from "/assets/img/your-order-img.svg";
import { useCartStore } from "../../data/ItemStore";

const YourOrderContainer = styled.div`
	width: 35px;
	position: relative;
	height: auto;
	// padding-right: 20px;
`;

const YourOrderLogo = styled.img`
	width: 35px;
	position: relative;
	// background: var(--main-color);
	// border-radius: 100%;
`;

const YourOrderValueContainer = styled.div`
	position: absolute;
	right: -6px;
	top: 20px;
	transform: rotate(-5deg);
`;

const YourOrderValueBackground = styled.div`
	padding: 1px 6px;
	background-color: var(--notification-color);
	color: var(--secondary-color);
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const YourOrderValue = styled.p`
	position: relative;
	transform: rotate(5deg);
`;

export default function YourOrder() {
	const items = useCartStore((state) => state.cartStuff);
	console.log("your order items lenght: ", items);
	const { cartStuff } = useCartStore();
	//   const [overlayVisible, setOverlayVisible] = useState(false);

	//   const toggleOverlay = () => {
	//     setOverlayVisible(!overlayVisible);
	//   };

	return (
		<>
			<YourOrderContainer>
				<YourOrderLogo src={yourOrderLogo} />
				<YourOrderValueContainer>
					<YourOrderValueBackground>
						<YourOrderValue>{cartStuff}</YourOrderValue>
					</YourOrderValueBackground>
				</YourOrderValueContainer>
			</YourOrderContainer>
			{/* <Overlay visible={overlayVisible} onClick={toggleOverlay} /> */}
		</>
	);
}
