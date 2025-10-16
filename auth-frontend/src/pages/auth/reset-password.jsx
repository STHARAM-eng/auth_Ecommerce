import { Button } from "flowbite-react";
import { CustomInput } from "../../components";

const ResetPage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 mt-10">
        <h1 className="text-2xl font-bold mb-5">Reset Password</h1>
      </div>
      <form className="flex max-w-md flex-col gap-1 m-auto  ">
        <div>
          <CustomInput
            label={"Old password"}
            type="password"
            name="password"
            placeholder="Enter old password"
          />
        </div>
        <div>
          <CustomInput
            label={"New password"}
            type="password"
            name="password"
            placeholder="Enter new password"
          />
        </div>
        <div>
          <CustomInput
            label={"Repeat password"}
            type="password"
            name="password"
            placeholder="Repeat password"
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

export default ResetPage;
