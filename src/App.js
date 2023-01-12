import RenderList from "./render";
import Result from "./result";
import {useState} from "react";
import currencies from "./currencies"

function App() {

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Chcesz wymienić: ${amount}`)
  };

  const [amount, setAmount] = useState("");

  const [currency, setCurrency] = useState("")
  const onSelectChange = ({target}) => setCurrency(target.value);

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
                    onChange={({target}) => setAmount(target.value)}
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
              <RenderList
               value={currency}
               onChange={onSelectChange}
               currencies={currencies}
               className="form__currency" />
              </p>

            </fieldset>

            <button className="form__button">Wyślij</button>
            <p>
            <Result
            currency={currency}
            amount={amount}
          />
            </p>
          </form>
        </section>
      </main>
    </body>
  );
}

export default App;
