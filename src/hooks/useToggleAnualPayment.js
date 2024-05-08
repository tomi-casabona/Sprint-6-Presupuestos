import { useState } from "react";

export function useToggleAnualPayment() {
  const [anualPayment, setAnualPayment] = useState(false);

  function toggleAnualPayment() {
    setAnualPayment(!anualPayment);
  }
  return { toggleAnualPayment, anualPayment };
}
