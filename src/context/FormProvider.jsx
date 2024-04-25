import React, { useState, useContext } from "react";

const formContext = React.createContext();

export function useFormContext() {
  return useContext(formContext);
}

export function FormProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [additions, setAdditions] = useState(0);



  function sumAdditions(newAddition){
setAdditions(additions + newAddition);
  }

  function sumTotal(ad) {
    return setTotal(total + ad);
  } 

  return (
    <formContext.Provider value={{ total, sumTotal, additions, sumAdditions }}>
      {children}
    </formContext.Provider>
  );

}
