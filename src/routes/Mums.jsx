import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/img/andra-longos-light-logo.svg";
import PasswordInput from "../components/moledules/PasswordInput";
import { useNavigate } from "react-router-dom";

const StyledMums = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	font-size: var(--font-med);
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
			const isPasswordCorrect = password === "mums";
			if (!isPasswordCorrect) {
				setErrorMsg("Haha nej det gör du ju inte. Prova igen. YOU GOT THIS");
			} else {
				setErrorMsg("");
				navigate("/MumsMenu");
			}
		}
	};

	return (
		<StyledMums>
			<img src={logo} alt="Logo" />
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
