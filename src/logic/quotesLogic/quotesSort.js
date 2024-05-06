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
  let sorted = array.sort((a, b) => a.total - b.total);
  return sorted;
};
