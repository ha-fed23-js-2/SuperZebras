import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInputForm = styled.input`
border-radius: var(--border-radius);
color: var(--complment-color);
background-color: var(--secondary-color);
padding: 0.15rem;
font-size: var(--font-med-small);
font-family: var(--font-family);
color: var(--compliment-color);
box-shadow: var(--shadow);
&::placeholder {
	color: var(--compliment-color_alpha);
	text-align: center;
}
`;

const FormInput = ({ type, placeholder, value, onChange }) => {
	return <StyledInputForm type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

FormInput.propTypes = {
	type: PropTypes.oneOf(["password"]),
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

export default FormInput;
