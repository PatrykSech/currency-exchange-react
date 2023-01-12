import { useState } from "react";

const [result, setResult] = useState();

const calculateResult = ({currency, amount}) => {
    const rate = currency.find(({name}) => name === currency.rate

)};

const ({
    targetAmount: +amount,
    sourceAmount: amount / rate,
    currency,
})
