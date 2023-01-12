export const Result = ({ result }) => (
    <p>
        {result === undefined ? "" : (
            <>
                {result.targetAmount.toFixed(2)}{" "}PLN{" "}={" "}
                <strong>
                    {result.sourceAmount.toFixed(2)}{" "}{result.currency}
                </strong>
            </>
        )}
    </p>
);