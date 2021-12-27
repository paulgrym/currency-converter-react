import { useState, useEffect } from "react";

export const useRatesDate = () => {
  const [ratesData, setRatesData] = useState({ state: "loading" });

  useEffect(() => {
    const getRates = async () => {
      try {
        const currenciesAPIUrl = [
          `https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,CHF,GBP,JPY,CZK,AUD,CAD&v=${new Date().getTime()}`,
          "./src/Form/ratesDataCash.json"
        ];
        const response = await fetch(currenciesAPIUrl[0]);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { date, rates } = await response.json();
        console.log({ date, rates });

        if (!rates) {
          throw new Error(response.statusText);
        }

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
    setTimeout(getRates, 2_000);
  }, []);

  return ratesData;
}

