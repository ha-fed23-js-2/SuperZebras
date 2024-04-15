import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/img/andra-longos-light-logo.svg";
import PasswordInput from "../components/moledules/PasswordInput";
import { useNavigate } from "react-router-dom";

const StyledMums = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	font-size: var(--font-med);
`;
const Logo = styled.img`
	align-self: center;
	width: 200px;
	height: auto;
	margin-top: 286px;
	margin-bottom: 20px;
`;

const Mums = () => {
	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("Du kommer väl ihåg lösenordet för fan!?");
	const navigate = useNavigate();

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handlePasswordSubmit = () => {
		if (password.length >= 4) {
			// yes I also check the lenght. Because I did this in the onchange earlier, and left it here for good measure.
			const isPasswordCorrect = password === "mums";
			if (!isPasswordCorrect) {
				// todo: array with error messages, because fun ;)
				setErrorMsg("Haha nej det gör du ju inte. Prova igen. YOU GOT THIS");
			} else {
				setErrorMsg("");
				navigate("/MumsMenu");
			}
		}
	};

	return (
		<StyledMums>
			<Logo src={logo} alt="Logo" />
			<section className="admin">{errorMsg}</section>
			<PasswordInput
				type="password"
				placeholder={"Ajjemen!"}
				value={password}
				onChange={handlePasswordChange}
				onSubmit={handlePasswordSubmit}
			/>
		</StyledMums>
	);
};

export default Mums;
