import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./common/MainLayout";
import Dashboard from "./pages/dashboard";
import AddMovies from "./pages/movies/addMovies";
import AllMovies from "./pages/movies/allMovies";




export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/add-movies",
        element: <AddMovies />,
      },
      {
        path: "/all-movies",
        element: <AllMovies />,
      },
    ],
  },
]);
