import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import AddCoffee from "../componants/AddCoffee.jsx";
import UpdateCoffee from "../componants/UpdateCoffee.jsx"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AddCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/UpdateCoffee",
        element: <UpdateCoffee></UpdateCoffee>,
      },
      
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
