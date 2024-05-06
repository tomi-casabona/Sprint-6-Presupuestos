import { useState, useEffect } from "react";
import Lupa from "../../assets/Icons/Lupa";
import { useFormContext } from "../../context/FormProvider";
import {
  sortByDate,
  sortByName,
  sortByTotal,
} from "../../logic/quotesLogic/quotesSort";
import { Quotation } from "./Quotation";

export function QuotesList() {
  const form = useFormContext();
  const [sortedQuotes, setSortedQuotes] = useState([]);

  useEffect(() => {
    setSortedQuotes(form.clients);
  }, [form.clients]); // Cargar las cotizaciones al montar y cuando cambie el contexto

  const sortBy = (by) => {
    if (by === "total") setSortedQuotes([...sortByTotal(form.clients)]);
    if (by === "name") setSortedQuotes([...sortByName(form.clients)]);
    if (by === "date") setSortedQuotes([...sortByDate(form.clients)]);
  };

  return (
    <div className="flex flex-col justify-evenly items-center shadow-2xl md:w-4/5 w-full max-w-screen-lg rounded-2xl bg-white">
      <h2 className="text-xl font-bold p-3 bg-white rounded-xl ">
        Quotations:
      </h2>
      <div className="flex flex-row self-end gap-2 me-2">
        <div className="text-sm p-2 btn btn-sm ">
          <Lupa />
        </div>
        <div className="text-sm p-2 btn btn-sm" onClick={() => sortBy("date")}>
          Date
        </div>
        <div className="text-sm p-2 btn btn-sm" onClick={() => sortBy("total")}>
          Import
        </div>
        <div className="text-sm p-2 btn btn-sm" onClick={() => sortBy("name")}>
          Name
        </div>
      </div>
      {sortedQuotes.map((client) => (
        <Quotation key={client.id} client={client} />
      ))}
    </div>
  );
}
