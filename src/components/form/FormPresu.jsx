import { Checkbox } from "./Checkbox";
import { TotalPrice } from "./TotalPrice";
import { FormProvider } from "../../context/FormProvider";
import { dataForm } from "../../data/dataForm";
import Navbar from "../Navbar";

export const FormPresu = () => {
  return (
    <FormProvider>
      <Navbar />
      <div className="h-screen flex justify-center items-center bg-red-300">
        <div className=" flex flex-col rounded-xl py-5 flex-wrap items-center justify-center gap-y-10 bg-slate-300 w-screen md:w-5/6 lg:w-4/6">
          {dataForm.map((data) => (
            <Checkbox key={data.id} type={data.type} price={data.price} />
          ))}
          <TotalPrice />
        </div>
      </div>
    </FormProvider>
  );
};
