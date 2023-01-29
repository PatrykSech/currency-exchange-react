import { Select } from "../select";
import { Result } from "../result";
import { useState } from "react";
import { currencies } from "../currencies";
import Clock from "../clock";
import { Header, Container, Paragraph, Button, Input, Fieldset, Body} from "./styled"

export const Form = ({ calculateResult, result }) => {

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
                currencies={currencies}
              />
          </Fieldset>
          <Button>Wyślij</Button>
          <Result result={result} />
        </Container>
      </main>
    </body>
  );
};