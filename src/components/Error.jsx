import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error)

  return (
    <div>
      <h1 className="text-center text-3xl m-5 text-red-700">Error</h1>
      <p className="m-5 ">Error status : {error.status}</p>
      <p className="m-5 ">Error data : {error.data}</p>
    </div>
  );
}
