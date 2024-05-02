import Euro from "../../assets/Icons/Euro";
import { useFormContext } from "../../context/FormProvider";
import { WebAggregation } from "./WebAggragations";

export function Quotation({ client }) {
  const form = useFormContext();

  return (
    <div className="flex justify-evenly items-center shadow-2xl md:w-4/5 w-full max-w-screen-lg rounded-2xl bg-white hover:ring-2 hover:ring-green-600">
      <div className="flex flex-col p-4 md:p-8">
        <h3 className="font-bold text-lg mb-3">{client.name}</h3>
        <p className="font-bold text-gray-400  text-sm">{client.email}</p>
        <p className="font-bold text-gray-400  text-xm">{client.telephone}</p>
      </div>

      <div className="flex flex-col p-4 md:p-8">
        <h5 className="text-sm font-bold mb-3">Services contracted:</h5>
        {form.services.length > 0 && (
          <ul className="flex flex-col space-y-1">
            {form.services.map((service) =>
              service.type === "Web" ? (
                <li className="font-bold text-sm" key={service.id}>
                  {service.type}
                  <WebAggregation></WebAggregation>
                </li>
              ) : (
                <li className="font-bold text-sm" key={service.id}>
                  {service.type}
                </li>
              )
            )}
          </ul>
        )}
      </div>

      <div className="flex flex-col p-4 md:p-8">
        <p className="font-bold text-gray-400 text-sm text-center mb-3">
          Total:
        </p>
        <div className="flex flex-row gap-2 items-center font-extrabold text-2xl px-2 ">
          {form.total}
          <Euro />
        </div>
      </div>
    </div>
  );
}
