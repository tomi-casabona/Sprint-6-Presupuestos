import { Checkbox } from "./Checkbox";
import { TotalPrice } from "./TotalPrice";
import { useState } from "react";

export const FormPresu = () => {
  const [total, setTotal] = useState(0);

  function handleCheck(checkboxPrice) {
    console.log(checkboxPrice);
    setTotal(total + parseInt(checkboxPrice));
  }

  return (
    <div className="h-screen flex justify-center items-center bg-red-300">
      <div className=" flex flex-col flex-wrap items-center justify-center gap-y-10 bg-slate-300 w-screen md:w-5/6 lg:w-4/6">
        <Checkbox onCheck={handleCheck} type="Seo" price="300" />
        <Checkbox onCheck={handleCheck} type="Ads" price="400" />
        <Checkbox onCheck={handleCheck} type="Web" price="500" />
        <TotalPrice totalprice={total} />
      </div>
    </div>
  );
};
