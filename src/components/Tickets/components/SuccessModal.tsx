import React from "react";
import { Modal } from "components/Modal";

import styles from "./SuccessModal.module.scss";

interface Props {
  visible: boolean;
  close: () => void;
}

export const SuccessModal = ({ visible, close }: Props) => {
  return (
    <Modal visible={visible} close={close} className={styles.successModal}>
      <span className={styles.tick}></span>
      <h1>Билет оформлен</h1>
    </Modal>
  );
};
