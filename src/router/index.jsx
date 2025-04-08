import { createBrowserRouter } from "react-router-dom";
import Layout from "src/components/layouts/Layout";
import Portfolio from "src/components/Portfolio";
import Main from "src/pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        name: "landing",
        element: <Main />,
      },
      {
        path: "/portfolio",
        name: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

export default router;
