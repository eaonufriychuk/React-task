import React from "react";
import Ticket from './Ticket';

export default (props) => {
    const {tickets, isLoading, error, filters: {currency, stops}} = props;
    if(isLoading){
        return(<div>isLoading</div>);
    }
    if(error){
        return(<div>Error</div>);
    }
    const filteredTickets = stops.length === 0
        ? tickets
        : tickets.filter(ticket => stops.includes(ticket.stops));
    return (<div>{filteredTickets.map(ticket => <Ticket ticket={ticket} currency={currency}/>)}</div>);
}