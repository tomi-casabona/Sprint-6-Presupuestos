import { useState } from "react";
import { useFormContext } from "../../context/FormProvider";

export const DataCliente = () => {
  // Define el estado para almacenar los valores de los inputs
  const [clientData, setClientData] = useState({
    name: "",
    telephone: "",
    email: "",
  });

  const context = useFormContext();

  // imput change function
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveOnClick = () => {
    context.sendClientData(clientData);
  };

  return (
    <div className="flex flex-col justify-evenly items-center shadow-2xl rounded-2xl bg-white hover:ring-2 hover:ring-green-600 md:w-4/5 w-full max-w-screen-lg">
      <h3 className="font-bold text-xl px-4 md:p-8 md:pb-4 w-4/5">Data</h3>
      <div className="flex justify-evenly items-center px-4 md:px-8 md:pb-8 md:w-4/5 w-full font-medium">
        <div className="flex flex-row gap-2 rounded">
          <input
            className="border-2 rounded py-2 px-4 w-1/3"
            type="text"
            name="name"
            placeholder="Name"
            value={clientData.name}
            onChange={handleInputChange}
          />
          <input
            className="border-2 rounded py-2 px-4 w-1/3"
            type="text"
            name="telephone"
            placeholder="Telephone"
            value={clientData.telephone}
            onChange={handleInputChange}
          />
          <input
            className="border-2 rounded py-2 px-4 w-1/3"
            type="text"
            name="email"
            placeholder="Email"
            value={clientData.email}
            onChange={handleInputChange}
          />
        </div>
        <button
          onClick={saveOnClick}
          className="btn btn-success ml-8 shadow-2xl"
        >
          Save quotation
        </button>
      </div>
    </div>
  );
};
