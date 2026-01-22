import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing_page from "./pages/landing/Landing_page";
import Main_Layout from "./pages/Branches/Main_Component/Main_Layout";
import October_Home from "./pages/Branches/Branch_6_october/pages/October_Home";
import New_Capital_Home from "./pages/Branches/Branch_New_Capital/Pages/New_Capital_Home";
import News from "./pages/Branches/Branch_6_october/pages/News";

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
        path: "6-october",
        element: <October_Home/>,
          children: [
          {
            index: true,
            element: <October_Home />,
          },
          {
            path: "News",
            element: <News />,
          },
        ],
      },
      {
        path: "Sheraton",
        element: <New_Capital_Home/>,
      },{
        path: "Capital",
        element: <New_Capital_Home/>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
