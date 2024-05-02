import { Checkbox } from "./Checkbox";
import { TotalPrice } from "./TotalPrice";
import { DATA_PRODUCT } from "../../data/dataForm";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { InputDataClient } from "./InputDataClient";
    import { QuotesList } from "./QuotesList";

export const FormPresu = () => {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center pt-5 bg-red-300">
        <div className=" flex flex-col rounded-xl py-5 flex-wrap items-center justify-center gap-y-10 bg-slate-300 w-screen md:w-5/6 lg:w-4/6">
          {DATA_PRODUCT.map((data) => (
            <Checkbox key={data.id} productData={data} />
          ))}
          <TotalPrice />
          <InputDataClient />
          <QuotesList />
          <button className="btn btn-ghost text-xl">
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
    </>
  );
};
