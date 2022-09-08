import React from "react";
import { useTypedSelector } from "redux/hooks";
import { selectTransfersFilters } from "redux/reducers/filtersReducer";

import jsonTickets from "shared/tickets.json";
import { ITicket } from "shared/models/ITicket";

import { Ticket } from "./components/Ticket";

import styles from "./Tickets.module.scss";

export const Tickets = () => {
  const jsonString = JSON.stringify(jsonTickets);
  let tickets: ITicket[] = JSON.parse(jsonString);

  const transfersFilters = useTypedSelector(selectTransfersFilters);

  tickets.sort((a, b) => a.price - b.price);

  if (transfersFilters.length) {
    tickets = tickets.filter((ticket) =>
      transfersFilters.includes(ticket.stops)
    );
  }

  return (
    <ul className={styles.ticketsList}>
      {tickets.map((ticket) => {
        const key =
          ticket.destination +
          ticket.departure_date +
          ticket.departure_time +
          ticket.arrival_date +
          ticket.arrival_time;

        return (
          <li key={key}>
            <Ticket ticket={ticket} />
          </li>
        );
      })}
    </ul>
  );
};
