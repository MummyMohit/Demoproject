import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
import MainLayout from "./Layout/MainLayout";
import Content from "./Components/Content";
import Table from "./Components/Table";
import Form from "./Components/Form"
import Product from "./Views/Product";
import Login from "./Login/Login";
import SignIn from "./Login/SignIn";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Content />,
          
        },
        {
          path: "/table",
          element: <Table />,
          
        },
        {
          path: "/form",
          element: <Form />,
          
        },
        {
          path: "/product",
          element: <Product />,
          
        },
        {
          path: "/login",
          element: <Login />,
          
        },

        {
          path: "/signin",
          element: <SignIn />,
          
        },
      ],
    },
  ]);
  export default router