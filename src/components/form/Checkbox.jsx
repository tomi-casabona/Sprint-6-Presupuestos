import { useState } from "react";
import { AgregateOptionsInput } from "./AgregateOptionsInput";
import { useFormContext } from "../../context/FormProvider";
import { webAdditions } from "../../data/dataForm";
import Euro from "../../assets/Icons/Euro";

export const Checkbox = ({ type, price }) => {
  const [check, setCheck] = useState(false);

  const form = useFormContext();

  const handleCheckbox = () => {
    let checkboxValues = { type: type, price: price, extras: "" };
    if (check === false) {
      form.sumTotal(+price);
      form.sendService(checkboxValues);
    } else if (type === "Web") {
      form.sumTotal(-price - form.additions);
      form.sumAdditions(-form.additions);
      form.removeService(checkboxValues);
    } else {
      form.sumTotal(-price);
      form.removeService(checkboxValues);
    }
    setCheck(!check);
  };

  return (
    <div className="flex flex-col justify-evenly items-center shadow-2xl md:w-4/5 w-full max-w-screen-lg rounded-2xl bg-white hover:ring-2 hover:ring-green-600">
      <div className="flex flex-col justify-evenly items-center p-4 md:p-8 md:w-4/5 w-full font-medium sm:flex-row ">
        <div>
          <h3 className="font-bold text-xl mb-3">{type}</h3>
          <p className="font-medium text-base">
            Programming a complete responsive web.
          </p>
        </div>

        <div className="flex flex-row gap-5 items-center font-extrabold text-2xl px-2 ">
          <Euro />
          {price}
        </div>

        <div className="flex">
          <input
            className=""
            type="checkbox"
            onChange={handleCheckbox}
            value={price}
            id={type}
          />
          <p className="font-medium text-base mx-2">Chose</p>
        </div>
      </div>
      {webAdditions.map(
        (element) =>
          type === "Web" &&
          check === true && (
            <AgregateOptionsInput
              key={element.id}
              option={element.type}
              price={element.price}
            />
          )
      )}
    </div>
  );
};
