import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./Routes/Bag.jsx";
import Home from "./Routes/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
