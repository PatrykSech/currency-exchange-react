import { Select } from "../select";
import { Result } from "../result";
import { useState } from "react";
import { currencies } from "../currencies";
import Clock from "../clock";
import "./style.css";

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
        <section>
          <h1 className="header">Wymiana walut</h1>
          <form
            onSubmit={onFormSubmit}
            className="form"
          >
            <fieldset className="fieldset">
             <Clock />
            <p className="paragraph">Wprowadź kwotę w PLN :</p>
              <p>
                <label>
                  <input
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="PLN"
                    type="number"
                    name="kwota"
                    required
                    min="1"
                    className="input"
                  />
                </label>
              </p>
            <p className="paragraph">Chcę otrzymać :</p>
              <p>
                <Select
                  value={currency}
                  onSelectChange={({ target }) => setCurrency(target.value)}
                  currencies={currencies}
                />
              </p>
            </fieldset>
            <button className="button">
              Wyślij
            </button>
            <p>
              <Result result={result} />
            </p>
          </form>
        </section>
      </main>
    </body>
  );
};