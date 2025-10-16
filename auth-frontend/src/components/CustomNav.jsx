import { TbBrandOauth } from "react-icons/tb";
import {
  Avatar,
  Dropdown,
  DropdownHeader,
  Navbar,
  NavbarBrand,
  NavbarToggle,
  Button,
} from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";

const CustomNav = () => {
  const navigate = useNavigate();
  let isAuthenticated = false;
  return (
    <>
      <Navbar fluid rounded>
        <NavbarBrand href="/">
          <TbBrandOauth className="text-2xl mr-2 dark:text-white" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            CodeWith_Ram
          </span>
        </NavbarBrand>

        <div className="flex md:order-2">
          {isAuthenticated ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                  />
                }
              >
                <DropdownHeader>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
                </DropdownHeader>
              </Dropdown>
              <NavbarToggle />
            </>
          ) : (
            // 👇 Add this fallback for unauthenticated users
            <Button
              onClick={() => navigate("/auth/login")}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-base  py-2.5 text-center "
            >
              Login
              <IoMdLogIn className="ml-1 h-5 w-5"/>
            </Button>
          )}
        </div>
      </Navbar>
    </>
  );
};

export default CustomNav;
