import { useState } from "react";
import { AgregateOptionsInput } from "./AgregateOptionsInput";
import { useFormContext } from "../../context/FormProvider";
import { WEB_ADDITIONS } from "../../data/dataForm";
import Euro from "../../assets/Icons/Euro";

export const Checkbox = ({ productData }) => {
  const [check, setCheck] = useState(false);

  const form = useFormContext();

  const handleCheckbox = () => {
    if (check === false) {
      form.sendService(productData);
    } else {
      form.removeService(productData);
    }
    setCheck(!check);
  };

  return (
    <div className="flex flex-col justify-evenly items-center shadow-2xl md:w-4/5 w-full max-w-screen-lg rounded-2xl bg-white hover:ring-2 hover:ring-green-600">
      <div className="flex flex-col justify-evenly items-center p-4 md:p-8 md:w-4/5 w-full font-medium sm:flex-row ">
        <div>
          <h3 className="font-bold text-xl mb-3">{productData.type}</h3>
          <p className="font-medium text-base">
            Programming a complete responsive web.
          </p>
        </div>

        <div className="flex flex-row gap-5 items-center font-extrabold text-2xl px-2 ">
          <Euro />
          {productData.price}
        </div>

        <div className="flex">
          <input
            className=""
            type="checkbox"
            onChange={handleCheckbox}
            value={productData.price}
            id={productData.type}
          />
          <p className="font-medium text-base mx-2">Chose</p>
        </div>
      </div>
      {WEB_ADDITIONS.map(
        (element) =>
          productData.type === "Web" &&
          check === true && (
            <AgregateOptionsInput
              key={element.id}
              addition={element}
            />
          )
      )}
    </div>
  );
};
