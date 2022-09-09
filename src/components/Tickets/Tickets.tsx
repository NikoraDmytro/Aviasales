import React, { useState } from "react";
import { useTypedSelector } from "redux/hooks";
import { selectTransfersFilters } from "redux/reducers/filtersReducer";

import { Modal } from "components/Modal";
import { Ticket } from "./components/Ticket";
import { BuyTicketForm } from "components/BuyTicketForm";

import { getTickets } from "./utils/getTickets";
import { ITicket } from "shared/models/ITicket";

import styles from "./Tickets.module.scss";

export const Tickets = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const transfersFilters = useTypedSelector(selectTransfersFilters);

  const tickets = getTickets(transfersFilters);

  const ticketKey = (ticket: ITicket) =>
    ticket.destination +
    ticket.departure_date +
    ticket.departure_time +
    ticket.arrival_date +
    ticket.arrival_time;

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ul className={styles.ticketsList}>
      <Modal visible={modalVisible} close={closeModal}>
        {(hide) => <BuyTicketForm onSuccess={hide} />}
      </Modal>

      {tickets.map((ticket) => (
        <li key={ticketKey(ticket)}>
          <Ticket ticket={ticket} buyTicket={openModal} />
        </li>
      ))}
    </ul>
  );
};
