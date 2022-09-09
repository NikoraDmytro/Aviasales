import React, { useState } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import styles from "./Modal.module.scss";

interface Props {
  visible: boolean;
  close: () => void;
  children: (hideModal: () => void) => React.ReactNode;
}

export const Modal = ({ visible, children, close }: Props) => {
  const [isHiding, setIsHiding] = useState(false);

  if (!visible) {
    return null;
  }

  const wrapperClassName = classNames(styles.modalWrapper, {
    [styles.visible]: visible && !isHiding,
  });

  const handleOutsideClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains(styles.modalWrapper)) {
      hideModal();
    }
  };

  const hideModal = () => {
    setIsHiding(true);
  };

  const handleAnimationEnd = () => {
    if (isHiding) {
      close();
      setIsHiding(false);
    }
  };

  return ReactDOM.createPortal(
    <div
      className={wrapperClassName}
      onMouseDown={handleOutsideClick}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={styles.modal}>
        {children(hideModal)}

        <button className={styles.closeModalBtn} onClick={hideModal}></button>
      </div>
    </div>,
    document.body
  );
};
