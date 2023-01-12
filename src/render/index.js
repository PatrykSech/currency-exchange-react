const currenciesName = currency => `${currency.name}`

const renderCurrencies = ({currency, onSelectChange, currencies}) => (
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
);

export default renderCurrencies;