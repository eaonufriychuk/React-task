import React, { Component } from 'react';
import { CURRENCY_TYPES } from './constants';

const CONVERT_TABLE = {
  [CURRENCY_TYPES.RUB]: 1,
  [CURRENCY_TYPES.USD]: 60,
  [CURRENCY_TYPES.EUR]: 70
};

console.log(CONVERT_TABLE);

export default props => {
  const {
    ticket: {
      price,
      stops,
      destinationName,
      departureDate,
      departureTime,
      arrivaDate,
      arrivalTime
    },
    currency
  } = props;
  const priceTicket = price / CONVERT_TABLE[currency];

  return (
    <div>
      <h2>Turkish Airlines</h2>
      <button>Купить {priceTicket} </button>
    </div>
  );
};
