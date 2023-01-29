import { Currencies } from "./styled"

export const Select = ({currency, onSelectChange, currencies}) => {
    const currenciesName = currency => `${currency.name}`

    return(
    <label>
        <Currencies
        value={currency}
        onChange={onSelectChange}
        >
        {currencies.map(currency => (
            <option
                key={currency.id}
                value={currency.name}
            >
                {currenciesName(currency)}
            </option>
        ))};
        </Currencies>
    </label>
    )
};