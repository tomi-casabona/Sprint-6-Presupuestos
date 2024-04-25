import { useState } from "react";
import { AgregateOptionsInput } from "./AgregateOptionsInput";
import { useFormContext } from "../../context/FormProvider";

export const Checkbox = ({ type, price }) => {
  const [check, setCheck] = useState(false);

  const form = useFormContext();

  const webCondition = type === "Web" && check === true;
  const handleCheckbox = () => {
    if (check === false) {
      form.sumTotal(+price);
    } else if (type === "Web") {
      form.sumTotal(-price - form.additions);
      form.sumAdditions(-form.additions);
    } else {
      form.sumTotal(-price);
    }
    setCheck(!check);
  };

  return (
    <div className="flex flex-col justify-evenly items-center shadow-2xl rounded-2xl bg-white hover:ring-2 hover:ring-green-600">
      <div className="flex justify-evenly items-center p-4 md:p-8 w-4/5 font-medium ">
        <div>
          <h3 className="font-bold text-xl mb-3">{type}</h3>
          <p className="font-medium text-base">
            Programming a complete responsive web.
          </p>
        </div>

        <div className="font-extrabold text-2xl px-2 sm:px-5 md:px-16">
          {" "}
          ${price}{" "}
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
      {webCondition && <AgregateOptionsInput option="Number of pages" />}
      {webCondition && <AgregateOptionsInput option="Number of lenguajes" />}
    </div>
  );
};
