import styled from "styled-components";
import Button from "../atoms/Button";
import FormInput from "../atoms/FormInput";
import PropTypes from "prop-types";

const Container = styled.div``;

const PasswordInput = ({ type, placeholder, value, onChange, onSubmit }) => (
	<Container>
		<FormInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
		<Button onClick={onSubmit} isLogin={true}>
			Släpp in mig!
		</Button>
	</Container>
);

PasswordInput.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
};

export default PasswordInput;
