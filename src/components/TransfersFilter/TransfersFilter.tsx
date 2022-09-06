import React from "react";

import styles from "./TransfersFilter.module.scss";

interface FilterProps {
  id: string;
  label: string;
  isPickOnly?: boolean;
}

const Filter = ({ id, label, isPickOnly }: FilterProps) => {
  return (
    <label htmlFor={id} className={styles.filter}>
      <input type="checkbox" id={id} />

      <span className={styles.checkmark} />
      {label}

      {!isPickOnly && <button className={styles.pickOnlyBtn}>Только</button>}
    </label>
  );
};

export const TransfersFilter = () => {
  return (
    <>
      <h2 className={styles.inputGroupTitle}>Количество пересадок</h2>

      <div className={styles.filtersContainer}>
        <Filter id="allTransfers" label="Все" isPickOnly />
        <Filter id="noTransfers" label="Без пересадок" />
        <Filter id="oneTransfer" label="1 пересадка" />
        <Filter id="twoTransfers" label="2 пересадки" />
        <Filter id="threeTransfers" label="3 пересадки" />
      </div>
    </>
  );
};
