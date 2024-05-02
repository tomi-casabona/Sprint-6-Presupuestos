import { useFormContext } from "../../context/FormProvider";
import { Quotation } from "./Quotation";

export function QuotesList() {
  const form = useFormContext();

  return (
    <div className="flex flex-col w-full items-center rouded shadow-2xl p-4">
      <h2 className="text-xl font-bold m-3  ">Quotations:</h2>
      {form.clients.map((client) => (
        <Quotation key={client.id} client={client} />
      ))}
    </div>
  );
}
