import { Render } from "../render";
import { Result } from "../result";
import { useState } from "react";
import { currencies } from "../currencies";

export const Form = ({calculateResult, result}) => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].name)

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
      };

return (
    <body>
      <main>
        <section className="section">
          <form onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">

              <legend
                className="form__legend">
                Wymiana walut
              </legend>

              <p>Wprowadź kwotę w PLN :</p>

              <p>
                <label>
                  <input
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="PLN"
                    type="number"
                    name="kwota"
                    required
                    className="form__label"
                    min="1"
                  />
                </label>
              </p>

              <p>Chcę otrzymać :</p>

              <p>
                <Render
                  value={currency}
                  onChange={({ target }) => setCurrency(target.value)}
                  currencies={currencies}
                  className="form__currency" />
              </p>

            </fieldset>

            <button className="form__button">Wyślij</button>

            <p>
            <Result result={result} />
            </p>
          </form>
        </section>
      </main>
    </body>
  );
};