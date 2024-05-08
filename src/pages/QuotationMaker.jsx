import { Link } from "react-router-dom";
import { BudgetList } from "../components/servicesComponents/BudgetList";
import Navbar from "../components/Navbar";
import { TogglerAnualPayment } from "../components/TogglerAnualPayment";
import { TotalPrice } from "../components/clientComponents/TotalPrice";
import { InputDataClient } from "../components/clientComponents/InputDataClient";
import { QuotesList } from "../components/clientComponents/QuotesList";

export const QuotationMaker = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Navbar />
      <div className=" flex flex-col  bg-gradient-to-r from-indigo-400 to-red-400 mt-4 rounded-xl py-5 flex-wrap items-center justify-center shadow-2xl gap-y-10 w-screen md:w-5/6 lg:w-4/6">
        <h1 className="text-center font-bold text-2xl">
          Make your own quotation
        </h1>
        <TogglerAnualPayment />
        <BudgetList />
        <TotalPrice />
        <InputDataClient />
        <QuotesList />
        <button className="btn btn-succes text-xl hover:ring hover:ring-green-500">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};
