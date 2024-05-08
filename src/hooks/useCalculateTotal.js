import { useEffect, useState } from "react";

export function useCalculateTotal(
  services,
  additionsArray,
  anualPayment,  
) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (services.length > 0) {
      let totalServices = services.reduce(
        (accumulator, actual) => accumulator + (actual.price || 0),
        0
      );
      let totalAdditions = additionsArray.reduce(
        (accumulator, actual) => accumulator + actual.quantity * actual.price,
        0
      );
      let subTotal = totalAdditions + totalServices;
      anualPayment ? setTotal(subTotal * 0.8) : setTotal(subTotal);
    }else setTotal(0)
  }, [services, additionsArray, anualPayment,total]);

  return{setTotal, total}
}
