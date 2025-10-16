import { Button } from "flowbite-react";
import { SiFusionauth } from "react-icons/si";

const EmailVerify = () => {
  return (
    <>
     <div className="md:w-[400px] w-full flex flex-col items-center gap-2 mt-10 m-auto py-5 shadow-lg shadow-indigo-500/50  ">
      <div className="flex flex-col items-center gap-2 mt-5">
        <SiFusionauth className="text-5xl" />
        <h1 className="text-2xl font-bold mb-8">Verify Email by OTP</h1>
      </div>
      <form className="flex md:w-[400px] w-full flex-col gap-3 px-10">
        <div className="flex mb-2 space-x-2 rtl:space-x-reverse m-auto">

          {/* ✅ Generate 6 input boxes for OTP */}
          {[...Array(6)].map((_, index) => (
            <div key={index}>
              <label htmlFor={`code-${index + 1}`} className="sr-only">
                Code {index + 1}
              </label>
              <input
                type="text"
                maxLength="1"
                id={`code-${index + 1}`}
                className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
          ))}
        </div>

       
        <div className="block mt-6 mb-4">
          <Button
            type="submit"
            className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-base m-auto py-2.5 text-center "
          >
            Verify Email
          </Button>
        </div>
         <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-black dark:text-white-400"
        >
          Please introduce the 6 digit code we sent via email.
        </p>
      </form>
      </div>
    </>
  );
};

export default EmailVerify;
