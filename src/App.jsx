import "./assets/index.css";
import { FormPresu } from "./components/form/FormPresu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/formPresu",
    element: <FormPresu />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <FormPresu />
    </RouterProvider>
  );
}

export default App;
