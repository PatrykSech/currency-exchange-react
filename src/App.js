import { currencies } from "./currencies"
import { useState } from "react";
import { Form } from "./form";
import { Container } from "./styled"

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
    <Container>
      <Form result={result} calculateResult={calculateResult} />
    </Container>
  )
};

export default App;
