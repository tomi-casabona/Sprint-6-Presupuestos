import React, { useContext } from "react";
import { useAdditions } from "../hooks/useAdditions";
import { useClients } from "../hooks/useClients";
import { useServices } from "../hooks/useServices";
import { useQuoteUtilities } from "../hooks/useQuotesUtilities";
import { useCalculateTotal } from "../hooks/useCalculateTotal";
import { useToggleAnualPayment } from "../hooks/useToggleAnualPayment";

const formContext = React.createContext();

export function useFormContext() {
  return useContext(formContext);
}

export function FormProvider({ children }) {
  const { anualPayment, toggleAnualPayment } = useToggleAnualPayment();
  const { clients, sendClientData } = useClients();
  const { services, sendService, removeService, setServices } = useServices();
  const { additionsArray, changeAdditionQuantity } = useAdditions(services);
  const { total, setTotal } = useCalculateTotal(
    services,
    additionsArray,
    anualPayment
  );

  const { resetQuoteData} = useQuoteUtilities(setServices, setTotal);

  return (
    <formContext.Provider
      value={{
        clients,
        total,
        services,
        additionsArray,
        anualPayment,
        changeAdditionQuantity,
        sendService,
        removeService,
        resetQuoteData,
        sendClientData,
        toggleAnualPayment,
      }}
    >
      {children}
    </formContext.Provider>
  );
}
