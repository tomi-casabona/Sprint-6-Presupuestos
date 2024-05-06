import { useState } from "react";
import { useFormContext } from "../../context/FormProvider";
import Euro from "../../assets/Icons/Euro";
import { ListAgregationImputs } from "./ListAgregationImputs";

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
    <div className="flex flex-col justify-evenly items-center shadow-2xl md:w-4/5 w-full max-w-screen-lg rounded-2xl bg-white hover:ring-4 hover:ring-green-500">
      <div className="flex flex-col justify-evenly items-center md:p-8 md:w-4/5 w-full font-medium sm:flex-row ">
        <div>
          <h3 className="font-bold text-xl mb-3">{productData.type}</h3>
          <p className="font-medium text-base">
            Programming a complete responsive web.
          </p>
        </div>

        <div className="flex flex-row gap-2 items-center font-extrabold text-2xl px-2">
          <Euro />
          {productData.price}
        </div>

        <div className="flex">
          <input
            className="checkbox checked:border-green-700 [--chkbg:theme(colors.green.500)] [--chkfg:white]"
            type="checkbox"
            onChange={handleCheckbox}
            value={productData.price}
            id={productData.type}
          />
          <p className="font-medium text-base mx-2">Chose</p>
        </div>
      </div>
      <ListAgregationImputs productData={productData} check={check} />
    </div>
  );
};
