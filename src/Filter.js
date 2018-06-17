import React from 'react';
import { CURRENCY_TYPES } from './constants';

export default ({ currency, onCurrencyChange }) => {
  return (
    <div>
      {Object.keys(CURRENCY_TYPES).map(curr => (
        <label htmlFor={curr} key={curr}>
          <input
            type="radio"
            name="currency"
            id={curr}
            value={curr}
            checked={curr === currency}
            onChange={onCurrencyChange(curr)}
          />
          {curr}
        </label>
      ))}
    </div>
  );
};
