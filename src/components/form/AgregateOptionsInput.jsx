import { useFormContext } from "../../context/FormProvider";

export const AgregateOptionsInput = ({ addition }) => {
  const form = useFormContext();

  const handleClickUp = () => {
    form.changeAdditionQuantity(addition.id, "up");
  };

  const handleClickDown = () => {
    if (addition.quantity === 0) return;
    form.changeAdditionQuantity(addition.id, "down");
  };

  return (
    <div className="flex self-end px-20">
      <p className="text-sm content-center">{addition.type}</p>
      <div className="flex justify-center items-center ml-4">
        <button
          onClick={handleClickDown}
          className="border-2 border-gray-300 rounded-full w-6 h-6 flex justify-center items-center m-2 hover:border-gray-400 hover:scale-110 hover:cursor-pointer"
        >
          -
        </button>
        <input
          readOnly
          type="text"
          value={addition.quantity}
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
