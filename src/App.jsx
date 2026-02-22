// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Landing_page from "./pages/landing/Landing_page";
// import Main_Layout from "./pages/Branches/Main_Component/Main_Layout";
// import October_Home from "./pages/Branches/Branch_6_october/pages/October_Home";
// import New_Capital_Home from "./pages/Branches/Branch_New_Capital/Pages/New_Capital_Home";
// import News from "./pages/Branches/Branch_6_october/pages/News";
// import BranchLayout from "./pages/Branches/Layout/BranchLayout";
// import Services from "./pages/Branches/Branch_6_october/pages/Services";
// import Championships from "./pages/Branches/Branch_6_october/pages/Championships";
// import Loyalty from "./pages/Branches/Branch_6_october/pages/Loyalty";
// import NewsDetails from "./pages/Branches/Branch_6_october/component/News/NewsDetails";
// import Services_details from "./pages/Branches/Branch_6_october/component/Services/Services_details";
// import ChampionshipsDetails from "./pages/Branches/Branch_6_october/component/Championships/ChampionshipsDetails";
// import LoyaltyDetails from "./pages/Branches/Branch_6_october/component/Loyalty/LoyaltyDetails";
// import Sheraton_Home from "./pages/Branches/Branch_Sheraton/Pages/Sheraton_Home";
// import About from "./pages/Branches/Branch_6_october/pages/About";
// import About_the_club from "./pages/Branches/Branch_6_october/component/About/About_the_club";
// import Board_ChairmanWord from "./pages/Branches/Branch_6_october/component/About/Board_ChairmanWord.JSX";
// import Boardmember from "./pages/Branches/Branch_6_october/component/About/Boardmember";
// import Strategic_Plans from "./pages/Branches/Branch_6_october/component/About/Strategic_Plans";
// import Teamwork from "./pages/Branches/Branch_6_october/component/About/Teamwork";
// import Contactus from "./pages/Branches/Branch_6_october/component/About/Contactus";
// import Minister_welcom from "./pages/Branches/Branch_6_october/component/About/Minister_welcom";
// import Login from "./pages/Auth/login/Login";
// import Register from "./pages/Auth/Register/Register";
// import ProtectedRoute from "./components/Auth/ProtectedRoute";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Landing_page />,
//   },

//    {
//     path: "/login",
//     element: <Login/>,
//   },
//   {
//     path: "/register",
//     element: <Register/>,
//   },
//   {
//     path: "branches",
//     element:  (
//     <ProtectedRoute>
//       <Main_Layout />
//     </ProtectedRoute>),
//     // children: [
//     //   {
//         // element: <BranchLayout />,
//         children: [
//           {
//             path: "6-october",
//             children: [
//               { index: true, element: <October_Home /> },
//               { path: "News", element: <News /> },
//               { path: "Loyalty", element: <Loyalty /> },
//               { path: "LoyaltyDetails/:id", element: <LoyaltyDetails /> },
//               { path: "Championships", element: <Championships /> },
//               { path: "Championships/:id", element: <ChampionshipsDetails /> },
//               { path: "News/:id", element: <NewsDetails /> },
//               { path: "Services", element: <Services /> },
//               { path: "Services/services_details", element: <Services_details /> },
//               {
//                 path: "About",
//                 element: <About/>,   
//                 children: [
//                   { path: "about-the-club", element: <About_the_club/> },
//                   { path: "boardchairmanword", element: <Board_ChairmanWord/> },
//                   { path: "board-member", element: <Boardmember/> },
//                   { path: "strategic-plans", element: <Strategic_Plans/> },
//                   { path: "teamwork", element: <Teamwork/> },
//                   {path:"contact-us", element: <Contactus/>},
//                   {path:"minister-welcome", element: <Minister_welcom/>},

//                 ]
//               },
//             ],
//           },
//           {
//             path: "Capital",
//             children: [
//               { index: true, element: <New_Capital_Home /> },
//               { path: "News", element: <News /> },
//             ],
//           },
//           {
//             path: "Sheraton",
//             children: [
//               { index: true, element: <Sheraton_Home /> },
//               { path: "News", element: <News /> },
//             ],
//           },
//         ],
//       // },
//     // ],
//   }

// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing_page from "./pages/landing/Landing_page";
import Main_Layout from "./pages/Branches/Main_Component/Main_Layout";
import October_Home from "./pages/Branches/Branch_6_october/pages/October_Home";
import New_Capital_Home from "./pages/Branches/Branch_New_Capital/Pages/New_Capital_Home";
import Sheraton_Home from "./pages/Branches/Branch_Sheraton/Pages/Sheraton_Home";
import News from "./pages/Branches/Branch_6_october/pages/News";
import Services from "./pages/Branches/Branch_6_october/pages/Services";
import Championships from "./pages/Branches/Branch_6_october/pages/Championships";
import Loyalty from "./pages/Branches/Branch_6_october/pages/Loyalty";
import NewsDetails from "./pages/Branches/Branch_6_october/component/News/NewsDetails";
import Services_details from "./pages/Branches/Branch_6_october/component/Services/Services_details";
import ChampionshipsDetails from "./pages/Branches/Branch_6_october/component/Championships/ChampionshipsDetails";
import LoyaltyDetails from "./pages/Branches/Branch_6_october/component/Loyalty/LoyaltyDetails";
import About from "./pages/Branches/Branch_6_october/pages/About";
import About_the_club from "./pages/Branches/Branch_6_october/component/About/About_the_club";
import Board_ChairmanWord from "./pages/Branches/Branch_6_october/component/About/Board_ChairmanWord";
import Boardmember from "./pages/Branches/Branch_6_october/component/About/Boardmember";
import Strategic_Plans from "./pages/Branches/Branch_6_october/component/About/Strategic_Plans";
import Teamwork from "./pages/Branches/Branch_6_october/component/About/Teamwork";
import Contactus from "./pages/Branches/Branch_6_october/component/About/Contactus";
import Minister_welcom from "./pages/Branches/Branch_6_october/component/About/Minister_welcom";
import Login from "./pages/Auth/login/Login";
import Register from "./pages/Auth/Register/Register";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Profile from "./pages/Users/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing_page />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/branches",
    element: (
      <ProtectedRoute>
        <Main_Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "6-october",
        children: [
          { index: true, element: <October_Home /> },
          { path: "news", element: <News /> },
          { path: "news/:id", element: <NewsDetails /> },
          { path: "services", element: <Services /> },
          { path: "services/details", element: <Services_details /> },
          { path: "loyalty", element: <Loyalty /> },
          { path: "loyalty/:id", element: <LoyaltyDetails /> },
          { path: "championships", element: <Championships /> },
          { path: "championships/:id", element: <ChampionshipsDetails /> },
          {path:"profile", element: <Profile/>},          
          {
            path: "about",
            element: <About />,
            children: [
              { path: "about-the-club", element: <About_the_club /> },
              { path: "board-chairman-word", element: <Board_ChairmanWord /> },
              { path: "board-member", element: <Boardmember /> },
              { path: "strategic-plans", element: <Strategic_Plans /> },
              { path: "teamwork", element: <Teamwork /> },
              { path: "contact-us", element: <Contactus /> },
              { path: "minister-welcome", element: <Minister_welcom /> },
            ],
          },
        ],
      },

      {
        path: "capital",
        children: [
          { index: true, element: <New_Capital_Home /> },
          { path: "news", element: <News /> },
        ],
      },

      {
        path: "sheraton",
        children: [
          { index: true, element: <Sheraton_Home /> },
          { path: "news", element: <News /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
