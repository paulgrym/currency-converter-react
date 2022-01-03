import { useState } from "react";
import { Result } from "./Result";
import {
  StyledForm,
  Header,
  Label,
  LabelText,
  FormField,
  Button,
  Spinner,
  LoadingText,
  ErrorText
} from "./styled";
import { useRatesDate } from "./useRatesData";

export const Form = () => {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();
  const ratesData = useRatesDate();

  const calculateResult = () => {
    const rate = ratesData.rates[currency];

    setResult({
      currency,
      startAmount: +amount,
      endAmount: amount * rate
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  return (

    <StyledForm onSubmit={onFormSubmit}>
      <Header>Przelicznik walut</Header>

      {ratesData.state === "error" ? (
        <ErrorText>
          Ups...coś poszło nie tak. &#128531; <br />
          Sprawdź, czy masz połączenie z internetem. <br />
          Jeśli tak, spróbuj ponownie później.
        </ErrorText>
      ) : (ratesData.state !== "success" ? (
        <>
          <LoadingText>Trwa ładowanie kursów walut z Europejskiego Banku Centralnego.</LoadingText>
          <Spinner></Spinner>
        </>
      ) : (
        <>
          <p>
            <Label>
              <LabelText>Kwota*:</LabelText>
              <FormField
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                placeholder="Kwota w PLN"
                type="number"
                min="0.01"
                step="0.01"
                required
              />
            </Label>
          </p>
          <p>
            <Label>
              <LabelText>Waluta*:</LabelText>
              <FormField as="select"
                value={currency}
                onChange={(event) => setCurrency(event.target.value)}
                required>
                {(Object.keys(ratesData.rates)).map(currency => (
                  <option value={currency} key={currency}>{currency}</option>
                ))}
              </FormField>
            </Label>
          </p>
          <p>
            <Button>Przelicz!</Button>
          </p>
          <Result result={result} />
          <p>
            * - pola wymagające uzupełniania
          </p>
          <p>
            Kursy walut pobierane są z Europejskiego Banku Centralnego. <br />
            Aktualne na dzień: <strong>{ratesData.date}</strong>
          </p>
        </>
      ))}
    </StyledForm>
  );
};