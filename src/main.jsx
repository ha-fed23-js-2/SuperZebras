import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";

const router = createHashRouter([{ path: "/", element: <Root /> }]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
