import { Button } from "flowbite-react";

export default function App() {
  return (
    <>
      <div className="mt-3 flex justify-center items-center text-2xl">
        <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 text-2xl text-center p-6">
          Blue
        </Button>
      </div>
    </>
  );
}
