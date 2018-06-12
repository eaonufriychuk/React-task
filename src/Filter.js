import React from "react";

export default ({currency, onCurrencyChange}) => {
    return (<div>
        {['RUB', 'USD', 'EUR'].map(curr => (
        <label htmlFor={curr} key={curr}>
            <input type="radio" name='currency' value={curr} checked={curr === currency} onChange={onCurrencyChange(curr)}/> {curr}
        </label>
        ))}
    </div>)
}