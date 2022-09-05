import React from "react";

import styles from "./TransfersFilter.module.scss";

export const TransfersFilter = () => {
  return (
    <>
      <h2 className={styles.inputGroupTitle}>Количество пересадок</h2>

      <div>
        <input type="checkbox" id="allTransfers" />
        <label htmlFor="allTransfers">Все</label>

        <input type="checkbox" id="NoTransfers" />
        <label htmlFor="NoTransfers">Без пересадок</label>

        <input type="checkbox" id="OneTransfer" />
        <label htmlFor="OneTransfer">1 пересадка</label>

        <input type="checkbox" id="TwoTransfers" />
        <label htmlFor="TwoTransfers">2 пересадки</label>

        <input type="checkbox" id="ThreeTransfers" />
        <label htmlFor="ThreeTransfers">3 пересадки</label>
      </div>
    </>
  );
};
