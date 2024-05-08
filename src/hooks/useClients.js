import { useState } from "react";

export function useClients() {
  const [clients, setClients] = useState([]);

  function sendClientData(newClient, total, services, additionsArray) {
    
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

  return { clients, sendClientData };
}
