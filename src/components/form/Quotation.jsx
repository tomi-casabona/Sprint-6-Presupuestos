import Euro from "../../assets/Icons/Euro";
import { WebAggregation } from "./WebAggragations";

export function Quotation({ client }) {
  return (
    <div className="flex flex-row justify-evenly items-center mb-2 gap-4 shadow-2xl p-4 rounded-2xl bg-white w-full max-w-screen-lg hover:ring-4 hover:ring-green-500">
      <div className="flex flex-col">
        <h3 className="font-bold text-2xl mb-3">
          {client.name.charAt(0).toUpperCase() + client.name.slice(1)}
        </h3>
        <p className="font-bold text-gray-400  text-sm">{client.email}</p>
        <p className="font-bold text-gray-400  text-xm">{client.telephone}</p>
      </div>

      <div className="flex flex-col">
        <h5 className="text-sm font-bold mb-3">Services contracted:</h5>
        {client.services.length > 0 && (
          <ul className="flex flex-col space-y-1">
            {client.services.map((service) =>
              service.type === "Web" ? (
                <li className="font-bold text-sm" key={service.id}>
                  {service.type}
                  <WebAggregation client={client}></WebAggregation>
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

      <div className="flex flex-col">
        <p className="font-bold text-gray-400 text-sm text-center mb-3">
          Total:
        </p>
        <div className="flex flex-row gap-2 items-center font-extrabold text-2xl px-2 ">
          {client.total}
          <Euro />
        </div>
      </div>
    </div>
  );
}
