import React, { useState, useContext, useEffect } from "react";
import { WEB_ADDITIONS } from "../data/dataForm";

const formContext = React.createContext();

export function useFormContext() {
  return useContext(formContext);
}

export function FormProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [additionsArray, setAdditionsArray] = useState(WEB_ADDITIONS);
  const [services, setServices] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    calculateTotal();
  }, [services, additionsArray]);

  useEffect(() => {
    if (!services.some((item) => item.type === "Web")) {
      setAdditionsArray(WEB_ADDITIONS);
    }
  }, [services]);

  function calculateTotal() {
    let totalServices = 0;
    let totalAdditions = 0;

    if (services.length > 0) {
      totalServices = services.reduce(
        (accumulator, actual) => accumulator + (actual.price || 0),
        0
      );
      totalAdditions = additionsArray.reduce(
        (accumulator, actual) => accumulator + actual.quantity * actual.price,
        0
      );
    }

    setTotal(totalAdditions + totalServices);
  }

  function changeAdditionQuantity(inputId, operation) {
    const index = additionsArray.findIndex((item) => item.id === inputId);

    if (index !== -1) {
      const updatedItem = { ...additionsArray[index] };

      if (operation === "up") {
        updatedItem.quantity = (updatedItem.quantity || 0) + 1;
      } else if (operation === "down" && updatedItem.quantity > 0) {
        updatedItem.quantity -= 1;
      }

      const updatedArray = [...additionsArray];
      updatedArray[index] = updatedItem;

      setAdditionsArray(updatedArray);
    }
  }

  function sendService(newService) {
    const newArrayServices = [...services];

    if (!newArrayServices.includes(newService)) {
      newArrayServices.push(newService);
      setServices(newArrayServices);
    }
  }

  function resetQuoteData() {
    setServices([]);
    setTotal(0);
  }

  function removeService(serviceForRemove) {
    const index = services.indexOf(serviceForRemove);

    if (index !== -1) {
      // el servicio existe en el array

      const newArrayServices = [...services];
      newArrayServices.splice(index, 1);

      setServices(newArrayServices);
    }
  }

  function sendClientData(newClient) {
    let clientQuote = {
      ...newClient,
      total: total,
      services: services,
      additions: additionsArray,
      date: new Date(),
    };

    let updatedClientsArray = [...clients];
    updatedClientsArray.push(clientQuote);
    setClients(updatedClientsArray);
  }

  return (
    <formContext.Provider
      value={{
        clients,
        total,
        services,
        additionsArray,
        calculateTotal,
        changeAdditionQuantity,
        sendService,
        removeService,
        resetQuoteData,
        sendClientData,
      }}
    >
      {children}
    </formContext.Provider>
  );
}
