import "./assets/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { QuotationMaker } from "./pages/QuotationMaker";
import Error from "./components/Error";
import { FormProvider } from "./context/FormProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/QuotationMaker",
    element: <QuotationMaker />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <FormProvider>
      <RouterProvider router={router}>
        <QuotationMaker />
      </RouterProvider>
    </FormProvider>
  );
}

export default App;
