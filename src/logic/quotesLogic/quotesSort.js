export const sortByTotal = (array) => {
  let sorted = array.sort((a, b) => a.total - b.total);
  return sorted;
};

export const sortByName = (array) => {
  let sorted = array.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sorted;
};

export const sortByDate = (array) => {
  let sorted = array.sort((a, b) => a.date.getTime() - b.date.getTime());
  return sorted;
};


export const filterByQuery = (array, query) => {
  return array.filter((element) =>
    element.name.toLowerCase().includes(query.toLowerCase()) 
  );
};

export const sortBy = (by, setSortedQuotes,sortedQuotes) => {
  if (by === "total") {
    setSortedQuotes([...sortByTotal(sortedQuotes)]);
  } else if (by === "name") {
    setSortedQuotes([...sortByName(sortedQuotes)]);
  } else if (by === "date") {
    setSortedQuotes([...sortByDate(sortedQuotes)]);
  }
};

