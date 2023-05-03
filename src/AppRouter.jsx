import { createBrowserRouter, Link } from "react-router-dom";
import MainLayout from "./common/MainLayout";
export const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout />,
    Children: [
      {
        path: "/about",
        element: <Link to="about">About Us</Link>,
      },
    ],
  },
]);
