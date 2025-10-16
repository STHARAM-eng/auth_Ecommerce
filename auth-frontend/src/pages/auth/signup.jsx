import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { CustomInput } from "../../components";
import { PiCashRegisterThin } from "react-icons/pi";

const RegisterPage = () => {
  return (
    <>
      <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50 mb-8">
        <div className="flex flex-col items-center gap-2 mt-5">
          <PiCashRegisterThin className="text-5xl" />
          <h1 className="text-2xl font-bold mb-6">Register</h1>
        </div>
        <form className="flex max-w-md flex-col gap-1 m-auto text-">
          <div>
            <CustomInput
              label={"Username"}
              type="text"
              name="username"
              placeholder="jhon st."
            />
          </div>

          <div>
            <CustomInput
              label={"Your Email"}
              type="text"
              name="email"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <CustomInput
              className="text-2xl"
              label={" Your Password"}
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div>
            <CustomInput
              label={"Repeat Password"}
              type="password"
              name="password"
              placeholder="Re-type Password"
            />
          </div>

          <Button
            type="submit"
            className="text-white text-sm font-bold py-2 px-4 bg-gradient-to-br  from-purple-600
            to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none rounded-2xl text-center m-2 focus:ring-blue-300 focus:ring-opacity-50 "
          >
            Submit
          </Button>
        </form>
        <div className="text-center pt-5">
          <span>
            Already you have account ?
            <Link
              to="/login"
              className="hover:underline hover:text-blue-500 ml-1  "
            >
              Login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
