import React from "react";

import planeIcon from "shared/img/ticketPlane.svg";
import { ITicket } from "shared/models/ITicket";

import { formatDateString } from "../utils/formatDateString";

import styles from "./FlightInfo.module.scss";

interface Props {
  ticket: ITicket;
}

export const FlightInfo = ({ ticket }: Props) => (
  <div className={styles.flightInfoBox}>
    <div>
      <h1 className={styles.timeSpan}>{ticket.departure_time}</h1>

      <span className={styles.transfers}>
        {ticket.stops} пересадки <img src={planeIcon} alt="" />
      </span>

      <h1 className={styles.timeSpan}>{ticket.arrival_time}</h1>
    </div>

    <div className={styles.placesBlock}>
      <p>
        {ticket.origin}, {ticket.origin_name}
      </p>
      <p>
        {ticket.destination_name}, {ticket.destination}
      </p>
    </div>

    <div className={styles.datesBlock}>
      <span>{formatDateString(ticket.departure_date)}</span>

      <span>{formatDateString(ticket.arrival_date)}</span>
    </div>
  </div>
);
