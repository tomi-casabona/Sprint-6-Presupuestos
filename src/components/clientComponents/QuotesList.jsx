import { useEffect, useMemo, useState } from "react";
import { useFormContext } from "../../context/FormProvider";
import { filterByQuery, sortBy } from "../../logic/quotesLogic/quotesSort";
import Lupa from "../../assets/Icons/Lupa";
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

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  if (form.clients.length != 0)
    return (
      <div className="flex flex-col justify-evenly items-center shadow-2xl md:w-4/5 w-full max-w-screen-lg rounded-2xl bg-white">
        <h2 className="text-xl font-bold p-3 bg-white rounded-xl">
          Recent quotations
        </h2>
        <div className="flex flex-row self-end gap-2 me-2">
          <div className="flex items-center btn btn-sm text-sm p-2 content-center hover:border-green-500 hover:cursor-pointer">
            <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              className="text-sm p-2 focus:outline-none bg-transparent"
              placeholder="Buscar..."
            />
            <button className="p-2">
              <Lupa />{" "}
            </button>
          </div>

          <button
            className="btn btn-sm text-sm p-2 content-center hover:border-green-500 hover:scale-110 hover:cursor-pointer"
            onClick={() => sortBy("date", setSortedQuotes, sortedQuotes)}
          >
            Date
          </button>
          <button
            className="btn btn-sm text-sm p-2 content-center hover:border-green-500 hover:scale-110 hover:cursor-pointer"
            onClick={() => sortBy("total", setSortedQuotes, sortedQuotes)}
          >
            Import
          </button>
          <button
            className="btn btn-sm text-sm p-2 content-center hover:border-green-500 hover:scale-110 hover:cursor-pointer"
            onClick={() => sortBy("name", setSortedQuotes, sortedQuotes)}
          >
            Name
          </button>
        </div>

        {filteredQuotes.map((client) => (
          <Quotation key={client.id} client={client} />
        ))}
      </div>
    );
}
