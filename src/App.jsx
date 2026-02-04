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
import Sheraton_Home from "./pages/Branches/Branch_Sheraton/Pages/Sheraton_Home";
import About from "./pages/Branches/Branch_6_october/pages/About";
import About_the_club from "./pages/Branches/Branch_6_october/component/About/About_the_club";
import Board_ChairmanWord from "./pages/Branches/Branch_6_october/component/About/Board_ChairmanWord.JSX";
import Boardmember from "./pages/Branches/Branch_6_october/component/About/Boardmember";
import Strategic_Plans from "./pages/Branches/Branch_6_october/component/About/Strategic_Plans";
import Teamwork from "./pages/Branches/Branch_6_october/component/About/Teamwork";
import Contactus from "./pages/Branches/Branch_6_october/component/About/Contactus";
import Minister_welcom from "./pages/Branches/Branch_6_october/component/About/Minister_welcom";
import Login from "./pages/Auth/login/Login";
import Register from "./pages/Auth/Register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing_page />,
  },

   {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
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
              { path: "Championships/:id", element: <ChampionshipsDetails /> },
              { path: "News/:id", element: <NewsDetails /> },
              { path: "Services", element: <Services /> },
              { path: "Services/services_details", element: <Services_details /> },
              {
                path: "About",
                element: <About/>,   
                children: [
                  { path: "about-the-club", element: <About_the_club/> },
                  { path: "boardchairmanword", element: <Board_ChairmanWord/> },
                  { path: "board-member", element: <Boardmember/> },
                  { path: "strategic-plans", element: <Strategic_Plans/> },
                  { path: "teamwork", element: <Teamwork/> },
                  {path:"contact-us", element: <Contactus/>},
                  {path:"minister-welcome", element: <Minister_welcom/>},

                ]
              },
            ],
          },
          {
            path: "Capital",
            children: [
              { index: true, element: <New_Capital_Home /> },
              { path: "News", element: <News /> },
            ],
          },
          {
            path: "Sheraton",
            children: [
              { index: true, element: <Sheraton_Home /> },
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
