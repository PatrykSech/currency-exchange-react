import { currencies } from "./currencies"
import { useState } from "react";
import { Form } from "./form";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ name }) => name === currency).rate;
    console.log(rate);

    setResult({
      targetAmount: +amount,
      sourceAmount: amount / rate,
      currency,
    });
  };

  return (
    <div className="container">
      <Form result={result} calculateResult={calculateResult} />
    </div>
  )
};

export default App;
