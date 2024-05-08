import { useEffect, useState } from "react";
import { WEB_ADDITIONS } from "../data/dataForm";

export function useAdditions(services) {
  const [additionsArray, setAdditionsArray] = useState(WEB_ADDITIONS);

  useEffect(() => {
    if (!services.some((item) => item.type === "Web")) {
      setAdditionsArray(WEB_ADDITIONS);
    }
  }, [services]);

  function changeAdditionQuantity(inputId, operation) {
    let index = additionsArray.findIndex((i) => i.id === inputId);
    const item = {...additionsArray[index]};

    if (operation === "up") {
      item.quantity += 1;
    } else if (operation === "down" && item.quantity > 0) {
      item.quantity -= 1;
    }

    const updatedArray = [...additionsArray];
    updatedArray[index] = item;

    setAdditionsArray(updatedArray);
  }
  return { additionsArray, changeAdditionQuantity };
}
