import { Button } from "flowbite-react";
import { CustomInput } from "../../components";

const ForgetPage = () => {
  return (
    <>
      <div className="md:w-[400px] w-full flex flex-col items-center gap-2 mt-10 m-auto py-5 shadow-lg shadow-indigo-500/50  ">
      <div className="flex flex-col items-center gap-2 mt-5">
        <h1 className="text-2xl font-bold mb-8">Forget Password</h1>
      </div>
     <form className="flex md:w-[400px] w-full flex-col gap-2 px-10">
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
      </div>
    </>
  );
};

export default ForgetPage;
