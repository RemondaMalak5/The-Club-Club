import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing_page from "./pages/landing/Landing_page";
import Main_Layout from "./pages/Branches/Main_Component/Main_Layout";
import Branch_Home from "./pages/Branches/Branch_6_october/pages/Branch_Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing_page />,
  },
  {
    path: "branches",
    element: <Main_Layout />,
    children: [
      {
        path: ":6-october",
        element: <Branch_Home/>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
