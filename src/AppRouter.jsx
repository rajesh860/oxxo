import { createBrowserRouter, Link } from "react-router-dom";
import MainLayout from "./common/MainLayout";
import Dashboard from "./pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    Children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: <Link to="about">About Us</Link>,
      },
    ],
  },
]);
