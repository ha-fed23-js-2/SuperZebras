// This should work but it doesn't
// import { ReactComponent as Logo } from "../../assets/img/andra-longos-light-logo.svg";
// so we import it like this instead:
import logo from "../assets/img/andra-longos-light-logo.svg";

const Landing = () => (
	<div>
		<img src={logo} alt="Logo" />
		<h2> Andra Langos - Riktigt go jävla Langos!</h2>
		<p> Vi har öl också. Vi ligger ju fan ändå på lången. </p>
	</div>
);

export default Landing;
