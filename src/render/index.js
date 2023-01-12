export const Render = ({currency, onSelectChange, currencies}) => {
    const currenciesName = currency => `${currency.name}`

    return(
    <label>
        <select
        value={currency}
        onChange={onSelectChange}
        className="form__currency">
        {currencies.map(currency => (
            <option>
                {currenciesName(currency)}
            </option>
        ))};
        </select>
    </label>
    )
};