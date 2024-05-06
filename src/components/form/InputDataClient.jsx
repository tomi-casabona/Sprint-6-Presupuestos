import { useState, useEffect } from "react";
import { useFormContext } from "../../context/FormProvider";

export const InputDataClient = () => {
  const [clientData, setClientData] = useState({
    name: "",
    telephone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    telephone: "",
    email: "",
  });

  const [isDisabledButton, setIsDisabledButton] = useState(true);

  useEffect(() => {
    const allFieldsFilled = Object.values(clientData).every(
      (value) => value.trim() !== ""
    );

    const noErrors = Object.values(errors).every((error) => error === "");

    setIsDisabledButton(!(allFieldsFilled && noErrors));
  }, [clientData, errors]);

  const context = useFormContext();

  const saveOnClick = () => {
    if (!isDisabledButton) {
      context.sendClientData(clientData);
      resetClientData();
      context.resetQuoteData();
    }
  };

  const resetClientData = () => {
    setClientData({
      name: "",
      telephone: "",
      email: "",
    });
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidTelephone = (telephone) => {
    const telephonePattern = /^[0-9]{9,15}$/;
    return telephonePattern.test(telephone);
  };
  const isValidName = (name) => {
    const namePattern = /^(?=.*[a-zA-Z]).{3,}$/;
    return namePattern.test(name);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setClientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    switch (name) {
      case "name":
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: isValidName(value) ? "" : "Name is required",
        }));
        break;
      case "telephone":
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: isValidTelephone(value) ? "" : "Invalid telephone format",
        }));
        break;
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: isValidEmail(value) ? "" : "Invalid email format",
        }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col justify-evenly items-center shadow-2xl p-4 rounded-2xl bg-white md:w-4/5 w-full max-w-screen-lg hover:ring-4 hover:ring-green-500">
      <h3 className="font-bold text-xl text-center pb-4 w-4/5">
        Demand Quotation
      </h3>

      <div className="flex flex-col sm:flex-row gap-4 justify-between w-full ">
        <div className="flex flex-col gap-4 w-full sm:flex-row">
          <div className="flex-1">
            <input
              className={`border-2 rounded py-2 px-2 text-sm w-full  ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              name="name"
              placeholder="Name"
              value={clientData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <div className="text-red-500 text-xs">{errors.name}</div>
            )}
          </div>

          <div className="flex-1">
            <input
              className={`border-2 rounded py-2 px-2 text-sm w-full${
                errors.telephone ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              name="telephone"
              placeholder="Telephone"
              value={clientData.telephone}
              onChange={handleInputChange}
            />
            {errors.telephone && (
              <div className="text-red-500 text-xs">{errors.telephone}</div>
            )}
          </div>

          <div className="flex-1">
            <input
              className={`border-2 rounded py-2 px-2 text-sm w-full  hover:ring-green-600${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              name="email"
              placeholder="Email"
              value={clientData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <div className="text-red-500 text-xs">{errors.email}</div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center mx-auto w-1/6">
          <button
            onClick={saveOnClick}
            className="btn btn-success btn-sm center shadow-2xl text-white"
            disabled={isDisabledButton}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
