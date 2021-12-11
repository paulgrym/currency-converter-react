import { useState } from "react";
import { Result } from "./Result";
import { currencies } from "../currencies";
import { StyledForm, StyledHeader, StyledLabel, StyledLabelText, StyledField, StyledButton } from "./styled";

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
    <StyledForm onSubmit={onFormSubmit}>
      <StyledHeader>Przelicznik walut</StyledHeader>
      <p>
        <StyledLabel>
          <StyledLabelText>Kwota*:</StyledLabelText>
          <StyledField
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Kwota w PLN"
            type="number"
            min="0.01"
            step="0.01"
            required
          />
        </StyledLabel>
      </p>
      <p>
        <StyledLabel>
          <StyledLabelText>Waluta*:</StyledLabelText>
          <StyledField as="select"
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
            required>
            {currencies.map(currency => (
              <option value={currency.short} key={currency.short}>{currency.name}</option>
            ))}
          </StyledField>
        </StyledLabel>
      </p>
      <p>
        <StyledButton>Przelicz!</StyledButton>
      </p>
      <Result result={result} />
      <p>
        * - pola wymagające uzupełniania
      </p>
    </StyledForm>
  );
};