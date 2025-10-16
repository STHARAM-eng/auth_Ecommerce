import { Button } from "flowbite-react";
import { CustomInput } from "../../components";

const ForgetPage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 mt-5">
        <h1 className="text-2xl font-bold mb-8">Forget Password</h1>
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

        <Button
          type="submit"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-base  py-2.5 text-center m-4 "
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default ForgetPage;
