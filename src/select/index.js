import "./style.css";

export const Render = ({currency, onSelectChange, currencies}) => {
    const currenciesName = currency => `${currency.name}`

    return(
    <label>
        <select
        value={currency}
        onChange={onSelectChange}
        className="select">
        {currencies.map(currency => (
            <option>
                {currenciesName(currency)}
            </option>
        ))};
        </select>
    </label>
    )
};