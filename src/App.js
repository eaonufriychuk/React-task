import React, { Component } from 'react';
import TicketList from './TicketList';
import Filter from './Filter';
import { CURRENCY_TYPES } from './constants';

class App extends Component {
  state = {
    tickets: [],
    isLoading: false,
    error: null,
    filters: {
      currency: CURRENCY_TYPES.RUB,
      stops: []
    }
  };

  onCurrencyChange = currency => () => {
    this.setState(({ filters }) => ({ filters: { ...filters, currency } }));
  };

  render() {
    return (
      <div className="App">
        <Filter
          currency={this.state.filters.currency}
          onCurrencyChange={this.onCurrencyChange}
        />
        <TicketList {...this.state} />
      </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3000/tickets')
      .then(res => res.json())
      .then(tickets => {
        this.setState({ tickets });
        console.log(tickets);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }
}

export default App;
