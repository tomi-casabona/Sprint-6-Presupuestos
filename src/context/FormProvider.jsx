import React, { useState, useContext } from "react";
const formChangeContext = React.createContext();
const formContext = React.createContext();

export function useFormContext() {
  return useContext(formContext);
}
export function useFormChangeContext() {
  return useContext(formChangeContext);
}

export function FormProvider({ children }) {
  const [total, setTotal] = useState(0);

  const changeTotal = (addition) => setTotal(total + addition);

  return (
    <formContext.Provider value={total}>
      <formChangeContext.Provider value={changeTotal}>
        {children}
      </formChangeContext.Provider>
    </formContext.Provider>
  );
}
