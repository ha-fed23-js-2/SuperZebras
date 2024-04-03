import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Landing from './Landing.jsx';
import Mums from './Mums.jsx';
import MumsMenu from './MumsMenu.jsx';

const router = createHashRouter([
	{
		// Om URL i adressfältet matchar denna route '/'
		path: "/",

		// Så ska Root-komponenten renderas
		element: <Root />,

		// Lägg till ett element om du vill hantera felaktiga länkar
		// errorElement: <ErrorPage />,

		// Inuti Root ska vi klistra in den komponent vars route matchar URL bäst
		children: [
			{
				path: '/Landing',
				element: <Landing />
			},
			{
				path: '/Mums',
				element: <Mums />
			},
			{
				path: '/Mumsmenu',
				element: <MumsMenu />
			},
		]
	},
	
]);

export { router }