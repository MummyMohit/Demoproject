import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import Content from "./Components/Content";
import Table from "./Components/Table";
import Form from "./Components/Form";
import Product from "./Views/Product";
import Login from "./Login/Login";
import SignIn from "./Login/SignIn";

const router = createBrowserRouter([
  {
    // Login-specific layout or no layout for `/`
    path: "/",
    element: <Login />, // No layout for Login
  },
  {
    // Login-specific layout or no layout for `/`
    path: "/signin",
    element: <SignIn/>, // No layout for Login
  },
  {
    // MainLayout with nested routes
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Content />,
      },
      {
        path: "table",
        element: <Table />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "product",
        element: <Product />,
      },
      // {
      //   path: "login",
      //   element: <Login />,
      // },
    ],
  },
]);

export default router;
