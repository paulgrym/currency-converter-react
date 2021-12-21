import { useState, useEffect } from "react";

export const useRatesDate = () => {
  const [ratesData, setRatesData] = useState({ state: "loading" });

  useEffect(() => {
    const getRates = async () => {
      try {
        const currenciesAPIUrl = 'https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,CHF,GBP,JPY,CZK,AUD,CAD'
        const response = await fetch(currenciesAPIUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { date, rates } = await response.json();
        console.log({ date, rates });

        setRatesData({
          date,
          rates,
          state: "success"
        });

      } catch (error) {
        console.error("Sth bad", error);
        setRatesData({ state: "error" });
      }
    }
    setTimeout(getRates, 1500);
  }, []);

  return ratesData;
}

