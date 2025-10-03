import { Outlet, useNavigation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { Triangle } from "react-loader-spinner";

const Root = () => {

  const navigation = useNavigation()
  const isNavigating = Boolean(navigation.location)
  return (
    <div>
      <h2 className="text-center">Hello From React Router</h2>

      <Navbar></Navbar>

      <div className="flex">
        <Sidebar></Sidebar>
        <div className="mx-auto">
          {/* {isNavigating && <Triangle></Triangle>} */}
          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
