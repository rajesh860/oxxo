import { RouterProvider } from "react-router-dom";
import { router } from "./AppRouter";


import "./styles/App.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
