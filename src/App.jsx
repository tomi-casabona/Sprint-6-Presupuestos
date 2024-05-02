import "./assets/index.css";
import { FormPresu } from "./components/form/FormPresu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import { FormProvider } from "./context/FormProvider";

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
    <FormProvider>
      <RouterProvider router={router}>
        <FormPresu />
      </RouterProvider>
    </FormProvider>
  );
}

export default App;
