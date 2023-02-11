import { ShowResult } from "./styled"

export const Result = ({ result }) => (
    <ShowResult>
        {result === undefined ? "" : (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
                <strong>
                    {result.sourceAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </ShowResult>
);