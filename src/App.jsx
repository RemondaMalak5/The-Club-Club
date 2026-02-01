import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing_page from "./pages/landing/Landing_page";
import Main_Layout from "./pages/Branches/Main_Component/Main_Layout";
import October_Home from "./pages/Branches/Branch_6_october/pages/October_Home";
import New_Capital_Home from "./pages/Branches/Branch_New_Capital/Pages/New_Capital_Home";
import News from "./pages/Branches/Branch_6_october/pages/News";
import BranchLayout from "./pages/Branches/Layout/BranchLayout";
import Services from "./pages/Branches/Branch_6_october/pages/Services";
import Championships from "./pages/Branches/Branch_6_october/pages/Championships";
import Loyalty from "./pages/Branches/Branch_6_october/pages/Loyalty";
import NewsDetails from "./pages/Branches/Branch_6_october/component/News/NewsDetails";
import Services_details from "./pages/Branches/Branch_6_october/component/Services/Services_details";
import ChampionshipsDetails from "./pages/Branches/Branch_6_october/component/Championships/ChampionshipsDetails";
import LoyaltyDetails from "./pages/Branches/Branch_6_october/component/Loyalty/LoyaltyDetails";

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
        element: <BranchLayout />,
        children: [
          {
            path: "6-october",
            children: [
              { index: true, element: <October_Home /> },
              { path: "News", element: <News /> },
              { path: "Loyalty", element: <Loyalty /> },
              { path: "LoyaltyDetails/:id", element: <LoyaltyDetails /> },
              { path: "Championships", element: <Championships /> },
              {path: "Championships/:id", element: <ChampionshipsDetails/> },
              { path: "News/:id", element: <NewsDetails /> },
              { path: "Services", element: <Services />},
              {path: "Services/services_details", element: <Services_details />}
            ],
          },
          {
            path: "Sheraton",
            children: [
              { index: true, element: <New_Capital_Home /> },
              { path: "News", element: <News /> },
            ],
          },
        ],
      },
    ],
  }

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
