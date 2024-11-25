import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
import MainLayout from "./Layout/MainLayout";
import Content from "./Components/Content";
import Table from "./Components/Table";
import Form from "./Components/Form"
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
      ],
    },
  ]);
  export default router