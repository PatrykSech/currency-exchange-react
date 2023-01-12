const Result = ({result}) => (
    <p>
        {result === undefined ? "Policz coś" : (
            <>
            {result.sourceAmount.toFixed(2)}{" "}PLN{" "}={" "}

            <strong>
                {result.targetAmount.toFixed(2)}{" "}{result.currency}
            </strong>
            </>
        )}
    </p>
);

export default Result;