import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "./Home";
import Other from "./Other";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/other",
        element: <Other />,
      },
    ],
  },
]);
