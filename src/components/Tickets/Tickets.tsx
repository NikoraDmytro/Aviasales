import React from "react";

import jsonTickets from "shared/tickets.json";
import { ITicket } from "shared/models/ITicket";

import { Ticket } from "./components/Ticket";

import styles from "./Tickets.module.scss";

export const Tickets = () => {
  const jsonString = JSON.stringify(jsonTickets);
  const tickets: ITicket[] = JSON.parse(jsonString);

  return (
    <ul className={styles.ticketsList}>
      {tickets.map((ticket) => {
        const key = `${ticket.destination_name} ${ticket.departure_date} ${ticket.departure_time} +`;

        return (
          <li key={key}>
            <Ticket ticket={ticket} />
          </li>
        );
      })}
    </ul>
  );
};
