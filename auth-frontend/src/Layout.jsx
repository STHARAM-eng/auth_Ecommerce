import { Outlet } from "react-router-dom";
import { CustomNav } from "./components";

const Layout = () => {
  return (
    <div>
      <div className="container pt-5 mx-auto  ">
        {" "}
        <CustomNav />
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
