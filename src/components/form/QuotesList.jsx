import { useState, useEffect, useMemo } from "react";
import Lupa from "../../assets/Icons/Lupa";
import { useFormContext } from "../../context/FormProvider";
import {
  sortByDate,
  sortByName,
  sortByTotal,
  filterByQuery,
} from "../../logic/quotesLogic/quotesSort";
import { Quotation } from "./Quotation";

export function QuotesList() {
  const form = useFormContext();
  const [query, setQuery] = useState("");
  const [sortedQuotes, setSortedQuotes] = useState([]);

  useEffect(() => {
    setSortedQuotes(form.clients);
  }, [form.clients]);

  const filteredQuotes = useMemo(() => {
    let quotes = [...sortedQuotes];
    if (query) {
      quotes = filterByQuery(quotes, query);
    }
    return quotes;
  }, [sortedQuotes, query]);

  const sortBy = (by) => {
    if (by === "total") {
      setSortedQuotes([...sortByTotal(sortedQuotes)]);
    } else if (by === "name") {
      setSortedQuotes([...sortByName(sortedQuotes)]);
    } else if (by === "date") {
      setSortedQuotes([...sortByDate(sortedQuotes)]);
    }
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex flex-col justify-evenly items-center shadow-2xl md:w-4/5 w-full max-w-screen-lg rounded-2xl bg-white">
      <h2 className="text-xl font-bold p-3 bg-white rounded-xl">Quotations:</h2>
      <div className="flex flex-row self-end gap-2 me-2">
        <div className="flex items-center">
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            className="text-sm p-2"
            placeholder="Buscar..."
          />
          <button className="p-2">
            <Lupa />{" "}
          </button>
        </div>

        <button className="text-sm p-2" onClick={() => sortBy("date")}>
          Date
        </button>
        <button className="text-sm p-2" onClick={() => sortBy("total")}>
          Import
        </button>
        <button className="text-sm p-2" onClick={() => sortBy("name")}>
          Name
        </button>
      </div>

      {filteredQuotes.map((client) => (
        <Quotation key={client.id} client={client} />
      ))}
    </div>
  );
}
