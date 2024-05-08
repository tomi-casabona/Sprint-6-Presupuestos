import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold m-5 text-red-700">Error</h1>
      <p className="m-5 text-center  text-xl">Error status : {error.status}</p>
      <p className="m-5 text-center text-xl "> {error.data}</p>
    </div>
  );
}
