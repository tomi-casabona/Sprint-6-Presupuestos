import { useState } from "react";
import { useFormContext } from "../../context/FormProvider";

export const AgregateOptionsInput = ({ option }) => {
  const form = useFormContext();
  const [additions, setAdditions] = useState(0);

  const handleClickUp = () => {
    setAdditions(additions + 1);
    form.sumAdditions(+30);
    form.sumTotal(+30);
  };

  const handleClickDown = () => {
    if (additions === 0) return;
    setAdditions(additions - 1);
    form.sumAdditions(-30);
    form.sumTotal(-30);

  };

  return (
    <div className="flex self-end px-20">
      <p className="font-medium text-base">{option}</p>
      <div className="flex justify-center items-center ml-4">
        <button
          onClick={handleClickDown}
          className="border-2 border-gray-300 rounded-full w-6 h-6 flex justify-center items-center m-2 hover:border-gray-400 hover:scale-110 hover:cursor-pointer"
        >
          -
        </button>
        <input
          type="text"
          value={additions}
          className="w-10 h-7 border-2 border-gray-300 rounded text-center"
        />
        <button
          onClick={handleClickUp}
          className="border-2 border-gray-300 rounded-full w-6 h-6 flex justify-center items-center m-2 hover:border-gray-400 hover:scale-110 hover:cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};
