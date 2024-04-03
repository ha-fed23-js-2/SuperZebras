import { Outlet } from "react-router-dom";

function Root() {
	return (
		<div>
			<header className="App-header"></header>
			<Outlet />
		</div>
	);
}
export default Root;
