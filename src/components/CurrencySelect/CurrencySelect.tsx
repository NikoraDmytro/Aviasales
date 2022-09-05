import React from "react";

import styles from "./CurrencySelect.module.scss";

export const CurrencySelect = () => {
  return (
    <>
      <h2 className={styles.inputGroupTitle}>Валюта</h2>

      <div>
        <input type="radio" name="currency" id="ruble" />
        <label htmlFor="ruble">RUB</label>

        <input type="radio" name="currency" id="dollar" />
        <label htmlFor="dollar">USD</label>

        <input type="radio" name="currency" id="euro" />
        <label htmlFor="euro">EUR</label>
      </div>
    </>
  );
};
