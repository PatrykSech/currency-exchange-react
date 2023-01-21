import "./style.css";

export const Select = ({currency, onSelectChange, currencies}) => {
    const currenciesName = currency => `${currency.name}`

    return(
    <label>
        <select
        value={currency}
        onChange={onSelectChange}
        className="select">
        {currencies.map(currency => (
            <option
                key={currency.id}
                value={currency.name}
            >
                {currenciesName(currency)}
            </option>
        ))};
        </select>
    </label>
    )
};