import { RouterProvider } from "react-router-dom";
import { router } from "./AppRouter";


import "./styles/App.scss";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
