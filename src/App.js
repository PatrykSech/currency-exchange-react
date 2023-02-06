import { useState } from "react";
import { Form } from "./form";
import { Container } from "./styled";
import { useRatesData } from "./useRatesData";

function App() {
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

  return (
    <Container>
      <Form result={result} calculateResult={calculateResult} ratesData={ratesData} />
    </Container>
  )
};

export default App;
