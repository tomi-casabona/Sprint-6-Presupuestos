import { useState } from "react";
import { useFormChangeContext } from "../../context/FormProvider";

export const AgregateOptionsInput = ({ option }) => {
  const [inputValue, setInputValue] = useState(0);
  const setTotal = useFormChangeContext();

  const handleClickUp = () => {
    setTotal(36);
    setInputValue(inputValue + 1);
  };

  const handleClickDown = () => {
    if (inputValue === 0) return;
    setTotal(-36);
    setInputValue(inputValue - 1);
  };

  return (
    <div className="flex self-end px-20">
      <p className="font-medium text-base">{option}</p>
      <div className="flex justify-center items-center ml-4">
        <button
          onClick={handleClickDown}
          className="border-2 border-gray-300 rounded-full w-6 h-6 flex justify-center items-center m-2 hover:cursor-pointer"
        >
          -
        </button>
        <input
          type="text"
          value={inputValue}
          className="w-10 h-7 border-2 border-gray-300 rounded text-center"
        />
        <button
          onClick={handleClickUp}
          className="border-2 border-gray-300 rounded-full w-6 h-6 flex justify-center items-center m-2 hover:cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};
