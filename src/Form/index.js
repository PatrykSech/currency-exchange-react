import { Select } from "../select";
import { Result } from "../result";
import { useState } from "react";
import { currencies } from "../currencies";
import Clock from "../Clock";
import { Header, Container, Paragraph, Button, Input, Fieldset } from "./styled"

export const Form = ({ calculateResult, result, ratesData }) => {

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].name)

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <body>
      <main>
        <Header>Wymiana walut</Header>
        <Container onSubmit={onFormSubmit}>
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
                    as="select"
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
      </main>
    </body>
  );
};