import classNames from "classnames";

import { ITicket } from "shared/models/ITicket";
import turkishAirlines from "shared/img/turkishAirlines.png";

import { FlightInfo } from "./FlightInfo";

import styles from "./Ticket.module.scss";

interface Props {
  ticket: ITicket;
}

export const Ticket = ({ ticket }: Props) => {
  return (
    <div className={classNames(styles.whiteBox, styles.ticketBox)}>
      <div>
        <img
          className={styles.airlinesLogo}
          src={turkishAirlines}
          alt="Turkish Airlines"
        />

        <button className={styles.buyTicketBtn}>
          Купить <br /> за {ticket.price}
        </button>
      </div>

      <FlightInfo ticket={ticket} />
    </div>
  );
};
