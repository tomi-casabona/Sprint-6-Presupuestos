import React, { useState, useContext } from "react";

const formContext = React.createContext();

export function useFormContext() {
  return useContext(formContext);
}

export function FormProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [additions, setAdditions] = useState(0);
  const [client, setClient] = useState(null);
  const [services, setServices] = useState([]);
  client;

  function sendService(newService) {
    let newArrayServices = [...services];
    newArrayServices.push(newService);
    setServices(newArrayServices);
  }

  function removeService(serviceForRemove) {
    let newArrayServices = [...services];
    newArrayServices.splice(newArrayServices.indexOf(serviceForRemove));
    setServices(newArrayServices);
  }

  function sendClientData(newClient) {
    setClient(newClient);
    console.log(newClient);
  }

  function sumAdditions(newAddition) {
    setAdditions(additions + newAddition);
  }

  function sumTotal(ad) {
    return setTotal(total + ad);
  }

  return (
    <formContext.Provider
      value={{
        total,
        sumTotal,
        additions,
        sumAdditions,
        sendClientData,
        sendService,
        removeService,
      }}
    >
      {children}
    </formContext.Provider>
  );
}
