import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Landing_page from "./pages/landing/Landing_page";


const router = createBrowserRouter([
  {
     path: "/",
     element: <Landing_page/>
  }
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;