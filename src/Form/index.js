import { Select } from "../select";
import { Result } from "../result";
import { useState } from "react";
import { currencies } from "../currencies";
import Clock from "../Clock";
import { useRatesData } from "../useRatesData";
import { Header, Container, Paragraph, Button, Input, Fieldset, Loading, Failure } from "./styled"

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

  const [amount, setAmount] = useState("EUR");
  const [currency, setCurrency] = useState(currencies[0].name)

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
              <Select
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
              </Select>
          </Fieldset>
          <Button>Przelicz!</Button>
          <Paragraph rateinfo>Kursy walut pobierane są z Europejskiego Banku Centralnego. <br/> Aktualne na dzień:<strong> N/A</strong></Paragraph>
          <Result result={result} />
        </Container>
      </>
      ))}
    </form>
  );
};