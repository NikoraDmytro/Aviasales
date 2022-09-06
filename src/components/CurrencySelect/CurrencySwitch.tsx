import React from "react";

import styles from "./CurrencySelect.module.scss";

interface OptionProps {
  id: string;
  label: string;
}

const Currency = ({ id, label }: OptionProps) => {
  return (
    <>
      <input type="radio" name="currency" id={id} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export const CurrencySwitch = () => {
  return (
    <>
      <h2 className={styles.inputGroupTitle}>Валюта</h2>

      <div className={styles.switchBox}>
        <Currency id="ruble" label="RUB" />
        <Currency id="dollar" label="USD" />
        <Currency id="euro" label="EUR" />
      </div>
    </>
  );
};
