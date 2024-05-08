import { useEffect, useState } from "react";
import { useFormContext } from "../../context/FormProvider";
import Euro from "../../assets/Icons/Euro";
import { ListAgregationImputs } from "../webAdditionsComponents/ListAgregationImputs";

export const Checkbox = ({ productData }) => {
  const [check, setCheck] = useState(false);
  const form = useFormContext();

  useEffect(() => {
    setCheck(false);
  }, [form.clients]);

  const product = { ...productData };

  form.anualPayment
    ? (product.price = Math.round(productData.price * 0.8))
    : (product.price = productData.price);

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
      <div className="flex flex-col justify-between gap-4 p-8 font-medium sm:flex-row ">
        <div className="flex flex-col md:w-2/5">
          <h3 className="font-bold text-xl mb-3 text-center md:text-left">
            {product.type}
          </h3>
          <p className="font-medium text-center md:text-left">
            Programming a complete responsive web.
          </p>
        </div>

        <div className="flex justify-center gap-4 md:flex-col md:w-1/5 md:justify-start">
          {form.anualPayment ? (
            <p className="text-lg font-bold text-orange-300 h-2 md:mb-4 ">
              Save 20%
            </p>
          ) : (
            <div className="md:h-5"></div>
          )}

          <div className="flex font-extrabold text-2xl">
            <Euro />
            {product.price}
          </div>
        </div>

        <div className="flex flex-row items-center justify-center md:w-1/5 ">
          <input
            className="checkbox checked:border-green-700 [--chkbg:theme(colors.green.500)] [--chkfg:white]  hover:ring-4 hover:ring-green-500"
            type="checkbox"
            onChange={handleCheckbox}
            value={product.price}
            checked={check}
            id={product.type}
          />

          <p className="font-medium text-base mx-2">Chose</p>
        </div>
      </div>
      <ListAgregationImputs productData={product} check={check} />
    </div>
  );
};
