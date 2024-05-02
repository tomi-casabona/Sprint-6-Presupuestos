import { useFormContext } from "../../context/FormProvider";
import { Quotation } from "./Quotation";

export function QuotesList() {
  const form = useFormContext();

  return form.clients.map((client) => (
    <Quotation key={client.id} client={client} />
  ));
}
