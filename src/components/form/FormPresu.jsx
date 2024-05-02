import { TotalPrice } from "./TotalPrice";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { InputDataClient } from "./InputDataClient";
import { QuotesList } from "./QuotesList";
import { BudgetList } from "./BudgetList";

export const FormPresu = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex justify-center items-center pt-5 bg-gradient-to-r from-indigo-400 to-red-400">
        <div className=" flex flex-col rounded-xl py-5 flex-wrap items-center justify-center shadow-2xl gap-y-10 w-screen md:w-5/6 lg:w-4/6">
          <BudgetList />
          <TotalPrice />
          <InputDataClient />
          <QuotesList />
          <button className="btn btn-succes text-xl">
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
