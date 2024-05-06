import { useState } from "react";
import { useFormContext } from "../../context/FormProvider";
import { Modal } from "./Modal";

export const AgregateOptionsInput = ({ addition }) => {
  const form = useFormContext();
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const handleClickUp = () => {
    form.changeAdditionQuantity(addition.id, "up");
  };

  const handleClickDown = () => {
    if (addition.quantity === 0) return;
    form.changeAdditionQuantity(addition.id, "down");
  };

  const handleClickInfo = () => {
    setModal(true);
  };

  return (
    <div className="flex self-end px-20">
      <p className="text-sm content-center">{addition.type}</p>
      <div className="flex justify-center items-center ml-4">
        <button
          onClick={handleClickDown}
          className="border-2 border-slate-300 rounded-full w-6 h-6 flex justify-center items-center m-2 hover:border-green-500 hover:scale-110 hover:cursor-pointer"
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
          className="border-2 border-slate-300 rounded-full w-6 h-6 flex justify-center items-center m-2 hover:border-green-500 hover:scale-110 hover:cursor-pointer"
        >
          +
        </button>
      </div>
      <button
        onClick={handleClickInfo}
        className="btn btn-error btn-xs content-center self-center"
      >
        Info
      </button>
      <Modal isOpen={modal} onClose={closeModal} type={addition.type} />
    </div>
  );
};
