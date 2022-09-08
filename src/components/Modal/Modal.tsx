import React, { useState } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import styles from "./Modal.module.scss";

interface Props {
  visible: boolean;
  close: () => void;
  children: React.ReactNode;
}

export const Modal = ({ visible, children, close }: Props) => {
  const [isHiding, setIsHiding] = useState(false);

  const wrapperClassName = classNames(styles.modalWrapper, {
    [styles.visible]: visible && !isHiding,
  });

  const hideModal = () => {
    setIsHiding(true);
  };

  const handleAnimationEnd = () => {
    if (isHiding) {
      close();
      setIsHiding(false);
    }
  };

  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      onClick={hideModal}
      className={wrapperClassName}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={styles.modal}>
        {children}

        <button className={styles.closeModalBtn} onClick={hideModal}></button>
      </div>
    </div>,
    document.body
  );
};
