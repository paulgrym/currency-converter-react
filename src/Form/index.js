import { useState } from "react";
import "./style.css";
import { Result } from "./Result";
import { currencies } from "../currencies";

export const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();

  const calculateResult = () => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      currency,
      startAmount: +amount,
      endAmount: amount / rate
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <h1 className="form__header">Przelicznik walut</h1>
      <p>
        <label className="form__label">
          <span className="form__labelText">Kwota*:</span>
          <input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="form__field"
            placeholder="Kwota w PLN"
            type="number"
            min="0.01"
            step="0.01"
            required
          />
        </label>
      </p>
      <p>
        <label className="form__label">
          <span className="form__labelText">Waluta*:</span>
          <select
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
            className="form__field"
            required>
            {currencies.map(currency => (
              <option value={currency.short} key={currency.short}>{currency.name}</option>
            ))}
          </select>
        </label>
      </p>
      <p>
        <button className="form__button">Przelicz!</button>
      </p>
      <Result result={result} />
      <p>
        * - pola wymagające uzupełniania
      </p>
    </form>
  );
};