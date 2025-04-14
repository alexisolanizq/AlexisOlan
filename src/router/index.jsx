import { createBrowserRouter } from "react-router-dom";
import Layout from "src/components/layouts/Layout";
import NotFound from "src/components/layouts/NotFound";
import Portfolio from "src/components/Portfolio";
import Main from "src/pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <NotFound />
      },
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
