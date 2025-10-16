import { Button, Checkbox, Label } from "flowbite-react";
import { SiFusionauth } from "react-icons/si";
import { Link } from "react-router-dom";
import { CustomInput } from "../../components";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 mt-5">
        <SiFusionauth className="text-5xl" />
        <h1 className="text-2xl font-bold mb-8">Login</h1>
      </div>
      <form className="flex max-w-md flex-col gap-1 m-auto ">
        <div>
          <CustomInput
            label={"Your Email"}
            type="text"
            name="email"
            placeholder="example@gmail.com"
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
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Link
              to={"/forget-password"}
              className="text-cyan-800 hover:underline hover:text-blue-500 underline underline-offset-4"
            >
              Forget Password
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-base  py-2.5 text-center m-4 "
        >
          Submit
        </Button>
      </form>
      <div className="text-center pt-5">
        <span>
          {"You don't have account ?"}
          <Link
            to="/signup"
            className="hover:underline hover:text-blue-500 ml-1 "
          >
            Sign up
          </Link>
        </span>
      </div>
    </>
  );
};

export default LoginPage;
