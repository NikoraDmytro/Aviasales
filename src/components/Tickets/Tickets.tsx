import React, { useState } from "react";

import { getTicketKey } from "./utils/getTicketKey";

import { Wrapper } from "./Wrapper";
import { Modal } from "components/Modal";
import { Ticket } from "./components/Ticket";
import { BuyTicketForm } from "components/BuyTicketForm";
import { SuccessModal } from "./components/SuccessModal";

import styles from "./Tickets.module.scss";

type ModalState = "hidden" | "visible" | "success";

export const Tickets = () => {
  const [modalState, setModalState] = useState<ModalState>("hidden");

  const isVisible = modalState === "visible";
  const isSuccess = modalState === "success";

  const closeModal = () => setModalState("hidden");
  const openModal = () => setModalState("visible");
  const openSuccessModal = () => setModalState("success");

  return (
    <Wrapper>
      {(tickets) => (
        <ul className={styles.ticketsList}>
          <Modal visible={isVisible} close={closeModal}>
            <BuyTicketForm onSuccess={openSuccessModal} />
          </Modal>
          <SuccessModal visible={isSuccess} close={closeModal} />

          {tickets.map((ticket) => (
            <li key={getTicketKey(ticket)}>
              <Ticket ticket={ticket} buyTicket={openModal} />
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};
