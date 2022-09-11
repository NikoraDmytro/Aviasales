import React, { useState } from "react";
import { useTypedSelector } from "redux/hooks";
import { selectTransfersFilters } from "redux/reducers/filtersReducer";

import { Modal } from "components/Modal";
import { Ticket } from "./components/Ticket";
import { BuyTicketForm } from "components/BuyTicketForm";

import { getTickets } from "./utils/getTickets";
import { ITicket } from "shared/models/ITicket";

import styles from "./Tickets.module.scss";

type ModalState = "hidden" | "visible" | "success";

export const Tickets = () => {
  const [modalState, setModalState] = useState<ModalState>("hidden");
  const transfersFilters = useTypedSelector(selectTransfersFilters);

  const tickets = getTickets(transfersFilters);

  const ticketKey = (ticket: ITicket) =>
    ticket.destination +
    ticket.departure_date +
    ticket.departure_time +
    ticket.arrival_date +
    ticket.arrival_time;

  const isVisible = modalState === "visible";
  const isSuccess = modalState === "success";
  const closeModal = () => setModalState("hidden");
  const openModal = () => setModalState("visible");
  const showSuccessModal = () => setModalState("success");

  return (
    <ul className={styles.ticketsList}>
      <Modal visible={isVisible} close={closeModal}>
        <BuyTicketForm onSuccess={showSuccessModal} />
      </Modal>
      <Modal
        visible={isSuccess}
        close={closeModal}
        className={styles.successModal}
      >
        <span className={styles.tick}></span>
        <h1>Билет оформлен</h1>
      </Modal>

      {tickets.map((ticket) => (
        <li key={ticketKey(ticket)}>
          <Ticket ticket={ticket} buyTicket={openModal} />
        </li>
      ))}
    </ul>
  );
};
