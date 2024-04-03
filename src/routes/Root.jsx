import { Link, NavLink, Outlet } from "react-router-dom"

// Router motsvarar App-komponenten
// Består av en statisk del (visas alltid) och en dynamisk (Outlet ersätts av andra komponenter)
const Root = () => (
	<div className="app">
		<header>
			<nav>
			</nav>
		</header>

		<main>
			<Outlet />
		</main>
	</div>
)

export default Root