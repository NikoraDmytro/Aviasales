import React from "react";

import tickets from "shared/tickets.json";

import styles from "./Tickets.module.scss";

export const Tickets = () => {
  return (
    <ul>
      {tickets.map((ticket) => (
        <li className={styles.whiteBox}>
          <div>
            {ticket.departure_time} - {ticket.arrival_time}
          </div>

          <div>
            <p>
              {ticket.origin}, {ticket.origin_name}
              <span>{ticket.departure_date}</span>
            </p>
            <p>
              {ticket.destination_name}, {ticket.destination}
              <span>{ticket.arrival_date}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
