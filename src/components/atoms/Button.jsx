/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
	margin: 1.35rem;
	border-radius: var(--border-radius);
	background-color: var(--cta-color);
	border-radius: var(--border-radius);
	color: var(--compliment-color);
	padding: 0 0.5rem;
	// width: 40%;
	font-size: var(--font-med-small);
	font-family: var(--font-family);
	box-shadow: var(--shadow);
	border: 2px solid black;
`;
const Button = ({ children, onClick }) => <StyledButton onClick={onClick}>{children}</StyledButton>;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
};

export default Button;
