import { Checkbox } from "./Checkbox";
import { TotalPrice } from "./TotalPrice";
import { FormProvider } from "../../context/FormProvider";

export const FormPresu = () => {
  return (
    <FormProvider>
      <div className="h-screen flex justify-center items-center bg-red-300">
        <div className=" flex flex-col flex-wrap items-center justify-center gap-y-10 bg-slate-300 w-screen md:w-5/6 lg:w-4/6">
          <Checkbox type="Seo" price="300" />
          <Checkbox type="Ads" price="400" />
          <Checkbox type="Web" price="500" />
          <TotalPrice />
        </div>
      </div>
    </FormProvider>
  );
};
