import { useState } from "react";
import { Result } from "../result";
import Clock from "../Clock";
import {  Header,
          Container,
          Paragraph,
          Button,
          Input,
          Fieldset,
          Loading,
          Failure,
          Field } from "./styled"
import { useRatesData } from "../useRatesData";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      targetAmount: +amount,
      sourceAmount: amount * rate,
      currency,
    });
  };

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Header>
        Przelicznik walut
      </Header>
      {ratesData.state === "loading"
        ? (
          <Loading>
            Sekundka... Ładuje kursy walut z Europejskiego Banku Centralnego.
          </Loading>
        )
        : (
          ratesData.state === "error"
        ? (
            <Failure>
              Hmm...Coś poszło nie tak. Sprawdz swoje polączenie z internetem.
            </Failure>
        ) : (
      <>
        <Container>
          <Fieldset>
            <Clock />
            <Paragraph>Wprowadź kwotę w PLN :</Paragraph>
              <label>
                <Input
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                  placeholder="PLN"
                  type="number"
                  name="kwota"
                  required
                  min="1"
                />
              </label>
            <Paragraph>Chcę otrzymać :</Paragraph>
              <Field
                as="select"
                value={currency}
                onSelectChange={({ target }) => setCurrency(target.value)}
              >
                {Object.keys(ratesData.rates).map(((currency) => (
                  <option
                    key={currency}
                    value={currency}
                    >
                      {currency}
                    </option>
                )))}
              </Field>
          </Fieldset>
          <Button>Przelicz!</Button>
          <Paragraph rateinfo>Kursy walut pobierane są z Europejskiego Banku Centralnego. <br/> Aktualne na dzień:<strong>{ratesData.date}</strong></Paragraph>
          <Result result={result} />
        </Container>
      </>
      ))}
    </form>
  );
};