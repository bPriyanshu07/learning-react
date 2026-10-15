
import { useEffect, useState } from "react";

function useCurrencyInfo(fromCurrency, toCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.frankfurter.dev/v2/rate/${fromCurrency}/${toCurrency}`
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, [fromCurrency, toCurrency]);

  return data;
}

export default useCurrencyInfo;