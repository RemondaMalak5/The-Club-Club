import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const MainLayout = () => {
  return (
    <section>
      <Nav/>
      <div className="mt-36">
        <Outlet />
      </div>
      <Footer/>
    </section>
  );
};

export default MainLayout;