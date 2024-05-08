import { useState } from "react";

export function useServices() {
  const [services, setServices] = useState([]);

  function sendService(newService) {
    const newArrayServices = [...services];

    if (!newArrayServices.includes(newService)) {
      newArrayServices.push(newService);
      setServices(newArrayServices);
    }
  }

  function removeService(serviceForRemove) {
    const newArrayServices = [...services].filter(
      (service) => service.id != serviceForRemove.id
    );
    setServices(newArrayServices);
  }
  return { removeService, sendService, services, setServices };
}
