export function useQuoteUtilities(setServices, setTotal) {
  function resetQuoteData() {
    setServices([]);
    setTotal(0);
  }

  return {
    resetQuoteData
  };
}
