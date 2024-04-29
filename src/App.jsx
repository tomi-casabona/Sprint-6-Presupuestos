import "./assets/index.css";
import { FormPresu } from "./components/form/FormPresu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/formPresu",
    element: <FormPresu />,
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
