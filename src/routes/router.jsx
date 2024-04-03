import * as ReactDOM from "react-dom/client";
import React from "react";
import Landing from "./Landing";
import Root from "./Root";
import Mums from "./Mums";
import MumsMenu from "./MumsMenu";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				// we use index that tell the router that this is the default page
				index: true,
				element: <Landing />,
			},
			{
				path: "Mums",
				element: <Mums />,
			},
			{
				path: "MumsMenu",
				element: <MumsMenu />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
