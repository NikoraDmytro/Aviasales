import classNames from "classnames";

import { useTypedSelector } from "redux/hooks";
import { selectCurrentCurrency } from "redux/reducers/currenciesReducer";

import { formatPrice } from "./../utils/transformNumber";

import { ITicket } from "shared/models/ITicket";
import turkishAirlines from "shared/img/turkishAirlines.png";

import { FlightInfo } from "./FlightInfo";

import styles from "./Ticket.module.scss";

interface Props {
  ticket: ITicket;
  buyTicket: () => void;
}

export const Ticket = ({ ticket, buyTicket }: Props) => {
  const currency = useTypedSelector(selectCurrentCurrency);
  const price = ticket.price * currency.rate;

  return (
    <div className={classNames(styles.whiteBox, styles.ticketBox)}>
      <div>
        <img
          className={styles.airlinesLogo}
          src={turkishAirlines}
          alt="Turkish Airlines"
        />

        <button onClick={buyTicket} className={styles.buyTicketBtn}>
          Купить <br /> за {formatPrice(price)}
          {" " + currency.symbol}
        </button>
      </div>

      <FlightInfo ticket={ticket} />
    </div>
  );
};
